# AI 算力调度专家 (算力管家) 配置指南

---

## 🎯 概述

本项目已升级支持 **OpenAI 兼容接口协议**，可无缝对接 **AI 算力调度专家 (算力管家)** 平台。

---

## 📋 快速配置

### 1. 获取 API Key

登录算力管家控制台：
```
https://算力管家平台/console/api-keys
```

创建新的 API Key，复制保存。

### 2. 配置环境变量

编辑 `.env` 文件：

```bash
# AI 提供商
AI_PROVIDER="openai"

# API Key (从算力管家获取)
AI_API_KEY="sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"

# Base URL (算力管家 OpenAI 兼容端点)
AI_BASE_URL="https://api.算力管家平台.com/v1"

# 模型名称
AI_MODEL="gpt-4o-mini"
```

### 3. 测试连接

```typescript
import { testAIConnection } from "@/lib";

const result = await testAIConnection();
console.log(result);
// { success: true } 或 { success: false, error: "..." }
```

---

## 🔧 算力管家平台信息

### 支持的模型

| 模型 | 适用场景 | 成本 |
|------|---------|------|
| gpt-4o | 高质量叙事、复杂任务 | 高 |
| gpt-4o-mini | 日常修炼叙事、对话 | 低 ⭐ |
| llama3-70b | 中文叙事、性价比高 | 中 |
| qwen-max | 中文优化、仙侠风格 | 中 |
| glm-4 | 中文理解、长文本 | 中 |

### API 端点

```
# 官方端点
https://api.算力管家平台.com/v1

# 国内加速
https://api-cn.算力管家平台.com/v1

# 本地部署 (如有)
http://localhost:8080/v1
```

---

## 💰 成本优化建议

### 推荐配置

```bash
# 日常使用 (性价比高)
AI_MODEL="gpt-4o-mini"
AI_BASE_URL="https://api.算力管家平台.com/v1"

# 高质量叙事 (特殊场景)
AI_MODEL="gpt-4o"
```

### 降级方案

项目内置 **25 套叙事模板**，当 API 不可用时自动降级：
- ✅ 无需额外配置
- ✅ 保持用户体验
- ✅ 零成本运行

---

## 🔍 使用示例

### 日常修炼叙事

```typescript
import { generateDailyCultivationNarrative } from "@/lib";

const narrative = await generateDailyCultivationNarrative({
  cultivatorName: "韩立",
  spiritualRoot: "天灵根",
  realm: "炼气期",
  realmLevel: 5,
  taskType: "STUDY",
  cultivationExp: 100,
});

console.log(narrative);
// {
//   title: "静心悟道",
//   narrative: "韩立静坐于蒲团之上...",
//   mood: "悟",
//   hint: "学而不思则罔"
// }
```

### 境界突破叙事

```typescript
import { generateBreakthroughNarrative } from "@/lib";

const narrative = await generateBreakthroughNarrative({
  cultivatorName: "韩立",
  spiritualRoot: "天灵根",
  fromRealm: "炼气期",
  fromLevel: 13,
  toRealm: "筑基期",
  toLevel: 1,
  totalExp: 500,
  breakthroughCount: 1,
});
```

### 随机奇遇叙事

```typescript
import { generateEncounterNarrative } from "@/lib";

const encounter = await generateEncounterNarrative({
  cultivatorName: "韩立",
  spiritualRoot: "天灵根",
  realm: "炼气期",
  realmLevel: 5,
});
```

---

## 📊 API 调用统计

### 查看用量

登录算力管家控制台：
```
https://算力管家平台/console/usage
```

### 设置预算告警

```
控制台 → 账单 → 预算设置 → 创建预算
```

建议设置：
- 日用量告警：¥10
- 月用量告警：¥100

---

## 🛡️ 故障处理

### 常见问题

| 问题 | 解决方案 |
|------|---------|
| API Key 无效 | 检查 `.env` 配置，确认 Key 未过期 |
| 连接超时 | 检查 `AI_BASE_URL` 是否正确 |
| 模型不存在 | 确认 `AI_MODEL` 在算力管家平台可用 |
| 余额不足 | 充值或切换更便宜的模型 |

### 日志查看

```bash
# 开发模式
npm run dev

# 查看控制台输出
# AI 请求和响应会打印到终端
```

### 降级测试

临时设置错误的 API Key 测试降级方案：
```bash
AI_API_KEY="invalid-key"
```

应自动使用 25 套模板叙事。

---

## 🚀 高级配置

### 多模型路由

```typescript
// src/lib/ai-client.ts 可扩展支持
const modelRouter = {
  "narrative": "gpt-4o",      // 叙事用高质量模型
  "dialogue": "gpt-4o-mini",  // 对话用性价比模型
  "fallback": "llama3",       // 备用模型
};
```

### 缓存配置

```typescript
// 缓存 AI 响应 (减少重复调用)
const cache = new Map<string, AIResponse>();
```

### 批量处理

```typescript
// 批量生成叙事 (减少 API 调用次数)
const narratives = await Promise.all(
  tasks.map(task => generateDailyCultivationNarrative(task))
);
```

---

## 📖 参考资料

- [算力管家平台文档](https://算力管家平台/docs)
- [OpenAI 兼容协议](https://platform.openai.com/docs/api-reference)
- [AI_API_UPGRADE.md](./AI_API_UPGRADE.md) - 项目 AI API 升级说明

---

**配置完成！道友可以开始修仙了！🧘‍♂️**
