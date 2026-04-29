
// ============ 数据备份 (用于重置) ============
const DATA_BACKUP = {};
(function backupData() {
  for (const key of Object.keys(DATA)) {
    DATA_BACKUP[key] = JSON.parse(JSON.stringify(DATA[key]));
  }
})();

function resetDataTable(key) {
  if (DATA_BACKUP[key]) {
    DATA[key] = JSON.parse(JSON.stringify(DATA_BACKUP[key]));
    PRICE_CACHE.clear();
    FormulaEngine.recalcTable(key);
    persistData();
    return true;
  }
  return false;
}

// ============ localStorage 持久化 ============
const STORAGE_KEY = 'hydro_bid_data_v2';
// ============ 稳定性增强：统一项目包 / 快照 / 撤销 / 体检 / 安全公式 ============
const PROJECT_EXPORT_VERSION = '2.1.0-stable';
const PROJECT_DATA_KEYS = ['water','gen','valve','valve_door','water_parts','gen_parts','valve_parts','water_tools','gen_tools','valve_tools','automation','monitoring','liaison'];
const SNAPSHOT_MAX = 60;
const _projectUndoStack = [];
const _projectRedoStack = [];
let _isRestoringSnapshot = false;
function stableClone(obj) { try { if (typeof structuredClone === 'function') return structuredClone(obj); } catch(e) {} return JSON.parse(JSON.stringify(obj)); }
function getProjectDataTables() { const out = {}; PROJECT_DATA_KEYS.forEach(k => { if (DATA[k]) out[k] = stableClone(DATA[k]); }); return out; }
function captureProjectState() {
  return { app: 'hydro-bid-price-analysis-system', version: PROJECT_EXPORT_VERSION, exportedAt: new Date().toISOString(), data: getProjectDataTables(), _sidebar: captureSidebarState(), _customFormulas: stableClone(CUSTOM_FORMULAS || {}), _state: { hasWater: state.hasWater, hasGen: state.hasGen, hasValve: state.hasValve, scenarios: stableClone(state.scenarios || []), currentMatTab: state.currentMatTab, currentPartsTab: state.currentPartsTab, currentToolsTab: state.currentToolsTab }, _matLib: typeof MAT_LIB !== 'undefined' ? stableClone(MAT_LIB).map(({usage_rate, default_usage, u, ...m}) => m) : [], _importLog: typeof MAT_IMPORT_LOG !== 'undefined' ? stableClone(MAT_IMPORT_LOG) : [] };
}
function normalizeImportedProject(input) {
  const raw = input && typeof input === 'object' ? input : {}; const data = raw.data && typeof raw.data === 'object' ? raw.data : raw;
  const out = { app: raw.app || 'hydro-bid-price-analysis-system', version: raw.version || 'legacy', data: {}, _sidebar: raw._sidebar || data._sidebar || null, _state: raw._state || data._state || {}, _matLib: (raw._matLib || data._matLib || []).map(({usage_rate, default_usage, u, ...m}) => m), _importLog: raw._importLog || data._importLog || [] };
  PROJECT_DATA_KEYS.forEach(k => { if (Array.isArray(data[k])) out.data[k] = data[k]; });
  if (!Array.isArray(out._state.scenarios) && Array.isArray(data.scenarios)) out._state.scenarios = data.scenarios;
  return out;
}
function restoreProjectState(projectPackage, opts = {}) {
  const pkg = normalizeImportedProject(projectPackage); _isRestoringSnapshot = true;
  try {
    PROJECT_DATA_KEYS.forEach(k => { if (pkg.data && Array.isArray(pkg.data[k])) DATA[k] = stableClone(pkg.data[k]); });
    if (pkg._matLib && typeof MAT_LIB !== 'undefined' && Array.isArray(pkg._matLib)) { MAT_LIB.length = 0; pkg._matLib.forEach(({usage_rate, default_usage, u, ...m}) => MAT_LIB.push(m)); _matLibNextId = Math.max(0, ...MAT_LIB.map(m => parseInt(String(m.id || 'MAT-0000').replace('MAT-',''), 10) || 0)) + 1; try { localStorage.setItem('hydro_mat_lib', JSON.stringify(MAT_LIB)); } catch(e) {} }
    if (pkg._importLog && typeof MAT_IMPORT_LOG !== 'undefined' && Array.isArray(pkg._importLog)) { MAT_IMPORT_LOG.length = 0; pkg._importLog.forEach(x => MAT_IMPORT_LOG.push(x)); try { localStorage.setItem('hydro_import_log', JSON.stringify(MAT_IMPORT_LOG)); } catch(e) {} }
    if (pkg._customFormulas || (pkg.data && pkg.data._customFormulas)) {
      DATA._customFormulas = stableClone(pkg._customFormulas || pkg.data._customFormulas || {});
      CUSTOM_FORMULAS = DATA._customFormulas;
      try { localStorage.setItem('hydro_custom_formulas', JSON.stringify(CUSTOM_FORMULAS)); } catch(e) {}
    }
    if (pkg._sidebar) restoreSidebarState(pkg._sidebar);
    if (pkg._state) { state.hasWater = pkg._state.hasWater !== undefined ? pkg._state.hasWater : state.hasWater; state.hasGen = pkg._state.hasGen !== undefined ? pkg._state.hasGen : state.hasGen; state.hasValve = pkg._state.hasValve !== undefined ? pkg._state.hasValve : state.hasValve; state.scenarios = Array.isArray(pkg._state.scenarios) ? stableClone(pkg._state.scenarios) : (state.scenarios || []); state.currentMatTab = pkg._state.currentMatTab || state.currentMatTab || 'water'; state.currentPartsTab = pkg._state.currentPartsTab || state.currentPartsTab || 'water_parts'; state.currentToolsTab = pkg._state.currentToolsTab || state.currentToolsTab || 'water_tools'; syncToggles(); }
    PRICE_CACHE.clear(); PROJECT_DATA_KEYS.forEach(k => { if (DATA[k]) FormulaEngine.recalcTable(k); }); if (typeof _sidebarOverrides !== 'undefined') _sidebarOverrides.clear(); updateSliderDisplays(); persistData(); renderAll(); if (!opts.silent) showToast('✅ 项目已恢复');
  } finally { _isRestoringSnapshot = false; }
}
function exportProjectJSON() { return JSON.stringify(captureProjectState(), null, 2); }
function importProjectJSON(text) { let parsed; try { parsed = JSON.parse(text); } catch(e) { throw new Error('不是有效的 JSON 文件'); } return normalizeImportedProject(parsed); }
function sanitizeFileName(name) { return String(name || 'project').replace(/[\\/:*?"<>|]/g, '_').replace(/\s+/g, '_').slice(0, 120); }
function exportProjectFile() { const report = generateDataHealthReport(); if (!report.passed) { const ok = confirm('数据体检发现 ' + report.summary.errorCount + ' 个错误、' + report.summary.warningCount + ' 个警告。仍要导出项目吗？'); if (!ok) { showDataHealthReport(report); return; } } const blob = new Blob([exportProjectJSON()], { type: 'application/json;charset=utf-8' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); const projectName = (document.getElementById('projectName') || {}).value || '水电站报价'; a.href = url; a.download = sanitizeFileName(projectName) + '_完整项目.json'; a.click(); URL.revokeObjectURL(url); showToast('✅ 完整项目 JSON 已导出'); }
function takeProjectSnapshot(label) { if (_isRestoringSnapshot) return; _projectUndoStack.push({ id: Date.now() + '_' + Math.random().toString(16).slice(2), label: label || '操作', createdAt: new Date().toISOString(), state: captureProjectState() }); while (_projectUndoStack.length > SNAPSHOT_MAX) _projectUndoStack.shift(); _projectRedoStack.length = 0; }
function undoProjectSnapshot() { const snap = _projectUndoStack.pop(); if (!snap) { showToast('没有可撤销的操作'); return false; } _projectRedoStack.push({ id: Date.now() + '_' + Math.random().toString(16).slice(2), label: '重做点', createdAt: new Date().toISOString(), state: captureProjectState() }); restoreProjectState(snap.state, { silent: true }); showToast('↩ 已撤销：' + snap.label); return true; }
function redoProjectSnapshot() { const snap = _projectRedoStack.pop(); if (!snap) { showToast('没有可重做的操作'); return false; } _projectUndoStack.push({ id: Date.now() + '_' + Math.random().toString(16).slice(2), label: '撤销点', createdAt: new Date().toISOString(), state: captureProjectState() }); restoreProjectState(snap.state, { silent: true }); showToast('↪ 已重做'); return true; }
function escapeRegExp(s) { return String(s).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
function evaluateFormulaSafe(expr, row) {
  const source = String(expr || '').trim();
  if (!source) return null;
  const blocked = [/\bwindow\b/i,/\bdocument\b/i,/\bglobalThis\b/i,/\blocalStorage\b/i,
    /\bsessionStorage\b/i,/\bfetch\b/i,/\beval\b/i,/\bFunction\b/i,
    /\bconstructor\b/i,/\bprototype\b/i,/=>/,/;/,/`/];
  if (blocked.some(r => r.test(source))) throw new Error('公式包含不安全内容');
  let resolved = source;
  if (row && typeof row === 'object') {
    // Only substitute keys that appear in the expression AND have a numeric value
    // Sort by key length desc to avoid partial substitution (e.g. "unit_price" before "price")
    Object.keys(row).sort((a, b) => b.length - a.length).forEach(k => {
      const re = new RegExp('\\b' + escapeRegExp(k) + '\\b', 'gi');
      if (!re.test(resolved)) return; // skip keys not referenced in formula
      const v = parseFloat(row[k]);
      if (!isNaN(v)) {
        resolved = resolved.replace(new RegExp('\\b' + escapeRegExp(k) + '\\b', 'gi'), String(v));
      } else {
        // Key is referenced but value is non-numeric (null/string/undefined)
        // Replace with 0 to avoid breaking the expression, and log
        resolved = resolved.replace(new RegExp('\\b' + escapeRegExp(k) + '\\b', 'gi'), '0');
      }
    });
  }
  if (!/^[\d\s+\-*/().,%<>=!&|?:]+$/.test(resolved)) {
    throw new Error('公式只能包含数字、比较符和基础运算符（未识别变量: ' +
      (resolved.match(/[a-zA-Z_][a-zA-Z0-9_]*/g) || []).join(', ') + '）');
  }
  const result = new Function('"use strict"; return (' + resolved + ');')();
  if (typeof result === 'number' && isFinite(result)) return Math.round(result * 10000) / 10000;
  if (typeof result === 'boolean') return result ? 1 : 0;
  throw new Error('公式结果无效');
}
function generateDataHealthReport() { const issues = []; const add = (level, code, message, suggestion) => issues.push({ level, code, message, suggestion: suggestion || '' }); const sidebar = captureSidebarState(); if (!sidebar.projectName) add('warning','PROJECT_NAME_EMPTY','项目名称为空','建议补充项目名称，便于导出和归档'); if ((parseFloat(sidebar.unitCount) || 0) <= 0) add('error','UNIT_COUNT_INVALID','机组台数必须大于 0','请在左侧项目信息中填写有效台数'); PROJECT_DATA_KEYS.forEach(k => { if (!Array.isArray(DATA[k])) { add('error','TABLE_INVALID', k + ' 不是有效数组','请重新导入或恢复默认数据'); return; } DATA[k].forEach((row, idx) => { if (!row || typeof row !== 'object') add('error','ROW_INVALID', k + ' 第 ' + (idx+1) + ' 行不是对象'); if (row && 'amount' in row && row.amount !== null && row.amount !== '' && isNaN(parseFloat(row.amount))) add('error','AMOUNT_INVALID', k + ' 第 ' + (idx+1) + ' 行金额不是数字'); if (row && 'total' in row && row.total !== null && row.total !== '' && isNaN(parseFloat(row.total))) add('error','TOTAL_INVALID', k + ' 第 ' + (idx+1) + ' 行合计不是数字'); if (row && 'weight' in row && parseFloat(row.weight) < 0) add('warning','WEIGHT_NEGATIVE', k + ' 第 ' + (idx+1) + ' 行重量为负数'); if (row && 'amount' in row && parseFloat(row.amount) < 0) add('warning','AMOUNT_NEGATIVE', k + ' 第 ' + (idx+1) + ' 行金额为负数'); }); }); ['water','gen','valve','valve_door'].forEach(k => { if (typeof validateTableConsistency === 'function') { try { validateTableConsistency(k).forEach(x => add('warning','SUBTOTAL_INCONSISTENT', k + ' 汇总行 ' + (x.seq || x.idx) + ' 与子项合计不一致','可点击“修复汇总”或“一键修复所有不一致”')); } catch(e) {} } }); if (!state.scenarios || !Array.isArray(state.scenarios)) add('warning','SCENARIOS_INVALID','方案数据不是数组','系统会在下次保存方案时修复'); const errorCount = issues.filter(x=>x.level==='error').length; const warningCount = issues.filter(x=>x.level==='warning').length; return { passed: errorCount === 0, summary: { errorCount, warningCount, totalCount: issues.length }, issues, checkedAt: new Date().toISOString() }; }
function showDataHealthReport(report) { const r = report || generateDataHealthReport(); const lines = []; lines.push('数据体检报告：' + (r.passed ? '通过' : '未通过')); lines.push('错误 ' + r.summary.errorCount + ' 个，警告 ' + r.summary.warningCount + ' 个，总计 ' + r.summary.totalCount + ' 项'); lines.push('检查时间：' + r.checkedAt); if (r.issues.length) { lines.push(''); r.issues.slice(0, 60).forEach((x, i) => lines.push((i+1) + '. [' + (x.level === 'error' ? '错误' : '警告') + '] ' + x.message + (x.suggestion ? '\n   建议：' + x.suggestion : ''))); if (r.issues.length > 60) lines.push('... 其余 ' + (r.issues.length - 60) + ' 项已省略'); } alert(lines.join('\n')); }

function persistData() {
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
    showToast('⚠️ 数据保存失败: ' + (e.message || '存储空间不足'));
  }
}

// ============ 保存 HTML（数据嵌入文件） ============
function saveHTML() {
  try {
    // 保存表格数据到 localStorage，保证打开保存文件时能读到
    persistData();
    // 同时捕获侧边栏参数（这些不在 DATA 中）
    const projectPackage = captureProjectState();
    const dataClone = Object.assign({}, projectPackage.data, {
      _sidebar: projectPackage._sidebar,
      _state: projectPackage._state,
      _matLib: projectPackage._matLib,
      _importLog: projectPackage._importLog,
      _customFormulas: CUSTOM_FORMULAS || {},
      _projectVersion: projectPackage.version,
      _exportedAt: projectPackage.exportedAt,
      _customFormulas: CUSTOM_FORMULAS || {}
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
    if (!replaced) { showToast('❌ 未找到 DATA 声明，保存失败'); return; }
    const modified = lines.join('\n');
    const blob = new Blob([modified], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    const projectName = (document.getElementById('projectName') || {}).value || '水电站报价';
    a.download = projectName + '_价格分析系统.html';
    a.click();
    URL.revokeObjectURL(url);
    // 恢复 DATA 还原 _sidebar（避免 DATA 被污染）
    delete DATA._sidebar;
    showToast('✅ HTML 已保存，所有数据及参数已嵌入文件中');
  } catch(e) {
    showToast('❌ 保存失败: ' + e.message);
    console.error(e);
  }
}

function captureSidebarState() {
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

function restoreSidebarState(sidebar) {
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
  if (sidebar.hasWater !== undefined) {
    state.hasWater = sidebar.hasWater;
  }
  if (sidebar.hasGen !== undefined) {
    state.hasGen = sidebar.hasGen;
  }
  if (sidebar.hasValve !== undefined) {
    state.hasValve = sidebar.hasValve;
  }
  syncToggles();
}

function importFullData(event) {
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
      if (!report.passed) showToast('⚠️ 导入成功，但体检发现 ' + report.summary.errorCount + ' 错误 / ' + report.summary.warningCount + ' 警告');
      else showToast('✅ 成功导入完整项目，共 ' + rowCount + ' 条数据');
    } catch(err) { showToast('❌ 导入失败: ' + err.message); console.error(err); }
  };
  reader.readAsText(file);
  event.target.value = '';
}

function loadPersistedData() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      for (const key of Object.keys(parsed)) {
        if (key === '_sidebar') continue;
        if (DATA[key]) DATA[key] = parsed[key];
      }
      PRICE_CACHE.clear();
      for (const key of Object.keys(parsed)) {
        if (key === '_sidebar') continue;
        FormulaEngine.recalcTable(key);
      }
      return true;
    }
  } catch(e) {}
  return false;
}

function showToast(msg) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 1600);
}

// Store current config for focusNext reference
const _tableConfigs = {};

// Generate next sequence number after afterItem
function generateNextSeq(items, afterItem) {
  if (!afterItem || afterItem.seq === null || afterItem.seq === undefined) {
    return String(items.length + 1);
  }
  const afterSeq = String(afterItem.seq);
  // Handle non-numeric seq (e.g. "一", "序号", "人员", "工程师")
  const parts = afterSeq.split('.');
  const lastNum = parseInt(parts[parts.length - 1], 10);
  if (isNaN(lastNum)) {
    // For special labels, just use the next available integer
    return String(items.length + 1);
  }
  // Increment last segment
  parts[parts.length - 1] = String(lastNum + 1);
  let candidate = parts.join('.');
  // Resolve conflicts
  while (items.some(it => String(it.seq) === candidate)) {
    parts[parts.length - 1] = String(parseInt(parts[parts.length - 1], 10) + 1);
    candidate = parts.join('.');
  }
  return candidate;
}

// Generate child sequence number under a parent (e.g. "1.5" → "1.5.1")
function generateChildSeq(items, parentItem) {
  if (!parentItem || parentItem.seq === null || parentItem.seq === undefined) {
    return String(items.length + 1);
  }
  const parentSeq = String(parentItem.seq);
  // Only applies to BOM tables with numbered seq
  const parts = parentSeq.split('.');
  if (parts.every(p => isNaN(parseInt(p, 10)))) {
    return String(items.length + 1);
  }
  // Find max direct child number
  let maxChild = 0;
  items.forEach(it => {
    const s = String(it.seq || '');
    if (s.startsWith(parentSeq + '.')) {
      const rest = s.substring(parentSeq.length + 1);
      if (!rest.includes('.')) {
        const n = parseInt(rest, 10);
        if (!isNaN(n) && n > maxChild) maxChild = n;
      }
    }
  });
  return parentSeq + '.' + (maxChild + 1);
}

// ============ 默认值 ============
const DEFAULTS = {
  projectName: "广西那读电站", unitCount: 4,
  waterWeight: 94.4, waterMat: 222.81, waterBuy: 145.42,
  genWeight: 234, genMat: 375.42, genBuy: 123.04,
  valveWeight: 57.7, valveBuy: 80,
  selfMarkup: 100, buyMarkup: 10,
  distance: 3700, tonKmPrice: 0.9, tonKmPriceWide: 0, wideWeight: 0, transportExtra: 1.05,
  partsAmt: 48.40, toolsAmt: 26.41, autoAmt: 0, monitorAmt: 0, liaisonAmt: 0
};

// ============ 状态 ============
const state = {
  hasWater: 1, hasGen: 1, hasValve: 1,
  scenarios: [],
  currentMatTab: 'water',
  currentPartsTab: 'water_parts',
  currentToolsTab: 'water_tools'
};

// ============ 工具 ============
const fmt = (n, d=0) => {
  if (!isFinite(n) || n === null) return '—';
  return n.toLocaleString('zh-CN', { minimumFractionDigits: d, maximumFractionDigits: d });
};

function getInputs() {
  const num = id => parseFloat(document.getElementById(id).value) || 0;
  return {
    projectName: document.getElementById('projectName').value,
    unitCount: num('unitCount'),
    hasWater: state.hasWater, hasGen: state.hasGen, hasValve: state.hasValve,
    waterWeight: num('waterWeight'), waterMat: num('waterMat'), waterBuy: num('waterBuy'),
    genWeight: num('genWeight'), genMat: num('genMat'), genBuy: num('genBuy'),
    valveWeight: num('valveWeight'), valveBuy: num('valveBuy'),
    selfMarkup: num('selfMarkup') / 100, buyMarkup: num('buyMarkup') / 100,
    distance: num('distance'), tonKmPrice: num('tonKmPrice'),
    tonKmPriceWide: num('tonKmPriceWide'), wideWeight: num('wideWeight'),
    transportExtra: num('transportExtra'),
    partsAmt: num('partsAmt'), toolsAmt: num('toolsAmt'),
    autoAmt: num('autoAmt'), monitorAmt: num('monitorAmt'), liaisonAmt: num('liaisonAmt')
  };
}

// ============ 从材料明细汇总到侧边栏 ============
function isSubtotalRow(item, allItems) {
  if (!item.seq) return false;
  const seqStr = String(item.seq);
  // Root node "一": parent of all depth-1 rows (pure numbers like "1", "2", etc.)
  if (seqStr === '一') {
    return allItems.some(other => other !== item && /^\d+$/.test(String(other.seq || '')));
  }
  // General case: a row is a subtotal if another row's seq starts with this seq + "."
  const prefix = seqStr + '.';
  return allItems.some(other => other !== item && String(other.seq || '').startsWith(prefix));
}

// Check if childSeq is a DIRECT child of parentSeq (exactly one level deeper)
function isDirectChild(parentSeq, childSeq) {
  const p = String(parentSeq);
  const c = String(childSeq || '');
  if (p === '一') {
    // Direct children of root are pure-number seqs like "1", "2", "13"
    return /^\d+$/.test(c);
  }
  if (!c.startsWith(p + '.')) return false;
  return c.split('.').length === p.split('.').length + 1;
}

function aggregateMatTable(dataKeys) {
  const keys = Array.isArray(dataKeys) ? dataKeys : [dataKeys];
  let weight = 0, mat = 0, buy = 0, buyWeight = 0;
  keys.forEach(dk => {
    const items = DATA[dk];
    if (!items) return;
    // 重量：直接读根节点"一"的 weight（原始 Excel 录入的机器目标重量）
    const rootRow = items.find(it => String(it.seq) === '一');
    if (rootRow) {
      weight += parseFloat(rootRow.weight) || 0;
      mat += parseFloat(rootRow.amount) || 0;
    }
    // 外购价 & 外购件重量：累加所有外购叶子节点（is_buy=true 且非汇总行）
    items.forEach(it => {
      if (isSubtotalRow(it, items)) return;
      if (it.is_buy) {
        buy += parseFloat(it.amount) || 0;
        buyWeight += parseFloat(it.weight) || 0;
      }
    });
  });
  return {
    weight: parseFloat(weight.toFixed(4)),
    mat: parseFloat(mat.toFixed(4)),
    buy: parseFloat(buy.toFixed(4)),
    buyWeight: parseFloat(buyWeight.toFixed(4))
  };
}

function aggregatePartsTools(dataKeys) {
  const keys = Array.isArray(dataKeys) ? dataKeys : [dataKeys];
  let total = 0;
  // valve_parts / valve_tools 的金额字段单位为"元"，需要除以10000换算为万元
  // water_parts / gen_parts / water_tools / gen_tools 的 self/buy 字段单位为"万元"
  const yuanKeys = new Set(['valve_parts', 'valve_tools']);
  keys.forEach(dk => {
    const items = DATA[dk];
    if (!items) return;
    const isYuan = yuanKeys.has(dk);
    items.forEach(it => {
      let rowVal = 0;
      if (it.total !== null && it.total !== undefined) rowVal = parseFloat(it.total) || 0;
      else rowVal = (parseFloat(it.self) || 0) + (parseFloat(it.buy) || 0);
      total += isYuan ? rowVal / YUAN_TO_WAN : rowVal;
    });
  });
  return parseFloat(total.toFixed(4));
}

function aggregateSimple(dataKeys) {
  const keys = Array.isArray(dataKeys) ? dataKeys : [dataKeys];
  let total = 0;
  // automation / monitoring / liaison 的 total 字段单位为"元"，需要除以10000换算为万元
  const yuanKeys = new Set(['automation', 'monitoring', 'liaison']);
  keys.forEach(dk => {
    const items = DATA[dk];
    if (!items) return;
    const isYuan = yuanKeys.has(dk);
    items.forEach(it => {
      // 跳过 liaison/automation 中的标题行（seq为非数字字符串）
      if ((dk === 'liaison' || dk === 'automation') && it.seq !== null && it.seq !== undefined) {
        const seqStr = String(it.seq);
        if (isNaN(parseInt(seqStr, 10)) || !/^\d/.test(seqStr.trim())) return;
      }
      const val = parseFloat(it.total) || 0;
      total += isYuan ? val / YUAN_TO_WAN : val;
    });
  });
  return parseFloat(total.toFixed(4));
}

// 阀门专用汇总：整体外购，重量和外购价均直接取根节点"一"的数据
function aggregateMatTableValve(dataKey) {
  const items = DATA[dataKey];
  if (!items) return { weight: 0, mat: 0, buy: 0, buyWeight: 0 };
  const rootRow = items.find(it => String(it.seq) === '一');
  const weight  = parseFloat((rootRow && rootRow.weight) || 0);
  const mat     = parseFloat((rootRow && rootRow.amount) || 0);
  // 阀门整体外购：外购价 = 总材料价，外购重量 = 总重量
  return {
    weight:    parseFloat(weight.toFixed(4)),
    mat:       parseFloat(mat.toFixed(4)),
    buy:       parseFloat(mat.toFixed(4)),     // 全部外购
    buyWeight: parseFloat(weight.toFixed(4))  // 外购重量 = 整机重量
  };
}


// Validate that every subtotal row equals the sum of its direct children
function getEnabledPartsKeys() {
  const keys = [];
  if (state.hasWater) keys.push('water_parts');
  if (state.hasGen) keys.push('gen_parts');
  if (state.hasValve) keys.push('valve_parts');
  return keys;
}
function getEnabledToolsKeys() {
  const keys = [];
  if (state.hasWater) keys.push('water_tools');
  if (state.hasGen) keys.push('gen_tools');
  if (state.hasValve) keys.push('valve_tools');
  return keys;
}

// 汇总备件/工具重量（工具表有 weight 字段，备件表无则返回0）
function aggregatePartsToolsWeight(dataKeys) {
  const keys = Array.isArray(dataKeys) ? dataKeys : [dataKeys];
  let total = 0;
  keys.forEach(dk => {
    const items = DATA[dk];
    if (!items) return;
    items.forEach(it => {
      total += parseFloat(it.weight) || 0;
    });
  });
  return parseFloat(total.toFixed(4));
}

// 检查是否有至少一个主机类型被启用
function hasAnyMachine() {
  return state.hasWater || state.hasGen || state.hasValve;
}

// 获取当前可用的备件标签列表
function getAvailablePartsTabs() {
  const tabs = [];
  if (state.hasWater) tabs.push({ key: 'water_parts', label: '水机' });
  if (state.hasGen) tabs.push({ key: 'gen_parts', label: '发机' });
  if (state.hasValve) tabs.push({ key: 'valve_parts', label: '阀门' });
  return tabs;
}

// 获取当前可用的工具标签列表
function getAvailableToolsTabs() {
  const tabs = [];
  if (state.hasWater) tabs.push({ key: 'water_tools', label: '水机' });
  if (state.hasGen) tabs.push({ key: 'gen_tools', label: '发机' });
  if (state.hasValve) tabs.push({ key: 'valve_tools', label: '阀门' });
  return tabs;
}

// 自动切换到第一个可用的标签
function autoSwitchPartsTab() {
  const avail = getAvailablePartsTabs();
  if (avail.length > 0 && !avail.some(t => t.key === state.currentPartsTab)) {
    state.currentPartsTab = avail[0].key;
  } else if (avail.length === 0) {
    state.currentPartsTab = 'water_parts';
  }
}
function autoSwitchToolsTab() {
  const avail = getAvailableToolsTabs();
  if (avail.length > 0 && !avail.some(t => t.key === state.currentToolsTab)) {
    state.currentToolsTab = avail[0].key;
  } else if (avail.length === 0) {
    state.currentToolsTab = 'water_tools';
  }
}

function validateTableConsistency(dataKey) {
  const items = DATA[dataKey];
  if (!items) return [];
  const issues = [];
  items.forEach((it, i) => {
    if (!isSubtotalRow(it, items)) return;
    // 根节点"一"现在也参与自动汇总校验
    const parentSeq = String(it.seq);
    let expectedWeight = 0, expectedAmount = 0;
    items.forEach((child, ci) => {
      if (ci === i) return;
      if (isDirectChild(parentSeq, String(child.seq || ''))) {
        expectedWeight += parseFloat(child.weight) || 0;
        expectedAmount += parseFloat(child.amount) || 0;
      }
    });
    expectedWeight = parseFloat(expectedWeight.toFixed(4));
    expectedAmount = parseFloat(expectedAmount.toFixed(4));
    const actualWeight = parseFloat((parseFloat(it.weight) || 0).toFixed(4));
    const actualAmount = parseFloat((parseFloat(it.amount) || 0).toFixed(4));
    if (Math.abs(actualWeight - expectedWeight) > 0.001 || Math.abs(actualAmount - expectedAmount) > 0.001) {
      issues.push({
        dataKey, idx: i, seq: it.seq, name: it.name,
        actualWeight, expectedWeight, actualAmount, expectedAmount
      });
    }
  });
  return issues;
}

// Check all material BOM tables and return all inconsistencies
function validateAllTables() {
  return ['water','gen','valve','valve_door'].flatMap(k => validateTableConsistency(k));
}

// One-click fix: recalc all tables and re-sync
function fixAllConsistency() {
  ['water','gen','valve','valve_door','water_parts','gen_parts','valve_parts',
   'water_tools','gen_tools','valve_tools','automation','monitoring','liaison'].forEach(k => {
    FormulaEngine.recalcTable(k);
  });
  persistData();
  _sidebarOverrides.clear();
  renderAll();
  const issues = validateAllTables();
  if (issues.length === 0) {
    showToast('已重新计算所有汇总，数据一致');
  } else {
    showToast('已重新计算，但仍有 ' + issues.length + ' 处数据需要检查');
  }
}

// 材料明细→侧边栏的联动
let _syncing = false;
let _matComputed = {};          // 材料汇总计算值
let _sidebarOverrides = new Set(); // 用户手动修改过的侧边栏字段ID

function syncSidebarFromMaterials() {
  if (_syncing) return;
  _syncing = true;
  // 注意：不在此处清除 _sidebarOverrides，保留用户的手动修改
  // _sidebarOverrides 只在 fixAllConsistency() 或 双击恢复 时才清除
  try {
  // Recalc all tables to ensure fresh formula values
  ['water','gen','valve','valve_door','water_parts','gen_parts','valve_parts',
   'water_tools','gen_tools','valve_tools','automation','monitoring','liaison'].forEach(k => {
    FormulaEngine.recalcTable(k);
  });

  // 三大主机参数
  const waterAgg = aggregateMatTable('water');
  const genAgg = aggregateMatTable('gen');
  // 阀门：整体外购，只取 valve_door 表的根节点数据（valve 表为参考型号，不计入汇总）
  const valveAgg = aggregateMatTableValve('valve_door');

  // 存储材料汇总值 & 更新侧边栏（跳过用户手动修改过的字段）
  const enabledPartsKeys = getEnabledPartsKeys();
  const enabledToolsKeys = getEnabledToolsKeys();
  const partsTotal = aggregatePartsTools(enabledPartsKeys);
  const toolsTotal = aggregatePartsTools(enabledToolsKeys);
  // Per-machine breakdown
  const waterPartsAmt = aggregatePartsTools(['water_parts']);
  const genPartsAmt = aggregatePartsTools(['gen_parts']);
  const valvePartsAmt = aggregatePartsTools(['valve_parts']);
  const waterToolsAmt = aggregatePartsTools(['water_tools']);
  const genToolsAmt = aggregatePartsTools(['gen_tools']);
  const valveToolsAmt = aggregatePartsTools(['valve_tools']);
  const pairs = [
    ['waterWeight', waterAgg.weight], ['waterMat', waterAgg.mat], ['waterBuy', waterAgg.buy], ['waterBuyWeight', waterAgg.buyWeight],
    ['genWeight', genAgg.weight], ['genMat', genAgg.mat], ['genBuy', genAgg.buy], ['genBuyWeight', genAgg.buyWeight],
    ['partsAmt', partsTotal],
    ['toolsAmt', toolsTotal],
    ['waterPartsAmt', waterPartsAmt],
    ['genPartsAmt', genPartsAmt],
    ['valvePartsAmt', valvePartsAmt],
    ['waterToolsAmt', waterToolsAmt],
    ['genToolsAmt', genToolsAmt],
    ['valveToolsAmt', valveToolsAmt],
    ['partsToolsTotalAmt', partsTotal + toolsTotal],
    ['autoAmt', aggregateSimple('automation')],
    ['monitorAmt', aggregateSimple('monitoring')],
    ['liaisonAmt', aggregateSimple('liaison')]
  ];

  // 阀门三个字段：只更新参考值提示，不覆盖用户手动输入
  // 首次加载时（输入框为空）才自动填入材料明细值
  const valvePairs = [
    ['valveWeight', 'valveWeightRef', valveAgg.weight],
    ['valveBuy',    'valveBuyRef',    valveAgg.buy],
    ['valveBuyWeight', 'valveBuyWeightRef', valveAgg.buyWeight]
  ];
  valvePairs.forEach(([inputId, refId, val]) => {
    _matComputed[inputId] = val;
    const refEl = document.getElementById(refId);
    if (refEl) refEl.textContent = '参考: ' + (val > 0 ? val.toFixed(4) : '—');
    // 仅在输入框为空时自动填入
    const inputEl = document.getElementById(inputId);
    if (inputEl && (inputEl.value === '' || inputEl.value === '0' || parseFloat(inputEl.value) === 0)) {
      inputEl.value = val > 0 ? val : '';
    }
  });

  pairs.forEach(([id, val]) => {
    _matComputed[id] = val;
    if (!_sidebarOverrides.has(id)) {
      setSidebarVal(id, val);
    }
  });

  checkSidebarConsistency();
  } finally {
    _syncing = false;
  }
}

function setSidebarVal(id, val) {
  const el = document.getElementById(id);
  if (!el) return;
  const strVal = val.toFixed ? parseFloat(val.toFixed(4)).toString() : val.toString();
  // For readonly fields, show "--" if value is 0 and data might be empty
  const numVal = parseFloat(strVal);
  if (el.readOnly && numVal === 0) {
    el.value = '';
    el.placeholder = '请先完善材料明细';
    el.classList.add('auto-computed');
    el.title = '由材料明细表自动计算生成 · 明细表为空时显示"--"';
    return;
  }
  if (el.value !== strVal) {
    el.value = strVal;
  }
  el.placeholder = '--';
  el.classList.add('auto-computed');
  el.title = '由材料明细表自动计算生成';
}

function checkSidebarConsistency() {
  const fields = ['waterWeight','waterMat','waterBuy','waterBuyWeight','genWeight','genMat','genBuy','genBuyWeight',
    'partsAmt','toolsAmt','autoAmt','monitorAmt','liaisonAmt'];
  let sidebarWarnings = 0;
  fields.forEach(id => {
    const el = document.getElementById(id);
    if (!el || _matComputed[id] === undefined) return;
    const curVal = parseFloat(el.value);
    const compVal = parseFloat(_matComputed[id].toFixed(4));
    if (isNaN(curVal) && _matComputed[id] === 0) return;
    if (isNaN(curVal) || Math.abs(curVal - compVal) > 0.001) {
      el.classList.add('warning');
      el.title = `⚠ 与材料明细不一致 (汇总值: ${_matComputed[id].toFixed(4)})`;
      sidebarWarnings++;
    } else {
      el.classList.remove('warning');
      el.title = '由材料明细表自动计算生成';
    }
  });

  // Also check BOM table internal consistency
  const bomIssues = validateAllTables();

  const banner = document.getElementById('consistencyBanner');
  const bannerText = document.getElementById('consistencyBannerText');
  const totalIssues = sidebarWarnings + bomIssues.length;
  if (banner) {
    banner.style.display = totalIssues > 0 ? 'flex' : 'none';
    if (bannerText) {
      const parts = [];
      if (bomIssues.length > 0) parts.push(`材料明细层级汇总不一致 ${bomIssues.length} 处`);
      if (sidebarWarnings > 0) parts.push(`侧边栏参数不一致 ${sidebarWarnings} 处`);
      bannerText.textContent = '⚠ ' + parts.join(' · ') + ' · 点击右侧按钮一键修复';
    }
  }
  return totalIssues > 0;
}

// ============ 核心计算 ============
function compute() {
  const i = getInputs();

  const wW = i.hasWater ? i.waterWeight : 0;
  const gW = i.hasGen ? i.genWeight : 0;
  const vW = i.hasValve ? i.valveWeight : 0;

  const wMat = i.hasWater ? i.waterMat : 0;
  const gMat = i.hasGen ? i.genMat : 0;
  const vMat = i.hasValve ? i.valveBuy : 0;

  const wSelf = i.hasWater ? Math.max(i.waterMat - i.waterBuy, 0) : 0;
  const wBuy = i.hasWater ? i.waterBuy : 0;
  const wSelfM = wSelf * i.selfMarkup;
  const wBuyM = wBuy * i.buyMarkup;
  const wUnit = wSelf + wBuy + wSelfM + wBuyM;

  const gSelf = i.hasGen ? Math.max(i.genMat - i.genBuy, 0) : 0;
  const gBuy = i.hasGen ? i.genBuy : 0;
  const gSelfM = gSelf * i.selfMarkup;
  const gBuyM = gBuy * i.buyMarkup;
  const gUnit = gSelf + gBuy + gSelfM + gBuyM;

  const vBuy = i.hasValve ? i.valveBuy : 0;
  const vBuyM = vBuy * i.buyMarkup;
  const vUnit = vBuy + vBuyM;

  // 运输费(双区间) - 包含主机+备件+工具重量
  const transportPartsWeight = aggregatePartsToolsWeight(getEnabledPartsKeys());
  const transportToolsWeight = aggregatePartsToolsWeight(getEnabledToolsKeys());
  const totalWeightSingle = (wW + gW + vW + transportPartsWeight + transportToolsWeight) * i.transportExtra;
  const wideWeight = i.wideWeight;
  const normalWeight = Math.max(totalWeightSingle - wideWeight, 0);
  const transportWide = (wideWeight * i.tonKmPriceWide * i.distance) / YUAN_TO_WAN;
  const transportNormal = (normalWeight * i.tonKmPrice * i.distance) / YUAN_TO_WAN;
  const transportUnit = transportWide + transportNormal;

  // 备件/工具(总价是1次,不是按台数)
  const partsT = i.partsAmt;
  const toolsT = i.toolsAmt;
  const autoT = i.autoAmt;
  const monitorT = i.monitorAmt;
  const liaisonT = i.liaisonAmt;

  // 备件/工具：从明细表动态计算实际自制/外购金额（单位：万元）
  function sumSelfBuy(dataKeys) {
    let self = 0, buy = 0;
    const yuanKeys = new Set(['valve_parts', 'valve_tools']);
    dataKeys.forEach(dk => {
      const items = DATA[dk];
      if (!items) return;
      const isYuan = yuanKeys.has(dk);
      items.forEach(it => {
        const s = (parseFloat(it.self) || 0);
        const b = (parseFloat(it.buy) || 0);
        if (isYuan) {
          self += s / YUAN_TO_WAN;
          buy  += b / YUAN_TO_WAN;
        } else {
          self += s;
          buy  += b;
        }
      });
    });
    return { self, buy };
  }
  const partsSB = sumSelfBuy(getEnabledPartsKeys());
  const toolsSB = sumSelfBuy(getEnabledToolsKeys());

  // 备件/工具总价与自制外购明细
  const partsSelf = partsSB.self;
  const partsBuy  = partsSB.buy;
  const toolsSelf = toolsSB.self;
  const toolsBuy  = toolsSB.buy;

  // 项目清单(对应原表行15~24)
  const items = [
    { name: '水轮机', self: wSelf, buy: wBuy, selfM: wSelfM, buyM: wBuyM, qty: i.unitCount },
    { name: '发电机', self: gSelf, buy: gBuy, selfM: gSelfM, buyM: gBuyM, qty: i.unitCount },
    { name: '备件', self: partsSelf, buy: partsBuy, selfM: partsSelf * i.selfMarkup, buyM: partsBuy * i.buyMarkup, qty: 1 },
    { name: '工具', self: toolsSelf, buy: toolsBuy, selfM: toolsSelf * i.selfMarkup, buyM: toolsBuy * i.buyMarkup, qty: 1 },
    { name: '主机自动化', self: 0, buy: autoT, selfM: 0, buyM: autoT * i.buyMarkup, qty: 1 },
    { name: '在线监测', self: 0, buy: monitorT, selfM: 0, buyM: monitorT * i.buyMarkup, qty: 1 },
    { name: '运输费', self: 0, buy: transportUnit, selfM: 0, buyM: 0, qty: i.unitCount },
    { name: '阀门', self: 0, buy: vBuy, selfM: 0, buyM: vBuyM, qty: i.unitCount },
    { name: '设计联络等', self: 0, buy: liaisonT, selfM: 0, buyM: 0, qty: 1 },
  ];
  items.forEach(it => {
    it.cost = it.self + it.buy;
    it.unit = it.cost + it.selfM + it.buyM;
    it.total = it.unit * it.qty;
  });

  const totalBid = items.reduce((s, it) => s + it.total, 0);
  const totalFixed = items.reduce((s, it) => s + it.cost * it.qty, 0);
  const absorb = totalBid - totalFixed;
  const absorbPct = totalBid > 0 ? absorb / totalBid : 0;
  const agencyFee = calcAgencyFee(totalBid);


  return {
    inputs: i, items, totalBid, totalFixed, absorb, absorbPct, agencyFee,
    water: { has: i.hasWater, weight: wW, mat: wMat, self: wSelf, buy: wBuy, unit: wUnit, matT: wW > 0 ? wMat/wW : 0, bidT: wW > 0 ? wUnit/wW : 0 },
    gen:   { has: i.hasGen, weight: gW, mat: gMat, self: gSelf, buy: gBuy, unit: gUnit, matT: gW > 0 ? gMat/gW : 0, bidT: gW > 0 ? gUnit/gW : 0 },
    valve: { has: i.hasValve, weight: vW, mat: vMat, self: 0, buy: vBuy, unit: vUnit, matT: vW > 0 ? vMat/vW : 0, bidT: vW > 0 ? vUnit/vW : 0 },
    transport: { weightSingle: totalWeightSingle, wideWeight, normalWeight, transportWide, transportNormal, transportUnit, transportTotal: transportUnit * i.unitCount }
  };
}

// ============ 招标代理费(阶梯累计) ============
function calcAgencyFee(amount) {
  let fee = 0;
  let detail = [];
  let cumulative = 0;
  for (let i = 0; i < DATA.agency_tiers.length; i++) {
    const t = DATA.agency_tiers[i];
    if (amount <= t.lower) break;
    const segHigh = Math.min(amount, t.upper);
    const segLen = segHigh - t.lower;
    const segFee = segLen * t.rate;
    fee += segFee;
    cumulative = fee;
    detail.push({
      seq: i + 1,
      desc: t.desc,
      length: segLen,
      rate: t.rate,
      fee: segFee,
      cumulative: cumulative,
      hit: amount > t.lower && amount <= t.upper
    });
    if (amount <= t.upper) break;
  }
  return { fee, detail };
}


// ============ 渲染:概览 ============
const _prevKpi = {};
function animateNum(el, newVal, decimals) {
  if (!el) return;
  const oldVal = parseFloat(el.dataset.rawVal) || 0;
  if (Math.abs(oldVal - newVal) < 0.001) return;
  el.dataset.rawVal = newVal;
  const steps = 20, dur = 400;
  let step = 0;
  const interval = setInterval(() => {
    step++;
    const t = step / steps;
    const eased = 1 - Math.pow(1 - t, 3);
    const cur = oldVal + (newVal - oldVal) * eased;
    el.textContent = fmt(cur, decimals);
    if (step >= steps) { clearInterval(interval); el.textContent = fmt(newVal, decimals); }
  }, dur / steps);
}

function renderOverview(r) {
  const i = r.inputs;

  // Animated KPIs
  const kTotalEl = document.getElementById('kTotal');
  if (kTotalEl) {
    kTotalEl.innerHTML = fmt(r.totalBid, 0) + '<span class="unit">万元</span>';
    kTotalEl.classList.remove('kpi-animate'); void kTotalEl.offsetWidth; kTotalEl.classList.add('kpi-animate');
  }
  document.getElementById('kTotalSub').textContent = `含 ${i.unitCount} 台机组 · 主机/备件/工具/运输/服务`;
  document.getElementById('kUnit').textContent = i.unitCount > 0 ? fmt(r.totalBid / i.unitCount, 0) : '—';
  document.getElementById('kFixed').textContent = fmt(r.totalFixed, 0);

  // 消化占比带颜色预警
  const absorbPct = r.absorbPct * 100;
  const absorbEl = document.getElementById('kAbsorb');
  absorbEl.innerHTML = fmt(absorbPct, 1) + '<span class="unit">%</span>';
  const kpiEl = document.getElementById('kAbsorbKpi');
  kpiEl.className = 'mini-kpi ' + (absorbPct > 45 ? 'kpi-danger' : absorbPct > 30 ? 'kpi-warn' : 'kpi-good');
  document.getElementById('kAbsorbSub').textContent = `消化 ${fmt(r.absorb, 0)} 万`;
  document.getElementById('kAgency').textContent = fmt(r.agencyFee.fee, 2);

  // 利润徽章
  const badge = document.getElementById('marginBadge');
  if (badge) {
    const margin = r.absorbPct * 100;
    if (margin > 45) { badge.textContent = '⚠ 消化率偏高'; badge.style.cssText = 'display:inline-block;background:var(--red-light);color:var(--red);padding:2px 10px;border-radius:12px;font-size:11px;font-weight:600;'; }
    else if (margin > 28) { badge.textContent = '✓ 报价合理'; badge.style.cssText = 'display:inline-block;background:var(--green-light);color:var(--green);padding:2px 10px;border-radius:12px;font-size:11px;font-weight:600;'; }
    else { badge.textContent = '↑ 有提价空间'; badge.style.cssText = 'display:inline-block;background:var(--blue-light);color:var(--blue);padding:2px 10px;border-radius:12px;font-size:11px;font-weight:600;'; }
  }

  // 明细表 with progress bars
  const palette = ['var(--blue)','var(--accent)','var(--red)','var(--green)','var(--teal)','var(--purple)','var(--amber)','var(--indigo)','var(--teal)'];
  const body = document.getElementById('billBody');
  body.innerHTML = r.items.map((it, idx) => {
    const pct = r.totalBid > 0 ? (it.total / r.totalBid * 100) : 0;
    const color = palette[idx % palette.length];
    return `<tr>
      <td style="font-weight:500;">${it.name}</td>
      <td class="num">${fmt(it.self, 2)}</td>
      <td class="num">${fmt(it.buy, 2)}</td>
      <td class="num">${fmt(it.selfM, 2)}</td>
      <td class="num">${fmt(it.buyM, 2)}</td>
      <td class="num">${fmt(it.cost, 2)}</td>
      <td class="num">${it.qty}</td>
      <td class="num">${fmt(it.unit, 2)}</td>
      <td class="num" style="font-weight:600;">${fmt(it.total, 2)}</td>
      <td>
        <div class="bill-bar">
          <div class="bill-bar-track"><div class="bill-bar-fill" style="width:${pct}%;background:${color};"></div></div>
          <span style="font-size:11px;color:var(--text-muted);min-width:34px;text-align:right;">${fmt(pct, 1)}%</span>
        </div>
      </td>
    </tr>`;
  }).join('');
  const sum = k => r.items.reduce((s, it) => s + it[k], 0);
  document.getElementById('tSelf').textContent = fmt(sum('self'), 2);
  document.getElementById('tBuy').textContent = fmt(sum('buy'), 2);
  document.getElementById('tSelfM').textContent = fmt(sum('selfM'), 2);
  document.getElementById('tBuyM').textContent = fmt(sum('buyM'), 2);
  document.getElementById('tCost').textContent = fmt(sum('cost'), 2);
  document.getElementById('tTotal').textContent = fmt(r.totalBid, 2);
}

// ============ 渲染:三大主机 ============
function renderMachines(r) {
  const machines = [
    { key: 'water', label: '水轮机', model: 'HLB200-LJ-203', en: 'Hydro Turbine', d: r.water },
    { key: 'gen', label: '发电机', model: 'SF40-16/4700', en: 'Generator', d: r.gen },
    { key: 'valve', label: '进水阀门', model: 'PDF120-WY-280', en: 'Inlet Valve', d: r.valve }
  ];
  document.getElementById('machinesGrid').innerHTML = machines.map(m => {
    if (!m.d.has) return `<div class="machine" data-t="${m.key}" style="opacity:0.4;"><div class="machine-name">${m.label}</div><div style="font-size:12px;color:var(--text-dim);text-align:center;padding:30px 0;">本项目不含此设备</div></div>`;
    const total = m.d.self + m.d.buy;
    const selfPct = total > 0 ? m.d.self / total * 100 : 0;
    return `<div class="machine" data-t="${m.key}">
      <div class="machine-name">${m.label}</div>
      <div class="machine-model">${m.model}</div>
      <div class="machine-row"><span>重量</span><span class="v">${fmt(m.d.weight, 1)} T <button class="btn" style="font-size:10px;padding:1px 5px;margin-left:4px;" onclick="jumpToMaterial('${m.key}')" title="查看材料明细">→</button></span></div>
      <div class="machine-row"><span>材料价</span><span class="v">${fmt(m.d.mat, 2)} 万</span></div>
      <div class="machine-row"><span>外购件</span><span class="v">${fmt(m.d.buy, 2)} 万</span></div>
      <div class="machine-row"><span>自制部分</span><span class="v">${fmt(m.d.self, 2)} 万</span></div>
      <div class="machine-row"><span>材料吨价</span><span class="v">${fmt(m.d.matT, 2)} 万/T</span></div>
      <div class="machine-row highlight"><span>拟报单价</span><span class="v">${fmt(m.d.unit, 2)} 万</span></div>
      <div class="machine-row"><span>投标吨价</span><span class="v">${fmt(m.d.bidT, 2)} 万/T</span></div>
      <div style="margin-top:10px;">
        <div style="display:flex;justify-content:space-between;font-size:10.5px;color:var(--text-muted);">
          <span>自制 ${fmt(selfPct, 1)}%</span><span>外购 ${fmt(100-selfPct, 1)}%</span>
        </div>
        <div class="stacked">
          <div style="background:var(--blue);width:${selfPct}%;"></div>
          <div style="background:var(--amber);width:${100-selfPct}%;"></div>
        </div>
      </div>
    </div>`;
  }).join('');
}

// ============ 图表 ============
let chTonPrice, chTonPrice2, chComposition, chSelfBuy, chCostStack;

function renderCharts(r) {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const gridColor = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)';
  const textColor = isDark ? '#9090b8' : '#5a5a7a';
  const panelColor = isDark ? '#1a1a2e' : '#ffffff';

  // 更新 Chart.js 全局默认色
  Chart.defaults.color = textColor;
  Chart.defaults.borderColor = gridColor;

  const tonData = {
    labels: ['水轮机', '发电机', '阀门'],
    datasets: [
      { label: '材料吨价', data: [r.water.matT, r.gen.matT, r.valve.matT], backgroundColor: isDark ? 'rgba(85,128,240,0.8)' : 'rgba(59,111,212,0.8)', borderRadius: 5 },
      { label: '投标吨价', data: [r.water.bidT, r.gen.bidT, r.valve.bidT], backgroundColor: isDark ? 'rgba(240,160,80,0.8)' : 'rgba(200,135,61,0.8)', borderRadius: 5 }
    ]
  };
  const tonOpts = {
    responsive: true, maintainAspectRatio: false,
    plugins: {
      legend: { position: 'bottom', labels: { boxWidth: 10, boxHeight: 10, padding: 14, font: { size: 11 }, color: textColor } },
      tooltip: { callbacks: { label: c => ` ${c.dataset.label}: ${c.parsed.y.toFixed(2)} 万/T` } }
    },
    scales: {
      x: { grid: { display: false }, ticks: { color: textColor } },
      y: { beginAtZero: true, grid: { color: gridColor }, ticks: { callback: v => v + ' 万/T', font: { size: 11 }, color: textColor } }
    }
  };
  if (chTonPrice) { chTonPrice.data = tonData; chTonPrice.options = tonOpts; chTonPrice.update(); }
  else chTonPrice = new Chart(document.getElementById('chTonPrice'), { type: 'bar', data: tonData, options: tonOpts });
  if (document.getElementById('chTonPrice2')) {
    if (chTonPrice2) { chTonPrice2.data = tonData; chTonPrice2.options = tonOpts; chTonPrice2.update(); }
    else chTonPrice2 = new Chart(document.getElementById('chTonPrice2'), { type: 'bar', data: tonData, options: tonOpts });
  }

  const compItems = r.items.filter(x => x.total > 0.01);
  const palette = ['#3b6fd4','#e08820','#e04060','#1faa6b','#00bfa5','#7c6fdd','#4255b0','#f0a050','#888'];
  const compData = {
    labels: compItems.map(x => x.name),
    datasets: [{
      data: compItems.map(x => x.total),
      backgroundColor: compItems.map((_, i) => palette[i % palette.length]),
      borderWidth: 3, borderColor: panelColor,
      hoverOffset: 8
    }]
  };
  const compOpts = {
    responsive: true, maintainAspectRatio: false, cutout: '62%',
    plugins: {
      legend: { position: 'right', labels: { boxWidth: 10, boxHeight: 10, padding: 10, font: { size: 11 }, color: textColor } },
      tooltip: {
        callbacks: {
          label: c => {
            const tot = c.dataset.data.reduce((a,b) => a+b, 0);
            const pct = tot > 0 ? (c.parsed/tot*100).toFixed(1) : '0';
            return ` ${c.label}: ${c.parsed.toFixed(2)} 万 (${pct}%)`;
          }
        }
      }
    }
  };
  if (chComposition) { chComposition.data = compData; chComposition.options = compOpts; chComposition.update(); }
  else chComposition = new Chart(document.getElementById('chComposition'), { type: 'doughnut', data: compData, options: compOpts });

  // 自制vs外购
  if (document.getElementById('chSelfBuy')) {
    const sbData = {
      labels: ['水轮机', '发电机', '阀门'],
      datasets: [
        { label: '自制', data: [r.water.self, r.gen.self, r.valve.self], backgroundColor: isDark ? 'rgba(85,128,240,0.8)' : 'rgba(59,111,212,0.8)', borderRadius: 4 },
        { label: '外购', data: [r.water.buy, r.gen.buy, r.valve.buy], backgroundColor: isDark ? 'rgba(240,160,80,0.8)' : 'rgba(200,135,61,0.8)', borderRadius: 4 }
      ]
    };
    const sbOpts = {
      responsive: true, maintainAspectRatio: false,
      plugins: {
        legend: { position: 'bottom', labels: { boxWidth: 10, boxHeight: 10, padding: 14, font: { size: 11 }, color: textColor } },
        tooltip: { callbacks: { label: c => ` ${c.dataset.label}: ${c.parsed.y.toFixed(2)} 万` } }
      },
      scales: {
        x: { stacked: true, grid: { display: false }, ticks: { color: textColor } },
        y: { stacked: true, beginAtZero: true, grid: { color: gridColor }, ticks: { callback: v => v + ' 万', color: textColor } }
      }
    };
    if (chSelfBuy) { chSelfBuy.data = sbData; chSelfBuy.options = sbOpts; chSelfBuy.update(); }
    else chSelfBuy = new Chart(document.getElementById('chSelfBuy'), { type: 'bar', data: sbData, options: sbOpts });
  }

  // 成本堆叠
  if (document.getElementById('chCostStack')) {
    const csData = {
      labels: r.items.map(x => x.name),
      datasets: [
        { label: '自制成本', data: r.items.map(x => x.self), backgroundColor: isDark ? 'rgba(85,128,240,0.85)' : 'rgba(59,111,212,0.85)', borderRadius: 3 },
        { label: '外购成本', data: r.items.map(x => x.buy), backgroundColor: isDark ? 'rgba(240,160,80,0.85)' : 'rgba(200,135,61,0.85)', borderRadius: 3 },
        { label: '自制加价', data: r.items.map(x => x.selfM), backgroundColor: isDark ? 'rgba(85,128,240,0.4)' : 'rgba(59,111,212,0.4)', borderRadius: 3 },
        { label: '外购加价', data: r.items.map(x => x.buyM), backgroundColor: isDark ? 'rgba(240,160,80,0.4)' : 'rgba(200,135,61,0.4)', borderRadius: 3 }
      ]
    };
    const csOpts = {
      indexAxis: 'y', responsive: true, maintainAspectRatio: false,
      plugins: {
        legend: { position: 'bottom', labels: { boxWidth: 10, boxHeight: 10, padding: 14, font: { size: 11 }, color: textColor } },
        tooltip: { callbacks: { label: c => ` ${c.dataset.label}: ${c.parsed.x.toFixed(2)} 万` } }
      },
      scales: {
        x: { stacked: true, beginAtZero: true, grid: { color: gridColor }, ticks: { callback: v => v + ' 万', color: textColor } },
        y: { stacked: true, grid: { display: false }, ticks: { color: textColor } }
      }
    };
    if (chCostStack) { chCostStack.data = csData; chCostStack.options = csOpts; chCostStack.update(); }
    else chCostStack = new Chart(document.getElementById('chCostStack'), { type: 'bar', data: csData, options: csOpts });
  }
}

// ============ 渲染:材料明细 ============
function renderMaterials() {
  const which = state.currentMatTab;
  const search = (document.getElementById('matSearch').value || '').toLowerCase();
  const filter = document.getElementById('matFilter').value;

  const filterFn = (it) => {
    if (filter === 'self' && it.is_buy) return false;
    if (filter === 'buy' && !it.is_buy) return false;
    if (search) {
      const text = (it.name + ' ' + (it.material || '') + ' ' + (it.replacement || '') + ' ' + (it.remark || '')).toLowerCase();
      if (!text.includes(search)) return false;
    }
    return true;
  };

  // Recalc formulas before rendering
  FormulaEngine.recalcTable(which);

  const config = {
    tableId: 'matTable', dataKey: which,
    columns: [
      { key: 'seq', label: '序号' },
      { key: 'name', label: '部件名称' },
      { key: 'material', label: '材料', type: 'material' },
      { key: 'replacement', label: '替代材料', type: 'material' },
      { key: 'weight', label: '重量(T)', align: 'right', type: 'weight', summary: true, summaryLabel: '总重量' },
      { key: 'amount', label: '金额(万)', align: 'right', type: 'money', formula: true, summary: true, summaryLabel: '金额合计' },
      { key: 'usage', label: '利用率', align: 'right', type: 'usageRate' },
      { key: 'is_buy', label: '类别', type: 'bool' },
      { key: 'remark', label: '备注' }
    ],
    summaryId: 'matSummary',
    filterFn,
    onChange: () => { /* overview will be updated by caller */ }
  };
  _tableConfigs[config.tableId] = config;
  EditableTable.render(config);

  // Add reset button
  const summaryEl = document.getElementById('matSummary');
  if (summaryEl && !document.getElementById('matResetBtn')) {
    const btnWrap = document.createElement('span');
    btnWrap.style.cssText = 'display:inline-flex;gap:6px;align-items:center;';

    const fixBtn = document.createElement('button');
    fixBtn.className = 'btn-fix';
    fixBtn.textContent = '修复汇总';
    fixBtn.title = '一键重新计算所有层级汇总值';
    fixBtn.onclick = () => { fixAllConsistency(); };

    const btn = document.createElement('button');
    btn.id = 'matResetBtn';
    btn.className = 'btn-reset';
    btn.textContent = '恢复默认';
    btn.onclick = () => { if (confirm('确定恢复此表为默认数据？')) { resetDataTable(which); renderMaterials(); renderAll(); showToast('已恢复默认数据'); } };

    btnWrap.appendChild(fixBtn);
    btnWrap.appendChild(btn);
    summaryEl.parentElement.insertBefore(btnWrap, summaryEl);
  }
}

// ============ 渲染:备件 ============
function renderParts() {
  // 自动切换到可用标签
  autoSwitchPartsTab();
  const key = state.currentPartsTab;
  const isValve = key === 'valve_parts';

  // 标签可见性控制
  const partsTabsContainer = document.querySelector('#partsTabs');
  const partsTabBtns = partsTabsContainer ? partsTabsContainer.querySelectorAll('button') : [];
  partsTabBtns.forEach(btn => {
    const tabKey = btn.dataset.key;
    const isEnabled = (tabKey === 'water_parts' && state.hasWater) ||
                      (tabKey === 'gen_parts' && state.hasGen) ||
                      (tabKey === 'valve_parts' && state.hasValve);
    btn.style.display = isEnabled ? '' : 'none';
    btn.classList.toggle('on', tabKey === key);
  });
  // 更新标签页提示文字中的数量
  const availTabs = getAvailablePartsTabs();

  // 如果没有启用的主机，显示提示
  if (!hasAnyMachine()) {
    document.getElementById('partsTable').innerHTML = '<tr><td colspan="7" style="text-align:center;padding:30px 0;color:var(--text-dim);font-size:13px;">请至少选择一个主机类型</td></tr>';
    document.getElementById('partsSummary').innerHTML = '';
    return;
  }

  FormulaEngine.recalcTable(key);
  const cols = [
    { key: 'seq', label: '序号', width: '50px' },
    { key: 'name', label: '项目' },
    { key: 'qty', label: '数量', width: '70px', type: 'qty', align: 'right' },
    { key: 'unit', label: '单位', width: '60px' },
    { key: 'spec', label: '规格' },
    { key: 'self', label: '自制', width: '70px', align: 'right', type: 'money', summary: true, summaryLabel: '自制合计' },
    { key: 'buy', label: '外购', width: '70px', align: 'right', type: 'money', summary: true, summaryLabel: '外购合计' }
  ];
  if (isValve) cols.push({ key: 'total', label: '合计', width: '70px', align: 'right', type: 'money', formula: true, summary: true, summaryLabel: '总合计' });
  const config = {
    tableId: 'partsTable', dataKey: key, columns: cols, summaryId: 'partsSummary',
    onChange: () => {}
  };
  _tableConfigs[config.tableId] = config;
  EditableTable.render(config);
}

// ============ 渲染:工具 ============
function renderTools() {
  // 自动切换到可用标签
  autoSwitchToolsTab();
  const key = state.currentToolsTab;
  const isValve = key === 'valve_tools';

  // 标签可见性控制
  const toolsTabsContainer = document.querySelector('#toolsTabs');
  const toolsTabBtns = toolsTabsContainer ? toolsTabsContainer.querySelectorAll('button') : [];
  toolsTabBtns.forEach(btn => {
    const tabKey = btn.dataset.key;
    const isEnabled = (tabKey === 'water_tools' && state.hasWater) ||
                      (tabKey === 'gen_tools' && state.hasGen) ||
                      (tabKey === 'valve_tools' && state.hasValve);
    btn.style.display = isEnabled ? '' : 'none';
    btn.classList.toggle('on', tabKey === key);
  });

  // 如果没有启用的主机，显示提示
  if (!hasAnyMachine()) {
    document.getElementById('toolsTable').innerHTML = '<tr><td colspan="7" style="text-align:center;padding:30px 0;color:var(--text-dim);font-size:13px;">请至少选择一个主机类型</td></tr>';
    document.getElementById('toolsSummary').innerHTML = '';
    return;
  }

  FormulaEngine.recalcTable(key);
  const cols = [
    { key: 'seq', label: '序号', width: '50px' },
    { key: 'name', label: '名称' },
    { key: 'qty', label: '数量', width: '70px', type: 'qty', align: 'right' },
    { key: 'unit', label: '单位', width: '60px' },
    { key: 'weight', label: '重量', width: '80px', align: 'right', type: 'weight', summary: true, summaryLabel: '总重量' },
    { key: 'self', label: '自制', width: '70px', align: 'right', type: 'money', summary: true, summaryLabel: '自制合计' },
    { key: 'buy', label: '外购', width: '70px', align: 'right', type: 'money', summary: true, summaryLabel: '外购合计' }
  ];
  if (isValve) cols.push({ key: 'total', label: '合计', width: '70px', align: 'right', type: 'money', formula: true, summary: true, summaryLabel: '总合计' });
  const config = {
    tableId: 'toolsTable', dataKey: key, columns: cols, summaryId: 'toolsSummary',
    onChange: () => {}
  };
  _tableConfigs[config.tableId] = config;
  EditableTable.render(config);
}

// ============ 渲染:自动化&监测 ============
const AUTO_GROUP_ORDER = ['水轮机自动化检测','发电机自动化检测','阀门自动化检测','备件自动化检测','工具自动化检测','辅助设备自动化检测'];
const AUTO_GROUP_SEQ = ['一','二','三','四','五','六'];
const AUTO_COLS = [
  { key: 'seq', label: '序号', width: '74px' },
  { key: 'name', label: '名称' },
  { key: 'model', label: '型号规格' },
  { key: 'qty', label: '数量', width: '60px', align: 'right', type: 'int' },
  { key: 'unit_price', label: '单价(元)', width: '80px', align: 'right', type: 'number' },
  { key: 'total', label: '合价(元)', width: '80px', align: 'right', type: 'number', formula: true, summary: true, summaryLabel: '总价' },
  { key: 'usage', label: '使用位置' },
  { key: 'manufacturer', label: '制造厂' }
];

function inferAutoGroup(row) {
  if (row.auto_group) return row.auto_group;
  const seqNum = parseInt(row.source_seq || row.seq, 10);
  return (!isNaN(seqNum) && seqNum <= 32) ? '水轮机自动化检测' : '发电机自动化检测';
}
function inferAutoSubgroup(row, group) {
  if (row.auto_subgroup) return row.auto_subgroup;
  const s = [row.name, row.usage, row.model].filter(Boolean).join(' ');
  const has = (...keys) => keys.some(k => s.includes(k));
  if (group === '水轮机自动化检测') {
    if (has('导叶','剪断销')) return '导水机构';
    if (has('接力器','空气围带')) return '接力器与空气围带';
    if (has('蜗壳','顶盖','尾水')) return '埋入零件压力监测';
    if (has('密封水','主轴密封','导轴承冷却','水导冷却')) return '主轴密封与水导冷却';
    if (has('水导轴承','水导油槽','水导轴瓦','温度','测温','端子箱','油混水')) return '水导轴承与测温';
  } else if (group === '发电机自动化检测') {
    if (has('上导','下导','推力','油槽','油混水')) return '轴承油槽监测';
    if (has('冷却水','空冷器','总冷却')) return '冷却系统监测';
    if (has('轴瓦温度','定子温度','温度报警','测温')) return '测温系统';
    if (has('齿盘','测速')) return '转速监测';
    if (has('火灾','火警')) return '消防报警';
    if (has('制动')) return '制动系统';
    if (has('端子箱','控制柜','测温制动柜')) return '端子箱与控制柜';
  }
  return '其他自动化元件';
}
function ensureAutoTreeSeq() {
  const clean = [];
  (DATA.automation || []).forEach(row => {
    if (String(row.seq || '').trim() === '序号' || String(row.name || '').replace(/\s+/g,'') === '名称') return;
    if (row.source_seq === undefined || row.source_seq === null || row.source_seq === '') row.source_seq = row.seq;
    row.auto_group = inferAutoGroup(row);
    row.auto_subgroup = inferAutoSubgroup(row, row.auto_group);
    clean.push(row);
  });
  if (clean.length !== (DATA.automation || []).length) DATA.automation = clean;

  AUTO_GROUP_ORDER.forEach((group, gi) => {
    const subNames = [];
    clean.filter(r => r.auto_group === group).forEach(r => {
      if (!subNames.includes(r.auto_subgroup)) subNames.push(r.auto_subgroup);
    });
    subNames.forEach((sub, si) => {
      clean.filter(r => r.auto_group === group && r.auto_subgroup === sub).forEach((r, ri) => {
        r.seq = ri + 1; // simple 1,2,3 numbering within each subgroup
      });
    });
  });
}
function renderAutoCell(row, col, realIdx, ci) {
  const val = row[col.key];
  const cls = ['editable-cell'];
  if (col.align === 'right') cls.push('num');
  if (col.formula) cls.push('formula-cell');
  let display = EditableTable.cellDisplay(val, col);

  // Seq column: simple number display
  if (col.key === 'seq') {
    display = `<span class="auto-seq-main">${escHtml(String(val ?? ''))}</span>`;
  }
  // Highlight total value
  if (col.key === 'total' && val != null && val !== '') {
    display = `<span class="auto-total-val">${display}</span>`;
  }
  if (col.key === 'unit_price' && val != null && val !== '') {
    display = `<span class="auto-price-val">${display}</span>`;
  }
  // Tooltip for long text
  const titleAttr = (typeof val === 'string' && val.length > 16)
    ? ` title="${val.replace(/"/g, '&quot;')}"` : '';
  return `<td class="${cls.join(' ')}" data-col="${ci}" data-key="${col.key}" data-idx="${realIdx}" data-orig-idx="${realIdx}"${titleAttr}>${display}</td>`;
}
function renderAutoGroupedTable(rows, groupName, groupIdx) {
  const groupSeq = AUTO_GROUP_SEQ[groupIdx] || String(groupIdx + 1);
  if (!rows.length) {
    return `<details class="auto-tree-group">
      <summary>
        <span class="auto-tree-seq">${groupSeq}</span>
        <div class="auto-tree-title"><span class="auto-tree-name">${escHtml(groupName)}</span></div>
        <span class="auto-tree-count">0 项</span>
      </summary>
      <div class="auto-tree-empty">暂无匹配项目</div>
    </details>`;
  }

  const subNames = [];
  rows.forEach(({row}) => { if (!subNames.includes(row.auto_subgroup)) subNames.push(row.auto_subgroup); });

  // Build colgroup for table-layout:fixed
  const colgroupHtml = `<colgroup>
    <col class="atm-op">
    ${AUTO_COLS.map(c => {
      const cls = {
        seq:'atm-seq', name:'atm-name', model:'atm-model',
        qty:'atm-qty', unit_price:'atm-price', total:'atm-total',
        usage:'atm-usage', manufacturer:'atm-mfr'
      }[c.key] || '';
      return `<col class="${cls}">`;
    }).join('')}
  </colgroup>`;

  let body = '';
  subNames.forEach((sub, si) => {
    const subRows = rows.filter(x => x.row.auto_subgroup === sub);
    const subTotal = subRows.reduce((s, x) => s + (parseFloat(x.row.total) || 0), 0);
    body += `<div class="auto-subgroup">
      <div class="auto-subgroup-header">
        <div class="auto-subgroup-title">${si + 1}. ${escHtml(sub)}</div>
        <div class="auto-subgroup-meta">
          <span class="auto-subgroup-count">${subRows.length} 项</span>
          <span class="auto-subgroup-subtotal">¥ ${fmt(subTotal, 2)}</span>
        </div>
      </div>
      <table class="auto-table-mini">
        ${colgroupHtml}
        <thead><tr>
          <th></th>
          ${AUTO_COLS.map(c => `<th class="${c.align === 'right' ? 'num' : ''}" title="${escHtml(c.label)}">${escHtml(c.label)}</th>`).join('')}
        </tr></thead>
        <tbody>
          ${subRows.map(({row, idx}) => `<tr class="row-editable">
            <td><button class="row-btn row-edit-btn" onclick="openRowEditModal('data',{dataKey:'automation',rowIdx:${idx},config:_tableConfigs.autoTable})" title="弹窗编辑">✎</button></td>
            ${AUTO_COLS.map((col, ci) => renderAutoCell(row, col, idx, ci)).join('')}
          </tr>`).join('')}
        </tbody>
      </table>
    </div>`;
  });

  const total = rows.reduce((sum, x) => sum + (parseFloat(x.row.total) || 0), 0);
  return `<details class="auto-tree-group" open>
    <summary>
      <span class="auto-tree-seq">${groupSeq}</span>
      <div class="auto-tree-title"><span class="auto-tree-name">${escHtml(groupName)}</span></div>
      <span class="auto-tree-count">${rows.length} 项</span>
      <span class="auto-tree-total-badge">合价 ${fmt(total, 2)} 元</span>
    </summary>
    ${body}
  </details>`;
}
function renderAuto() {
  const search = (document.getElementById('autoSearch').value || '').toLowerCase();
  FormulaEngine.recalcTable('automation');
  FormulaEngine.recalcTable('monitoring');
  ensureAutoTreeSeq();

  const autoConfig = {
    tableId: 'autoTable',
    dataKey: 'automation',
    columns: AUTO_COLS,
    summaryId: 'autoSummary',
    onChange: () => {}
  };
  _tableConfigs[autoConfig.tableId] = autoConfig;

  const all = (DATA.automation || []).map((row, idx) => ({ row, idx }));
  const filtered = all.filter(({row}) => {
    if (!search) return true;
    return [row.seq, row.name, row.model, row.usage, row.manufacturer, row.auto_group, row.auto_subgroup]
      .filter(Boolean).join(' ').toLowerCase().includes(search);
  });

  const host = document.getElementById('autoTable');
  if (host) {
    const total = filtered.reduce((sum, x) => sum + (parseFloat(x.row.total) || 0), 0);
    host.outerHTML = `<div id="autoTable" class="auto-tree">
      <div class="auto-tree-toolbar">
        <div class="info">按组内顺序编号（1、2、3…），原始来源行号保留在数据中。</div>
        <div class="auto-tree-actions">
          <button class="btn" onclick="document.querySelectorAll('#autoTable details.auto-tree-group').forEach(d=>d.open=true)">全部展开</button>
          <button class="btn" onclick="document.querySelectorAll('#autoTable details.auto-tree-group').forEach(d=>d.open=false)">全部收起</button>
        </div>
      </div>
      ${AUTO_GROUP_ORDER.map((group, gi) => renderAutoGroupedTable(filtered.filter(x => x.row.auto_group === group), group, gi)).join('')}
    </div>`;
    const summaryEl = document.getElementById('autoSummary');
    if (summaryEl) summaryEl.innerHTML = `共 ${DATA.automation.length} 项 · 当前显示 ${filtered.length} 项 · 合价：<strong style="color:var(--text);">${fmt(total, 2)}</strong> 元 <span style="color:var(--text-dim);font-size:11px;">(≈ ${fmt(total / YUAN_TO_WAN, 4)} 万)</span>`;
    // Re-apply resize after outerHTML replacement
    setTimeout(() => {
      const newHost = document.getElementById('autoTable');
      if (newHost) applyResizableTables();
    }, 0);
  }

  // 在线监测
  const monConfig = {
    tableId: 'monitorTable', dataKey: 'monitoring',
    columns: [
      { key: 'seq', label: '序号', width: '50px' },
      { key: 'function', label: '功能' },
      { key: 'name', label: '元件名称' },
      { key: 'model', label: '型号' },
      { key: 'qty', label: '数量', width: '60px', align: 'right', type: 'qty' },
      { key: 'unit_price', label: '单价(元)', width: '80px', align: 'right', type: 'number' },
      { key: 'total', label: '合价(元)', width: '80px', align: 'right', type: 'number', formula: true, summary: true, summaryLabel: '总价' },
      { key: 'remark', label: '备注' }
    ],
    summaryId: 'monitorSummary',
    onChange: () => {}
  };
  _tableConfigs[monConfig.tableId] = monConfig;
  EditableTable.render(monConfig);
}

// ============ 渲染:运输 ============
function renderTransport(r) {
  const t = r.transport;
  const i = r.inputs;
  document.getElementById('tWeightTotal').textContent = fmt(i.waterWeight + i.genWeight + i.valveWeight, 2) + ' T';
  document.getElementById('tFactor').textContent = fmt(i.transportExtra, 2);
  document.getElementById('tWeightAdj').textContent = fmt(t.weightSingle, 2) + ' T';
  document.getElementById('tWeightWide').textContent = fmt(t.wideWeight, 2) + ' T';
  document.getElementById('tWeightNorm').textContent = fmt(t.normalWeight, 2) + ' T';
  document.getElementById('tDistance').textContent = fmt(i.distance, 0) + ' km';
  document.getElementById('tPriceWide').textContent = fmt(i.tonKmPriceWide, 2) + ' 元';
  document.getElementById('tPriceNorm').textContent = fmt(i.tonKmPrice, 2) + ' 元';
  document.getElementById('tCostWide').textContent = fmt(t.transportWide, 4);
  document.getElementById('tCostNorm').textContent = fmt(t.transportNormal, 4);
  document.getElementById('tCostUnit').textContent = fmt(t.transportUnit, 2) + ' 万';
  document.getElementById('tQty').textContent = i.unitCount;
  document.getElementById('tCostAll').textContent = fmt(t.transportTotal, 2) + ' 万';
}

// ============ 渲染:设联会 ============
function renderLiaison() {
  FormulaEngine.recalcTable('liaison');
  const config = {
    tableId: 'liaisonTable', dataKey: 'liaison',
    columns: [
      { key: 'seq', label: '序号', width: '50px' },
      { key: 'name', label: '项目' },
      { key: 'location', label: '地点' },
      { key: 'person_days', label: '人天数', align: 'right', type: 'int' },
      { key: 'unit_price', label: '单价(元/人日)', align: 'right', type: 'number' },
      { key: 'total', label: '总价(元)', align: 'right', type: 'number', formula: true, summary: true, summaryLabel: '总价' },
      { key: 'remark', label: '备注' }
    ],
    summaryId: 'liaisonSummary',
    onChange: () => {}
  };
  _tableConfigs[config.tableId] = config;
  EditableTable.render(config);
}

// ============ 渲染:招标代理费 ============
function renderAgency(r) {
  const detail = r.agencyFee.detail;
  document.getElementById('agencyInfo').innerHTML = 
    `投标价 <strong>${fmt(r.totalBid, 2)} 万元</strong> · 累进至第 <strong>${detail.length}</strong> 档 · 应收代理费 <strong>${fmt(r.agencyFee.fee, 2)} 万元</strong>`;
  
  const rows = DATA.agency_tiers.map((t, i) => {
    const matched = detail[i];
    return `<tr class="${matched && matched.hit ? 'hit' : ''}">
      <td>${i + 1}</td>
      <td>${t.desc}</td>
      <td class="num">${matched ? fmt(matched.length, 2) : '—'}</td>
      <td class="num">${fmt(t.rate * 100, 4)}%</td>
      <td class="num">${matched ? fmt(matched.fee, 4) : '—'}</td>
      <td class="num">${matched ? fmt(matched.cumulative, 4) : '—'}</td>
    </tr>`;
  }).join('');
  document.getElementById('agencyTableBody').innerHTML = rows;
}

// ============ 渲染:材料库 ============
function renderMatLib() {
  const search = (document.getElementById('matLibSearch')?.value || '').toLowerCase();
  const catFilter = document.getElementById('matLibCatFilter')?.value || 'all';
  let items = MAT_LIB;
  if (search) items = items.filter(m => m.name.toLowerCase().includes(search) || (m.spec||'').toLowerCase().includes(search) || (m.remark||'').toLowerCase().includes(search));
  if (catFilter !== 'all') items = items.filter(m => m.category === catFilter);

  let html = `<thead><tr>
    <th style="width:40px;"></th>
    <th>材料ID</th><th>材料名称</th><th>规格</th><th>分类</th>
    <th class="num">标准价格(万/T)</th><th>备注</th>
  </tr></thead><tbody>`;
  if (items.length === 0) {
    html += `<tr><td colspan="7" style="text-align:center;padding:20px;color:var(--text-dim);">暂无材料数据 · 点击"一键导入材料"或"新增材料"开始</td></tr>`;
  }

  // Group by category when no search and showing all / single category
  const shouldGroup = !search && (catFilter === 'all');
  if (shouldGroup) {
    // Group items by category
    const groups = {};
    items.forEach(m => {
      const cat = m.category || '其他';
      if (!groups[cat]) groups[cat] = [];
      groups[cat].push(m);
    });
    const catOrder = ['板材类','型材类','铸件类','锻件类','铜材','绝缘材料','不锈钢材','管材','成品件','轴承/轴套','密封件','阀门类','其他'];
    const sortedCats = [...catOrder.filter(c => groups[c]), ...Object.keys(groups).filter(c => !catOrder.includes(c))];
    sortedCats.forEach(cat => {
      const catItems = groups[cat];
      // Category group header row
      html += `<tr style="background:var(--accent-light);cursor:pointer;" onclick="toggleMatLibGroup('${cat.replace(/'/g,"\\'")}')" title="点击展开/折叠">
        <td colspan="7" style="padding:5px 10px;font-weight:600;font-size:12px;color:var(--accent-dark);letter-spacing:0.05em;">
          <span id="matLibGroupIcon_${cat.replace(/[^a-zA-Z0-9]/g,'_')}">▼</span>
          &nbsp;${cat}
          <span style="font-size:11px;font-weight:400;color:var(--text-muted);margin-left:8px;">${catItems.length} 项</span>
        </td>
      </tr>`;
      catItems.forEach(m => {
        const realIdx = MAT_LIB.indexOf(m);
        html += `<tr class="matlib-group-row matlib-group-${cat.replace(/[^a-zA-Z0-9]/g,'_')}">
          <td style="text-align:center;white-space:nowrap;">
            <button class="row-btn row-edit-btn" onclick="openRowEditModal('matlib',{idx:${realIdx}})" title="弹窗编辑">✎</button><button class="row-btn del" onclick="deleteMatLibItem(${realIdx})" title="删除">×</button>
          </td>
          <td style="font-family:monospace;font-size:11px;">${m.id}</td>
          <td class="editable-cell" data-col="1" data-idx="${realIdx}" data-lib="true">${m.name}</td>
          <td class="editable-cell" data-col="2" data-idx="${realIdx}" data-lib="true">${m.spec || '<span style="color:var(--text-dim);">—</span>'}</td>
          <td class="editable-cell" data-col="3" data-idx="${realIdx}" data-lib="true">${m.category}</td>
          <td class="editable-cell num" data-col="4" data-idx="${realIdx}" data-lib="true">${fmt(m.price, 4)}</td>
          <td class="editable-cell" data-col="5" data-idx="${realIdx}" data-lib="true">${m.remark || '<span style="color:var(--text-dim);">—</span>'}</td>
        </tr>`;
      });
    });
  } else {
    items.forEach((m, idx) => {
      const realIdx = MAT_LIB.indexOf(m);
      html += `<tr>
        <td style="text-align:center;white-space:nowrap;">
          <button class="row-btn row-edit-btn" onclick="openRowEditModal('matlib',{idx:${realIdx}})" title="弹窗编辑">✎</button><button class="row-btn del" onclick="deleteMatLibItem(${realIdx})" title="删除">×</button>
        </td>
        <td style="font-family:monospace;font-size:11px;">${m.id}</td>
        <td class="editable-cell" data-col="1" data-idx="${realIdx}" data-lib="true">${m.name}</td>
        <td class="editable-cell" data-col="2" data-idx="${realIdx}" data-lib="true">${m.spec || '<span style="color:var(--text-dim);">—</span>'}</td>
        <td class="editable-cell" data-col="3" data-idx="${realIdx}" data-lib="true">${m.category}</td>
        <td class="editable-cell num" data-col="4" data-idx="${realIdx}" data-lib="true">${fmt(m.price, 4)}</td>
        <td class="editable-cell" data-col="5" data-idx="${realIdx}" data-lib="true">${m.remark || '<span style="color:var(--text-dim);">—</span>'}</td>
      </tr>`;
    });
  }
  html += `</tbody>`;
  document.getElementById('matLibTable').innerHTML = html;
  document.getElementById('matLibSummary').innerHTML = `共 <strong>${MAT_LIB.length}</strong> 条材料 · 筛选显示 <strong>${items.length}</strong> 条`;
}

// Toggle category group expand/collapse in material library
const _matLibCollapsed = new Set();
function toggleMatLibGroup(cat) {
  const key = cat.replace(/[^a-zA-Z0-9]/g,'_');
  const rows = document.querySelectorAll('.matlib-group-' + key);
  const icon = document.getElementById('matLibGroupIcon_' + key);
  if (_matLibCollapsed.has(cat)) {
    _matLibCollapsed.delete(cat);
    rows.forEach(r => r.style.display = '');
    if (icon) icon.textContent = '▼';
  } else {
    _matLibCollapsed.add(cat);
    rows.forEach(r => r.style.display = 'none');
    if (icon) icon.textContent = '▶';
  }
}
window.toggleMatLibGroup = toggleMatLibGroup;

// Material library inline edit
function handleMatLibEdit(cell) {
  const idx = parseInt(cell.dataset.idx, 10);
  const colIdx = parseInt(cell.dataset.col, 10);
  const cols = ['name', 'spec', 'category', 'price', 'remark'];
  const colTypes = ['text', 'text', 'text', 'number', 'text'];
  const field = cols[colIdx];
  const item = MAT_LIB[idx];
  if (!item) return;
  if (cell.classList.contains('editing')) return;
  cell.classList.add('editing');
  const oldVal = item[field];
  cell.innerHTML = '';
  const input = document.createElement('input');
  input.type = colTypes[colIdx];
  if (input.type === 'number') { input.step = 'any'; }
  input.value = oldVal !== null && oldVal !== undefined ? oldVal : '';
  cell.appendChild(input);
  input.focus(); input.select();
  const finish = (save) => {
    if (save) {
      const raw = input.value.trim();
      item[field] = colTypes[colIdx] === 'number' ? (raw === '' ? null : parseFloat(raw)) : (raw === '' ? '' : raw);
    }
    cell.classList.remove('editing');
    persistMatLib();
    renderMatLib();
  };
  input.addEventListener('blur', () => finish(true));
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') { e.preventDefault(); finish(true); }
    if (e.key === 'Escape') finish(false);
  });
}

function addMatLibRow() {
  const id = 'MAT-' + String(_matLibNextId).padStart(4, '0');
  _matLibNextId++;
  MAT_LIB.push({ id, name: '新材料', spec: '', category: '其他', price: 0, remark: '' });
  persistMatLib();
  renderMatLib();
  showToast('已添加新材料: ' + id);
}

function deleteMatLibItem(idx) {
  const m = MAT_LIB[idx];
  if (!confirm(`确定要删除材料 "${m.name}" (${m.id}) 吗？`)) return;
  MAT_LIB.splice(idx, 1);
  persistMatLib();
  renderMatLib();
  showToast('已删除: ' + m.name);
}

function exportMatLib() {
  let csv = '﻿材料ID,材料名称,规格,分类,标准价格(万/T),备注\n';
  MAT_LIB.forEach(m => {
    csv += [m.id, m.name, m.spec||'', m.category, m.price, m.remark||''].map(csvEscape).join(',') + '\n';
  });
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = `材料库_${new Date().toISOString().split('T')[0]}.csv`;
  a.click(); URL.revokeObjectURL(url);
  showToast('材料库已导出');
}

// ============ 材料导入 (Excel/CSV) ============
function importMaterials() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.xlsx,.xls,.csv,.pdf';
  input.onchange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    showToast('正在解析文件: ' + file.name + '...');
    try {
      let rows = [];
      const ext = file.name.split('.').pop().toLowerCase();
      if (ext === 'csv') {
        const text = await file.text();
        rows = parseCSVRows(text);
      } else if (ext === 'xlsx' || ext === 'xls') {
        // Use SheetJS if available, otherwise parse as binary
        rows = await parseXLSX(file);
      } else if (ext === 'pdf') {
        rows = await parsePDF(file);
        showToast('PDF解析完成，请检查预览数据');
      } else {
        showToast('不支持的文件格式: ' + ext); return;
      }
      if (rows.length === 0) {
        showToast('未能从文件中解析到数据，请检查文件格式'); return;
      }
      showImportPreview(rows, file.name);
    } catch(err) {
      showToast('文件解析失败: ' + err.message);
      console.error(err);
    }
  };
  input.click();
}

function parseCSVRows(text) {
  const lines = text.split(/\r?\n/).filter(l => l.trim());
  if (lines.length < 2) return [];
  // Auto-detect columns
  const header = lines[0].replace(/^﻿/, '');
  const cols = header.split(/[,\t]/).map(h => h.trim().replace(/"/g, ''));
  // Find name and price column indices; utilization belongs to material detail rows, not the material library
  const nameIdx = cols.findIndex(c => /材料名称|名称|name|材料|material/i.test(c));
  const priceIdx = cols.findIndex(c => /价格|单价|price|万/i.test(c));
  const specIdx = cols.findIndex(c => /规格|spec/i.test(c));
  const catIdx = cols.findIndex(c => /分类|类别|category/i.test(c));
  const rows = [];
  for (let i = 1; i < lines.length; i++) {
    const vals = lines[i].split(/[,\t]/).map(v => v.trim().replace(/"/g, ''));
    if (vals.length < 2) continue;
    rows.push({
      name: nameIdx >= 0 ? (vals[nameIdx] || '') : (vals[0] || ''),
      spec: specIdx >= 0 ? (vals[specIdx] || '') : '',
      category: catIdx >= 0 ? (vals[catIdx] || '其他') : '其他',
      price: priceIdx >= 0 ? (parseFloat(vals[priceIdx]) || 0) : (parseFloat(vals[1]) || 0),
      remark: ''
    });
  }
  return rows;
}

async function parseXLSX(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      // Simple XLSX: try to find sheet data in zip
      // For now, attempt basic binary extraction
      try {
        // Try reading as CSV/text first (many "Excel" files are actually CSV)
        const text = new TextDecoder('utf-8').decode(data);
        if (text.includes(',') || text.includes('\t')) {
          resolve(parseCSVRows(text));
          return;
        }
      } catch(e) {}
      // Fallback: try to find strings in binary
      const strings = extractStringsFromBinary(data);
      resolve(stringsToRows(strings));
    };
    reader.readAsArrayBuffer(file);
  });
}

function extractStringsFromBinary(data) {
  // Extract readable strings from binary
  const strs = [];
  let cur = '';
  for (let i = 0; i < data.length; i++) {
    const b = data[i];
    if (b >= 0x20 && b < 0x7f) {
      cur += String.fromCharCode(b);
    } else {
      if (cur.length > 3) strs.push(cur);
      cur = '';
    }
  }
  if (cur.length > 3) strs.push(cur);
  return strs;
}

function stringsToRows(strings) {
  // Try to find material-like strings (containing \ or 钢/铁/铜 etc.)
  const materialPattern = /[\\钢铜铝铁铸锻绝缘管材]/;
  const rows = [];
  let currentName = '';
  for (const s of strings) {
    if (materialPattern.test(s) && s.length > 3) {
      currentName = s;
    } else if (/^\d+\.?\d*$/.test(s) && currentName) {
      rows.push({ name: currentName, spec: '', category: '其他', price: parseFloat(s), remark: '' });
      currentName = '';
    }
  }
  return rows;
}

async function parsePDF(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const text = new TextDecoder('utf-8').decode(data);
      // PDF text extraction: find table-like content
      const lines = text.split(/\r?\n/).filter(l => l.trim());
      const rows = [];
      for (const line of lines) {
        // Look for material name + price patterns
        const parts = line.split(/\s{2,}/);
        if (parts.length >= 2) {
          const name = parts[0].trim();
          const numericParts = parts.filter(p => /^\d+\.?\d*$/.test(p.trim()));
          if (numericParts.length >= 1 && name.length > 2) {
            rows.push({
              name, spec: parts.length >= 3 ? parts[1].trim() : '',
              category: '其他',
              price: parseFloat(numericParts[0]) || 0,
              remark: ''
            });
          }
        }
      }
      resolve(rows);
    };
    reader.readAsArrayBuffer(file);
  });
}

function showImportPreview(rows, fileName) {
  // Detect conflicts: same name+spec combo
  const conflicts = [];
  rows.forEach(r => {
    const existing = MAT_LIB.find(m => m.name === r.name);
    if (existing) conflicts.push({ imported: r, existing });
  });
  _importPreview = { rows, conflicts, fileName };

  document.getElementById('importPreviewCard').style.display = 'block';
  document.getElementById('importPreviewSub').textContent = `文件: ${fileName} · 解析到 ${rows.length} 条数据 · ${conflicts.length} 条冲突`;

  let html = `<thead><tr>
    <th style="width:30px;">#</th><th>材料名称</th><th>规格</th><th>分类</th>
    <th class="num">价格</th><th>状态</th><th>操作</th>
  </tr></thead><tbody>`;
  rows.forEach((r, i) => {
    const isConflict = conflicts.some(c => c.imported === r);
    const status = isConflict ? '<span style="color:var(--amber);">冲突</span>' : '<span style="color:var(--green);">新增</span>';
    html += `<tr class="${isConflict ? '' : ''}" id="previewRow${i}">
      <td>${i+1}</td>
      <td class="editable-cell" data-preview="${i}" data-field="name">${r.name}</td>
      <td class="editable-cell" data-preview="${i}" data-field="spec">${r.spec||'—'}</td>
      <td class="editable-cell" data-preview="${i}" data-field="category">${r.category}</td>
      <td class="editable-cell num" data-preview="${i}" data-field="price">${fmt(r.price,4)}</td>
      <td>${status}${isConflict ? ' (已有: '+conflicts.find(c=>c.imported===r).existing.id+')' : ''}</td>
      <td><button class="btn-reset" onclick="removePreviewRow(${i})" style="font-size:11px;padding:2px 6px;">删除</button></td>
    </tr>`;
  });
  html += `</tbody>`;
  document.getElementById('importPreviewTable').innerHTML = html;
  document.getElementById('importConflictInfo').textContent = conflicts.length > 0 ? `检测到 ${conflicts.length} 条重复材料，导入时将覆盖现有数据` : '';

  // Add conflict resolution buttons
  if (conflicts.length > 0) {
    const conflictDiv = document.getElementById('importConflictInfo');
    conflictDiv.innerHTML = `检测到 ${conflicts.length} 条重复材料 ·
      <button class="btn" onclick="resolveConflicts('skip')" style="font-size:11px;padding:2px 8px;">跳过重复</button>
      <button class="btn" onclick="resolveConflicts('overwrite')" style="font-size:11px;padding:2px 8px;">覆盖现有</button>
      <button class="btn" onclick="resolveConflicts('new')" style="font-size:11px;padding:2px 8px;">全部新建</button>`;
  }
}

function removePreviewRow(idx) {
  if (!_importPreview) return;
  _importPreview.rows.splice(idx, 1);
  _importPreview.conflicts = [];
  _importPreview.rows.forEach(r => {
    const existing = MAT_LIB.find(m => m.name === r.name);
    if (existing) _importPreview.conflicts.push({ imported: r, existing });
  });
  showImportPreview(_importPreview.rows, _importPreview.fileName);
}

function resolveConflicts(mode) {
  if (!_importPreview) return;
  if (mode === 'skip') {
    _importPreview.rows = _importPreview.rows.filter(r => !_importPreview.conflicts.some(c => c.imported === r));
  }
  _importPreview.conflicts = [];
  showImportPreview(_importPreview.rows, _importPreview.fileName);
}

function cancelImport() {
  _importPreview = null;
  document.getElementById('importPreviewCard').style.display = 'none';
}

function confirmImport() {
  if (!_importPreview || _importPreview.rows.length === 0) { showToast('没有可导入的数据'); return; }
  let added = 0, updated = 0;
  _importPreview.rows.forEach(r => {
    const existing = MAT_LIB.find(m => m.name === r.name);
    if (existing) {
      existing.price = r.price;
      if (r.spec) existing.spec = r.spec;
      if (r.category !== '其他') existing.category = r.category;
      updated++;
    } else {
      const id = 'MAT-' + String(_matLibNextId).padStart(4, '0');
      _matLibNextId++;
      MAT_LIB.push({ id, name: r.name, spec: r.spec || '', category: r.category, price: r.price, remark: r.remark || '' });
      added++;
    }
  });
  // Also update MATERIAL_PRICE_DB cache entries
  _importPreview.rows.forEach(r => {
    const key = r.name.trim().replace(/\s+/g, '');
    MATERIAL_PRICE_DB.set(key, { p: r.price });
  });
  PRICE_CACHE.clear();

  // Log
  MAT_IMPORT_LOG.unshift({
    time: new Date().toLocaleString(),
    fileName: _importPreview.fileName,
    success: added + updated,
    fail: 0,
    remark: `新增 ${added} 条，更新 ${updated} 条`
  });
  if (MAT_IMPORT_LOG.length > 100) MAT_IMPORT_LOG.length = 100;

  persistMatLib();
  cancelImport();
  renderMatLib();
  renderImportLog();
  showToast(`导入完成: 新增 ${added} 条, 更新 ${updated} 条`);
  // Recalc all material tables with new prices
  ['water','gen','valve','valve_door'].forEach(k => FormulaEngine.recalcTable(k));
  renderAll();
}

function renderImportLog() {
  const body = document.getElementById('importLogBody');
  if (!body) return;
  if (MAT_IMPORT_LOG.length === 0) {
    body.innerHTML = '<tr><td colspan="5" style="text-align:center;color:var(--text-dim);">暂无导入记录</td></tr>';
    return;
  }
  body.innerHTML = MAT_IMPORT_LOG.map(l =>
    `<tr><td>${l.time}</td><td>${l.fileName}</td><td style="color:var(--green);">${l.success}</td><td style="color:var(--red);">${l.fail||0}</td><td>${l.remark||''}</td></tr>`
  ).join('');
  document.getElementById('importLogInfo').textContent = `共 ${MAT_IMPORT_LOG.length} 条导入记录`;
}

// ============ 批量更新价格 ============
function batchUpdatePrices() {
  if (!confirm('将用材料库中的最新标准价格更新所有材料明细表金额；利用率保持材料明细行当前值，确定继续？')) return;
  let updated = 0;
  ['water','gen','valve','valve_door'].forEach(dk => {
    const items = DATA[dk];
    if (!items) return;
    items.forEach(row => {
      if (!row.material || !row.material.trim()) return;
      const match = MAT_LIB.find(m => m.name === row.material.trim().replace(/\s+/g, ''));
      if (match) {
        updated++;
      }
    });
    FormulaEngine.recalcTable(dk);
  });
  persistData();
  renderAll();
  showToast(`批量更新完成: 匹配到 ${updated} 条材料`);
}


function findMaterialDetailDefaultUsage(materialName, dataKey, row) {
  const mat = (materialName || '').trim();
  if (!mat) return null;
  const keys = dataKey ? [dataKey, ...['water','gen','valve','valve_door'].filter(k => k !== dataKey)] : ['water','gen','valve','valve_door'];
  const normalize = s => String(s || '').trim().replace(/\s+/g, '');
  const matKey = normalize(mat);
  const candidates = [];
  keys.forEach(k => {
    (DATA[k] || []).forEach(r => {
      const u = parseFloat(r.usage);
      if (!r || !r.material || isNaN(u) || u <= 0) return;
      const rk = normalize(r.material);
      if (rk === matKey || rk.includes(matKey) || matKey.includes(rk)) {
        let score = 0;
        if (k === dataKey) score += 4;
        if (row && normalize(r.name) === normalize(row.name)) score += 3;
        if (row && normalize(r.category) === normalize(row.category)) score += 1;
        candidates.push({ score, usage: u });
      }
    });
  });
  candidates.sort((a,b) => b.score - a.score);
  return candidates.length ? candidates[0].usage : null;
}

// ============ 材料明细表与材料库自动联动 ============
// Lookup material in library for auto-fill
function lookupMatLib(materialName) {
  if (!materialName || !materialName.trim()) return null;
  const key = materialName.trim().replace(/\s+/g, '');
  // Exact match in MAT_LIB
  let match = MAT_LIB.find(m => m.name === key);
  if (match) return match;
  // Fuzzy: prefix matching
  const parts = key.split('\\');
  for (let i = parts.length; i >= 1; i--) {
    const partial = parts.slice(0, i).join('\\');
    match = MAT_LIB.find(m => m.name === partial);
    if (match) return match;
  }
  // Substring match
  match = MAT_LIB.find(m => m.name.includes(key) || key.includes(m.name));
  return match || null;
}

// ============ 渲染:方案 ============
function renderScenarios() {
  const host = document.getElementById('scenarioList');
  const hint = document.getElementById('scenarioHint');
  const compare = document.getElementById('scenarioCompareCard');
  if (state.scenarios.length === 0) {
    host.innerHTML = '';
    hint.textContent = '暂无保存的方案。调整左侧参数后点击"保存当前方案"。';
    compare.style.display = 'none';
    return;
  }
  hint.textContent = `已保存 ${state.scenarios.length} 个方案，点击任一方案可加载到左侧参数面板`;
  host.innerHTML = state.scenarios.map((s, idx) => `
    <div class="scenario-card" onclick="loadScenario(${idx})">
      <button class="x-btn" onclick="deleteScenario(${idx}, event)" title="删除">×</button>
      <div class="scenario-card-name">${escHtml(s.name)}</div>
      <div class="scenario-card-value">${fmt(s.totalBid, 0)} 万</div>
      <div class="scenario-card-stats">单台 ${fmt(s.perUnit, 0)} · 消化 ${fmt(s.absorbPct * 100, 1)}%</div>
      <div class="scenario-card-stats">加价 ${Math.round(s.inputs.selfMarkup*100)}%/${Math.round(s.inputs.buyMarkup*100)}% · ${s.inputs.distance}km</div>
    </div>
  `).join('');

  // 横向对比
  if (state.scenarios.length >= 2) {
    compare.style.display = 'block';
    const rows = [
      { label: '项目名称', fn: s => s.inputs.projectName },
      { label: '机组台数', fn: s => s.inputs.unitCount + ' 台' },
      { label: '水机重量', fn: s => fmt(s.inputs.waterWeight, 1) + ' T' },
      { label: '发机重量', fn: s => fmt(s.inputs.genWeight, 1) + ' T' },
      { label: '阀门重量', fn: s => fmt(s.inputs.valveWeight, 1) + ' T' },
      { label: '自制加价', fn: s => Math.round(s.inputs.selfMarkup * 100) + '%' },
      { label: '外购加价', fn: s => Math.round(s.inputs.buyMarkup * 100) + '%' },
      { label: '运输距离', fn: s => s.inputs.distance + ' km' },
      { label: '拟投标总价', fn: s => fmt(s.totalBid, 2) + ' 万', highlight: true },
      { label: '单台报价', fn: s => fmt(s.perUnit, 2) + ' 万', highlight: true },
      { label: '固定成本', fn: s => fmt(s.totalFixed, 2) + ' 万' },
      { label: '消化占比', fn: s => fmt(s.absorbPct * 100, 2) + '%', highlight: true }
    ];
    const html = `
      <thead><tr>
        <th>对比项</th>
        ${state.scenarios.map(s => `<th>${escHtml(s.name)}</th>`).join('')}
      </tr></thead>
      <tbody>
        ${rows.map(r => `<tr ${r.highlight ? 'class="subtotal"' : ''}>
          <td><strong>${r.label}</strong></td>
          ${state.scenarios.map(s => `<td>${r.fn(s)}</td>`).join('')}
        </tr>`).join('')}
      </tbody>`;
    document.getElementById('scenarioCompareTable').innerHTML = html;
  } else {
    compare.style.display = 'none';
  }
}

function saveScenario() {
  const r = compute();
  const name = prompt('方案名称：', `方案 ${state.scenarios.length + 1}`);
  if (!name) return;
  takeProjectSnapshot('保存方案');
  state.scenarios.push({
    name,
    inputs: { ...r.inputs },
    totalBid: r.totalBid,
    totalFixed: r.totalFixed,
    absorbPct: r.absorbPct,
    perUnit: r.inputs.unitCount > 0 ? r.totalBid / r.inputs.unitCount : 0
  });
  if (state.scenarios.length > 8) state.scenarios.shift();
  renderScenarios();
}

function loadScenario(idx) {
  const s = state.scenarios[idx];
  takeProjectSnapshot('加载方案');
  Object.keys(s.inputs).forEach(k => {
    const el = document.getElementById(k);
    if (el && k !== 'hasWater' && k !== 'hasGen' && k !== 'hasValve') {
      el.value = (k === 'selfMarkup' || k === 'buyMarkup') ? s.inputs[k] * 100 : s.inputs[k];
    }
  });
  state.hasWater = s.inputs.hasWater;
  state.hasGen = s.inputs.hasGen;
  state.hasValve = s.inputs.hasValve;
  syncToggles();
  updateSliderDisplays();
  renderAll();
}

function deleteScenario(idx, e) {
  e.stopPropagation();
  takeProjectSnapshot('删除方案');
  state.scenarios.splice(idx, 1);
  renderScenarios();
}

function resetDefaults() {
  if (!confirm('确定要恢复所有参数到默认值吗？')) return;
  takeProjectSnapshot('重置默认参数');
  Object.keys(DEFAULTS).forEach(k => {
    const el = document.getElementById(k);
    if (el) el.value = DEFAULTS[k];
  });
  state.hasWater = state.hasGen = state.hasValve = 1;
  syncToggles();
  updateSliderDisplays();
  renderAll();
}

// 跳转到指定主机的材料明细
function jumpToMaterial(machineKey) {
  // 阀门跳转到 valve_door（整体外购阀门），valve 表仅为参考
  const matTabMap = { water: 'water', gen: 'gen', valve: 'valve_door' };
  const matTab = matTabMap[machineKey] || 'water';
  state.currentMatTab = matTab;
  // Switch to materials page
  document.querySelectorAll('#tabsNav button').forEach(x => x.classList.remove('active'));
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const matNavBtn = document.querySelector('#tabsNav button[data-page="materials"]');
  if (matNavBtn) matNavBtn.classList.add('active');
  const matPage = document.getElementById('page-materials');
  if (matPage) matPage.classList.add('active');
  // Update material sub-tabs
  document.querySelectorAll('#matTabs button').forEach(x => x.classList.toggle('on', x.dataset.mat === matTab));
  renderMaterials();
  showToast('已跳转到' + (machineKey === 'water' ? '水轮机' : machineKey === 'gen' ? '发电机' : '进水阀(整机)') + '材料明细');
}

function syncToggles() {
  document.querySelectorAll('#waterToggle button').forEach(b => b.classList.toggle('on', parseInt(b.dataset.v, 10) === state.hasWater));
  document.querySelectorAll('#genToggle button').forEach(b => b.classList.toggle('on', parseInt(b.dataset.v, 10) === state.hasGen));
  document.querySelectorAll('#valveToggle button').forEach(b => b.classList.toggle('on', parseInt(b.dataset.v, 10) === state.hasValve));
}

function updateSliderDisplays() {
  const selfDisp = document.getElementById('selfMarkupDisp');
  const buyDisp  = document.getElementById('buyMarkupDisp');
  const distDisp = document.getElementById('distanceDisp');
  const selfSlider = document.getElementById('selfMarkup');
  const buySlider  = document.getElementById('buyMarkup');
  const distSlider = document.getElementById('distance');
  if (selfDisp && selfSlider && selfDisp !== document.activeElement) selfDisp.value = selfSlider.value;
  if (buyDisp  && buySlider  && buyDisp  !== document.activeElement) buyDisp.value  = buySlider.value;
  if (distDisp && distSlider && distDisp !== document.activeElement) distDisp.value = distSlider.value;
}

// 手动输入数值同步到滑块
(function bindSliderDispInputs() {
  const pairs = [
    { dispId: 'selfMarkupDisp', sliderId: 'selfMarkup', min: 0, max: 200 },
    { dispId: 'buyMarkupDisp',  sliderId: 'buyMarkup',  min: 0, max: 50  },
    { dispId: 'distanceDisp',   sliderId: 'distance',   min: 100, max: 8000 }
  ];
  pairs.forEach(({ dispId, sliderId, min, max }) => {
    const disp   = document.getElementById(dispId);
    const slider = document.getElementById(sliderId);
    if (!disp || !slider) return;
    disp.addEventListener('input', () => {
      let v = parseFloat(disp.value);
      if (isNaN(v)) return;
      v = Math.max(min, Math.min(max, v));
      slider.value = v;
      renderAll();
    });
    disp.addEventListener('blur', () => {
      let v = parseFloat(disp.value);
      if (isNaN(v)) v = parseFloat(slider.value);
      v = Math.max(min, Math.min(max, v));
      disp.value  = v;
      slider.value = v;
      renderAll();
    });
    disp.addEventListener('keydown', e => {
      if (e.key === 'Enter') { disp.blur(); }
      if (e.key === 'Escape') { disp.value = slider.value; disp.blur(); }
    });
  });
})();

// ============ 渲染所有 ============
function renderAll() {
  const safeRender = function(name, fn) {
    try { fn(); } catch(e) {
      console.error('renderAll: ' + name + ' 失败:', e);
      if (!window._renderErrorShown) {
        window._renderErrorShown = true;
        showToast('渲染 ' + name + ' 时出错，部分内容可能未更新');
      }
    }
  };
  window._renderErrorShown = false;
  safeRender('syncSidebarFromMaterials', syncSidebarFromMaterials);
  var r;
  try { r = compute(); } catch(e) { console.error('compute 失败:', e); showToast('计算时出错'); return; }
  safeRender('renderOverview', function() { renderOverview(r); });
  safeRender('renderMachines', function() { renderMachines(r); });
  safeRender('renderCharts', function() { renderCharts(r); });
  safeRender('renderTransport', function() { renderTransport(r); });
  safeRender('renderAgency', function() { renderAgency(r); });
  safeRender('renderBidAnalysis', function() { renderBidAnalysis(r); });
  safeRender('renderMaterials', renderMaterials);
  safeRender('renderParts', renderParts);
  safeRender('renderTools', renderTools);
  safeRender('renderAuto', renderAuto);
  safeRender('renderLiaison', renderLiaison);
  safeRender('renderMatLib', renderMatLib);
  safeRender('renderScenarios', renderScenarios);
  safeRender('renderImportLog', renderImportLog);
  safeRender('updateExportButtons', updateExportButtons);
}

// ============ 渲染:竞价分析 ============
let chBidLadder;
function renderBidAnalysis(r) {
  if (!r || !r.totalBid) return;
  const cost = r.totalFixed; // 固定成本
  const bid = r.totalBid;
  const margin = bid > 0 ? (bid - cost) / bid : 0;

  // 保本价（成本 + 最低5%管理费）
  const floor = cost * 1.05;
  // 建议区间：成本 * 1.25 ~ 1.45
  const suggestLow = cost * 1.25;
  const suggestHigh = cost * 1.45;

  // 胜率算法：消化率越低胜率越高（低价高胜率）
  // 消化率20%以下=90%胜率，35%=60%，50%=30%，>60%=10%
  const absorbPct = r.absorbPct * 100;
  let winRate;
  if (absorbPct < 15) winRate = 92;
  else if (absorbPct < 25) winRate = 80 - (absorbPct - 15) * 1.5;
  else if (absorbPct < 38) winRate = 65 - (absorbPct - 25) * 2.2;
  else if (absorbPct < 52) winRate = 36 - (absorbPct - 38) * 1.8;
  else winRate = Math.max(5, 11 - (absorbPct - 52) * 0.5);
  winRate = Math.min(95, Math.max(5, winRate));

  document.getElementById('baWinRate').textContent = winRate.toFixed(0) + '%';
  document.getElementById('baFloor').textContent = fmt(floor, 0) + ' 万';
  document.getElementById('baSuggest').textContent = fmt(suggestLow, 0) + ' ~ ' + fmt(suggestHigh, 0) + ' 万';

  // 仪表盘弧形
  const arc = document.getElementById('gaugeArc');
  const gaugeText = document.getElementById('gaugeText');
  if (arc) {
    const total = 188; // 半圆周长
    const filled = total * (winRate / 100);
    arc.setAttribute('stroke-dasharray', `${filled} ${total - filled}`);
    gaugeText.textContent = winRate.toFixed(0) + '%';
    gaugeText.setAttribute('fill', winRate > 60 ? 'var(--green)' : winRate > 35 ? 'var(--amber)' : 'var(--red)');
  }

  // 胜率评语
  const comment = document.getElementById('baWinComment');
  if (comment) {
    let txt = '';
    if (winRate > 70) txt = `<span style="color:var(--green);font-weight:600;">报价竞争力强 ✅</span><br>当前报价相对较低，胜算较大。可考虑适当上浮 <strong>${fmt(suggestLow - bid, 0)}</strong> 万元以提升利润空间，同时不影响中标概率。`;
    else if (winRate > 45) txt = `<span style="color:var(--amber);font-weight:600;">报价处于合理区间 ⚠️</span><br>当前胜率适中。建议报价在 <strong>${fmt(suggestLow, 0)}~${fmt(suggestHigh, 0)}</strong> 万元之间，兼顾竞争力与利润。`;
    else txt = `<span style="color:var(--red);font-weight:600;">报价偏高，胜率较低 ❌</span><br>当前消化率 <strong>${absorbPct.toFixed(1)}%</strong> 较高，建议检查成本构成，或将报价降至 <strong>${fmt(suggestLow, 0)}</strong> 万以内以提升竞争力。`;
    comment.innerHTML = txt;
  }

  // 敏感度分析
  const sensEl = document.getElementById('baSensitivity');
  if (sensEl) {
    const scenarios = [
      { label: '报价 -10%', val: bid * 0.9, color: 'var(--red)' },
      { label: '报价 -5%',  val: bid * 0.95, color: 'var(--amber)' },
      { label: '当前报价',  val: bid, color: 'var(--blue)', current: true },
      { label: '报价 +5%',  val: bid * 1.05, color: 'var(--green)' },
      { label: '报价 +10%', val: bid * 1.1, color: 'var(--teal)' },
    ];
    sensEl.innerHTML = scenarios.map(s => {
      const profit = s.val - cost;
      const pct = s.val > 0 ? (profit / s.val * 100) : 0;
      const barW = Math.max(0, Math.min(100, pct * 2));
      return `<div class="sensitivity-row" style="${s.current ? 'font-weight:600;' : ''}">
        <span style="width:80px;font-size:11.5px;">${s.label}</span>
        <div class="sensitivity-bar"><div class="sensitivity-fill" style="width:${barW}%;background:${s.color};"></div></div>
        <span style="width:70px;text-align:right;font-size:11.5px;color:${s.color};font-family:monospace;">${fmt(profit, 0)} 万</span>
        <span style="width:44px;text-align:right;font-size:11px;color:var(--text-dim);">${pct.toFixed(1)}%</span>
      </div>`;
    }).join('');
  }

  // 策略建议卡片
  const stratEl = document.getElementById('baStrategy');
  if (stratEl) {
    const cards = [
      { icon: '🔴', title: '保底价', val: fmt(floor, 0) + ' 万', desc: '成本+5%管理费，最低不可低于此价', color: 'var(--red-light)', border: 'var(--red)' },
      { icon: '🟡', title: '竞争价', val: fmt(suggestLow, 0) + ' 万', desc: '成本×1.25，兼顾竞争力与基本利润', color: 'var(--amber-light)', border: 'var(--amber)' },
      { icon: '🟢', title: '目标价', val: fmt(suggestHigh, 0) + ' 万', desc: '成本×1.45，理想利润区间上限', color: 'var(--green-light)', border: 'var(--green)' },
    ];
    stratEl.innerHTML = cards.map(c => `
      <div style="background:${c.color};border:1px solid ${c.border};border-radius:8px;padding:14px;text-align:center;">
        <div style="font-size:22px;margin-bottom:4px;">${c.icon}</div>
        <div style="font-size:11px;color:var(--text-dim);margin-bottom:6px;text-transform:uppercase;letter-spacing:0.08em;">${c.title}</div>
        <div style="font-size:20px;font-weight:700;font-family:monospace;color:var(--text);">${c.val}</div>
        <div style="font-size:11px;color:var(--text-muted);margin-top:6px;">${c.desc}</div>
      </div>`).join('');
  }

  // 价格阶梯图
  const steps = 9;
  const labels = [], profitData = [], winData = [];
  for (let i = 0; i < steps; i++) {
    const pct = -20 + i * 5; // -20% to +20%
    const v = bid * (1 + pct / 100);
    const p = v - cost;
    const pPct = v > 0 ? p / v * 100 : 0;
    let wr;
    const absP = ((v - cost) / v) * 100;
    if (absP < 15) wr = 92; else if (absP < 25) wr = 80 - (absP - 15) * 1.5;
    else if (absP < 38) wr = 65 - (absP - 25) * 2.2; else if (absP < 52) wr = 36 - (absP - 38) * 1.8;
    else wr = Math.max(5, 11 - (absP - 52) * 0.5);
    wr = Math.min(95, Math.max(5, wr));
    labels.push((pct >= 0 ? '+' : '') + pct + '%');
    profitData.push(parseFloat(p.toFixed(1)));
    winData.push(parseFloat(wr.toFixed(1)));
  }
  const ladderData = {
    labels,
    datasets: [
      { label: '利润(万元)', data: profitData, type: 'bar', backgroundColor: profitData.map(v => v > 0 ? 'rgba(31,170,107,0.7)' : 'rgba(224,64,96,0.7)'), borderRadius: 4, yAxisID: 'y' },
      { label: '预估胜率(%)', data: winData, type: 'line', borderColor: 'var(--blue)', backgroundColor: 'rgba(59,111,212,0.1)', tension: 0.4, yAxisID: 'y2', pointBackgroundColor: 'var(--blue)', pointRadius: 4 }
    ]
  };
  const ctx = document.getElementById('chBidLadder');
  if (ctx) {
    if (chBidLadder) { chBidLadder.data = ladderData; chBidLadder.update(); }
    else chBidLadder = new Chart(ctx, {
      data: ladderData,
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: {
          legend: { position: 'bottom', labels: { boxWidth: 10, font: { size: 11 } } },
          tooltip: { callbacks: { label: c => c.dataset.label + ': ' + c.parsed.y + (c.datasetIndex === 1 ? '%' : ' 万') } }
        },
        scales: {
          x: { grid: { display: false } },
          y: { beginAtZero: false, ticks: { callback: v => v + ' 万', font: { size: 11 } }, title: { display: true, text: '利润 (万元)', font: { size: 11 } } },
          y2: { position: 'right', min: 0, max: 100, ticks: { callback: v => v + '%', font: { size: 11 } }, grid: { display: false }, title: { display: true, text: '胜率', font: { size: 11 } } }
        }
      }
    });
  }
}

// 更新导出/打印按钮状态
function updateExportButtons() {
  const exportBtn = document.getElementById('exportCsvBtn');
  const printBtn = document.getElementById('printBtn');
  const disabled = !hasAnyMachine();
  if (exportBtn) exportBtn.disabled = disabled;
  if (printBtn) printBtn.disabled = disabled;
}

// ============ 打印 PDF ============
function handlePrint() {
  if (!hasAnyMachine()) { showToast('请至少选择一个主机类型后再打印'); return; }
  window.print();
}

// ============ 导出 CSV ============
function exportCSV() {
  if (!hasAnyMachine()) { showToast('请至少选择一个主机类型后再导出'); return; }
  const r = compute();
  let csv = '\ufeff';
  csv += `水电站投标价格分析报告\n`;
  csv += `项目名称,${csvEscape(r.inputs.projectName)}\n`;
  csv += `机组台数,${r.inputs.unitCount}\n`;
  csv += `水轮机,${state.hasWater ? '有' : '无'}\n`;
  csv += `发电机,${state.hasGen ? '有' : '无'}\n`;
  csv += `阀门,${state.hasValve ? '有' : '无'}\n\n`;
  csv += `=== 报价明细 ===\n`;
  csv += `项目,单台自制,单台外购,自制加价,外购加价,单台成本,数量,单价,总价\n`;
  r.items.forEach(it => {
    csv += `${it.name},${it.self.toFixed(2)},${it.buy.toFixed(2)},${it.selfM.toFixed(2)},${it.buyM.toFixed(2)},${it.cost.toFixed(2)},${it.qty},${it.unit.toFixed(2)},${it.total.toFixed(2)}\n`;
  });
  csv += `\n拟投标总价 (万元),${r.totalBid.toFixed(2)}\n`;
  csv += `固定成本 (万元),${r.totalFixed.toFixed(2)}\n`;
  csv += `消化费用 (万元),${r.absorb.toFixed(2)}\n`;
  csv += `消化占比,${(r.absorbPct * 100).toFixed(2)}%\n`;
  csv += `招标代理费 (万元),${r.agencyFee.fee.toFixed(2)}\n`;

  
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${r.inputs.projectName}_报价_${new Date().toISOString().split('T')[0]}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

// ============ 事件 ============
document.querySelectorAll('input').forEach(el => {
  el.addEventListener('input', () => {
    updateSliderDisplays();
    if (el.classList.contains('auto-computed')) {
      // 判断是程序同步还是用户手动修改：对比当前值与材料汇总值
      const curVal = parseFloat(el.value);
      const compVal = _matComputed[el.id] !== undefined ? parseFloat(_matComputed[el.id].toFixed(4)) : NaN;
      if (!isNaN(curVal) && !isNaN(compVal) && Math.abs(curVal - compVal) > 0.001) {
        _sidebarOverrides.add(el.id);
      } else {
        _sidebarOverrides.delete(el.id);
      }
      checkSidebarConsistency();
      // 只刷新计算和概览，不触发材料→侧边栏同步
      const r = compute();
      renderOverview(r);
      renderMachines(r);
      renderCharts(r);
      renderTransport(r);
      renderAgency(r);
      renderScenarios();
    } else {
      renderAll();
    }
  });
  // 双击恢复材料汇总值
  if (el.classList.contains('auto-computed')) {
    el.addEventListener('dblclick', () => {
      if (_matComputed[el.id] !== undefined) {
        _sidebarOverrides.delete(el.id);
        el.value = _matComputed[el.id].toFixed ? parseFloat(_matComputed[el.id].toFixed(4)).toString() : _matComputed[el.id].toString();
        checkSidebarConsistency();
        renderAll();
        showToast('已恢复为材料汇总值');
      }
    });
  }
});

// 标签页切换
document.querySelectorAll('#tabsNav button').forEach(b => {
  b.addEventListener('click', () => {
    document.querySelectorAll('#tabsNav button').forEach(x => x.classList.remove('active'));
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    b.classList.add('active');
    document.getElementById('page-' + b.dataset.page).classList.add('active');
    renderAll();
  });
});

// 主机有/无开关
function handleMachineToggle() {
  autoSwitchPartsTab();
  autoSwitchToolsTab();
  syncToggles();
  renderAll();
  showToast('已自动更新备件和工具清单及汇总数据');
}
document.querySelectorAll('#waterToggle button').forEach(b => {
  b.addEventListener('click', () => {
    state.hasWater = parseInt(b.dataset.v, 10);
    handleMachineToggle();
  });
});
document.querySelectorAll('#genToggle button').forEach(b => {
  b.addEventListener('click', () => {
    state.hasGen = parseInt(b.dataset.v, 10);
    handleMachineToggle();
  });
});
document.querySelectorAll('#valveToggle button').forEach(b => {
  b.addEventListener('click', () => {
    state.hasValve = parseInt(b.dataset.v, 10);
    handleMachineToggle();
  });
});

// 子tab
document.querySelectorAll('#matTabs button').forEach(b => {
  b.addEventListener('click', () => {
    document.querySelectorAll('#matTabs button').forEach(x => x.classList.remove('on'));
    b.classList.add('on');
    state.currentMatTab = b.dataset.mat;
    renderMaterials();
  });
});
document.querySelectorAll('#partsTabs button').forEach(b => {
  b.addEventListener('click', () => {
    document.querySelectorAll('#partsTabs button').forEach(x => x.classList.remove('on'));
    b.classList.add('on');
    state.currentPartsTab = b.dataset.key;
    renderParts();
  });
});
document.querySelectorAll('#toolsTabs button').forEach(b => {
  b.addEventListener('click', () => {
    document.querySelectorAll('#toolsTabs button').forEach(x => x.classList.remove('on'));
    b.classList.add('on');
    state.currentToolsTab = b.dataset.key;
    renderTools();
  });
});

document.getElementById('matSearch').addEventListener('input', renderMaterials);
document.getElementById('matFilter').addEventListener('change', renderMaterials);
document.getElementById('autoSearch').addEventListener('input', renderAuto);
// Material library search/filter
const matLibSearchEl = document.getElementById('matLibSearch');
if (matLibSearchEl) matLibSearchEl.addEventListener('input', renderMatLib);
const matLibCatFilterEl = document.getElementById('matLibCatFilter');
if (matLibCatFilterEl) matLibCatFilterEl.addEventListener('change', renderMatLib);



// 自动化分类树：双击明细行打开二级弹窗，保持弹窗编辑体验
document.addEventListener('dblclick', function(e) {
  if (e.target.closest('#rowEditOverlay') || e.target.closest('#matPickerPanel')) return;
  const row = e.target.closest('#autoTable tr.row-editable');
  if (!row) return;
  const cell = row.querySelector('.editable-cell');
  if (!cell) return;
  const rowIdx = parseInt(cell.dataset.origIdx || cell.dataset.idx, 10);
  if (isNaN(rowIdx)) return;
  e.preventDefault();
  openRowEditModal('data', { dataKey: 'automation', rowIdx, config: _tableConfigs.autoTable });
});

// 二级弹窗编辑：双击普通可编辑单元格/行打开整行编辑
document.addEventListener('dblclick', function(e) {
  if (e.target.closest('#rowEditOverlay') || e.target.closest('#matPickerPanel')) return;
  const libRow = e.target.closest('tr');
  if (libRow && libRow.querySelector('[data-lib="true"]')) {
    const c = libRow.querySelector('[data-lib="true"]');
    if (c && c.dataset.idx !== undefined) {
      e.preventDefault();
      openRowEditModal('matlib', { idx: parseInt(c.dataset.idx, 10) });
      return;
    }
  }
  const cell = e.target.closest('.editable-cell');
  if (!cell) return;
  const tableEl = cell.closest('table');
  if (!tableEl) return;
  const config = _tableConfigs[tableEl.id];
  if (!config) return;
  const rowIdx = parseInt(cell.dataset.origIdx || cell.dataset.idx, 10);
  e.preventDefault();
  openRowEditModal('data', { dataKey: config.dataKey, rowIdx, config });
});


// 自动化分类树：单击单元格仍可走原有快捷编辑
document.addEventListener('click', function(e) {
  if (e.target.closest('.row-edit-btn')) return;
  const cell = e.target.closest('#autoTable .editable-cell');
  if (!cell || cell.classList.contains('formula-cell')) return;
  e.stopPropagation();
  EditableTable.handleClick(e, _tableConfigs.autoTable);
});

// 可编辑表格的点击委托 (document级别，innerHTML替换后依然生效)
document.addEventListener('click', function(e) {
  if (e.target.closest('.row-edit-btn')) return;
  const cell = e.target.closest('.editable-cell');
  if (!cell || cell.classList.contains('formula-cell')) return;
  // Material library cells
  if (cell.dataset.lib === 'true') {
    handleMatLibEdit(cell);
    return;
  }
  // Import preview cells
  if (cell.dataset.preview !== undefined) {
    handlePreviewEdit(cell);
    return;
  }
  // Find which table this cell belongs to
  const tableEl = cell.closest('table');
  if (!tableEl) return;
  const config = _tableConfigs[tableEl.id];
  if (!config) return;
  EditableTable.handleClick(e, config);
});

// Import preview inline edit
function handlePreviewEdit(cell) {
  const idx = parseInt(cell.dataset.preview, 10);
  const field = cell.dataset.field;
  if (!_importPreview || idx >= _importPreview.rows.length) return;
  if (cell.classList.contains('editing')) return;
  cell.classList.add('editing');
  const oldVal = _importPreview.rows[idx][field];
  const isNum = field === 'price';
  cell.innerHTML = '';
  const input = document.createElement('input');
  input.type = isNum ? 'number' : 'text';
  if (isNum) { input.step = 'any'; }
  input.value = oldVal !== null && oldVal !== undefined ? oldVal : '';
  cell.appendChild(input);
  input.focus(); input.select();
  const finish = (save) => {
    if (save) {
      const raw = input.value.trim();
      _importPreview.rows[idx][field] = isNum ? (raw === '' ? 0 : parseFloat(raw)) : raw;
      showImportPreview(_importPreview.rows, _importPreview.fileName);
    } else {
      cell.classList.remove('editing');
      cell.innerHTML = EditableTable.cellDisplay(oldVal, { type: isNum ? 'number' : 'text' });
    }
  };
  input.addEventListener('blur', () => finish(true));
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') { e.preventDefault(); finish(true); }
    if (e.key === 'Escape') finish(false);
  });
}

// 暴露给HTML onclick
window.saveScenario = saveScenario;
window.loadScenario = loadScenario;
window.deleteScenario = deleteScenario;
window.resetDefaults = resetDefaults;
window.exportCSV = exportCSV;
window.EditableTable = EditableTable;

// ============ 右键上下文菜单（全模块通用层级操作）============
(function() {
  // Create menu element
  const menu = document.createElement('div');
  menu.id = 'et-ctx-menu';
  menu.style.display = 'none';
  menu.innerHTML = `
    <div class="ctx-label" id="ctx-row-label">行操作</div>
    <div class="ctx-item" id="ctx-edit">✎ &nbsp;弹窗编辑</div>
    <div class="ctx-sep"></div>
    <div class="ctx-label">插入行</div>
    <div class="ctx-item" id="ctx-insert-after">＋ 插入同级行（之后）</div>
    <div class="ctx-item" id="ctx-add-child">↳ 添加子行</div>
    <div class="ctx-item" id="ctx-add-child2" style="padding-left:24px;font-size:12px;">↳↳ 添加子子行</div>
    <div class="ctx-sep"></div>
    <div class="ctx-label">展开 / 收起</div>
    <div class="ctx-item" id="ctx-expand">▼ 展开所有子行</div>
    <div class="ctx-item" id="ctx-collapse">▶ 收起所有子行</div>
    <div class="ctx-sep"></div>
    <div class="ctx-item danger" id="ctx-delete">🗑 删除行</div>
  `;
  document.body.appendChild(menu);

  let _ctxDataKey = null, _ctxIdx = null, _ctxSeq = null;

  function closeMenu() { menu.style.display = 'none'; }

  // Show menu on right-click inside any editable table
  document.addEventListener('contextmenu', e => {
    const tr = e.target.closest('tr[data-orig-idx]');
    if (!tr) return;
    const table = tr.closest('table');
    if (!table) return;
    // Find dataKey from table config
    let dataKey = null;
    for (const k of Object.keys(_tableConfigs)) {
      if (_tableConfigs[k].tableId === table.id) { dataKey = _tableConfigs[k].dataKey; break; }
    }
    if (!dataKey) return;
    e.preventDefault();

    _ctxIdx = parseInt(tr.dataset.origIdx, 10);
    _ctxDataKey = dataKey;
    _ctxSeq = tr.dataset.seq || '';
    const row = (DATA[dataKey] || [])[_ctxIdx];
    const seqLabel = row ? (row.seq || row.name || `第${_ctxIdx+1}行`) : '';
    document.getElementById('ctx-row-label').textContent = `行: ${String(seqLabel).slice(0,20)}`;

    // Show/hide expand/collapse based on whether row has children
    const items = DATA[dataKey] || [];
    const hasChildren = items.some(r => r !== row && String(r.seq || '').startsWith(_ctxSeq + '.'));
    document.getElementById('ctx-expand').style.display = hasChildren ? '' : 'none';
    document.getElementById('ctx-collapse').style.display = hasChildren ? '' : 'none';

    menu.style.display = 'block';
    const vw = window.innerWidth, vh = window.innerHeight;
    let x = e.clientX + 4, y = e.clientY + 4;
    menu.style.left = (x + 180 > vw ? vw - 185 : x) + 'px';
    menu.style.top  = (y + 320 > vh ? vh - 325 : y) + 'px';
  });

  document.addEventListener('click', e => { if (!menu.contains(e.target)) closeMenu(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });

  function act(fn) {
    closeMenu();
    if (_ctxDataKey !== null && _ctxIdx !== null) fn(_ctxDataKey, _ctxIdx, _ctxSeq);
  }

  document.getElementById('ctx-edit').onclick = () => act((dk, idx) => EditableTable.openRowModal(dk, idx));
  document.getElementById('ctx-insert-after').onclick = () => act((dk, idx) => EditableTable.insertAfter(dk, idx));
  document.getElementById('ctx-add-child').onclick = () => act((dk, idx) => EditableTable.addChildRow(dk, idx));
  document.getElementById('ctx-add-child2').onclick = () => act((dk, idx) => {
    // Add child row first, then add child of that child
    const items = DATA[dk] || [];
    const parentItem = items[idx];
    if (!parentItem) return;
    // Find or create direct child first
    const childSeq = generateChildSeq(items, parentItem);
    const parentSeq = String(parentItem.seq);
    const existingChild = items.find(r => String(r.seq) === childSeq);
    if (existingChild) {
      const childIdx = items.indexOf(existingChild);
      EditableTable.addChildRow(dk, childIdx);
    } else {
      EditableTable.addChildRow(dk, idx);
      // After child is added, find it and add grandchild
      setTimeout(() => {
        const newItems = DATA[dk] || [];
        const newChild = newItems.find(r => String(r.seq) === childSeq);
        if (newChild) EditableTable.addChildRow(dk, newItems.indexOf(newChild));
      }, 50);
    }
  });

  function toggleAllChildren(dk, seq, collapse) {
    const items = DATA[dk] || [];
    // Find all descendant seqs
    items.forEach(r => {
      const s = String(r.seq || '');
      if (s.startsWith(seq + '.')) {
        const key = `et_collapsed_${dk}_${s}`;
        if (collapse) sessionStorage.setItem(key, '1');
        else sessionStorage.removeItem(key);
      }
    });
    const key = `et_collapsed_${dk}_${seq}`;
    if (collapse) sessionStorage.setItem(key, '1');
    else sessionStorage.removeItem(key);
    const cfg = _tableConfigs[Object.keys(_tableConfigs).find(k => _tableConfigs[k].dataKey === dk)];
    if (cfg) EditableTable.render(cfg);
  }

  document.getElementById('ctx-expand').onclick = () => act((dk, idx, seq) => toggleAllChildren(dk, seq, false));
  document.getElementById('ctx-collapse').onclick = () => act((dk, idx, seq) => toggleAllChildren(dk, seq, true));
  document.getElementById('ctx-delete').onclick = () => act((dk, idx) => EditableTable.deleteRow(dk, idx));
})();
window.resetDataTable = resetDataTable;
window.importMaterials = importMaterials;
window.exportMatLib = exportMatLib;
window.addMatLibRow = addMatLibRow;
window.deleteMatLibItem = deleteMatLibItem;
window.batchUpdatePrices = batchUpdatePrices;
window.cancelImport = cancelImport;
window.confirmImport = confirmImport;
window.jumpToMaterial = jumpToMaterial;
window.fixAllConsistency = fixAllConsistency;
window.handlePrint = handlePrint;

// 创建材料下拉选项 datalist
(function() {
  const dl = document.createElement('datalist');
  dl.id = 'materialDatalist';
  const seen = new Set();
  for (const key of MATERIAL_PRICE_DB.keys()) {
    if (seen.has(key)) continue;
    seen.add(key);
    const opt = document.createElement('option');
    opt.value = key;
    dl.appendChild(opt);
  }
  // Also add MAT_LIB entries
  for (const m of MAT_LIB) {
    if (!seen.has(m.name)) {
      seen.add(m.name);
      const opt = document.createElement('option');
      opt.value = m.name;
      dl.appendChild(opt);
    }
  }
  document.body.appendChild(dl);
})();


// ============ 表格尺寸可调 + 记忆 ============
const TABLE_RESIZE_STORAGE_KEY = 'hydro_table_resize_v1';
function loadTableResizePrefs() {
  try { return JSON.parse(localStorage.getItem(TABLE_RESIZE_STORAGE_KEY) || '{}') || {}; }
  catch(e) { return {}; }
}
function saveTableResizePrefs(prefs) {
  try { localStorage.setItem(TABLE_RESIZE_STORAGE_KEY, JSON.stringify(prefs || {})); } catch(e) {}
}
function getTableResizeKey(el) {
  if (!el) return '';
  const table = el.matches('table') ? el : el.querySelector('table');
  if (table && table.id) return table.id;
  if (el.id) return el.id;
  const card = el.closest('.card');
  const title = card ? (card.querySelector('.card-title')?.innerText || '').trim().replace(/\s+/g, '_') : '';
  const idx = Array.from(document.querySelectorAll('.table-wrap, #autoTable.auto-tree')).indexOf(el);
  return title ? `${title}_${idx}` : `table_${idx}`;
}
function resetResizableTableSize(key) {
  const prefs = loadTableResizePrefs();
  delete prefs[key];
  saveTableResizePrefs(prefs);
  applyResizableTables();
  showToast('已恢复该表格默认尺寸');
}
function resetAllResizableTableSizes() {
  saveTableResizePrefs({});
  document.querySelectorAll('.table-wrap, #autoTable.auto-tree').forEach(el => {
    el.style.width = '';
    el.style.height = '';
  });
  applyResizableTables();
  showToast('已恢复全部表格默认尺寸');
}
function applyResizableTables() {
  const prefs = loadTableResizePrefs();
  document.querySelectorAll('.table-wrap, #autoTable.auto-tree').forEach(el => {
    const key = getTableResizeKey(el);
    if (!key) return;
    el.dataset.resizeKey = key;
    el.classList.add('user-resizable-table');

    const pref = prefs[key];
    if (pref) {
      if (pref.width) el.style.width = pref.width + 'px';
      if (pref.height) el.style.height = pref.height + 'px';
    } else if (!el.style.height && el.classList.contains('table-wrap')) {
      const inlineMax = parseFloat(el.style.maxHeight || '');
      if (!isNaN(inlineMax) && inlineMax > 0) el.style.height = inlineMax + 'px';
    }

    const card = el.closest('.card');
    if (card && !el.previousElementSibling?.classList?.contains('table-resize-hint')) {
      const hint = document.createElement('div');
      hint.className = 'table-resize-hint';
      hint.innerHTML = `拖拽表格右下角可调整显示大小 <button type="button" onclick="resetResizableTableSize('${key.replace(/'/g, "\\'")}')">恢复默认</button>`;
      el.parentNode.insertBefore(hint, el);
    }

    if (el._tableResizeObserver) return;
    let saveTimer = null;
    el._tableResizeObserver = new ResizeObserver(entries => {
      for (const entry of entries) {
        const target = entry.target;
        const rect = target.getBoundingClientRect();
        if (!rect.width || !rect.height) continue;
        clearTimeout(saveTimer);
        saveTimer = setTimeout(() => {
          const p = loadTableResizePrefs();
          p[target.dataset.resizeKey || getTableResizeKey(target)] = {
            width: Math.round(rect.width),
            height: Math.round(rect.height)
          };
          saveTableResizePrefs(p);
        }, 220);
      }
    });
    el._tableResizeObserver.observe(el);
  });
}


// Re-apply table resize handles after any full render that rebuilds tables.
(function() {
  const originalRenderAll = renderAll;
  renderAll = function() {
    const result = originalRenderAll.apply(this, arguments);
    setTimeout(applyResizableTables, 0);
    return result;
  };
})();

// 初始化
if (loadPersistedData()) {
  // loaded
}
// 恢复侧边栏状态（在 DATA._sidebar 中保存的参数）
if (DATA._sidebar || DATA._state || DATA._matLib || DATA._importLog) {
  restoreProjectState({ data: DATA, _sidebar: DATA._sidebar, _state: DATA._state, _matLib: DATA._matLib, _importLog: DATA._importLog }, { silent: true });
  delete DATA._sidebar; delete DATA._state; delete DATA._matLib; delete DATA._importLog; delete DATA._projectVersion; delete DATA._exportedAt;
  persistData();
}
updateSliderDisplays();
renderAll();
applyResizableTables();

// ============ 列宽拖拽调整 ============
// 在表头 <th> 右侧添加拖拽把手，支持调整每列宽度并保存到 localStorage
const COL_RESIZE_KEY = 'hydro_col_resize_v1';
function loadColResizePrefs() {
  try { return JSON.parse(localStorage.getItem(COL_RESIZE_KEY) || '{}') || {}; } catch(e) { return {}; }
}
function saveColResizePrefs(p) {
  try { localStorage.setItem(COL_RESIZE_KEY, JSON.stringify(p || {})); } catch(e) {}
}

function applyColResize(table) {
  if (!table) return;
  const tableKey = table.id || '';
  const prefs = loadColResizePrefs()[tableKey] || {};
  const ths = table.querySelectorAll('thead th');
  const cols = table.querySelectorAll('col');
  // Apply saved widths
  ths.forEach((th, i) => {
    const saved = prefs[i];
    if (saved && cols[i]) {
      cols[i].style.width = saved + 'px';
    }
    // Add drag handle if not already present
    if (th.querySelector('.col-resize-handle')) return;
    const handle = document.createElement('span');
    handle.className = 'col-resize-handle';
    handle.style.cssText = 'position:absolute;right:0;top:0;bottom:0;width:5px;cursor:col-resize;user-select:none;z-index:3;';
    th.style.position = 'relative';
    th.appendChild(handle);
    let startX = 0, startW = 0;
    handle.addEventListener('mousedown', function(e) {
      e.preventDefault();
      startX = e.clientX;
      startW = th.offsetWidth;
      const onMove = (mv) => {
        const delta = mv.clientX - startX;
        const newW = Math.max(40, startW + delta);
        if (cols[i]) cols[i].style.width = newW + 'px';
      };
      const onUp = (mu) => {
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup', onUp);
        // Save
        const p = loadColResizePrefs();
        if (!p[tableKey]) p[tableKey] = {};
        p[tableKey][i] = cols[i] ? parseInt(cols[i].style.width) : th.offsetWidth;
        saveColResizePrefs(p);
      };
      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup', onUp);
    });
  });
}

// Re-apply column resize after every render
(function() {
  const origRender = EditableTable.render.bind(EditableTable);
  EditableTable.render = function(config) {
    origRender(config);
    setTimeout(() => {
      const table = document.getElementById(config.tableId);
      if (table) applyColResize(table);
    }, 0);
  };
})();

// Apply to already-rendered tables on page load
setTimeout(() => {
  ['matTable','partsTable','toolsTable','autoTable','monitorTable','liaisonTable'].forEach(id => {
    const t = document.getElementById(id);
    if (t) applyColResize(t);
  });
}, 500);

// Style for resize handle hover
(function() {
  const s = document.createElement('style');
  s.textContent = `.col-resize-handle:hover, .col-resize-handle:active { background: var(--blue); opacity: 0.5; border-radius: 2px; }`;
  document.head.appendChild(s);
})();

// ============ 暗色/亮色主题切换 ============
(function() {
  const btn = document.getElementById('themeToggle');
  const html = document.documentElement;
  // 从 localStorage 恢复主题
  const saved = localStorage.getItem('hydro_theme');
  if (saved) { html.setAttribute('data-theme', saved); btn.textContent = saved === 'dark' ? '☀️' : '🌙'; }
  btn.addEventListener('click', () => {
    const isDark = html.getAttribute('data-theme') === 'dark';
    const next = isDark ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    btn.textContent = next === 'dark' ? '☀️' : '🌙';
    localStorage.setItem('hydro_theme', next);
    // 刷新图表以适应新配色
    setTimeout(() => { renderAll(); }, 50);
    showToast(next === 'dark' ? '🌙 已切换深色模式' : '☀️ 已切换亮色模式');
  });
})();

// ============ 键盘快捷键 ============
document.addEventListener('keydown', function(e) {
  // 焦点在输入框时不触发
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || e.target.tagName === 'TEXTAREA') return;
  if (e.ctrlKey || e.metaKey) {
    if (e.key === 's') { e.preventDefault(); saveHTML(); showToast('💾 已保存'); }
    if (e.key === 'z') { e.preventDefault(); undoProjectSnapshot(); }
    if (e.key === 'y') { e.preventDefault(); redoProjectSnapshot(); }
  }
  // 数字键快速切换 Tab
  const tabs = document.querySelectorAll('#tabsNav button');
  if (e.altKey && !isNaN(parseInt(e.key))) {
    const idx = parseInt(e.key) - 1;
    if (idx >= 0 && idx < tabs.length) tabs[idx].click();
  }
});

// ============ 注册竞价分析 Tab ============
(function() {
  // 竞价分析页面的tab切换已由通用逻辑处理，无需额外注册
  // 但需要确保 page-bidanalysis 元素存在时能被正确激活
  const tabBtns = document.querySelectorAll('#tabsNav button');
  tabBtns.forEach(b => {
    if (b.dataset.page === 'bidanalysis') {
      b.addEventListener('click', () => {
        const r = compute();
        renderBidAnalysis(r);
      });
    }
  });
})();

// 页面标题动态更新
function updatePageTitle() {
  try {
    const r = compute();
    const name = document.getElementById('projectName').value || '水电站';
    document.title = `${name} · ${fmt(r.totalBid, 0)}万 · 投标分析系统`;
  } catch(e) {}
}
document.getElementById('projectName').addEventListener('input', updatePageTitle);
updatePageTitle();
</script>
