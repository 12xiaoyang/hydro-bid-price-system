// ============ 键盘快捷键 ============
let _activeTreeRow = null;

export function setupKeyboard() {
  document.addEventListener('click', e => {
    const tr = e.target.closest('tr[data-seq]');
    if (!tr) return;
    const tag = e.target.tagName;
    if (tag === 'INPUT' || tag === 'BUTTON' || tag === 'SELECT' || tag === 'TEXTAREA') return;
    const dk = tr.dataset.datakey;
    const seq = tr.dataset.seq;
    if (dk && seq) _activeTreeRow = { dataKey: dk, seq };
  });

  document.addEventListener('keydown', function(e) {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || e.target.tagName === 'TEXTAREA') return;
    if (e.ctrlKey || e.metaKey) {
      if (e.key === 's') { e.preventDefault(); window.saveHTML(); window.showToast('💾 已保存'); }
      if (e.key === 'z') { e.preventDefault(); window.undoProjectSnapshot(); }
      if (e.key === 'y') { e.preventDefault(); window.redoProjectSnapshot(); }
    }
    const tabs = document.querySelectorAll('#tabsNav button');
    if (e.altKey && !isNaN(parseInt(e.key))) {
      const idx = parseInt(e.key) - 1;
      if (idx >= 0 && idx < tabs.length) tabs[idx].click();
    }
    // Alt+ArrowDown: 收起/展开当前行
    if (e.altKey && e.key === 'ArrowDown') {
      if (_activeTreeRow) {
        e.preventDefault();
        const seq = _activeTreeRow.seq;
        const key = `et_collapsed_${_activeTreeRow.dataKey}_${seq}`;
        const isCollapsed = sessionStorage.getItem(key) === '1';
        window.EditableTable.toggleCollapse(_activeTreeRow.dataKey, seq);
        window.showToast(isCollapsed ? `展开 ${seq}` : `收起 ${seq}`);
      }
    }
  });
}
