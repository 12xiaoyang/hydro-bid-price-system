import { fmt } from '../calculation.js';
import { DATA } from '../data.js';

export function renderAgency(r) {
  const detail = r.agencyFee.detail;
  document.getElementById('agencyInfo').innerHTML =
    `投标价 <strong>${fmt(r.totalBid, 2)} 万元</strong> · 累进至第 <strong>${detail.length}</strong> 档 · 应收代理费 <strong>${fmt(r.agencyFee.fee, 2)} 万元</strong>`;

  const rows = DATA.agency_tiers.map((t, i) => {
    const matched = detail[i];
    return `<tr class="${matched && matched.hit ? 'hit' : ''}">
      <td>${i + 1}</td>
      <td>${t.desc}</td>
      <td class="num">${matched ? fmt(matched.length, 2) : '—'}</td>
      <td class="num">${fmt(t.rate * 100, 4)}%</td>
      <td class="num">${matched ? fmt(matched.fee, 4) : '—'}</td>
      <td class="num">${matched ? fmt(matched.cumulative, 4) : '—'}</td>
    </tr>`;
  }).join('');
  document.getElementById('agencyTableBody').innerHTML = rows;
}
