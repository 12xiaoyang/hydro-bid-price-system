import { FormulaEngine } from '../calculation.js';
import { _tableConfigs } from '../health.js';
import { EditableTable } from '../editor.js';

export function renderLiaison() {
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
