# ⚔️ 修仙模拟器 - 凡人修仙传

> 把日常修炼变成修仙世界的真实冒险

---

## 🎮 在线体验

🔗 **Demo 地址：** http://36.213.31.152:3000

> ⚠️ Demo 为开发环境演示，数据可能随时重置。建议自行部署获得完整体验。

### 一键部署到 Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fmorisukesu%2Fxiuxian-immortal-cultivation&project-name=xiuxian-immortal-cultivation&framework=nextjs)

点击上方按钮即可将项目一键部署到 Vercel，获得永久的在线 Demo 地址。

---

## 📖 游戏简介

《修仙模拟器》是一款基于 Next.js 开发的**互动式修仙角色扮演游戏**，灵感来源于经典玄幻小说《凡人修仙传》。玩家将扮演一名凡人修士，通过完成现实中的修炼任务（学习、运动、早睡等），在修仙世界中积累修为、突破境界、探索秘境。

**核心理念：** 现实修炼 × 虚拟世界 - 你的每一次努力都会在修仙世界中留下印记。

---

## 🙏 致谢

本项目深受 [原始仓库作者](https://github.com/YoungJack/cultivation-simulator) 开源项目的启发，在此特别感谢：

- **原始仓库作者** - 感谢提供精美的 HTML 原型和完整的游戏设计灵感
- **《凡人修仙传》作者忘语** - 感谢创作这部经典修仙小说，为无数修仙爱好者提供了精神食粮

本项目是在原作启发下的二次创作，致敬原始作者的开源精神和文学作品的深远影响。

---

## 🌟 核心特色

### 🔮 AI 驱动的修仙叙事
- 每次修炼都有专属的修仙故事生成
- 境界突破时触发独特的突破叙事
- 随机奇遇事件，每次选择都影响后续发展
- 内置 25 套叙事模板 + AI 动态生成

### 📊 六大游戏系统

| 系统 | 功能 | 特色 |
|------|------|------|
| **🧘 修炼系统** | 境界突破、经验积累、灵力修炼 | 从炼气期到渡劫期的完整修仙路径 |
| **💪 身体系统** | 经络打通、穴位激活、肉身强化 | 14 条经络 + 12 个主要穴位的真实修炼模拟 |
| **⚔️ 战斗系统** | 回合制战斗、技能释放、护盾防御 | 策略性战斗，6 种动作选择 |
| **🛡️ 装备系统** | 装备抽取、词条强化、槽位管理 | 10 个装备槽位，5 种品质，15 种词条类型 |
| **🐉 灵兽系统** | 灵兽捕捉、进化培养、战斗召唤 | 9 种灵兽模板，8 种属性，6 种进化路线 |
| **🗺️ 地图探索** | 秘境探索、迷雾系统、随机事件 | 8×8 网格地图，9 种节点类型 |

---

## 🏗️ 技术架构

```
┌─────────────────────────────────────────┐
│           Next.js 16.2.9               │
│    (App Router + Server Components)     │
├─────────────────────────────────────────┤
│  React 19 + TypeScript 5                │
│  Tailwind CSS 4 + shadcn/ui            │
├─────────────────────────────────────────┤
│  Prisma ORM + SQLite                    │
│  (可扩展至 MySQL/PostgreSQL)            │
├─────────────────────────────────────────┤
│  AI 客户端 (OpenAI 兼容协议)             │
│  内置降级方案 (25 套叙事模板)           │
└─────────────────────────────────────────┘
```

### 技术栈详情

| 类别 | 技术 | 版本 |
|------|------|------|
| **前端框架** | Next.js | 16.2.9 |
| **UI 库** | React | 19.2.4 |
| **语言** | TypeScript | 5.x |
| **样式** | Tailwind CSS | 4.3.1 |
| **UI 组件** | shadcn/ui | latest |
| **图标** | lucide-react | 1.17.0 |
| **动画** | framer-motion | 12.40.0 |
| **ORM** | Prisma | 7.8.0 |
| **数据库** | SQLite | dev.db |
| **AI** | OpenAI 兼容接口 | - |

---

## 🚀 快速开始

### 环境要求
- Node.js 18+
- npm 9+

### 安装步骤

```bash
# 克隆仓库
git clone https://github.com/morisukesu/xiuxian-immortal-cultivation.git
cd xiuxian-immortal-cultivation

# 安装依赖
npm install

# 配置环境变量
cp .env.example .env
# 编辑 .env 配置 AI API

# 生成 Prisma 客户端
npx prisma generate

# 启动开发服务器
npm run dev
```

### 访问地址
- 本地：http://localhost:3000
- 公网：http://[你的 IP]:3000

---

## 🎮 游戏流程

```
创建角色 → 选择灵根 → 日常修炼 → 打通经络 → 获取装备
    ↓
捕捉灵兽 → 探索秘境 → 遭遇战斗 → 获得奖励 → 突破境界
    ↓
飞升仙界 → 成为传奇
```

### 角色创建
1. **取道号** - 为你的修仙者命名
2. **测灵根** - 随机生成灵根类型（天灵根/异灵根/双灵根/三灵根/四灵根/杂灵根）
3. **踏入仙途** - 开始你的修仙之旅

### 日常修炼
| 类型 | 现实行为 | 修仙效果 |
|------|----------|----------|
| 📚 学习 | 读书学习 | 悟道修炼 |
| 💪 运动 | 身体锻炼 | 锻体淬炼 |
| 🌙 早睡 | 规律作息 | 静修养神 |
| 🧘 冥想 | 打坐冥想 | 蕴养灵力 |

---

## 🏰 境界系统

修仙者从凡人到飞升需要经历以下境界：

| 境界 | 等级 | 特色 |
|------|------|------|
| 炼气期 | 1-13 | 修炼入门，感应灵气 |
| 筑基期 | 1-9 | 奠定道基，初窥门径 |
| 结丹期 | 1-9 | 凝结金丹，脱胎换骨 |
| 元婴期 | 1-9 | 元婴出窍，神通初显 |
| 化神期 | 1-9 | 化神归一，法力无边 |
| 炼虚期 | 1-9 | 虚空炼体，超凡脱俗 |
| 合体期 | 1-9 | 三花聚顶，五气朝元 |
| 大乘期 | 1-9 | 大乘圆满，接近飞升 |
| 渡劫期 | 1-9 | 九重天劫，生死考验 |

**灵根影响：**
- 天灵根：修炼速度 ×1.3
- 异灵根：修炼速度 ×1.2
- 双灵根：修炼速度 ×1.1
- 三灵根：修炼速度 ×1.0
- 四灵根：修炼速度 ×0.9
- 杂灵根：修炼速度 ×0.8

---

## 📁 项目结构

```
xiuxian-immortal-cultivation/
├── src/
│   ├── app/                    # Next.js 应用路由
│   │   ├── api/                # API 路由
│   │   │   ├── body/          # 身体系统 API
│   │   │   ├── combat/        # 战斗系统 API
│   │   │   ├── equipment/     # 装备系统 API
│   │   │   ├── map/           # 地图系统 API
│   │   │   ├── pet/           # 灵兽系统 API
│   │   │   ├── narrative/     # AI 叙事 API
│   │   │   └── tasks/         # 任务系统 API
│   │   ├── dashboard/         # 主游戏页面
│   │   ├── create/            # 角色创建
│   │   └── login/             # 登录页面
│   ├── components/            # React 组件
│   │   ├── BattleOverlay.tsx      # 战斗浮层
│   │   ├── BodyMeridianDiagram.tsx # 身体经络图
│   │   ├── EquipmentPanel.tsx     # 装备面板
│   │   ├── MapExplorer.tsx        # 地图探索
│   │   └── PetPanel.tsx           # 灵兽面板
│   └── lib/                   # 后端逻辑
│       ├── body-system.ts       # 身体系统
│       ├── combat-system.ts     # 战斗系统
│       ├── equipment-system.ts  # 装备系统
│       ├── map-system.ts        # 地图系统
│       ├── pet-system.ts        # 灵兽系统
│       ├── narrative.ts         # AI 叙事
│       └── ai-client.ts         # AI 客户端
├── prisma/                    # 数据库 Schema
│   └── schema.prisma
├── public/                    # 静态资源
├── .env.example              # 环境变量示例
├── next.config.ts            # Next.js 配置
├── vercel.json               # Vercel 部署配置
└── package.json              # 项目配置
```

---

## 🔮 AI 叙事系统

### 工作原理
1. **玩家行为触发** - 修炼、战斗、探索等行为
2. **AI 生成叙事** - 根据行为生成修仙故事
3. **降级方案** - API 不可用时使用内置模板

### 叙事类型
| 类型 | 触发条件 | 特色 |
|------|----------|------|
| 日常修炼叙事 | 完成修炼任务 | 描述修炼过程和感悟 |
| 境界突破叙事 | 修为积累突破 | 突破时的天地异象 |
| 随机奇遇叙事 | 探索秘境 | 随机事件和选择 |

### 配置示例
```env
# .env
AI_PROVIDER="openai"
AI_API_KEY="your-api-key"
AI_BASE_URL="https://api.openai.com/v1"
AI_MODEL="gpt-4o-mini"
```

---

## 📊 数据库设计

### 核心数据表

| 表名 | 用途 | 关键字段 |
|------|------|----------|
| `User` | 用户账号 | id, name, email, password |
| `Cultivator` | 修仙者信息 | name, realm, realmLevel, spiritualRoot |
| `DailyTask` | 每日任务 | type, completed, cultivationBonus |
| `GameEvent` | 游戏事件 | type, title, narrative, createdAt |
| `Equipment` | 装备数据 | name, quality, slot, baseStats, affixes |
| `Pet` | 灵兽数据 | name, type, attribute, quality, level |
| `ShareCard` | 分享卡片 | imageUrl, title, description |

---

## 🛠️ 开发指南

### 添加新功能

1. **创建 API 路由** (`src/app/api/`)
2. **实现后端逻辑** (`src/lib/`)
3. **创建 UI 组件** (`src/components/`)
4. **更新数据库 Schema** (`prisma/schema.prisma`)

### 部署建议

| 环境 | 推荐 | 说明 |
|------|------|------|
| 开发 | SQLite | 轻量，无需配置 |
| 生产 | MySQL/PostgreSQL | 稳定，可扩展 |
| 部署 | Vercel | 一键部署 Next.js |
| 数据库 | PlanetScale | Serverless MySQL |

---

## 📜 许可证

本项目为同人创作，致敬《凡人修仙传》作者忘语与原始仓库作者的开源贡献。与官方无关。

---

**开始你的修仙之旅！** ⚔️
