// js/src/main.js — 项目入口
// Phase 1: 导入所有模块，通过 window 暴露给内联 onclick

import * as Data from './data.js';
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

// --- 业务逻辑 ---
import { FormulaEngine, MAT_LIB, MAT_IMPORT_LOG,
  getInputs, isSubtotalRow, isDirectChild,
  aggregateMatTable, aggregatePartsTools, aggregateSimple, aggregateMatTableValve,
  getEnabledPartsKeys, getEnabledToolsKeys, aggregatePartsToolsWeight,
  hasAnyMachine, getAvailablePartsTabs, getAvailableToolsTabs,
  autoSwitchPartsTab, autoSwitchToolsTab,
  validateTableConsistency, validateAllTables, fixAllConsistency,
  syncSidebarFromMaterials, setSidebarVal, checkSidebarConsistency,
  compute, calcAgencyFee, animateNum,
  generateNextSeq, generateChildSeq,
  DEFAULTS, state, fmt
} from './calculation.js';

// --- 健康检查 ---
import {
  escapeRegExp, evaluateFormulaSafe, _rowContext,
  autoFixMissingSeqs, autoFixUsageRates, autoFixSequences,
  autoFixNegativeValues, autoFixDuplicateSeqs, autoFixEmptyRows, autoFixBuyMismatch,
  generateDataHealthReport, TABLE_LABELS,
  _navigateErrorByIdx, _navigateToError, _highlightErrorRow, showDataHealthReport,
  showToast, _tableConfigs
} from './health.js';

// 全局数据引用（保持与现有代码兼容）
Object.assign(window, Data);
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

// 健康检查
window.escapeRegExp = escapeRegExp;
window.evaluateFormulaSafe = evaluateFormulaSafe;
window._rowContext = _rowContext;
window.autoFixMissingSeqs = autoFixMissingSeqs;
window.autoFixUsageRates = autoFixUsageRates;
window.autoFixSequences = autoFixSequences;
window.autoFixNegativeValues = autoFixNegativeValues;
window.autoFixDuplicateSeqs = autoFixDuplicateSeqs;
window.autoFixEmptyRows = autoFixEmptyRows;
window.autoFixBuyMismatch = autoFixBuyMismatch;
window.generateDataHealthReport = generateDataHealthReport;
window.TABLE_LABELS = TABLE_LABELS;
window._navigateErrorByIdx = _navigateErrorByIdx;
window._navigateToError = _navigateToError;
window._highlightErrorRow = _highlightErrorRow;
window.showDataHealthReport = showDataHealthReport;
window.showToast = showToast;
window._tableConfigs = _tableConfigs;

// 业务逻辑
window.FormulaEngine = FormulaEngine;
window.MAT_LIB = MAT_LIB;
window.MAT_IMPORT_LOG = MAT_IMPORT_LOG;
window.generateNextSeq = generateNextSeq;
window.generateChildSeq = generateChildSeq;
window.getInputs = getInputs;
window.isSubtotalRow = isSubtotalRow;
window.isDirectChild = isDirectChild;
window.aggregateMatTable = aggregateMatTable;
window.aggregatePartsTools = aggregatePartsTools;
window.aggregateSimple = aggregateSimple;
window.aggregateMatTableValve = aggregateMatTableValve;
window.getEnabledPartsKeys = getEnabledPartsKeys;
window.getEnabledToolsKeys = getEnabledToolsKeys;
window.aggregatePartsToolsWeight = aggregatePartsToolsWeight;
window.hasAnyMachine = hasAnyMachine;
window.getAvailablePartsTabs = getAvailablePartsTabs;
window.getAvailableToolsTabs = getAvailableToolsTabs;
window.autoSwitchPartsTab = autoSwitchPartsTab;
window.autoSwitchToolsTab = autoSwitchToolsTab;
window.validateTableConsistency = validateTableConsistency;
window.validateAllTables = validateAllTables;
window.fixAllConsistency = fixAllConsistency;
window.syncSidebarFromMaterials = syncSidebarFromMaterials;
window.setSidebarVal = setSidebarVal;
window.checkSidebarConsistency = checkSidebarConsistency;
window.compute = compute;
window.calcAgencyFee = calcAgencyFee;
window.animateNum = animateNum;
window.DEFAULTS = DEFAULTS;
window.state = state;
window.fmt = fmt;

console.log('Hydro Bid System 模块化入口已加载');
