// ============ 打印 PDF ============
export function handlePrint() {
  if (!window.hasAnyMachine()) { window.showToast('请至少选择一个主机类型后再打印'); return; }
  window.print();
}

// ============ 导出 CSV ============
export function exportCSV() {
  if (!window.hasAnyMachine()) { window.showToast('请至少选择一个主机类型后再导出'); return; }
  const r = window.compute();
  let csv = '﻿';
  csv += `水电站投标价格分析报告\n`;
  csv += `项目名称,${window.csvEscape(r.inputs.projectName)}\n`;
  csv += `机组台数,${r.inputs.unitCount}\n`;
  csv += `水轮机,${window.state.hasWater ? '有' : '无'}\n`;
  csv += `发电机,${window.state.hasGen ? '有' : '无'}\n`;
  csv += `阀门,${window.state.hasValve ? '有' : '无'}\n\n`;
  csv += `=== 报价明细 ===\n`;
  csv += `项目,单台自制,单台外购,自制加价,外购加价,单台成本,数量,单价,总价\n`;
  r.items.forEach(it => {
    csv += `${it.name},${it.self.toFixed(2)},${it.buy.toFixed(2)},${it.selfM.toFixed(2)},${it.buyM.toFixed(2)},${it.cost.toFixed(2)},${it.qty},${it.unit.toFixed(2)},${it.total.toFixed(2)}\n`;
  });
  csv += `\n拟投标总价 (万元),${r.totalBid.toFixed(2)}\n`;
  csv += `固定成本 (万元),${r.totalFixed.toFixed(2)}\n`;
  csv += `消化费用 (万元),${r.absorb.toFixed(2)}\n`;
  csv += `消化占比,${(r.absorbPct * 100).toFixed(2)}%\n`;
  csv += `招标代理费 (万元),${r.agencyFee.fee.toFixed(2)}\n`;

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${r.inputs.projectName}_报价_${new Date().toISOString().split('T')[0]}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}
