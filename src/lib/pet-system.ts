// ============================================================
// 修仙模拟器 — 灵兽/宠物系统
// ============================================================

/** 灵兽品质 */
export type PetQuality = "common" | "uncommon" | "rare" | "epic" | "legendary";

/** 灵兽属性 */
export type PetAttribute = "fire" | "water" | "earth" | "wind" | "lightning" | "ice" | "dark" | "light";

/** 灵兽类型 */
export type PetType = "beast" | "dragon" | "bird" | "demon" | "spirit" | "hybrid";

/** 灵兽 */
export interface Pet {
  id: string;
  name: string;
  type: PetType;
  attribute: PetAttribute;
  quality: PetQuality;
  level: number;
  exp: number;
  hp: number;
  maxHp: number;
  attack: number;
  defense: number;
  speed: number;
  loyalty: number;       // 忠诚度 0-100
  mastery: number;       // 精通度 0-100 (与主人默契)
  isSummoned: boolean;   // 是否已召唤
  isBonded: boolean;     // 是否已认主
  description: string;
  icon: string;
  skill: string;         // 特殊技能
  skillEffect: string;
}

/** 灵兽进化 */
export interface PetEvolution {
  from: string;
  to: string;
  requiredLevel: number;
  requiredMastery: number;
  requiredItems: string[];  // 进化材料
  description: string;
}

// ============================================================
// 灵兽品质加成
// ============================================================

export const QUALITY_BONUS: Record<PetQuality, number> = {
  common: 1.0,
  uncommon: 1.2,
  rare: 1.5,
  epic: 2.0,
  legendary: 3.0,
};

/** 品质名称 */
export const PET_QUALITY_NAMES: Record<PetQuality, string> = {
  common: "凡阶",
  uncommon: "灵阶",
  rare: "王阶",
  epic: "皇阶",
  legendary: "圣阶",
};

/** 属性克制 */
export const ATTRIBUTE_ADVANTAGE: Record<string, string> = {
  fire: "wind",
  wind: "earth",
  earth: "water",
  water: "fire",
  lightning: "water",
  ice: "earth",
  dark: "light",
  light: "dark",
};

// ============================================================
// 灵兽模板库
// ============================================================

interface PetTemplate {
  name: string;
  type: PetType;
  attribute: PetAttribute;
  quality: PetQuality;
  description: string;
  icon: string;
  skill: string;
  skillEffect: string;
  hp?: number;
  maxHp?: number;
  attack?: number;
  defense?: number;
  speed?: number;
}

const PET_TEMPLATES: PetTemplate[] = [
  {
    name: "五尾灵狐",
    type: "beast",
    attribute: "ice",
    quality: "epic",
    description: "通体雪白的五尾灵狐，可御使寒冰之力",
    icon: "🦊",
    skill: "冰魄寒光",
    skillEffect: "冰冻敌人 1 回合，降低其攻击力 30%",
  },
  {
    name: "闪电貂",
    type: "beast",
    attribute: "lightning",
    quality: "rare",
    description: "速度极快的灵兽，可御使雷电之力",
    icon: "⚡",
    skill: "雷光一闪",
    skillEffect: "造成大量闪电伤害，有概率麻痹敌人",
  },
  {
    name: "噬金虫",
    type: "demon",
    attribute: "dark",
    quality: "epic",
    description: "韩立的噬金虫，可吞噬各种金属修炼进化",
    icon: "🪲",
    skill: "吞噬进化",
    skillEffect: "吞噬敌人装备，永久提升自身属性",
  },
  {
    name: "火灵鸟",
    type: "bird",
    attribute: "fire",
    quality: "rare",
    description: "全身燃烧着烈焰的神鸟，传说有凤凰血脉",
    icon: "🔥",
    skill: "焚天烈焰",
    skillEffect: "对全体敌人造成火属性伤害",
  },
  {
    name: "碧水金睛兽",
    type: "dragon",
    attribute: "water",
    quality: "legendary",
    description: "稀有的龙族血脉灵兽，可操控水之力",
    icon: "🐉",
    skill: "龙吟水淹",
    skillEffect: "召唤洪水淹没敌人，造成大量伤害并减速",
  },
  {
    name: "风雷雕",
    type: "bird",
    attribute: "wind",
    quality: "uncommon",
    description: "可御使风雷之力的猛禽",
    icon: "🦅",
    skill: "风雷双翼",
    skillEffect: "提升全队速度 20%，有概率触发连击",
  },
  {
    name: "地灵龟",
    type: "beast",
    attribute: "earth",
    quality: "uncommon",
    description: "防御力极强的灵兽，可操控土石",
    icon: "🐢",
    skill: "大地护盾",
    skillEffect: "为全队施加护盾，吸收 50% 伤害持续 2 回合",
  },
  {
    name: "光明白虎",
    type: "beast",
    attribute: "light",
    quality: "legendary",
    description: "四大圣兽之一的白虎后裔，拥有光之力量",
    icon: "🐯",
    skill: "白虎裂空",
    skillEffect: "造成大量光属性伤害，对暗属性敌人伤害翻倍",
  },
  {
    name: "紫电蜂",
    type: "beast",
    attribute: "lightning",
    quality: "common",
    description: "尾部带有雷电之力的灵蜂",
    icon: "🐝",
    skill: "雷毒针刺",
    skillEffect: "造成雷电伤害并附带中毒效果",
  },
];

// ============================================================
// 灵兽进化树
// ============================================================

const EVOLUTION_TREE: PetEvolution[] = [
  {
    from: "紫电蜂",
    to: "雷光蜂后",
    requiredLevel: 20,
    requiredMastery: 50,
    requiredItems: ["雷灵精华", "紫电晶"],
    description: "紫电蜂进化为蜂后，获得更强的雷电之力",
  },
  {
    from: "地灵龟",
    to: "玄武",
    requiredLevel: 30,
    requiredMastery: 70,
    requiredItems: ["玄武之血", "大地之心"],
    description: "地灵龟觉醒玄武血脉，获得上古神兽之力",
  },
  {
    from: "火灵鸟",
    to: "浴火凤凰",
    requiredLevel: 40,
    requiredMastery: 80,
    requiredItems: ["凤凰真火", "涅槃丹"],
    description: "火灵鸟涅槃重生，化为浴火凤凰",
  },
  {
    from: "闪电貂",
    to: "紫电貂王",
    requiredLevel: 35,
    requiredMastery: 60,
    requiredItems: ["雷灵结晶", "闪电精华"],
    description: "闪电貂进化为貂王，雷电之力更加狂暴",
  },
  {
    from: "风雷雕",
    to: "九天雷鹰",
    requiredLevel: 25,
    requiredMastery: 40,
    requiredItems: ["风雷精华", "雕鹰之羽"],
    description: "风雷雕进化为九天雷鹰，翱翔九天之上",
  },
  {
    from: "五尾灵狐",
    to: "九尾天狐",
    requiredLevel: 50,
    requiredMastery: 90,
    requiredItems: ["天狐血脉", "九转灵珠"],
    description: "五尾灵狐进化为九尾天狐，获得通天彻地之能",
  },
];

// ============================================================
// 辅助函数
// ============================================================

/** 生成唯一 ID */
function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

/** 创建灵兽 (基于模板) */
export function createPet(templateIndex?: number): Pet {
  const template = templateIndex !== undefined
    ? PET_TEMPLATES[templateIndex]
    : PET_TEMPLATES[Math.floor(Math.random() * PET_TEMPLATES.length)];
  
  const qualityBonus = QUALITY_BONUS[template.quality];
  const baseHp = 100;
  const baseAttack = 20;
  const baseDefense = 15;
  const baseSpeed = 10;

  return {
    ...template,
    id: generateId(),
    level: 1,
    exp: 0,
    hp: Math.floor(baseHp * qualityBonus),
    maxHp: Math.floor(baseHp * qualityBonus),
    attack: Math.floor(baseAttack * qualityBonus),
    defense: Math.floor(baseDefense * qualityBonus),
    speed: Math.floor(baseSpeed * qualityBonus),
    loyalty: 30,
    mastery: 0,
    isSummoned: false,
    isBonded: false,
  };
}

/** 获取升级所需经验 */
export function getPetLevelUpExp(level: number): number {
  return 50 * level * level;
}

/** 灵兽升级 */
export function levelUpPet(pet: Pet): { pet: Pet; levelUp: boolean } {
  const requiredExp = getPetLevelUpExp(pet.level);
  
  if (pet.exp >= requiredExp) {
    const qualityBonus = QUALITY_BONUS[pet.quality];
    return {
      pet: {
        ...pet,
        level: pet.level + 1,
        exp: pet.exp - requiredExp,
        maxHp: pet.maxHp + Math.floor(10 * qualityBonus),
        hp: Math.min(pet.hp + Math.floor(10 * qualityBonus), pet.maxHp + Math.floor(10 * qualityBonus)),
        attack: pet.attack + Math.floor(3 * qualityBonus),
        defense: pet.defense + Math.floor(2 * qualityBonus),
        speed: pet.speed + Math.floor(1 * qualityBonus),
      },
      levelUp: true,
    };
  }
  
  return { pet, levelUp: false };
}

/** 增加灵兽经验 */
export function addPetExp(pet: Pet, amount: number): { pet: Pet; levelUp: boolean } {
  const newPet = { ...pet, exp: pet.exp + amount };
  return levelUpPet(newPet);
}

/** 提升灵兽忠诚度 */
export function increaseLoyalty(pet: Pet, amount: number): Pet {
  return {
    ...pet,
    loyalty: Math.min(100, pet.loyalty + amount),
    mastery: Math.min(100, pet.mastery + Math.floor(amount * 0.5)),
  };
}

/** 认主 */
export function bondPet(pet: Pet): Pet {
  return {
    ...pet,
    isBonded: true,
    loyalty: Math.max(pet.loyalty, 50),
  };
}

/** 召唤/收回灵兽 */
export function toggleSummon(pet: Pet): Pet {
  if (!pet.isBonded) return pet;
  return { ...pet, isSummoned: !pet.isSummoned };
}

/** 检查是否可进化 */
export function canEvolve(pet: Pet): PetEvolution | null {
  const evolution = EVOLUTION_TREE.find(
    (e) => e.from === pet.name && pet.level >= e.requiredLevel && pet.mastery >= e.requiredMastery
  );
  return evolution || null;
}

/** 执行进化 */
export function evolvePet(pet: Pet, evolution: PetEvolution): Pet | null {
  if (!canEvolve(pet)) return null;
  
  const template = PET_TEMPLATES.find((t) => t.name === evolution.to);
  if (!template) return null;
  
  const qualityBonus = QUALITY_BONUS[template.quality];
  const baseHp = template.maxHp || template.hp || 100;
  const baseAttack = template.attack || 20;
  const baseDefense = template.defense || 15;
  const baseSpeed = template.speed || 10;
  
  return {
    ...pet,
    ...template,
    id: pet.id,
    level: pet.level,
    exp: pet.exp,
    hp: Math.floor(baseHp * qualityBonus),
    maxHp: Math.floor(baseHp * qualityBonus),
    attack: Math.floor(baseAttack * qualityBonus),
    defense: Math.floor(baseDefense * qualityBonus),
    speed: Math.floor(baseSpeed * qualityBonus),
  };
}

/** 属性克制加成 */
export function getAttributeAdvantage(attacker: PetAttribute, defender: PetAttribute): number {
  return ATTRIBUTE_ADVANTAGE[attacker] === defender ? 1.5 : 1.0;
}

/** 计算灵兽战斗力 */
export function calculatePetPower(pet: Pet): number {
  const base = pet.attack * 2 + pet.defense * 1.5 + pet.speed + pet.hp * 0.5;
  const qualityMultiplier = QUALITY_BONUS[pet.quality];
  const loyaltyMultiplier = 1 + (pet.loyalty / 100) * 0.2;
  const masteryMultiplier = 1 + (pet.mastery / 100) * 0.3;
  
  return Math.floor(base * qualityMultiplier * loyaltyMultiplier * masteryMultiplier);
}
