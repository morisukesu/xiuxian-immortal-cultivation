# 修仙模拟器 · 项目改造说明

基于 HTML 文件《凡人修仙传 · 凡人八境 v0.35》的完整功能改造

---

## 📋 改造概览

### 已完成的核心系统

| 系统 | 状态 | 文件位置 |
|------|------|----------|
| **身体经络系统** | ✅ 完成 | `src/lib/body-system.ts` |
| **装备词条系统** | ✅ 完成 | `src/lib/equipment-system.ts` |
| **灵兽宠物系统** | ✅ 完成 | `src/lib/pet-system.ts` |
| **战斗系统** | ✅ 完成 | `src/lib/combat-system.ts` |
| **地图探索系统** | ✅ 完成 | `src/lib/map-system.ts` |
| **装备 API** | ✅ 完成 | `src/app/api/equipment/route.ts` |
| **灵兽 API** | ✅ 完成 | `src/app/api/pet/route.ts` |
| **身体系统 API** | ✅ 完成 | `src/app/api/body/route.ts` |
| **战斗系统 API** | ✅ 完成 | `src/app/api/combat/route.ts` |
| **地图系统 API** | ✅ 完成 | `src/app/api/map/route.ts` |
| **Prisma Schema** | ✅ 更新 | `prisma/schema.prisma` |

---

## 🎯 系统功能详解

### 1. 身体经络系统 (`body-system.ts`)

**核心功能:**
- 7 个身体部位 (头、胸、腹、左臂、右臂、左腿、右腿)
- 每个部位有 HP、状态 (健康/受伤/破损/麻木)
- 14 条主要经络 (十二正经 + 任督二脉)
- 12 个主要穴位 (百会、印堂、膻中、气海等)
- 修炼速度加成计算 (基于经络打通数、穴位激活数、整体坚韧度)

**API 端点:**
```
GET  /api/body?userId=xxx    - 获取身体状态
POST /api/body                - 操作 (init/heal/openMeridian/activateAcupoint/cultivate)
```

### 2. 装备词条系统 (`equipment-system.ts`)

**核心功能:**
- 10 个装备槽位 (头、项链、衣服、左手、右手、戒指×2、腰带、鞋子、武器)
- 5 种品质 (凡品/良品/珍品/极品/仙品)
- 4 种装备类型 (防具/武器/饰品/法宝)
- 15 种词条类型 (修炼速度/经验加成/突破概率/伤害/防御/HP/MP/灵气/暴击/闪避/气运等)
- 装备升级系统 (每 5 级获得新词条)

**API 端点:**
```
GET    /api/equipment?userId=xxx  - 获取装备列表
POST   /api/equipment             - 操作 (draw/upgrade/equip/unequip)
DELETE /api/equipment?equipmentId=xxx - 分解装备
```

### 3. 灵兽宠物系统 (`pet-system.ts`)

**核心功能:**
- 5 种品质 (凡阶/灵阶/王阶/皇阶/圣阶)
- 8 种属性 (火/水/土/风/雷/冰/暗/光)
- 6 种类型 (兽/龙/鸟/妖/灵/混血)
- 属性克制系统
- 忠诚度/精通度系统
- 进化系统 (6 种进化路线)
- 召唤/收回功能

**灵兽模板:**
- 五尾灵狐 → 九尾天狐
- 闪电貂 → 紫电貂王
- 噬金虫 (特殊进化)
- 火灵鸟 → 浴火凤凰
- 碧水金睛兽 (龙族)
- 风雷雕 → 九天雷鹰
- 地灵龟 → 玄武
- 光明白虎 (圣兽)
- 紫电蜂 → 雷光蜂后

**API 端点:**
```
GET    /api/pet?userId=xxx  - 获取灵兽列表
POST   /api/pet             - 操作 (catch/feed/bond/toggleSummon/evolve)
DELETE /api/pet?petId=xxx   - 放生灵兽
```

### 4. 战斗系统 (`combat-system.ts`)

**核心功能:**
- 回合制战斗
- 6 种战斗动作 (攻击/防御/技能/物品/逃跑/护盾)
- 敌人类型 (妖兽/魔修/灵体/Boss)
- 伤害计算 (攻击/防御/暴击/护盾)
- 战斗日志系统
- 战斗计时器
- 玩家属性计算 (基于境界/灵根/身体/装备/灵兽)

**敌人模板:**
- 一阶妖兽·铁臂猿
- 二阶妖兽·赤焰蛇
- 三阶妖兽·风雷雕
- 黑风寨劫修
- 血刀门刺客
- 元婴期·魔道老祖 (Boss)

**API 端点:**
```
GET  /api/combat?userId=xxx  - 获取战斗状态
POST /api/combat              - 操作 (start/action/end)
```

### 5. 地图探索系统 (`map-system.ts`)

**核心功能:**
- 8×8 网格地图
- 迷雾系统 (未探索区域)
- 9 种节点类型 (起点/战斗/宝藏/治疗/事件/坊市/Boss/传送门/空地)
- 步数限制系统
- 层数递增 (每 5 层出现 Boss)
- 随机事件处理

**秘境名称:**
- 血色禁地、虚天殿、坠魔谷、昆吾山、苍坤遗迹
- 古修士洞府、海底灵穴、天南秘境、乱星海遗迹、灵界秘境

**API 端点:**
```
GET  /api/map?userId=xxx  - 获取地图状态
POST /api/map              - 操作 (start/move/end)
```

---

## 🗄️ 数据库更新

### 新增字段 (Cultivator 表)

```prisma
// 身体系统
bodyState         String?  // JSON: BodySystemState
bodyToughness     Int      @default(50)

// 战斗属性
hp                Int      @default(100)
maxHp             Int      @default(100)
mp                Int      @default(50)
maxMp             Int      @default(50)

// 装备系统
equipment         Equipment[]
equippedItems     String?  // JSON: { slot: equipmentId }

// 灵兽系统
pets              Pet[]

// 地图探索
currentMap        String?  // JSON: MapState
mapLevel          Int      @default(1)

// 气运/幸运值
luck              Int      @default(50)

// 宗门/势力
sect              String?
sectContribution  Int      @default(0)
```

### 新增表

```prisma
// 装备表
model Equipment {
  id, cultivatorId, name, type, slot, quality,
  baseStats (JSON), affixes (JSON),
  level, exp, description, icon, isEquipped
}

// 灵兽表
model Pet {
  id, cultivatorId, name, type, attribute, quality,
  level, exp, hp, maxHp, attack, defense, speed,
  loyalty, mastery, isSummoned, isBonded,
  description, icon, skill, skillEffect
}
```

---

## 🎨 UI 改造建议

### 需要新增的组件

1. **身体经络图组件** (`BodyMeridianDiagram.tsx`)
   - SVG 人体图
   - 部位 HP 显示
   - 经络/穴位状态
   - 点击交互

2. **装备界面组件** (`EquipmentPanel.tsx`)
   - 10 个装备槽位
   - 装备详情弹窗
   - 词条显示
   - 强化/分解功能

3. **灵兽界面组件** (`PetPanel.tsx`)
   - 灵兽卡片
   - 属性面板
   - 进化预览
   - 召唤状态切换

4. **战斗界面组件** (`BattleOverlay.tsx`)
   - 战斗场景
   - 行动按钮
   - 战斗日志
   - 计时器

5. **地图探索组件** (`MapExplorer.tsx`)
   - 网格地图
   - 迷雾效果
   - 节点图标
   - 移动控制

### Dashboard 页面改造

建议在现有 Dashboard 基础上添加 Tab 导航:
- 修炼 (原有)
- 身体 (新增)
- 装备 (新增)
- 灵兽 (新增)
- 探索 (新增)
- 战斗 (新增)

---

## 🚀 下一步工作

### 1. 数据库迁移

```bash
cd cultivation-simulator
npx prisma generate
npx prisma db push
```

### 2. 安装依赖

```bash
npm install
```

### 3. 创建 UI 组件

参考 HTML 文件的设计风格:
- 中国风水墨色调
- 玻璃态效果 (backdrop-filter)
- 金色点缀
- 动画效果 (灵气流动、光效)

### 4. 更新 Dashboard 页面

整合所有新系统，创建完整的修仙体验。

### 5. 添加新功能

- 拍卖行系统
- 坊市交易
- 宗门系统
- 成就系统
- 排行榜

---

## 📝 注意事项

1. **数据兼容性**: 现有用户数据不会丢失，新字段有默认值
2. **性能优化**: 战斗状态使用内存存储，生产环境建议用 Redis
3. **安全性**: 所有 API 都需要用户验证
4. **移动端适配**: HTML 文件已做好移动端优化，React 组件需参考

---

## 🎮 游戏流程

```
创建角色 → 选择灵根 → 日常修炼 → 打通经络 → 获取装备 → 捕捉灵兽
    ↓
探索秘境 → 遭遇战斗 → 获得奖励 → 强化自身 → 突破境界 → 飞升仙界
```

---

**改造完成度**: 后端系统 100% | 前端 UI 待实现

**下一步**: 创建 React 组件，更新 Dashboard 页面
