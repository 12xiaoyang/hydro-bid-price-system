# 导入时智能序号重排 — 实现计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** BOM 表导入时自动检测并修复不正确的序号（跳号、首子行不是 .1）

**Architecture:** 在 `app.js` 新增 `autoFixSequences` 函数，采用自底向上逐层重排算法。在 `import-wizard.js` 的 `_executeImport` 中 BOM 分支调用该函数，插入位置在 `DATA[targetTable] = newRows` 之后、`recalcTable` 之前。

**Tech Stack:** 纯 JavaScript，无外部依赖。依赖现有函数 `isDirectChild`（app.js:627）。

---

### Task 1: 实现 `autoFixSequences` 函数

**Files:**
- Modify: `js/app.js` — 在 `autoFixNegativeValues`（约第150行）之后新增函数，约在 `autoFixUsageRates` 附近

- [ ] **Step 1: 读取目标位置确认插入点**

读取 `js/app.js` 中 `autoFixUsageRates` 函数结尾和 `autoFixNegativeValues` 开头之间的代码，确认精确插入位置。

```bash
cd "c:/Users/Yang/Desktop/水电站投标价格分析系统 · Pro_files"
sed -n '147,155p' js/app.js
```

- [ ] **Step 2: 写入 `autoFixSequences` 函数**

在 `autoFixUsageRates()` 之后（约第148行后）插入以下函数：

```javascript
function autoFixSequences(dataKey) {
  if (!['water','gen','valve','valve_door'].includes(dataKey)) return { tables: 0, rows: 0 };
  const items = DATA[dataKey];
  if (!items || items.length === 0) return { tables: 0, rows: 0 };

  // Helper: check if seq is pure numeric (e.g. "1", "2.3", "1.2.3")
  const isNumericSeq = (s) => /^\d+(\.\d+)*$/.test(s);

  let fixed = 0;

  // 1. Collect all parent seqs (rows that have direct children)
  const parentSeqs = [];
  const allSeqs = items.map(r => r.seq).filter(s => s && isNumericSeq(String(s)));
  allSeqs.forEach(seq => {
    if (parentSeqs.includes(seq)) return;
    const hasChild = allSeqs.some(other => other !== seq && String(other).startsWith(String(seq) + '.'));
    if (hasChild) parentSeqs.push(seq);
  });
  // Add root "一" if it has children
  const rootHasChild = items.some(r => /^\d+$/.test(String(r.seq || '')));
  if (rootHasChild && !parentSeqs.includes('一')) parentSeqs.push('一');

  // 2. Sort by depth descending (deepest first = bottom-up)
  parentSeqs.sort((a, b) => {
    const da = a === '一' ? 0 : String(a).split('.').length;
    const db = b === '一' ? 0 : String(b).split('.').length;
    return db - da;
  });

  // 3. Process each parent
  parentSeqs.forEach(parentSeq => {
    // Collect direct children (using existing isDirectChild)
    const children = items.filter(r => {
      const cs = String(r.seq || '');
      return cs && isNumericSeq(cs) && isDirectChild(parentSeq, cs);
    });

    // Sort children by last segment numeric value
    children.sort((a, b) => {
      const segA = parseInt(String(a.seq).split('.').pop(), 10);
      const segB = parseInt(String(b.seq).split('.').pop(), 10);
      return (isNaN(segA) ? 0 : segA) - (isNaN(segB) ? 0 : segB);
    });

    // Renumber sequentially
    children.forEach((child, idx) => {
      const newSeq = parentSeq === '一' ? String(idx + 1) : parentSeq + '.' + (idx + 1);
      const oldSeq = String(child.seq);
      if (newSeq === oldSeq) return;

      child.seq = newSeq;
      fixed++;

      // Cascade: update all descendants' prefix
      items.forEach(r => {
        const rs = String(r.seq || '');
        if (rs === oldSeq) return; // skip the row itself (already updated)
        if (rs.startsWith(oldSeq + '.')) {
          r.seq = newSeq + rs.substring(oldSeq.length);
        }
      });
    });
  });

  if (fixed > 0) persistData();
  return { tables: fixed > 0 ? 1 : 0, rows: fixed };
}
```

- [ ] **Step 3: 验证代码正确性**

读取插入位置附近的代码确认语法正确：

```bash
cd "c:/Users/Yang/Desktop/水电站投标价格分析系统 · Pro_files"
sed -n '148,220p' js/app.js
```

确认函数边界完整无语法错误。

- [ ] **Step 4: 提交**

```bash
git add js/app.js
git commit -m "feat: 新增 autoFixSequences 智能序号重排函数"
```

---

### Task 2: 在导入流程中调用

**Files:**
- Modify: `js/import-wizard.js` — 在 `_executeImport` 的 BOM 分支中添加调用

- [ ] **Step 1: 读取目标位置确认插入点**

读取 `_executeImport` 中 BOM 分支代码，找 `DATA[targetTable] = newRows` 之后的插入位置：

```bash
cd "c:/Users/Yang/Desktop/水电站投标价格分析系统 · Pro_files"
sed -n '1207,1222p' js/import-wizard.js
```

确认 `DATA[targetTable] = newRows`（行1207）和 `FormulaEngine.recalcTable(targetTable)`（行1216）之间的位置。

- [ ] **Step 2: 插入调用代码**

在 `DATA[targetTable] = newRows;`（行1207）之后、`FormulaEngine.recalcTable(targetTable);`（行1216）之前，插入：

```javascript

      // 智能序号重排：修复跳号、首行不是 .1、父级序号断层
      autoFixSequences(targetTable);
```

注意：`autoFixSequences` 在全局作用域中（`app.js`），`_executeImport` 中可以直接调用。

- [ ] **Step 3: 验证修改**

```bash
cd "c:/Users/Yang/Desktop/水电站投标价格分析系统 · Pro_files"
sed -n '1205,1225p' js/import-wizard.js
```

确认调用位置正确，在 DATA 赋值之后、recalcTable 之前。

- [ ] **Step 4: 提交**

```bash
git add js/import-wizard.js
git commit -m "feat: 导入 BOM 表时自动调用 autoFixSequences 重排"
```

---

### Task 3: 测试验证

- [ ] **Step 1: 编写测试脚本验证算法正确性**

创建 `_test_seq_fix.js`，用模拟数据验证各种场景：

```javascript
// Test seq auto-fix algorithm
const DATA = { water: [] };

// Simulate: 2.4 has children starting at 2.4.2 (should be 2.4.1)
DATA.water.push(
  { seq: '一', name: '汇总', material: '', weight: 0 },
  { seq: '1', name: '肘管装配', material: 'Q235', weight: 1.5 },
  { seq: '1.1', name: '肘管壁1', material: 'Q235', weight: 1.0 },
  { seq: '1.2', name: '肘管壁2', material: 'Q235', weight: 0.5 },
  { seq: '2', name: '转轮', material: '', weight: 0 },
  { seq: '2.4', name: '轴承体', material: '一般小型铸件\\ZG230-450\\ZG20SiMn', weight: 1.1 },
  { seq: '2.4.2', name: '轴承体上盖', material: '一般小型铸件', weight: 0.5 },
  { seq: '2.4.5', name: '轴承体下盖', material: '一般小型铸件', weight: 0.6 },
  { seq: '4', name: '主轴', material: '', weight: 0 }, // jump: no "3"
  { seq: '4.1', name: '水机主轴', material: '锻件', weight: 2.0 }
);

// Inject the autoFixSequences function inline
function isDirectChild(parentSeq, childSeq) {
  const p = String(parentSeq);
  const c = String(childSeq || '');
  if (p === '一') return /^\d+$/.test(c);
  if (!c.startsWith(p + '.')) return false;
  return c.split('.').length === p.split('.').length + 1;
}

function autoFixSequences(dataKey) {
  if (!['water','gen','valve','valve_door'].includes(dataKey)) return { tables: 0, rows: 0 };
  const items = DATA[dataKey];
  if (!items || items.length === 0) return { tables: 0, rows: 0 };
  const isNumericSeq = (s) => /^\d+(\.\d+)*$/.test(s);
  let fixed = 0;
  const parentSeqs = [];
  const allSeqs = items.map(r => r.seq).filter(s => s && isNumericSeq(String(s)));
  allSeqs.forEach(seq => {
    if (parentSeqs.includes(seq)) return;
    const hasChild = allSeqs.some(other => other !== seq && String(other).startsWith(String(seq) + '.'));
    if (hasChild) parentSeqs.push(seq);
  });
  const rootHasChild = items.some(r => /^\d+$/.test(String(r.seq || '')));
  if (rootHasChild && !parentSeqs.includes('一')) parentSeqs.push('一');
  parentSeqs.sort((a, b) => {
    const da = a === '一' ? 0 : String(a).split('.').length;
    const db = b === '一' ? 0 : String(b).split('.').length;
    return db - da;
  });
  parentSeqs.forEach(parentSeq => {
    const children = items.filter(r => {
      const cs = String(r.seq || '');
      return cs && isNumericSeq(cs) && isDirectChild(parentSeq, cs);
    });
    children.sort((a, b) => {
      const segA = parseInt(String(a.seq).split('.').pop(), 10);
      const segB = parseInt(String(b.seq).split('.').pop(), 10);
      return (isNaN(segA) ? 0 : segA) - (isNaN(segB) ? 0 : segB);
    });
    children.forEach((child, idx) => {
      const newSeq = parentSeq === '一' ? String(idx + 1) : parentSeq + '.' + (idx + 1);
      const oldSeq = String(child.seq);
      if (newSeq === oldSeq) return;
      child.seq = newSeq;
      fixed++;
      items.forEach(r => {
        const rs = String(r.seq || '');
        if (rs === oldSeq) return;
        if (rs.startsWith(oldSeq + '.')) {
          r.seq = newSeq + rs.substring(oldSeq.length);
        }
      });
    });
  });
  return { tables: fixed > 0 ? 1 : 0, rows: fixed };
}

// Run test
console.log('=== 修复前 ===');
DATA.water.forEach(r => console.log(r.seq, r.name));

const result = autoFixSequences('water');

console.log('\n=== 修复后 ===');
DATA.water.forEach(r => console.log(r.seq, r.name));

console.log('\n=== 验证 ===');
// Check 1: 1.x is correct
const oneKids = DATA.water.filter(r => /^\d+$/.test(String(r.seq)));
console.log('children of "一":', oneKids.map(r => r.seq).join(', '), '→ expect 1,2,3');
console.assert(oneKids.length === 3 && oneKids[0].seq === '1' && oneKids[1].seq === '2' && oneKids[2].seq === '3', 'FAIL: root children');

// Check 2: 2.4.x renumbered
const twoFourKids = DATA.water.filter(r => /^2\.4\.\d+$/.test(String(r.seq)));
console.log('children of "2.4":', twoFourKids.map(r => r.seq).join(', '), '→ expect 2.4.1,2.4.2');
console.assert(twoFourKids.length === 2 && twoFourKids[0].seq === '2.4.1' && twoFourKids[1].seq === '2.4.2', 'FAIL: 2.4 children');

console.log('\nAll tests:', result.rows + ' fixes applied');
```

- [ ] **Step 2: 运行测试**

```bash
cd "c:/Users/Yang/Desktop/水电站投标价格分析系统 · Pro_files"
node _test_seq_fix.js
```

预期输出：
```
=== 修复前 ===
一 汇总
1 肘管装配
...
2.4 轴承体
2.4.2 轴承体上盖
2.4.5 轴承体下盖
...

=== 修复后 ===
一 汇总
1 肘管装配
...
2.4 轴承体
2.4.1 轴承体上盖
2.4.2 轴承体下盖
...

children of "一": 1,2,3 → expect 1,2,3
children of "2.4": 2.4.1,2.4.2 → expect 2.4.1,2.4.2
All tests: X fixes applied
```

- [ ] **Step 3: 清理测试文件**

```bash
rm _test_seq_fix.js
```

- [ ] **Step 4: 最终提交和推送**

```bash
git push
```

---

### 自审清单

| 需求 | 对应任务 |
|------|---------|
| 跳号修复（子级） | Task 1 — children 排序后重新编号 |
| 首子行不是 .1 | Task 1 — forEach(idx+1) 保证从 .1 开始 |
| 父级跳号修复 | Task 1 — parentSeqs 包含所有父级，逐层重排 |
| 级联更新后代 | Task 1 — `rs.startsWith(oldSeq + '.')` 替换前缀 |
| 仅 BOM 表 | Task 1 — `['water','gen','valve','valve_door'].includes` |
| 仅导入时触发 | Task 2 — 在 `_executeImport` 中调用 |
| 非数字序号不改 | Task 1 — `isNumericSeq` 过滤 |
| 已有正确序号不变 | Task 1 — `if (newSeq === oldSeq) return` |

**类型一致性检查：** `autoFixSequences` 返回 `{tables, rows}` 与 `autoFixUsageRates` 等保持一致的返回值格式。`isDirectChild` 直接使用 app.js:627 现有的函数，无重复定义。
