# 项目重构：ES Module 渐进式拆分

## 概述

将当前全局 script 标签架构的水电站投标价格分析系统，重构为 ES Module + esbuild 打包的模块化架构。目标是消除 `app.js`（3452 行/121 个函数）的巨石问题，建立清晰的职责边界。

## 当前架构

```
index.html
  <script src="js/data.js">         214 行   初始数据
  <script src="js/app.js">         3452 行   ❗全部混在一起
  <script src="js/editor.js">      1326 行   行编辑弹窗
  <script src="js/engine.js">       398 行   公式引擎
  <script src="js/import-wizard.js"> 1371 行   Excel 导入
```

- 所有文件共享全局作用域，函数/变量隐式耦合
- app.js 混杂：数据持久化、12 个模块渲染、计算、健康检查、事件绑定、导出、UI 交互
- 只能在浏览器中通过 `file://` 打开，不支持 ES Module

## 目标架构

```
package.json             esbuild 构建脚本
js/
  src/                   ES Module 源码
    main.js              入口
    data.js              DATA, MAT_LIB, TABLE_SCHEMAS
    persistence.js       localStorage + 项目导入导出
    state.js             快照 + 撤销/重做
    health.js            自动修复 + 健康检查
    calculation.js       FormulaEngine（合并 engine.js）
    editor.js            RowEditor + EditableTable
    import-wizard.js     ImportWizard
    rendering/
      index.js           renderAll + 公共渲染工具
      overview.js        概览
      machines.js        三大主机
      materials.js       材料明细表
      parts-tools.js     备件 + 工具
      automation.js      自动化&监测
      transport.js       运输
      liaison.js         设联会
      scenarios.js       方案
      charts.js          图表
      material-lib.js    材料库
      bid-analysis.js    竞价分析
    ui/
      index.js           showToast, 主题, 侧边栏
      context-menu.js    右键菜单
      column-resize.js   列宽拖拽
      keyboard.js        快捷键
      events.js          全局事件
    export.js            CSV/HTML/PDF 导出
  dist/
    bundle.js            esbuild 打包输出（index.html 实际加载）
```

### 模块依赖关系

```
data.js (零依赖)
  ← persistence.js (依赖 data.js)
    ← state.js (依赖 data.js + persistence.js)
      ← health.js (依赖 data.js + state.js)
  ← calculation.js (依赖 data.js)
  ← rendering/*.js (依赖 data.js + calculation.js)
  ← editor.js (依赖 data.js + calculation.js)
  ← import-wizard.js (依赖 data.js)
  ← ui/*.js (依赖 data.js + rendering)
  ← export.js (依赖 data.js + state)
      ← main.js (入口，import 所有模块，初始化)
```

无循环依赖。

## 构建配置

```bash
# 安装 esbuild
npm install esbuild --save-dev

# package.json scripts
"build": "esbuild js/src/main.js --bundle --outfile=js/dist/bundle.js"
"watch": "esbuild js/src/main.js --bundle --outfile=js/dist/bundle.js --watch"

# index.html 只加载一个 script
<script src="js/dist/bundle.js"></script>
```

- esbuild 递归打包所有 import，输出单文件
- 兼容 `file://` 协议，双击 HTML 依然可用
- 毫秒级构建，`--watch` 模式开发

## 分阶段迁移计划

### Phase 1：搭建骨架

目标：引入构建工具 + 建立模块入口，零行为变更。

| 步骤 | 操作 | 验证 |
|------|------|------|
| 1.1 | `npm init` + `npm install esbuild` + `package.json scripts` | `npm run build` 生成 bundle.js |
| 1.2 | 创建 `js/src/` + 拷贝 `data.js` 为 `src/data.js`（添加 `export`） | 构建成功 |
| 1.3 | 创建 `src/main.js` 入口，import 所有现有模块 | 构建成功 |
| 1.4 | 修改 `index.html`：移除旧 `<script>`，加载 `dist/bundle.js` | 页面可打开 |
| 1.5 | 为 `editor.js` `engine.js` `import-wizard.js` 添加 `export` | 构建成功 |
| 1.6 | `main.js` import 全部模块 | 页面功能完整 |

退出条件：页面所有功能与重构前一致。

### Phase 2：逐模块提取

目标：将 app.js 按职责拆成独立模块，每次提取一个模块并立即验证。

**提取顺序（低风险→高风险）：**

```
2.1  persistence.js      localStorage + JSON导入导出
2.2  state.js            快照/撤销/重做
2.3  health.js           autoFix* + 健康检查
2.4  calculation.js      FormulaEngine（合并 engine.js 内容）
2.5  rendering/index.js  renderAll + 公共渲染辅助
2.6  rendering/materials.js  材料明细表渲染（最大渲染模块）
2.7  rendering/*.js      逐一提取其余渲染函数
2.8  ui/*.js             事件/主题/侧边栏/右键菜单/列宽/快捷键
2.9  export.js           CSV/HTML/PDF 导出
```

每个模块提取的标准操作：
1. 在 `src/` 下创建新文件，拷贝相关函数，添加 `export`
2. 从 `app.js` 中删除已移出的代码
3. 在 `main.js` 中 import 新模块
4. `npm run build` → 控制台无报错
5. 打开页面，验证被提取的功能正常工作
6. `git commit`

退出条件：`app.js` 完全清空，可安全删除。

### Phase 3：收尾清理

| 步骤 | 操作 |
|------|------|
| 3.1 | 删除空壳 `app.js` |
| 3.2 | 清理 `index.html` 中残余的 script 注释 |
| 3.3 | 统一 import 风格（按功能域分组，注释清晰） |
| 3.4 | 添加构建说明文档 |

## 内联事件处理

`index.html` 中大量使用 `onclick="someFunction()"` 内联事件绑定。ES Module 中的函数不会自动成为全局变量，因此需要过渡策略：

- **Phase 1**：在 `main.js` 中显式将函数挂载到 `window` 对象上（`window.renderAll = renderAll`），保持内联 onclick 可用
- **Phase 2-3**：逐步将内联 `onclick` 迁移为 `addEventListener`，迁移完成后移除 `window.*` 挂载

这个过渡确保每一步页面交互都是可用的。

## 安全策略

- **原子操作**：每个模块提取 = 一次拷贝 → export → import → 删除原代码 → 验证 → 提交
- **可逆**：每步可 `git revert`，不影响其他已提取模块
- **可验证**：每次提取后必须通过「构建成功 + 页面功能正常」双重验证
- **无行为变更**：重构期间不修改任何业务逻辑，只移动代码 + 添加 import/export

## 风险与缓解

| 风险 | 缓解 |
|------|------|
| 隐式全局变量依赖遗漏 | 先提取纯数据模块（persistence/state/health），积累信心后再提取 UI 模块 |
| 循环依赖 | 依赖图已设计为单向；如果出现，用 shared 模块或依赖注入解决 |
| editor.js/import-wizard.js 引用 app.js 中的函数 | Phase 1 先让它们通过 import 访问，再逐步将被引用的函数提取到共享模块 |
| 构建后体积增大 | esbuild 默认 tree-shaking，bundle.js 应小于当前各 script 之和 |
