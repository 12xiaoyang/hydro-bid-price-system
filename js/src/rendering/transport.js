import { fmt } from '../calculation.js';

export function renderTransport(r) {
  const t = r.transport;
  const i = r.inputs;
  document.getElementById('tWeightTotal').textContent = fmt(i.waterWeight + i.genWeight + i.valveWeight, 2) + ' T';
  document.getElementById('tFactor').textContent = fmt(i.transportExtra, 2);
  document.getElementById('tWeightAdj').textContent = fmt(t.weightSingle, 2) + ' T';
  document.getElementById('tWeightWide').textContent = fmt(t.wideWeight, 2) + ' T';
  document.getElementById('tWeightNorm').textContent = fmt(t.normalWeight, 2) + ' T';
  document.getElementById('tDistance').textContent = fmt(i.distance, 0) + ' km';
  document.getElementById('tPriceWide').textContent = fmt(i.tonKmPriceWide, 2) + ' 元';
  document.getElementById('tPriceNorm').textContent = fmt(i.tonKmPrice, 2) + ' 元';
  document.getElementById('tCostWide').textContent = fmt(t.transportWide, 4);
  document.getElementById('tCostNorm').textContent = fmt(t.transportNormal, 4);
  document.getElementById('tCostUnit').textContent = fmt(t.transportUnit, 2) + ' 万';
  document.getElementById('tQty').textContent = i.unitCount;
  document.getElementById('tCostAll').textContent = fmt(t.transportTotal, 2) + ' 万';
}
