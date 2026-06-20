// ============================================================
// 修仙模拟器 — 装备与词条系统
// ============================================================

/** 装备部位 */
export type EquipSlot =
  | "head"        // 头饰
  | "neck"        // 项链
  | "body"        // 衣服
  | "leftHand"    // 左手 (法宝/法器)
  | "rightHand"   // 右手 (法宝/法器)
  | "ring1"       // 戒指 1
  | "ring2"       // 戒指 2
  | "belt"        // 腰带
  | "boots"       // 鞋子
  | "weapon";     // 武器

/** 装备品质 */
export type EquipQuality = "common" | "uncommon" | "rare" | "epic" | "legendary";

/** 装备类型 */
export type EquipType =
  | "armor"       // 防具
  | "weapon"      // 武器
  | "accessory"   // 饰品
  | "artifact";   // 法宝

/** 词条类型 */
export type AffixType =
  | "cultivationSpeed"  // 修炼速度
  | "expBonus"          // 经验加成
  | "breakthroughChance" // 突破概率
  | "damage"            // 伤害
  | "defense"           // 防御
  | "hp"                // 生命值
  | "mp"                // 灵力值
  | "qi"                // 灵气
  | "critical"          // 暴击
  | "dodge"             // 闪避
  | "lucky";            // 气运

/** 词条 */
export interface Affix {
  id: string;
  name: string;
  type: AffixType;
  value: number;        // 数值
  description: string;
  tier: number;         // 品阶 1-5
}

/** 装备 */
export interface Equipment {
  id: string;
  name: string;
  type: EquipType;
  slot: EquipSlot;
  quality: EquipQuality;
  baseStats: Record<string, number>;
  affixes: Affix[];
  level: number;        // 装备等级
  exp: number;          // 装备经验
  description: string;
  icon: string;
}

/** 装备槽位信息 */
export interface EquipSlotInfo {
  slot: EquipSlot;
  name: string;
  icon: string;
  allowedTypes: EquipType[];
}

// ============================================================
// 装备槽位定义
// ============================================================

export const EQUIP_SLOTS: EquipSlotInfo[] = [
  { slot: "head", name: "头饰", icon: "👑", allowedTypes: ["armor", "accessory"] },
  { slot: "neck", name: "项链", icon: "📿", allowedTypes: ["accessory"] },
  { slot: "body", name: "衣服", icon: "👕", allowedTypes: ["armor"] },
  { slot: "leftHand", name: "左手", icon: "🤚", allowedTypes: ["weapon", "artifact", "accessory"] },
  { slot: "rightHand", name: "右手", icon: "🤚", allowedTypes: ["weapon", "artifact", "accessory"] },
  { slot: "ring1", name: "戒指 1", icon: "💍", allowedTypes: ["accessory"] },
  { slot: "ring2", name: "戒指 2", icon: "💍", allowedTypes: ["accessory"] },
  { slot: "belt", name: "腰带", icon: "🎗️", allowedTypes: ["accessory"] },
  { slot: "boots", name: "鞋子", icon: "👢", allowedTypes: ["armor"] },
  { slot: "weapon", name: "武器", icon: "⚔️", allowedTypes: ["weapon", "artifact"] },
];

// ============================================================
// 词条池
// ============================================================

const AFFIX_POOL: Omit<Affix, "id" | "value" | "tier">[] = [
  // 修炼类
  { type: "cultivationSpeed", name: "修炼加速", description: "提升修炼速度" },
  { type: "cultivationSpeed", name: "聚灵", description: "加快灵气吸收" },
  { type: "expBonus", name: "悟性", description: "增加修炼经验获取" },
  { type: "expBonus", name: "慧根", description: "提升悟道效率" },
  { type: "breakthroughChance", name: "机缘", description: "增加突破概率" },
  { type: "breakthroughChance", name: "道韵", description: "感悟天道更深" },
  
  // 战斗类
  { type: "damage", name: "攻击力", description: "提升法术伤害" },
  { type: "damage", name: "灵力强度", description: "增强灵力输出" },
  { type: "defense", name: "护体", description: "提升防御力" },
  { type: "defense", name: "金刚", description: "肉身更坚韧" },
  { type: "hp", name: "气血", description: "增加生命值上限" },
  { type: "mp", name: "灵力", description: "增加灵力上限" },
  { type: "qi", name: "灵气", description: "提升灵气恢复" },
  { type: "critical", name: "会心", description: "提升暴击概率" },
  { type: "dodge", name: "闪避", description: "提升闪避概率" },
  
  // 气运类
  { type: "lucky", name: "气运", description: "提升气运" },
  { type: "lucky", name: "福缘", description: "增加奇遇概率" },
];

/** 品质颜色 */
export const QUALITY_COLORS: Record<EquipQuality, string> = {
  common: "#9CA3AF",     // 灰色
  uncommon: "#10B981",   // 绿色
  rare: "#3B82F6",       // 蓝色
  epic: "#8B5CF6",       // 紫色
  legendary: "#F59E0B",  // 金色
};

/** 品质名称 */
export const QUALITY_NAMES: Record<EquipQuality, string> = {
  common: "凡品",
  uncommon: "良品",
  rare: "珍品",
  epic: "极品",
  legendary: "仙品",
};

// ============================================================
// 装备模板库
// ============================================================

const EQUIP_TEMPLATES: Omit<Equipment, "id" | "affixes" | "level" | "exp">[] = [
  // 武器
  {
    name: "青竹蜂云剑",
    type: "weapon",
    slot: "weapon",
    quality: "rare",
    baseStats: { damage: 50, critical: 5 },
    description: "韩立的本命法宝，由青竹蜂云剑炼制而成",
    icon: "🗡️",
  },
  {
    name: "玄铁剑",
    type: "weapon",
    slot: "weapon",
    quality: "uncommon",
    baseStats: { damage: 30, defense: 10 },
    description: "玄铁所铸，沉重无比",
    icon: "⚔️",
  },
  {
    name: "翻天印",
    type: "artifact",
    slot: "leftHand",
    quality: "epic",
    baseStats: { damage: 80, hp: 100 },
    description: "上古法宝，有翻天之威",
    icon: "🔮",
  },
  
  // 防具
  {
    name: "青云道袍",
    type: "armor",
    slot: "body",
    quality: "rare",
    baseStats: { defense: 40, mp: 50 },
    description: "青云门制式道袍，有一定防御效果",
    icon: "👘",
  },
  {
    name: "金丝软甲",
    type: "armor",
    slot: "body",
    quality: "epic",
    baseStats: { defense: 80, dodge: 10 },
    description: "金丝编织的软甲，轻便且防御极高",
    icon: "🛡️",
  },
  {
    name: "玉冠",
    type: "armor",
    slot: "head",
    quality: "uncommon",
    baseStats: { mp: 30, cultivationSpeed: 5 },
    description: "玉质冠冕，可凝神静气",
    icon: "👑",
  },
  
  // 饰品
  {
    name: "储物戒指",
    type: "accessory",
    slot: "ring1",
    quality: "common",
    baseStats: { lucky: 5 },
    description: "可存放物品的戒指，修仙者必备",
    icon: "💍",
  },
  {
    name: "聚灵坠",
    type: "accessory",
    slot: "neck",
    quality: "rare",
    baseStats: { cultivationSpeed: 15, qi: 20 },
    description: "可聚集周围灵气的吊坠",
    icon: "📿",
  },
  {
    name: "疾风靴",
    type: "armor",
    slot: "boots",
    quality: "uncommon",
    baseStats: { dodge: 8, hp: 30 },
    description: "穿上后身法轻盈，如风一般",
    icon: "👢",
  },
  {
    name: "乾坤腰带",
    type: "accessory",
    slot: "belt",
    quality: "rare",
    baseStats: { hp: 50, defense: 20 },
    description: "内有乾坤，可额外携带物品",
    icon: "🎗️",
  },
];

// ============================================================
// 辅助函数
// ============================================================

/** 生成唯一 ID */
function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

/** 生成随机词条 */
export function generateRandomAffix(minTier = 1, maxTier = 3): Affix {
  const template = AFFIX_POOL[Math.floor(Math.random() * AFFIX_POOL.length)];
  const tier = Math.floor(Math.random() * (maxTier - minTier + 1)) + minTier;
  
  // 根据品阶计算数值
  const baseValue = 5;
  const value = Math.floor(baseValue * tier * (0.8 + Math.random() * 0.4));
  
  return {
    id: generateId(),
    ...template,
    value,
    tier,
    description: `${template.description} +${value}`,
  };
}

/** 生成随机装备 */
export function generateRandomEquipment(
  qualityOverride?: EquipQuality
): Equipment {
  const template = EQUIP_TEMPLATES[Math.floor(Math.random() * EQUIP_TEMPLATES.length)];
  const quality = qualityOverride || template.quality;
  
  // 根据品质决定词条数量
  const affixCount = {
    common: 0,
    uncommon: 1,
    rare: 2,
    epic: 3,
    legendary: 4,
  }[quality];
  
  const affixes: Affix[] = [];
  for (let i = 0; i < affixCount; i++) {
    affixes.push(generateRandomAffix(1, quality === "legendary" ? 5 : 3));
  }
  
  return {
    ...template,
    id: generateId(),
    quality: qualityOverride || template.quality,
    affixes,
    level: 1,
    exp: 0,
  };
}

/** 获取装备总属性 */
export function getEquipmentTotalStats(equipment: Equipment): Record<string, number> {
  const total = { ...equipment.baseStats };
  
  equipment.affixes.forEach((affix) => {
    const key = affix.type;
    total[key] = (total[key] || 0) + affix.value;
  });
  
  return total;
}

/** 计算装备评分 */
export function calculateEquipScore(equipment: Equipment): number {
  const qualityScore = {
    common: 1,
    uncommon: 2,
    rare: 3,
    epic: 4,
    legendary: 5,
  }[equipment.quality];
  
  const baseScore = Object.values(equipment.baseStats).reduce((a, b) => a + b, 0);
  const affixScore = equipment.affixes.reduce((a, affix) => a + affix.value * affix.tier, 0);
  
  return Math.floor((baseScore + affixScore) * qualityScore);
}

/** 装备升级 */
export function levelUpEquipment(equipment: Equipment): Equipment {
  equipment.level += 1;
  equipment.exp = 0;
  
  // 升级时提升基础属性
  Object.keys(equipment.baseStats).forEach((key) => {
    equipment.baseStats[key] = Math.floor(equipment.baseStats[key] * 1.1);
  });
  
  // 有概率获得新词条
  if (equipment.level % 5 === 0 && equipment.affixes.length < 4) {
    equipment.affixes.push(generateRandomAffix(1, Math.min(5, Math.floor(equipment.level / 10) + 1)));
  }
  
  return equipment;
}

/** 获取升级所需经验 */
export function getLevelUpExp(level: number): number {
  return 100 * level * level;
}

/** 序列化装备 (用于存储) */
export function serializeEquipment(equipment: Equipment): unknown {
  return equipment;
}

/** 反序列化装备 */
export function deserializeEquipment(data: unknown): Equipment | null {
  if (!data || typeof data !== "object") return null;
  return data as Equipment;
}

/** 创建空装备槽位状态 */
export function createEmptyEquipSlots(): Record<EquipSlot, Equipment | null> {
  return {
    head: null,
    neck: null,
    body: null,
    leftHand: null,
    rightHand: null,
    ring1: null,
    ring2: null,
    belt: null,
    boots: null,
    weapon: null,
  };
}
