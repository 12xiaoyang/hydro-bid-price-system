import { state, FormulaEngine, hasAnyMachine, getAvailablePartsTabs, autoSwitchPartsTab, autoSwitchToolsTab } from '../calculation.js';
import { _tableConfigs } from '../health.js';
import { EditableTable } from '../../editor.js';

export function renderParts() {
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

export function renderTools() {
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
