// ============ 全局事件绑定 ============
// setupEvents() 在 main.js 中调用，此时所有 window.* 赋值已完成

export function setupEvents() {
  // Input 事件
  document.querySelectorAll('input').forEach(el => {
    el.addEventListener('input', () => {
      window.updateSliderDisplays();
      if (el.classList.contains('auto-computed')) {
        const curVal = parseFloat(el.value);
        const compVal = window._matComputed[el.id] !== undefined ? parseFloat(window._matComputed[el.id].toFixed(4)) : NaN;
        if (!isNaN(curVal) && !isNaN(compVal) && Math.abs(curVal - compVal) > 0.001) {
          window._sidebarOverrides.add(el.id);
        } else {
          window._sidebarOverrides.delete(el.id);
        }
        window.checkSidebarConsistency();
        const r = window.compute();
        window.renderOverview(r);
        window.renderMachines(r);
        window.renderCharts(r);
        window.renderTransport(r);
        window.renderAgency(r);
        window.renderScenarios();
      } else {
        window.renderAll();
      }
    });
    if (el.classList.contains('auto-computed')) {
      el.addEventListener('dblclick', () => {
        if (window._matComputed[el.id] !== undefined) {
          window._sidebarOverrides.delete(el.id);
          el.value = window._matComputed[el.id].toFixed ? parseFloat(window._matComputed[el.id].toFixed(4)).toString() : window._matComputed[el.id].toString();
          window.checkSidebarConsistency();
          window.renderAll();
          window.showToast('已恢复为材料汇总值');
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
      window.renderAll();
    });
  });

  // 主机有/无开关
  document.querySelectorAll('#waterToggle button').forEach(b => {
    b.addEventListener('click', () => {
      window.state.hasWater = parseInt(b.dataset.v, 10);
      handleMachineToggle();
    });
  });
  document.querySelectorAll('#genToggle button').forEach(b => {
    b.addEventListener('click', () => {
      window.state.hasGen = parseInt(b.dataset.v, 10);
      handleMachineToggle();
    });
  });
  document.querySelectorAll('#valveToggle button').forEach(b => {
    b.addEventListener('click', () => {
      window.state.hasValve = parseInt(b.dataset.v, 10);
      handleMachineToggle();
    });
  });

  // 子tab
  document.querySelectorAll('#matTabs button').forEach(b => {
    b.addEventListener('click', () => {
      document.querySelectorAll('#matTabs button').forEach(x => x.classList.remove('on'));
      b.classList.add('on');
      window.state.currentMatTab = b.dataset.mat;
      window.renderMaterials();
    });
  });
  document.querySelectorAll('#partsTabs button').forEach(b => {
    b.addEventListener('click', () => {
      document.querySelectorAll('#partsTabs button').forEach(x => x.classList.remove('on'));
      b.classList.add('on');
      window.state.currentPartsTab = b.dataset.key;
      window.renderParts();
    });
  });
  document.querySelectorAll('#toolsTabs button').forEach(b => {
    b.addEventListener('click', () => {
      document.querySelectorAll('#toolsTabs button').forEach(x => x.classList.remove('on'));
      b.classList.add('on');
      window.state.currentToolsTab = b.dataset.key;
      window.renderTools();
    });
  });

  // 搜索/筛选
  document.getElementById('matSearch').addEventListener('input', window.renderMaterials);
  document.getElementById('matFilter').addEventListener('change', window.renderMaterials);
  document.getElementById('autoSearch').addEventListener('input', window.renderAuto);
  const matLibSearchEl = document.getElementById('matLibSearch');
  if (matLibSearchEl) matLibSearchEl.addEventListener('input', window.renderMatLib);
  const matLibCatFilterEl = document.getElementById('matLibCatFilter');
  if (matLibCatFilterEl) matLibCatFilterEl.addEventListener('change', window.renderMatLib);

  // 自动化分类树：双击明细行打开二级弹窗
  document.addEventListener('dblclick', function(e) {
    if (e.target.closest('#rowEditOverlay') || e.target.closest('#matPickerPanel')) return;
    const row = e.target.closest('#autoTable tr.row-editable');
    if (!row) return;
    const cell = row.querySelector('.editable-cell');
    if (!cell) return;
    const rowIdx = parseInt(cell.dataset.origIdx || cell.dataset.idx, 10);
    if (isNaN(rowIdx)) return;
    e.preventDefault();
    window.openRowEditModal('data', { dataKey: 'automation', rowIdx, config: window._tableConfigs.autoTable });
  });

  // 二级弹窗编辑
  document.addEventListener('dblclick', function(e) {
    if (e.target.closest('#rowEditOverlay') || e.target.closest('#matPickerPanel')) return;
    const libRow = e.target.closest('tr');
    if (libRow && libRow.querySelector('[data-lib="true"]')) {
      const c = libRow.querySelector('[data-lib="true"]');
      if (c && c.dataset.idx !== undefined) {
        e.preventDefault();
        window.openRowEditModal('matlib', { idx: parseInt(c.dataset.idx, 10) });
        return;
      }
    }
    const cell = e.target.closest('.editable-cell');
    if (!cell) return;
    const tableEl = cell.closest('table');
    if (!tableEl) return;
    const config = window._tableConfigs[tableEl.id];
    if (!config) return;
    const rowIdx = parseInt(cell.dataset.origIdx || cell.dataset.idx, 10);
    e.preventDefault();
    window.openRowEditModal('data', { dataKey: config.dataKey, rowIdx, config });
  });

  // 自动化分类树：单击快捷编辑
  document.addEventListener('click', function(e) {
    if (e.target.closest('.row-edit-btn')) return;
    const cell = e.target.closest('#autoTable .editable-cell');
    if (!cell || cell.classList.contains('formula-cell')) return;
    e.stopPropagation();
    window.EditableTable.handleClick(e, window._tableConfigs.autoTable);
  });

  // 可编辑表格的点击委托
  document.addEventListener('click', function(e) {
    if (e.target.closest('.row-edit-btn')) return;
    const cell = e.target.closest('.editable-cell');
    if (!cell || cell.classList.contains('formula-cell')) return;
    if (cell.dataset.lib === 'true') {
      window.handleMatLibEdit(cell);
      return;
    }
    if (cell.dataset.preview !== undefined) {
      handlePreviewEdit(cell);
      return;
    }
    const tableEl = cell.closest('table');
    if (!tableEl) return;
    const config = window._tableConfigs[tableEl.id];
    if (!config) return;
    window.EditableTable.handleClick(e, config);
  });

  // 竞价分析 Tab 注册
  const tabBtns = document.querySelectorAll('#tabsNav button');
  tabBtns.forEach(b => {
    if (b.dataset.page === 'bidanalysis') {
      b.addEventListener('click', () => {
        const r = window.compute();
        window.renderBidAnalysis(r);
      });
    }
  });

  // 页面标题
  document.getElementById('projectName').addEventListener('input', updatePageTitle);
  updatePageTitle();
}

// 主机有/无开关
export function handleMachineToggle() {
  window.autoSwitchPartsTab();
  window.autoSwitchToolsTab();
  window.syncToggles();
  window.renderAll();
  window.showToast('已自动更新备件和工具清单及汇总数据');
}

// Import preview inline edit
export function handlePreviewEdit(cell) {
  const idx = parseInt(cell.dataset.preview, 10);
  const field = cell.dataset.field;
  if (!window._importPreview || idx >= window._importPreview.rows.length) return;
  if (cell.classList.contains('editing')) return;
  cell.classList.add('editing');
  const oldVal = window._importPreview.rows[idx][field];
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
      window._importPreview.rows[idx][field] = isNum ? (raw === '' ? 0 : parseFloat(raw)) : raw;
      window.showImportPreview(window._importPreview.rows, window._importPreview.fileName);
    } else {
      cell.classList.remove('editing');
      cell.innerHTML = window.EditableTable.cellDisplay(oldVal, { type: isNum ? 'number' : 'text' });
    }
  };
  input.addEventListener('blur', () => finish(true));
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') { e.preventDefault(); finish(true); }
    if (e.key === 'Escape') finish(false);
  });
}

// 页面标题动态更新
export function updatePageTitle() {
  try {
    const r = window.compute();
    const name = document.getElementById('projectName').value || '水电站';
    document.title = `${name} · ${window.fmt(r.totalBid, 0)}万 · 投标分析系统`;
  } catch(e) {}
}
