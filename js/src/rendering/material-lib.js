import { MAT_LIB, MAT_IMPORT_LOG, fmt, FormulaEngine, persistMatLib } from '../calculation.js';
import { DATA, csvEscape, MATERIAL_PRICE_DB, PRICE_CACHE } from '../data.js';
import { showToast } from '../health.js';
import { persistData } from '../persistence.js';

// Helper: generate next material library ID based on current MAT_LIB contents
function _nextMatLibId() {
  const maxId = MAT_LIB.reduce((max, m) => {
    const num = parseInt((m.id || 'MAT-0000').replace('MAT-', ''), 10);
    return !isNaN(num) && num > max ? num : max;
  }, 0);
  return 'MAT-' + String(maxId + 1).padStart(4, '0');
}

// ============ 渲染:材料库 ============
export function renderMatLib() {
  const search = (document.getElementById('matLibSearch')?.value || '').toLowerCase();
  const catFilter = document.getElementById('matLibCatFilter')?.value || 'all';
  let items = MAT_LIB;
  if (search) items = items.filter(m => m.name.toLowerCase().includes(search) || (m.spec||'').toLowerCase().includes(search) || (m.remark||'').toLowerCase().includes(search));
  if (catFilter !== 'all') items = items.filter(m => m.category === catFilter);

  let html = `<thead><tr>
    <th style="width:40px;"></th>
    <th>材料ID</th><th>材料名称</th><th>规格</th><th>分类</th>
    <th class="num">标准价格(万/T)</th><th class="num">利用率</th><th>备注</th>
  </tr></thead><tbody>`;
  if (items.length === 0) {
    html += `<tr><td colspan="8" style="text-align:center;padding:20px;color:var(--text-dim);">暂无材料数据 · 点击"一键导入材料"或"新增材料"开始</td></tr>`;
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
        <td colspan="8" style="padding:5px 10px;font-weight:600;font-size:12px;color:var(--accent-dark);letter-spacing:0.05em;">
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
          <td class="editable-cell num" data-col="5" data-idx="${realIdx}" data-lib="true">${fmt(m.usage_rate ?? 0.8, 2)}</td>
          <td class="editable-cell" data-col="6" data-idx="${realIdx}" data-lib="true">${m.remark || '<span style="color:var(--text-dim);">—</span>'}</td>
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
        <td class="editable-cell num" data-col="5" data-idx="${realIdx}" data-lib="true">${fmt(m.usage_rate ?? 0.8, 2)}</td>
        <td class="editable-cell" data-col="6" data-idx="${realIdx}" data-lib="true">${m.remark || '<span style="color:var(--text-dim);">—</span>'}</td>
      </tr>`;
    });
  }
  html += `</tbody>`;
  document.getElementById('matLibTable').innerHTML = html;
  document.getElementById('matLibSummary').innerHTML = `共 <strong>${MAT_LIB.length}</strong> 条材料 · 筛选显示 <strong>${items.length}</strong> 条`;
}

// Toggle category group expand/collapse in material library
export const _matLibCollapsed = new Set();
export function toggleMatLibGroup(cat) {
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
export function handleMatLibEdit(cell) {
  const idx = parseInt(cell.dataset.idx, 10);
  const colIdx = parseInt(cell.dataset.col, 10);
  const cols = ['name', 'spec', 'category', 'price', 'usage_rate', 'remark'];
  const colTypes = ['text', 'text', 'text', 'number', 'number', 'text'];
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

export function addMatLibRow() {
  const id = _nextMatLibId();
  MAT_LIB.push({ id, name: '新材料', spec: '', category: '其他', price: 0, usage_rate: 0.8, remark: '' });
  persistMatLib();
  renderMatLib();
  showToast('已添加新材料: ' + id);
}

export function deleteMatLibItem(idx) {
  const m = MAT_LIB[idx];
  if (!confirm(`确定要删除材料 "${m.name}" (${m.id}) 吗？`)) return;
  MAT_LIB.splice(idx, 1);
  persistMatLib();
  renderMatLib();
  showToast('已删除: ' + m.name);
}

export function exportMatLib() {
  let csv = '﻿材料ID,材料名称,规格,分类,标准价格(万/T),利用率,备注\n';
  MAT_LIB.forEach(m => {
    csv += [m.id, m.name, m.spec||'', m.category, m.price, m.usage_rate ?? 0.8, m.remark||''].map(csvEscape).join(',') + '\n';
  });
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = `材料库_${new Date().toISOString().split('T')[0]}.csv`;
  a.click(); URL.revokeObjectURL(url);
  showToast('材料库已导出');
}

// ============ 材料导入 (Excel/CSV) ============
export function importMaterials() {
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

export function parseCSVRows(text) {
  const lines = text.split(/\r?\n/).filter(l => l.trim());
  if (lines.length < 2) return [];
  // Auto-detect columns
  const header = lines[0].replace(/^﻿/, '');
  const cols = header.split(/[,\t]/).map(h => h.trim().replace(/"/g, ''));
  // Find name and price column indices
  const nameIdx = cols.findIndex(c => /材料名称|名称|name|材料|material/i.test(c));
  const priceIdx = cols.findIndex(c => /价格|单价|price|万/i.test(c));
  const specIdx = cols.findIndex(c => /规格|spec/i.test(c));
  const catIdx = cols.findIndex(c => /分类|类别|category/i.test(c));
  const usageIdx = cols.findIndex(c => /利用率|usage|usage_rate|利用系数/i.test(c));
  const rows = [];
  for (let i = 1; i < lines.length; i++) {
    const vals = lines[i].split(/[,\t]/).map(v => v.trim().replace(/"/g, ''));
    if (vals.length < 2) continue;
    rows.push({
      name: nameIdx >= 0 ? (vals[nameIdx] || '') : (vals[0] || ''),
      spec: specIdx >= 0 ? (vals[specIdx] || '') : '',
      category: catIdx >= 0 ? (vals[catIdx] || '其他') : '其他',
      price: priceIdx >= 0 ? (parseFloat(vals[priceIdx]) || 0) : (parseFloat(vals[1]) || 0),
      usage_rate: usageIdx >= 0 ? (parseFloat(vals[usageIdx]) || 0.8) : 0.8,
      remark: ''
    });
  }
  return rows;
}

export async function parseXLSX(file) {
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

export function extractStringsFromBinary(data) {
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

export function stringsToRows(strings) {
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

export async function parsePDF(file) {
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

// Import preview state
export let _importPreview = null;

export function showImportPreview(rows, fileName) {
  // Detect conflicts: same name+spec combo
  const conflicts = [];
  rows.forEach(r => {
    const existing = MAT_LIB.find(m => m.name === r.name);
    if (existing) conflicts.push({ imported: r, existing });
  });
  _importPreview = { rows, conflicts, fileName };
  window._importPreview = _importPreview;

  document.getElementById('importPreviewCard').style.display = 'block';
  document.getElementById('importPreviewSub').textContent = `文件: ${fileName} · 解析到 ${rows.length} 条数据 · ${conflicts.length} 条冲突`;

  let html = `<thead><tr>
    <th style="width:30px;">#</th><th>材料名称</th><th>规格</th><th>分类</th>
    <th class="num">价格</th><th class="num">利用率</th><th>状态</th><th>操作</th>
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
      <td class="editable-cell num" data-preview="${i}" data-field="usage_rate">${fmt(r.usage_rate ?? 0.8, 2)}</td>
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

export function removePreviewRow(idx) {
  if (!_importPreview) return;
  _importPreview.rows.splice(idx, 1);
  _importPreview.conflicts = [];
  _importPreview.rows.forEach(r => {
    const existing = MAT_LIB.find(m => m.name === r.name);
    if (existing) _importPreview.conflicts.push({ imported: r, existing });
  });
  showImportPreview(_importPreview.rows, _importPreview.fileName);
}

export function resolveConflicts(mode) {
  if (!_importPreview) return;
  if (mode === 'skip') {
    _importPreview.rows = _importPreview.rows.filter(r => !_importPreview.conflicts.some(c => c.imported === r));
  }
  _importPreview.conflicts = [];
  showImportPreview(_importPreview.rows, _importPreview.fileName);
}

export function cancelImport() {
  _importPreview = null;
  window._importPreview = null;
  document.getElementById('importPreviewCard').style.display = 'none';
}

export function confirmImport() {
  if (!_importPreview || _importPreview.rows.length === 0) { showToast('没有可导入的数据'); return; }
  let added = 0, updated = 0;
  _importPreview.rows.forEach(r => {
    const existing = MAT_LIB.find(m => m.name === r.name);
    if (existing) {
      existing.price = r.price;
      if (r.spec) existing.spec = r.spec;
      if (r.category !== '其他') existing.category = r.category;
      if (r.usage_rate !== null && r.usage_rate !== undefined) existing.usage_rate = r.usage_rate;
      updated++;
    } else {
      const id = 'MAT-' + String(_matLibNextId).padStart(4, '0');
      _matLibNextId++;
      MAT_LIB.push({ id, name: r.name, spec: r.spec || '', category: r.category, price: r.price, usage_rate: r.usage_rate ?? 0.8, remark: r.remark || '' });
      added++;
    }
  });
  // Also update MATERIAL_PRICE_DB cache entries
  _importPreview.rows.forEach(r => {
    const key = r.name.trim().replace(/\s+/g, '');
    MATERIAL_PRICE_DB.set(key, { p: r.price, u: r.usage_rate });
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
  window.renderAll();
}

export function renderImportLog() {
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
export function batchUpdatePrices() {
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
  window.renderAll();
  showToast(`批量更新完成: 匹配到 ${updated} 条材料`);
}

export function findMaterialDetailDefaultUsage(materialName, dataKey, row) {
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
  if (candidates.length) return candidates[0].usage;
  // Fallback to material library usage_rate
  const libMatch = lookupMatLib(mat);
  return libMatch ? (libMatch.usage_rate ?? null) : null;
}

// ============ 材料明细表与材料库自动联动 ============
// Lookup material in library for auto-fill
export function lookupMatLib(materialName) {
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
