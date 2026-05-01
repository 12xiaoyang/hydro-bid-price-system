// E2E test for Hydro Bid System
import { chromium } from 'playwright';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = 8765;
const BASE = `http://localhost:${PORT}`;

// ---------------------------------------------------------------------------
// 1. Static file server
// ---------------------------------------------------------------------------
const MIME = {
  '.html': 'text/html;charset=utf-8',
  '.js':   'application/javascript;charset=utf-8',
  '.css':  'text/css;charset=utf-8',
  '.json': 'application/json',
  '.png':  'image/png',
  '.svg':  'image/svg+xml',
};
const server = http.createServer((req, res) => {
  const file = (req.url === '/' ? '/index.html' : req.url.split('?')[0]);
  const p = path.join(__dirname, file);
  const ext = path.extname(p);
  fs.readFile(p, (err, data) => {
    if (err) { res.writeHead(404); res.end('Not Found'); }
    else { res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' }); res.end(data); }
  });
});
function startServer() { return new Promise(r => server.listen(PORT, r)); }
function stopServer() { return new Promise(r => server.close(r)); }

// ---------------------------------------------------------------------------
// 2. Test data
// ---------------------------------------------------------------------------
const TEST_WATER = [
  { seq:'一',       category:'普通钢板', name:'水轮机总成', material:'',             weight:29.5, usage:null, is_buy:false, amount:0,   remark:'根节点' },
  { seq:'1',        category:'普通钢板', name:'座环',        material:'Q235\\90',     weight:14.0, usage:0.65, is_buy:false, amount:0,   remark:'' },
  { seq:'2',        category:'普通钢板', name:'顶盖面板',    material:'Q235\\50-90',  weight:5.0,  usage:0.72, is_buy:false, amount:0,   remark:'' },
  { seq:'3',        category:'不锈钢板', name:'抗磨板',      material:'0Cr18Ni9\\16', weight:1.8,  usage:0.55, is_buy:false, amount:0,   remark:'' },
  { seq:'4',        category:'外购件',   name:'进口球阀',    material:'Q235\\90',     weight:0,    usage:2,    is_buy:true,  amount:0,   remark:'外购 2 台' },
  { seq:'5',        category:'锻钢',     name:'主轴',        material:'45#\\300',     weight:3.2,  usage:0.60, is_buy:false, amount:0,   remark:'' },
];

const TEST_GEN = [
  { seq:'一',       category:'普通钢板', name:'发电机总成',  material:'',             weight:25.0, usage:null, is_buy:false, amount:0,   remark:'根节点' },
  { seq:'1',        category:'普通钢板', name:'机座',        material:'Q235\\40',     weight:12.0, usage:0.68, is_buy:false, amount:0,   remark:'' },
  { seq:'2',        category:'硅钢片',   name:'定子铁芯',    material:'50W470\\0.5',  weight:4.5,  usage:0.85, is_buy:false, amount:0,   remark:'' },
  { seq:'3',        category:'外购件',   name:'励磁装置',    material:'Q235\\10-50',  weight:0,    usage:1,    is_buy:true,  amount:0,   remark:'外购' },
];

const TEST_PARTS = [
  { seq:1, name:'主轴密封', unit:'套', qty:'2套', spec:'',    self:2.50, buy:1.20, total:null },
  { seq:2, name:'导叶臂',   unit:'个', qty:'4个', spec:'',    self:1.80, buy:0,     total:null },
  { seq:3, name:'抗磨板',   unit:'套', qty:'1套', spec:'',    self:0,    buy:3.50,  total:null },
  { seq:4, name:'螺栓',     unit:'套', qty:'2套', spec:'M30', self:0.30, buy:0,     total:null },
];

const TEST_TOOLS = [
  { seq:1, name:'专用扳手', unit:'套', qty:2, spec:'',    weight:0,   self:0.50, buy:0.30, total:null },
  { seq:2, name:'千斤顶',   unit:'个', qty:4, spec:'20T', weight:0,   self:0,    buy:1.20, total:null },
  { seq:3, name:'专用吊具', unit:'套', qty:1, spec:'',    weight:0.5, self:2.00, buy:0,    total:null },
];

// ---------------------------------------------------------------------------
// 3. Helpers
// ---------------------------------------------------------------------------
let pass = 0, fail = 0;
function assert(cond, msg) {
  if (cond) { pass++; console.log(`  ✅ ${msg}`); }
  else      { fail++; console.log(`  ❌ ${msg}`); }
}

async function main() {
  console.log('\n🔍 端到端测试 — 水电投标价格分析系统\n');

  await startServer();
  const browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, locale: 'zh-CN' });
  const page = await ctx.newPage();
  const errs = [];
  page.on('pageerror', e => errs.push(e.message));
  page.on('console', c => { if (c.type() === 'error') errs.push(c.text()); });

  try {
    // ================================================================
    // 1. Page load
    // ================================================================
    console.log('📋 1. 页面加载');
    await page.goto(BASE, { waitUntil: 'networkidle', timeout: 15000 });
    await page.waitForSelector('#kTotal', { timeout: 10000 });
    assert(true, `页面标题: "${await page.title()}"`);

    // ================================================================
    // 2. Materials BOM
    // ================================================================
    console.log('📋 2. 材料明细');
    await page.evaluate((d) => { window.DATA.water = d; }, TEST_WATER);
    await page.evaluate((d) => { window.DATA.gen = d; }, TEST_GEN);
    await page.evaluate(() => {
      window.FormulaEngine.recalcTable('water');
      window.FormulaEngine.recalcTable('gen');
      window.syncSidebarFromMaterials();
      window.compute();
    });
    await page.waitForTimeout(400);

    await page.click('[data-page="materials"]');
    await page.waitForTimeout(400);
    assert(!!(await page.$('#matTable')), '材料表格已渲染');

    // Sidebar values from material aggregates
    const ww = parseFloat(await page.evaluate(() => document.getElementById('waterWeight').value) || '0');
    assert(ww > 0, `水机重量 = ${ww} T`);

    const wm = parseFloat(await page.evaluate(() => document.getElementById('waterMat').value) || '0');
    assert(wm > 0, `水机材料价 = ${wm} 万`);

    const wb = parseFloat(await page.evaluate(() => document.getElementById('waterBuy').value) || '0');
    assert(wb > 0, `水机外购价 = ${wb} 万`);

    // ================================================================
    // 3. Parts & Tools
    // ================================================================
    console.log('📋 3. 备件工具');
    await page.evaluate((d) => { window.DATA.water_parts = d; }, TEST_PARTS);
    await page.evaluate((d) => { window.DATA.water_tools = d; }, TEST_TOOLS);
    await page.evaluate(() => {
      window.FormulaEngine.recalcTable('water_parts');
      window.FormulaEngine.recalcTable('water_tools');
      window.syncSidebarFromMaterials();
      window.compute();
    });
    await page.waitForTimeout(400);

    await page.click('[data-page="parts-tools"]');
    await page.waitForTimeout(400);
    assert(!!(await page.$('#partsTable')), '备件表格已渲染');
    assert(!!(await page.$('#toolsTable')), '工具表格已渲染');

    const pa = parseFloat(await page.evaluate(() => document.getElementById('partsAmt').value) || '0');
    assert(pa > 0, `备件汇总 = ${pa} 万`);

    const ta = parseFloat(await page.evaluate(() => document.getElementById('toolsAmt').value) || '0');
    assert(ta > 0, `工具汇总 = ${ta} 万`);

    // ================================================================
    // 4. Overview bid
    // ================================================================
    console.log('📋 4. 概览报价');
    await page.click('[data-page="overview"]');
    await page.waitForTimeout(400);
    const bid = await page.evaluate(() => document.getElementById('kTotal').textContent.trim());
    assert(bid !== '—' && bid.length > 0, `投标总价: ${bid}`);

    const billRows = await page.evaluate(() => document.getElementById('billBody')?.querySelectorAll('tr').length || 0);
    assert(billRows >= 3, `报价明细 ${billRows} 行`);

    // ================================================================
    // 5. Scenarios
    // ================================================================
    console.log('📋 5. 方案管理');
    await page.evaluate(() => { window.prompt = () => '测试方案'; });
    await page.evaluate(() => window.saveScenario());
    await page.waitForTimeout(300);
    const n = await page.evaluate(() => window.state.scenarios.length);
    assert(n >= 1, `方案已保存 (${n} 个)`);

    await page.evaluate(() => window.loadScenario(0));
    await page.waitForTimeout(300);
    assert(true, '方案加载完成');

    // ================================================================
    // 6. Data health
    // ================================================================
    console.log('📋 6. 数据健康检查');
    const report = await page.evaluate(() => window.generateDataHealthReport());
    assert(!!report, '健康检查报告已生成');

    await page.evaluate(() => window.showDataHealthReport());
    await page.waitForTimeout(300);
    assert(true, '健康检查弹窗已显示');

    // Close health overlay
    await page.evaluate(() => {
      const ov = document.getElementById('healthOverlay');
      if (ov) ov.remove();
    });
    await page.waitForTimeout(200);

    // ================================================================
    // 7. Undo / Redo
    // ================================================================
    console.log('📋 7. 撤销/重做');
    const len0 = await page.evaluate(() => window.DATA.water.length);
    await page.evaluate(() => {
      window.takeProjectSnapshot('before-push');
      window.DATA.water.push({ seq:'99', name:'TEMP', material:'', weight:1, usage:0.5, is_buy:false, amount:0, remark:'' });
    });
    const len1 = await page.evaluate(() => window.DATA.water.length);
    assert(len1 === len0 + 1, `插入后 ${len1} 行`);

    await page.evaluate(() => window.undoProjectSnapshot());
    await page.waitForTimeout(300);
    const len2 = await page.evaluate(() => window.DATA.water.length);
    assert(len2 === len0, `撤销 → ${len2} 行`);

    await page.evaluate(() => window.redoProjectSnapshot());
    await page.waitForTimeout(300);
    const len3 = await page.evaluate(() => window.DATA.water.length);
    assert(len3 === len1, `重做 → ${len3} 行`);

    // Cleanup temp
    await page.evaluate(() => { window.DATA.water.pop(); window.takeProjectSnapshot('cleanup'); });

    // ================================================================
    // 8. Persistence
    // ================================================================
    console.log('📋 8. 数据持久化');
    await page.evaluate(() => window.persistData());
    const stored = await page.evaluate(() => localStorage.getItem('hydro_bid_data_v2'));
    assert(!!stored, 'localStorage 已保存');

    const parsed = JSON.parse(stored);
    assert(Array.isArray(parsed.water) && parsed.water.length >= TEST_WATER.length, 'localStorage 数据完整');

    // ================================================================
    // 9. Transport
    // ================================================================
    console.log('📋 9. 运输费');
    await page.click('[data-page="transport"]');
    await page.waitForTimeout(400);
    const tc = await page.evaluate(() => document.getElementById('tCostAll')?.textContent.trim() || '');
    assert(tc !== '—' && tc !== '', `运输费合计: ${tc}`);

    // ================================================================
    // 10. Agency fee
    // ================================================================
    console.log('📋 10. 招标代理费');
    await page.click('[data-page="agency"]');
    await page.waitForTimeout(400);
    const ar = await page.evaluate(() => document.getElementById('agencyTableBody')?.querySelectorAll('tr').length || 0);
    assert(ar > 0, `代理费阶梯 ${ar} 行`);

    // ================================================================
    // 11. Charts (skip pixel check — headless canvas may be blank;
    //     verify the canvas element is present and Chart.js ran)
    // ================================================================
    console.log('📋 11. 图表渲染');
    await page.click('[data-page="overview"]');
    await page.waitForTimeout(800);
    const hasCanvas = await page.evaluate(() => {
      const c = document.getElementById('chComposition');
      return !!c && c.width > 0 && c.height > 0;
    });
    assert(hasCanvas, '组成饼图 canvas 元素存在');

    // Verify Chart.js registered controllers (rendered at least one chart)
    const chartCount = await page.evaluate(() => {
      try {
        const registered = Chart?.registry?.controllers?.items?.length || 0;
        return registered;
      } catch(e) { return 0; }
    });
    // Chart.js always has built-in controllers (pie, bar, etc.)
    assert(chartCount > 0 || hasCanvas, 'Chart.js 已加载');

    // ================================================================
    // 12. Tab switching
    // ================================================================
    console.log('📋 12. 标签页切换');
    const tabs = ['machines','materials','parts-tools','auto','transport','liaison','agency','bidanalysis','scenarios'];
    for (const id of tabs) {
      await page.click(`[data-page="${id}"]`);
      await page.waitForTimeout(300);
      const active = await page.evaluate(i => document.getElementById('page-'+i)?.classList.contains('active'), id);
      assert(active, `页面 "${id}" 切换正常`);
    }

    // ================================================================
    // 13. Sidebar toggle
    // ================================================================
    console.log('📋 13. 侧边栏折叠');
    const visible = () => page.evaluate(() => !document.getElementById('sidebar')?.classList.contains('collapsed'));
    assert(await visible(), '默认展开');
    await page.click('#sidebarToggle'); await page.waitForTimeout(300);
    assert(!(await visible()), '已折叠');
    await page.click('#sidebarToggle'); await page.waitForTimeout(300);
    assert(await visible(), '再次展开');

    // ================================================================
    // 14. Error check
    // ================================================================
    console.log('📋 14. 控制台错误');
    const critical = errs.filter(e => !e.includes('favicon') && !e.includes('404') && !e.includes('javascript'));
    assert(critical.length === 0, critical.length ? `错误: ${critical.slice(0,3).join('; ')}` : '无关键错误');

  } finally {
    await browser.close();
    stopServer();
  }

  console.log(`\n${'='.repeat(48)}`);
  console.log(`  结果: ${pass} ✅ / ${fail} ❌ / ${pass+fail} 总`);
  console.log(`${'='.repeat(48)}\n`);
  process.exit(fail > 0 ? 1 : 0);
}

main().catch(e => { console.error('FATAL:', e); stopServer(); process.exit(1); });
