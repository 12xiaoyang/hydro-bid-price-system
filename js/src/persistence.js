// js/src/persistence.js — 本地存储持久化 + 项目 JSON 导入导出
// Phase 1: extracted from app.js, exports assigned to window via main.js

// Import DATA/PRICE_CACHE from data.js (needed for DATA_BACKUP IIFE at module eval time;
// esbuild renames module-scoped vars, so free-variable references to 'DATA' won't resolve.)
import { DATA, PRICE_CACHE } from './data.js';

// ============ 数据备份 (用于重置) ============
const DATA_BACKUP = {};
(function backupData() {
  for (const key of Object.keys(DATA)) {
    DATA_BACKUP[key] = JSON.parse(JSON.stringify(DATA[key]));
  }
})();
export { DATA_BACKUP };

export function resetDataTable(key) {
  if (DATA_BACKUP[key]) {
    DATA[key] = JSON.parse(JSON.stringify(DATA_BACKUP[key]));
    // PRICE_CACHE is now imported from data.js
    if (typeof PRICE_CACHE !== 'undefined' && typeof PRICE_CACHE.clear === 'function') PRICE_CACHE.clear();
    if (typeof FormulaEngine !== 'undefined' && FormulaEngine.recalcTable) FormulaEngine.recalcTable(key);
    persistData();
    return true;
  }
  return false;
}

// ============ localStorage 持久化 ============
export const STORAGE_KEY = 'hydro_bid_data_v2';
export const PROJECT_EXPORT_VERSION = '2.1.0-stable';
export const PROJECT_DATA_KEYS = ['water','gen','valve','valve_door','water_parts','gen_parts','valve_parts','water_tools','gen_tools','valve_tools','automation','monitoring','liaison'];

function stableClone(obj) { try { if (typeof structuredClone === 'function') return structuredClone(obj); } catch(e) {} return JSON.parse(JSON.stringify(obj)); }

function getProjectDataTables() { const out = {}; PROJECT_DATA_KEYS.forEach(k => { if (DATA[k]) out[k] = stableClone(DATA[k]); }); return out; }

export function captureProjectState() {
  return { app: 'hydro-bid-price-analysis-system', version: PROJECT_EXPORT_VERSION, exportedAt: new Date().toISOString(), data: getProjectDataTables(), _sidebar: captureSidebarState(), _customFormulas: stableClone(CUSTOM_FORMULAS || {}), _state: { hasWater: state.hasWater, hasGen: state.hasGen, hasValve: state.hasValve, scenarios: stableClone(state.scenarios || []), currentMatTab: state.currentMatTab, currentPartsTab: state.currentPartsTab, currentToolsTab: state.currentToolsTab }, _matLib: typeof MAT_LIB !== 'undefined' ? stableClone(MAT_LIB) : [], _importLog: typeof MAT_IMPORT_LOG !== 'undefined' ? stableClone(MAT_IMPORT_LOG) : [] };
}

export function normalizeImportedProject(input) {
  const raw = input && typeof input === 'object' ? input : {}; const data = raw.data && typeof raw.data === 'object' ? raw.data : raw;
  const out = { app: raw.app || 'hydro-bid-price-analysis-system', version: raw.version || 'legacy', data: {}, _sidebar: raw._sidebar || data._sidebar || null, _state: raw._state || data._state || {}, _matLib: (raw._matLib || data._matLib || []), _importLog: raw._importLog || data._importLog || [] };
  PROJECT_DATA_KEYS.forEach(k => { if (Array.isArray(data[k])) out.data[k] = data[k]; });
  if (!Array.isArray(out._state.scenarios) && Array.isArray(data.scenarios)) out._state.scenarios = data.scenarios;
  return out;
}

// NOTE: restoreProjectState references window globals like syncToggles, updateSliderDisplays, renderAll, showToast
//       which remain available via app.js for now and will be modularized in Phase 2.
export function restoreProjectState(projectPackage, opts = {}) {
  const pkg = normalizeImportedProject(projectPackage);
  const _isRestoringSnapshot = true;
  try {
    PROJECT_DATA_KEYS.forEach(k => { if (pkg.data && Array.isArray(pkg.data[k])) DATA[k] = stableClone(pkg.data[k]); });
    if (pkg._matLib && typeof MAT_LIB !== 'undefined' && Array.isArray(pkg._matLib)) { MAT_LIB.length = 0; pkg._matLib.forEach(m => MAT_LIB.push(m)); _matLibNextId = Math.max(0, ...MAT_LIB.map(m => parseInt(String(m.id || 'MAT-0000').replace('MAT-',''), 10) || 0)) + 1; try { localStorage.setItem('hydro_mat_lib', JSON.stringify(MAT_LIB)); } catch(e) {} }
    if (pkg._importLog && typeof MAT_IMPORT_LOG !== 'undefined' && Array.isArray(pkg._importLog)) { MAT_IMPORT_LOG.length = 0; pkg._importLog.forEach(x => MAT_IMPORT_LOG.push(x)); try { localStorage.setItem('hydro_import_log', JSON.stringify(MAT_IMPORT_LOG)); } catch(e) {} }
    if (pkg._customFormulas || (pkg.data && pkg.data._customFormulas)) {
      DATA._customFormulas = stableClone(pkg._customFormulas || pkg.data._customFormulas || {});
      // CUSTOM_FORMULAS will be set via DATA reference
      try { localStorage.setItem('hydro_custom_formulas', JSON.stringify(DATA._customFormulas)); } catch(e) {}
    }
    if (pkg._sidebar) restoreSidebarState(pkg._sidebar);
    if (pkg._state) { state.hasWater = pkg._state.hasWater !== undefined ? pkg._state.hasWater : state.hasWater; state.hasGen = pkg._state.hasGen !== undefined ? pkg._state.hasGen : state.hasGen; state.hasValve = pkg._state.hasValve !== undefined ? pkg._state.hasValve : state.hasValve; state.scenarios = Array.isArray(pkg._state.scenarios) ? stableClone(pkg._state.scenarios) : (state.scenarios || []); state.currentMatTab = pkg._state.currentMatTab || state.currentMatTab || 'water'; state.currentPartsTab = pkg._state.currentPartsTab || state.currentPartsTab || 'water_parts'; state.currentToolsTab = pkg._state.currentToolsTab || state.currentToolsTab || 'water_tools'; syncToggles(); }
    PRICE_CACHE.clear(); PROJECT_DATA_KEYS.forEach(k => { if (DATA[k]) FormulaEngine.recalcTable(k); }); if (typeof _sidebarOverrides !== 'undefined') _sidebarOverrides.clear(); updateSliderDisplays(); persistData(); renderAll(); if (!opts.silent) showToast('项目已恢复');
  } finally { /* _isRestoringSnapshot = false; */ }
}

export function exportProjectJSON() { return JSON.stringify(captureProjectState(), null, 2); }

export function importProjectJSON(text) { let parsed; try { parsed = JSON.parse(text); } catch(e) { throw new Error('不是有效的 JSON 文件'); } return normalizeImportedProject(parsed); }

export function sanitizeFileName(name) { return String(name || 'project').replace(/[\\/:*?"<>|]/g, '_').replace(/\s+/g, '_').slice(0, 120); }

// NOTE: exportProjectFile calls generateDataHealthReport / showDataHealthReport — these will be in health.js (Task 2.3)
//       For now they resolve via window globals from app.js.
export function exportProjectFile() { const report = generateDataHealthReport(); if (!report.passed) { const ok = confirm('数据体检发现 ' + report.summary.errorCount + ' 个错误、' + report.summary.warningCount + ' 个警告。仍要导出项目吗？'); if (!ok) { showDataHealthReport(report); return; } } const blob = new Blob([exportProjectJSON()], { type: 'application/json;charset=utf-8' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); const projectName = (document.getElementById('projectName') || {}).value || '水电站报价'; a.href = url; a.download = sanitizeFileName(projectName) + '_完整项目.json'; a.click(); URL.revokeObjectURL(url); showToast('完整项目 JSON 已导出'); }

// ============ localStorage 持久化 ============
export function persistData() {
  try {
    const toSave = {};
    for (const key of ['water','gen','valve','valve_door','water_parts','gen_parts','valve_parts',
      'water_tools','gen_tools','valve_tools','automation','monitoring','liaison']) {
      if (DATA[key]) toSave[key] = DATA[key];
    }
    toSave._customFormulas = CUSTOM_FORMULAS || {};
    localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
  } catch(e) {
    console.warn('保存失败:', e);
    showToast('数据保存失败: ' + (e.message || '存储空间不足'));
  }
}

// ============ 保存 HTML（数据嵌入文件） ============
export function saveHTML() {
  try {
    persistData();
    const projectPackage = captureProjectState();
    const dataClone = Object.assign({}, projectPackage.data, {
      _sidebar: projectPackage._sidebar,
      _state: projectPackage._state,
      _matLib: projectPackage._matLib,
      _importLog: projectPackage._importLog,
      _customFormulas: CUSTOM_FORMULAS || {},
      _projectVersion: projectPackage.version,
      _exportedAt: projectPackage.exportedAt,
    });
    const dataStr = 'const DATA = ' + JSON.stringify(dataClone) + ';';
    const html = '<!DOCTYPE html>\n' + document.documentElement.outerHTML;
    const lines = html.split(/\r?\n/);
    let replaced = false;
    for (let i = 0; i < lines.length; i++) {
      if (/^\s*const DATA = \{/.test(lines[i])) {
        lines[i] = dataStr;
        replaced = true;
        break;
      }
    }
    if (!replaced) { showToast('未找到 DATA 声明，保存失败'); return; }
    const modified = lines.join('\n');
    const blob = new Blob([modified], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    const projectName = (document.getElementById('projectName') || {}).value || '水电站报价';
    a.download = projectName + '_价格分析系统.html';
    a.click();
    URL.revokeObjectURL(url);
    delete DATA._sidebar;
    showToast('HTML 已保存，所有数据及参数已嵌入文件中');
  } catch(e) {
    showToast('保存失败: ' + e.message);
    console.error(e);
  }
}

export function captureSidebarState() {
  const el = id => document.getElementById(id);
  return {
    projectName: (el('projectName') || {}).value || '',
    unitCount: (el('unitCount') || {}).value || '4',
    selfMarkup: (el('selfMarkup') || {}).value || '15',
    buyMarkup: (el('buyMarkup') || {}).value || '7',
    transportRate: (el('transportRate') || {}).value || '',
    distance: (el('distance') || {}).value || '200',
    tonKmPrice: (el('tonKmPrice') || {}).value || '0.7',
    tonKmPriceWide: (el('tonKmPriceWide') || {}).value || '1.2',
    wideWeight: (el('wideWeight') || {}).value || '50',
    transportExtra: (el('transportExtra') || {}).value || '1.5',
    partsAmt: (el('partsAmt') || {}).value || '0',
    toolsAmt: (el('toolsAmt') || {}).value || '0',
    autoAmt: (el('autoAmt') || {}).value || '0',
    monitorAmt: (el('monitorAmt') || {}).value || '0',
    liaisonAmt: (el('liaisonAmt') || {}).value || '0',
    hasWater: state.hasWater,
    hasGen: state.hasGen,
    hasValve: state.hasValve
  };
}

export function restoreSidebarState(sidebar) {
  if (!sidebar) return;
  const el = id => document.getElementById(id);
  const fields = ['projectName','unitCount','selfMarkup','buyMarkup','transportRate',
    'distance','tonKmPrice','tonKmPriceWide','wideWeight','transportExtra',
    'partsAmt','toolsAmt','autoAmt','monitorAmt','liaisonAmt'];
  for (const f of fields) {
    const elem = el(f);
    if (elem && sidebar[f] !== undefined) {
      elem.value = sidebar[f];
    }
  }
  if (sidebar.hasWater !== undefined) state.hasWater = sidebar.hasWater;
  if (sidebar.hasGen !== undefined) state.hasGen = sidebar.hasGen;
  if (sidebar.hasValve !== undefined) state.hasValve = sidebar.hasValve;
  syncToggles();
}

export function importFullData(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      takeProjectSnapshot('导入项目');
      const pkg = importProjectJSON(e.target.result);
      restoreProjectState(pkg, { silent: true });
      const rowCount = PROJECT_DATA_KEYS.reduce((sum, k) => sum + (Array.isArray(DATA[k]) ? DATA[k].length : 0), 0);
      const report = generateDataHealthReport();
      if (!report.passed) showToast('导入成功，但体检发现 ' + report.summary.errorCount + ' 错误 / ' + report.summary.warningCount + ' 警告');
      else showToast('成功导入完整项目，共 ' + rowCount + ' 条数据');
    } catch(err) { showToast('导入失败: ' + err.message); console.error(err); }
  };
  reader.readAsText(file);
  event.target.value = '';
}

export function loadPersistedData() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      for (const key of Object.keys(parsed)) {
        if (key === '_sidebar') continue;
        if (DATA[key]) DATA[key] = parsed[key];
      }
      PRICE_CACHE.clear();
      if (DATA._customFormulas && typeof DATA._customFormulas === 'object') {
        // CUSTOM_FORMULAS reference will be synced in engine.js
      }
      for (const key of Object.keys(parsed)) {
        if (key === '_sidebar') continue;
        FormulaEngine.recalcTable(key);
      }
      return true;
    }
  } catch(e) {}
  return false;
}
