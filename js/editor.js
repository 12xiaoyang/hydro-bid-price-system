// ============ 二级弹窗行编辑器 ============
const TABLE_POPUP_EDIT_ENABLED = true;

function _escapeHtmlRowEdit(v) {
  return String(v ?? '').replace(/[&<>"']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s]));
}

function _isLongRowEditField(key, col) {
  const k = String(key || '').toLowerCase();
  const label = String((col && col.label) || '');
  return ['remark','remarks','note','notes','desc','description','spec','model'].includes(k) ||
         /备注|说明|描述|规格|型号/.test(label);
}

function _isNumericRowEditField(col) {
  return ['number','money','weight','int','usageRate','qty'].includes(col && col.type);
}

function _rowEditFieldOptions(col, key, dataKey) {
  if (col && col.type === 'bool') return [
    { value: '0', label: '自制' },
    { value: '1', label: '外购' }
  ];
  if (key === 'category') return ['板材类','型材类','铸件类','锻件类','铜材','绝缘材料','不锈钢材','管材','成品件','轴承/轴套','密封件','阀门类','其他'].map(v => ({ value: v, label: v }));
  if (key === 'unit') return ['','件','套','台','台套','个','只','把','组','米','kg','T'].map(v => ({ value: v, label: v || '空' }));
  return null;
}

function openRowEditModal(kind, payload) {
  closeRowEditModal();
  const overlay = document.createElement('div');
  overlay.id = 'rowEditOverlay';
  document.body.appendChild(overlay);

  let title = '编辑行';
  let subtitle = '';
  let fields = [];
  let row = null;
  let onSave = null;
  let modalDataKey = payload && payload.dataKey;

  if (kind === 'data') {
    const { dataKey, rowIdx, config } = payload;
    modalDataKey = dataKey;
    row = (DATA[dataKey] || [])[rowIdx];
    if (!row) { overlay.remove(); return; }
    const columns = (config.columns || []);
    const isMatBOM = ['water','gen','valve','valve_door'].includes(dataKey);
    const isSub = isMatBOM && isSubtotalRow(row, DATA[dataKey] || []);
    title = '编辑表格行';
    subtitle = `${dataKey} · ${row.seq ? '序号 ' + row.seq + ' · ' : ''}${row.name || row.material || '未命名行'}`;
    fields = columns.map(col => {
      const formulaMeta = getFormulaMetaForField(dataKey, row, col.key, col, isSub);
      const readonly = !!(formulaMeta || col.formula || (isSub && (col.key === 'weight' || col.key === 'amount')) || (isSub && col.key === 'usage'));
      return { key: col.key, label: col.label || col.key, type: col.type || 'text', col, value: row[col.key], readonly, formulaMeta };
    });
    onSave = (values, formulaValues) => {
      let changed = false;
      fields.forEach(f => {
        if (f.formulaMeta && f.formulaMeta.configurable) return;
        if (f.readonly) return;
        if (JSON.stringify(row[f.key]) !== JSON.stringify(values[f.key])) {
          row[f.key] = values[f.key];
          changed = true;
        }
      });
      Object.entries(formulaValues || {}).forEach(([formulaId, expr]) => {
        const before = getFormulaExpr(formulaId);
        setCustomFormula(formulaId, expr);
        const after = getFormulaExpr(formulaId);
        if (before !== after) changed = true;
      });
      if (changed) takeProjectSnapshot('弹窗编辑表格行');
      FormulaEngine.recalcTable(dataKey);
      persistData();
      if (['water','gen','valve','valve_door','water_parts','gen_parts','valve_parts','water_tools','gen_tools','valve_tools','automation','monitoring','liaison'].includes(dataKey)) {
        _sidebarOverrides.clear();
      }
      EditableTable.render(config);
      if (config.onChange) config.onChange();
      renderAll();
      showToast(changed ? '已保存弹窗编辑内容' : '未检测到变更');
    };
  } else if (kind === 'matlib') {
    const idx = payload.idx;
    row = MAT_LIB[idx];
    if (!row) { overlay.remove(); return; }
    title = '编辑材料库';
    subtitle = `${row.id || ''} · ${row.name || '新材料'}`;
    fields = [
      { key: 'id', label: '材料ID', type: 'text', value: row.id, readonly: true },
      { key: 'name', label: '材料名称', type: 'text', value: row.name },
      { key: 'spec', label: '规格', type: 'text', value: row.spec },
      { key: 'category', label: '分类', type: 'text', value: row.category },
      { key: 'price', label: '标准价格(万/T)', type: 'number', value: row.price },
      { key: 'usage_rate', label: '利用率', type: 'number', value: row.usage_rate ?? 0.8 },
      { key: 'remark', label: '备注', type: 'text', value: row.remark }
    ];
    onSave = (values) => {
      let changed = false;
      ['name','spec','category','price','usage_rate','remark'].forEach(k => {
        if (JSON.stringify(row[k]) !== JSON.stringify(values[k])) {
          row[k] = values[k];
          changed = true;
        }
      });
      if (changed) takeProjectSnapshot('弹窗编辑材料库');
      persistMatLib();
      renderMatLib();
      ['water','gen','valve','valve_door'].forEach(k => FormulaEngine.recalcTable(k));
      renderAll();
      showToast(changed ? '已保存材料库编辑内容' : '未检测到变更');
    };
  }

  const modal = document.createElement('div');
  modal.className = 'row-edit-modal';
  overlay.appendChild(modal);

  const fieldHtml = fields.map(f => {
    const key = f.key;
    const col = f.col || { type: f.type, label: f.label };
    const opts = _rowEditFieldOptions(col, key, modalDataKey);
    const isLong = _isLongRowEditField(key, col);
    const isNumeric = _isNumericRowEditField(col) || f.type === 'number';
    const formulaMeta = f.formulaMeta;
    const full = !!formulaMeta || isLong || key === 'material' || key === 'replacement' || key === 'name';
    const current = f.value ?? '';
    const readonlyAttr = f.readonly ? ' readonly' : '';
    const readonlyTag = f.readonly && !formulaMeta ? '<span class="readonly-tag">自动/只读</span>' : '';
    let control = '';
    if (opts && !f.readonly) {
      control = `<select class="row-edit-select" data-key="${key}">
        ${opts.map(o => `<option value="${_escapeHtmlRowEdit(o.value)}" ${String(current) === String(o.value) || (col.type === 'bool' && String(current ? '1':'0') === String(o.value)) ? 'selected' : ''}>${_escapeHtmlRowEdit(o.label)}</option>`).join('')}
      </select>`;
    } else if (col.type === 'bool') {
      control = `<input class="row-edit-input" data-key="${key}" value="${current ? '外购' : '自制'}" readonly>`;
    } else if (isLong) {
      control = `<textarea class="row-edit-textarea" data-key="${key}"${readonlyAttr}>${_escapeHtmlRowEdit(current)}</textarea>`;
    } else {
      control = `<input class="row-edit-input${isNumeric ? ' numeric' : ''}" data-key="${key}" type="${isNumeric && !f.readonly ? 'number' : 'text'}" ${isNumeric && !f.readonly ? 'step="any"' : ''} value="${_escapeHtmlRowEdit(current)}"${readonlyAttr}>`;
    }

    // For formula-capable configurable fields: render a formula card with current expr + editable input
    if (formulaMeta && formulaMeta.configurable) {
      const fid = formulaMeta.id;
      const currentExpr = getFormulaExpr(fid);
      const defaultExpr = DEFAULT_FORMULAS[fid] ? DEFAULT_FORMULAS[fid].expr : '';
      const isCustom = currentExpr !== defaultExpr;
      const vars = (formulaMeta.vars || []);
      const varsHtml = vars.length ? vars.map(v => `<code class="fv-chip">${_escapeHtmlRowEdit(v)}</code>`).join(' ') : '<span style="color:var(--text-dim)">—</span>';
      return `<div class="row-edit-field full formula-field-card">
        <label class="row-edit-label">
          <span>⨍ ${_escapeHtmlRowEdit(formulaMeta.label || f.label)}</span>
          <span class="formula-badge ${isCustom ? 'custom' : 'default'}">${isCustom ? '已自定义' : '默认公式'}</span>
        </label>
        <div class="formula-card">
          <div class="formula-card-desc">${_escapeHtmlRowEdit(formulaMeta.desc || '')}</div>
          <div class="formula-card-vars">可用变量：${varsHtml}</div>
          <div class="formula-card-row">
            <span class="formula-card-label">当前公式</span>
            <input class="row-edit-input formula-expr-input" data-formula-id="${fid}"
              value="${_escapeHtmlRowEdit(currentExpr)}"
              placeholder="${_escapeHtmlRowEdit(defaultExpr)}"
              spellcheck="false" autocomplete="off" autocorrect="off">
          </div>
          ${isCustom ? `<div class="formula-card-reset"><button type="button" class="formula-reset-btn" data-formula-id="${fid}">↺ 恢复默认（${_escapeHtmlRowEdit(defaultExpr)}）</button></div>` : ''}
          <div class="formula-card-result">
            <span class="formula-card-label">当前计算值</span>
            <span class="formula-result-val">${_escapeHtmlRowEdit(String(f.value ?? '—'))}</span>
          </div>
        </div>
      </div>`;
    }
    return `<div class="row-edit-field ${full ? 'full' : ''}">
      <label class="row-edit-label"><span>${_escapeHtmlRowEdit(f.label)}</span><span>${readonlyTag}</span></label>
      ${control}
    </div>`;
  }).join('');

  modal.innerHTML = `
    <div class="row-edit-header">
      <div>
        <div class="row-edit-title">${_escapeHtmlRowEdit(title)}</div>
        <div class="row-edit-subtitle">${_escapeHtmlRowEdit(subtitle)}</div>
      </div>
      <button class="row-edit-close" type="button" title="关闭">✕</button>
    </div>
    <div class="row-edit-body">
      <div class="row-edit-error" id="rowEditError"></div>
      ${fieldHtml}
    </div>
    <div class="row-edit-footer">
      <span class="row-edit-hint">双击行或点击“编辑”打开；Esc 取消，Ctrl/⌘ + Enter 保存。</span>
      <button class="btn" id="rowEditCancel" type="button">取消</button>
      <button class="btn row-edit-primary" id="rowEditSave" type="button">保存</button>
    </div>
  `;
const close = () => closeRowEditModal();
  modal.querySelector('.row-edit-close').onclick = close;
  modal.querySelector('#rowEditCancel').onclick = close;
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });

  // Formula reset buttons
  modal.addEventListener('click', e => {
    const btn = e.target.closest('.formula-reset-btn');
    if (!btn) return;
    const fid = btn.dataset.formulaId;
    if (!fid || !DEFAULT_FORMULAS[fid]) return;
    const inp = modal.querySelector(`[data-formula-id="${CSS.escape(fid)}"]`);
    if (inp) {
      inp.value = DEFAULT_FORMULAS[fid].expr;
      inp.dispatchEvent(new Event('input'));
    }
    // Update badge
    const card = btn.closest('.formula-field-card');
    if (card) {
      const badge = card.querySelector('.formula-badge');
      if (badge) { badge.textContent = '默认公式'; badge.className = 'formula-badge default'; }
      btn.closest('.formula-card-reset')?.remove();
    }
  });

  // Live preview: update result display as user types formula
  modal.addEventListener('input', e => {
    const inp = e.target.closest('.formula-expr-input');
    if (!inp) return;
    const fid = inp.dataset.formulaId;
    if (!fid) return;
    const card = inp.closest('.formula-card');
    const resultEl = card ? card.querySelector('.formula-result-val') : null;
    if (!resultEl) return;
    try {
      const testCtx = Object.assign({}, row || {}, { price: row && row.price != null ? parseFloat(row.price) || 0 : 1, material_price: 1, qty_parsed: parseQtyValue((row || {}).qty) });
      const val = evaluateFormulaSafe(inp.value.trim(), testCtx);
      resultEl.textContent = val != null ? String(Math.round(val * 10000) / 10000) : '—';
      resultEl.style.color = 'var(--green)';
      inp.style.borderColor = '';
    } catch(err) {
      resultEl.textContent = '⚠ ' + err.message;
      resultEl.style.color = 'var(--red)';
      inp.style.borderColor = 'var(--red)';
    }
  });

  function collectValues() {
    const values = {};
    const formulaValues = {};
    for (const f of fields) {
      const col = f.col || { type: f.type };
      const el = modal.querySelector(`[data-key="${CSS.escape(f.key)}"]`);
      if (!el) { values[f.key] = f.value; continue; }
      if (f.formulaMeta && f.formulaMeta.configurable) {
        values[f.key] = f.value;
        continue;
      }
      if (f.readonly) { values[f.key] = f.value; continue; }
      let raw = (el.value ?? '').trim();
      if (col.type === 'bool') {
        values[f.key] = raw === '1';
      } else if (_isNumericRowEditField(col) || f.type === 'number') {
        if (raw === '') {
          values[f.key] = null;
        } else {
          const n = parseFloat(raw);
          if (isNaN(n)) throw new Error(`${f.label} 必须是有效数字`);
          if ((col.type === 'usageRate' || f.key === 'usage') && (n < 0 || (n > 1 && n % 1 !== 0))) throw new Error(`${f.label} 需在0~1之间（利用率）或为整数（数量）`);
          values[f.key] = (col.type === 'int') ? Math.round(n) : n;
        }
      } else {
        values[f.key] = raw;
      }
    }
    modal.querySelectorAll('[data-formula-id]').forEach(input => {
      const fid = input.dataset.formulaId;
      const expr = String(input.value || '').trim();
      if (!DEFAULT_FORMULAS[fid]) return;
      if (!expr) throw new Error(`${DEFAULT_FORMULAS[fid].label} 的公式不能为空`);
      // Validate against current row context, but do not require validation for placeholder sum() formulas.
      if (!expr.includes('sum(')) {
        const testCtx = Object.assign({}, row || {}, { price: 1, material_price: 1, qty_parsed: parseQtyValue((row || {}).qty) });
        evaluateFormulaSafe(expr, testCtx);
      }
      formulaValues[fid] = expr;
    });
    if (kind === 'matlib') {
      if (!values.name) throw new Error('材料名称不能为空');
      if (values.price === null || values.price === undefined || isNaN(parseFloat(values.price))) throw new Error('标准价格必须是有效数字');
    }
    return { values, formulaValues };
  }

  modal.querySelector('#rowEditSave').onclick = () => {
    const err = modal.querySelector('#rowEditError');
    try {
      const result = collectValues();
      err.style.display = 'none';
      onSave(result.values, result.formulaValues);
      closeRowEditModal();
    } catch (e) {
      err.textContent = '⚠ ' + e.message;
      err.style.display = 'block';
    }
  };

  const firstEditable = modal.querySelector('.row-edit-input:not([readonly]), .row-edit-textarea:not([readonly]), .row-edit-select');
  if (firstEditable) setTimeout(() => { firstEditable.focus(); if (firstEditable.select) firstEditable.select(); }, 0);

  overlay._rowEditKeydown = (e) => {
    if (e.key === 'Escape') close();
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      modal.querySelector('#rowEditSave').click();
    }
  };
  document.addEventListener('keydown', overlay._rowEditKeydown);
}

function closeRowEditModal() {
  const overlay = document.getElementById('rowEditOverlay');
  if (overlay) {
    if (overlay._rowEditKeydown) document.removeEventListener('keydown', overlay._rowEditKeydown);
    overlay.remove();
  }
}

// ============ 可编辑表格组件 ============
const EditableTable = {
  currentEdit: null,

  render(config) {
    const { tableId, dataKey, columns, summaryId, filterFn } = config;
    const allItems = DATA[dataKey] || [];
    const items = filterFn ? allItems.filter(filterFn) : allItems;
    // Build index map: filtered index → original DATA index
    const origIdxMap = filterFn ? items.map(it => allItems.indexOf(it)) : items.map((_, i) => i);
    const isMatBOM = ['water','gen','valve','valve_door'].includes(dataKey);

    // Build header — with colgroup for fixed-layout column width control
    // Determine column class based on key/type for semantic width assignment
    const colClass = (col) => {
      // matTable-specific col classes
      if (config.tableId === 'matTable') {
        if (col.key === 'seq') return 'mat-seq';
        if (col.key === 'name') return 'mat-name';
        if (col.key === 'material') return 'mat-mat';
        if (col.key === 'replacement') return 'mat-rep';
        if (col.key === 'weight') return 'mat-wt';
        if (col.key === 'amount') return 'mat-amt';
        if (col.key === 'usage') return 'mat-usage';
        if (col.key === 'is_buy') return 'mat-buy';
        if (col.key === 'remark') return 'mat-remark';
      }
      if (col.key === 'seq') return 'col-seq';
      if (col.key === 'name' || col.key === 'usage' || col.key === 'function') return 'col-name';
      if (col.key === 'spec' || col.key === 'model' || col.key === 'remark' || col.key === 'manufacturer') return 'col-spec';
      if (col.key === 'qty') return 'col-qty';
      if (col.key === 'unit') return 'col-unit';
      if (col.key === 'weight') return 'col-weight';
      if (col.type === 'money' || col.type === 'number' || col.align === 'right') return 'col-money';
      return 'col-spec';
    };
    let html = `<colgroup>`;
    html += `<col class="${config.tableId === 'matTable' ? 'mat-op' : 'col-op'}">`;
    columns.forEach(col => {
      if (col.width) {
        html += `<col style="width:${col.width}">`;
      } else {
        html += `<col class="${colClass(col)}">`;
      }
    });
    html += `</colgroup>`;
    html += `<thead><tr>`;
    html += `<th>操作</th>`; // row operation buttons — width handled by colgroup
    columns.forEach(col => {
      html += `<th class="${col.align === 'right' ? 'num' : ''}" title="${col.label}">${col.label}</th>`;
    });
    html += `</tr></thead><tbody>`;

    // Build rows — universal hierarchy: works for ALL dataKeys
    const issues = isMatBOM ? validateTableConsistency(dataKey) : [];
    const issueSet = new Set(issues.map(iss => iss.idx));

    // Universal: a row is a "parent" if any other row's seq starts with this seq + "."
    // For all tables, not just BOM
    function isParentRow(item, allRows) {
      if (isMatBOM) return isSubtotalRow(item, allRows);
      const seqStr = String(item.seq || '').trim();
      if (!seqStr || seqStr === '一') return false;
      const prefix = seqStr + '.';
      return allRows.some(other => other !== item && String(other.seq || '').startsWith(prefix));
    }

    // Count direct children (one level deeper, not all descendants)
    function countDirectChildren(seqStr, allRows) {
      if (!seqStr || seqStr === '一') {
        // Root 「一」: direct children are top-level numbers like "1", "2"
        return allRows.filter(r => /^\d+$/.test(String(r.seq || ''))).length;
      }
      const pfx = seqStr + '.';
      const depth = seqStr.split('.').length;
      return allRows.filter(r => {
        const os = String(r.seq || '');
        return os.startsWith(pfx) && os.split('.').length === depth + 1;
      }).length;
    }

    // Compute depth from seq string: "1"=1, "1.1"=2, "1.1.1"=3, "一"=0
    function seqDepth(seqStr) {
      if (!seqStr || seqStr === '一') return 0;
      return String(seqStr).split('.').length;
    }

    // Collapse state: keyed by dataKey+seq
    const collapseKey = (seq) => `et_collapsed_${dataKey}_${seq}`;
    function isCollapsed(seq) {
      return sessionStorage.getItem(collapseKey(seq)) === '1';
    }

    // Check if row should be hidden (ancestor is collapsed)
    function isHidden(item) {
      const seqStr = String(item.seq || '');
      // Root 「一」 itself is never hidden; its collapse hides children only
      if (seqStr === '一') return false;
      // Check root 「一」 collapse — hides all descendants
      if (isCollapsed('一')) return true;
      const parts = seqStr.split('.');
      // Check if any ancestor seq is collapsed
      for (let len = 1; len < parts.length; len++) {
        const ancestorSeq = parts.slice(0, len).join('.');
        if (isCollapsed(ancestorSeq)) return true;
      }
      return false;
    }

    items.forEach((it, idx) => {
      const origIdx = origIdxMap[idx];
      const seqStr = String(it.seq || '').trim();
      const isRoot = seqStr === '一';
      const isSub = isMatBOM ? isSubtotalRow(it, allItems) : isParentRow(it, allItems);
      const dotDepth = isRoot ? 0 : seqDepth(seqStr);
      const isInconsistent = isMatBOM && isSub && issueSet.has(origIdx);
      const directChildCount = countDirectChildren(seqStr, allItems);
      const hasToggle = directChildCount >= 1;  // Show arrow when any child exists
      const hasChildren = directChildCount >= 1;
      const hidden = isHidden(it);

      // Row class hierarchy
      let rowClass = '';
      if (isRoot) {
        rowClass = 'subtotal subtotal-root';
      } else if (isSub) {
        if (dotDepth <= 1) rowClass = 'subtotal';
        else if (dotDepth === 2) rowClass = 'subtotal subtotal-deep';
        else rowClass = 'subtotal subtotal-deep subtotal-deep3';
      }
      if (isInconsistent) rowClass += ' inconsistent';
      if (hidden) rowClass += ' et-row-hidden';

      // Indent: root=0, level-1=32px (4 spaces under 「一」), deeper=+20px per level
      const INDENT_PX = 20;
      const ROOT_CHILD_BASE = 32;  // 4 spaces indent for 「一」's direct children
      const indent = isRoot ? 0 : ROOT_CHILD_BASE + Math.max(0, dotDepth - 1) * INDENT_PX;

      // Expand/collapse button: only for nodes with ≥2 direct children
      const collapsed = isCollapsed(seqStr);
      const toggleBtn = hasToggle
        ? `<button class="et-toggle-btn${collapsed ? ' collapsed' : ''}" onclick="EditableTable.toggleCollapse('${dataKey}','${seqStr}',this)" title="${collapsed ? '展开 ' + directChildCount + ' 个子行' : '收起 ' + directChildCount + ' 个子行'}">${collapsed ? '▶' : '▼'}</button>`
        : `<span style="display:inline-block;width:22px;"></span>`;

      // Level indicator dot for child rows
      const levelDot = dotDepth === 2 ? `<span class="et-level-dot d2"></span>`
                     : dotDepth === 3 ? `<span class="et-level-dot d3"></span>`
                     : dotDepth >= 4  ? `<span class="et-level-dot d4"></span>` : '';

      html += `<tr class="${rowClass}" data-idx="${idx}" data-orig-idx="${origIdx}" data-seq="${escHtml(seqStr)}" data-datakey="${dataKey}">`;

      // Action cell
      const childBtn = `<button class="row-btn child" onclick="EditableTable.addChildRow('${dataKey}',${origIdx})" title="插入子行">↳</button>`;
      if (isInconsistent) {
        const iss = issues.find(iss=>iss.idx===origIdx);
        const tip = iss ? `期望重量:${iss.expectedWeight}T 期望金额:${iss.expectedAmount}万` : '数据不一致';
        html += `<td class="et-action-cell" title="${tip}"><button class="row-btn row-edit-btn" onclick="EditableTable.openRowModal('${dataKey}',${origIdx})" title="弹窗编辑">✎</button><button class="row-btn del" onclick="EditableTable.deleteRow('${dataKey}',${origIdx})" title="删除行">×</button><button class="row-btn ins" onclick="EditableTable.insertAfter('${dataKey}',${origIdx})" title="插入同级行">+</button>${childBtn}<span style="color:var(--red);font-size:11px;">⚠</span></td>`;
      } else {
        html += `<td class="et-action-cell"><button class="row-btn row-edit-btn" onclick="EditableTable.openRowModal('${dataKey}',${origIdx})" title="弹窗编辑">✎</button><button class="row-btn del" onclick="EditableTable.deleteRow('${dataKey}',${origIdx})" title="删除行">×</button><button class="row-btn ins" onclick="EditableTable.insertAfter('${dataKey}',${origIdx})" title="插入同级行">+</button>${childBtn}</td>`;
      }

      columns.forEach((col, ci) => {
        const val = it[col.key];
        const isSubtotalAmountField = isSub && isMatBOM && (col.key === 'weight' || col.key === 'amount');
        const isFormula = isSubtotalAmountField || (col.formula && !isSub && isMatBOM) || (col.key === 'usage' && isSub && isMatBOM);
        const cellClass = ['editable-cell'];
        if (col.align === 'right') cellClass.push('num');
        if (isFormula) cellClass.push('formula-cell');

        // First content column: indent + toggle + level dot
        const isFirstCol = ci === 0;
        const padStyle = isFirstCol ? `padding-left:${8 + indent}px;` : '';
        const seqStyle = (col.key === 'seq') ? 'font-family:\"SF Mono\",Monaco,Consolas,monospace;font-size:11px;' : '';

        let titleAttr = '';
        if (isSubtotalAmountField) {
          titleAttr = ` title="自动汇总 = 所有直接子节点之和"`;
        } else if (col.formula && !isSub && isMatBOM) {
          titleAttr = ` title="${FormulaEngine.getMatFormula(it, dataKey).replace(/"/g, '&quot;')}"`;
        } else if (val && typeof val === 'string' && val.length > 16 && !col.formula) {
          titleAttr = ` title="${String(val).replace(/"/g, '&quot;')}"`;
        }

        html += `<td class="${cellClass.join(' ')}" style="${padStyle}${seqStyle}" data-col="${ci}" data-key="${col.key}" data-formula="${col.formula || ''}" data-idx="${idx}" data-orig-idx="${origIdx}"${titleAttr}>`;
        // For seq column: prepend toggle + level dot
        if (col.key === 'seq') {
          html += `<span style="display:inline-flex;align-items:center;gap:3px;vertical-align:middle;">${toggleBtn}${levelDot}</span>`;
        }
        html += EditableTable.cellDisplay(val, col);
        // Child count badge: only when ≥2 children (count is informative)
        if (col.key === 'seq' && directChildCount >= 2) {
          html += `<span class="et-child-count">${directChildCount}</span>`;
        }
        html += `</td>`;
      });
      html += `</tr>`;
    });

    html += `</tbody>`;
    html += `<tfoot><tr><td colspan="${columns.length + 1}" class="add-row-bar">`;
    html += `<button onclick="EditableTable.addRow('${dataKey}')">+ 添加新行</button>`;
    html += `</td></tr></tfoot>`;

    document.getElementById(tableId).innerHTML = html;

    // Update summary
    if (summaryId) {
      const totalVals = {};
      columns.filter(c => c.summary).forEach(c => { totalVals[c.key] = 0; });
      items.forEach(it => {
        columns.filter(c => c.summary).forEach(c => {
          totalVals[c.key] += parseFloat(it[c.key]) || 0;
        });
      });
      EditableTable.renderSummary(summaryId, items.length, dataKey, totalVals, columns);
    }
  },

  cellDisplay(val, col) {
    if (val === null || val === undefined || val === '') return '<span style="color:var(--text-dim);">—</span>';
    if (col.type === 'bool') {
      return val ? '<span class="tag tag-buy">外购</span>' : '<span class="tag tag-self">自制</span>';
    }
    if (col.type === 'money') return fmt(parseFloat(val) || 0, 2);
    if (col.type === 'weight') return val ? fmt(parseFloat(val) || 0, 2) : '—';
    if (col.type === 'usageRate') {
      if (val === null || val === undefined || val === '') return '<span style="color:var(--text-dim);">—</span>';
      const n = parseFloat(val);
      if (isNaN(n)) return '<span style="color:var(--text-dim);">—</span>';
      return fmt(n, 2);
    }
    if (col.type === 'int') return fmt(parseFloat(val) || 0, 0);
    if (col.type === 'number') return fmt(parseFloat(val) || 0, 2);
    // qty type: show only the numeric/text part (no unit mixing)
    if (col.type === 'qty') {
      const s = String(val);
      // If stored as formula result (number), format nicely
      if (!isNaN(parseFloat(s)) && isFinite(s)) return String(parseFloat(s) % 1 === 0 ? parseInt(s) : parseFloat(s));
      return s;
    }
    if (col.type === 'formula_result') {
      const n = parseFloat(val);
      if (isNaN(n)) return String(val);
      return n % 1 === 0 ? String(n) : fmt(n, 2);
    }
    const strVal = String(val);
    return strVal.startsWith('=') ? strVal.substring(1) : strVal;
  },

  renderSummary(summaryId, count, dataKey, totals, columns) {
    const el = document.getElementById(summaryId);
    if (!el) return;
    // 这些表格金额字段单位为"元"，汇总时需换算为万元，并标注原始元值
    const yuanDataKeys = new Set(['valve_parts', 'valve_tools', 'automation', 'monitoring', 'liaison']);
    const isYuan = yuanDataKeys.has(dataKey);
    let parts = [`共 ${count} 项`];
    columns.filter(c => c.summary).forEach(c => {
      const val = totals[c.key];
      const label = c.summaryLabel || c.label;
      if (c.type === 'money' || c.type === 'number' || c.type === 'weight') {
        if (isYuan && (c.type === 'money' || c.type === 'number')) {
          // 显示原始元值，并换算万元供参考
          parts.push(`${label}：<strong style="color:var(--text);">${fmt(val, 2)}</strong> 元 <span style="color:var(--text-dim);font-size:11px;">(≈ ${fmt(val / YUAN_TO_WAN, 4)} 万)</span>`);
        } else {
          parts.push(`${label}：<strong style="color:var(--text);">${fmt(val, 2)}</strong>`);
        }
      } else {
        parts.push(`${label}：<strong style="color:var(--text);">${fmt(val, 0)}</strong>`);
      }
    });
    el.innerHTML = parts.join(' · ');
  },


  openRowModal(dataKey, rowIdx) {
    const tableId = Object.keys(_tableConfigs).find(k => _tableConfigs[k].dataKey === dataKey);
    const config = tableId ? _tableConfigs[tableId] : null;
    if (!config) return;
    openRowEditModal('data', { dataKey, rowIdx, config });
  },

  handleClick(e, config) {
    const cell = e.target.closest('.editable-cell');
    if (!cell || cell.classList.contains('formula-cell')) return;

    const { tableId, dataKey, columns, onChange } = config;
    const colIdx = parseInt(cell.dataset.col, 10);
    const rowIdx = parseInt(cell.dataset.origIdx || cell.dataset.idx, 10);
    const col = columns[colIdx];
    const items = DATA[dataKey];
    if (!items || rowIdx >= items.length) return;

    // If already editing, don't restart
    if (cell.classList.contains('editing')) return;

    EditableTable.startEdit(cell, items[rowIdx], col, dataKey, config, () => {
      FormulaEngine.recalcTable(dataKey);
      persistData();
      EditableTable.render(config);
      if (onChange) onChange();
      // 材料表数据变动时，清除侧边栏手动覆盖，强制从材料明细重新同步
      const isMatBOM2 = ['water','gen','valve','valve_door','water_parts','gen_parts','valve_parts',
        'water_tools','gen_tools','valve_tools','automation','monitoring','liaison'].includes(dataKey);
      if (isMatBOM2) _sidebarOverrides.clear();
      renderAll();
    });
  },

  startEdit(cell, row, col, dataKey, config, onSave) {
    cell.classList.add('editing');
    const oldVal = row[col.key];
    cell.innerHTML = '';

    // 根本修复：blur 事件中绝对不能同步操作 DOM（会导致 NotFoundError）
    // 统一模式：blur 时只读取当前值（安全），DOM操作和onSave全部放入 setTimeout 延迟执行
    let _committed = false;
    const commit = (save, getNewVal) => {
      if (_committed) return;
      _committed = true;
      const newVal = (save && getNewVal) ? getNewVal() : null;
      setTimeout(() => {
        if (save && newVal !== undefined && JSON.stringify(newVal) !== JSON.stringify(oldVal)) takeProjectSnapshot('编辑表格单元格');
        if (save && newVal !== undefined) row[col.key] = newVal;
        cell.classList.remove('editing');
        cell.innerHTML = EditableTable.cellDisplay(save ? row[col.key] : oldVal, col);
        if (save) onSave();
      }, 0);
    };

    if (col.type === 'bool') {
      const sel = document.createElement('select');
      sel.innerHTML = `<option value="0" ${!oldVal ? 'selected' : ''}>自制</option><option value="1" ${oldVal ? 'selected' : ''}>外购</option>`;
      cell.appendChild(sel);
      sel.focus();
      const getBool = () => sel.value === '1';
      sel.addEventListener('blur', () => commit(true, getBool));
      sel.addEventListener('change', () => commit(true, getBool));
      sel.addEventListener('keydown', e => { if (e.key === 'Escape') commit(false, null); });

    } else if (col.type === 'material') {
      // ===== 浮层二级选择器 =====
      // 收集材料分组数据
      const catMap = {};
      const catOrder = ['板材类','型材类','铸件类','锻件类','铜材','绝缘材料','不锈钢材','管材','成品件','轴承/轴套','密封件','阀门类','其他'];
      MAT_LIB.forEach(m => {
        const cat = m.category || '其他';
        if (!catMap[cat]) catMap[cat] = [];
        if (!catMap[cat].includes(m.name)) catMap[cat].push(m.name);
      });
      for (const key of MATERIAL_PRICE_DB.keys()) {
        const libM = lookupMatLib(key);
        const cat = (libM && libM.category) ? libM.category : '其他';
        if (!catMap[cat]) catMap[cat] = [];
        if (!catMap[cat].includes(key)) catMap[cat].push(key);
      }
      const allCats = [...catOrder.filter(c => catMap[c]), ...Object.keys(catMap).filter(c => !catOrder.includes(c))];

      // 找当前值所在类别
      let initCat = allCats[0] || '';
      if (oldVal) {
        const libMatch = lookupMatLib(oldVal);
        if (libMatch && libMatch.category && catMap[libMatch.category]) initCat = libMatch.category;
        else {
          for (const [cat, names] of Object.entries(catMap)) {
            if (names.includes(oldVal)) { initCat = cat; break; }
          }
        }
      }

      // 触发按钮（显示在单元格内）
      const trigger = document.createElement('button');
      trigger.className = 'mat-picker-trigger';
      trigger.innerHTML = (oldVal ? '✏️ ' + oldVal : '📂 选择材料…') + ' <span style="font-size:10px;opacity:.6;">▼</span>';
      cell.appendChild(trigger);
      // 立刻弹出面板
      setTimeout(() => trigger.click(), 0);

      let selectedCat = initCat;
      let selectedMat = oldVal || '';
      let searchVal = '';

      function openPanel() {
        // 清理已有面板
        const oldOverlay = document.getElementById('matPickerOverlay');
        if (oldOverlay) oldOverlay.remove();

        // 计算面板定位（在触发元素附近）
        const rect = cell.getBoundingClientRect();
        let top = rect.bottom + 4;
        if (top + 400 > window.innerHeight) top = rect.top - 404;
        let left = rect.left;
        if (left + 610 > window.innerWidth) left = window.innerWidth - 614;
        left = Math.max(6, left);

        const overlay = document.createElement('div');
        overlay.id = 'matPickerOverlay';
        document.body.appendChild(overlay);

        const panel = document.createElement('div');
        panel.id = 'matPickerPanel';
        panel.style.cssText = `top:${top}px;left:${left}px;`;

        function getMatsForDisplay() {
          if (searchVal.trim()) {
            // 搜索模式：跨所有类别
            const q = searchVal.toLowerCase();
            const results = [];
            allCats.forEach(cat => {
              (catMap[cat] || []).forEach(name => {
                if (name.toLowerCase().includes(q)) results.push({ name, cat });
              });
            });
            return results;
          }
          return (catMap[selectedCat] || []).map(name => ({ name, cat: selectedCat }));
        }

        function buildPanel() {
          const mats = getMatsForDisplay();
          const isSearch = !!searchVal.trim();
          const crumbHtml = isSearch
            ? `<span>搜索 "<strong>${searchVal}</strong>" · ${mats.length} 条</span>`
            : `<span class="mp-crumb-cat">${selectedCat}</span><span style="color:var(--border-strong);">&nbsp;/&nbsp;</span><span>${(catMap[selectedCat]||[]).length} 种材料</span>`;

          panel.innerHTML = `
            <div class="mp-header">
              <div>
                <div class="mp-header-title">选择材料</div>
                <div class="mp-header-crumb">${crumbHtml}</div>
              </div>
              <button class="mp-close" id="mpClose">✕</button>
            </div>
            <div class="mp-search-bar">
              <input id="mpSearch" type="text" placeholder="🔍 输入材料名称快速搜索..." value="${searchVal}">
            </div>
            <div class="mp-body">
              <div class="mp-cats" id="mpCats">
                ${allCats.map(cat => `
                  <div class="mp-cat-item${!isSearch && cat === selectedCat ? ' active' : ''}" data-cat="${cat}">
                    <span>${cat}</span>
                    <span class="mp-cat-count">${(catMap[cat]||[]).length}</span>
                  </div>`).join('')}
              </div>
              <div class="mp-mats" id="mpMats">
                ${mats.length === 0
                  ? `<div class="mp-empty">暂无匹配材料</div>`
                  : mats.map(m => `
                    <div class="mp-mat-item${m.name === selectedMat ? ' selected' : ''}" data-name="${m.name}">
                      ${isSearch ? `<div style="font-size:10px;color:var(--text-dim);margin-bottom:2px;">${m.cat}</div>` : ''}
                      ${m.name}
                    </div>`).join('')}
              </div>
            </div>
            <div class="mp-footer">
              <span class="mp-footer-hint">${selectedMat ? '已选：<strong style="color:var(--accent-dark);">' + selectedMat + '</strong>' : '请从右侧点击选择材料'}</span>
              <div class="mp-footer-btns">
                <button class="mp-btn-cancel" id="mpCancel">取消</button>
                <button class="mp-btn-confirm" id="mpConfirm" ${!selectedMat ? 'disabled' : ''}>确认选择</button>
              </div>
            </div>`;

          document.body.appendChild(panel);

          // 滚动到当前选中类别
          if (!isSearch) {
            const activeItem = panel.querySelector('.mp-cat-item.active');
            if (activeItem) activeItem.scrollIntoView({ block: 'nearest' });
          }
          // 滚动到当前选中材料
          const selectedItem = panel.querySelector('.mp-mat-item.selected');
          if (selectedItem) selectedItem.scrollIntoView({ block: 'nearest' });

          // 聚焦搜索框
          const searchEl = panel.querySelector('#mpSearch');
          if (searchEl) { searchEl.focus(); }

          // 事件：关闭
          panel.querySelector('#mpClose').onclick = () => { overlay.remove(); panel.remove(); commit(false, null); };
          panel.querySelector('#mpCancel').onclick = () => { overlay.remove(); panel.remove(); commit(false, null); };

          // 事件：确认
          panel.querySelector('#mpConfirm').onclick = () => {
            overlay.remove(); panel.remove();
            commit(true, () => {
              if (!selectedMat) return oldVal || null;
              if (['water','gen','valve','valve_door'].includes(dataKey)) {
                const libMatch = lookupMatLib(selectedMat);
                if (libMatch) {
                  if (row.usage === null || row.usage === undefined || row.usage === '') {
                    row.usage = libMatch.usage_rate ?? findMaterialDetailDefaultUsage(selectedMat, dataKey, row);
                    // Auto-detect is_buy from usage value
                    const u = parseFloat(row.usage);
                    if (!isNaN(u) && (row.is_buy === null || row.is_buy === undefined || row.is_buy === '')) {
                      if (u > 1) row.is_buy = true;
                      else if (u > 0 && u <= 1) row.is_buy = false;
                    }
                  }
                  if (!row.category || row.category === '') row.category = libMatch.category;
                }
              }
              return selectedMat;
            });
          };

          // 事件：点击类别
          panel.querySelector('#mpCats').addEventListener('click', e => {
            const item = e.target.closest('.mp-cat-item');
            if (!item) return;
            selectedCat = item.dataset.cat;
            searchVal = '';
            buildPanel();
          });

          // 事件：点击材料（双击直接确认）
          panel.querySelector('#mpMats').addEventListener('click', e => {
            const item = e.target.closest('.mp-mat-item');
            if (!item) return;
            selectedMat = item.dataset.name;
            buildPanel();
          });
          panel.querySelector('#mpMats').addEventListener('dblclick', e => {
            const item = e.target.closest('.mp-mat-item');
            if (!item) return;
            selectedMat = item.dataset.name;
            overlay.remove(); panel.remove();
            commit(true, () => {
              if (['water','gen','valve','valve_door'].includes(dataKey)) {
                const libMatch = lookupMatLib(selectedMat);
                if (libMatch) {
                  if (row.usage === null || row.usage === undefined || row.usage === '') {
                    row.usage = libMatch.usage_rate ?? findMaterialDetailDefaultUsage(selectedMat, dataKey, row);
                    const u = parseFloat(row.usage);
                    if (!isNaN(u) && (row.is_buy === null || row.is_buy === undefined || row.is_buy === '')) {
                      if (u > 1) row.is_buy = true;
                      else if (u > 0 && u <= 1) row.is_buy = false;
                    }
                  }
                  if (!row.category || row.category === '') row.category = libMatch.category;
                }
              }
              return selectedMat;
            });
          });

          // 事件：搜索
          panel.querySelector('#mpSearch').addEventListener('input', e => {
            searchVal = e.target.value;
            buildPanel();
          });
          panel.querySelector('#mpSearch').addEventListener('keydown', e => {
            if (e.key === 'Escape') { overlay.remove(); panel.remove(); commit(false, null); }
            if (e.key === 'Enter') {
              // 若搜索结果只有一项，直接选中
              const mats2 = getMatsForDisplay();
              if (mats2.length === 1) {
                selectedMat = mats2[0].name;
                overlay.remove(); panel.remove();
                commit(true, () => {
                  if (['water','gen','valve','valve_door'].includes(dataKey)) {
                    const libMatch = lookupMatLib(selectedMat);
                    if (libMatch) {
                      if (row.usage === null || row.usage === undefined || row.usage === '') {
                        row.usage = libMatch.usage_rate ?? findMaterialDetailDefaultUsage(selectedMat, dataKey, row);
                        const u = parseFloat(row.usage);
                        if (!isNaN(u) && (row.is_buy === null || row.is_buy === undefined || row.is_buy === '')) {
                          if (u > 1) row.is_buy = true;
                          else if (u > 0 && u <= 1) row.is_buy = false;
                        }
                      }
                      if (!row.category || row.category === '') row.category = libMatch.category;
                    }
                  }
                  return selectedMat;
                });
              }
            }
          });
        }

        buildPanel();

        // 点击遮罩关闭
        overlay.addEventListener('click', () => { overlay.remove(); panel.remove(); commit(false, null); });
      }

      trigger.addEventListener('click', openPanel);

    } else if (col.key === 'usage') {
      const input = document.createElement('input');
      input.type = 'number'; input.step = '0.01'; input.min = '0';
      input.value = oldVal !== null && oldVal !== undefined ? oldVal : '';
      cell.appendChild(input); input.focus(); input.select();
      input.addEventListener('input', () => {
        const v = parseFloat(input.value);
        const bad = !isNaN(v) && (v < 0 || (v > 1 && v % 1 !== 0));
        input.classList.toggle('invalid', bad);
        input.title = bad ? '利用率(0-1之间)或数量(大于1的整数)' : '';
      });
      const getUsage = () => { const r = input.value.trim(); return r === '' ? null : Math.round(parseFloat(r) * 100) / 100; };
      input.addEventListener('blur', () => commit(true, getUsage));
      input.addEventListener('keydown', e => {
        if (e.key === 'Enter') { e.preventDefault(); commit(true, getUsage); }
        if (e.key === 'Escape') commit(false, null);
        if (e.key === 'Tab') { e.preventDefault(); commit(true, getUsage); EditableTable.focusNext(cell, config); }
      });

    } else {
      const input = document.createElement('input');
      const isNum = col.type === 'number' || col.type === 'money' || col.type === 'weight' || col.type === 'int' || col.type === 'usageRate' || col.type === 'qty';
      // For numeric cols, use text input to allow formula entry
      input.type = 'text';
      if (isNum && col.type !== 'qty') {
        input.setAttribute('inputmode', 'decimal');
      }
      input.value = oldVal !== null && oldVal !== undefined ? oldVal : '';
      // Add formula hint placeholder for numeric cells
      if (isNum) {
        input.placeholder = '数字 或 =A+B';
        input.style.cssText = 'font-family: "SF Mono", Monaco, Consolas, monospace; color: var(--text);';
      }
      cell.appendChild(input); input.focus(); input.select();

      // Show formula bar hint when typing =
      input.addEventListener('input', () => {
        if (input.value.startsWith('=')) {
          input.style.color = 'var(--purple)';
          input.style.fontStyle = 'italic';
        } else {
          input.style.color = '';
          input.style.fontStyle = '';
        }
        if (col.type === 'usageRate') {
          const v = parseFloat(input.value);
          const bad = !isNaN(v) && (v < 0 || (v > 1 && v % 1 !== 0));
          input.classList.toggle('invalid', bad);
          input.title = bad ? '利用率(0-1之间)或数量(大于1的整数)' : '';
        }
      });

      const getVal = () => {
        const raw = input.value.trim();
        if (raw === '') return null;
        // Formula evaluation: starts with =
        if (isNum && raw.startsWith('=')) {
          const expr = raw.substring(1);
          // Replace field references with row values (case-insensitive)
          let resolved = expr;
          if (row) {
            for (const [k, v] of Object.entries(row)) {
              const numV = parseFloat(v);
              if (!isNaN(numV)) {
                // Replace whole-word field name references
                resolved = resolved.replace(new RegExp('\\b' + k + '\\b', 'gi'), String(numV));
              }
            }
          }
          try {
            const result = evaluateFormulaSafe(expr, row);
            showToast('✓ 已计算: ' + result);
            return result;
          } catch(e) {
            showToast('⚠️ 计算错误: ' + e.message + '，已保存为文本');
            return raw;
          }
        }
        if (isNum && col.type !== 'qty') {
          const n = parseFloat(raw);
          return isNaN(n) ? (raw || null) : n;
        }
        if (col.type === 'usageRate') return Math.round(parseFloat(raw) * 100) / 100;
        return raw;
      };
      input.addEventListener('blur', () => commit(true, getVal));
      input.addEventListener('keydown', e => {
        if (e.key === 'Enter') { e.preventDefault(); commit(true, getVal); }
        if (e.key === 'Escape') commit(false, null);
        if (e.key === 'Tab') { e.preventDefault(); commit(true, getVal); EditableTable.focusNext(cell, config); }
      });
    }
  },

  focusNext(cell, config) {
    const tr = cell.parentElement;
    const nextCell = tr.nextElementSibling ? tr.nextElementSibling.querySelector(`[data-col="${cell.dataset.col}"]`) : null;
    if (nextCell && !nextCell.classList.contains('formula-cell')) {
      nextCell.click();
    }
  },

  deleteRow(dataKey, idx) {
    const items = DATA[dataKey];
    if (!items || idx >= items.length) return;
    const row = items[idx];
    const name = row.name || row.seq || `第${idx+1}行`;
    const seqStr = String(row.seq || '');
    // Check for child rows
    const childIndices = [];
    items.forEach((r, i) => {
      if (i !== idx && String(r.seq || '').startsWith(seqStr + '.')) childIndices.push(i);
    });
    let deleteChildren = false;
    if (childIndices.length > 0) {
      const choice = confirm(`"${name}" 下有 ${childIndices.length} 个子行。\n\n确定：同时删除所有子行\n取消：仅删除此行，保留子行`);
      deleteChildren = choice;
    } else {
      if (!confirm(`确定要删除 "${name}" 吗？`)) return;
    }
    takeProjectSnapshot('删除表格行');
    // Clean up collapse states for deleted rows
    const collapsePrefix = `et_collapsed_${dataKey}_`;
    const toDeleteSeqs = new Set();
    toDeleteSeqs.add(seqStr);
    if (deleteChildren) {
      childIndices.forEach(i => toDeleteSeqs.add(String(items[i].seq || '')));
    }
    // Remove sessionStorage keys for deleted seqs and their descendants
    for (let s = 0; s < sessionStorage.length; s++) {
      const key = sessionStorage.key(s);
      if (key && key.startsWith(collapsePrefix)) {
        const storedSeq = key.substring(collapsePrefix.length);
        if (toDeleteSeqs.has(storedSeq) || [...toDeleteSeqs].some(ds => storedSeq.startsWith(ds + '.'))) {
          sessionStorage.removeItem(key);
          s--; // Adjust index after removal
        }
      }
    }
    if (deleteChildren) {
      // Delete in reverse order to preserve indices
      const toDelete = new Set([idx, ...childIndices]);
      for (let i = items.length - 1; i >= 0; i--) {
        if (toDelete.has(i)) items.splice(i, 1);
      }
    } else {
      items.splice(idx, 1);
    }
    FormulaEngine.recalcTable(dataKey);
    persistData();
    // 材料表变动，清除侧边栏手动覆盖
    if (['water','gen','valve','valve_door','water_parts','gen_parts','valve_parts',
      'water_tools','gen_tools','valve_tools','automation','monitoring','liaison'].includes(dataKey)) {
      _sidebarOverrides.clear();
    }
    // Re-render the table that owns this data
    const config = _tableConfigs[Object.keys(_tableConfigs).find(k => _tableConfigs[k].dataKey === dataKey)];
    if (config) EditableTable.render(config);
    renderAll();
    showToast(`已删除: ${name}`);
  },

  addRow(dataKey) {
    const items = DATA[dataKey];
    if (!items) return;
    const isMatBOM = ['water','gen','valve','valve_door'].includes(dataKey);
    const newRow = {};
    if (items.length > 0) {
      Object.keys(items[0]).forEach(k => { newRow[k] = null; });
    }
    if (isMatBOM) {
      newRow.category = '';
      newRow.seq = String(items.length + 1);
      newRow.name = '新项目';
      newRow.material = '';
      newRow.replacement = '';
      newRow.weight = 0;
      newRow.usage = 0.7;
      newRow.is_buy = false;
      newRow.amount = 0;
      newRow.remark = '';
    }
    if (['water_parts','gen_parts','valve_parts'].includes(dataKey)) {
      newRow.seq = items.length + 1;
      newRow.name = '新备件';
      newRow.qty = '';
      newRow.unit = '';
      newRow.spec = '';
      newRow.self = 0;
      newRow.buy = 0;
      newRow.total = 0;
    }
    if (['water_tools','gen_tools','valve_tools'].includes(dataKey)) {
      newRow.seq = items.length + 1;
      newRow.name = '新工具';
      newRow.qty = '';
      newRow.unit = '';
      newRow.weight = 0;
      newRow.self = 0;
      newRow.buy = 0;
      newRow.total = 0;
    }
    if (dataKey === 'automation') {
      newRow.seq = items.length + 1;
      newRow.name = '新元件';
      newRow.model = '';
      newRow.unit = '个';
      newRow.qty = 1;
      newRow.unit_price = 0;
      newRow.total = 0;
      newRow.usage = '';
      newRow.manufacturer = '';
    }
    if (dataKey === 'monitoring') {
      newRow.seq = items.length + 1;
      newRow.function = '';
      newRow.name = '新设备';
      newRow.model = '';
      newRow.unit = '个';
      newRow.qty = 1;
      newRow.unit_price = 0;
      newRow.total = 0;
      newRow.remark = '';
    }
    if (dataKey === 'liaison') {
      newRow.seq = items.length + 1;
      newRow.name = '新项目';
      newRow.location = '';
      newRow.person_days = 0;
      newRow.unit_price = 0;
      newRow.total = 0;
      newRow.remark = '';
    }
    takeProjectSnapshot('新增表格行');
    items.push(newRow);
    FormulaEngine.recalcTable(dataKey);
    persistData();
    // 材料表变动，清除侧边栏手动覆盖
    if (['water','gen','valve','valve_door','water_parts','gen_parts','valve_parts',
      'water_tools','gen_tools','valve_tools','automation','monitoring','liaison'].includes(dataKey)) {
      _sidebarOverrides.clear();
    }
    // Re-render
    const config = _tableConfigs[Object.keys(_tableConfigs).find(k => _tableConfigs[k].dataKey === dataKey)];
    if (config) EditableTable.render(config);
    renderAll();
    showToast('已添加新行');
  },

  // 在指定行后插入新行
  insertAfter(dataKey, afterIdx) {
    const items = DATA[dataKey];
    if (!items || afterIdx >= items.length) return;
    const afterItem = items[afterIdx];
    const isMatBOM = ['water','gen','valve','valve_door'].includes(dataKey);

    const newRow = {};
    if (items.length > 0) {
      Object.keys(items[0]).forEach(k => { newRow[k] = null; });
    }

    // Generate next seq number
    if (isMatBOM) {
      newRow.seq = generateNextSeq(items, afterItem);
      newRow.name = '新项目';
      newRow.category = '';
      newRow.material = '';
      newRow.replacement = '';
      newRow.weight = 0;
      newRow.usage = 0.7;
      newRow.is_buy = false;
      newRow.amount = 0;
      newRow.remark = '';
      // If inserted after a subtotal (parent), inherit its category context
      if (afterItem.category && afterItem.category.trim() === '') {
        newRow.category = afterItem.category;
      }
    } else if (['water_parts','gen_parts','valve_parts'].includes(dataKey)) {
      newRow.seq = generateNextSeq(items, afterItem);
      newRow.name = '新备件';
      newRow.qty = '';
      newRow.unit = '';
      newRow.spec = '';
      newRow.self = 0;
      newRow.buy = 0;
      newRow.total = 0;
    } else if (['water_tools','gen_tools','valve_tools'].includes(dataKey)) {
      newRow.seq = generateNextSeq(items, afterItem);
      newRow.name = '新工具';
      newRow.qty = '';
      newRow.unit = '';
      newRow.weight = 0;
      newRow.self = 0;
      newRow.buy = 0;
      newRow.total = 0;
    } else if (dataKey === 'automation') {
      newRow.seq = generateNextSeq(items, afterItem);
      newRow.name = '新元件';
      newRow.model = '';
      newRow.unit = '个';
      newRow.qty = 1;
      newRow.unit_price = 0;
      newRow.total = 0;
      newRow.usage = '';
      newRow.manufacturer = '';
    } else if (dataKey === 'monitoring') {
      newRow.seq = generateNextSeq(items, afterItem);
      newRow.function = '';
      newRow.name = '';
      newRow.model = '';
      newRow.unit = '个';
      newRow.qty = 1;
      newRow.unit_price = 0;
      newRow.total = 0;
      newRow.remark = '';
    } else if (dataKey === 'liaison') {
      newRow.seq = generateNextSeq(items, afterItem);
      newRow.name = '';
      newRow.location = '';
      newRow.person_days = 0;
      newRow.unit_price = 0;
      newRow.total = 0;
      newRow.remark = '';
    }
    // Insert after the reference row
    takeProjectSnapshot('插入同级行');
    items.splice(afterIdx + 1, 0, newRow);
    FormulaEngine.recalcTable(dataKey);
    persistData();
    // 材料表变动，清除侧边栏手动覆盖
    if (['water','gen','valve','valve_door','water_parts','gen_parts','valve_parts',
      'water_tools','gen_tools','valve_tools','automation','monitoring','liaison'].includes(dataKey)) {
      _sidebarOverrides.clear();
    }
    const config = _tableConfigs[Object.keys(_tableConfigs).find(k => _tableConfigs[k].dataKey === dataKey)];
    if (config) EditableTable.render(config);
    renderAll();
    showToast('已在 ' + (afterItem.seq || afterItem.name || '') + ' 后插入新行');
  },

  toggleCollapse(dataKey, seq, btn) {
    const key = `et_collapsed_${dataKey}_${seq}`;
    const isNowCollapsed = sessionStorage.getItem(key) !== '1';
    if (isNowCollapsed) {
      sessionStorage.setItem(key, '1');
    } else {
      sessionStorage.removeItem(key);
    }
    if (btn) btn.classList.toggle('collapsed', isNowCollapsed);
    // Re-render to apply hidden classes — find config by dataKey
    const configKey = Object.keys(_tableConfigs).find(k => _tableConfigs[k].dataKey === dataKey);
    const config = configKey ? _tableConfigs[configKey] : null;
    if (config) {
      EditableTable.render(config);
    } else {
      // Fallback: try to find the table in DOM
      const visibleTable = document.querySelector(`table[data-datakey="${dataKey}"]`) || document.getElementById('matTable');
      if (visibleTable) {
        const fallbackKey = Object.keys(_tableConfigs).find(k => _tableConfigs[k].tableId === visibleTable.id);
        if (fallbackKey) EditableTable.render(_tableConfigs[fallbackKey]);
      }
    }
  },

  addChildRow(dataKey, parentIdx) {
    const items = DATA[dataKey];
    if (!items || parentIdx >= items.length) return;
    const parentItem = items[parentIdx];
    const isMatBOM = ['water','gen','valve','valve_door'].includes(dataKey);

    const newRow = {};
    Object.keys(items[0]).forEach(k => { newRow[k] = null; });

    // Generate child seq universally
    newRow.seq = generateChildSeq(items, parentItem);
    if (isMatBOM) {
      newRow.name = '新项目'; newRow.category = ''; newRow.material = '';
      newRow.replacement = ''; newRow.weight = 0; newRow.usage = 0.7;
      newRow.is_buy = false; newRow.amount = 0; newRow.remark = '';
    } else {
      // Non-BOM: copy field structure from parent, zero out numbers
      const p = items[parentIdx] || {};
      Object.keys(p).forEach(k => {
        if (k === 'seq') return;
        newRow[k] = (typeof p[k] === 'number') ? 0 : (k === 'name' || k === 'function') ? '新项目' : null;
      });
    }

    // Find insertion position: after ALL descendants of this parent (not just direct children)
    const parentSeq = String(parentItem.seq);
    let insertIdx = parentIdx;
    for (let i = parentIdx + 1; i < items.length; i++) {
      const s = String(items[i].seq || '');
      if (s.startsWith(parentSeq + '.')) {
        insertIdx = i; // any descendant
      } else {
        break; // stop at first non-descendant
      }
    }
    takeProjectSnapshot('插入子行');
    items.splice(insertIdx + 1, 0, newRow);
    // Auto-expand parent to show the new child
    const collapseKey = `et_collapsed_${dataKey}_${parentSeq}`;
    sessionStorage.removeItem(collapseKey);
    FormulaEngine.recalcTable(dataKey);
    persistData();
    _sidebarOverrides.clear();
    const config = _tableConfigs[Object.keys(_tableConfigs).find(k => _tableConfigs[k].dataKey === dataKey)];
    if (config) EditableTable.render(config);
    renderAll();
    showToast('已在 ' + (parentItem.seq || parentItem.name || '') + ' 下添加子行 ' + newRow.seq);
  }
};
