import { FormulaEngine, state } from '../calculation.js';
import { _tableConfigs, showToast } from '../health.js';
import { fixAllConsistency } from '../calculation.js';
import { EditableTable } from '../editor.js';
import { resetDataTable } from '../persistence.js';

export function renderMaterials() {
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
      { key: 'usage', label: '利用率/数量', align: 'right', type: 'usageRate' },
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
    btn.onclick = () => { if (confirm('确定恢复此表为默认数据？')) { resetDataTable(which); renderMaterials(); window.renderAll(); showToast('已恢复默认数据'); } };

    btnWrap.appendChild(fixBtn);
    btnWrap.appendChild(btn);
    summaryEl.parentElement.insertBefore(btnWrap, summaryEl);
  }
}
