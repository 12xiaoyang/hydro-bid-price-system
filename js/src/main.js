// js/src/main.js — 项目入口
// Phase 1: 导入所有模块，通过 window 暴露给内联 onclick

import * as Data from '../data.js';

// 全局数据引用（保持与现有代码兼容）
Object.assign(window, Data);

console.log('✅ Hydro Bid System 模块化入口已加载');
