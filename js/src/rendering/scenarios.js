import { state, compute, fmt, DEFAULTS } from '../calculation.js';
import { escHtml } from '../data.js';
import { showToast } from '../health.js';
import { takeProjectSnapshot } from '../state.js';

// ============ 渲染:方案 ============
export function renderScenarios() {
  const host = document.getElementById('scenarioList');
  const hint = document.getElementById('scenarioHint');
  const compare = document.getElementById('scenarioCompareCard');
  if (state.scenarios.length === 0) {
    host.innerHTML = '';
    hint.textContent = '暂无保存的方案。调整左侧参数后点击"保存当前方案"。';
    compare.style.display = 'none';
    return;
  }
  hint.textContent = `已保存 ${state.scenarios.length} 个方案，点击任一方案可加载到左侧参数面板`;
  host.innerHTML = state.scenarios.map((s, idx) => `
    <div class="scenario-card" onclick="loadScenario(${idx})">
      <button class="x-btn" onclick="deleteScenario(${idx}, event)" title="删除">×</button>
      <div class="scenario-card-name">${escHtml(s.name)}</div>
      <div class="scenario-card-value">${fmt(s.totalBid, 0)} 万</div>
      <div class="scenario-card-stats">单台 ${fmt(s.perUnit, 0)} · 消化 ${fmt(s.absorbPct * 100, 1)}%</div>
      <div class="scenario-card-stats">加价 ${Math.round(s.inputs.selfMarkup*100)}%/${Math.round(s.inputs.buyMarkup*100)}% · ${s.inputs.distance}km</div>
    </div>
  `).join('');

  // 横向对比
  if (state.scenarios.length >= 2) {
    compare.style.display = 'block';
    const rows = [
      { label: '项目名称', fn: s => s.inputs.projectName },
      { label: '机组台数', fn: s => s.inputs.unitCount + ' 台' },
      { label: '水机重量', fn: s => fmt(s.inputs.waterWeight, 1) + ' T' },
      { label: '发机重量', fn: s => fmt(s.inputs.genWeight, 1) + ' T' },
      { label: '阀门重量', fn: s => fmt(s.inputs.valveWeight, 1) + ' T' },
      { label: '自制加价', fn: s => Math.round(s.inputs.selfMarkup * 100) + '%' },
      { label: '外购加价', fn: s => Math.round(s.inputs.buyMarkup * 100) + '%' },
      { label: '运输距离', fn: s => s.inputs.distance + ' km' },
      { label: '拟投标总价', fn: s => fmt(s.totalBid, 2) + ' 万', highlight: true },
      { label: '单台报价', fn: s => fmt(s.perUnit, 2) + ' 万', highlight: true },
      { label: '固定成本', fn: s => fmt(s.totalFixed, 2) + ' 万' },
      { label: '消化占比', fn: s => fmt(s.absorbPct * 100, 2) + '%', highlight: true }
    ];
    const html = `
      <thead><tr>
        <th>对比项</th>
        ${state.scenarios.map(s => `<th>${escHtml(s.name)}</th>`).join('')}
      </tr></thead>
      <tbody>
        ${rows.map(r => `<tr ${r.highlight ? 'class="subtotal"' : ''}>
          <td><strong>${r.label}</strong></td>
          ${state.scenarios.map(s => `<td>${r.fn(s)}</td>`).join('')}
        </tr>`).join('')}
      </tbody>`;
    document.getElementById('scenarioCompareTable').innerHTML = html;
  } else {
    compare.style.display = 'none';
  }
}

export function saveScenario() {
  const r = compute();
  const name = prompt('方案名称：', `方案 ${state.scenarios.length + 1}`);
  if (!name) return;
  takeProjectSnapshot('保存方案');
  state.scenarios.push({
    name,
    inputs: { ...r.inputs },
    totalBid: r.totalBid,
    totalFixed: r.totalFixed,
    absorbPct: r.absorbPct,
    perUnit: r.inputs.unitCount > 0 ? r.totalBid / r.inputs.unitCount : 0
  });
  if (state.scenarios.length > 8) state.scenarios.shift();
  renderScenarios();
}

export function loadScenario(idx) {
  const s = state.scenarios[idx];
  takeProjectSnapshot('加载方案');
  Object.keys(s.inputs).forEach(k => {
    const el = document.getElementById(k);
    if (el && k !== 'hasWater' && k !== 'hasGen' && k !== 'hasValve') {
      el.value = (k === 'selfMarkup' || k === 'buyMarkup') ? s.inputs[k] * 100 : s.inputs[k];
    }
  });
  state.hasWater = s.inputs.hasWater;
  state.hasGen = s.inputs.hasGen;
  state.hasValve = s.inputs.hasValve;
  syncToggles();
  updateSliderDisplays();
  window.renderAll();
}

export function deleteScenario(idx, e) {
  e.stopPropagation();
  takeProjectSnapshot('删除方案');
  state.scenarios.splice(idx, 1);
  renderScenarios();
}

export function resetDefaults() {
  if (!confirm('确定要恢复所有参数到默认值吗？')) return;
  takeProjectSnapshot('重置默认参数');
  Object.keys(DEFAULTS).forEach(k => {
    const el = document.getElementById(k);
    if (el) el.value = DEFAULTS[k];
  });
  state.hasWater = state.hasGen = state.hasValve = 1;
  syncToggles();
  updateSliderDisplays();
  window.renderAll();
}

// 跳转到指定主机的材料明细
export function jumpToMaterial(machineKey) {
  // 阀门跳转到 valve_door（整体外购阀门），valve 表仅为参考
  const matTabMap = { water: 'water', gen: 'gen', valve: 'valve_door' };
  const matTab = matTabMap[machineKey] || 'water';
  state.currentMatTab = matTab;
  // Switch to materials page
  document.querySelectorAll('#tabsNav button').forEach(x => x.classList.remove('active'));
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const matNavBtn = document.querySelector('#tabsNav button[data-page="materials"]');
  if (matNavBtn) matNavBtn.classList.add('active');
  const matPage = document.getElementById('page-materials');
  if (matPage) matPage.classList.add('active');
  // Update material sub-tabs
  document.querySelectorAll('#matTabs button').forEach(x => x.classList.toggle('on', x.dataset.mat === matTab));
  window.renderMaterials();
  showToast('已跳转到' + (machineKey === 'water' ? '水轮机' : machineKey === 'gen' ? '发电机' : '进水阀(整机)') + '材料明细');
}

export function syncToggles() {
  document.querySelectorAll('#waterToggle button').forEach(b => b.classList.toggle('on', parseInt(b.dataset.v, 10) === state.hasWater));
  document.querySelectorAll('#genToggle button').forEach(b => b.classList.toggle('on', parseInt(b.dataset.v, 10) === state.hasGen));
  document.querySelectorAll('#valveToggle button').forEach(b => b.classList.toggle('on', parseInt(b.dataset.v, 10) === state.hasValve));
}

export function updateSliderDisplays() {
  const selfDisp = document.getElementById('selfMarkupDisp');
  const buyDisp  = document.getElementById('buyMarkupDisp');
  const distDisp = document.getElementById('distanceDisp');
  const selfSlider = document.getElementById('selfMarkup');
  const buySlider  = document.getElementById('buyMarkup');
  const distSlider = document.getElementById('distance');
  if (selfDisp && selfSlider && selfDisp !== document.activeElement) selfDisp.value = selfSlider.value;
  if (buyDisp  && buySlider  && buyDisp  !== document.activeElement) buyDisp.value  = buySlider.value;
  if (distDisp && distSlider && distDisp !== document.activeElement) distDisp.value = distSlider.value;
}

// 手动输入数值同步到滑块
(function bindSliderDispInputs() {
  const pairs = [
    { dispId: 'selfMarkupDisp', sliderId: 'selfMarkup', min: 0, max: 200 },
    { dispId: 'buyMarkupDisp',  sliderId: 'buyMarkup',  min: 0, max: 50  },
    { dispId: 'distanceDisp',   sliderId: 'distance',   min: 100, max: 8000 }
  ];
  pairs.forEach(({ dispId, sliderId, min, max }) => {
    const disp   = document.getElementById(dispId);
    const slider = document.getElementById(sliderId);
    if (!disp || !slider) return;
    disp.addEventListener('input', () => {
      let v = parseFloat(disp.value);
      if (isNaN(v)) return;
      v = Math.max(min, Math.min(max, v));
      slider.value = v;
      window.renderAll();
    });
    disp.addEventListener('blur', () => {
      let v = parseFloat(disp.value);
      if (isNaN(v)) v = parseFloat(slider.value);
      v = Math.max(min, Math.min(max, v));
      disp.value  = v;
      slider.value = v;
      window.renderAll();
    });
    disp.addEventListener('keydown', e => {
      if (e.key === 'Enter') { disp.blur(); }
      if (e.key === 'Escape') { disp.value = slider.value; disp.blur(); }
    });
  });
})();
