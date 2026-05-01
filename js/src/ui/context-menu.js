// ============ 右键上下文菜单（全模块通用层级操作）============
export function setupContextMenu() {
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
    let dataKey = null;
    for (const k of Object.keys(window._tableConfigs)) {
      if (window._tableConfigs[k].tableId === table.id) { dataKey = window._tableConfigs[k].dataKey; break; }
    }
    if (!dataKey) return;
    e.preventDefault();

    _ctxIdx = parseInt(tr.dataset.origIdx, 10);
    _ctxDataKey = dataKey;
    _ctxSeq = tr.dataset.seq || '';
    const row = (window.DATA[dataKey] || [])[_ctxIdx];
    const seqLabel = row ? (row.seq || row.name || `第${_ctxIdx+1}行`) : '';
    document.getElementById('ctx-row-label').textContent = `行: ${String(seqLabel).slice(0,20)}`;

    // Show/hide expand/collapse: only for nodes with >=2 direct children
    const items = window.DATA[dataKey] || [];
    let directKids;
    if (_ctxSeq === '一') {
      directKids = items.filter(r => /^\d+$/.test(String(r.seq || ''))).length;
    } else {
      const pfx = _ctxSeq + '.';
      const depth = _ctxSeq.split('.').length;
      directKids = items.filter(r => {
        const rs = String(r.seq || '');
        return rs.startsWith(pfx) && rs.split('.').length === depth + 1;
      }).length;
    }
    const hasAnyChildren = directKids >= 1;
    document.getElementById('ctx-expand').style.display = hasAnyChildren ? '' : 'none';
    document.getElementById('ctx-collapse').style.display = hasAnyChildren ? '' : 'none';

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

  document.getElementById('ctx-edit').onclick = () => act((dk, idx) => window.EditableTable.openRowModal(dk, idx));
  document.getElementById('ctx-insert-after').onclick = () => act((dk, idx) => window.EditableTable.insertAfter(dk, idx));
  document.getElementById('ctx-add-child').onclick = () => act((dk, idx) => window.EditableTable.addChildRow(dk, idx));
  document.getElementById('ctx-add-child2').onclick = () => act((dk, idx) => {
    // Add child row first, then add child of that child
    const items = window.DATA[dk] || [];
    const parentItem = items[idx];
    if (!parentItem) return;
    const childSeq = window.generateChildSeq(items, parentItem);
    const parentSeq = String(parentItem.seq);
    const existingChild = items.find(r => String(r.seq) === childSeq);
    if (existingChild) {
      const childIdx = items.indexOf(existingChild);
      window.EditableTable.addChildRow(dk, childIdx);
    } else {
      window.EditableTable.addChildRow(dk, idx);
      setTimeout(() => {
        const newItems = window.DATA[dk] || [];
        const newChild = newItems.find(r => String(r.seq) === childSeq);
        if (newChild) window.EditableTable.addChildRow(dk, newItems.indexOf(newChild));
      }, 50);
    }
  });

  function toggleAllChildren(dk, seq, collapse) {
    const items = window.DATA[dk] || [];
    // Only toggle nodes that have >=1 direct children (same rule as arrow display)
    const countKids = (s) => {
      if (s === '一') {
        return items.filter(r => /^\d+$/.test(String(r.seq || ''))).length;
      }
      const pfx = s + '.';
      const d = s.split('.').length;
      return items.filter(r => {
        const rs = String(r.seq || '');
        return rs.startsWith(pfx) && rs.split('.').length === d + 1;
      }).length;
    };
    // Find all descendant seqs with >=1 child
    items.forEach(r => {
      const s = String(r.seq || '');
      if (s.startsWith(seq + '.') && countKids(s) >= 1) {
        const key = `et_collapsed_${dk}_${s}`;
        if (collapse) sessionStorage.setItem(key, '1');
        else sessionStorage.removeItem(key);
      }
    });
    // Also toggle the current node if it has >=1 child
    if (countKids(seq) >= 1) {
      const key = `et_collapsed_${dk}_${seq}`;
      if (collapse) sessionStorage.setItem(key, '1');
      else sessionStorage.removeItem(key);
    }
    const cfg = window._tableConfigs[Object.keys(window._tableConfigs).find(k => window._tableConfigs[k].dataKey === dk)];
    if (cfg) window.EditableTable.render(cfg);
  }

  document.getElementById('ctx-expand').onclick = () => act((dk, idx, seq) => toggleAllChildren(dk, seq, false));
  document.getElementById('ctx-collapse').onclick = () => act((dk, idx, seq) => toggleAllChildren(dk, seq, true));
  document.getElementById('ctx-delete').onclick = () => act((dk, idx) => window.EditableTable.deleteRow(dk, idx));
}
