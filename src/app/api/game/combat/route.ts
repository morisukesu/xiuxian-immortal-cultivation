import { NextRequest, NextResponse } from "next/server";
import { getAuthUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import {
  ATTACK_ELEMENTS, DAMAGE_CATEGORIES, DAMAGE_TYPE_NAMES, SPECIES_ATTACK_DATA,
} from "@/lib/game-data/combat";
import { BODY_PART_MEDICAL, BODY_REFINE_STAGES } from "@/lib/game-data/body";
import {
  DAMAGE_MECHANICS, VITAL_SIGNS, BLOOD_SYSTEM, SKELETAL_SYSTEM,
} from "@/lib/game-data/medical";

// 敌人种族列表
const ENEMY_SPECIES = Object.keys(SPECIES_ATTACK_DATA as any);

export async function GET(req: NextRequest) {
  const user = await getAuthUser(req);
  if (!user) return NextResponse.json({ error: "未登录" }, { status: 401 });
  const c = await prisma.cultivator.findFirst({ where: { userId: user.id } });
  if (!c) return NextResponse.json({ error: "未创建角色" }, { status: 400 });
  const st = (c.state as any) || {};

  return NextResponse.json({
    combat: st.combat || null,
    elements: ATTACK_ELEMENTS,
    damageCategories: DAMAGE_CATEGORIES,
    species: SPECIES_ATTACK_DATA,
    bodyPartMedical: BODY_PART_MEDICAL,
  });
}

export async function POST(req: NextRequest) {
  const user = await getAuthUser(req);
  if (!user) return NextResponse.json({ error: "未登录" }, { status: 401 });
  const c = await prisma.cultivator.findFirst({ where: { userId: user.id } });
  if (!c) return NextResponse.json({ error: "未创建角色" }, { status: 400 });

  const body = await req.json();
  const st = (c.state as any) || {};
  const action = body.action;

  // === 开始战斗 ===
  if (action === "start") {
    const enemy = generateEnemy(st);
    st.combat = {
      round: 0,
      enemy,
      log: [`遭遇 ${enemy.name}！战斗开始！`],
      ended: false,
    };
    await prisma.cultivator.update({ where: { id: c.id }, data: { state: st } });
    return NextResponse.json({ success: true, combat: st.combat });
  }

  // === 执行战斗动作 ===
  if (action === "act") {
    if (!st.combat || st.combat.ended) {
      return NextResponse.json({ error: "无进行中的战斗" }, { status: 400 });
    }
    const combat = st.combat;
    combat.round++;

    const move = body.move; // attack / defend / dodge / flee / item
    const targetPart = body.targetPart; // 瞄准部位
    const element = body.element || "none";
    let log: string[] = [];

    // --- 玩家行动 ---
    if (move === "attack") {
      const dmgResult = calculateDamage(st, combat.enemy, targetPart, element, body.weaponType);
      log.push(`第${combat.round}回合：你瞄准${getBodyPartName(targetPart)}发动攻击！`);
      log.push(`造成 ${dmgResult.totalDamage} 点伤害（${dmgResult.elementName}）`);

      // 应用伤害到敌人部位
      applyEnemyDamage(combat.enemy, targetPart, dmgResult);

      if (dmgResult.crit) log.push(`💥 暴击！伤害翻倍！`);
      if (dmgResult.partDestroyed) log.push(`☠️ ${getBodyPartName(targetPart)}被摧毁！`);
      if (combat.enemy.dead) {
        log.push(`🏆 ${combat.enemy.name} 已被击杀！`);
        combat.ended = true;
        combat.victory = true;
        const rewards = grantRewards(st, combat.enemy);
        log.push(`获得灵石 ${rewards.gold}，经验 ${rewards.exp}`);
        combat.rewards = rewards;
      }
    } else if (move === "defend") {
      st.combat.defending = true;
      log.push(`第${combat.round}回合：你进入防御姿态，受到伤害减少50%`);
    } else if (move === "dodge") {
      st.combat.dodging = true;
      log.push(`第${combat.round}回合：你尝试闪避`);
    } else if (move === "flee") {
      const fleeChance = 0.3 + (st.spd || 10) * 0.005 - combat.enemy.speed * 0.003;
      if (Math.random() < fleeChance) {
        log.push(`第${combat.round}回合：逃跑成功！`);
        combat.ended = true;
        combat.fled = true;
      } else {
        log.push(`第${combat.round}回合：逃跑失败！`);
      }
    } else if (move === "item") {
      log.push(`第${combat.round}回合：使用物品（待扩展）`);
    }

    // --- 敌人行动 ---
    if (!combat.ended) {
      const enemyMove = enemyAI(combat.enemy, combat.round);
      const enemyTarget = enemyMove.targetPart;
      const enemyDmg = calculateEnemyDamage(combat.enemy, st, enemyTarget, enemyMove.element);

      // 闪避判定
      if (st.combat.dodging) {
        const dodgeChance = 0.2 + (st.spd || 10) * 0.01;
        if (Math.random() < dodgeChance) {
          log.push(`${combat.enemy.name} 攻击 ${getBodyPartName(enemyTarget)}，你成功闪避！`);
          enemyDmg.totalDamage = 0;
        } else {
          log.push(`${combat.enemy.name} 攻击 ${getBodyPartName(enemyTarget)}，闪避失败！`);
        }
        st.combat.dodging = false;
      }

      // 防御减伤
      if (st.combat.defending) {
        enemyDmg.totalDamage = Math.floor(enemyDmg.totalDamage * 0.5);
        st.combat.defending = false;
      }

      if (enemyDmg.totalDamage > 0) {
        log.push(`${combat.enemy.name} 以${enemyMove.elementName}攻击你的${getBodyPartName(enemyTarget)}，造成 ${enemyDmg.totalDamage} 伤害！`);
        // 应用伤害到玩家身体系统
        applyPlayerInjury(st, enemyTarget, enemyDmg);
        if (enemyDmg.partDestroyed) log.push(`⚠️ 你的${getBodyPartName(enemyTarget)}受重创！`);
        if (enemyDmg.shock) log.push(`💀 你陷入了${enemyDmg.shock}！`);
      }

      // 检查玩家死亡
      if ((st.hp || 100) <= 0) {
        log.push(`☠️ 你被击杀了...`);
        combat.ended = true;
        combat.defeat = true;
        st.hp = 1;
        st.gold = Math.max(0, (st.gold || 0) - Math.floor(combat.enemy.goldReward * 0.3));
        log.push(`损失了部分灵石`);
      }
    }

    combat.log = [...(combat.log || []), ...log];
    // 只保留最近20条日志
    if (combat.log.length > 20) combat.log = combat.log.slice(-20);

    await prisma.cultivator.update({ where: { id: c.id }, data: { state: st } });
    return NextResponse.json({ success: true, combat });
  }

  // === 结束战斗（清理） ===
  if (action === "end") {
    st.combat = null;
    await prisma.cultivator.update({ where: { id: c.id }, data: { state: st } });
    return NextResponse.json({ success: true });
  }

  return NextResponse.json({ error: "未知操作" }, { status: 400 });
}

// ============================================================
// 战斗计算函数
// ============================================================

function generateEnemy(st: any) {
  const realm = st.realm || 0;
  const speciesKey = ENEMY_SPECIES[Math.floor(Math.random() * ENEMY_SPECIES.length)];
  const species = (SPECIES_ATTACK_DATA as any)[speciesKey];
  const baseHp = 50 + realm * 30 + Math.floor(Math.random() * 50);
  const baseAtk = 5 + realm * 3 + Math.floor(Math.random() * 5);
  const baseDef = 2 + realm * 2;
  const baseSpeed = 8 + Math.floor(Math.random() * 8);

  // 生成敌人身体结构
  const enemyBody = generateEnemyBody(speciesKey);

  return {
    name: `${speciesKey}妖兽`,
    species: speciesKey,
    speciesData: species,
    hp: baseHp,
    maxHp: baseHp,
    atk: baseAtk,
    def: baseDef,
    speed: baseSpeed,
    body: enemyBody,
    dead: false,
    goldReward: 20 + realm * 10 + Math.floor(Math.random() * 30),
    expReward: 15 + realm * 8 + Math.floor(Math.random() * 20),
  };
}

function generateEnemyBody(species: string) {
  // 根据种族生成身体结构
  const baseParts: any = {
    head: { hp: 80, maxHp: 80, vital: true, lethality: 0.95 },
    torso: { hp: 120, maxHp: 120, vital: true, lethality: 0.85 },
    leftArm: { hp: 60, maxHp: 60, vital: false, lethality: 0.15 },
    rightArm: { hp: 60, maxHp: 60, vital: false, lethality: 0.15 },
    leftLeg: { hp: 60, maxHp: 60, vital: false, lethality: 0.25 },
    rightLeg: { hp: 60, maxHp: 60, vital: false, lethality: 0.25 },
    heart: { hp: 70, maxHp: 70, vital: true, lethality: 0.98 },
    brain: { hp: 70, maxHp: 70, vital: true, lethality: 0.99 },
  };
  return baseParts;
}

function calculateDamage(st: any, enemy: any, targetPart: string, element: string, weaponType: string) {
  const elemData = (ATTACK_ELEMENTS as any)[element] || (ATTACK_ELEMENTS as any).none;
  const baseAtk = st.atk || 10;
  const weaponBonus = weaponType ? getWeaponBonus(weaponType) : { penetration: 0.1, bleedRate: 1.0 };

  // 暴击判定
  const critRate = (st.critRate || 5) / 100;
  const crit = Math.random() < critRate;
  let damage = baseAtk * (crit ? 2.0 : 1.0);

  // 元素加成
  if (element !== "none") damage *= 1.15;

  // 穿透计算
  const enemyDef = enemy.def || 0;
  const penetration = weaponBonus.penetration;
  const effectiveDef = enemyDef * (1 - penetration);
  damage = Math.max(1, damage - effectiveDef);

  // 部位 lethality 加成
  const partData = enemy.body?.[targetPart];
  if (partData) {
    const lethalityMult = 1 + (partData.lethality || 0) * 0.3;
    damage *= lethalityMult;
  }

  // 随机浮动
  damage *= (0.85 + Math.random() * 0.3);

  const totalDamage = Math.floor(damage);
  const partDestroyed = partData ? (partData.hp - totalDamage <= 0) : false;

  return {
    totalDamage,
    crit,
    element: element,
    elementName: elemData.name,
    penetration,
    partDestroyed,
    targetPart,
  };
}

function applyEnemyDamage(enemy: any, targetPart: string, dmgResult: any) {
  if (!enemy.body?.[targetPart]) return;
  const part = enemy.body[targetPart];
  part.hp = Math.max(0, part.hp - dmgResult.totalDamage);

  // 致命部位摧毁 → 敌人死亡
  if (part.hp <= 0 && part.vital) {
    enemy.dead = true;
    enemy.hp = 0;
  } else {
    // 总HP按比例扣减
    const totalPartHp = Object.values(enemy.body).reduce((sum: number, p: any) => sum + p.hp, 0);
    const totalMaxHp = Object.values(enemy.body).reduce((sum: number, p: any) => sum + p.maxHp, 0);
    enemy.hp = Math.floor((totalPartHp / totalMaxHp) * enemy.maxHp);
    if (enemy.hp <= 0) enemy.dead = true;
  }
}

function calculateEnemyDamage(enemy: any, st: any, targetPart: string, element: string) {
  const elemData = (ATTACK_ELEMENTS as any)[element] || (ATTACK_ELEMENTS as any).none;
  let damage = enemy.atk || 10;

  // 元素加成
  if (element !== "none") damage *= 1.1;

  // 玩家防御
  const playerDef = st.def || 3;
  damage = Math.max(1, damage - playerDef);

  // 部位 lethality
  const partMedical = (BODY_PART_MEDICAL as any)[targetPart];
  if (partMedical) {
    damage *= 1 + (partMedical.lethality || 0) * 0.2;
  }

  // 随机浮动
  damage *= (0.8 + Math.random() * 0.4);
  const totalDamage = Math.floor(damage);

  // 检查玩家部位状态
  const bs = st.bodyStatus || {};
  const part = bs[targetPart];
  const partDestroyed = part ? (part.hp - totalDamage <= 0) : false;

  // 检查休克
  let shock: string | null = null;
  const blood = st.bloodStatus;
  if (blood) {
    const lossPct = 1 - (blood.currentVolume / blood.totalVolume);
    if (lossPct > 0.40) shock = "低血容量性休克";
    else if (lossPct > 0.30 && targetPart === "heart") shock = "神经源性休克";
  }

  return {
    totalDamage,
    element: element,
    elementName: elemData.name,
    partDestroyed,
    shock,
    targetPart,
  };
}

function applyPlayerInjury(st: any, targetPart: string, dmgResult: any) {
  // 扣减总HP
  st.hp = Math.max(0, (st.hp || 100) - dmgResult.totalDamage);

  // 扣减部位HP
  if (!st.bodyStatus) st.bodyStatus = {};
  const part = st.bodyStatus[targetPart] || { hp: 100, maxHp: 100, injured: false };
  part.hp = Math.max(0, part.hp - dmgResult.totalDamage);
  part.injured = part.hp < part.maxHp * 0.5;
  st.bodyStatus[targetPart] = part;

  // 精细化伤害：穿透各层并记录
  if (!st.wounds) st.wounds = [];
  const layerDist = (DAMAGE_MECHANICS.layerPenetration as any)[dmgResult.element] ||
    (DAMAGE_MECHANICS.layerPenetration as any).physical_blunt;
  st.wounds.push({
    part: targetPart,
    element: dmgResult.element,
    damage: dmgResult.totalDamage,
    layerDistribution: layerDist,
    round: st.combat?.round || 0,
    healed: false,
  });

  // 更新血液系统（失血）
  if (!st.bloodStatus) st.bloodStatus = { totalVolume: 5250, currentVolume: 5250, bleedingRate: 0 };
  const bloodLoss = Math.floor(dmgResult.totalDamage * 5); // 1伤害≈5ml失血
  st.bloodStatus.currentVolume = Math.max(0, st.bloodStatus.currentVolume - bloodLoss);
  if (dmgResult.totalDamage > 20) st.bloodStatus.bleedingRate = Math.min(200, (st.bloodStatus.bleedingRate || 0) + dmgResult.totalDamage);

  // 更新生命体征
  if (!st.vitalSigns) st.vitalSigns = { heartRate: 75, bloodPressureSystolic: 118, bloodPressureDiastolic: 76, respiratoryRate: 16, temperature: 36.8, oxygenSaturation: 98, qiSaturation: 100 };
  const vs = st.vitalSigns;
  const lossPct = 1 - (st.bloodStatus.currentVolume / st.bloodStatus.totalVolume);
  // 心率随失血代偿上升
  vs.heartRate = Math.min(200, 75 + Math.floor(lossPct * 80));
  // 血压下降
  vs.bloodPressureSystolic = Math.max(0, 118 - Math.floor(lossPct * 50));
  vs.bloodPressureDiastolic = Math.max(0, 76 - Math.floor(lossPct * 30));
  // 血氧下降
  vs.oxygenSaturation = Math.max(0, 98 - Math.floor(lossPct * 25));
}

function enemyAI(enemy: any, round: number) {
  const species = enemy.speciesData;
  // 优先攻击致命部位
  const vitalParts = ["head", "heart", "torso"];
  const targetPart = vitalParts[Math.floor(Math.random() * vitalParts.length)];
  const element = species?.element || "none";
  const elemData = (ATTACK_ELEMENTS as any)[element] || (ATTACK_ELEMENTS as any).none;

  return {
    targetPart,
    element,
    elementName: elemData.name,
  };
}

function grantRewards(st: any, enemy: any) {
  const gold = enemy.goldReward || 20;
  const exp = enemy.expReward || 15;
  st.gold = (st.gold || 0) + gold;
  st.exp = (st.exp || 0) + exp;
  // 升级判定
  const level = st.level || 1;
  const expNeeded = level * 100;
  if (st.exp >= expNeeded) {
    st.exp -= expNeeded;
    st.level = level + 1;
    st.maxHp = (st.maxHp || 100) + 20;
    st.hp = st.maxHp;
    st.atk = (st.atk || 10) + 3;
    st.def = (st.def || 3) + 2;
  }
  return { gold, exp };
}

function getWeaponBonus(weaponType: string) {
  const bonuses: any = {
    sword: { penetration: 0.15, bleedRate: 1.2 },
    spear: { penetration: 0.45, bleedRate: 1.0 },
    fist: { penetration: 0.05, bleedRate: 0.3 },
    bow: { penetration: 0.55, bleedRate: 1.1 },
    staff: { penetration: 0.10, bleedRate: 0.5 },
  };
  return bonuses[weaponType] || { penetration: 0.1, bleedRate: 1.0 };
}

function getBodyPartName(partId: string): string {
  const names: any = {
    head: "头部", torso: "躯干", leftArm: "左臂", rightArm: "右臂",
    leftLeg: "左腿", rightLeg: "右腿", heart: "心脏", brain: "大脑",
    lung: "肺", liver: "肝", spleen: "脾", kidney: "肾",
    stomach: "胃", intestines: "肠",
  };
  return names[partId] || partId;
}
