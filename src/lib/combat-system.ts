// ============================================================
// 修仙模拟器 — 战斗系统
// ============================================================

import type { Pet } from "./pet-system";
import type { Equipment } from "./equipment-system";
import type { BodySystemState } from "./body-system";
import type { SpiritualRoot } from "./cultivation-data";
import { getCultivationSpeedBonus } from "./body-system";
import { getEquipmentTotalStats, calculateEquipScore } from "./equipment-system";

// ============================================================
// 类型定义
// ============================================================

/** 战斗动作 */
export type BattleAction =
  | "attack"        // 攻击
  | "defend"        // 防御
  | "skill"         // 技能
  | "item"          // 使用物品
  | "flee"          // 逃跑
  | "shield";       // 护盾

/** 敌人类型 */
export type EnemyType =
  | "beast"         // 妖兽
  | "demon"         // 魔修
  | "spirit"        // 灵体
  | "boss";         // Boss

/** 战斗日志条目 */
export interface BattleLog {
  turn: number;
  actor: "player" | "enemy";
  action: string;
  target: string;
  damage: number;
  heal: number;
  isCritical: boolean;
  message: string;
}

/** 敌人 */
export interface Enemy {
  id: string;
  name: string;
  type: EnemyType;
  level: number;
  hp: number;
  maxHp: number;
  attack: number;
  defense: number;
  speed: number;
  skill: string;
  skillDamage: number;
  drops: string[];  // 掉落物品
  description: string;
  icon: string;
}

/** 战斗状态 */
export interface BattleState {
  isRunning: boolean;
  turn: number;
  playerHp: number;
  playerMaxHp: number;
  playerMp: number;  // 灵力值
  playerMaxMp: number;
  enemyHp: number;
  enemyMaxHp: number;
  logs: BattleLog[];
  playerShield: number;  // 护盾值
  enemyShield: number;
  isPlayerTurn: boolean;
  timer: number;  // 倒计时 (秒)
  result: "victory" | "defeat" | "flee" | null;
}

// ============================================================
// 敌人模板库
// ============================================================

const ENEMY_TEMPLATES: Omit<Enemy, "id">[] = [
  // 妖兽
  {
    name: "一阶妖兽·铁臂猿",
    type: "beast",
    level: 1,
    hp: 100,
    maxHp: 100,
    attack: 15,
    defense: 10,
    speed: 8,
    skill: "铁臂猛击",
    skillDamage: 25,
    drops: ["妖兽内丹", "猿猴皮毛"],
    description: "力大无穷的猿猴妖兽",
    icon: "🐒",
  },
  {
    name: "二阶妖兽·赤焰蛇",
    type: "beast",
    level: 5,
    hp: 200,
    maxHp: 200,
    attack: 30,
    defense: 20,
    speed: 25,
    skill: "烈焰吐息",
    skillDamage: 45,
    drops: ["赤焰蛇胆", "火焰鳞片"],
    description: "全身燃烧着火焰的巨蛇",
    icon: "🐍",
  },
  {
    name: "三阶妖兽·风雷雕",
    type: "beast",
    level: 10,
    hp: 350,
    maxHp: 350,
    attack: 50,
    defense: 30,
    speed: 40,
    skill: "风雷双翼",
    skillDamage: 70,
    drops: ["风雷结晶", "雕羽"],
    description: "翱翔天际的猛禽，可御使风雷",
    icon: "🦅",
  },

  // 魔修
  {
    name: "黑风寨劫修",
    type: "demon",
    level: 3,
    hp: 150,
    maxHp: 150,
    attack: 25,
    defense: 15,
    speed: 12,
    skill: "黑风掌",
    skillDamage: 40,
    drops: ["储物袋", "下品灵石"],
    description: "黑风寨的劫修，专门劫杀低阶修士",
    icon: "👹",
  },
  {
    name: "血刀门刺客",
    type: "demon",
    level: 8,
    hp: 280,
    maxHp: 280,
    attack: 45,
    defense: 25,
    speed: 35,
    skill: "血影刀法",
    skillDamage: 65,
    drops: ["血刀", "中品灵石"],
    description: "血刀门的刺客，刀法凌厉",
    icon: "🗡️",
  },

  // Boss
  {
    name: "元婴期·魔道老祖",
    type: "boss",
    level: 20,
    hp: 1000,
    maxHp: 1000,
    attack: 100,
    defense: 60,
    speed: 50,
    skill: "灭世魔功",
    skillDamage: 150,
    drops: ["魔道传承", "上古法宝"],
    description: "修炼万年的魔道老祖，实力恐怖",
    icon: "👑",
  },
];

// ============================================================
// 战斗初始化
// ============================================================

/** 创建敌人 (基于等级) */
export function createEnemy(level: number): Enemy {
  // 根据等级选择合适敌人
  const suitable = ENEMY_TEMPLATES.filter((e) => e.level <= level + 3);
  const template = suitable.length > 0
    ? suitable[Math.floor(Math.random() * suitable.length)]
    : ENEMY_TEMPLATES[0];

  // 根据实际等级缩放属性
  const scale = 1 + (level - template.level) * 0.1;

  return {
    ...template,
    id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    level,
    hp: Math.floor(template.hp * scale),
    maxHp: Math.floor(template.maxHp * scale),
    attack: Math.floor(template.attack * scale),
    defense: Math.floor(template.defense * scale),
    speed: Math.floor(template.speed * scale),
  };
}

/** 初始化战斗 */
export function initBattle(
  enemy: Enemy,
  playerStats: {
    hp: number;
    maxHp: number;
    mp: number;
    maxMp: number;
    attack: number;
    defense: number;
  }
): BattleState {
  return {
    isRunning: true,
    turn: 0,
    playerHp: playerStats.hp,
    playerMaxHp: playerStats.maxHp,
    playerMp: playerStats.mp,
    playerMaxMp: playerStats.maxMp,
    enemyHp: enemy.hp,
    enemyMaxHp: enemy.maxHp,
    logs: [],
    playerShield: 0,
    enemyShield: 0,
    isPlayerTurn: true,
    timer: 60,
    result: null,
  };
}

// ============================================================
// 战斗逻辑
// ============================================================

/** 计算伤害 */
export function calculateDamage(
  attacker: { attack: number; skillDamage?: number; isSkill: boolean },
  defender: { defense: number },
  shield: number = 0
): { damage: number; isCritical: boolean } {
  const baseDamage = attacker.isSkill ? (attacker.skillDamage || attacker.attack) : attacker.attack;
  
  // 暴击计算 (10% 基础概率)
  const isCritical = Math.random() < 0.1;
  const critMultiplier = isCritical ? 1.5 : 1.0;

  // 防御减免
  const defenseReduction = defender.defense / (defender.defense + 50);
  const damageReduction = defenseReduction * 0.5;

  let damage = Math.floor(baseDamage * critMultiplier * (1 - damageReduction));
  
  // 护盾吸收
  if (shield > 0) {
    const absorbed = Math.min(shield, damage);
    damage -= absorbed;
  }

  return { damage: Math.max(1, damage), isCritical };
}

/** 玩家执行动作 */
export function playerAction(
  battle: BattleState,
  enemy: Enemy,
  action: BattleAction,
  playerAttack: number,
  playerDefense: number,
  playerSpeed: number,
  mpCost: number = 0
): { battle: BattleState; enemy: Enemy } {
  if (!battle.isRunning || !battle.isPlayerTurn) return { battle, enemy };

  const newBattle = { ...battle };
  newBattle.turn++;

  // 消耗灵力
  if (action === "skill" || action === "shield") {
    if (newBattle.playerMp < mpCost) {
      newBattle.logs.push({
        turn: newBattle.turn,
        actor: "player",
        action: "灵力不足",
        target: "",
        damage: 0,
        heal: 0,
        isCritical: false,
        message: "灵力不足，无法使用该技能！",
      });
      return { battle: newBattle, enemy };
    }
    newBattle.playerMp -= mpCost;
  }

  // 玩家行动
  switch (action) {
    case "attack": {
      const { damage, isCritical } = calculateDamage(
        { attack: playerAttack, isSkill: false },
        { defense: enemy.defense },
        newBattle.enemyShield
      );
      newBattle.enemyHp = Math.max(0, newBattle.enemyHp - damage);
      newBattle.enemyShield = Math.max(0, newBattle.enemyShield - damage);

      newBattle.logs.push({
        turn: newBattle.turn,
        actor: "player",
        action: "攻击",
        target: enemy.name,
        damage,
        heal: 0,
        isCritical,
        message: isCritical
          ? `💥 暴击！对 ${enemy.name} 造成 ${damage} 点伤害`
          : `⚔️ 对 ${enemy.name} 造成 ${damage} 点伤害`,
      });
      break;
    }

    case "skill": {
      const skillDamage = Math.floor(playerAttack * 1.8);
      const { damage, isCritical } = calculateDamage(
        { attack: skillDamage, skillDamage, isSkill: true },
        { defense: enemy.defense },
        newBattle.enemyShield
      );
      newBattle.enemyHp = Math.max(0, newBattle.enemyHp - damage);
      newBattle.enemyShield = Math.max(0, newBattle.enemyShield - damage);

      newBattle.logs.push({
        turn: newBattle.turn,
        actor: "player",
        action: "技能",
        target: enemy.name,
        damage,
        heal: 0,
        isCritical,
        message: `✨ 释放技能！对 ${enemy.name} 造成 ${damage} 点伤害`,
      });
      break;
    }

    case "defend": {
      newBattle.playerShield += Math.floor(playerDefense * 2);
      newBattle.logs.push({
        turn: newBattle.turn,
        actor: "player",
        action: "防御",
        target: "",
        damage: 0,
        heal: 0,
        isCritical: false,
        message: `🛡️ 进入防御姿态，获得 ${Math.floor(playerDefense * 2)} 点护盾`,
      });
      break;
    }

    case "shield": {
      const shieldAmount = Math.floor(playerDefense * 3);
      newBattle.playerShield += shieldAmount;
      newBattle.logs.push({
        turn: newBattle.turn,
        actor: "player",
        action: "护盾",
        target: "",
        damage: 0,
        heal: 0,
        isCritical: false,
        message: `💫 施展护盾法术，获得 ${shieldAmount} 点护盾`,
      });
      break;
    }

    case "flee": {
      const fleeChance = 0.3 + (playerSpeed - enemy.speed) * 0.02;
      if (Math.random() < fleeChance) {
        newBattle.isRunning = false;
        newBattle.result = "flee";
        newBattle.logs.push({
          turn: newBattle.turn,
          actor: "player",
          action: "逃跑",
          target: "",
          damage: 0,
          heal: 0,
          isCritical: false,
          message: "🏃 成功逃脱！",
        });
        return { battle: newBattle, enemy };
      } else {
        newBattle.logs.push({
          turn: newBattle.turn,
          actor: "player",
          action: "逃跑",
          target: "",
          damage: 0,
          heal: 0,
          isCritical: false,
          message: "逃跑失败！",
        });
      }
      break;
    }

    case "item": {
      const healAmount = Math.floor(newBattle.playerMaxHp * 0.3);
      newBattle.playerHp = Math.min(newBattle.playerMaxHp, newBattle.playerHp + healAmount);
      newBattle.logs.push({
        turn: newBattle.turn,
        actor: "player",
        action: "使用物品",
        target: "",
        damage: 0,
        heal: healAmount,
        isCritical: false,
        message: `💊 使用丹药，恢复 ${healAmount} 点生命值`,
      });
      break;
    }
  }

  // 检查敌人是否被击败
  if (newBattle.enemyHp <= 0 && newBattle.result !== "flee") {
    newBattle.isRunning = false;
    newBattle.result = "victory";
    newBattle.logs.push({
      turn: newBattle.turn,
      actor: "player",
      action: "胜利",
      target: "",
      damage: 0,
      heal: 0,
      isCritical: false,
      message: `🎉 击败 ${enemy.name}！获得战利品！`,
    });
    return { battle: newBattle, enemy };
  }

  // 敌人回合
  if (newBattle.isRunning && newBattle.result !== "flee") {
    const enemyAction = Math.random() < 0.3 && newBattle.turn > 2 ? "skill" : "attack";

    if (enemyAction === "skill") {
      const { damage, isCritical } = calculateDamage(
        { attack: enemy.attack, skillDamage: enemy.skillDamage, isSkill: true },
        { defense: playerDefense },
        newBattle.playerShield
      );
      newBattle.playerHp = Math.max(0, newBattle.playerHp - damage);
      newBattle.playerShield = Math.max(0, newBattle.playerShield - damage);

      newBattle.logs.push({
        turn: newBattle.turn,
        actor: "enemy",
        action: enemy.skill,
        target: "玩家",
        damage,
        heal: 0,
        isCritical,
        message: isCritical
          ? `💥 ${enemy.name} 使用 ${enemy.skill}，暴击！造成 ${damage} 点伤害`
          : `⚡ ${enemy.name} 使用 ${enemy.skill}，造成 ${damage} 点伤害`,
      });
    } else {
      const { damage, isCritical } = calculateDamage(
        { attack: enemy.attack, isSkill: false },
        { defense: playerDefense },
        newBattle.playerShield
      );
      newBattle.playerHp = Math.max(0, newBattle.playerHp - damage);
      newBattle.playerShield = Math.max(0, newBattle.playerShield - damage);

      newBattle.logs.push({
        turn: newBattle.turn,
        actor: "enemy",
        action: "攻击",
        target: "玩家",
        damage,
        heal: 0,
        isCritical,
        message: isCritical
          ? `💥 ${enemy.name} 攻击暴击！造成 ${damage} 点伤害`
          : `${enemy.name} 攻击，造成 ${damage} 点伤害`,
      });
    }
  }

  // 检查玩家是否被击败
  if (newBattle.playerHp <= 0 && newBattle.isRunning) {
    newBattle.isRunning = false;
    newBattle.result = "defeat";
    newBattle.logs.push({
      turn: newBattle.turn,
      actor: "enemy",
      action: "胜利",
      target: "",
      damage: 0,
      heal: 0,
      isCritical: false,
      message: `💀 被 ${enemy.name} 击败……修为倒退，修为值 -20%`,
    });
  }

  newBattle.isPlayerTurn = true;
  return { battle: newBattle, enemy };
}

// ============================================================
// 玩家属性计算
// ============================================================

/** 计算玩家战斗属性 */
export function calculatePlayerCombatStats(params: {
  realmIndex: number;
  realmLevel: number;
  spiritualRoot: SpiritualRoot;
  bodyState: BodySystemState;
  equipment: Equipment[];
  pet: Pet | null;
}): {
  hp: number;
  maxHp: number;
  mp: number;
  maxMp: number;
  attack: number;
  defense: number;
  speed: number;
} {
  // 基础属性 (基于境界)
  const realmBonus = params.realmIndex * 10 + params.realmLevel * 5;
  const baseHp = 100 + realmBonus * 2;
  const baseMp = 50 + realmBonus;
  const baseAttack = 10 + realmBonus;
  const baseDefense = 8 + realmBonus * 0.5;
  const baseSpeed = 5 + params.realmIndex * 3;

  // 灵根加成
  const rootBonus = {
    "杂灵根": 0.8,
    "四灵根": 0.9,
    "三灵根": 1.0,
    "双灵根": 1.1,
    "异灵根": 1.2,
    "天灵根": 1.3,
  }[params.spiritualRoot] || 1.0;

  // 身体状态加成
  const bodyBonus = getCultivationSpeedBonus(params.bodyState);

  // 装备加成
  let equipAttack = 0;
  let equipDefense = 0;
  let equipHp = 0;
  let equipMp = 0;
  let equipSpeed = 0;

  params.equipment.forEach((eq) => {
    const stats = getEquipmentTotalStats(eq);
    equipAttack += stats.damage || 0;
    equipDefense += stats.defense || 0;
    equipHp += stats.hp || 0;
    equipMp += stats.mp || 0;
    equipSpeed += stats.dodge ? Math.floor(stats.dodge * 0.5) : 0;
  });

  // 灵兽加成
  let petAttack = 0;
  let petDefense = 0;
  let petHp = 0;

  if (params.pet && params.pet.isSummoned) {
    const loyaltyBonus = 1 + params.pet.loyalty / 200;
    const masteryBonus = 1 + params.pet.mastery / 100;
    petAttack = Math.floor(params.pet.attack * loyaltyBonus * masteryBonus * 0.3);
    petDefense = Math.floor(params.pet.defense * loyaltyBonus * masteryBonus * 0.3);
    petHp = Math.floor(params.pet.maxHp * loyaltyBonus * masteryBonus * 0.2);
  }

  return {
    hp: baseHp,
    maxHp: Math.floor((baseHp + equipHp + petHp) * rootBonus * bodyBonus),
    mp: baseMp,
    maxMp: Math.floor((baseMp + equipMp) * rootBonus),
    attack: Math.floor((baseAttack + equipAttack + petAttack) * rootBonus * bodyBonus),
    defense: Math.floor((baseDefense + equipDefense + petDefense) * rootBonus),
    speed: Math.floor((baseSpeed + equipSpeed) * rootBonus),
  };
}
