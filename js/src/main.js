// js/src/main.js — 项目入口
// Phase 1: 导入所有模块，通过 window 暴露给内联 onclick

import * as Data from './data.js';
import { FormulaEngine } from '../engine.js';
import { openRowEditModal, closeRowEditModal, EditableTable } from '../editor.js';
import { ImportWizard, TABLE_SCHEMAS, FIELD_ALIASES } from '../import-wizard.js';
import {
  DATA_BACKUP, resetDataTable, STORAGE_KEY, PROJECT_EXPORT_VERSION, PROJECT_DATA_KEYS,
  captureProjectState, normalizeImportedProject, restoreProjectState,
  exportProjectJSON, importProjectJSON, sanitizeFileName, exportProjectFile,
  persistData, saveHTML, captureSidebarState, restoreSidebarState,
  importFullData, loadPersistedData
} from './persistence.js';
import { SNAPSHOT_MAX, takeProjectSnapshot, undoProjectSnapshot, redoProjectSnapshot } from './state.js';

// 全局数据引用（保持与现有代码兼容）
Object.assign(window, Data);
window.FormulaEngine = FormulaEngine;
window.openRowEditModal = openRowEditModal;
window.closeRowEditModal = closeRowEditModal;
window.EditableTable = EditableTable;
window.ImportWizard = ImportWizard;
window.TABLE_SCHEMAS = TABLE_SCHEMAS;
window.FIELD_ALIASES = FIELD_ALIASES;

// 持久化
window.DATA_BACKUP = DATA_BACKUP;
window.resetDataTable = resetDataTable;
window.STORAGE_KEY = STORAGE_KEY;
window.PROJECT_EXPORT_VERSION = PROJECT_EXPORT_VERSION;
window.PROJECT_DATA_KEYS = PROJECT_DATA_KEYS;
window.captureProjectState = captureProjectState;
window.normalizeImportedProject = normalizeImportedProject;
window.restoreProjectState = restoreProjectState;
window.exportProjectJSON = exportProjectJSON;
window.importProjectJSON = importProjectJSON;
window.sanitizeFileName = sanitizeFileName;
window.exportProjectFile = exportProjectFile;
window.persistData = persistData;
window.saveHTML = saveHTML;
window.captureSidebarState = captureSidebarState;
window.restoreSidebarState = restoreSidebarState;
window.importFullData = importFullData;
window.loadPersistedData = loadPersistedData;

// 快照 / 撤销重做
window.SNAPSHOT_MAX = SNAPSHOT_MAX;
window.takeProjectSnapshot = takeProjectSnapshot;
window.undoProjectSnapshot = undoProjectSnapshot;
window.redoProjectSnapshot = redoProjectSnapshot;

console.log('Hydro Bid System 模块化入口已加载');
