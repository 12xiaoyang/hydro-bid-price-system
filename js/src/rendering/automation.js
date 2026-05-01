import { FormulaEngine, state } from '../calculation.js';
import { DATA, escHtml, YUAN_TO_WAN } from '../data.js';
import { fmt } from '../calculation.js';
import { _tableConfigs } from '../health.js';
import { EditableTable, openRowEditModal } from '../../editor.js';

// ============ 渲染:自动化&监测 ============
export const AUTO_GROUP_ORDER = ['水轮机自动化检测','发电机自动化检测','阀门自动化检测','备件自动化检测','工具自动化检测','辅助设备自动化检测'];
export const AUTO_GROUP_SEQ = ['一','二','三','四','五','六'];
export const AUTO_COLS = [
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
        r.seq = ri + 1;
      });
    });
  });
}

export function renderAutoCell(row, col, realIdx, ci) {
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

export function renderAutoGroupedTable(rows, groupName, groupIdx) {
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

export function renderAuto() {
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
