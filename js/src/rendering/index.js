import { syncSidebarFromMaterials, compute } from '../calculation.js';
import { renderOverview } from './overview.js';
import { renderMachines } from './machines.js';
import { renderCharts } from './charts.js';
import { renderTransport } from './transport.js';
import { renderAgency } from './agency.js';
import { renderBidAnalysis, updateExportButtons } from './bid-analysis.js';
import { renderMaterials } from './materials.js';
import { renderParts, renderTools } from './parts-tools.js';
import { renderAuto } from './automation.js';
import { renderLiaison } from './liaison.js';
import { renderMatLib, renderImportLog } from './material-lib.js';
import { renderScenarios } from './scenarios.js';
import { showToast } from '../health.js';

// ============ 渲染所有 ============
export function renderAll() {
  const safeRender = function(name, fn) {
    try { fn(); } catch(e) {
      console.error('renderAll: ' + name + ' 失败:', e);
      if (!window._renderErrorShown) {
        window._renderErrorShown = true;
        showToast('渲染 ' + name + ' 时出错，部分内容可能未更新');
      }
    }
  };
  window._renderErrorShown = false;
  safeRender('syncSidebarFromMaterials', syncSidebarFromMaterials);
  var r;
  try { r = compute(); } catch(e) { console.error('compute 失败:', e); showToast('计算时出错'); return; }
  safeRender('renderOverview', function() { renderOverview(r); });
  safeRender('renderMachines', function() { renderMachines(r); });
  safeRender('renderCharts', function() { renderCharts(r); });
  safeRender('renderTransport', function() { renderTransport(r); });
  safeRender('renderAgency', function() { renderAgency(r); });
  safeRender('renderBidAnalysis', function() { renderBidAnalysis(r); });
  safeRender('renderMaterials', renderMaterials);
  safeRender('renderParts', renderParts);
  safeRender('renderTools', renderTools);
  safeRender('renderAuto', renderAuto);
  safeRender('renderLiaison', renderLiaison);
  safeRender('renderMatLib', renderMatLib);
  safeRender('renderScenarios', renderScenarios);
  safeRender('renderImportLog', renderImportLog);
  safeRender('updateExportButtons', updateExportButtons);
}
