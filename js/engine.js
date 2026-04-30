// ============ 材料库数据 ============
// Material Library: structured material database with full metadata
let MAT_LIB = [];
let _matLibNextId = 1;
let MAT_IMPORT_LOG = [];
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
function persistMatLib() {
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
    desc: '合价 = 解析后的数量 × 单价；如数量为“2×4”，系统会转换为 8',
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
let CUSTOM_FORMULAS = (DATA._customFormulas && typeof DATA._customFormulas === 'object') ? DATA._customFormulas : {};
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


const FormulaEngine = {
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
    const weight = parseFloat(row.weight) || 0;
    if (weight === 0) return 0;
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
