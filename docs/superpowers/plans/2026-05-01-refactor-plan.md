# 项目重构实现计划：ES Module 渐进式拆分

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将 app.js（3452 行/121 函数）按职责拆分为 ES Module，用 esbuild 打包，保持双击 HTML 可用。

**Architecture:** data.js 作为零依赖数据层，persistence/state/health/calculation 作为逻辑层，rendering/ui/export 作为展示层，main.js 作为入口组装所有模块。esbuild --bundle 输出单文件，兼容 file:// 协议。

**Tech Stack:** ES Module (import/export), esbuild (bundler), vanilla JS (无框架变更)

---

## 文件结构映射

| 目标模块 | 源文件 | 职责 |
|----------|--------|------|
| `src/data.js` | `js/data.js` (改造) | DATA, MAT_LIB, MATERIAL_PRICE_DB, PROJECT_DATA_KEYS |
| `src/persistence.js` | 从 app.js 提取 | localStorage, 项目 JSON 导入导出, saveHTML |
| `src/state.js` | 从 app.js 提取 | 快照, 撤销/重做, stableClone |
| `src/health.js` | 从 app.js 提取 | autoFix* 函数, generateDataHealthReport |
| `src/calculation.js` | engine.js + app.js 计算函数 | FormulaEngine, 汇总计算, 序号生成 |
| `src/editor.js` | `js/editor.js` (改造) | RowEditor, EditableTable |
| `src/import-wizard.js` | `js/import-wizard.js` (改造) | Excel 导入向导 |
| `src/rendering/*.js` | 从 app.js 提取 | 12 个渲染模块 |
| `src/ui/*.js` | 从 app.js 提取 | 事件/主题/侧边栏/菜单/列宽 |
| `src/export.js` | 从 app.js 提取 | CSV 导出 / PDF 打印 |
| `src/main.js` | 新建 | 入口, import 所有模块, window.* 挂载, 初始化 |
| `dist/bundle.js` | esbuild 输出 | HTML 加载的最终文件 |

---

## Phase 1：搭建骨架

### Task 1.1：初始化构建环境

**Files:**
- Create: `package.json`
- Create: `js/src/` 目录
- Modify: `js/data.js` → 添加 export

- [ ] **Step 1: 创建 package.json**

```bash
cd "c:/Users/Yang/Desktop/水电站投标价格分析系统 · Pro files"
npm init -y
npm install esbuild --save-dev
```

- [ ] **Step 2: 在 package.json 中添加构建脚本**

编辑 `package.json`，在 `"scripts"` 中添加：

```json
"build": "esbuild js/src/main.js --bundle --outfile=js/dist/bundle.js",
"watch": "esbuild js/src/main.js --bundle --outfile=js/dist/bundle.js --watch"
```

- [ ] **Step 3: 创建目录结构**

```bash
mkdir -p js/src js/dist
```

- [ ] **Step 4: 为 js/data.js 添加 export**

在 `js/data.js` 文件末尾添加：

```javascript
export { DATA, MAT_LIB, MATERIAL_PRICE_DB, sectionToggleDefaults };
```

同时给每个声明加上 `export` 关键字：

```javascript
// 文件顶部 const DATA 改为：
export const DATA = { ... };
export const MAT_LIB = [...];
export const MATERIAL_PRICE_DB = new Map([...]);
export const sectionToggleDefaults = { ... };
```

- [ ] **Step 5: 验证构建**

```bash
npx esbuild js/src/main.js --bundle --outfile=js/dist/bundle.js
```

预期输出: 无错误（即使 main.js 尚不存在，esbuild 会报 ENOENT，这是预期的，下一步解决）。

- [ ] **Step 6: 创建 js/src/main.js 入口文件**

```javascript
// js/src/main.js — 项目入口
// Phase 1: 导入所有模块，通过 window 暴露给内联 onclick

import * as Data from './data.js';

// 全局数据引用（保持与现有代码兼容）
Object.assign(window, Data);

console.log('✅ Hydro Bid System 模块化入口已加载');
```

- [ ] **Step 7: 构建并验证**

```bash
npm run build
```

预期输出: `js/dist/bundle.js` 生成成功，无报错。

- [ ] **Step 8: 修改 index.html 加载 bundle.js**

将 `index.html` 中所有 `<script src="js/...">` 标签替换为单个标签：

```html
<!-- 替换前：多个 script 标签 -->
<script src="js/data.js"></script>
<script src="js/app.js"></script>
<script src="js/editor.js"></script>
<script src="js/engine.js"></script>
<script src="js/import-wizard.js"></script>

<!-- 替换后：单个 bundle -->
<script src="js/dist/bundle.js"></script>
```

- [ ] **Step 9: 验证页面可打开**

双击 `index.html`，确认页面正常渲染，控制台无报错。

- [ ] **Step 10: 提交**

```bash
git add package.json js/dist/bundle.js js/src/main.js js/data.js index.html
git rm js/data.js  # 已迁移到 js/src/data.js
git commit -m "build: esbuild 构建环境 + 模块入口 + data.js 改造为 ES Module"
```

### Task 1.2：为现有模块文件添加 export

**Files:**
- Modify: `js/editor.js`
- Modify: `js/engine.js`
- Modify: `js/import-wizard.js`
- Modify: `js/src/main.js`

- [ ] **Step 1: 为 engine.js 添加 export**

在文件末尾添加：

```javascript
export { FormulaEngine };
```

确认 FormulaEngine 定义处添加 export：

```javascript
// 找到 const FormulaEngine = { ... } 改为：
export const FormulaEngine = { ... };
```

- [ ] **Step 2: 为 editor.js 添加 export**

找到 `function openRowEditModal(kind, payload)` — 添加 `export` 关键字：

```javascript
export function openRowEditModal(kind, payload) { ... }
```

找到 `function closeRowEditModal()` — 添加 `export`：

```javascript
export function closeRowEditModal() { ... }
```

找到 `const EditableTable = {` — 改为：

```javascript
export const EditableTable = { ... };
```

- [ ] **Step 3: 为 import-wizard.js 添加 export**

在文件末尾添加：

```javascript
export { ImportWizard, TABLE_SCHEMAS, FIELD_ALIASES };
```

找到 `const TABLE_SCHEMAS = {` 改为：

```javascript
export const TABLE_SCHEMAS = { ... };
```

找到 `const FIELD_ALIASES = {` 改为：

```javascript
export const FIELD_ALIASES = { ... };
```

找到 `const ImportWizard = {` 改为：

```javascript
export const ImportWizard = { ... };
```

- [ ] **Step 4: 更新 main.js 导入所有模块**

```javascript
// js/src/main.js
import * as Data from './data.js';
import { FormulaEngine } from '../engine.js';
import { openRowEditModal, closeRowEditModal, EditableTable } from '../editor.js';
import { ImportWizard, TABLE_SCHEMAS, FIELD_ALIASES } from '../import-wizard.js';

// 保持全局兼容（内联 onclick 需要）
Object.assign(window, Data);
window.FormulaEngine = FormulaEngine;
window.openRowEditModal = openRowEditModal;
window.closeRowEditModal = closeRowEditModal;
window.EditableTable = EditableTable;
window.ImportWizard = ImportWizard;
window.TABLE_SCHEMAS = TABLE_SCHEMAS;
window.FIELD_ALIASES = FIELD_ALIASES;
```

- [ ] **Step 5: 构建并验证**

```bash
npm run build
```

预期: 构建成功，无报错。

双击 `index.html`，验证所有页面功能正常（导入、编辑、计算）。

- [ ] **Step 6: 提交**

```bash
git add -A
git commit -m "build: editor/engine/import-wizard 添加 export，main.js 统一导入"
```

### Task 1.3：迁移 data.js 到 src 目录

**Files:**
- Modify: `js/src/data.js` (将 js/data.js 内容移入)
- Delete: `js/data.js` (旧文件)

- [ ] **Step 1: 复制 js/data.js 到 js/src/data.js**

```bash
cp js/data.js js/src/data.js
```

- [ ] **Step 2: 更新 js/src/data.js，将末尾的 export 行整合到声明中**

```javascript
// 文件顶部添加：
export const DATA = { ... };
export const MAT_LIB = [...];
export const MATERIAL_PRICE_DB = new Map([...]);
export const sectionToggleDefaults = { ... };
```

- [ ] **Step 3: 更新 main.js 的 import 路径**

```javascript
// 将:
import * as Data from './data.js';
// 改为:
import * as Data from './src/data.js';
```

- [ ] **Step 4: 删除旧的 js/data.js**

```bash
git rm js/data.js
```

- [ ] **Step 5: 构建并验证**

```bash
npm run build
```

双击 index.html, 确认功能正常。

- [ ] **Step 6: 提交**

```bash
git add -A
git commit -m "refactor: data.js 迁移至 js/src/data.js"
```

Phase 1 退出确认：`npm run build` 无错误，页面所有功能与重构前一致。

---

## Phase 2：逐模块提取

### 通用提取流程（每个模块相同）

每个模块的提取遵循相同操作模式，后续任务只标注「函数清单」和「import 变更」，不再重复操作步骤：

```
1. 在 js/src/ 下创建 <module>.js
2. 从 app.js 中拷贝相关函数，添加 export
3. 在 main.js 中添加 import + window.* 挂载
4. npm run build → 确认无报错
5. 从 app.js 中删除已移出的函数
6. npm run build → 确认无报错
7. 双击 index.html 验证功能
8. git add -A && git commit
```

### Task 2.1：提取 persistence.js

**Files:**
- Create: `js/src/persistence.js`
- Modify: `js/app.js` (删除已提取部分)

**函数清单（从 app.js 中拷贝）：**

| app.js 行号 | 函数/变量 | 说明 |
|-------------|-----------|------|
| 3 | `DATA_BACKUP` | 数据备份对象 |
| 10 | `resetDataTable(key)` | 重置数据表 |
| 22 | `STORAGE_KEY` | localStorage 键名 |
| 23 | `PROJECT_EXPORT_VERSION` | 版本号 |
| 25 | `PROJECT_DATA_KEYS` | 数据表键名列表 |
| 32 | `captureProjectState()` | 捕获项目状态快照 |
| 35 | `normalizeImportedProject(input)` | 标准化导入项目 |
| 42 | `restoreProjectState(pkg, opts)` | 恢复项目状态 |
| 58 | `exportProjectJSON()` | 导出项目 JSON 字符串 |
| 59 | `importProjectJSON(text)` | 导入项目 JSON |
| 60 | `sanitizeFileName(name)` | 清理文件名 |
| 61 | `exportProjectFile()` | 导出项目文件 |
| 408 | `persistData()` | 持久化到 localStorage |
| 424 | `saveHTML()` | 保存为 HTML 文件 |
| 470 | `captureSidebarState()` | 捕获侧边栏状态 |
| 494 | `restoreSidebarState(sidebar)` | 恢复侧边栏状态 |
| 518 | `importFullData(event)` | 导入完整数据 |
| 537 | `loadPersistedData()` | 加载持久化数据 |

- [ ] **Step 1: 创建 js/src/persistence.js 并拷贝上述函数**

所有函数添加 `export` 关键字。

额外注意：`exportProjectFile()` 中调用了 `generateDataHealthReport()` 和 `showDataHealthReport()` —— 这两个在 health.js 中。在 main.js 中 import persistence.js 之后再 import health.js，确保运行时可用。

- [ ] **Step 2: 更新 main.js**

```javascript
import { DATA_BACKUP, resetDataTable, STORAGE_KEY, ... } from './src/persistence.js';

window.DATA_BACKUP = DATA_BACKUP;
window.resetDataTable = resetDataTable;
// ... 所有导出的函数
```

- [ ] **Step 3: 从 app.js 中删除提取的代码**

删除 app.js 中对应行（3-61, 408-560）。

- [ ] **Step 4: 构建 + 验证 + 提交**

### Task 2.2：提取 state.js

**Files:**
- Create: `js/src/state.js`
- Modify: `js/app.js`

**函数清单：**
| app.js 行号 | 函数/变量 |
|-------------|-----------|
| 26 | `SNAPSHOT_MAX` |
| 30 | `stableClone(obj)` |
| 31 | `getProjectDataTables()` |
| 62 | `takeProjectSnapshot(label)` |
| 63 | `undoProjectSnapshot()` |
| 64 | `redoProjectSnapshot()` |
| ~650 | `_projectUndoStack`, `_projectRedoStack`, `_isRestoringSnapshot` |

- [ ] **Step 1: 创建 js/src/state.js**

```javascript
import { captureProjectState, restoreProjectState } from './persistence.js';

// showToast 在提取时尚在 app.js(全局)，后续从 ui/index.js 导入
// 过渡期使用 window.showToast，最终改为：
// import { showToast } from './ui/index.js';

export const SNAPSHOT_MAX = 60;
let _projectUndoStack = [];
let _projectRedoStack = [];
let _isRestoringSnapshot = false;

export function stableClone(obj) { ... }
export function getProjectDataTables() { ... }
export function takeProjectSnapshot(label) { ... }
export function undoProjectSnapshot() { ... }
export function redoProjectSnapshot() { ... }
```

- [ ] **Step 2: 更新 main.js + 从 app.js 删除 + 构建 + 验证 + 提交**

### Task 2.3：提取 health.js

**Files:**
- Create: `js/src/health.js`
- Modify: `js/app.js`

**函数清单：**
| app.js 行号 | 函数/变量 |
|-------------|-----------|
| 65 | `escapeRegExp(s)` |
| 66 | `evaluateFormulaSafe(expr, row)` |
| 99 | `_rowContext(row)` |
| 111 | `autoFixMissingSeqs()` |
| 129 | `autoFixUsageRates()` |
| 150 | `autoFixSequences(dataKey)` |
| 217 | `autoFixNegativeValues()` |
| 237 | `autoFixDuplicateSeqs()` |
| 266 | `autoFixEmptyRows()` |
| 285 | `autoFixBuyMismatch()` |
| 306 | `generateDataHealthReport()` |
| 307 | `TABLE_LABELS` |
| 308 | `_navigateErrorByIdx(idx)` |
| 309 | `_navigateToError(issue)` |
| 320 | `_highlightErrorRow(tableKey, rowIdx)` |
| 340 | `showDataHealthReport(report)` |

- [ ] **Step: 创建 → 更新 main.js → 从 app.js 删除 → 构建 → 验证 → 提交**

### Task 2.4：提取 calculation.js（合并 engine.js）

**Files:**
- Create: `js/src/calculation.js`
- Delete: `js/engine.js`（合并后删除）
- Modify: `js/app.js`

**函数清单（从 app.js 中）：**
| app.js 行号 | 函数 |
|-------------|------|
| 575 | `generateNextSeq(items, afterItem)` |
| 599 | `generateChildSeq(items, parentItem)` |
| 662 | `getInputs()` |
| 681 | `isSubtotalRow(item, allItems)` |
| 694 | `isDirectChild(parentSeq, childSeq)` |
| 705 | `aggregateMatTable(dataKeys)` |
| 734 | `aggregatePartsTools(dataKeys)` |
| 754 | `aggregateSimple(dataKeys)` |
| 777 | `aggregateMatTableValve(dataKey)` |
| 794 | `getEnabledPartsKeys()` |
| 801 | `getEnabledToolsKeys()` |
| 810 | `aggregatePartsToolsWeight(dataKeys)` |
| 824 | `hasAnyMachine()` |
| 829 | `getAvailablePartsTabs()` |
| 838 | `getAvailableToolsTabs()` |
| 847 | `autoSwitchPartsTab()` |
| 855 | `autoSwitchToolsTab()` |
| 864 | `validateTableConsistency(dataKey)` |
| 898 | `validateAllTables()` |
| 903 | `fixAllConsistency()` |
| 924 | `syncSidebarFromMaterials()` |
| 1002 | `setSidebarVal(id, val)` |
| 1023 | `checkSidebarConsistency()` |
| 1062 | `compute()` |
| 1172 | `calcAgencyFee(amount)` |
| 1201 | `animateNum(el, newVal, decimals)` |

**engine.js 内容：**
- `const FormulaEngine = { recalcTable, recalcSubtotals, ... }`
- `validateTableConsistency` 也可能在 engine.js 中

- [ ] **Step: 创建 calculation.js，拷贝 app.js 中计算函数 + engine.js 全部内容**

注意：`compute()` 调用 `renderOverview()`、`renderMachines()` 等渲染函数。创建 calculation.js 时不引入渲染函数（通过 window 或 import 在 main.js 中连接）。

- [ ] **Step: 更新 main.js → 删除 app.js 中已提取函数 → 删除 engine.js → 构建 → 验证 → 提交**

### Task 2.5–2.6：提取 rendering 模块

- [ ] **Task 2.5: 创建 js/src/rendering/index.js** — 通用渲染工具 + renderAll
- [ ] **Task 2.6: 创建 js/src/rendering/materials.js** — renderMaterials + 辅助函数
- [ ] **Task 2.7: 创建 js/src/rendering/overview.js** — renderOverview
- [ ] **Task 2.8: 创建 js/src/rendering/machines.js** — renderMachines
- [ ] **Task 2.9: 创建 js/src/rendering/parts-tools.js** — renderParts + renderTools
- [ ] **Task 2.10: 创建 js/src/rendering/automation.js** — renderAuto + 辅助函数
- [ ] **Task 2.11: 创建 js/src/rendering/transport-liaison.js** — renderTransport + renderLiaison
- [ ] **Task 2.12: 创建 js/src/rendering/agency.js** — renderAgency
- [ ] **Task 2.13: 创建 js/src/rendering/material-lib.js** — renderMatLib + toggleMatLibGroup + handleMatLibEdit + addMatLibRow
- [ ] **Task 2.14: 创建 js/src/rendering/scenarios.js** — 方案渲染
- [ ] **Task 2.15: 创建 js/src/rendering/bid-analysis.js** — 竞价分析渲染
- [ ] **Task 2.16: 创建 js/src/rendering/charts.js** — renderCharts + animateNum

### Task 2.17–2.21：提取 ui 模块

- [ ] **Task 2.17: 创建 js/src/ui/index.js** — showToast, 主题切换, 侧边栏折叠
- [ ] **Task 2.18: 创建 js/src/ui/context-menu.js** — 右键菜单（app.js ~2996 行区域）
- [ ] **Task 2.19: 创建 js/src/ui/column-resize.js** — 列宽拖拽 + 表格尺寸记忆
- [ ] **Task 2.20: 创建 js/src/ui/keyboard.js** — 键盘快捷键
- [ ] **Task 2.21: 创建 js/src/ui/events.js** — 全局事件绑定（app.js ~2771 行区域）

### Task 2.22：提取 export.js

**Files:**
- Create: `js/src/export.js`
- Modify: `js/app.js`

**函数清单：**
- CSV 导出相关函数（app.js ~2739 区域）
- PDF 打印相关函数（app.js ~2588 区域）
- 其他导出/打印功能

### Task 2.23：清理 app.js

当所有模块提取完成后：

- [ ] **Step: 确认 app.js 无剩余函数**

```bash
grep -c "^function " js/app.js
# 预期输出: 0
```

- [ ] **Step: 删除 app.js**

```bash
git rm js/app.js
```

---

## Phase 3：收尾清理

### Task 3.1：清理 index.html 残余

- [ ] **Step: 删除 index.html 中所有旧的 `<script>` 注释和残余**

确保 `index.html` 只保留：

```html
<script src="js/dist/bundle.js"></script>
```

没有其他 `<script>` 标签。

### Task 3.2：移除 window.* 兼容挂载

- [ ] **Step 1: 扫描 index.html 中所有 `onclick` 引用**

```bash
grep -o 'onclick="[^"]*"' index.html | sort -u
```

- [ ] **Step 2: 对每个被引用的函数，确认其在 main.js 中有 window 挂载**

```javascript
// main.js 中保留必要的 window 挂载
window.renderAll = renderAll;
window.showToast = showToast;
// ...
```

对不再需要的挂载，逐批移除。

### Task 3.3：统一 import 风格

- [ ] **Step: 检查所有模块的 import，按功能域分组**

```javascript
// main.js 最终 import 风格示例
// --- 数据层 ---
import { DATA, MAT_LIB, MATERIAL_PRICE_DB } from './src/data.js';

// --- 持久化 & 状态 ---
import { persistData, loadPersistedData } from './src/persistence.js';
import { takeProjectSnapshot, undoProjectSnapshot } from './src/state.js';

// --- 业务逻辑 ---
import { autoFixMissingSeqs, generateDataHealthReport } from './src/health.js';
import { FormulaEngine, compute, recalcTable } from './src/calculation.js';

// --- 编辑器 & 导入 ---
import { openRowEditModal, EditableTable } from './src/editor.js';
import { ImportWizard } from './src/import-wizard.js';

// --- 渲染 ---
import { renderAll, renderOverview, renderMaterials } from './src/rendering/index.js';

// --- UI ---
import { showToast, toggleSidebar, toggleTheme } from './src/ui/index.js';
```

### Task 3.4：构建验证

- [ ] **Step: 完整构建 + 功能回归测试**

```bash
npm run build
```

打开 index.html，逐项验证：
- 概览页渲染正常
- 三大主机页渲染正常
- 材料明细表渲染正常
- 导入向导可用
- 行编辑可用
- 计算正常
- 导出正常
- 主题切换正常
- 侧边栏折叠正常

- [ ] **Step: 最终提交**

```bash
git add -A
git commit -m "refactor: 收尾清理 — 删除空壳 app.js，统一 import 风格"
```

---

## 风险管理

| 风险 | 应对 |
|------|------|
| `window.fn = fn` 忘记某个函数导致 onclick 报错 | 每次提取后扫描 index.html 的 onclick 引用，对照检查 |
| 循环依赖 | 依赖图已设计为单向；如出现，将被引用函数提升到 shared 模块 |
| 构建后 bundle.js 体积膨胀 | esbuild 默认 tree-shaking，应小于当前各 script 之和。如担心，`npm run build` 后检查文件大小 |
| 编辑器/导入向导引用 app.js 中的全局函数 | Phase 1 已经让这些模块通过 import 访问；被引用的函数在 Phase 2 提取到共享模块 |

---

## commit 路线图

```
Phase 1:
  feat: esbuild 构建环境 + 模块入口 + data.js 改造为 ES Module
  feat: editor/engine/import-wizard 添加 export，main.js 统一导入
  
Phase 2 (每个提取一个 commit):
  refactor: 提取 persistence.js
  refactor: 提取 state.js
  refactor: 提取 health.js
  refactor: 提取 calculation.js (合并 engine.js)
  refactor: 提取 rendering/module-name (×N)
  refactor: 提取 ui/module-name (×N)
  refactor: 提取 export.js
  refactor: 删除 app.js

Phase 3:
  chore: 清理 index.html 残余
  chore: 统一 import 风格
```
