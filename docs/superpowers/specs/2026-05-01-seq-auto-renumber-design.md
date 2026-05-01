# 导入时智能序号重排

## 概述

BOM 表导入时，自动检测并修复用户 Excel 中不正确的序号（跳号、首子行不是 .1 等问题）。

## 范围

- **仅 BOM 表**：water、gen、valve、valve_door
- **触发时机**：导入时自动执行（`_executeImport` 内部），无手动入口
- **不涉及**：备件/工具/自动化/监测/设联会表；健康检查面板

## 行为定义

### 修复内容

给定任意父节点，对其直接子行做以下修正：

| 场景 | 举例（修复前 → 修复后） |
|------|------------------------|
| 子行不从 .1 开始 | `2.3.2`, `2.3.3` → `2.3.1`, `2.3.2` |
| 子行跳号 | `2.4.1`, `2.4.3` → `2.4.1`, `2.4.2` |
| 父级序号跳号 | `一`的子行 `1`, `2`, `4` → `1`, `2`, `3` |
| 深层级联 | `2` 的子行 `2.3`→`2.1` 时，`2.3.2` 同步 → `2.1.2` |

### 不处理的情况

- 非纯数字序号（如 `A1`、`B-2`、`X.1`）— 跳过
- 空/null seq — 跳过
- 表单级别的其他 table — 跳过

## 算法

```
function autoFixSequences(dataKey):
  items = DATA[dataKey]

  // 1. 收集所有父级 seq（有直接子行的行）
  parentSeqs = 所有 seq 值，其中存在另一行的 seq.startsWith(thisSeq + ".")
  // 根节点 "一" 也在 parentSeqs 中

  // 2. 按深度降序排序（最深的最先处理）
  parentSeqs.sortBy(seq.split('.').length DESC)

  // 3. 逐层重排
  for each parentSeq in parentSeqs:
    children = items.filter(是 parentSeq 的直接子行)
    children.sortBy(最后一段序号的数值 ASC)

    for i, child in enumerate(children, 1):
      newSeq = (parentSeq === "一") ? String(i) : parentSeq + "." + i
      oldSeq = child.seq

      if newSeq !== oldSeq:
        child.seq = newSeq
        fixed++

        // 级联更新所有后代
        for each descendant where descendant.seq.startsWith(oldSeq + "."):
          descendant.seq = newSeq + descendant.seq.substring(oldSeq.length)
```

### 关键细节

- **直接子行判定**：`isDirectChild(parentSeq, childSeq)` — 即 seq 以 `parentSeq + "."` 开头且点号数 = 父级点号数 + 1
- **排序依据**：最后一段序号的数值（`parseInt(lastSegment, 10)`），非字符串对比
- **级联更新**：父级序号变更后，以其旧 seq 前缀的所有行自动替换为新前缀
- **根节点 `一`**：其直接子行是纯数字序号（`/^\d+$/`），重排时不加前缀

## 在导入流程中的位置

```
_executeImport():
  解析/转换 → 列映射
  重复序号消重
  DATA[targetTable] = newRows           ← ①
  autoFixSequences(targetTable)         ← ② 新增
  FormulaEngine.recalcTable(targetTable)
  FormulaEngine.recalcSubtotals(…)
  清理空行
  清除折叠状态
  renderAll()
```

位置在 `DATA[targetTable] = newRows` 之后、`recalcTable` 之前。

## 代码位置

- `js/app.js` — 新增 `autoFixSequences(dataKey)` 函数，与已有的 `autoFixMissingSeqs`、`autoFixUsageRates` 等放在一起
- `js/import-wizard.js` — 在 `_executeImport` 的 BOM 分支中添加调用

## 测试场景

| 场景 | 输入 | 预期输出 |
|------|------|---------|
| 首子行不是 .1 | `2.3.2`, `2.3.3` | `2.3.1`, `2.3.2` |
| 中间跳号 | `2.4.1`, `2.4.3` | `2.4.1`, `2.4.2` |
| 父级跳号+级联 | 兄弟 `1`, `3` + `3.1.1` | 兄弟 `1`, `2` + `2.1.1` |
| 非数字序号 | `A1`, `B2` | 不变 |
| 无子行的单行 | 单行 `4.1` | 不变 |
| 已有正确序号 | `1.1`, `1.2`, `1.3` | 不变 |
