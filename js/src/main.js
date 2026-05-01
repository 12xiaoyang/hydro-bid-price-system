// js/src/main.js — 项目入口
// Phase 1: 导入所有模块，通过 window 暴露给内联 onclick

import * as Data from '../data.js';
import { FormulaEngine } from '../engine.js';
import { openRowEditModal, closeRowEditModal, EditableTable } from '../editor.js';
import { ImportWizard, TABLE_SCHEMAS, FIELD_ALIASES } from '../import-wizard.js';

// 全局数据引用（保持与现有代码兼容）
Object.assign(window, Data);
window.FormulaEngine = FormulaEngine;
window.openRowEditModal = openRowEditModal;
window.closeRowEditModal = closeRowEditModal;
window.EditableTable = EditableTable;
window.ImportWizard = ImportWizard;
window.TABLE_SCHEMAS = TABLE_SCHEMAS;
window.FIELD_ALIASES = FIELD_ALIASES;

console.log('✅ Hydro Bid System 模块化入口已加载');
