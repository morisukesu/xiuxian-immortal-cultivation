import { randomChoice, weightedRandom } from "./utils";

// 9大事件类型
export const EVENT_TYPES = [
  { type: 'CULTIVATE',    weight: 30, desc: '日常修炼' },
  { type: 'COMBAT',       weight: 20, desc: '战斗遭遇' },
  { type: 'TREASURE',     weight: 15, desc: '宝藏发现' },
  { type: 'ENCOUNTER',    weight: 15, desc: '奇遇事件' },
  { type: 'EXPLORATION',  weight: 10, desc: '秘境探索' },
  { type: 'SOCIAL',       weight: 5,  desc: 'NPC交互' },
  { type: 'TRIBULATION',  weight: 2,  desc: '天劫降临' },
  { type: 'ALCHEMY',      weight: 2,  desc: '炼丹机缘' },
  { type: 'CRAFTING',     weight: 1,  desc: '炼器机缘' },
] as const;

export interface EventChoice {
  text: string;
  risk: 'low' | 'medium' | 'high';
  hint: string;
  successRate: number;
  rewards: { type: string; value: number; label: string }[];
}

export interface GeneratedEvent {
  type: string;
  title: string;
  narrative: string;
  mood: string;
  choices: EventChoice[];
  difficulty: number;
  seed: string;
}

export interface EventContext {
  name: string;
  spiritualRoot: string;
  realmIndex: number;
  realm: string;
  exp: number;
  hp: number;
  maxHp: number;
}

// 随机参数
const LOCATIONS = ['荒山深处', '幽暗密林', '悬崖绝壁', '深海底谷', '古战场遗迹', '废弃洞府', '灵脉矿洞', '迷雾沼泽', '雪峰之巅', '沙漠绿洲'];
const NPC_NAMES = ['青衣老者', '白衣少女', '黑袍修士', '疯癫道人', '采药药童', '坊市掌柜', '游历剑修', '炼丹宗师', '落魄散修', '神秘蒙面人'];
const ENEMIES = ['妖兽', '魔修', '怨灵', '妖蛇', '鬼将', '蛮兽', '邪修', '古尸', '灵虫群', '雷妖'];
const MOODS = ['燃', '静', '险', '悟', '奇'];

function genSeed(): string {
  return Math.random().toString(36).slice(2, 10);
}

function randomDifficulty(realmIndex: number): number {
  const base = Math.min(realmIndex + 1, 10);
  return Math.min(10, Math.max(1, base + Math.floor(Math.random() * 3) - 1));
}

function randomParams(eventType: string) {
  return {
    location: randomChoice(LOCATIONS),
    npc: Math.random() > 0.4 ? randomChoice(NPC_NAMES) : null,
    enemy: ['COMBAT', 'TRIBULATION'].includes(eventType) ? randomChoice(ENEMIES) : null,
    mood: randomChoice(MOODS),
  };
}

// 构建AI Prompt
function buildEventPrompt(ctx: EventContext, eventType: string, params: ReturnType<typeof randomParams>, difficulty: number): string {
  return `生成一个全随机修仙事件。

【修炼者】${ctx.name}，${ctx.spiritualRoot}，${ctx.realm}（难度${difficulty}/10）
【事件类型】${eventType}
【随机场景】${params.location}${params.npc ? '，' + params.npc : ''}${params.enemy ? '，遭遇' + params.enemy : ''}

要求：
1. 标题（10字内）
2. 场景叙事（200-300字，融入随机参数）
3. 3个选项（低/中/高风险），每个附 hint 和 successRate
4. 每个选项的潜在奖励

返回 JSON：
{"title":"","narrative":"","mood":"燃/静/险/悟/奇","choices":[{"text":"","risk":"low","hint":"","successRate":0.9,"rewards":[{"type":"exp","value":30,"label":"+30修炼值"}]},{"text":"","risk":"medium","hint":"","successRate":0.6,"rewards":[{"type":"exp","value":80,"label":"+80修炼值"},{"type":"item","value":1,"label":"获得物品"}]},{"text":"","risk":"high","hint":"","successRate":0.3,"rewards":[{"type":"exp","value":200,"label":"+200修炼值"},{"type":"breakthrough","value":0.1,"label":"突破率+10%"}]}]}`;
}

function buildResultPrompt(event: GeneratedEvent, choice: EventChoice, success: boolean): string {
  return `根据玩家选择生成结果叙事。

【事件】${event.title}
【场景】${event.narrative}
【玩家选择】${choice.text}（风险：${choice.risk}，成功率：${choice.successRate}）
【判定结果】${success ? '成功' : '失败'}

返回 JSON：
{"resultNarrative":"结果描述150-250字","insight":"修炼感悟15字内","mood":"燃/静/险/悟/奇"}`;
}

// 调用AI
async function callAI(prompt: string, system: string, maxTokens: number = 500): Promise<string> {
  const baseURL = process.env.AI_BASE_URL || '';
  const apiKey = process.env.AI_API_KEY || '';
  const model = process.env.AI_MODEL || 'gpt-4o-mini';

  const resp = await fetch(`${baseURL}/chat/completions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${apiKey}` },
    body: JSON.stringify({
      model,
      messages: [{ role: 'system', content: system }, { role: 'user', content: prompt }],
      temperature: 0.85,
      max_tokens: maxTokens,
    }),
  });

  if (!resp.ok) throw new Error(`AI API error: ${resp.status}`);
  const data = await resp.json();
  return data.choices?.[0]?.message?.content || '';
}

function extractJSON(text: string): any | null {
  const match = text.match(/\{[\s\S]*\}/);
  if (!match) return null;
  try { return JSON.parse(match[0]); } catch { return null; }
}

// 生成事件
export async function generateEvent(ctx: EventContext): Promise<GeneratedEvent> {
  const eventType = weightedRandom([...EVENT_TYPES]).type;
  const difficulty = randomDifficulty(ctx.realmIndex);
  const params = randomParams(eventType);
  const seed = genSeed();

  const systemPrompt = `你是修仙世界事件引擎，世界观参考凡人修仙传。返回合法JSON，不要有其他内容。风格：仙侠文言风，现代读者能流畅阅读，叙事200-400字。`;

  try {
    const text = await callAI(buildEventPrompt(ctx, eventType, params, difficulty), systemPrompt, 600);
    const parsed = extractJSON(text);
    if (parsed && parsed.title && parsed.narrative && parsed.choices?.length === 3) {
      return {
        type: eventType, title: parsed.title, narrative: parsed.narrative,
        mood: parsed.mood || '奇', choices: parsed.choices, difficulty, seed,
      };
    }
  } catch (e) { console.error('AI event gen failed:', e); }

  return getFallbackEvent(ctx, eventType, difficulty, seed, params);
}

// 判定结果
export async function resolveEvent(event: GeneratedEvent, choiceIndex: number, ctx: EventContext): Promise<{
  success: boolean;
  resultNarrative: string;
  insight: string;
  rewards: any[];
}> {
  const choice = event.choices[choiceIndex];
  if (!choice) throw new Error('Invalid choice');

  const success = Math.random() < choice.successRate;

  try {
    const systemPrompt = '你是修仙世界事件引擎，返回合法JSON。';
    const text = await callAI(buildResultPrompt(event, choice, success), systemPrompt, 400);
    const parsed = extractJSON(text);
    if (parsed?.resultNarrative) {
      return {
        success,
        resultNarrative: parsed.resultNarrative,
        insight: parsed.insight || '修行在心',
        rewards: success ? choice.rewards : [],
      };
    }
  } catch (e) { console.error('AI result gen failed:', e); }

  return {
    success,
    resultNarrative: success
      ? `${ctx.name}做出了正确的选择，收获颇丰。`
      : `${ctx.name}的选择未能如愿，无功而返。`,
    insight: success ? '福祸相依，谨慎为上' : '吃一堑长一智',
    rewards: success ? choice.rewards : [],
  };
}

// 降级方案
function getFallbackEvent(ctx: EventContext, eventType: string, difficulty: number, seed: string, params: any): GeneratedEvent {
  const templates: Record<string, { title: string; narrative: string; choices: EventChoice[] }> = {
    CULTIVATE: {
      title: '静心修炼',
      narrative: `${ctx.name}在${params.location}寻了一处灵气充裕之地，盘膝而坐。灵力如泉水般涌入经脉，周身气机流转不息。`,
      choices: [
        { text: '稳扎稳打运转功法', risk: 'low', hint: '安全修炼', successRate: 0.95, rewards: [{ type: 'exp', value: 30, label: '+30修炼值' }] },
        { text: '冲击经脉瓶颈', risk: 'medium', hint: '有突破风险', successRate: 0.6, rewards: [{ type: 'exp', value: 80, label: '+80修炼值' }] },
        { text: '强行冲击大周天', risk: 'high', hint: '走火入魔风险', successRate: 0.3, rewards: [{ type: 'exp', value: 200, label: '+200修炼值' }] },
      ],
    },
    COMBAT: {
      title: `${params.enemy}来袭`,
      narrative: `${ctx.name}在${params.location}遭遇了一头${params.enemy}！对方气息强横，显然不是普通货色。`,
      choices: [
        { text: '正面迎战', risk: 'low', hint: '以力破之', successRate: 0.7, rewards: [{ type: 'exp', value: 50, label: '+50修炼值' }, { type: 'gold', value: 20, label: '+20灵石' }] },
        { text: '智取破敌', risk: 'medium', hint: '以巧胜拙', successRate: 0.5, rewards: [{ type: 'exp', value: 100, label: '+100修炼值' }, { type: 'gold', value: 50, label: '+50灵石' }] },
        { text: '拼命一搏', risk: 'high', hint: '生死一瞬', successRate: 0.3, rewards: [{ type: 'exp', value: 250, label: '+250修炼值' }, { type: 'gold', value: 100, label: '+100灵石' }] },
      ],
    },
    TREASURE: {
      title: '发现宝藏',
      narrative: `${ctx.name}在${params.location}发现了一处隐秘的宝藏，灵光隐隐从石缝中透出。`,
      choices: [
        { text: '小心取走外露宝物', risk: 'low', hint: '安全取宝', successRate: 0.9, rewards: [{ type: 'gold', value: 30, label: '+30灵石' }] },
        { text: '破解禁制探索深处', risk: 'medium', hint: '有阵法守护', successRate: 0.55, rewards: [{ type: 'gold', value: 80, label: '+80灵石' }, { type: 'exp', value: 60, label: '+60修炼值' }] },
        { text: '强行破开禁制', risk: 'high', hint: '可能触发自毁', successRate: 0.25, rewards: [{ type: 'gold', value: 200, label: '+200灵石' }, { type: 'exp', value: 150, label: '+150修炼值' }] },
      ],
    },
    ENCOUNTER: {
      title: '奇遇降临',
      narrative: `${ctx.name}在${params.location}遇到了${params.npc || '一位神秘人物'}，对方似乎有重要的事情要说。`,
      choices: [
        { text: '礼貌交谈', risk: 'low', hint: '结善缘', successRate: 0.9, rewards: [{ type: 'exp', value: 20, label: '+20修炼值' }] },
        { text: '请教修炼之道', risk: 'medium', hint: '或有指点', successRate: 0.55, rewards: [{ type: 'exp', value: 80, label: '+80修炼值' }, { type: 'wudao', value: 5, label: '+5悟道值' }] },
        { text: '请求传授秘法', risk: 'high', hint: '可能触怒对方', successRate: 0.2, rewards: [{ type: 'exp', value: 300, label: '+300修炼值' }, { type: 'wudao', value: 20, label: '+20悟道值' }] },
      ],
    },
    EXPLORATION: {
      title: '秘境入口',
      narrative: `${ctx.name}在${params.location}发现了一处秘境入口，灵气从中溢出，内部似有造化。`,
      choices: [
        { text: '在入口处修炼', risk: 'low', hint: '安全吸纳', successRate: 0.85, rewards: [{ type: 'exp', value: 40, label: '+40修炼值' }] },
        { text: '深入探索外围', risk: 'medium', hint: '机遇与危险并存', successRate: 0.5, rewards: [{ type: 'exp', value: 120, label: '+120修炼值' }, { type: 'gold', value: 40, label: '+40灵石' }] },
        { text: '直闯秘境核心', risk: 'high', hint: '九死一生', successRate: 0.2, rewards: [{ type: 'exp', value: 350, label: '+350修炼值' }, { type: 'gold', value: 150, label: '+150灵石' }] },
      ],
    },
    SOCIAL: {
      title: params.npc ? `遇见${params.npc}` : '偶遇道友',
      narrative: `${ctx.name}在${params.location}遇到了${params.npc || '一位同道修士'}，双方打了个招呼。`,
      choices: [
        { text: '交流修炼心得', risk: 'low', hint: '互通有无', successRate: 0.9, rewards: [{ type: 'exp', value: 15, label: '+15修炼值' }] },
        { text: '切磋比试', risk: 'medium', hint: '以武论道', successRate: 0.5, rewards: [{ type: 'exp', value: 60, label: '+60修炼值' }] },
        { text: '赌斗一番', risk: 'high', hint: '押注灵石', successRate: 0.3, rewards: [{ type: 'gold', value: 100, label: '+100灵石' }] },
      ],
    },
    TRIBULATION: {
      title: '天劫降临',
      narrative: `${ctx.name}在${params.location}修炼时，天空骤然变色，一道天劫正在凝聚！这是对修为的考验。`,
      choices: [
        { text: '以法宝抵御', risk: 'low', hint: '消耗资源', successRate: 0.8, rewards: [{ type: 'exp', value: 100, label: '+100修炼值' }] },
        { text: '硬抗天劫', risk: 'medium', hint: '肉身淬炼', successRate: 0.45, rewards: [{ type: 'exp', value: 300, label: '+300修炼值' }, { type: 'breakthrough', value: 0.15, label: '突破率+15%' }] },
        { text: '借劫悟道', risk: 'high', hint: '生死参悟', successRate: 0.15, rewards: [{ type: 'exp', value: 800, label: '+800修炼值' }, { type: 'wudao', value: 50, label: '+50悟道值' }] },
      ],
    },
    ALCHEMY: {
      title: '炼丹机缘',
      narrative: `${ctx.name}在${params.location}发现了一株千年灵药，药香四溢。`,
      choices: [
        { text: '直接服用', risk: 'low', hint: '药力温和', successRate: 0.85, rewards: [{ type: 'exp', value: 30, label: '+30修炼值' }] },
        { text: '尝试炼丹', risk: 'medium', hint: '需要技巧', successRate: 0.5, rewards: [{ type: 'exp', value: 100, label: '+100修炼值' }, { type: 'herbs', value: 5, label: '+5灵草' }] },
        { text: '以火候逼出药力', risk: 'high', hint: '炸炉风险', successRate: 0.2, rewards: [{ type: 'exp', value: 300, label: '+300修炼值' }, { type: 'herbs', value: 20, label: '+20灵草' }] },
      ],
    },
    CRAFTING: {
      title: '发现矿脉',
      narrative: `${ctx.name}在${params.location}发现了一处蕴含灵力的矿脉，隐约可见矿石中的灵光。`,
      choices: [
        { text: '采集表层矿石', risk: 'low', hint: '安全采集', successRate: 0.9, rewards: [{ type: 'gold', value: 20, label: '+20灵石' }] },
        { text: '深入矿脉挖掘', risk: 'medium', hint: '矿洞危险', successRate: 0.5, rewards: [{ type: 'gold', value: 80, label: '+80灵石' }] },
        { text: '炸开矿脉核心', risk: 'high', hint: '可能坍塌', successRate: 0.2, rewards: [{ type: 'gold', value: 250, label: '+250灵石' }] },
      ],
    },
  };

  const template = templates[eventType] || templates.CULTIVATE;
  return { type: eventType, ...template, mood: '奇', difficulty, seed };
}
