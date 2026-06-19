# AI API 升级说明 — 支持 OpenAI 兼容接口

---

## 🎯 改造目标

将原有的 Claude API 调用升级为**支持 OpenAI 兼容协议**，允许使用任何支持 OpenAI 接口的模型服务。

---

## ✅ 已完成改造

### 1. 新增 `ai-client.ts` - AI 客户端统一抽象层

**核心功能:**
- 支持 OpenAI 兼容接口 (自定义 Base URL)
- 兼容 Anthropic Claude API (可选)
- 环境变量驱动配置
- 连接测试功能
- 统一响应格式

**配置方式:**
```typescript
// 从环境变量自动加载
const client = AIClient.fromEnv();

// 或手动配置
const client = AIClient.create({
  provider: "openai",
  apiKey: "your-api-key",
  baseURL: "https://api.openai.com/v1",
  model: "gpt-4o-mini",
});
```

### 2. 更新 `narrative.ts` - AI 叙事引擎

**改动:**
- ✅ 移除 `@anthropic-ai/sdk` 直接调用
- ✅ 使用 `ai-client.ts` 统一接口
- ✅ 所有叙事函数保持不变 (向后兼容)
- ✅ 降级方案 (25 套模板) 保留

### 3. 环境变量配置 (`.env.example`)

```bash
# AI 提供商: openai | anthropic | custom
AI_PROVIDER="openai"

# API Key
AI_API_KEY="your-api-key-here"

# Base URL (OpenAI 兼容端点)
AI_BASE_URL="https://api.openai.com/v1"

# 模型名称
AI_MODEL="gpt-4o-mini"
```

---

## 🔧 使用方式

### 方式 1: OpenAI 官方 API

```bash
AI_PROVIDER="openai"
AI_API_KEY="sk-your-key"
AI_BASE_URL="https://api.openai.com/v1"
AI_MODEL="gpt-4o-mini"
```

### 方式 2: Azure OpenAI

```bash
AI_PROVIDER="openai"
AI_API_KEY="your-azure-key"
AI_BASE_URL="https://your-resource.openai.azure.com/openai/deployments/your-deployment"
AI_MODEL="gpt-4"
```

### 方式 3: 自定义兼容服务 (如 Ollama)

```bash
AI_PROVIDER="openai"
AI_API_KEY="not-needed"
AI_BASE_URL="http://localhost:11434/v1"
AI_MODEL="llama3"
```

### 方式 4: 保持 Claude API

```bash
AI_PROVIDER="anthropic"
AI_API_KEY="sk-ant-your-key"
AI_MODEL="claude-sonnet-4-5"
```

---

## 📊 API 对比

| 特性 | 旧版 (Claude) | 新版 (OpenAI 兼容) |
|------|--------------|-------------------|
| **提供商** | 仅 Anthropic | OpenAI / Azure / Ollama / 任意兼容服务 |
| **配置** | 硬编码 | 环境变量驱动 |
| **Base URL** | 固定 | 可自定义 |
| **模型** | claude-sonnet-4-6 | 任意模型 (gpt-4o, llama3, qwen, etc.) |
| **降级方案** | ✅ 25 套模板 | ✅ 保留 |
| **向后兼容** | ❌ | ✅ |

---

## 🚀 迁移步骤

### 1. 创建 `.env` 文件

```bash
cp .env.example .env
```

### 2. 配置环境变量

编辑 `.env`:
```bash
AI_PROVIDER="openai"
AI_API_KEY="your-api-key"
AI_BASE_URL="https://your-api.com/v1"
AI_MODEL="your-model"
```

### 3. 测试连接

```typescript
import { testAIConnection } from "@/lib";

const result = await testAIConnection();
console.log(result);
// { success: true } 或 { success: false, error: "..." }
```

### 4. 使用叙事功能

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
```

---

## 📝 支持的服务商

| 服务商 | 兼容模式 | 配置示例 |
|--------|---------|---------|
| OpenAI | ✅ | `AI_BASE_URL="https://api.openai.com/v1"` |
| Azure OpenAI | ✅ | `AI_BASE_URL="https://your-resource.openai.azure.com"` |
| Ollama | ✅ | `AI_BASE_URL="http://localhost:11434/v1"` |
| LM Studio | ✅ | `AI_BASE_URL="http://localhost:1234/v1"` |
| vLLM | ✅ | `AI_BASE_URL="http://your-server:8000/v1"` |
| 阿里云通义 | ✅ | `AI_BASE_URL="https://dashscope.aliyuncs.com/compatible-mode/v1"` |
| 智谱 AI | ✅ | `AI_BASE_URL="https://open.bigmodel.cn"` |
| 月之暗面 | ✅ | `AI_BASE_URL="https://api.moonshot.cn/v1"` |
| 零一万物 | ✅ | `AI_BASE_URL="https://api.lingyiwanwu.com/v1"` |
| Anthropic Claude | ✅ | `AI_PROVIDER="anthropic"` |

---

## 🔍 代码变更详情

### 文件变更

| 文件 | 状态 | 说明 |
|------|------|------|
| `src/lib/ai-client.ts` | ✨ 新增 | AI 客户端统一抽象层 |
| `src/lib/narrative.ts` | 🔄 更新 | 使用 ai-client 替代 Anthropic SDK |
| `src/lib/index.ts` | 🔄 更新 | 导出 ai-client |
| `.env.example` | ✨ 新增 | 环境变量配置模板 |

### 依赖变更

| 依赖 | 状态 | 说明 |
|------|------|------|
| `@anthropic-ai/sdk` | ⚠️ 可选 | 仅在使用 Claude 时需要 |
| `openai` (可选) | 📦 可选 | 如果使用 OpenAI SDK |
| `node-fetch` | 🔧 内置 | Next.js 内置 fetch |

---

## 🎯 优势

1. **供应商中立** - 不再绑定特定 AI 提供商
2. **灵活切换** - 只需修改环境变量即可切换服务
3. **成本优化** - 可选择最便宜的模型服务
4. **本地部署** - 支持 Ollama 等本地模型
5. **向后兼容** - 保留所有现有功能
6. **降级方案** - API 不可时使用 25 套模板

---

## 🐛 常见问题

### Q: 如何测试 API 连接？
```typescript
import { testAIConnection } from "@/lib";
console.log(await testAIConnection());
```

### Q: 如何切换模型？
只需修改 `AI_MODEL` 环境变量即可。

### Q: 是否支持流式输出？
当前版本不支持流式输出，但 `ai-client.ts` 架构支持扩展。

### Q: 如何恢复 Claude API？
设置 `AI_PROVIDER="anthropic"` 并提供 `AI_API_KEY`。

---

**改造完成！🎉**

现在项目支持任何 OpenAI 兼容的 AI 服务！
