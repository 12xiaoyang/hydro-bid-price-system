import { fmt } from '../calculation.js';

export function renderOverview(r) {
  const i = r.inputs;

  // Animated KPIs
  const kTotalEl = document.getElementById('kTotal');
  if (kTotalEl) {
    kTotalEl.innerHTML = fmt(r.totalBid, 0) + '<span class="unit">万元</span>';
    kTotalEl.classList.remove('kpi-animate'); void kTotalEl.offsetWidth; kTotalEl.classList.add('kpi-animate');
  }
  document.getElementById('kTotalSub').textContent = `含 ${i.unitCount} 台机组 · 主机/备件/工具/运输/服务`;
  document.getElementById('kUnit').textContent = i.unitCount > 0 ? fmt(r.totalBid / i.unitCount, 0) : '—';
  document.getElementById('kFixed').textContent = fmt(r.totalFixed, 0);

  // 消化占比带颜色预警
  const absorbPct = r.absorbPct * 100;
  const absorbEl = document.getElementById('kAbsorb');
  absorbEl.innerHTML = fmt(absorbPct, 1) + '<span class="unit">%</span>';
  const kpiEl = document.getElementById('kAbsorbKpi');
  kpiEl.className = 'mini-kpi ' + (absorbPct > 45 ? 'kpi-danger' : absorbPct > 30 ? 'kpi-warn' : 'kpi-good');
  document.getElementById('kAbsorbSub').textContent = `消化 ${fmt(r.absorb, 0)} 万`;
  document.getElementById('kAgency').textContent = fmt(r.agencyFee.fee, 2);

  // 利润徽章
  const badge = document.getElementById('marginBadge');
  if (badge) {
    const margin = r.absorbPct * 100;
    if (margin > 45) { badge.textContent = '⚠ 消化率偏高'; badge.style.cssText = 'display:inline-block;background:var(--red-light);color:var(--red);padding:2px 10px;border-radius:12px;font-size:11px;font-weight:600;'; }
    else if (margin > 28) { badge.textContent = '✓ 报价合理'; badge.style.cssText = 'display:inline-block;background:var(--green-light);color:var(--green);padding:2px 10px;border-radius:12px;font-size:11px;font-weight:600;'; }
    else { badge.textContent = '↑ 有提价空间'; badge.style.cssText = 'display:inline-block;background:var(--blue-light);color:var(--blue);padding:2px 10px;border-radius:12px;font-size:11px;font-weight:600;'; }
  }

  // 明细表 with progress bars
  const palette = ['var(--blue)','var(--accent)','var(--red)','var(--green)','var(--teal)','var(--purple)','var(--amber)','var(--indigo)','var(--teal)'];
  const body = document.getElementById('billBody');
  body.innerHTML = r.items.map((it, idx) => {
    const pct = r.totalBid > 0 ? (it.total / r.totalBid * 100) : 0;
    const color = palette[idx % palette.length];
    return `<tr>
      <td style="font-weight:500;">${it.name}</td>
      <td class="num">${fmt(it.self, 2)}</td>
      <td class="num">${fmt(it.buy, 2)}</td>
      <td class="num">${fmt(it.selfM, 2)}</td>
      <td class="num">${fmt(it.buyM, 2)}</td>
      <td class="num">${fmt(it.cost, 2)}</td>
      <td class="num">${it.qty}</td>
      <td class="num">${fmt(it.unit, 2)}</td>
      <td class="num" style="font-weight:600;">${fmt(it.total, 2)}</td>
      <td>
        <div class="bill-bar">
          <div class="bill-bar-track"><div class="bill-bar-fill" style="width:${pct}%;background:${color};"></div></div>
          <span style="font-size:11px;color:var(--text-muted);min-width:34px;text-align:right;">${fmt(pct, 1)}%</span>
        </div>
      </td>
    </tr>`;
  }).join('');
  const sum = k => r.items.reduce((s, it) => s + it[k], 0);
  document.getElementById('tSelf').textContent = fmt(sum('self'), 2);
  document.getElementById('tBuy').textContent = fmt(sum('buy'), 2);
  document.getElementById('tSelfM').textContent = fmt(sum('selfM'), 2);
  document.getElementById('tBuyM').textContent = fmt(sum('buyM'), 2);
  document.getElementById('tCost').textContent = fmt(sum('cost'), 2);
  document.getElementById('tTotal').textContent = fmt(r.totalBid, 2);
}
