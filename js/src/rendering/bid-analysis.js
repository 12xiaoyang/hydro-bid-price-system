import { fmt, hasAnyMachine } from '../calculation.js';

// ============ 渲染:竞价分析 ============
export let chBidLadder;

export function renderBidAnalysis(r) {
  if (!r || !r.totalBid) return;
  const cost = r.totalFixed; // 固定成本
  const bid = r.totalBid;
  const margin = bid > 0 ? (bid - cost) / bid : 0;

  // 保本价（成本 + 最低5%管理费）
  const floor = cost * 1.05;
  // 建议区间：成本 * 1.25 ~ 1.45
  const suggestLow = cost * 1.25;
  const suggestHigh = cost * 1.45;

  // 胜率算法：消化率越低胜率越高（低价高胜率）
  // 消化率20%以下=90%胜率，35%=60%，50%=30%，>60%=10%
  const absorbPct = r.absorbPct * 100;
  let winRate;
  if (absorbPct < 15) winRate = 92;
  else if (absorbPct < 25) winRate = 80 - (absorbPct - 15) * 1.5;
  else if (absorbPct < 38) winRate = 65 - (absorbPct - 25) * 2.2;
  else if (absorbPct < 52) winRate = 36 - (absorbPct - 38) * 1.8;
  else winRate = Math.max(5, 11 - (absorbPct - 52) * 0.5);
  winRate = Math.min(95, Math.max(5, winRate));

  document.getElementById('baWinRate').textContent = winRate.toFixed(0) + '%';
  document.getElementById('baFloor').textContent = fmt(floor, 0) + ' 万';
  document.getElementById('baSuggest').textContent = fmt(suggestLow, 0) + ' ~ ' + fmt(suggestHigh, 0) + ' 万';

  // 仪表盘弧形
  const arc = document.getElementById('gaugeArc');
  const gaugeText = document.getElementById('gaugeText');
  if (arc) {
    const total = 188; // 半圆周长
    const filled = total * (winRate / 100);
    arc.setAttribute('stroke-dasharray', `${filled} ${total - filled}`);
    gaugeText.textContent = winRate.toFixed(0) + '%';
    gaugeText.setAttribute('fill', winRate > 60 ? 'var(--green)' : winRate > 35 ? 'var(--amber)' : 'var(--red)');
  }

  // 胜率评语
  const comment = document.getElementById('baWinComment');
  if (comment) {
    let txt = '';
    if (winRate > 70) txt = `<span style="color:var(--green);font-weight:600;">报价竞争力强 ✅</span><br>当前报价相对较低，胜算较大。可考虑适当上浮 <strong>${fmt(suggestLow - bid, 0)}</strong> 万元以提升利润空间，同时不影响中标概率。`;
    else if (winRate > 45) txt = `<span style="color:var(--amber);font-weight:600;">报价处于合理区间 ⚠️</span><br>当前胜率适中。建议报价在 <strong>${fmt(suggestLow, 0)}~${fmt(suggestHigh, 0)}</strong> 万元之间，兼顾竞争力与利润。`;
    else txt = `<span style="color:var(--red);font-weight:600;">报价偏高，胜率较低 ❌</span><br>当前消化率 <strong>${absorbPct.toFixed(1)}%</strong> 较高，建议检查成本构成，或将报价降至 <strong>${fmt(suggestLow, 0)}</strong> 万以内以提升竞争力。`;
    comment.innerHTML = txt;
  }

  // 敏感度分析
  const sensEl = document.getElementById('baSensitivity');
  if (sensEl) {
    const scenarios = [
      { label: '报价 -10%', val: bid * 0.9, color: 'var(--red)' },
      { label: '报价 -5%',  val: bid * 0.95, color: 'var(--amber)' },
      { label: '当前报价',  val: bid, color: 'var(--blue)', current: true },
      { label: '报价 +5%',  val: bid * 1.05, color: 'var(--green)' },
      { label: '报价 +10%', val: bid * 1.1, color: 'var(--teal)' },
    ];
    sensEl.innerHTML = scenarios.map(s => {
      const profit = s.val - cost;
      const pct = s.val > 0 ? (profit / s.val * 100) : 0;
      const barW = Math.max(0, Math.min(100, pct * 2));
      return `<div class="sensitivity-row" style="${s.current ? 'font-weight:600;' : ''}">
        <span style="width:80px;font-size:11.5px;">${s.label}</span>
        <div class="sensitivity-bar"><div class="sensitivity-fill" style="width:${barW}%;background:${s.color};"></div></div>
        <span style="width:70px;text-align:right;font-size:11.5px;color:${s.color};font-family:monospace;">${fmt(profit, 0)} 万</span>
        <span style="width:44px;text-align:right;font-size:11px;color:var(--text-dim);">${pct.toFixed(1)}%</span>
      </div>`;
    }).join('');
  }

  // 策略建议卡片
  const stratEl = document.getElementById('baStrategy');
  if (stratEl) {
    const cards = [
      { icon: '🔴', title: '保底价', val: fmt(floor, 0) + ' 万', desc: '成本+5%管理费，最低不可低于此价', color: 'var(--red-light)', border: 'var(--red)' },
      { icon: '🟡', title: '竞争价', val: fmt(suggestLow, 0) + ' 万', desc: '成本×1.25，兼顾竞争力与基本利润', color: 'var(--amber-light)', border: 'var(--amber)' },
      { icon: '🟢', title: '目标价', val: fmt(suggestHigh, 0) + ' 万', desc: '成本×1.45，理想利润区间上限', color: 'var(--green-light)', border: 'var(--green)' },
    ];
    stratEl.innerHTML = cards.map(c => `
      <div style="background:${c.color};border:1px solid ${c.border};border-radius:8px;padding:14px;text-align:center;">
        <div style="font-size:22px;margin-bottom:4px;">${c.icon}</div>
        <div style="font-size:11px;color:var(--text-dim);margin-bottom:6px;text-transform:uppercase;letter-spacing:0.08em;">${c.title}</div>
        <div style="font-size:20px;font-weight:700;font-family:monospace;color:var(--text);">${c.val}</div>
        <div style="font-size:11px;color:var(--text-muted);margin-top:6px;">${c.desc}</div>
      </div>`).join('');
  }

  // 价格阶梯图
  const steps = 9;
  const labels = [], profitData = [], winData = [];
  for (let i = 0; i < steps; i++) {
    const pct = -20 + i * 5; // -20% to +20%
    const v = bid * (1 + pct / 100);
    const p = v - cost;
    const pPct = v > 0 ? p / v * 100 : 0;
    let wr;
    const absP = ((v - cost) / v) * 100;
    if (absP < 15) wr = 92; else if (absP < 25) wr = 80 - (absP - 15) * 1.5;
    else if (absP < 38) wr = 65 - (absP - 25) * 2.2; else if (absP < 52) wr = 36 - (absP - 38) * 1.8;
    else wr = Math.max(5, 11 - (absP - 52) * 0.5);
    wr = Math.min(95, Math.max(5, wr));
    labels.push((pct >= 0 ? '+' : '') + pct + '%');
    profitData.push(parseFloat(p.toFixed(1)));
    winData.push(parseFloat(wr.toFixed(1)));
  }
  const ladderData = {
    labels,
    datasets: [
      { label: '利润(万元)', data: profitData, type: 'bar', backgroundColor: profitData.map(v => v > 0 ? 'rgba(31,170,107,0.7)' : 'rgba(224,64,96,0.7)'), borderRadius: 4, yAxisID: 'y' },
      { label: '预估胜率(%)', data: winData, type: 'line', borderColor: 'var(--blue)', backgroundColor: 'rgba(59,111,212,0.1)', tension: 0.4, yAxisID: 'y2', pointBackgroundColor: 'var(--blue)', pointRadius: 4 }
    ]
  };
  const ctx = document.getElementById('chBidLadder');
  if (ctx) {
    if (chBidLadder) { chBidLadder.data = ladderData; chBidLadder.update(); }
    else chBidLadder = new Chart(ctx, {
      data: ladderData,
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: {
          legend: { position: 'bottom', labels: { boxWidth: 10, font: { size: 11 } } },
          tooltip: { callbacks: { label: c => c.dataset.label + ': ' + c.parsed.y + (c.datasetIndex === 1 ? '%' : ' 万') } }
        },
        scales: {
          x: { grid: { display: false } },
          y: { beginAtZero: false, ticks: { callback: v => v + ' 万', font: { size: 11 } }, title: { display: true, text: '利润 (万元)', font: { size: 11 } } },
          y2: { position: 'right', min: 0, max: 100, ticks: { callback: v => v + '%', font: { size: 11 } }, grid: { display: false }, title: { display: true, text: '胜率', font: { size: 11 } } }
        }
      }
    });
  }
}

// 更新导出/打印按钮状态
export function updateExportButtons() {
  const exportBtn = document.getElementById('exportCsvBtn');
  const printBtn = document.getElementById('printBtn');
  const disabled = !hasAnyMachine();
  if (exportBtn) exportBtn.disabled = disabled;
  if (printBtn) printBtn.disabled = disabled;
}
