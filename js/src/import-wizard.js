// ============ Excel 智能导入向导 ============
// 支持任意带表头的 Excel/CSV 文件，自动识别列含义并映射到系统字段
// 依赖: SheetJS (xlsx) 库

// ============ 所有表的字段定义 ============
export const TABLE_SCHEMAS = {
  water:    { label: '水轮机材料明细', group: '材料明细(BOM)', fields: [
    { key: 'category', label: '分类', type: 'text' },
    { key: 'seq', label: '序号', type: 'text' },
    { key: 'name', label: '名称', type: 'text' },
    { key: 'material', label: '材料', type: 'text' },
    { key: 'replacement', label: '代用材料', type: 'text' },
    { key: 'weight', label: '重量(T)', type: 'number' },
    { key: 'usage', label: '利用率/数量', type: 'usageRate' },
    { key: 'is_buy', label: '自制/外购', type: 'bool' },
    { key: 'amount', label: '金额(万)', type: 'money' },
    { key: 'remark', label: '备注', type: 'text' }
  ]},
  gen:      { label: '发电机材料明细', group: '材料明细(BOM)', fields: [
    { key: 'category', label: '分类', type: 'text' },
    { key: 'seq', label: '序号', type: 'text' },
    { key: 'name', label: '名称', type: 'text' },
    { key: 'material', label: '材料', type: 'text' },
    { key: 'replacement', label: '代用材料', type: 'text' },
    { key: 'weight', label: '重量(T)', type: 'number' },
    { key: 'usage', label: '利用率/数量', type: 'usageRate' },
    { key: 'is_buy', label: '自制/外购', type: 'bool' },
    { key: 'amount', label: '金额(万)', type: 'money' },
    { key: 'remark', label: '备注', type: 'text' }
  ]},
  valve:    { label: '进水阀材料明细', group: '材料明细(BOM)', fields: [
    { key: 'category', label: '分类', type: 'text' },
    { key: 'seq', label: '序号', type: 'text' },
    { key: 'name', label: '名称', type: 'text' },
    { key: 'material', label: '材料', type: 'text' },
    { key: 'replacement', label: '代用材料', type: 'text' },
    { key: 'weight', label: '重量(T)', type: 'number' },
    { key: 'usage', label: '利用率/数量', type: 'usageRate' },
    { key: 'is_buy', label: '自制/外购', type: 'bool' },
    { key: 'amount', label: '金额(万)', type: 'money' },
    { key: 'remark', label: '备注', type: 'text' }
  ]},
  valve_door: { label: '阀门(门)材料明细', group: '材料明细(BOM)', fields: [
    { key: 'category', label: '分类', type: 'text' },
    { key: 'seq', label: '序号', type: 'text' },
    { key: 'name', label: '名称', type: 'text' },
    { key: 'material', label: '材料', type: 'text' },
    { key: 'replacement', label: '代用材料', type: 'text' },
    { key: 'weight', label: '重量(T)', type: 'number' },
    { key: 'usage', label: '利用率/数量', type: 'usageRate' },
    { key: 'is_buy', label: '自制/外购', type: 'bool' },
    { key: 'amount', label: '金额(万)', type: 'money' },
    { key: 'remark', label: '备注', type: 'text' }
  ]},
  water_parts: { label: '水轮机备件', group: '备件', fields: [
    { key: 'seq', label: '序号', type: 'text' },
    { key: 'name', label: '名称', type: 'text' },
    { key: 'qty', label: '数量', type: 'text' },
    { key: 'unit', label: '单位', type: 'text' },
    { key: 'spec', label: '规格', type: 'text' },
    { key: 'self', label: '自制金额(万)', type: 'money' },
    { key: 'buy', label: '外购金额(万)', type: 'money' },
    { key: 'total', label: '合计(万)', type: 'money' }
  ]},
  gen_parts: { label: '发电机备件', group: '备件', fields: [
    { key: 'seq', label: '序号', type: 'text' },
    { key: 'name', label: '名称', type: 'text' },
    { key: 'qty', label: '数量', type: 'text' },
    { key: 'unit', label: '单位', type: 'text' },
    { key: 'spec', label: '规格', type: 'text' },
    { key: 'self', label: '自制金额(万)', type: 'money' },
    { key: 'buy', label: '外购金额(万)', type: 'money' },
    { key: 'total', label: '合计(万)', type: 'money' }
  ]},
  valve_parts: { label: '进水阀备件', group: '备件', fields: [
    { key: 'seq', label: '序号', type: 'text' },
    { key: 'name', label: '名称', type: 'text' },
    { key: 'qty', label: '数量', type: 'text' },
    { key: 'unit', label: '单位', type: 'text' },
    { key: 'spec', label: '规格', type: 'text' },
    { key: 'unit_price', label: '单价(元)', type: 'money' },
    { key: 'total', label: '合计(元)', type: 'money' },
    { key: 'buy', label: '外购金额(元)', type: 'money' },
    { key: 'material', label: '材料', type: 'text' }
  ]},
  water_tools: { label: '水轮机工具', group: '工具', fields: [
    { key: 'seq', label: '序号', type: 'text' },
    { key: 'name', label: '名称', type: 'text' },
    { key: 'qty', label: '数量', type: 'text' },
    { key: 'unit', label: '单位', type: 'text' },
    { key: 'spec', label: '规格', type: 'text' },
    { key: 'weight', label: '重量(T)', type: 'number' },
    { key: 'self', label: '自制金额(万)', type: 'money' },
    { key: 'buy', label: '外购金额(万)', type: 'money' },
    { key: 'total', label: '合计(万)', type: 'money' }
  ]},
  gen_tools: { label: '发电机工具', group: '工具', fields: [
    { key: 'seq', label: '序号', type: 'text' },
    { key: 'name', label: '名称', type: 'text' },
    { key: 'qty', label: '数量', type: 'text' },
    { key: 'unit', label: '单位', type: 'text' },
    { key: 'spec', label: '规格', type: 'text' },
    { key: 'weight', label: '重量(T)', type: 'number' },
    { key: 'self', label: '自制金额(万)', type: 'money' },
    { key: 'buy', label: '外购金额(万)', type: 'money' },
    { key: 'total', label: '合计(万)', type: 'money' }
  ]},
  valve_tools: { label: '进水阀工具', group: '工具', fields: [
    { key: 'seq', label: '序号', type: 'text' },
    { key: 'name', label: '名称', type: 'text' },
    { key: 'qty', label: '数量', type: 'text' },
    { key: 'unit', label: '单位', type: 'text' },
    { key: 'spec', label: '规格', type: 'text' },
    { key: 'weight', label: '重量(T)', type: 'number' },
    { key: 'self', label: '自制金额(万)', type: 'money' },
    { key: 'buy', label: '外购金额(万)', type: 'money' },
    { key: 'total', label: '合计(万)', type: 'money' },
    { key: 'unit_price', label: '单价(元)', type: 'money' },
    { key: 'material', label: '材料', type: 'text' }
  ]},
  automation: { label: '自动化元件', group: '其他', fields: [
    { key: 'seq', label: '序号', type: 'text' },
    { key: 'name', label: '名称', type: 'text' },
    { key: 'model', label: '型号', type: 'text' },
    { key: 'unit', label: '单位', type: 'text' },
    { key: 'qty', label: '数量', type: 'number' },
    { key: 'unit_price', label: '单价(元)', type: 'money' },
    { key: 'total', label: '总价(元)', type: 'money' },
    { key: 'usage', label: '用途', type: 'text' },
    { key: 'manufacturer', label: '厂家', type: 'text' }
  ]},
  monitoring: { label: '在线监测', group: '其他', fields: [
    { key: 'seq', label: '序号', type: 'text' },
    { key: 'function', label: '功能', type: 'text' },
    { key: 'name', label: '名称', type: 'text' },
    { key: 'model', label: '型号', type: 'text' },
    { key: 'unit', label: '单位', type: 'text' },
    { key: 'qty', label: '数量', type: 'text' },
    { key: 'unit_price', label: '单价(元)', type: 'money' },
    { key: 'total', label: '总价(元)', type: 'money' },
    { key: 'remark', label: '备注', type: 'text' }
  ]},
  liaison: { label: '设联会', group: '其他', fields: [
    { key: 'seq', label: '序号', type: 'text' },
    { key: 'name', label: '名称', type: 'text' },
    { key: 'location', label: '地点', type: 'text' },
    { key: 'person_days', label: '人天', type: 'number' },
    { key: 'unit_price', label: '单价(元)', type: 'money' },
    { key: 'total', label: '合计(元)', type: 'money' },
    { key: 'remark', label: '备注', type: 'text' }
  ]},
  matlib: { label: '材料库', group: '其他', fields: [
    { key: 'name', label: '材料名称', type: 'text' },
    { key: 'spec', label: '规格', type: 'text' },
    { key: 'category', label: '分类', type: 'text' },
    { key: 'price', label: '标准价格(万/T)', type: 'number' },
    { key: 'usage_rate', label: '利用率', type: 'number' },
    { key: 'remark', label: '备注', type: 'text' }
  ]}
};

// ============ 字段别名（用于模糊匹配） ============
export const FIELD_ALIASES = {
  seq: ['序号','编号','序號','no','number','order','item','id','seq','序列号','顺序号','行号','行数'],
  name: ['名称','name','项目','项目名称','部件','零件','item','part','零件名称','部件名称','设备','设备名称','材料名称','物料名称','内容','说明'],
  category: ['分类','类别','category','材料分类','材料类别','品种','类型','type','种类','材料类型','材料品种','组别'],
  material: ['材料','材质','material','牌号','材料牌号','材料名称','spec','规格型号','材料规格','物料','物料编码','物料号'],
  replacement: ['代用','代用材料','replacement','替代','替代材料','代用材质'],
  weight: ['重量','weight','重','净重','毛重','单重','总重','T','吨','kg','千克','千克重','重量(T)','重量(t)','重量吨'],
  usage: ['利用率','usage','utilisation','材料利用率','利用系数','材料利用系数','损耗率','利用率/数量','利用率数量'],
  usage_rate: ['利用率','usage','usage_rate','utilisation','材料利用率','利用系数','材料利用系数'],
  is_buy: ['自制/外购','自制外购','is_buy','采购','外购','自制','buy','self','采购方式','制作方式','类型','类别','来源','来源方式','标件','是否标件','标准件','是否标准件'],
  amount: ['金额','amount','总价','总金额','合价','成本','费用','cost','price','价格','万','万元','材料价格','材料价','物料价格','报价','合计(万)'],
  remark: ['备注','remark','说明','note','备注说明','附注','备注信息','备注项','备注内容','注释'],

  qty: ['数量','qty','quantity','数','用量','台数','件数','套数','数量(台套)','个数','只数','支数'],
  unit: ['单位','unit','计量单位','units','度量单位','measure','规格'],
  spec: ['规格','spec','规格型号','型号规格','尺寸','参数','描述','description','技术参数','外形尺寸'],

  self: ['自制','self','自制金额','自制费','自制成本','自制备件','自制件金额'],
  buy: ['外购','buy','外购金额','外购费','外购成本','采购金额','购价','买入','外购件金额'],
  total: ['合计','total','总计','合价','总价','总金额','金额','总费用','汇总','小计'],

  model: ['型号','model','型号规格','type','型式','产品型号','设备型号'],
  unit_price: ['单价','unit_price','unit price','price','价格','价格(元)','元','每单位价格'],
  manufacturer: ['厂家','厂商','制造商','manufacturer','生产厂家','品牌','brand','供应厂家','供货商','生产商','产地','生产单位'],

  function: ['功能','用途','function','测量项目','检测项目','监测内容','监测功能','作用'],
  location: ['地点','location','位置','场所','place','地址','所在地','会议地点'],
  person_days: ['人天','工日','工天','person_days','人日','人数×天数','人数*天数','人员','人·天','人次'],
  price: ['价格','price','标准价格','材料价格','单价','标准价','单位价格','万/T','万元/吨','预算价','市场价'],

  // For material library
  mat_name: ['材料名称','物料名称','名称','name','材料','物料'],
  mat_spec: ['规格','spec','规格型号','材料规格','型号'],
  mat_category: ['分类','类别','category','材料分类','品种'],
  mat_price: ['价格','price','标准价格','单价','万/T','万元/吨','材料价格'],
  mat_remark: ['备注','remark','说明','备注说明']
};

// ============ 导入向导主对象 ============
export const ImportWizard = {
  _state: {
    step: 0,
    file: null,
    fileName: '',
    workbook: null,
    sheets: [],
    selectedSheet: 0,
    targetTable: null,
    columnMappings: [], // [{ excelIdx, excelHeader, systemField }]
    parsedRows: [],
    previewRows: [],
    errors: [],
    validated: false,
    previewPage: 1,
    previewPageSize: 50,
    dupSeqs: []
  },

  // ---------- 入口 ----------
  start() {
    if (typeof XLSX === 'undefined') {
      showToast('Excel解析库未加载，请检查网络后刷新');
      return;
    }
    this._reset();
    this._renderOverlay();
    this._renderStep1_file();
  },

  cancel() {
    const overlay = document.getElementById('importWizardOverlay');
    if (overlay) overlay.remove();
    this._reset();
  },

  _reset() {
    this._state = {
      step: 0, file: null, fileName: '',
      workbook: null, sheets: [], selectedSheet: 0,
      targetTable: null, columnMappings: [],
      parsedRows: [], previewRows: [], errors: [], validated: false,
      previewPage: 1, previewPageSize: 50, dupSeqs: []
    };
  },

  // ---------- 渲染向导框架 ----------
  _renderOverlay() {
    // Remove existing overlay if any
    const existing = document.getElementById('importWizardOverlay');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.id = 'importWizardOverlay';
    overlay.className = 'wizard-overlay';
    overlay.innerHTML = `<div class="wizard-modal" id="wizardModal">
      <div class="wizard-header" id="wizardHeader"></div>
      <div class="wizard-body" id="wizardBody"></div>
      <div class="wizard-footer" id="wizardFooter"></div>
    </div>`;
    document.body.appendChild(overlay);

    // Click backdrop to close
    overlay.addEventListener('click', e => {
      if (e.target === overlay && this._state.step > 0) {
        if (confirm('确定要取消导入吗？')) this.cancel();
      }
    });
    // Escape to close
    const handler = e => {
      if (e.key === 'Escape') {
        if (this._state.step > 0) {
          if (confirm('确定要取消导入吗？')) { this.cancel(); document.removeEventListener('keydown', handler); }
        }
      }
    };
    document.addEventListener('keydown', handler);
  },

  _renderStepper(current) {
    const steps = ['选择文件', '选择表格', '列映射', '预览导入'];
    let html = '<div class="wizard-stepper">';
    for (let i = 0; i < steps.length; i++) {
      if (i > 0) html += `<span class="wizard-step-connector ${i < current ? 'done' : ''}"></span>`;
      const cls = i + 1 === current ? 'active' : (i + 1 < current ? 'done' : '');
      html += `<span class="wizard-step ${cls}">${i + 1}</span>`;
    }
    html += '</div><div class="wizard-step-labels">';
    for (let i = 0; i < steps.length; i++) {
      const cls = i + 1 === current ? 'active' : '';
      html += `<span class="${cls}">${steps[i]}</span>`;
    }
    html += '</div>';
    html += '<button class="wizard-close" onclick="ImportWizard.cancel()">✕</button>';
    document.getElementById('wizardHeader').innerHTML = html;
  },

  _setBody(html) {
    document.getElementById('wizardBody').innerHTML = html;
  },

  _setFooter(html) {
    document.getElementById('wizardFooter').innerHTML = html;
  },

  // ---------- Step 1: 选择文件 ----------
  _renderStep1_file() {
    this._state.step = 1;
    this._renderStepper(1);
    this._setBody(`<div class="wizard-dropzone" id="wizardDropZone">
      <div class="wizard-dropzone-icon">📂</div>
      <div class="wizard-dropzone-text">拖拽 .xlsx / .xls / .csv 文件到此处</div>
      <div class="wizard-dropzone-or">或</div>
      <button class="btn primary" onclick="document.getElementById('wizardFileInput').click()">选择文件</button>
      <input type="file" id="wizardFileInput" accept=".xlsx,.xls,.csv" style="display:none">
    </div>
    <div class="wizard-supported-formats">支持格式: .xlsx, .xls, .csv（任意带表头的表格）</div>
    <div class="wizard-hint" style="margin-top:16px;text-align:center;">
      系统将自动识别列含义并映射到系统字段，无需固定模板
    </div>`);
    this._setFooter('<span class="wizard-hint">请选择要导入的 Excel 文件</span><button class="btn" onclick="ImportWizard.cancel()">取消</button>');

    // Drag & drop
    const dz = document.getElementById('wizardDropZone');
    if (dz) {
      dz.addEventListener('dragover', e => { e.preventDefault(); dz.classList.add('drag-active'); });
      dz.addEventListener('dragleave', () => dz.classList.remove('drag-active'));
      dz.addEventListener('drop', e => {
        e.preventDefault();
        dz.classList.remove('drag-active');
        if (e.dataTransfer.files.length > 0) this._loadFile(e.dataTransfer.files[0]);
      });
    }
    const input = document.getElementById('wizardFileInput');
    if (input) {
      input.addEventListener('change', () => {
        if (input.files.length > 0) this._loadFile(input.files[0]);
      });
    }
  },

  _loadFile(file) {
    const ext = file.name.split('.').pop().toLowerCase();
    if (!['xlsx','xls','csv'].includes(ext)) {
      showToast('不支持的文件格式: .' + ext);
      return;
    }

    this._state.file = file;
    this._state.fileName = file.name;

    const reader = new FileReader();
    if (ext === 'csv') {
      reader.onload = e => {
        try {
          const wb = XLSX.read(e.target.result, { type: 'string', raw: true });
          this._loadWorkbook(wb);
        } catch(err) {
          this._showError('文件解析失败: ' + err.message);
        }
      };
      reader.readAsText(file, 'utf-8');
    } else {
      reader.onload = e => {
        try {
          const wb = XLSX.read(e.target.result, { type: 'array', raw: true });
          this._loadWorkbook(wb);
        } catch(err) {
          this._showError('文件解析失败: ' + err.message + '（文件可能已损坏或加密）');
        }
      };
      reader.readAsArrayBuffer(file);
    }
  },

  _loadWorkbook(wb) {
    this._state.workbook = wb;
    const sheets = [];
    wb.SheetNames.forEach(name => {
      const ws = wb.Sheets[name];
      // Get max row count
      const ref = ws['!ref'];
      const rowCount = ref ? XLSX.utils.decode_range(ref).e.r + 1 : 0;
      // Parse all rows as arrays
      const json = XLSX.utils.sheet_to_json(ws, { defval: '', header: 1, raw: false });

      // Auto-detect header row: scan first 5 rows, skip title rows
      let headerIdx = 0;
      for (let i = 0; i < Math.min(5, json.length); i++) {
        const row = json[i] || [];
        const nonEmpty = row.filter(c => String(c).trim() !== '').length;
        const firstCell = String(row[0] || '').trim();
        // A header row should have >=3 non-empty cells and not be a long title
        if (nonEmpty >= 3 && firstCell.length < 30) {
          headerIdx = i;
          break;
        }
      }

      // Preserve all header columns, replacing empty ones with column numbers
      const rawHeaders = (json[headerIdx] || []).map((h, i) => {
        const val = String(h).trim();
        return val || `列${i + 1}`;
      });
      // Remove trailing empty columns (headers that are just placeholder + no data)
      let data = json.slice(headerIdx + 1);

      let lastNonEmpty = rawHeaders.length - 1;
      while (lastNonEmpty >= 0) {
        const hasData = data.some(row => row[lastNonEmpty] !== undefined && String(row[lastNonEmpty]).trim() !== '');
        if (hasData) break;
        lastNonEmpty--;
      }
      const headers = rawHeaders.slice(0, lastNonEmpty + 1);
      if (headers.length > 0) {
        sheets.push({ name, rowCount, headers, data });
      }
    });
    if (sheets.length === 0) {
      this._showError('文件中未找到包含表头的有效数据');
      return;
    }
    this._state.sheets = sheets;
    this._state.selectedSheet = 0;
    this._renderStep2_table();
  },

  _showError(msg) {
    document.getElementById('wizardBody').innerHTML = `<div class="wizard-error-banner">${msg}</div>`;
    document.getElementById('wizardFooter').innerHTML = '<button class="btn" onclick="ImportWizard._renderStep1_file()">返回重试</button>';
  },

  // ---------- Step 2: 选择目标表 ----------
  _renderStep2_table() {
    this._state.step = 2;
    this._renderStepper(2);

    const sheets = this._state.sheets;
    const selSheet = this._state.selectedSheet;

    // Sheet selector
    let sheetHtml = '<div class="wizard-step-title">选择工作表</div><div class="wizard-sheet-select">';
    sheets.forEach((s, i) => {
      const active = i === selSheet ? 'active' : '';
      sheetHtml += `<div class="wizard-sheet-option ${active}" onclick="ImportWizard._selectSheet(${i})">📄 ${s.name} <span class="wizard-sheet-rows">(${s.rowCount} 行)</span></div>`;
    });
    sheetHtml += '</div>';

    // Detect best table match
    const currentHeaders = sheets[selSheet].headers;
    const detected = this._detectTargetTable(currentHeaders, sheets[selSheet].name);

    // Table selector
    const groups = {};
    Object.keys(TABLE_SCHEMAS).forEach(key => {
      const schema = TABLE_SCHEMAS[key];
      if (!groups[schema.group]) groups[schema.group] = [];
      groups[schema.group].push({ key, label: schema.label });
    });

    let tableHtml = '<div class="wizard-step-title" style="margin-top:16px;">导入目标</div>';
    tableHtml += '<div class="wizard-table-grid">';
    Object.keys(groups).forEach(group => {
      groups[group].forEach(({ key, label }) => {
        const isMatch = detected === key;
        const active = this._state.targetTable === key ? 'active' : '';
        const matchBadge = isMatch ? '<span class="wizard-badge-match">推荐 ✓</span>' : '';
        tableHtml += `<div class="wizard-table-card ${active}" data-table="${key}" onclick="ImportWizard._selectTable('${key}')">
          <div class="wizard-table-card-group">${group}</div>
          <div class="wizard-table-card-name">${label} ${matchBadge}</div>
        </div>`;
      });
    });
    tableHtml += '</div>';

    this._setBody(sheetHtml + tableHtml);
    this._setFooter(`<span class="wizard-hint">已选: ${sheets[selSheet].name} (${currentHeaders.length} 列)</span>
      <button class="btn" onclick="ImportWizard.cancel()">取消</button>
      <button class="btn primary" onclick="ImportWizard._goToMapping()">下一步 →</button>`);
  },

  _selectSheet(idx) {
    this._state.selectedSheet = idx;
    this._state.targetTable = null;
    this._renderStep2_table();
  },

  _selectTable(key) {
    this._state.targetTable = key;
    // Re-render to update active state
    this._renderStep2_table();
  },

  _goToMapping() {
    if (!this._state.targetTable) {
      showToast('请先选择导入目标表');
      return;
    }
    const sheet = this._state.sheets[this._state.selectedSheet];
    this._computeAutoMappings(sheet.headers, sheet.data);
    this._renderStep3_mapping();
  },

  // ---------- 列名模糊匹配 ----------
  _detectTargetTable(headers, sheetName) {
    let bestKey = null;
    let bestScore = 0;

    // Sheet name hints: map sheet name keywords to table prefixes
    const sheetHints = [];
    const s = (sheetName || '').toLowerCase();
    if (s.includes('发') || s.includes('电机') || s.includes('发电机')) sheetHints.push('gen');
    if (s.includes('水') || s.includes('水机') || s.includes('水轮机')) sheetHints.push('water');
    if (s.includes('阀') || s.includes('阀门')) sheetHints.push('valve');
    if (s.includes('自动')) sheetHints.push('automation');
    if (s.includes('监测')) sheetHints.push('monitoring');
    if (s.includes('设联')) sheetHints.push('liaison');
    if (s.includes('成品') || s.includes('材料价')) sheetHints.push('matlib');

    for (const [tableKey, schema] of Object.entries(TABLE_SCHEMAS)) {
      let score = 0;
      for (const header of headers) {
        const match = this._fuzzyMatchField(header, schema.fields);
        if (match) score += match.confidence;
      }
      let normalized = score / schema.fields.length;

      // Sheet name bonus: +0.15 to matching table
      for (const hint of sheetHints) {
        if (tableKey === hint || tableKey.startsWith(hint + '_')) {
          normalized += 0.15;
          break;
        }
      }

      if (normalized > bestScore) {
        bestScore = normalized;
        bestKey = tableKey;
      }
    }
    // Threshold
    if (bestScore < 0.15) return null;
    return bestKey;
  },

  _fuzzyMatchField(header, fields) {
    // Normalized version (strip non-alphanumeric) for matching
    const h = header.trim().toLowerCase().replace(/[^a-z0-9一-鿿]/g, '');
    // Original trimmed header for clean comparison
    const hOrig = header.trim();
    // Clean version (collapse whitespace but keep separators) for alias matching
    const hClean = hOrig.toLowerCase().replace(/\s+/g, '');
    let best = null;

    for (const field of fields) {
      const fkey = field.key.toLowerCase();

      // 1. Exact match (highest priority)
      if (h === fkey) {
        return { field, confidence: 1.0 };
      }

      // 2. Check aliases
      const aliases = FIELD_ALIASES[field.key] || [];
      for (const alias of aliases) {
        const a = alias.toLowerCase().replace(/[^a-z0-9一-鿿]/g, '');
        if (!a) continue;

        // Exact alias match — only match clean headers (no embedded newlines/tabs)
        if (hOrig.match(/[\n\r\t]/)) continue;
        if (a === hClean) {
          best = { field, confidence: 0.97 };
          continue;
        }
        if (h === a) {
          best = { field, confidence: 0.95 };
          continue;
        }

        // Substring match — track best by length of shared substring
        if (h.includes(a) || a.includes(h)) {
          const sharedLen = Math.min(h.length, a.length);
          const score = Math.min(0.75, 0.5 + sharedLen * 0.05);
          if (!best || score > best.confidence || (score === best.confidence && sharedLen > 0)) {
            best = { field, confidence: score };
          }
        }
      }

      // 3. Label match
      const label = field.label.toLowerCase().replace(/[^a-z0-9一-鿿]/g, '');
      if (label && h === label) {
        best = { field, confidence: 0.9 };
      } else if (label && (h.includes(label) || label.includes(h))) {
        const sharedLen = Math.min(h.length, label.length);
        const score = Math.min(0.7, 0.4 + sharedLen * 0.05);
        if (!best || score > best.confidence) {
          best = { field, confidence: score };
        }
      }
    }

    // Only return matches above threshold
    if (best && best.confidence >= 0.4) return best;
    return null;
  },

  // Detect field type from data samples (for columns with no meaningful header)
  _detectFieldFromData(samples, fields) {
    const allText = samples.join(' ').toLowerCase();

    for (const field of fields) {
      const aliases = FIELD_ALIASES[field.key] || [];
      let bestScore = 0;

      // Check if sample values match known patterns for this field
      for (const alias of aliases) {
        const a = alias.toLowerCase();
        if (allText.includes(a)) {
          bestScore = Math.max(bestScore, 0.35);
        }
      }

      // Pattern-based detection
      if (field.key === 'category') {
        const catKeywords = ['钢板', '铜材', '不锈钢', '铸钢', '锻钢', '型材', '管材', '绝缘', '矽钢片', '硅钢片', '成品转轮', '导叶', '密封', '阀'];
        const matchCount = catKeywords.filter(k => allText.includes(k)).length;
        if (matchCount >= 1) bestScore = Math.max(bestScore, 0.50 + matchCount * 0.03);
      }

      if (field.key === 'material') {
        // Material columns contain specs like "Q235", "0Cr18", "ZG", etc.
        const matPatterns = /q235|q345|0cr|1cr|zg|ht\d|zcu|zcual|tds|h62|h58|20simn|wder|wo/;
        if (matPatterns.test(allText)) bestScore = Math.max(bestScore, 0.45);
      }

      if (field.key === 'manufacturer') {
        const mfrKeywords = ['厂', '公司', '集团', '有限公司', '厂牌', '西门子', '施耐德'];
        if (mfrKeywords.some(k => allText.includes(k))) bestScore = Math.max(bestScore, 0.45);
      }

      if (bestScore >= 0.35) {
        return { field, confidence: Math.min(0.60, bestScore) };
      }
    }
    return null;
  },

  _computeAutoMappings(headers, sampleRows) {
    const schema = TABLE_SCHEMAS[this._state.targetTable];
    if (!schema) return;

    const mappings = [];
    headers.forEach((header, idx) => {
      let match = this._fuzzyMatchField(header, schema.fields);

      // For generic "列N" headers, try data-aware detection
      if (!match && header.match(/^列\d+$/)) {
        // Sample values from this column to guess the field type
        const samples = (sampleRows || []).slice(0, 5).map(r =>
          String(r[idx] !== undefined ? r[idx] : '').trim()
        ).filter(Boolean);
        if (samples.length > 0) {
          match = this._detectFieldFromData(samples, schema.fields);
        }
      }

      mappings.push({
        excelIdx: idx,
        excelHeader: header,
        systemField: match ? match.field.key : '',
        confidence: match ? match.confidence : 0
      });
    });

    // De-duplicate: each system field mapped to only one Excel column (last wins ties)
    const fieldBestIdx = {};
    mappings.forEach((m, idx) => {
      if (!m.systemField) return;
      const existing = fieldBestIdx[m.systemField];
      if (existing === undefined || m.confidence >= mappings[existing].confidence) {
        if (existing !== undefined) mappings[existing].systemField = '';
        fieldBestIdx[m.systemField] = idx;
      } else {
        m.systemField = '';
      }
    });

    this._state.columnMappings = mappings;
  },

  // ---------- Step 3: 列映射 ----------
  _renderStep3_mapping() {
    this._state.step = 3;
    this._renderStepper(3);

    const schema = TABLE_SCHEMAS[this._state.targetTable];
    const sheet = this._state.sheets[this._state.selectedSheet];
    const mappings = this._state.columnMappings;

    // Find sample values from first data row
    const dataRows = sheet.data;

    let rowsHtml = '';
    mappings.forEach((m, idx) => {
      const sampleVal = dataRows.length > 0 && dataRows[0][idx] !== undefined ? String(dataRows[0][idx]).substring(0, 30) : '';

      // Build dropdown options
      let opts = '<option value="" ' + (m.systemField === '' ? 'selected' : '') + '>-- 忽略此列 --</option>';
      schema.fields.forEach(f => {
        const selected = f.key === m.systemField ? 'selected' : '';
        opts += `<option value="${f.key}" ${selected}>${f.label} (${f.key})</option>`;
      });

      // Status indicator
      let statusCls = 'ignore';
      let statusText = '○';
      if (m.systemField && m.confidence >= 0.7) { statusCls = 'good'; statusText = '✓'; }
      else if (m.systemField && m.confidence >= 0.4) { statusCls = 'warn'; statusText = '~'; }
      else if (m.systemField) { statusCls = 'bad'; statusText = '?'; }

      rowsHtml += `<tr>
        <td class="wizard-mapping-idx">${idx + 1}</td>
        <td class="wizard-mapping-header">${escHtml(m.excelHeader)}</td>
        <td class="wizard-mapping-arrow"><span class="wizard-mapping-status ${statusCls}">${statusText}</span></td>
        <td><select class="row-edit-select wizard-mapping-select" onchange="ImportWizard._updateMapping(${idx}, this.value)">${opts}</select></td>
        <td class="wizard-mapping-preview" id="wizPreview_${idx}">${escHtml(sampleVal)}</td>
      </tr>`;
    });

    this._setBody(`<div class="wizard-step-title">列映射 — 将 Excel 列映射到「${schema.label}」字段</div>
      <div class="wizard-hint" style="margin-bottom:12px;">✓ = 高置信度匹配 &nbsp; ~ = 中置信度 &nbsp; ? = 低置信度 &nbsp; ○ = 未映射</div>
      <div class="table-wrap" style="max-height:360px;">
      <table class="wizard-mapping-table">
        <thead><tr>
          <th style="width:36px;">#</th>
          <th>Excel 列名</th>
          <th style="width:36px;text-align:center;">→</th>
          <th>映射到系统字段</th>
          <th style="width:180px;">预览值</th>
        </tr></thead>
        <tbody>${rowsHtml}</tbody>
      </table>
      </div>`);

    this._setFooter(`<span class="wizard-hint">至少映射一个字段即可继续</span>
      <button class="btn" onclick="ImportWizard._renderStep2_table()">← 上一步</button>
      <button class="btn primary" onclick="ImportWizard._goToPreview()">下一步 →</button>`);
  },

  _updateMapping(idx, value) {
    if (this._state.columnMappings[idx]) {
      this._state.columnMappings[idx].systemField = value;
    }
  },

  // ---------- Step 4: 预览导入 ----------
  _goToPreview() {
    this._state.previewPage = 1;
    const mappings = this._state.columnMappings;
    const activeMappings = mappings.filter(m => m.systemField);
    if (activeMappings.length === 0) {
      showToast('请至少映射一个字段');
      return;
    }

    // Parse data rows using mappings
    const sheet = this._state.sheets[this._state.selectedSheet];
    const schema = TABLE_SCHEMAS[this._state.targetTable];
    const parsedRows = [];

    sheet.data.forEach((row, rowIdx) => {
      const obj = {};
      mappings.forEach(m => {
        if (m.systemField) {
          const rawVal = row[m.excelIdx] !== undefined ? row[m.excelIdx] : '';
          obj[m.systemField] = this._convertValue(rawVal, m.systemField, schema);
        }
      });
      obj._rowIdx = rowIdx + 2; // +2 for header row (1-indexed)
      obj._valid = true;
      obj._errors = [];
      parsedRows.push(obj);
    });

    // Trim trailing empty/non-data rows (blanks + subtotals with no seq/name)
    while (parsedRows.length > 0) {
      const last = parsedRows[parsedRows.length - 1];
      // First priority: row has at least one required identifier field (seq or name)
      const hasIdentifier = (
        (last.seq !== null && last.seq !== undefined && String(last.seq).trim() !== '') ||
        (last.name !== null && last.name !== undefined && String(last.name).trim() !== '')
      );
      if (hasIdentifier) break;
      // No identifier — check if row has any meaningful mapped data
      const hasValue = activeMappings.some(m => {
        const v = last[m.systemField];
        return v !== null && v !== undefined && String(v).trim() !== '' && String(v) !== '0';
      });
      if (!hasValue) { parsedRows.pop(); }
      else {
        // Row has numeric data but no seq/name: likely a subtotal or standalone number row — skip
        parsedRows.pop();
      }
    }

    // Auto-fill missing seq for rows that have a name (common in exports)
    let autoSeqCounter = 0;
    let lastRealSeq = ''; // keep original Excel seq as base, not auto-generated ones
    parsedRows.forEach((row, i) => {
      const hasName = row.name && String(row.name).trim() !== '';
      const hasSeq = row.seq !== null && row.seq !== undefined && String(row.seq).trim() !== '';
      if (hasName && !hasSeq) {
        autoSeqCounter++;
        if (lastRealSeq && /^\d+(\.\d+)*$/.test(lastRealSeq)) {
          row.seq = lastRealSeq + '.' + autoSeqCounter;
        } else {
          row.seq = '缺序号' + autoSeqCounter;
        }
      } else if (hasSeq) {
        lastRealSeq = String(row.seq).trim();
        autoSeqCounter = 0;
      }
    });

    // Auto-fill missing name from material for BOM rows
    if (['water','gen','valve','valve_door'].includes(this._state.targetTable)) {
      parsedRows.forEach(row => {
        const hasName = row.name && String(row.name).trim() !== '';
        if (hasName) return;
        if (row.material && String(row.material).trim() !== '') {
          row.name = String(row.material).trim();
        }
      });
    }

    // Validate
    const errors = [];
    parsedRows.forEach(row => {
      this._validateRow(row, this._state.targetTable, errors);
    });

    // Fix truncated seq numbers (e.g., Excel General-format stores 9.10 as number 9.1, reads as "9.1")
    if (['water','gen','valve','valve_door'].includes(this._state.targetTable)) {
      this._fixTruncatedSeqs(parsedRows);
    }

    // Detect duplicate seq for BOM tables (common: Excel stores 2.10 as number → JS reads 2.1)
    let dupSeqs = [];
    if (['water','gen','valve','valve_door'].includes(this._state.targetTable)) {
      const seqCount = {};
      parsedRows.forEach(row => {
        const s = String(row.seq || '').trim();
        if (!s) return;
        seqCount[s] = (seqCount[s] || 0) + 1;
      });
      dupSeqs = Object.keys(seqCount).filter(s => seqCount[s] > 1);
      if (dupSeqs.length > 0) {
        console.warn('⚠️ 检测到重复序号:', dupSeqs.join(', '), '— 导入时将自动消重');
      }
    }
    this._state.dupSeqs = dupSeqs;

    this._state.parsedRows = parsedRows;
    this._state.errors = errors;
    this._state.validated = true;
    this._renderStep4_preview();
  },

  _fixTruncatedSeqs(rows) {
    // Detect seq values truncated by Excel's General number format (e.g., 9.10 stored as number 9.1, read as "9.1")
    // Heuristic: within a parent group, if a child's last segment decreases vs the previous child in file order,
    // it was likely truncated. Reconstruct by incrementing the previous child's last segment.
    const isNumeric = s => /^\d+(\.\d+)*$/.test(String(s));

    // Group rows by parent seq (e.g., "9" for "9.1", "3.2" for "3.2.1")
    const groups = {};
    rows.forEach((row, idx) => {
      const seq = String(row.seq || '').trim();
      if (!seq || !isNumeric(seq)) return;
      const parts = seq.split('.');
      if (parts.length < 2) return;
      const parent = parts.slice(0, -1).join('.');
      if (!groups[parent]) groups[parent] = [];
      groups[parent].push({ idx, row, seq, lastSeg: parseInt(parts[parts.length-1], 10) });
    });

    let fixedCount = 0;
    Object.values(groups).forEach(children => {
      children.sort((a, b) => a.idx - b.idx);
      const seen = {};
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        const key = child.seq;
        if (seen[key] !== undefined && i > 0) {
          // Duplicate seq: second occurrence may be a truncated value
          const prev = children[i - 1];
          if (prev && prev.lastSeg > child.lastSeg) {
            // Decrease detected — reconstruct: prefix + (prev.lastSeg + 1)
            const prefix = child.seq.substring(0, child.seq.lastIndexOf('.') + 1);
            const newLastSeg = prev.lastSeg + 1;
            const newSeq = prefix + newLastSeg;
            child.row.seq = newSeq;
            child.seq = newSeq;
            child.lastSeg = newLastSeg;
            fixedCount++;
          }
        } else {
          seen[key] = true;
        }
      }
    });

    if (fixedCount > 0) {
      console.log('🔧 修复了 ' + fixedCount + ' 个因Excel数字格式丢失精度的序号');
    }
  },

  _convertValue(val, fieldKey, schema) {
    if (val === null || val === undefined || val === '') return null;
    const field = schema.fields.find(f => f.key === fieldKey);
    if (!field) return val;

    switch (field.type) {
      case 'number':
      case 'money': {
        const n = parseFloat(String(val).replace(/[^0-9.\-]/g, ''));
        return isNaN(n) ? null : n;
      }
      case 'usageRate': {
        const n = parseFloat(String(val).replace(/[^0-9.\-]/g, ''));
        if (isNaN(n)) return null;
        // >1 and integer: quantity; 0-1: utilization rate
        return n;
      }
      case 'bool': {
        if (typeof val === 'boolean') return val;
        const s = String(val).trim().toLowerCase();
        if (['是','外购','true','1','yes','采购','买','成品','标准'].includes(s)) return true;
        if (['否','自制','false','0','no','自製','生产','非标'].includes(s)) return false;
        return null;
      }
      default:
        return String(val).trim();
    }
  },

  // 智能拆分组合的数量+单位值，如 "2套" → {qty:"2", unit:"套"}, "各2套(Q235)" → {qty:"2", unit:"套", extra:"Q235"}
  _smartSplitQty(rawVal) {
    if (rawVal === null || rawVal === undefined) return { qty: '', unit: '', extra: '' };
    const s = String(rawVal).trim();
    if (!s) return { qty: '', unit: '', extra: '' };

    // Remove prefix words like 各/约/共/大约/共计
    const cleaned = s.replace(/^[各约共大约共计]+/, '').trim();

    // Extract parenthetical content (spec material info like Q235)
    let extra = '';
    let working = cleaned;
    const parenMatch = working.match(/[（(]([^)）]*)[)）]/);
    if (parenMatch) {
      extra = parenMatch[1];
      working = working.replace(/[（(][^)）]*[)）]/, '').trim();
    }

    // Try to split number part from text part
    // Pattern: leading number (integer or decimal), followed by Chinese/alphabetic unit
    const match = working.match(/^(\d+(?:\.\d+)?)\s*(.*)/);
    if (match) {
      return { qty: match[1], unit: match[2] || '', extra };
    }

    // If no number found, but contains digits somewhere, try looser match
    const looseMatch = working.match(/(\d+(?:\.\d+)?)\s*(.*)/);
    if (looseMatch) {
      return { qty: looseMatch[1], unit: looseMatch[2] || '', extra };
    }

    return { qty: '', unit: working, extra };
  },

  // 单位简写标准化：套→套, 台→台, 个→个, 件→件, 把→把, 根→根, 支→支, 条→条, 副→副, 组→组
  _normalizeUnit(rawUnit) {
    if (!rawUnit) return '';
    const u = rawUnit.trim();
    // Already clean single character
    if (/^[套台个件把根支条副组只对张块卷筒包箱]$/.test(u)) return u;
    // Common long forms
    const map = { '台套':'套', '台/套':'套', '把/套':'把', '把/个':'把' };
    return map[u] || u;
  },

  _validateRow(row, tableKey, errors) {
    const schema = TABLE_SCHEMAS[tableKey];
    if (!schema) return;

    row._valid = true;
    row._errors = [];

    // Check required fields
    if (['water','gen','valve','valve_door','water_parts','gen_parts','valve_parts',
        'water_tools','gen_tools','valve_tools','automation','monitoring','liaison'].includes(tableKey)) {
      if (!row.name || String(row.name).trim() === '') {
        row._valid = false;
        row._errors.push('缺少名称');
      }
      if (!row.seq && row.seq !== 0) {
        row._valid = false;
        row._errors.push('缺少序号');
      }
    }
    if (tableKey === 'matlib') {
      if (!row.name || String(row.name).trim() === '') {
        row._valid = false;
        row._errors.push('缺少材料名称');
      }
    }

    // Type check number fields
    schema.fields.forEach(f => {
      if ((f.type === 'number' || f.type === 'money') && row[f.key] !== null && row[f.key] !== undefined) {
        if (typeof row[f.key] !== 'number' || isNaN(row[f.key])) {
          row._valid = false;
          row._errors.push(`${f.label}不是有效数字`);
        }
      }
      if (f.type === 'usageRate' && row[f.key] !== null && row[f.key] !== undefined) {
        const uv = row[f.key];
        if (typeof uv !== 'number' || uv < 0 || (uv > 1 && uv % 1 !== 0)) {
          row._errors.push(`${f.label}应在0-1之间（利用率）或为整数（数量）`);
        }
      }
    });

    if (!row._valid) {
      errors.push(row);
    }
  },

  _renderStep4_preview(page) {
    this._state.step = 4;
    this._renderStepper(4);

    const schema = TABLE_SCHEMAS[this._state.targetTable];
    const rows = this._state.parsedRows;
    const errors = this._state.errors;
    const validRows = rows.filter(r => r._valid);
    const invalidCount = errors.length;

    // Pagination
    const pageSize = this._state.previewPageSize || 50;
    const totalPages = Math.max(1, Math.ceil(rows.length / pageSize));
    const currentPage = Math.max(1, Math.min(totalPages, page || this._state.previewPage || 1));
    this._state.previewPage = currentPage;
    const startIdx = (currentPage - 1) * pageSize;
    const endIdx = Math.min(startIdx + pageSize, rows.length);

    // Preview table
    const mappedFields = this._state.columnMappings.filter(m => m.systemField).map(m => m.systemField);
    const uniqueFields = [...new Set(mappedFields)];

    let tableHtml = '<table class="wizard-preview-table"><thead><tr>';
    uniqueFields.forEach(fk => {
      const fieldDef = schema.fields.find(f => f.key === fk);
      tableHtml += `<th>${fieldDef ? fieldDef.label : fk}</th>`;
    });
    tableHtml += '<th style="width:40px;">状态</th></tr></thead><tbody>';

    for (let i = startIdx; i < endIdx; i++) {
      const row = rows[i];
      tableHtml += '<tr>';
      uniqueFields.forEach(fk => {
        const val = row[fk] !== null && row[fk] !== undefined ? String(row[fk]) : '';
        tableHtml += `<td>${escHtml(val)}</td>`;
      });
      const statusIcon = row._valid ? '<span class="wizard-mapping-status good">✓</span>' : '<span class="wizard-mapping-status bad" title="' + escHtml(row._errors.join('; ')) + '">✗</span>';
      tableHtml += `<td style="text-align:center;">${statusIcon}</td></tr>`;
    }
    tableHtml += '</tbody></table>';

    // Pagination controls (always show when > 1 page)
    let pagerHtml = '';
    if (totalPages > 1) {
      const prevDisabled = currentPage <= 1 ? ' disabled' : '';
      const nextDisabled = currentPage >= totalPages ? ' disabled' : '';
      pagerHtml = `<div class="wizard-pager">
        <button class="btn btn-sm${prevDisabled}" onclick="ImportWizard._renderStep4_preview(${currentPage - 1})"${prevDisabled ? '' : ''} ${prevDisabled ? 'disabled' : ''}>← 上一页</button>
        <span class="wizard-pager-info">第 ${startIdx + 1}-${endIdx} 行，共 ${rows.length} 行 (${currentPage}/${totalPages} 页)</span>
        <button class="btn btn-sm${nextDisabled}" onclick="ImportWizard._renderStep4_preview(${currentPage + 1})"${nextDisabled ? ' disabled' : ''}>下一页 →</button>
      </div>`;
    }

    // Validation summary
    let summaryHtml = '';
    if (invalidCount > 0) {
      summaryHtml = `<div class="wizard-validation-summary">
        <span class="wizard-validation-count">⚠️ 有 ${invalidCount} 行数据存在问题（缺少必填字段或类型错误）</span>
        <button class="btn" onclick="ImportWizard._removeInvalidRows()">仅导入有效行 (${validRows.length} 行)</button>
      </div>`;
    }
    // Duplicate seq warning
    if (this._state.dupSeqs && this._state.dupSeqs.length > 0) {
      summaryHtml += `<div class="wizard-validation-summary" style="background:var(--red-light);border-color:var(--red);">
        <span class="wizard-validation-count" style="color:var(--red);">🔴 检测到重复序号: ${this._state.dupSeqs.join(', ')} — 可能因Excel将序号存储为数字（如2.10→2.1），导入时将自动消重</span>
      </div>`;
    }

    this._setBody(`<div class="wizard-step-title">预览 — 将导入到「${schema.label}」</div>
      ${summaryHtml}
      <div style="font-size:12px;color:var(--text-muted);margin-bottom:8px;">
        文件: ${this._state.fileName} → 共解析 ${rows.length} 行，有效 ${validRows.length} 行（将覆盖替换目标表全部数据）
      </div>
      <div class="table-wrap" style="max-height:400px;">${tableHtml}</div>
      ${pagerHtml}`);

    const hasValid = validRows.length > 0;
    this._setFooter(`<span class="wizard-hint">${hasValid ? '确认后将覆盖替换目标表全部数据，可通过 Ctrl+Z 撤销' : '没有可导入的有效数据'}</span>
      <button class="btn" onclick="ImportWizard._renderStep3_mapping()">← 上一步</button>
      <button class="btn primary" onclick="ImportWizard._executeImport()" ${hasValid ? '' : 'disabled'}>
        ${invalidCount > 0 ? '导入有效行 (' + validRows.length + ')' : '确认导入'}
      </button>`);
  },

  _removeInvalidRows() {
    this._state.parsedRows = this._state.parsedRows.filter(r => r._valid);
    this._state.errors = [];
    this._renderStep4_preview();
    showToast('已移除问题行');
  },

  // ---------- 执行导入 ----------
  _executeImport() {
    const targetTable = this._state.targetTable;
    const schema = TABLE_SCHEMAS[targetTable];
    const rows = this._state.parsedRows.filter(r => r._valid);

    if (rows.length === 0) {
      showToast('没有可导入的有效数据');
      return;
    }

    // Snapshot for undo
    if (typeof takeProjectSnapshot === 'function') {
      takeProjectSnapshot('Excel导入');
    }

    // Log import details for diagnostics
    console.group('📥 Excel 导入诊断');
    console.log('目标表:', targetTable, '| 有效行数:', rows.length);
    console.log('文件:', this._state.fileName);
    console.log('列映射:', this._state.columnMappings.filter(m => m.systemField).map(m => m.excelHeader + '→' + m.systemField).join(', '));
    // Trace seq hierarchy for BOM imports
    if (['water','gen','valve','valve_door'].includes(targetTable)) {
      const childrenOf7 = rows.filter(r => String(r.seq || '').startsWith('7.'));
      console.log('seq 以 "7." 开头的行:', childrenOf7.length, '行', childrenOf7.map(r => r.seq + ' ' + r.name).join(', '));
      const allSeqs = rows.map(r => String(r.seq || '')).filter(Boolean);
      console.log('全部 seq 值:', allSeqs.join(', '));
      const parentSeqs = [...new Set(allSeqs.filter(s => allSeqs.some(o => o !== s && o.startsWith(s + '.'))))];
      console.log('有子节点的父级 seq:', parentSeqs.join(', '));
    }
    console.groupEnd();

    let added = 0, updated = 0;

    if (targetTable === 'matlib') {
      // Import to material library
      rows.forEach(row => {
        const name = String(row.name || '').trim();
        if (!name) return;

        const existingIdx = MAT_LIB.findIndex(m => m.name === name);
        if (existingIdx >= 0) {
          // Update existing
          if (row.spec) MAT_LIB[existingIdx].spec = row.spec;
          if (row.category) MAT_LIB[existingIdx].category = row.category;
          if (row.price !== null && row.price !== undefined && row.price !== '') MAT_LIB[existingIdx].price = parseFloat(row.price);
          if (row.usage_rate !== null && row.usage_rate !== undefined && row.usage_rate !== '') MAT_LIB[existingIdx].usage_rate = parseFloat(row.usage_rate);
          if (row.remark) MAT_LIB[existingIdx].remark = row.remark;
          updated++;
        } else {
          MAT_LIB.push({
            id: 'MAT-' + String(_matLibNextId).padStart(4, '0'),
            name: name,
            spec: row.spec || '',
            category: row.category || '其他',
            price: parseFloat(row.price) || 0,
            usage_rate: parseFloat(row.usage_rate) || 0.8,
            remark: row.remark || ''
          });
          _matLibNextId++;
          added++;
        }
        // Update MATERIAL_PRICE_DB cache
        if (name && row.price) {
          const key = name.replace(/\s+/g, '');
          MATERIAL_PRICE_DB.set(key, { p: parseFloat(row.price), u: '导入' });
        }
      });
      PRICE_CACHE && PRICE_CACHE.clear();
      persistMatLib();
      // Recalc material BOM tables
      ['water','gen','valve','valve_door'].forEach(k => {
        if (DATA[k]) FormulaEngine.recalcTable(k);
      });
    } else {
      // Import to DATA table — overwrite
      // Auto-split combined qty+unit values if qty is mapped but unit is not
      const hasQtyMapping = this._state.columnMappings.some(m => m.systemField === 'qty');
      const hasUnitMapping = this._state.columnMappings.some(m => m.systemField === 'unit');
      const hasSpecMapping = this._state.columnMappings.some(m => m.systemField === 'spec');
      const shouldExtractUnit = hasQtyMapping && !hasUnitMapping && schema.fields.some(f => f.key === 'unit');
      const shouldExtractSpec = !hasSpecMapping && schema.fields.some(f => f.key === 'spec');

      const newRows = [];
      rows.forEach(row => {
        const newRow = {};
        schema.fields.forEach(f => {
          newRow[f.key] = row[f.key] !== undefined ? row[f.key] : null;
        });

        // Smart split: extract unit and spec from combined qty value
        if (shouldExtractUnit && newRow.qty) {
          const split = this._smartSplitQty(newRow.qty);
          if (split.qty) newRow.qty = split.qty;
          if (split.unit && !newRow.unit) newRow.unit = this._normalizeUnit(split.unit);
          // If the qty value contained extra spec info (e.g. "1套(Q235)"), append to spec
          if (split.extra && shouldExtractSpec && !newRow.spec) newRow.spec = split.extra;
        }

        newRows.push(newRow);
        added++;
      });

      // Deduplicate seq for BOM tables (e.g., Excel number 2.10 → JS 2.1, collides with 2.1)
      if (['water','gen','valve','valve_door'].includes(targetTable)) {
        const seen = {};
        let dedupCount = 0;
        newRows.forEach(row => {
          const origSeq = row.seq;
          if (!origSeq) return;
          const key = String(origSeq).trim();
          if (!key) return;
          if (seen[key]) {
            // Generate a unique suffix
            let suffix = 2;
            let newSeq = key + '-' + suffix;
            while (seen[newSeq]) { suffix++; newSeq = key + '-' + suffix; }
            row.seq = newSeq;
            seen[newSeq] = true;
            dedupCount++;
            console.log('🔧 消重序号: seq "' + key + '" → "' + newSeq + '" (' + (row.name || '(无名称)') + ')');
          } else {
            seen[key] = true;
          }
        });
        if (dedupCount > 0) {
          console.log('🔧 共消重 ' + dedupCount + ' 条重复序号');
        }
      }

      DATA[targetTable] = newRows;

      // Log the actual row count after assignment
      console.log('📊 DATA.' + targetTable + '.length after import:', DATA[targetTable].length, '(expected:', newRows.length, ')');
      if (DATA[targetTable].length !== newRows.length) {
        console.error('❌ 行数不匹配! DATA=' + DATA[targetTable].length + ' newRows=' + newRows.length);
      }

      // 智能序号重排：修复跳号、首行不是 .1、父级序号断层
      autoFixSequences(targetTable);

      // Recalculate formulas
      FormulaEngine.recalcTable(targetTable);

      // For BOM tables, recalc subtotals
      if (['water','gen','valve','valve_door'].includes(targetTable)) {
        FormulaEngine.recalcSubtotals(DATA[targetTable], targetTable);

        // 清理导入后无意义的空行（有名称/有材料/有重量/汇总行/外购件均保留）
        const items = DATA[targetTable];
        const beforeClean = items.length;
        for (let i = items.length - 1; i >= 0; i--) {
          const row = items[i];
          const w = parseFloat(row.weight);
          const hasWeight = !isNaN(w) && w > 0;
          const isSub = isSubtotalRow(row, items);
          const isBuy = row.is_buy === true;
          const hasMaterial = row.material && String(row.material).trim() !== '';
          const hasName = row.name && String(row.name).trim() !== '';
          const isEmptyRow = !hasWeight && !isSub && !isBuy && !hasMaterial && !hasName;
          if (isEmptyRow) {
            items.splice(i, 1);
          }
        }
        if (items.length < beforeClean) {
          console.log('🧹 已清理 ' + (beforeClean - items.length) + ' 行无意义空数据 (保留了' + items.length + '行)');
        }
      }

      persistData();
    }

    // Clear stale sessionStorage collapse states for this table
    if (['water','gen','valve','valve_door','water_parts','gen_parts','valve_parts',
         'water_tools','gen_tools','valve_tools','automation','monitoring','liaison'].includes(targetTable)) {
      const prefix = `et_collapsed_${targetTable}_`;
      Object.keys(sessionStorage).filter(k => k.startsWith(prefix)).forEach(k => sessionStorage.removeItem(k));
    }

    renderAll();
    showToast(`✅ 导入完成: 共覆盖 ${added} 条数据`);
    this.cancel();
  }
};

// ============ 全局诊断函数 (浏览器控制台运行) ============
// 用法: auditBOMTable('water')  或不传参则默认检查当前激活的 BOM 表
window.auditBOMTable = function(tableKey) {
  tableKey = tableKey || (typeof state !== 'undefined' && state.currentMatTab) || 'water';
  const items = DATA[tableKey];
  if (!items || !Array.isArray(items)) {
    console.log('❌ 表 ' + tableKey + ' 无数据');
    return;
  }
  console.group('🔍 BOM 表诊断: ' + tableKey + ' (共 ' + items.length + ' 行)');

  // 1. List all seq + name
  console.log('--- 全部行 ---');
  items.forEach((it, i) => {
    console.log(String(i).padStart(3) + ' | seq: ' + String(it.seq || '').padEnd(8) + ' | name: ' + (it.name || '(空)') + ' | material: ' + (it.material || '').slice(0,20) + ' | weight: ' + it.weight);
  });

  // 2. Tree structure — show parent-child relationships
  console.log('--- 树形结构 ---');
  (function printTree(parentSeq, indent) {
    var children = items.filter(function(it) {
      if (!parentSeq || parentSeq === '') return /^\d+$/.test(String(it.seq || ''));
      var c = String(it.seq || '');
      return c.startsWith(parentSeq + '.') && c.split('.').length === parentSeq.split('.').length + 1;
    });
    children.forEach(function(c) {
      var it = items.find(function(i) { return String(i.seq) === String(c.seq); });
      console.log(indent + c.seq + ' ' + (it ? it.name : '(未找到)') + (it && it.material ? ' [' + it.material + ']' : ''));
      printTree(c.seq, indent + '  ');
    });
  })('', '');

  // 3. Check for potential issues
  console.log('--- 潜在问题 ---');
  var seqCount = {};
  items.forEach(function(it) { var s = String(it.seq || ''); seqCount[s] = (seqCount[s] || 0) + 1; });
  Object.keys(seqCount).filter(function(s) { return seqCount[s] > 1; }).forEach(function(s) {
    console.warn('⚠️ 重复序号: "' + s + '" 出现 ' + seqCount[s] + ' 次');
  });
  items.filter(function(it) { return !it.seq && it.seq !== 0; }).forEach(function(it) {
    console.warn('⚠️ 缺少序号: ' + (it.name || '(无名称)'));
  });

  // 4. Children count for each parent
  console.log('--- 子节点统计 ---');
  var parents = items.filter(function(it) { return typeof isSubtotalRow === 'function' && isSubtotalRow(it, items); });
  parents.forEach(function(p) {
    var count = items.filter(function(other) { return typeof isDirectChild === 'function' && isDirectChild(String(p.seq), String(other.seq || '')); }).length;
    console.log('  seq=' + p.seq + ' ' + p.name + ' → ' + count + ' 个子节点');
  });

  console.groupEnd();
  return items.length;
};

