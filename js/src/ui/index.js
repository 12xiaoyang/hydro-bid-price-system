// ============ 暗色/亮色主题切换 ============
export function setupUI() {
  (function() {
    const btn = document.getElementById('themeToggle');
    const html = document.documentElement;
    const saved = localStorage.getItem('hydro_theme');
    if (saved) { html.setAttribute('data-theme', saved); btn.textContent = saved === 'dark' ? '☀️' : '🌙'; }
    btn.addEventListener('click', () => {
      const isDark = html.getAttribute('data-theme') === 'dark';
      const next = isDark ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      btn.textContent = next === 'dark' ? '☀️' : '🌙';
      localStorage.setItem('hydro_theme', next);
      setTimeout(() => { window.renderAll(); }, 50);
      window.showToast(next === 'dark' ? '🌙 已切换深色模式' : '☀️ 已切换亮色模式');
    });
  })();

  // Sidebar restore
  (function restoreSidebar() {
    try {
      const saved = localStorage.getItem('hydro_sidebar_collapsed');
      if (saved === '1') {
        const sidebar = document.getElementById('sidebar');
        const main = document.querySelector('.main');
        const btn = document.getElementById('sidebarToggle');
        sidebar.classList.add('collapsed');
        main.classList.add('sidebar-collapsed');
        btn.textContent = '▶';
        btn.title = '展开侧边栏';
      }
    } catch(e) {}
  })();
}

// ============ 侧边栏折叠/展开 ============
export function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const main = document.querySelector('.main');
  const btn = document.getElementById('sidebarToggle');
  const isCollapsed = sidebar.classList.toggle('collapsed');
  main.classList.toggle('sidebar-collapsed', isCollapsed);
  btn.textContent = isCollapsed ? '▶' : '◀';
  btn.title = isCollapsed ? '展开侧边栏' : '隐藏侧边栏';
  try { localStorage.setItem('hydro_sidebar_collapsed', isCollapsed ? '1' : '0'); } catch(e) {}
  window.dispatchEvent(new Event('resize'));
}
