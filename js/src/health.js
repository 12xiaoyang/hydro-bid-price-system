// js/src/health.js — 自动修复 + 数据健康检查

export function escapeRegExp(s) { return String(s).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
export function evaluateFormulaSafe(expr, row) {
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
export function _rowContext(row) {
  if (!row) return '';
  const parts = [];
  if (row.seq !== null && row.seq !== undefined && String(row.seq).trim()) parts.push('序号' + String(row.seq).trim());
  if (row.name && String(row.name).trim()) parts.push(String(row.name).trim().substring(0, 20));
  if (row.spec && String(row.spec).trim()) parts.push(String(row.spec).trim().substring(0, 15));
  if (row.material && String(row.material).trim()) parts.push(String(row.material).trim().substring(0, 15));
  if (row.model && String(row.model).trim()) parts.push(String(row.model).trim().substring(0, 15));
  return parts.join(' · ');
}

// ============ 自动修复函数 ============
export function autoFixMissingSeqs() {
  const fixed = { tables: 0, rows: 0 };
  const ALL_TABLES = PROJECT_DATA_KEYS;
  ALL_TABLES.forEach(k => {
    if (!Array.isArray(DATA[k]) || DATA[k].length === 0) return;
    DATA[k].forEach((row, idx) => {
      const hasName = row.name && String(row.name).trim() !== '';
      const hasSeq = row.seq !== null && row.seq !== undefined && String(row.seq).trim() !== '';
      if (hasName && !hasSeq) {
        row.seq = 'A' + (idx + 1);
        fixed.rows++;
      }
    });
    if (fixed.rows > 0) { fixed.tables++; persistData(); }
  });
  return fixed;
}

export function autoFixUsageRates() {
  const fixed = { tables: 0, rows: 0 };
  const ALL_TABLES = PROJECT_DATA_KEYS;
  ALL_TABLES.forEach(k => {
    if (!Array.isArray(DATA[k]) || DATA[k].length === 0) return;
    let tableFixed = false;
    DATA[k].forEach(row => {
      if (row.usage !== null && row.usage !== undefined && row.usage !== '') {
        const u = parseFloat(row.usage);
        if (isNaN(u)) return;
        // Negative → 0
        if (u < 0) { row.usage = 0; fixed.rows++; tableFixed = true; }
        // Non-integer > 1 → round to nearest integer (likely a data entry error)
        else if (u > 1 && u % 1 !== 0) { row.usage = Math.round(u); fixed.rows++; tableFixed = true; }
      }
    });
    if (tableFixed) { fixed.tables++; persistData(); }
  });
  return fixed;
}

export function autoFixSequences(dataKey) {
  if (!['water','gen','valve','valve_door'].includes(dataKey)) return { tables: 0, rows: 0 };
  const items = DATA[dataKey];
  if (!Array.isArray(items) || items.length === 0) return { tables: 0, rows: 0 };

  // Helper: check if seq is pure numeric (e.g. "1", "2.3", "1.2.3")
  const isNumericSeq = (s) => /^\d+(\.\d+)*$/.test(s);

  let fixed = 0;

  // 1. Collect all parent seqs (rows that have direct children)
  const parentSeqs = [];
  const allSeqs = items.map(r => r.seq).filter(s => s && isNumericSeq(String(s)));
  allSeqs.forEach(seq => {
    if (parentSeqs.includes(seq)) return;
    const hasChild = allSeqs.some(other => other !== seq && String(other).startsWith(String(seq) + '.'));
    if (hasChild) parentSeqs.push(seq);
  });
  // Add root "一" if it has children
  const rootHasChild = items.some(r => /^\d+$/.test(String(r.seq || '')));
  if (rootHasChild && !parentSeqs.includes('一')) parentSeqs.push('一');

  // 2. Sort by depth descending (deepest first = bottom-up)
  parentSeqs.sort((a, b) => {
    const da = a === '一' ? 0 : String(a).split('.').length;
    const db = b === '一' ? 0 : String(b).split('.').length;
    return db - da;
  });

  // 3. Process each parent
  parentSeqs.forEach(parentSeq => {
    // Collect direct children (using existing isDirectChild)
    const children = items.filter(r => {
      const cs = String(r.seq || '');
      return cs && isNumericSeq(cs) && isDirectChild(parentSeq, cs);
    });

    // Sort children by last segment numeric value
    children.sort((a, b) => {
      const segA = parseInt(String(a.seq).split('.').pop(), 10);
      const segB = parseInt(String(b.seq).split('.').pop(), 10);
      return (isNaN(segA) ? 0 : segA) - (isNaN(segB) ? 0 : segB);
    });

    // Renumber sequentially
    children.forEach((child, idx) => {
      const newSeq = parentSeq === '一' ? String(idx + 1) : parentSeq + '.' + (idx + 1);
      const oldSeq = String(child.seq);
      if (newSeq === oldSeq) return;

      child.seq = newSeq;
      fixed++;

      // Cascade: update all descendants' prefix
      items.forEach(r => {
        const rs = String(r.seq || '');
        if (rs === oldSeq) return; // skip the row itself (already updated)
        if (rs.startsWith(oldSeq + '.')) {
          r.seq = newSeq + rs.substring(oldSeq.length);
        }
      });
    });
  });

  return { tables: fixed > 0 ? 1 : 0, rows: fixed };
}

export function autoFixNegativeValues() {
  const fixed = { tables: 0, rows: 0 };
  const ALL_TABLES = PROJECT_DATA_KEYS;
  ALL_TABLES.forEach(k => {
    if (!Array.isArray(DATA[k]) || DATA[k].length === 0) return;
    let tableFixed = false;
    DATA[k].forEach(row => {
      ['weight','amount'].forEach(fk => {
        if (row[fk] !== null && row[fk] !== undefined && parseFloat(row[fk]) < 0) {
          row[fk] = Math.abs(parseFloat(row[fk]));
          fixed.rows++;
          tableFixed = true;
        }
      });
    });
    if (tableFixed) { fixed.tables++; persistData(); }
  });
  return fixed;
}

export function autoFixDuplicateSeqs() {
  const fixed = { tables: 0, rows: 0 };
  // Only fix BOM/parts/tools tables (not automation/monitoring, which use group-based seq)
  const fixableKeys = ['water','gen','valve','valve_door','water_parts','gen_parts','valve_parts','water_tools','gen_tools','valve_tools'];
  fixableKeys.forEach(k => {
    if (!Array.isArray(DATA[k]) || DATA[k].length === 0) return;
    const seen = {};
    let tableFixed = false;
    DATA[k].forEach((row, idx) => {
      if (!row.seq && row.seq !== 0) return;
      const s = String(row.seq).trim();
      if (!s) return;
      if (seen[s] !== undefined) {
        let suffix = 2;
        let newSeq = s + '.' + suffix;
        while (seen[newSeq] !== undefined) { suffix++; newSeq = s + '.' + suffix; }
        row.seq = newSeq;
        seen[newSeq] = idx;
        fixed.rows++;
        tableFixed = true;
      } else {
        seen[s] = idx;
      }
    });
    if (tableFixed) { fixed.tables++; persistData(); }
  });
  return fixed;
}

export function autoFixEmptyRows() {
  const fixed = { tables: 0, rows: 0 };
  const ALL_TABLES = PROJECT_DATA_KEYS;
  ALL_TABLES.forEach(k => {
    if (!Array.isArray(DATA[k]) || DATA[k].length === 0) return;
    const before = DATA[k].length;
    DATA[k] = DATA[k].filter(row => {
      if (!row || typeof row !== 'object') return false;
      const hasName = row.name && String(row.name).trim() !== '';
      const hasSeq = row.seq !== null && row.seq !== undefined && String(row.seq).trim() !== '';
      const hasAnyData = Object.values(row).some(v => v !== null && v !== undefined && String(v).trim() !== '' && String(v) !== '0');
      return hasName || hasSeq || hasAnyData;
    });
    const removed = before - DATA[k].length;
    if (removed > 0) { fixed.rows += removed; fixed.tables++; persistData(); }
  });
  return fixed;
}

export function autoFixBuyMismatch() {
  const fixed = { tables: 0, rows: 0 };
  const BOM_KEYS = ['water', 'gen', 'valve', 'valve_door'];
  BOM_KEYS.forEach(k => {
    if (!Array.isArray(DATA[k]) || DATA[k].length === 0) return;
    let tableFixed = false;
    DATA[k].forEach(row => {
      if (row.is_buy === false) {
        const uv = parseFloat(row.usage);
        if (!isNaN(uv) && uv > 1 && uv % 1 === 0) {
          row.is_buy = true;
          fixed.rows++;
          tableFixed = true;
        }
      }
    });
    if (tableFixed) { fixed.tables++; persistData(); }
  });
  return fixed;
}

export function generateDataHealthReport() { const issues = []; const fn = (row, k) => ' → [' + _rowContext(row) + ']'; const add = (level, code, message, suggestion, tableKey, rowIdx, ctx) => issues.push({ level, code, message: message + (ctx || ''), suggestion: suggestion || '', tableKey: tableKey || '', rowIdx: rowIdx !== undefined ? rowIdx : -1 }); const sidebar = captureSidebarState(); if (!sidebar.projectName) add('warning','PROJECT_NAME_EMPTY','项目名称为空','建议补充项目名称，便于导出和归档'); if ((parseFloat(sidebar.unitCount) || 0) <= 0) add('error','UNIT_COUNT_INVALID','机组台数必须大于 0','请在左侧项目信息中填写有效台数'); const BOM_KEYS = ['water','gen','valve','valve_door']; const PARTS_KEYS = ['water_parts','gen_parts','valve_parts']; const TOOLS_KEYS = ['water_tools','gen_tools','valve_tools']; const ALL_TABLES = PROJECT_DATA_KEYS; ALL_TABLES.forEach(k => { if (!Array.isArray(DATA[k])) { add('error','TABLE_INVALID', k + ' 不是有效数组','请重新导入或恢复默认数据', k, -1); return; } if (DATA[k].length === 0) return; DATA[k].forEach((row, idx) => { if (!row || typeof row !== 'object') { add('error','ROW_INVALID', k + ' 第 ' + (idx+1) + ' 行不是对象', '', k, idx); return; } const ctx = fn(row, k); const hasName = row.name && String(row.name).trim() !== ''; const hasSeq = row.seq !== null && row.seq !== undefined && String(row.seq).trim() !== ''; if (BOM_KEYS.includes(k) || PARTS_KEYS.includes(k) || TOOLS_KEYS.includes(k)) { if (!hasName && !hasSeq) { const hasAnyData = Object.values(row).some(v => v !== null && v !== undefined && String(v).trim() !== '' && String(v) !== '0'); if (hasAnyData) add('error','MISSING_BOTH', k + ' 第 ' + (idx+1) + ' 行缺少序号和名称' + ctx,'请补充序号或名称，或删除空行', k, idx); } else if (!hasName) { add('error','MISSING_NAME', k + ' 第 ' + (idx+1) + ' 行缺少名称' + ctx,'请补充名称', k, idx); } else if (!hasSeq) { add('warning','MISSING_SEQ', k + ' 第 ' + (idx+1) + ' 行缺少序号' + ctx,'建议补充序号', k, idx); } } if (['automation','monitoring'].includes(k)) { const hasFunc = row.function && String(row.function).trim() !== ''; if (!hasName && !hasFunc) { const hasAnyData = Object.values(row).some(v => v !== null && v !== undefined && String(v).trim() !== '' && String(v) !== '0'); if (hasAnyData) add('error','MISSING_NAME_FUNC', k + ' 第 ' + (idx+1) + ' 行缺少名称和功能' + ctx, '', k, idx); } } if (row && 'amount' in row && row.amount !== null && row.amount !== '' && isNaN(parseFloat(row.amount))) add('error','AMOUNT_INVALID', k + ' 第 ' + (idx+1) + ' 行金额不是数字' + ctx,'请修正为有效数字', k, idx); if (row && 'total' in row && row.total !== null && row.total !== '' && isNaN(parseFloat(row.total))) add('error','TOTAL_INVALID', k + ' 第 ' + (idx+1) + ' 行合计不是数字' + ctx,'请修正为有效数字', k, idx); if (row && 'weight' in row && parseFloat(row.weight) < 0) add('warning','WEIGHT_NEGATIVE', k + ' 第 ' + (idx+1) + ' 行重量为负数' + ctx,'请修正', k, idx); if (row && 'amount' in row && parseFloat(row.amount) < 0) add('warning','AMOUNT_NEGATIVE', k + ' 第 ' + (idx+1) + ' 行金额为负数' + ctx,'请修正', k, idx); if (row && 'qty' in row && row.qty !== null && row.qty !== undefined && row.qty !== '') { const q = parseFloat(row.qty); if (isNaN(q) && isNaN(Date.parse(row.qty))) add('warning','QTY_INVALID', k + ' 第 ' + (idx+1) + ' 行数量不是有效数字' + ctx,'建议只填数字', k, idx); } if (BOM_KEYS.includes(k) && row && 'is_buy' in row && row.is_buy !== null && row.is_buy !== undefined && row.is_buy !== '') { const uv = parseFloat(row.usage); if (!isNaN(uv) && uv > 1 && uv % 1 === 0 && row.is_buy === false) add('warning','BUY_USAGE_MISMATCH', k + ' 第 ' + (idx+1) + ' 行数量为' + uv + '（外购类），但标记为自制' + ctx,'建议将类别改为外购', k, idx); } if (hasSeq) { const dupIdx = DATA[k].findIndex((r, i) => i !== idx && r && String(r.seq || '').trim() === String(row.seq).trim()); if (dupIdx >= 0 && dupIdx < idx) add('warning','DUPLICATE_SEQ', k + ' 序号 ' + String(row.seq).trim() + ' 在第 ' + (dupIdx+1) + ' 行和第 ' + (idx+1) + ' 行重复' + ctx,'序号应唯一', k, idx); } }); }); BOM_KEYS.forEach(k => { if (typeof validateTableConsistency === 'function') { try { validateTableConsistency(k).forEach(x => add('warning','SUBTOTAL_INCONSISTENT', k + ' 汇总行 ' + (x.seq || x.idx) + ' 与子项合计不一致（预期重量 ' + x.expectedWeight + ' 实际 ' + x.actualWeight + '）','可点击"修复汇总"修复', k, x.idx)); } catch(e) {} } }); if (!state.scenarios || !Array.isArray(state.scenarios)) add('warning','SCENARIOS_INVALID','方案数据不是数组','系统会在下次保存方案时修复'); const errorCount = issues.filter(x=>x.level==='error').length; const warningCount = issues.filter(x=>x.level==='warning').length; return { passed: errorCount === 0, summary: { errorCount, warningCount, totalCount: issues.length }, issues, checkedAt: new Date().toISOString() }; }
export const TABLE_LABELS = { water:'水轮机材料', gen:'发电机材料', valve:'进水阀材料', valve_door:'阀门(门)材料', water_parts:'水轮机备件', gen_parts:'发电机备件', valve_parts:'进水阀备件', water_tools:'水轮机工具', gen_tools:'发电机工具', valve_tools:'进水阀工具', automation:'自动化', monitoring:'在线监测', liaison:'设联会' };
export function _navigateErrorByIdx(idx) { const issues = window.__healthIssues; if (issues && issues[idx]) _navigateToError(issues[idx]); }
export function _navigateToError(issue) {
  if (!issue.tableKey || issue.rowIdx < 0) return;
  const k = issue.tableKey;
  if (['water','gen','valve','valve_door'].includes(k)) { state.currentMatTab = k; renderMaterials(); }
  else if (['water_parts','gen_parts','valve_parts'].includes(k)) { state.currentPartsTab = k; renderParts(); }
  else if (['water_tools','gen_tools','valve_tools'].includes(k)) { state.currentToolsTab = k; renderTools(); }
  else if (['automation','monitoring','liaison'].includes(k)) { renderAll(); }
  const overlay = document.getElementById('healthOverlay');
  if (overlay) overlay.remove();
  setTimeout(() => _highlightErrorRow(k, issue.rowIdx), 200);
}
export function _highlightErrorRow(tableKey, rowIdx) {
  let tableEl = null;
  if (['water','gen','valve','valve_door'].includes(tableKey)) { tableEl = document.getElementById('matTable'); }
  else if (['water_parts','gen_parts','valve_parts'].includes(tableKey)) { tableEl = document.getElementById('partsTable'); }
  else if (['water_tools','gen_tools','valve_tools'].includes(tableKey)) { tableEl = document.getElementById('toolsTable'); }
  else if (tableKey === 'automation') { tableEl = document.getElementById('automationTable'); }
  else if (tableKey === 'monitoring') { tableEl = document.getElementById('monitoringTable'); }
  else if (tableKey === 'liaison') { tableEl = document.getElementById('liaisonTable'); }
  if (!tableEl) return;
  const rows = tableEl.querySelectorAll('tbody tr');
  let targetRow = rows[rowIdx];
  if (!targetRow) { targetRow = tableEl.querySelector('tr[data-row="' + rowIdx + '"]'); }
  if (targetRow) {
    targetRow.scrollIntoView({ behavior: 'smooth', block: 'center' });
    targetRow.style.transition = 'background 0.3s';
    targetRow.style.background = 'var(--accent-light, #fff3cd)';
    targetRow.style.boxShadow = '0 0 12px var(--accent, #f0a030)';
    setTimeout(() => { targetRow.style.background = ''; targetRow.style.boxShadow = ''; }, 3000);
  }
}
export function showDataHealthReport(report) {
  const r = report || generateDataHealthReport();
  const existing = document.getElementById('healthOverlay');
  if (existing) existing.remove();
  const overlay = document.createElement('div');
  overlay.id = 'healthOverlay';
  overlay.className = 'health-overlay';
  overlay.onclick = function(e) { if (e.target === overlay) overlay.remove(); };
  window.__healthIssues = r.issues;
  const byTable = {};
  r.issues.forEach((iss, idx) => { iss._idx = idx; const tk = iss.tableKey || '全局'; if (!byTable[tk]) byTable[tk] = []; byTable[tk].push(iss); });
  let groupsHtml = '';
  Object.keys(byTable).forEach(tk => {
    const issues = byTable[tk]; const label = TABLE_LABELS[tk] || tk;
    const errCount = issues.filter(x => x.level === 'error').length;
    const warnCount = issues.filter(x => x.level === 'warning').length;
    let badge = '';
    if (errCount > 0) badge += '<span class="health-badge error">' + errCount + ' 错误</span>';
    if (warnCount > 0) badge += '<span class="health-badge warning">' + warnCount + ' 警告</span>';
    let rowsHtml = '';
    issues.forEach(iss => {
      const icon = iss.level === 'error' ? '❌' : '⚠️';
      const cls = iss.level === 'error' ? 'health-row-error' : 'health-row-warning';
      const clickable = iss.tableKey && iss.rowIdx >= 0 ? 'health-row-clickable' : '';
      const rowInfo = iss.rowIdx >= 0 ? '第' + (iss.rowIdx + 1) + '行' : '';
      rowsHtml += '<div class="health-issue-row ' + cls + ' ' + clickable + '"' +
        (clickable ? ' onclick="_navigateErrorByIdx(' + iss._idx + ')"' : '') + '>' +
        '<span class="health-issue-icon">' + icon + '</span>' +
        '<span class="health-issue-msg">' + rowInfo + ' ' + escHtml(iss.message) + '</span>' +
        (iss.suggestion ? '<span class="health-issue-tip">' + escHtml(iss.suggestion) + '</span>' : '') +
        (clickable ? '<span class="health-issue-nav">定位 →</span>' : '') + '</div>';
    });
    groupsHtml += '<div class="health-group"><div class="health-group-header"><span class="health-group-title">' + escHtml(label) + '</span>' + badge + '</div>' +
      '<div class="health-group-rows">' + rowsHtml + '</div></div>';
  });
  const passedIcon = r.passed ? '✅' : '⚠️';
  const passedText = r.passed ? '数据体检通过' : '数据体检未通过';
  const passedClass = r.passed ? 'health-pass' : 'health-fail';
  // Count fixable issues and build targeted fix buttons
  const fixableSeq = r.issues.filter(x => x.code === 'MISSING_SEQ').length;
  const fixableNeg = r.issues.filter(x => x.code === 'WEIGHT_NEGATIVE' || x.code === 'AMOUNT_NEGATIVE').length;
  const fixableDup = r.issues.filter(x => x.code === 'DUPLICATE_SEQ').length;
  const fixableEmpty = r.issues.filter(x => x.code === 'MISSING_BOTH').length;
  const fixableBuyMismatch = r.issues.filter(x => x.code === 'BUY_USAGE_MISMATCH').length;
  const fixableTotal = fixableSeq + fixableNeg + fixableDup + fixableEmpty + fixableBuyMismatch + r.issues.filter(x => x.code === 'SUBTOTAL_INCONSISTENT').length;
  let fixBtns = '';
  if (fixableEmpty > 0) fixBtns += '<button class="btn btn-sm" onclick="autoFixEmptyRows(); document.getElementById(\'healthOverlay\').remove(); setTimeout(function(){ showDataHealthReport(); },400);">清除空行 (' + fixableEmpty + ')</button>';
  if (fixableSeq > 0) fixBtns += '<button class="btn btn-sm" onclick="autoFixMissingSeqs(); document.getElementById(\'healthOverlay\').remove(); setTimeout(function(){ showDataHealthReport(); },400);">补全序号 (' + fixableSeq + ')</button>';
  if (fixableNeg > 0) fixBtns += '<button class="btn btn-sm" onclick="autoFixNegativeValues(); document.getElementById(\'healthOverlay\').remove(); setTimeout(function(){ showDataHealthReport(); },400);">修正负数 (' + fixableNeg + ')</button>';
  if (fixableDup > 0) fixBtns += '<button class="btn btn-sm" onclick="autoFixDuplicateSeqs(); document.getElementById(\'healthOverlay\').remove(); setTimeout(function(){ showDataHealthReport(); },400);">去重序号 (' + fixableDup + ')</button>';
  if (fixableBuyMismatch > 0) fixBtns += '<button class="btn btn-sm" onclick="autoFixBuyMismatch(); document.getElementById(\'healthOverlay\').remove(); setTimeout(function(){ showDataHealthReport(); },400);">修正类别 (' + fixableBuyMismatch + ')</button>';
  const hasFixable = fixableTotal > 0;
  overlay.innerHTML = '<div class="health-modal">' +
    '<div class="health-header"><span class="health-title">🔍 快速查错</span>' +
    '<button class="health-close" onclick="document.getElementById(\'healthOverlay\').remove()">✕</button></div>' +
    '<div class="health-summary ' + passedClass + '"><span class="health-summary-icon">' + passedIcon + '</span>' +
    '<span class="health-summary-text">' + passedText + '</span>' +
    '<span class="health-summary-stats">错误 ' + r.summary.errorCount + ' · 警告 ' + r.summary.warningCount + ' · 共 ' + r.summary.totalCount + ' 项</span>' +
    '<span class="health-summary-time">' + new Date(r.checkedAt).toLocaleString('zh-CN') + '</span></div>' +
    '<div class="health-body">' + (r.issues.length === 0 ? '<div class="health-empty">🎉 未发现任何数据问题</div>' : groupsHtml) + '</div>' +
    '<div class="health-footer"><span class="health-hint">💡 点击「定位 →」跳转到问题行，点击下方按钮批量修复</span>' +
    '<span style="display:flex;gap:6px;flex-wrap:wrap;">' + fixBtns + '</span>' +
    '<button class="btn" onclick="document.getElementById(\'healthOverlay\').remove()">关闭</button>' +
    (hasFixable ? '<button class="btn primary" onclick="autoFixEmptyRows(); autoFixMissingSeqs(); autoFixUsageRates(); autoFixNegativeValues(); autoFixDuplicateSeqs(); autoFixBuyMismatch(); fixAllConsistency(); document.getElementById(\'healthOverlay\').remove(); setTimeout(function(){ showDataHealthReport(); },500);">🔧 全部修复</button>' : '') +
    '</div></div>';
  document.body.appendChild(overlay);
}

export function showToast(msg) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 1600);
}

// Store current config for focusNext reference
export const _tableConfigs = {};
