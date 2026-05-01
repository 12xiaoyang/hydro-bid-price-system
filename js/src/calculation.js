// js/src/calculation.js — 公式引擎 + 计算函数

// ---- Part 1: 材料库数据 (from engine.js) ----
import { DATA, MATERIAL_PRICE_DB, PRICE_CACHE, YUAN_TO_WAN, lookupMaterialPrice } from './data.js';

export let MAT_LIB = [];
export let _matLibNextId = 1;
export let MAT_IMPORT_LOG = [];
let _importPreview = null; // { rows: [], conflicts: [] }

function initMatLib() {
  // Build from MATERIAL_PRICE_DB
  const categoryMap = {
    'Q235': '板材类', 'Q345': '板材类', 'WDER': '板材类', '0Cr': '不锈钢材',
    '50W': '板材类', '复合板': '板材类',
    '机座壁': '板材类', '磁轭圈': '板材类',
    '圆钢': '型材类', '钢管': '管材', '角钢': '型材类', '工字钢': '型材类', '无缝钢管': '管材',
    '冷拉圆钢': '型材类',
    '转轮': '铸件类', '混流': '铸件类', '导叶': '铸件类',
    '复杂大型铸件': '铸件类', '一般大型铸件': '铸件类', '一般小型铸件': '铸件类',
    '水机主轴': '锻件类', '电机主轴': '锻件类', '主轴锻件': '锻件类',
    '镜板': '锻件类', '小锻件': '锻件类',
    '锻35': '锻件类', '锻34': '锻件类', '锻1Cr': '锻件类', '锻06': '锻件类',
    '云母带': '绝缘材料', '聚酯': '绝缘材料', 'NHN': '绝缘材料',
    '玻璃坯布': '绝缘材料', '玻布板': '绝缘材料', '高强度玻布板': '绝缘材料',
    '防电晕板': '绝缘材料', '高阻带': '绝缘材料', '低阻带': '绝缘材料', '低阻布': '绝缘材料',
    'F级无纬带': '绝缘材料', '无纬带': '绝缘材料', '涤纶': '绝缘材料',
    'SBEB': '铜材', 'SBEQB': '铜材', 'DSBE': '铜材', 'TMR': '铜材',
    '异型铜排': '铜材', '含银铜线': '铜材', '铜棒': '铜材',
    '灰铸铁': '铸件类', '铸铝青铜': '铸件类', '铸锡青铜': '铸件类',
    '无磁钢': '型材类', '密封盖': '铸件类', '阻尼环': '铜材',
    '碳钢焊条': '其他', '不锈钢焊丝': '其他', '挡风板': '其他',
    '巴氏合金': '其他', '塑料瓦': '成品件',
    '水导轴瓦': '成品件', '上导轴瓦': '成品件', '推力轴瓦': '成品件', '下导轴瓦': '成品件',
    '不锈钢管': '管材', '冷却器铜管': '管材',
    '励磁电缆': '其他', '信号电缆': '其他', '动力电缆': '其他',
    '空气冷却器': '成品件', '流道喷砂': '其他', '碳化钨': '其他', '蜗壳弹性层': '其他',
    '镀铬': '其他', '碳粉制动': '成品件', '刷架': '成品件', '吸排油雾': '成品件',
    '电刷': '成品件', '刷握': '成品件', '汽轮机油': '其他',
    '中心点': '成品件', '碟簧': '成品件',
    '空气围带': '密封件', '密封环': '密封件',
    'O形圈': '密封件', '轴套': '轴承/轴套', '关节轴承': '轴承/轴套',
    'V形组合圈': '密封件', '接力器': '成品件',
    '真空破坏阀': '阀门类', '手动闸阀': '阀门类', '液压盘型阀': '阀门类',
    '液压操作阀': '阀门类', '闸阀': '阀门类',
    '电动试压泵': '成品件', '电加热器': '成品件', '制动器': '成品件'
  };
  function guessCat(key) {
    for (const [prefix, cat] of Object.entries(categoryMap)) {
      if (key.startsWith(prefix)) return cat;
    }
    return '其他';
  }
  MAT_LIB = [];
  _matLibNextId = 1;
  for (const [key, val] of MATERIAL_PRICE_DB) {
    const existing = MAT_LIB.find(m => m.name === key);
    if (existing) continue;
    MAT_LIB.push({
      id: 'MAT-' + String(_matLibNextId).padStart(4, '0'),
      name: key,
      spec: '',
      category: guessCat(key),
      price: val.p,
      usage_rate: 0.8,
      remark: ''
    });
    _matLibNextId++;
  }
  // Load from localStorage if available
  try {
    const saved = localStorage.getItem('hydro_mat_lib');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        MAT_LIB = parsed;
        _matLibNextId = Math.max(...MAT_LIB.map(m => parseInt((m.id || 'MAT-0000').replace('MAT-',''), 10) || 0)) + 1;
      }
    }
  } catch(e) {}
  // Load import log
  try {
    const saved = localStorage.getItem('hydro_import_log');
    if (saved) MAT_IMPORT_LOG = JSON.parse(saved);
  } catch(e) {}
}
export function persistMatLib() {
  try { localStorage.setItem('hydro_mat_lib', JSON.stringify(MAT_LIB)); } catch(e) {}
  try { localStorage.setItem('hydro_import_log', JSON.stringify(MAT_IMPORT_LOG)); } catch(e) {}
}

initMatLib();

// ============ 公式引擎 ============

// ============ 自定义公式配置 ============
const DEFAULT_FORMULAS = {
  mat_amount_self: {
    label: '材料金额（自制）',
    expr: 'weight / usage * price',
    desc: '金额 = 重量 ÷ 明细行利用率 × 材料库标准价格',
    vars: ['weight','usage','price']
  },
  mat_amount_buy: {
    label: '材料金额（外购）',
    expr: 'usage * price',
    desc: '金额 = 数量/用量 × 材料库标准价格',
    vars: ['usage','price']
  },
  parts_total: {
    label: '备件合计',
    expr: 'self + buy',
    desc: '合计 = 自制金额 + 外购金额',
    vars: ['self','buy']
  },
  valve_parts_total: {
    label: '阀门备件合计',
    expr: 'qty * unit_price',
    desc: '合计 = 数量 × 单价',
    vars: ['qty','unit_price']
  },
  tools_total: {
    label: '工具合计',
    expr: 'self + buy',
    desc: '合计 = 自制金额 + 外购金额',
    vars: ['self','buy']
  },
  automation_total: {
    label: '自动化合价',
    expr: 'qty * unit_price',
    desc: '合价 = 数量 × 单价',
    vars: ['qty','unit_price']
  },
  monitoring_total: {
    label: '在线监测合价',
    expr: 'qty_parsed * unit_price',
    desc: '合价 = 解析后的数量 × 单价；如数量为"2×4"，系统会转换为 8',
    vars: ['qty','qty_parsed','unit_price']
  },
  liaison_total: {
    label: '设联会合计',
    expr: 'person_days * unit_price',
    desc: '合计 = 人天 × 单价',
    vars: ['person_days','unit_price']
  },
  subtotal_weight: {
    label: '汇总重量',
    expr: 'sum(child.weight)',
    desc: '自动汇总 = 所有直接子级重量之和',
    vars: ['child.weight']
  },
  subtotal_amount: {
    label: '汇总金额',
    expr: 'sum(child.amount)',
    desc: '自动汇总 = 所有直接子级金额之和',
    vars: ['child.amount']
  }
};
export let CUSTOM_FORMULAS = (DATA._customFormulas && typeof DATA._customFormulas === 'object') ? DATA._customFormulas : {};
DATA._customFormulas = CUSTOM_FORMULAS;

function getFormulaExpr(formulaId) {
  const def = DEFAULT_FORMULAS[formulaId];
  if (!def) return '';
  const custom = CUSTOM_FORMULAS && CUSTOM_FORMULAS[formulaId];
  return (custom && typeof custom.expr === 'string' && custom.expr.trim()) ? custom.expr.trim() : def.expr;
}
function setCustomFormula(formulaId, expr) {
  if (!formulaId || !DEFAULT_FORMULAS[formulaId]) return;
  if (!DATA._customFormulas || typeof DATA._customFormulas !== 'object') DATA._customFormulas = {};
  CUSTOM_FORMULAS = DATA._customFormulas;
  const def = DEFAULT_FORMULAS[formulaId];
  const normalized = String(expr || '').trim();
  if (!normalized || normalized === def.expr) {
    delete CUSTOM_FORMULAS[formulaId];
  } else {
    CUSTOM_FORMULAS[formulaId] = { expr: normalized, updatedAt: new Date().toISOString() };
  }
}
function resetCustomFormula(formulaId) {
  if (CUSTOM_FORMULAS && CUSTOM_FORMULAS[formulaId]) delete CUSTOM_FORMULAS[formulaId];
  if (DATA._customFormulas && DATA._customFormulas[formulaId]) delete DATA._customFormulas[formulaId];
}
function parseQtyValue(v) {
  if (typeof v === 'string' && v.includes('×')) {
    return v.split('×').reduce((a,b) => a * (parseFloat(b) || 0), 1);
  }
  return parseFloat(v) || 0;
}
function evalConfiguredFormula(formulaId, row, extra, fallback) {
  const def = DEFAULT_FORMULAS[formulaId];
  if (!def) return fallback;
  const expr = getFormulaExpr(formulaId);
  try {
    const ctx = Object.assign({}, row || {}, extra || {});
    const result = evaluateFormulaSafe(expr, ctx);
    const n = parseFloat(result);
    return isNaN(n) ? fallback : parseFloat(n.toFixed(6));
  } catch(e) {
    console.warn('calculation failed:', formulaId, e.message);
    return fallback;
  }
}

// Backend-only calculation configuration helpers.
// Usage from browser console or saved project scripts:
//   setCustomFormula('mat_amount_self', 'weight / usage * material_price')
//   resetCustomFormula('mat_amount_self')
window.setCustomFormula = setCustomFormula;
window.resetCustomFormula = resetCustomFormula;
window.getFormulaExpr = getFormulaExpr;

function getFormulaMetaForField(dataKey, row, key, col, isSub) {
  if (['water','gen','valve','valve_door'].includes(dataKey)) {
    if (isSub && key === 'weight') return Object.assign({ id: 'subtotal_weight', configurable: false }, DEFAULT_FORMULAS.subtotal_weight);
    if (isSub && key === 'amount') return Object.assign({ id: 'subtotal_amount', configurable: false }, DEFAULT_FORMULAS.subtotal_amount);
    if (key === 'amount') {
      const isBuy = FormulaEngine && FormulaEngine.detectIsBuy ? FormulaEngine.detectIsBuy(row || {}) : false;
      const id = isBuy ? 'mat_amount_buy' : 'mat_amount_self';
      return Object.assign({ id, configurable: true }, DEFAULT_FORMULAS[id]);
    }
    if (isSub && key === 'usage') return { id: 'subtotal_usage', label: '汇总行利用率', desc: '汇总行不参与材料明细行利用率计算，仅子级材料行使用利用率', expr: '', vars: [], configurable: false };
  }
  if (key === 'total') {
    let id = null;
    if (['water_parts','gen_parts'].includes(dataKey)) id = 'parts_total';
    if (dataKey === 'valve_parts') id = 'valve_parts_total';
    if (['water_tools','gen_tools','valve_tools'].includes(dataKey)) id = 'tools_total';
    if (dataKey === 'automation') id = 'automation_total';
    if (dataKey === 'monitoring') id = 'monitoring_total';
    if (dataKey === 'liaison') id = 'liaison_total';
    if (id) return Object.assign({ id, configurable: true }, DEFAULT_FORMULAS[id]);
  }
  if (col && col.formula) {
    return { id: dataKey + '_' + key, label: col.label || key, desc: '该字段由系统自动计算', expr: '', vars: [], configurable: false };
  }
  return null;
}


export const FormulaEngine = {
  // Auto-detect is_buy from sub_categories if null/undefined
  detectIsBuy(row) {
    if (row.is_buy !== null && row.is_buy !== undefined && row.is_buy !== '') return row.is_buy;
    // Auto-detect from usage value: >1 integer → quantity (外购), 0~1 → rate (自制)
    const u = parseFloat(row.usage);
    if (!isNaN(u)) {
      if (u > 1) return true;   // integer quantity → 外购
      if (u > 0 && u <= 1) return false;  // utilization rate → 自制
    }
    if (!row.category) return false;
    // Default categories that are typically purchased
    const buyCategories = ['阀门类','成品转轮\\成品导叶','成品矽钢片','轴瓦','轴套\\轴承','密封圈',
      '接力器','接头\\三通','电缆','试压泵','电加热器/除湿机','互感器\\接地装置','空气冷却器',
      '制动器','测温元件','喷涂/喷砂/弹性层','除尘装置','吸排油雾装置','电刷刷握','润滑油',
      '碟形弹簧','空气围带\\密封环','液压拉伸器','轴流风机','滤水器'];
    return buyCategories.includes(row.category);
  },

  // Calc material BOM amount using optimized formula
  calcMatAmount(row, dataKey) {
    if (!row.material || row.material.trim() === '') return row.amount || 0;
    const priceInfo = lookupMaterialPrice(row.material);
    const unitPrice = priceInfo ? priceInfo.p : null;
    const isBuy = this.detectIsBuy(row);
    if (isBuy) {
      // Purchased: amount = quantity × unit_price
      const usageVal = parseFloat(row.usage);
      const qty = (row.usage !== null && row.usage !== undefined && row.usage !== '' && !isNaN(usageVal)) ? usageVal : 1;
      if (unitPrice !== null) {
        const fallback = parseFloat((qty * unitPrice).toFixed(6));
        return evalConfiguredFormula('mat_amount_buy', row, { price: unitPrice, material_price: unitPrice, usage: qty }, fallback);
      }
      // No price found: keep existing amount if available, otherwise 0
      if (row.amount && row.amount > 0) return row.amount;
      // Estimate: if usage looks like a qty and material has number, maybe it's a price
      return 0;
    }
    // Self-made: amount = material row weight ÷ material row utilization × library standard price.
    // Utilization is row-level data from the project BOM. The material library deliberately has no default utilization.
    const weight = parseFloat(row.weight) || 0;
    if (weight === 0) return 0;
    const utilizationRaw = parseFloat(row.usage);
    const utilization = (!isNaN(utilizationRaw) && utilizationRaw > 0) ? utilizationRaw : 1;
    if (unitPrice !== null) {
      const fallback = parseFloat(((weight / utilization) * unitPrice).toFixed(6));
      return evalConfiguredFormula('mat_amount_self', row, { price: unitPrice, material_price: unitPrice, usage: utilization }, fallback);
    }
    // No price found: keep existing amount if available
    if (row.amount && row.amount > 0) return row.amount;
    return 0;
  },

  // Get human-readable formula description for a row
  getMatFormula(row, dataKey) {
    if (!row.material || row.material.trim() === '') return '';
    const priceInfo = lookupMaterialPrice(row.material);
    const unitPrice = priceInfo ? priceInfo.p : '?';
    const isBuy = this.detectIsBuy(row);
    if (isBuy) {
      const usageVal = parseFloat(row.usage);
      const qty = (row.usage !== null && row.usage !== undefined && row.usage !== '' && !isNaN(usageVal)) ? usageVal : 1;
      return `外购: ${qty} × ${typeof unitPrice === 'number' ? unitPrice.toFixed(2) : unitPrice} = ${this.calcMatAmount(row, dataKey).toFixed(4)} 万`;
    }
    const weight = parseFloat(row.weight) || 0;
    const utilizationRaw = parseFloat(row.usage);
    const utilization = (!isNaN(utilizationRaw) && utilizationRaw > 0) ? utilizationRaw : 1;
    return `自制: ${weight}T ÷ 明细行利用率${utilization} × ${typeof unitPrice === 'number' ? unitPrice.toFixed(2) : unitPrice}万/T = ${this.calcMatAmount(row, dataKey).toFixed(4)} 万`;
  },

  // Recalculate all formula cells for a table
  recalcTable(dataKey) {
    const items = DATA[dataKey];
    if (!items) return;
    const isMatBOM = ['water','gen','valve','valve_door'].includes(dataKey);
    if (isMatBOM) {
      items.forEach(row => {
        if (row.material && row.material.trim()) {
          // Auto-detect is_buy if null/undefined
          if (row.is_buy === null || row.is_buy === undefined || row.is_buy === '') {
            row.is_buy = this.detectIsBuy(row);
          }
          row.amount = this.calcMatAmount(row, dataKey);
        }
      });
      this.recalcSubtotals(items, dataKey);
    }
    if (['water_parts','gen_parts','valve_parts'].includes(dataKey)) {
      items.forEach(row => {
        if (dataKey === 'valve_parts') {
          row.total = evalConfiguredFormula('valve_parts_total', row, { qty: parseQtyValue(row.qty) }, (parseFloat(row.qty) || 0) * (parseFloat(row.unit_price) || 0));
        } else {
          row.total = evalConfiguredFormula('parts_total', row, { self: parseFloat(row.self) || 0, buy: parseFloat(row.buy) || 0 }, (parseFloat(row.self) || 0) + (parseFloat(row.buy) || 0));
        }
      });
    }
    if (['water_tools','gen_tools','valve_tools'].includes(dataKey)) {
      items.forEach(row => {
        row.total = evalConfiguredFormula('tools_total', row, { self: parseFloat(row.self) || 0, buy: parseFloat(row.buy) || 0 }, (parseFloat(row.self) || 0) + (parseFloat(row.buy) || 0));
      });
    }
    if (dataKey === 'automation') {
      items.forEach(row => {
        row.total = evalConfiguredFormula('automation_total', row, { qty: parseQtyValue(row.qty) }, (parseFloat(row.qty) || 0) * (parseFloat(row.unit_price) || 0));
      });
    }
    if (dataKey === 'monitoring') {
      items.forEach(row => {
        const qty = parseQtyValue(row.qty);
        row.total = evalConfiguredFormula('monitoring_total', row, { qty_parsed: qty }, qty * (parseFloat(row.unit_price) || 0));
      });
    }
    if (dataKey === 'liaison') {
      items.forEach(row => {
        if (row.person_days !== null && row.person_days !== undefined && row.person_days !== '' && !isNaN(parseFloat(row.person_days))) {
          row.total = evalConfiguredFormula('liaison_total', row, {}, (parseFloat(row.person_days)) * (parseFloat(row.unit_price) || 0));
        }
      });
    }
  },

  // Recalculate ALL subtotal rows using bottom-up multi-level aggregation (包括根节点"一")
  recalcSubtotals(items, dataKey) {
    // 1. Identify ALL subtotal rows (包含根节点"一")
    const subtotalIndices = [];
    items.forEach((it, i) => {
      if (isSubtotalRow(it, items)) {
        subtotalIndices.push(i);
      }
    });

    // 2. Sort by nesting depth descending (deepest first = bottom-up)
    //    根节点"一"的 depth=0，最后处理，确保所有子节点已计算完毕
    function depth(seq) {
      if (!seq || seq === '一') return 0;
      return String(seq).split('.').length;
    }
    subtotalIndices.sort((a, b) => depth(items[b].seq) - depth(items[a].seq));

    // 3. 自底向上：每个父节点 = 直接子节点之和（包括根节点"一"）
    //    有材料的行是数据行（非纯标题），其weight/amount已由recalcTable计算，不被覆盖
    subtotalIndices.forEach(si => {
      const parentRow = items[si];
      const hasMaterial = parentRow.material && String(parentRow.material).trim() !== '';

      let sumWeight = 0, sumAmount = 0;
      items.forEach((child, ci) => {
        if (ci === si) return;
        const childSeq = String(child.seq || '');
        if (!isDirectChild(String(parentRow.seq), childSeq)) return;
        sumWeight += parseFloat(child.weight) || 0;
        sumAmount += parseFloat(child.amount) || 0;
      });

      if (hasMaterial) return; // 数据行保留recalcTable计算值

      items[si].weight = parseFloat(sumWeight.toFixed(4));
      items[si].amount = parseFloat(sumAmount.toFixed(4));
    });
  }
};


// ---- Part 2: 序号与汇总计算 (from app.js) ----

export function generateNextSeq(items, afterItem) {
  if (!afterItem || afterItem.seq === null || afterItem.seq === undefined || afterItem.seq === '') {
    return String(items.length + 1);
  }
  const afterSeq = String(afterItem.seq);
  // Handle non-numeric seq (e.g. "一", "序号", "人员", "工程师")
  const parts = afterSeq.split('.');
  const lastNum = parseInt(parts[parts.length - 1], 10);
  if (isNaN(lastNum)) {
    // For special labels, just use the next available integer
    return String(items.length + 1);
  }
  // Increment last segment
  parts[parts.length - 1] = String(lastNum + 1);
  let candidate = parts.join('.');
  // Resolve conflicts
  while (items.some(it => String(it.seq) === candidate)) {
    parts[parts.length - 1] = String(parseInt(parts[parts.length - 1], 10) + 1);
    candidate = parts.join('.');
  }
  return candidate;
}

// Generate child sequence number under a parent (e.g. "1.5" → "1.5.1")
export function generateChildSeq(items, parentItem) {
  if (!parentItem || parentItem.seq === null || parentItem.seq === undefined || parentItem.seq === '') {
    return String(items.length + 1);
  }
  const parentSeq = String(parentItem.seq);
  // Handle root "一": children are plain numbers (1, 2, 3...)
  if (parentSeq === '一') {
    let maxChild = 0;
    items.forEach(it => {
      const s = String(it.seq || '');
      if (/^\d+$/.test(s)) {
        const n = parseInt(s, 10);
        if (!isNaN(n) && n > maxChild) maxChild = n;
      }
    });
    return String(maxChild + 1);
  }
  // Only applies to BOM tables with numbered seq
  const parts = parentSeq.split('.');
  if (parts.every(p => isNaN(parseInt(p, 10)))) {
    return String(items.length + 1);
  }
  // Find max direct child number
  let maxChild = 0;
  items.forEach(it => {
    const s = String(it.seq || '');
    if (s.startsWith(parentSeq + '.')) {
      const rest = s.substring(parentSeq.length + 1);
      if (!rest.includes('.')) {
        const n = parseInt(rest, 10);
        if (!isNaN(n) && n > maxChild) maxChild = n;
      }
    }
  });
  return parentSeq + '.' + (maxChild + 1);
}

// ============ 默认值 ============
export const DEFAULTS = {
  projectName: "广西那读电站", unitCount: 4,
  waterWeight: 94.4, waterMat: 222.81, waterBuy: 145.42,
  genWeight: 234, genMat: 375.42, genBuy: 123.04,
  valveWeight: 57.7, valveBuy: 80,
  selfMarkup: 100, buyMarkup: 10,
  distance: 3700, tonKmPrice: 0.9, tonKmPriceWide: 0, wideWeight: 0, transportExtra: 1.05,
  partsAmt: 48.40, toolsAmt: 26.41, autoAmt: 0, monitorAmt: 0, liaisonAmt: 0
};

// ============ 状态 ============
export const state = {
  hasWater: 1, hasGen: 1, hasValve: 1,
  scenarios: [],
  currentMatTab: 'water',
  currentPartsTab: 'water_parts',
  currentToolsTab: 'water_tools'
};

// ============ 工具 ============
export const fmt = (n, d=0) => {
  if (!isFinite(n) || n === null) return '—';
  return n.toLocaleString('zh-CN', { minimumFractionDigits: d, maximumFractionDigits: d });
};

export function getInputs() {
  const num = id => parseFloat(document.getElementById(id).value) || 0;
  return {
    projectName: document.getElementById('projectName').value,
    unitCount: num('unitCount'),
    hasWater: state.hasWater, hasGen: state.hasGen, hasValve: state.hasValve,
    waterWeight: num('waterWeight'), waterMat: num('waterMat'), waterBuy: num('waterBuy'),
    genWeight: num('genWeight'), genMat: num('genMat'), genBuy: num('genBuy'),
    valveWeight: num('valveWeight'), valveBuy: num('valveBuy'),
    selfMarkup: num('selfMarkup') / 100, buyMarkup: num('buyMarkup') / 100,
    distance: num('distance'), tonKmPrice: num('tonKmPrice'),
    tonKmPriceWide: num('tonKmPriceWide'), wideWeight: num('wideWeight'),
    transportExtra: num('transportExtra'),
    partsAmt: num('partsAmt'), toolsAmt: num('toolsAmt'),
    autoAmt: num('autoAmt'), monitorAmt: num('monitorAmt'), liaisonAmt: num('liaisonAmt')
  };
}

// ============ 从材料明细汇总到侧边栏 ============
export function isSubtotalRow(item, allItems) {
  if (!item.seq) return false;
  const seqStr = String(item.seq);
  // Root node "一": parent of all depth-1 rows (pure numbers like "1", "2", etc.)
  if (seqStr === '一') {
    return allItems.some(other => other !== item && /^\d+$/.test(String(other.seq || '')));
  }
  // General case: a row is a subtotal if another row's seq starts with this seq + "."
  const prefix = seqStr + '.';
  return allItems.some(other => other !== item && String(other.seq || '').startsWith(prefix));
}

// Check if childSeq is a DIRECT child of parentSeq (exactly one level deeper)
export function isDirectChild(parentSeq, childSeq) {
  const p = String(parentSeq);
  const c = String(childSeq || '');
  if (p === '一') {
    // Direct children of root are pure-number seqs like "1", "2", "13"
    return /^\d+$/.test(c);
  }
  if (!c.startsWith(p + '.')) return false;
  return c.split('.').length === p.split('.').length + 1;
}

export function aggregateMatTable(dataKeys) {
  const keys = Array.isArray(dataKeys) ? dataKeys : [dataKeys];
  let weight = 0, mat = 0, buy = 0, buyWeight = 0;
  keys.forEach(dk => {
    const items = DATA[dk];
    if (!items) return;
    // 重量：直接读根节点"一"的 weight（原始 Excel 录入的机器目标重量）
    const rootRow = items.find(it => String(it.seq) === '一');
    if (rootRow) {
      weight += parseFloat(rootRow.weight) || 0;
      mat += parseFloat(rootRow.amount) || 0;
    }
    // 外购价 & 外购件重量：累加所有外购叶子节点（is_buy=true 且非汇总行）
    items.forEach(it => {
      if (isSubtotalRow(it, items)) return;
      if (it.is_buy) {
        buy += parseFloat(it.amount) || 0;
        buyWeight += parseFloat(it.weight) || 0;
      }
    });
  });
  return {
    weight: parseFloat(weight.toFixed(4)),
    mat: parseFloat(mat.toFixed(4)),
    buy: parseFloat(buy.toFixed(4)),
    buyWeight: parseFloat(buyWeight.toFixed(4))
  };
}

export function aggregatePartsTools(dataKeys) {
  const keys = Array.isArray(dataKeys) ? dataKeys : [dataKeys];
  let total = 0;
  // valve_parts / valve_tools 的金额字段单位为"元"，需要除以10000换算为万元
  // water_parts / gen_parts / water_tools / gen_tools 的 self/buy 字段单位为"万元"
  const yuanKeys = new Set(['valve_parts', 'valve_tools']);
  keys.forEach(dk => {
    const items = DATA[dk];
    if (!items) return;
    const isYuan = yuanKeys.has(dk);
    items.forEach(it => {
      let rowVal = 0;
      if (it.total !== null && it.total !== undefined) rowVal = parseFloat(it.total) || 0;
      else rowVal = (parseFloat(it.self) || 0) + (parseFloat(it.buy) || 0);
      total += isYuan ? rowVal / YUAN_TO_WAN : rowVal;
    });
  });
  return parseFloat(total.toFixed(4));
}

export function aggregateSimple(dataKeys) {
  const keys = Array.isArray(dataKeys) ? dataKeys : [dataKeys];
  let total = 0;
  // automation / monitoring / liaison 的 total 字段单位为"元"，需要除以10000换算为万元
  const yuanKeys = new Set(['automation', 'monitoring', 'liaison']);
  keys.forEach(dk => {
    const items = DATA[dk];
    if (!items) return;
    const isYuan = yuanKeys.has(dk);
    items.forEach(it => {
      // 跳过 liaison/automation 中的标题行（seq为非数字字符串）
      if ((dk === 'liaison' || dk === 'automation') && it.seq !== null && it.seq !== undefined) {
        const seqStr = String(it.seq);
        if (isNaN(parseInt(seqStr, 10)) || !/^\d/.test(seqStr.trim())) return;
      }
      const val = parseFloat(it.total) || 0;
      total += isYuan ? val / YUAN_TO_WAN : val;
    });
  });
  return parseFloat(total.toFixed(4));
}

// 阀门专用汇总：整体外购，重量和外购价均直接取根节点"一"的数据
export function aggregateMatTableValve(dataKey) {
  const items = DATA[dataKey];
  if (!items) return { weight: 0, mat: 0, buy: 0, buyWeight: 0 };
  const rootRow = items.find(it => String(it.seq) === '一');
  const weight  = parseFloat((rootRow && rootRow.weight) || 0);
  const mat     = parseFloat((rootRow && rootRow.amount) || 0);
  // 阀门整体外购：外购价 = 总材料价，外购重量 = 总重量
  return {
    weight:    parseFloat(weight.toFixed(4)),
    mat:       parseFloat(mat.toFixed(4)),
    buy:       parseFloat(mat.toFixed(4)),     // 全部外购
    buyWeight: parseFloat(weight.toFixed(4))  // 外购重量 = 整机重量
  };
}


// Validate that every subtotal row equals the sum of its direct children
export function getEnabledPartsKeys() {
  const keys = [];
  if (state.hasWater) keys.push('water_parts');
  if (state.hasGen) keys.push('gen_parts');
  if (state.hasValve) keys.push('valve_parts');
  return keys;
}
export function getEnabledToolsKeys() {
  const keys = [];
  if (state.hasWater) keys.push('water_tools');
  if (state.hasGen) keys.push('gen_tools');
  if (state.hasValve) keys.push('valve_tools');
  return keys;
}

// 汇总备件/工具重量（工具表有 weight 字段，备件表无则返回0）
export function aggregatePartsToolsWeight(dataKeys) {
  const keys = Array.isArray(dataKeys) ? dataKeys : [dataKeys];
  let total = 0;
  keys.forEach(dk => {
    const items = DATA[dk];
    if (!items) return;
    items.forEach(it => {
      total += parseFloat(it.weight) || 0;
    });
  });
  return parseFloat(total.toFixed(4));
}

// 检查是否有至少一个主机类型被启用
export function hasAnyMachine() {
  return state.hasWater || state.hasGen || state.hasValve;
}

// 获取当前可用的备件标签列表
export function getAvailablePartsTabs() {
  const tabs = [];
  if (state.hasWater) tabs.push({ key: 'water_parts', label: '水机' });
  if (state.hasGen) tabs.push({ key: 'gen_parts', label: '发机' });
  if (state.hasValve) tabs.push({ key: 'valve_parts', label: '阀门' });
  return tabs;
}

// 获取当前可用的工具标签列表
export function getAvailableToolsTabs() {
  const tabs = [];
  if (state.hasWater) tabs.push({ key: 'water_tools', label: '水机' });
  if (state.hasGen) tabs.push({ key: 'gen_tools', label: '发机' });
  if (state.hasValve) tabs.push({ key: 'valve_tools', label: '阀门' });
  return tabs;
}

// 自动切换到第一个可用的标签
export function autoSwitchPartsTab() {
  const avail = getAvailablePartsTabs();
  if (avail.length > 0 && !avail.some(t => t.key === state.currentPartsTab)) {
    state.currentPartsTab = avail[0].key;
  } else if (avail.length === 0) {
    state.currentPartsTab = 'water_parts';
  }
}
export function autoSwitchToolsTab() {
  const avail = getAvailableToolsTabs();
  if (avail.length > 0 && !avail.some(t => t.key === state.currentToolsTab)) {
    state.currentToolsTab = avail[0].key;
  } else if (avail.length === 0) {
    state.currentToolsTab = 'water_tools';
  }
}

export function validateTableConsistency(dataKey) {
  const items = DATA[dataKey];
  if (!items) return [];
  const issues = [];
  items.forEach((it, i) => {
    if (!isSubtotalRow(it, items)) return;
    // 有材料的数据行：weight/amount 由材料公式计算，非子项聚合，跳过校验
    const hasMaterial = it.material && String(it.material).trim() !== '';
    if (hasMaterial) return;
    // 根节点"一"现在也参与自动汇总校验
    const parentSeq = String(it.seq);
    let expectedWeight = 0, expectedAmount = 0;
    items.forEach((child, ci) => {
      if (ci === i) return;
      if (isDirectChild(parentSeq, String(child.seq || ''))) {
        expectedWeight += parseFloat(child.weight) || 0;
        expectedAmount += parseFloat(child.amount) || 0;
      }
    });
    expectedWeight = parseFloat(expectedWeight.toFixed(4));
    expectedAmount = parseFloat(expectedAmount.toFixed(4));
    const actualWeight = parseFloat((parseFloat(it.weight) || 0).toFixed(4));
    const actualAmount = parseFloat((parseFloat(it.amount) || 0).toFixed(4));
    if (Math.abs(actualWeight - expectedWeight) > 0.001 || Math.abs(actualAmount - expectedAmount) > 0.001) {
      issues.push({
        dataKey, idx: i, seq: it.seq, name: it.name,
        actualWeight, expectedWeight, actualAmount, expectedAmount
      });
    }
  });
  return issues;
}

// Check all material BOM tables and return all inconsistencies
export function validateAllTables() {
  return ['water','gen','valve','valve_door'].flatMap(k => validateTableConsistency(k));
}

// One-click fix: recalc all tables and re-sync
export function fixAllConsistency() {
  ['water','gen','valve','valve_door','water_parts','gen_parts','valve_parts',
   'water_tools','gen_tools','valve_tools','automation','monitoring','liaison'].forEach(k => {
    FormulaEngine.recalcTable(k);
  });
  persistData();
  _sidebarOverrides.clear();
  renderAll();
  const issues = validateAllTables();
  if (issues.length === 0) {
    showToast('已重新计算所有汇总，数据一致');
  } else {
    showToast('已重新计算，但仍有 ' + issues.length + ' 处数据需要检查');
  }
}

// 材料明细→侧边栏的联动
let _syncing = false;
export let _matComputed = {};          // 材料汇总计算值
export let _sidebarOverrides = new Set(); // 用户手动修改过的侧边栏字段ID

export function syncSidebarFromMaterials() {
  if (_syncing) return;
  _syncing = true;
  // 注意：不在此处清除 _sidebarOverrides，保留用户的手动修改
  // _sidebarOverrides 只在 fixAllConsistency() 或 双击恢复 时才清除
  try {
  // Recalc all tables to ensure fresh formula values
  ['water','gen','valve','valve_door','water_parts','gen_parts','valve_parts',
   'water_tools','gen_tools','valve_tools','automation','monitoring','liaison'].forEach(k => {
    FormulaEngine.recalcTable(k);
  });

  // 三大主机参数
  const waterAgg = aggregateMatTable('water');
  const genAgg = aggregateMatTable('gen');
  // 阀门：整体外购，只取 valve_door 表的根节点数据（valve 表为参考型号，不计入汇总）
  const valveAgg = aggregateMatTableValve('valve_door');

  // 存储材料汇总值 & 更新侧边栏（跳过用户手动修改过的字段）
  const enabledPartsKeys = getEnabledPartsKeys();
  const enabledToolsKeys = getEnabledToolsKeys();
  const partsTotal = aggregatePartsTools(enabledPartsKeys);
  const toolsTotal = aggregatePartsTools(enabledToolsKeys);
  // Per-machine breakdown
  const waterPartsAmt = aggregatePartsTools(['water_parts']);
  const genPartsAmt = aggregatePartsTools(['gen_parts']);
  const valvePartsAmt = aggregatePartsTools(['valve_parts']);
  const waterToolsAmt = aggregatePartsTools(['water_tools']);
  const genToolsAmt = aggregatePartsTools(['gen_tools']);
  const valveToolsAmt = aggregatePartsTools(['valve_tools']);
  const pairs = [
    ['waterWeight', waterAgg.weight], ['waterMat', waterAgg.mat], ['waterBuy', waterAgg.buy], ['waterBuyWeight', waterAgg.buyWeight],
    ['genWeight', genAgg.weight], ['genMat', genAgg.mat], ['genBuy', genAgg.buy], ['genBuyWeight', genAgg.buyWeight],
    ['partsAmt', partsTotal],
    ['toolsAmt', toolsTotal],
    ['waterPartsAmt', waterPartsAmt],
    ['genPartsAmt', genPartsAmt],
    ['valvePartsAmt', valvePartsAmt],
    ['waterToolsAmt', waterToolsAmt],
    ['genToolsAmt', genToolsAmt],
    ['valveToolsAmt', valveToolsAmt],
    ['partsToolsTotalAmt', partsTotal + toolsTotal],
    ['autoAmt', aggregateSimple('automation')],
    ['monitorAmt', aggregateSimple('monitoring')],
    ['liaisonAmt', aggregateSimple('liaison')]
  ];

  // 阀门三个字段：只更新参考值提示，不覆盖用户手动输入
  // 首次加载时（输入框为空）才自动填入材料明细值
  const valvePairs = [
    ['valveWeight', 'valveWeightRef', valveAgg.weight],
    ['valveBuy',    'valveBuyRef',    valveAgg.buy],
    ['valveBuyWeight', 'valveBuyWeightRef', valveAgg.buyWeight]
  ];
  valvePairs.forEach(([inputId, refId, val]) => {
    _matComputed[inputId] = val;
    const refEl = document.getElementById(refId);
    if (refEl) refEl.textContent = '参考: ' + (val > 0 ? val.toFixed(4) : '—');
    // 仅在输入框为空时自动填入
    const inputEl = document.getElementById(inputId);
    if (inputEl && (inputEl.value === '' || inputEl.value === '0' || parseFloat(inputEl.value) === 0)) {
      inputEl.value = val > 0 ? val : '';
    }
  });

  pairs.forEach(([id, val]) => {
    _matComputed[id] = val;
    if (!_sidebarOverrides.has(id)) {
      setSidebarVal(id, val);
    }
  });

  checkSidebarConsistency();
  } finally {
    _syncing = false;
  }
}

export function setSidebarVal(id, val) {
  const el = document.getElementById(id);
  if (!el) return;
  const strVal = val.toFixed ? parseFloat(val.toFixed(4)).toString() : val.toString();
  // For readonly fields, show "--" if value is 0 and data might be empty
  const numVal = parseFloat(strVal);
  if (el.readOnly && numVal === 0) {
    el.value = '';
    el.placeholder = '请先完善材料明细';
    el.classList.add('auto-computed');
    el.title = '由材料明细表自动计算生成 · 明细表为空时显示"--"';
    return;
  }
  if (el.value !== strVal) {
    el.value = strVal;
  }
  el.placeholder = '--';
  el.classList.add('auto-computed');
  el.title = '由材料明细表自动计算生成';
}

export function checkSidebarConsistency() {
  const fields = ['waterWeight','waterMat','waterBuy','waterBuyWeight','genWeight','genMat','genBuy','genBuyWeight',
    'partsAmt','toolsAmt','autoAmt','monitorAmt','liaisonAmt'];
  let sidebarWarnings = 0;
  fields.forEach(id => {
    const el = document.getElementById(id);
    if (!el || _matComputed[id] === undefined) return;
    const curVal = parseFloat(el.value);
    const compVal = parseFloat(_matComputed[id].toFixed(4));
    if (isNaN(curVal) && _matComputed[id] === 0) return;
    if (isNaN(curVal) || Math.abs(curVal - compVal) > 0.001) {
      el.classList.add('warning');
      el.title = `⚠ 与材料明细不一致 (汇总值: ${_matComputed[id].toFixed(4)})`;
      sidebarWarnings++;
    } else {
      el.classList.remove('warning');
      el.title = '由材料明细表自动计算生成';
    }
  });

  // Also check BOM table internal consistency
  const bomIssues = validateAllTables();

  const banner = document.getElementById('consistencyBanner');
  const bannerText = document.getElementById('consistencyBannerText');
  const totalIssues = sidebarWarnings + bomIssues.length;
  if (banner) {
    banner.style.display = totalIssues > 0 ? 'flex' : 'none';
    if (bannerText) {
      const parts = [];
      if (bomIssues.length > 0) parts.push(`材料明细层级汇总不一致 ${bomIssues.length} 处`);
      if (sidebarWarnings > 0) parts.push(`侧边栏参数不一致 ${sidebarWarnings} 处`);
      bannerText.textContent = '⚠ ' + parts.join(' · ') + ' · 点击右侧按钮一键修复';
    }
  }
  return totalIssues > 0;
}

// ============ 核心计算 ============
export function compute() {
  const i = getInputs();

  const wW = i.hasWater ? i.waterWeight : 0;
  const gW = i.hasGen ? i.genWeight : 0;
  const vW = i.hasValve ? i.valveWeight : 0;

  const wMat = i.hasWater ? i.waterMat : 0;
  const gMat = i.hasGen ? i.genMat : 0;
  const vMat = i.hasValve ? i.valveBuy : 0;

  const wSelf = i.hasWater ? Math.max(i.waterMat - i.waterBuy, 0) : 0;
  const wBuy = i.hasWater ? i.waterBuy : 0;
  const wSelfM = wSelf * i.selfMarkup;
  const wBuyM = wBuy * i.buyMarkup;
  const wUnit = wSelf + wBuy + wSelfM + wBuyM;

  const gSelf = i.hasGen ? Math.max(i.genMat - i.genBuy, 0) : 0;
  const gBuy = i.hasGen ? i.genBuy : 0;
  const gSelfM = gSelf * i.selfMarkup;
  const gBuyM = gBuy * i.buyMarkup;
  const gUnit = gSelf + gBuy + gSelfM + gBuyM;

  const vBuy = i.hasValve ? i.valveBuy : 0;
  const vBuyM = vBuy * i.buyMarkup;
  const vUnit = vBuy + vBuyM;

  // 运输费(双区间) - 包含主机+备件+工具重量
  const transportPartsWeight = aggregatePartsToolsWeight(getEnabledPartsKeys());
  const transportToolsWeight = aggregatePartsToolsWeight(getEnabledToolsKeys());
  const totalWeightSingle = (wW + gW + vW + transportPartsWeight + transportToolsWeight) * i.transportExtra;
  const wideWeight = i.wideWeight;
  const normalWeight = Math.max(totalWeightSingle - wideWeight, 0);
  const transportWide = (wideWeight * i.tonKmPriceWide * i.distance) / YUAN_TO_WAN;
  const transportNormal = (normalWeight * i.tonKmPrice * i.distance) / YUAN_TO_WAN;
  const transportUnit = transportWide + transportNormal;

  // 备件/工具(总价是1次,不是按台数)
  const partsT = i.partsAmt;
  const toolsT = i.toolsAmt;
  const autoT = i.autoAmt;
  const monitorT = i.monitorAmt;
  const liaisonT = i.liaisonAmt;

  // 备件/工具：从明细表动态计算实际自制/外购金额（单位：万元）
  function sumSelfBuy(dataKeys) {
    let self = 0, buy = 0;
    const yuanKeys = new Set(['valve_parts', 'valve_tools']);
    dataKeys.forEach(dk => {
      const items = DATA[dk];
      if (!items) return;
      const isYuan = yuanKeys.has(dk);
      items.forEach(it => {
        const s = (parseFloat(it.self) || 0);
        const b = (parseFloat(it.buy) || 0);
        if (isYuan) {
          self += s / YUAN_TO_WAN;
          buy  += b / YUAN_TO_WAN;
        } else {
          self += s;
          buy  += b;
        }
      });
    });
    return { self, buy };
  }
  const partsSB = sumSelfBuy(getEnabledPartsKeys());
  const toolsSB = sumSelfBuy(getEnabledToolsKeys());

  // 备件/工具总价与自制外购明细
  const partsSelf = partsSB.self;
  const partsBuy  = partsSB.buy;
  const toolsSelf = toolsSB.self;
  const toolsBuy  = toolsSB.buy;

  // 项目清单(对应原表行15~24)
  const items = [
    { name: '水轮机', self: wSelf, buy: wBuy, selfM: wSelfM, buyM: wBuyM, qty: i.unitCount },
    { name: '发电机', self: gSelf, buy: gBuy, selfM: gSelfM, buyM: gBuyM, qty: i.unitCount },
    { name: '备件', self: partsSelf, buy: partsBuy, selfM: partsSelf * i.selfMarkup, buyM: partsBuy * i.buyMarkup, qty: 1 },
    { name: '工具', self: toolsSelf, buy: toolsBuy, selfM: toolsSelf * i.selfMarkup, buyM: toolsBuy * i.buyMarkup, qty: 1 },
    { name: '主机自动化', self: 0, buy: autoT, selfM: 0, buyM: autoT * i.buyMarkup, qty: 1 },
    { name: '在线监测', self: 0, buy: monitorT, selfM: 0, buyM: monitorT * i.buyMarkup, qty: 1 },
    { name: '运输费', self: 0, buy: transportUnit, selfM: 0, buyM: 0, qty: i.unitCount },
    { name: '阀门', self: 0, buy: vBuy, selfM: 0, buyM: vBuyM, qty: i.unitCount },
    { name: '设计联络等', self: 0, buy: liaisonT, selfM: 0, buyM: 0, qty: 1 },
  ];
  items.forEach(it => {
    it.cost = it.self + it.buy;
    it.unit = it.cost + it.selfM + it.buyM;
    it.total = it.unit * it.qty;
  });

  const totalBid = items.reduce((s, it) => s + it.total, 0);
  const totalFixed = items.reduce((s, it) => s + it.cost * it.qty, 0);
  const absorb = totalBid - totalFixed;
  const absorbPct = totalBid > 0 ? absorb / totalBid : 0;
  const agencyFee = calcAgencyFee(totalBid);


  return {
    inputs: i, items, totalBid, totalFixed, absorb, absorbPct, agencyFee,
    water: { has: i.hasWater, weight: wW, mat: wMat, self: wSelf, buy: wBuy, unit: wUnit, matT: wW > 0 ? wMat/wW : 0, bidT: wW > 0 ? wUnit/wW : 0 },
    gen:   { has: i.hasGen, weight: gW, mat: gMat, self: gSelf, buy: gBuy, unit: gUnit, matT: gW > 0 ? gMat/gW : 0, bidT: gW > 0 ? gUnit/gW : 0 },
    valve: { has: i.hasValve, weight: vW, mat: vMat, self: 0, buy: vBuy, unit: vUnit, matT: vW > 0 ? vMat/vW : 0, bidT: vW > 0 ? vUnit/vW : 0 },
    transport: { weightSingle: totalWeightSingle, wideWeight, normalWeight, transportWide, transportNormal, transportUnit, transportTotal: transportUnit * i.unitCount }
  };
}

// ============ 招标代理费(阶梯累计) ============
export function calcAgencyFee(amount) {
  let fee = 0;
  let detail = [];
  let cumulative = 0;
  for (let i = 0; i < DATA.agency_tiers.length; i++) {
    const t = DATA.agency_tiers[i];
    if (amount <= t.lower) break;
    const segHigh = Math.min(amount, t.upper);
    const segLen = segHigh - t.lower;
    const segFee = segLen * t.rate;
    fee += segFee;
    cumulative = fee;
    detail.push({
      seq: i + 1,
      desc: t.desc,
      length: segLen,
      rate: t.rate,
      fee: segFee,
      cumulative: cumulative,
      hit: amount > t.lower && amount <= t.upper
    });
    if (amount <= t.upper) break;
  }
  return { fee, detail };
}


// ============ 渲染:概览 ============
const _prevKpi = {};
export function animateNum(el, newVal, decimals) {
  if (!el) return;
  const oldVal = parseFloat(el.dataset.rawVal) || 0;
  if (Math.abs(oldVal - newVal) < 0.001) return;
  el.dataset.rawVal = newVal;
  const steps = 20, dur = 400;
  let step = 0;
  const interval = setInterval(() => {
    step++;
    const t = step / steps;
    const eased = 1 - Math.pow(1 - t, 3);
    const cur = oldVal + (newVal - oldVal) * eased;
    el.textContent = fmt(cur, decimals);
    if (step >= steps) { clearInterval(interval); el.textContent = fmt(newVal, decimals); }
  }, dur / steps);
}
