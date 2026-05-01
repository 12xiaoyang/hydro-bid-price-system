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
  DEFAULTS, state, fmt,
  _matComputed, _sidebarOverrides
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

// --- 渲染 ---
import { renderAll } from './rendering/index.js';
import { renderOverview } from './rendering/overview.js';
import { renderMachines } from './rendering/machines.js';
import { renderCharts } from './rendering/charts.js';
import { renderMaterials } from './rendering/materials.js';
import { renderParts, renderTools } from './rendering/parts-tools.js';
import { renderAuto } from './rendering/automation.js';
import { renderTransport } from './rendering/transport.js';
import { renderLiaison } from './rendering/liaison.js';
import { renderAgency } from './rendering/agency.js';
import { renderMatLib, renderImportLog, toggleMatLibGroup, handleMatLibEdit, addMatLibRow, deleteMatLibItem, exportMatLib, importMaterials, cancelImport, confirmImport, batchUpdatePrices, lookupMatLib, _importPreview } from './rendering/material-lib.js';
import { renderScenarios, saveScenario, loadScenario, deleteScenario, resetDefaults, jumpToMaterial, syncToggles, updateSliderDisplays } from './rendering/scenarios.js';
import { renderBidAnalysis, updateExportButtons } from './rendering/bid-analysis.js';

// --- UI 模块 ---
import { handlePrint, exportCSV } from './export.js';
import { setupEvents, handleMachineToggle, updatePageTitle } from './ui/events.js';
import { setupContextMenu } from './ui/context-menu.js';
import { setupUI, toggleSidebar } from './ui/index.js';
import { setupKeyboard } from './ui/keyboard.js';
import {
  applyResizableTables, applyColResize,
  resetAllResizableTableSizes, resetResizableTableSize,
  TABLE_RESIZE_STORAGE_KEY, COL_RESIZE_KEY
} from './ui/column-resize.js';

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

// 渲染
window.renderAll = renderAll;
window.renderOverview = renderOverview;
window.renderMachines = renderMachines;
window.renderCharts = renderCharts;
window.renderMaterials = renderMaterials;
window.renderParts = renderParts;
window.renderTools = renderTools;
window.renderAuto = renderAuto;
window.renderTransport = renderTransport;
window.renderLiaison = renderLiaison;
window.renderAgency = renderAgency;
window.renderMatLib = renderMatLib;
window.renderImportLog = renderImportLog;
window.toggleMatLibGroup = toggleMatLibGroup;
window.handleMatLibEdit = handleMatLibEdit;
window.addMatLibRow = addMatLibRow;
window.deleteMatLibItem = deleteMatLibItem;
window.exportMatLib = exportMatLib;
window.importMaterials = importMaterials;
window.cancelImport = cancelImport;
window.confirmImport = confirmImport;
window.batchUpdatePrices = batchUpdatePrices;
window.lookupMatLib = lookupMatLib;
window._importPreview = _importPreview;
window.renderScenarios = renderScenarios;
window.saveScenario = saveScenario;
window.loadScenario = loadScenario;
window.deleteScenario = deleteScenario;
window.resetDefaults = resetDefaults;
window.jumpToMaterial = jumpToMaterial;
window.syncToggles = syncToggles;
window.updateSliderDisplays = updateSliderDisplays;
window.renderBidAnalysis = renderBidAnalysis;
window.updateExportButtons = updateExportButtons;

// UI
window.handlePrint = handlePrint;
window.exportCSV = exportCSV;
window.handleMachineToggle = handleMachineToggle;
window.updatePageTitle = updatePageTitle;
window.toggleSidebar = toggleSidebar;
window.applyResizableTables = applyResizableTables;
window.applyColResize = applyColResize;
window.resetAllResizableTableSizes = resetAllResizableTableSizes;
window.resetResizableTableSize = resetResizableTableSize;
window._matComputed = _matComputed;
window._sidebarOverrides = _sidebarOverrides;

// ===== 初始化：UI、事件、键盘、右键菜单 =====
setupUI();
setupContextMenu();
setupKeyboard();
setupEvents();

// Override renderAll to auto-apply resizable tables after every render
(function() {
  const originalRenderAll = renderAll;
  window.renderAll = function() {
    const result = originalRenderAll.apply(this, arguments);
    setTimeout(applyResizableTables, 0);
    return result;
  };
})();

// Override EditableTable.render to auto-apply column resize
(function() {
  const origRender = window.EditableTable.render.bind(window.EditableTable);
  window.EditableTable.render = function(config) {
    origRender(config);
    setTimeout(() => {
      const table = document.getElementById(config.tableId);
      if (table) applyColResize(table);
    }, 0);
  };
})();

// 初始化：加载持久化数据 + 恢复项目状态
if (window.loadPersistedData()) {
  // loaded
}
if (window.DATA._sidebar || window.DATA._state || window.DATA._matLib || window.DATA._importLog) {
  window.restoreProjectState({ data: window.DATA, _sidebar: window.DATA._sidebar, _state: window.DATA._state, _matLib: window.DATA._matLib, _importLog: window.DATA._importLog }, { silent: true });
  delete window.DATA._sidebar; delete window.DATA._state; delete window.DATA._matLib; delete window.DATA._importLog; delete window.DATA._projectVersion; delete window.DATA._exportedAt;
  window.persistData();
}
window.updateSliderDisplays();
window.renderAll();
window.applyResizableTables();

console.log('Hydro Bid System 模块化入口已加载');
