// Charts: Chart.js instances are persisted across renders via module-scoped variables
export let chTonPrice, chTonPrice2, chComposition, chSelfBuy, chCostStack;

export function renderCharts(r) {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const gridColor = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)';
  const textColor = isDark ? '#9090b8' : '#5a5a7a';
  const panelColor = isDark ? '#1a1a2e' : '#ffffff';

  // 更新 Chart.js 全局默认色
  Chart.defaults.color = textColor;
  Chart.defaults.borderColor = gridColor;

  const tonData = {
    labels: ['水轮机', '发电机', '阀门'],
    datasets: [
      { label: '材料吨价', data: [r.water.matT, r.gen.matT, r.valve.matT], backgroundColor: isDark ? 'rgba(85,128,240,0.8)' : 'rgba(59,111,212,0.8)', borderRadius: 5 },
      { label: '投标吨价', data: [r.water.bidT, r.gen.bidT, r.valve.bidT], backgroundColor: isDark ? 'rgba(240,160,80,0.8)' : 'rgba(200,135,61,0.8)', borderRadius: 5 }
    ]
  };
  const tonOpts = {
    responsive: true, maintainAspectRatio: false,
    plugins: {
      legend: { position: 'bottom', labels: { boxWidth: 10, boxHeight: 10, padding: 14, font: { size: 11 }, color: textColor } },
      tooltip: { callbacks: { label: c => ` ${c.dataset.label}: ${c.parsed.y.toFixed(2)} 万/T` } }
    },
    scales: {
      x: { grid: { display: false }, ticks: { color: textColor } },
      y: { beginAtZero: true, grid: { color: gridColor }, ticks: { callback: v => v + ' 万/T', font: { size: 11 }, color: textColor } }
    }
  };
  if (chTonPrice) { chTonPrice.data = tonData; chTonPrice.options = tonOpts; chTonPrice.update(); }
  else chTonPrice = new Chart(document.getElementById('chTonPrice'), { type: 'bar', data: tonData, options: tonOpts });
  if (document.getElementById('chTonPrice2')) {
    if (chTonPrice2) { chTonPrice2.data = tonData; chTonPrice2.options = tonOpts; chTonPrice2.update(); }
    else chTonPrice2 = new Chart(document.getElementById('chTonPrice2'), { type: 'bar', data: tonData, options: tonOpts });
  }

  const compItems = r.items.filter(x => x.total > 0.01);
  const palette = ['#3b6fd4','#e08820','#e04060','#1faa6b','#00bfa5','#7c6fdd','#4255b0','#f0a050','#888'];
  const compData = {
    labels: compItems.map(x => x.name),
    datasets: [{
      data: compItems.map(x => x.total),
      backgroundColor: compItems.map((_, i) => palette[i % palette.length]),
      borderWidth: 3, borderColor: panelColor,
      hoverOffset: 8
    }]
  };
  const compOpts = {
    responsive: true, maintainAspectRatio: false, cutout: '62%',
    plugins: {
      legend: { position: 'right', labels: { boxWidth: 10, boxHeight: 10, padding: 10, font: { size: 11 }, color: textColor } },
      tooltip: {
        callbacks: {
          label: c => {
            const tot = c.dataset.data.reduce((a,b) => a+b, 0);
            const pct = tot > 0 ? (c.parsed/tot*100).toFixed(1) : '0';
            return ` ${c.label}: ${c.parsed.toFixed(2)} 万 (${pct}%)`;
          }
        }
      }
    }
  };
  if (chComposition) { chComposition.data = compData; chComposition.options = compOpts; chComposition.update(); }
  else chComposition = new Chart(document.getElementById('chComposition'), { type: 'doughnut', data: compData, options: compOpts });

  // 自制vs外购
  if (document.getElementById('chSelfBuy')) {
    const sbData = {
      labels: ['水轮机', '发电机', '阀门'],
      datasets: [
        { label: '自制', data: [r.water.self, r.gen.self, r.valve.self], backgroundColor: isDark ? 'rgba(85,128,240,0.8)' : 'rgba(59,111,212,0.8)', borderRadius: 4 },
        { label: '外购', data: [r.water.buy, r.gen.buy, r.valve.buy], backgroundColor: isDark ? 'rgba(240,160,80,0.8)' : 'rgba(200,135,61,0.8)', borderRadius: 4 }
      ]
    };
    const sbOpts = {
      responsive: true, maintainAspectRatio: false,
      plugins: {
        legend: { position: 'bottom', labels: { boxWidth: 10, boxHeight: 10, padding: 14, font: { size: 11 }, color: textColor } },
        tooltip: { callbacks: { label: c => ` ${c.dataset.label}: ${c.parsed.y.toFixed(2)} 万` } }
      },
      scales: {
        x: { stacked: true, grid: { display: false }, ticks: { color: textColor } },
        y: { stacked: true, beginAtZero: true, grid: { color: gridColor }, ticks: { callback: v => v + ' 万', color: textColor } }
      }
    };
    if (chSelfBuy) { chSelfBuy.data = sbData; chSelfBuy.options = sbOpts; chSelfBuy.update(); }
    else chSelfBuy = new Chart(document.getElementById('chSelfBuy'), { type: 'bar', data: sbData, options: sbOpts });
  }

  // 成本堆叠
  if (document.getElementById('chCostStack')) {
    const csData = {
      labels: r.items.map(x => x.name),
      datasets: [
        { label: '自制成本', data: r.items.map(x => x.self), backgroundColor: isDark ? 'rgba(85,128,240,0.85)' : 'rgba(59,111,212,0.85)', borderRadius: 3 },
        { label: '外购成本', data: r.items.map(x => x.buy), backgroundColor: isDark ? 'rgba(240,160,80,0.85)' : 'rgba(200,135,61,0.85)', borderRadius: 3 },
        { label: '自制加价', data: r.items.map(x => x.selfM), backgroundColor: isDark ? 'rgba(85,128,240,0.4)' : 'rgba(59,111,212,0.4)', borderRadius: 3 },
        { label: '外购加价', data: r.items.map(x => x.buyM), backgroundColor: isDark ? 'rgba(240,160,80,0.4)' : 'rgba(200,135,61,0.4)', borderRadius: 3 }
      ]
    };
    const csOpts = {
      indexAxis: 'y', responsive: true, maintainAspectRatio: false,
      plugins: {
        legend: { position: 'bottom', labels: { boxWidth: 10, boxHeight: 10, padding: 14, font: { size: 11 }, color: textColor } },
        tooltip: { callbacks: { label: c => ` ${c.dataset.label}: ${c.parsed.x.toFixed(2)} 万` } }
      },
      scales: {
        x: { stacked: true, beginAtZero: true, grid: { color: gridColor }, ticks: { callback: v => v + ' 万', color: textColor } },
        y: { stacked: true, grid: { display: false }, ticks: { color: textColor } }
      }
    };
    if (chCostStack) { chCostStack.data = csData; chCostStack.options = csOpts; chCostStack.update(); }
    else chCostStack = new Chart(document.getElementById('chCostStack'), { type: 'bar', data: csData, options: csOpts });
  }
}
