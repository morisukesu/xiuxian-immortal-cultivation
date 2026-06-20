// ============================================================
// AI 客户端 — 支持 OpenAI 兼容协议 / Claude / 其他大模型
// ============================================================

import Anthropic from "@anthropic-ai/sdk";

// ============================================================
// 类型定义
// ============================================================

export interface Message {
  role: "user" | "assistant" | "system";
  content: string;
}

export interface AIResponse {
  text: string;
  model: string;
  usage?: {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
  };
}

export interface AIConfig {
  provider: "openai" | "anthropic" | "custom";
  apiKey: string;
  baseURL?: string;  // OpenAI 兼容的 Base URL
  model?: string;
}

// ============================================================
// AI 客户端类
// ============================================================

export class AIClient {
  private config: AIConfig;
  private anthropic: Anthropic | null = null;

  constructor(config: AIConfig) {
    this.config = config;
  }

  /**
   * 创建客户端实例
   */
  static create(config: AIConfig): AIClient {
    return new AIClient(config);
  }

  /**
   * 从环境变量加载配置
   */
  static fromEnv(): AIClient {
    const provider = process.env.AI_PROVIDER || "openai";
    const apiKey = process.env.AI_API_KEY || process.env.OPENAI_API_KEY || process.env.ANTHROPIC_API_KEY || "";
    const baseURL = process.env.AI_BASE_URL || process.env.OPENAI_BASE_URL;
    const model = process.env.AI_MODEL || process.env.OPENAI_MODEL || "gpt-4o-mini";

    return new AIClient({
      provider: provider as "openai" | "anthropic" | "custom",
      apiKey,
      baseURL,
      model,
    });
  }

  /**
   * 发送消息并获取响应
   */
  async chat(messages: Message[], options?: {
    system?: string;
    maxTokens?: number;
    temperature?: number;
  }): Promise<AIResponse> {
    const { system, maxTokens = 1000, temperature = 0.7 } = options || {};

    if (this.config.provider === "anthropic") {
      return this.chatAnthropic(messages, { system, maxTokens, temperature });
    } else {
      // OpenAI 或自定义兼容端点
      return this.chatOpenAI(messages, { system, maxTokens, temperature });
    }
  }

  /**
   * Anthropic Claude API
   */
  private async chatAnthropic(
    messages: Message[],
    options: { system?: string; maxTokens: number; temperature: number }
  ): Promise<AIResponse> {
    if (!this.anthropic) {
      this.anthropic = new Anthropic({
        apiKey: this.config.apiKey,
      });
    }

    const userMessages = messages.filter((m) => m.role !== "system");
    const systemMessage = messages.find((m) => m.role === "system");

    const response = await this.anthropic.messages.create({
      model: this.config.model || "claude-sonnet-4-5",
      max_tokens: options.maxTokens,
      system: options.system || systemMessage?.content,
      messages: userMessages.map((m) => ({
        role: m.role as "user" | "assistant",
        content: m.content,
      })),
      temperature: options.temperature,
    });

    const text = response.content
      .filter((c) => c.type === "text")
      .map((c) => c.text)
      .join("");

    return {
      text,
      model: response.model,
      usage: {
        promptTokens: response.usage.input_tokens,
        completionTokens: response.usage.output_tokens,
        totalTokens: response.usage.input_tokens + response.usage.output_tokens,
      },
    };
  }

  /**
   * OpenAI 兼容 API (支持自定义 Base URL)
   */
  private async chatOpenAI(
    messages: Message[],
    options: { system?: string; maxTokens: number; temperature: number }
  ): Promise<AIResponse> {
    const baseURL = this.config.baseURL || "https://api.openai.com/v1";
    const model = this.config.model || "gpt-4o-mini";

    // 构建请求体
    const allMessages: Message[] = [];
    if (options.system) {
      allMessages.push({ role: "system", content: options.system });
    }
    allMessages.push(...messages.filter((m) => m.role !== "system"));

    const response = await fetch(`${baseURL}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.config.apiKey}`,
      },
      body: JSON.stringify({
        model,
        messages: allMessages,
        max_tokens: options.maxTokens,
        temperature: options.temperature,
        response_format: { type: "json_object" }, // 强制 JSON 输出
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`AI API 请求失败：${response.status} ${error}`);
    }

    const data = await response.json();

    return {
      text: data.choices?.[0]?.message?.content || "",
      model: data.model || model,
      usage: data.usage ? {
        promptTokens: data.usage.prompt_tokens,
        completionTokens: data.usage.completion_tokens,
        totalTokens: data.usage.total_tokens,
      } : undefined,
    };
  }

  /**
   * 测试连接
   */
  async testConnection(): Promise<{ success: boolean; error?: string }> {
    try {
      const response = await this.chat([
        { role: "user", content: "请回复\"连接成功\"，不要有其他内容。" }
      ], { maxTokens: 20 });
      
      return {
        success: response.text.includes("连接成功") || response.text.length > 0,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : "未知错误",
      };
    }
  }
}

// ============================================================
// 全局单例
// ============================================================

let globalClient: AIClient | null = null;

export function getAIClient(): AIClient {
  if (!globalClient) {
    globalClient = AIClient.fromEnv();
  }
  return globalClient;
}

export function setAIClient(client: AIClient) {
  globalClient = client;
}

// ============================================================
// 便捷函数
// ============================================================

export async function chatWithAI(
  messages: Message[],
  options?: {
    system?: string;
    maxTokens?: number;
    temperature?: number;
  }
): Promise<AIResponse> {
  return getAIClient().chat(messages, options);
}

export async function testAIConnection(): Promise<{ success: boolean; error?: string }> {
  return getAIClient().testConnection();
}
