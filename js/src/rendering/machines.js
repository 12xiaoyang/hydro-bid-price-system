import { fmt } from '../calculation.js';

export function renderMachines(r) {
  const machines = [
    { key: 'water', label: '水轮机', model: 'HLB200-LJ-203', en: 'Hydro Turbine', d: r.water },
    { key: 'gen', label: '发电机', model: 'SF40-16/4700', en: 'Generator', d: r.gen },
    { key: 'valve', label: '进水阀门', model: 'PDF120-WY-280', en: 'Inlet Valve', d: r.valve }
  ];
  document.getElementById('machinesGrid').innerHTML = machines.map(m => {
    if (!m.d.has) return `<div class="machine" data-t="${m.key}" style="opacity:0.4;"><div class="machine-name">${m.label}</div><div style="font-size:12px;color:var(--text-dim);text-align:center;padding:30px 0;">本项目不含此设备</div></div>`;
    const total = m.d.self + m.d.buy;
    const selfPct = total > 0 ? m.d.self / total * 100 : 0;
    return `<div class="machine" data-t="${m.key}">
      <div class="machine-name">${m.label}</div>
      <div class="machine-model">${m.model}</div>
      <div class="machine-row"><span>重量</span><span class="v">${fmt(m.d.weight, 1)} T <button class="btn" style="font-size:10px;padding:1px 5px;margin-left:4px;" onclick="jumpToMaterial('${m.key}')" title="查看材料明细">→</button></span></div>
      <div class="machine-row"><span>材料价</span><span class="v">${fmt(m.d.mat, 2)} 万</span></div>
      <div class="machine-row"><span>外购件</span><span class="v">${fmt(m.d.buy, 2)} 万</span></div>
      <div class="machine-row"><span>自制部分</span><span class="v">${fmt(m.d.self, 2)} 万</span></div>
      <div class="machine-row"><span>材料吨价</span><span class="v">${fmt(m.d.matT, 2)} 万/T</span></div>
      <div class="machine-row highlight"><span>拟报单价</span><span class="v">${fmt(m.d.unit, 2)} 万</span></div>
      <div class="machine-row"><span>投标吨价</span><span class="v">${fmt(m.d.bidT, 2)} 万/T</span></div>
      <div style="margin-top:10px;">
        <div style="display:flex;justify-content:space-between;font-size:10.5px;color:var(--text-muted);">
          <span>自制 ${fmt(selfPct, 1)}%</span><span>外购 ${fmt(100-selfPct, 1)}%</span>
        </div>
        <div class="stacked">
          <div style="background:var(--blue);width:${selfPct}%;"></div>
          <div style="background:var(--amber);width:${100-selfPct}%;"></div>
        </div>
      </div>
    </div>`;
  }).join('');
}
