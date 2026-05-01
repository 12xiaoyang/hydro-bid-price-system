// ============ 表格尺寸可调 + 记忆 ============
export const TABLE_RESIZE_STORAGE_KEY = 'hydro_table_resize_v1';

export function loadTableResizePrefs() {
  try { return JSON.parse(localStorage.getItem(TABLE_RESIZE_STORAGE_KEY) || '{}') || {}; }
  catch(e) { return {}; }
}

export function saveTableResizePrefs(prefs) {
  try { localStorage.setItem(TABLE_RESIZE_STORAGE_KEY, JSON.stringify(prefs || {})); } catch(e) {}
}

export function getTableResizeKey(el) {
  if (!el) return '';
  const table = el.matches('table') ? el : el.querySelector('table');
  if (table && table.id) return table.id;
  if (el.id) return el.id;
  const card = el.closest('.card');
  const title = card ? (card.querySelector('.card-title')?.innerText || '').trim().replace(/\s+/g, '_') : '';
  const idx = Array.from(document.querySelectorAll('.table-wrap, #autoTable.auto-tree')).indexOf(el);
  return title ? `${title}_${idx}` : `table_${idx}`;
}

export function resetResizableTableSize(key) {
  const prefs = loadTableResizePrefs();
  delete prefs[key];
  saveTableResizePrefs(prefs);
  applyResizableTables();
  window.showToast('已恢复该表格默认尺寸');
}

export function resetAllResizableTableSizes() {
  saveTableResizePrefs({});
  document.querySelectorAll('.table-wrap, #autoTable.auto-tree').forEach(el => {
    el.style.width = '';
    el.style.height = '';
  });
  applyResizableTables();
  window.showToast('已恢复全部表格默认尺寸');
}

export function applyResizableTables() {
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

// ============ 列宽拖拽调整 ============
export const COL_RESIZE_KEY = 'hydro_col_resize_v1';

export function loadColResizePrefs() {
  try { return JSON.parse(localStorage.getItem(COL_RESIZE_KEY) || '{}') || {}; } catch(e) { return {}; }
}

export function saveColResizePrefs(p) {
  try { localStorage.setItem(COL_RESIZE_KEY, JSON.stringify(p || {})); } catch(e) {}
}

export function applyColResize(table) {
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

// Style for resize handle hover
(function() {
  const s = document.createElement('style');
  s.textContent = `.col-resize-handle:hover, .col-resize-handle:active { background: var(--blue); opacity: 0.5; border-radius: 2px; }`;
  document.head.appendChild(s);
})();

// Apply to already-rendered tables on page load
setTimeout(() => {
  ['matTable','partsTable','toolsTable','autoTable','monitorTable','liaisonTable'].forEach(id => {
    const t = document.getElementById(id);
    if (t) applyColResize(t);
  });
}, 500);
