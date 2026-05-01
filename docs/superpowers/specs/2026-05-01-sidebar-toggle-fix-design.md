# 侧边栏折叠按钮修复设计方案

## 问题

侧边栏折叠按钮 `#sidebarToggle` 位于 `<aside class="sidebar">` 内部。折叠时 `.sidebar.collapsed` 设置 `overflow: hidden` 和 `width: 0`，导致按钮被裁剪，用户无法恢复侧边栏。

## 方案

### HTML 结构调整

把 `#sidebarToggle` 从 `<aside class="sidebar">` 内部移到外部，作为 `.main` 的直接子元素：

```html
<div class="main">
  <aside class="sidebar" id="sidebar">
    <div class="sidebar-inner">...</div>
  </aside>
  <div class="sidebar-toggle" id="sidebarToggle" onclick="toggleSidebar()">◀</div>
  ...
</div>
```

### 定位策略

- `.main` 设置 `position: relative` 作为定位锚点
- `.sidebar-toggle` 使用 `position: absolute`
- **展开时**：`left: var(--sidebar-w)`（侧边栏右边缘），`top: 12px`
- **折叠后**：`left: 0`（屏幕左边缘），保持同一垂直位置
- `z-index` 足够高，确保悬浮在内容区之上

### 侧边栏折叠 CSS 调整

去掉 `overflow: hidden`，改用组合方式隐藏内容：

```css
.sidebar.collapsed {
  width: 0 !important;
  padding: 16px 0;
  border-right: 1px solid transparent;
  min-width: 0;
}
.sidebar.collapsed .sidebar-inner {
  visibility: hidden;
  pointer-events: none;
}
```

### 按钮样式

- 尺寸、形状、颜色保持现有样式
- 移除 `border-left: none` 和 `border-radius` 的右侧圆角调整（因为按钮不再贴在侧边栏边框上）
- 按钮始终可见，悬浮在内容区左边缘上方

## 涉及文件

- `index.html` — 移动 `#sidebarToggle` 到 `.sidebar` 外部
- `css/style.css` — 调整 `.sidebar-toggle` 定位方式，修改 `.sidebar.collapsed` 样式
- `js/app.js` — `toggleSidebar()` 函数逻辑不变，但按钮文本/标题更新需适配新位置

## 不变的部分

- `toggleSidebar()` 函数逻辑
- localStorage 状态保存与恢复
- 侧边栏内容及布局
- 响应式布局在小屏幕的处理
