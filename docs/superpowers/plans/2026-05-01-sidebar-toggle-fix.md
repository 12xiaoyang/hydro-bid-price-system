# 侧边栏折叠按钮修复实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将侧边栏折叠按钮移到 sidebar 外部，使其在侧边栏折叠后仍然可见

**Architecture:** 三处改动：HTML 结构（按钮移出 sidebar）、CSS 定位（按钮相对 main 绝对定位 + 折叠时不再依赖 overflow:hidden）、JS 逻辑基本不变

**Tech Stack:** 原生 HTML/CSS/JS

---

### Task 1: HTML — 按钮移出 sidebar

**Files:**
- Modify: `index.html:48-50`

- [ ] **Step 1: 移动 sidebarToggle 到 sidebar 外部**

  修改前：
  ```html
  <aside class="sidebar" id="sidebar">
    <div class="sidebar-toggle" id="sidebarToggle" onclick="toggleSidebar()" title="隐藏/显示侧边栏">◀</div>
    <div class="sidebar-inner">
    ...
  ```

  修改后：
  ```html
  <div class="sidebar-toggle" id="sidebarToggle" onclick="toggleSidebar()" title="隐藏/显示侧边栏">◀</div>
  <aside class="sidebar" id="sidebar">
    <div class="sidebar-inner">
    ...
  ```

  注意 `.sidebar-toggle` 现在作为 `.main` 的直接子元素，放在 `<aside>` 前面。

- [ ] **Step 2: 验证 HTML 结构**

  确认 `#sidebarToggle` 仍在 `.main` 内部，且是 `<aside>` 的兄弟元素。

---

### Task 2: CSS — 重新定位按钮 + 折叠样式

**Files:**
- Modify: `css/style.css:207-279`

- [ ] **Step 1: 给 .main 添加 position:relative**

  在 `.main` 的 CSS 规则中添加：
  ```css
  .main {
    display: grid;
    grid-template-columns: var(--sidebar-w) 1fr;
    min-height: calc(100vh - 52px);
    position: relative;  /* 新增：作为 sidebar-toggle 的定位锚点 */
  }
  ```

- [ ] **Step 2: 重写 .sidebar-toggle 定位规则**

  修改前（相对于 sidebar 定位 → `right: -1px`）：
  ```css
  .sidebar-toggle {
    position: absolute;
    top: 12px;
    right: -1px;
    ...
    border-right: none;
    border-radius: 6px 0 0 6px;
    ...
  }
  ```

  修改后（相对于 main 定位 → `left` 动态变化）：
  ```css
  .sidebar-toggle {
    position: absolute;
    top: 12px;
    left: var(--sidebar-w);   /* 展开时在侧边栏右边缘 */
    z-index: 100;
    background: var(--panel);
    border: 1px solid var(--border);
    border-left: none;
    border-radius: 0 6px 6px 0;
    padding: 8px 5px;
    cursor: pointer;
    font-size: 10px;
    color: var(--text-muted);
    line-height: 1;
    transition: all 0.25s ease;
    user-select: none;
  }
  .sidebar-toggle:hover {
    background: var(--panel-hover);
    color: var(--text);
  }
  ```

  关键变化：
  - `right: -1px` → `left: var(--sidebar-w)`（相对于主容器定位）
  - `border-right: none` → `border-left: none`（按钮在侧边栏右侧，圆角方向调转）
  - `border-radius: 6px 0 0 6px` → `border-radius: 0 6px 6px 0`
  - `z-index: 10` → `z-index: 100`

- [ ] **Step 3: 修改 .sidebar.collapsed 样式及关联规则**

  修改 `.sidebar.collapsed`，去掉 `overflow: hidden`：
  ```css
  .sidebar.collapsed {
    width: 0 !important;
    padding: 16px 0;
    border-right: 1px solid transparent;
    min-width: 0;
  }
  ```

  修改 `.sidebar.collapsed .sidebar-inner`，用 `visibility` 替代 `opacity`：
  ```css
  .sidebar.collapsed .sidebar-inner {
    visibility: hidden;
    pointer-events: none;
  }
  ```

  删除整个 `.sidebar.collapsed .sidebar-toggle` 规则块（按钮已不在 sidebar 内）。

- [ ] **Step 4: 添加折叠时按钮的定位**

  在 `.main.sidebar-collapsed` 规则后添加：
  ```css
  .main.sidebar-collapsed .sidebar-toggle {
    left: 0;
  }
  ```

- [ ] **Step 5: 验证 CSS**

  检查确认：
  - 删除了 `.sidebar.collapsed` 中的 `overflow: hidden`
  - 删除了 `.sidebar.collapsed .sidebar-toggle` 规则块
  - `.sidebar-toggle` 使用 `left: var(--sidebar-w)` 定位
  - `.main` 有 `position: relative`

---

### Task 3: JS — 验证 toggleSidebar 适配

**Files:**
- Verify: `js/app.js:3425-3451`

- [ ] **Step 1: 确认 toggleSidebar 逻辑不需要修改**

  `toggleSidebar()` 通过 `document.getElementById('sidebarToggle')` 获取按钮，与 DOM 位置无关，无需修改。

  但 `restoreSidebar()` 中的恢复逻辑需要确认按钮引用正确——同样使用 `getElementById`，不受影响。

- [ ] **Step 2: 确认无其他硬编码引用**

  Grep 检查是否有其他 CSS 或 JS 通过父元素路径引用 `.sidebar-toggle`：
  ```bash
  grep -rn "sidebar-toggle\|sidebarToggle" js/ css/ index.html
  ```

  确认 `.sidebar-toggle` 只在 `style.css`、`index.html`、`app.js` 中出现，且引用方式都是通过 ID 或类名，不依赖父子关系。

---

### Task 4: 手动验证

- [ ] **Step 1: 打开页面测试**

  在浏览器中打开 `index.html`，验证：
  - 侧边栏展开时，按钮在侧边栏右边缘正确显示
  - 点击按钮 → 侧边栏折叠，按钮移到左边缘且始终可见
  - 再次点击按钮 → 侧边栏展开，按钮回到原位置
  - 刷新页面 → 折叠状态保持（localStorage 恢复）
  - 展开状态下刷新 → 正常展开

- [ ] **Step 2: 回归检查**

  - 页面整体布局不受影响
  - 响应式布局（窄屏）行为正常
  - 打印模式下侧边栏正确隐藏
