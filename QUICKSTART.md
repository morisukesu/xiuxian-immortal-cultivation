# 修仙模拟器 · 快速启动指南

---

## 🎯 项目概述

基于 Next.js + Prisma + SQLite 的修仙题材游戏，参考《凡人修仙传》世界观。

**本次改造**: 根据 HTML 文件《凡人修仙传 · 凡人八境 v0.35》新增 5 大核心系统

---

## 🚀 快速启动

### 1. 安装依赖

```bash
cd cultivation-simulator
npm install
```

### 2. 生成 Prisma 客户端

```bash
npx prisma generate
```

### 3. 更新数据库

```bash
npx prisma db push
```

### 4. 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:3000

---

## 📁 项目结构

```
cultivation-simulator/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── auth/          # 认证 API
│   │   │   ├── cultivator/    # 修仙者 API
│   │   │   ├── encounter/     # 奇遇 API
│   │   │   ├── narrative/     # 叙事 API
│   │   │   ├── tasks/         # 任务 API
│   │   │   ├── equipment/     # ✨ 新增：装备 API
│   │   │   ├── pet/           # ✨ 新增：灵兽 API
│   │   │   ├── body/          # ✨ 新增：身体系统 API
│   │   │   ├── combat/        # ✨ 新增：战斗系统 API
│   │   │   └── map/           # ✨ 新增：地图系统 API
│   │   ├── create/            # 创建角色页面
│   │   ├── dashboard/         # 主面板 (待更新)
│   │   ├── login/             # 登录页面
│   │   └── page.tsx           # 首页
│   ├── components/ui/         # shadcn UI 组件
│   ├── lib/
│   │   ├── cultivation-data.ts    # 修炼体系数据
│   │   ├── encounter-data.ts      # 奇遇数据
│   │   ├── narrative.ts           # AI 叙事引擎
│   │   ├── body-system.ts         # ✨ 新增：身体经络系统
│   │   ├── equipment-system.ts    # ✨ 新增：装备词条系统
│   │   ├── pet-system.ts          # ✨ 新增：灵兽系统
│   │   ├── combat-system.ts       # ✨ 新增：战斗系统
│   │   ├── map-system.ts          # ✨ 新增：地图探索系统
│   │   └── index.ts               # 统一导出
│   └── generated/prisma/          # Prisma 客户端
├── prisma/
│   └── schema.prisma              # ✨ 已更新：数据库 Schema
├── package.json
└── MODIFICATIONS.md               # 详细改造说明
```

---

## 🎮 核心系统

### 1. 修炼系统 (已有)
- 灵根：杂灵根 → 天灵根
- 境界：炼气 → 渡劫 (9 大境界)
- 任务：学习/运动/早睡/冥想 → 修炼值
- AI 叙事：生成修炼场景描述

### 2. 身体经络系统 (✨ 新增)
- 7 个身体部位，各有 HP 和状态
- 14 条经络，打通提升修炼速度
- 12 个穴位，激活增加灵力存储
- 整体坚韧度影响战斗属性

### 3. 装备系统 (✨ 新增)
- 10 个装备槽位
- 5 种品质 (凡/良/珍/极/仙)
- 随机词条生成
- 装备升级/强化

### 4. 灵兽系统 (✨ 新增)
- 9 种灵兽模板
- 属性克制系统
- 进化路线
- 忠诚度/精通度

### 5. 战斗系统 (✨ 新增)
- 回合制战斗
- 多种战斗动作
- 伤害计算 (攻击/防御/暴击/护盾)
- 战斗日志

### 6. 地图探索 (✨ 新增)
- 8×8 网格地图
- 迷雾系统
- 随机事件节点
- 层数递增

---

## 🔧 API 使用示例

### 获取装备列表
```typescript
const res = await fetch('/api/equipment?userId=xxx');
const data = await res.json();
// data.equipment: Equipment[]
```

### 抽取装备
```typescript
const res = await fetch('/api/equipment', {
  method: 'POST',
  body: JSON.stringify({ userId: 'xxx', action: 'draw' }),
});
const data = await res.json();
// data.equipment: Equipment
```

### 捕捉灵兽
```typescript
const res = await fetch('/api/pet', {
  method: 'POST',
  body: JSON.stringify({ userId: 'xxx', action: 'catch' }),
});
const data = await res.json();
// data.pet: Pet
```

### 开始战斗
```typescript
const res = await fetch('/api/combat', {
  method: 'POST',
  body: JSON.stringify({ userId: 'xxx', action: 'start' }),
});
const data = await res.json();
// data.battle: BattleState
```

### 探索地图
```typescript
const res = await fetch('/api/map', {
  method: 'POST',
  body: JSON.stringify({ userId: 'xxx', action: 'start' }),
});
const data = await res.json();
// data.map: MapState
```

---

## 🎨 UI 开发建议

### 设计风格 (参考 HTML 文件)

```css
/* 中国风水墨色调 */
--ink: rgba(8, 12, 20, 0.72);
--paper: #ece8df;
--gold: #a8986e;
--jade: #2e6848;
--cinnabar: #7a3030;

/* 玻璃态效果 */
backdrop-filter: blur(12px);
-webkit-backdrop-filter: blur(12px);

/* 金色边框 */
border: 1px solid rgba(138, 122, 90, 0.15);
```

### 组件开发优先级

1. **Dashboard 改造** - 添加 Tab 导航
2. **身体经络图** - SVG 人体图 + 交互
3. **装备面板** - 槽位 + 详情弹窗
4. **灵兽面板** - 卡片 + 属性
5. **战斗界面** - 覆盖层 + 行动按钮
6. **地图探索** - 网格 + 迷雾

---

## 📊 数据模型

### Cultivator (修仙者)
```prisma
- 基本信息：name, spiritualRoot, realm, realmLevel
- 修炼值：cultivationExp, totalExp
- 战斗属性：hp, maxHp, mp, maxMp
- 身体状态：bodyState (JSON), bodyToughness
- 装备：equipment (关联表)
- 灵兽：pets (关联表)
- 地图：currentMap (JSON), mapLevel
```

### Equipment (装备)
```prisma
- 基本信息：name, type, slot, quality
- 属性：baseStats (JSON), affixes (JSON)
- 等级：level, exp
- 状态：isEquipped
```

### Pet (灵兽)
```prisma
- 基本信息：name, type, attribute, quality
- 属性：level, hp, attack, defense, speed
- 关系：loyalty, mastery, isBonded, isSummoned
- 技能：skill, skillEffect
```

---

## 🐛 常见问题

### Q: 数据库迁移失败？
```bash
# 删除旧数据库
rm prisma/dev.db

# 重新生成
npx prisma db push
```

### Q: Prisma 客户端未生成？
```bash
npx prisma generate
```

### Q: 开发服务器启动失败？
```bash
# 检查 Node 版本 (需要 18+)
node --version

# 重新安装依赖
rm -rf node_modules package-lock.json
npm install
```

---

## 📖 参考资料

- [MODIFICATIONS.md](./MODIFICATIONS.md) - 详细改造说明
- [HTML 文件](../修仙世界-v0.35) - 设计参考
- [Prisma 文档](https://www.prisma.io/docs)
- [Next.js 文档](https://nextjs.org/docs)

---

**祝道友修仙愉快！🧘‍♂️**
