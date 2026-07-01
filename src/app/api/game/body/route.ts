import { NextRequest, NextResponse } from "next/server";
import { getAuthUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import {
  BODY_DIAGRAM_H, BODY_DIAGRAM_W, BODY_PART_BONUS_MAP, BODY_PART_MEDICAL,
  BODY_REFINE_STAGES, BODY_RADIATION_MAP, RADIATION_MAP, MERIDIAN_SYSTEM,
  NERVOUS_SYSTEM_DATA, NERVOUS_SYSTEM_PARTS, NERVE_DAMAGE_EFFECTS,
  NERVOUS_COMBAT_CONFIG, ORGAN_DESTRUCTION_EFFECTS,
  THREE_SOULS, SIX_SPIRITS, IRREVERSIBLE_PARTS, JADE_PENDANT_PROTECT, BP_ROUNDS,
} from "@/lib/game-data/body";
import {
  DAMAGE_MECHANICS, VITAL_SIGNS, BLOOD_SYSTEM,
  defaultBodyComposition, defaultVitalSigns, defaultBloodStatus,
  BODY_COMPOSITION_MODEL, SKELETAL_SYSTEM, MUSCULAR_SYSTEM,
} from "@/lib/game-data/medical";

export async function GET(req: NextRequest) {
  const user = await getAuthUser(req);
  if (!user) return NextResponse.json({ error: "未登录" }, { status: 401 });
  const c = await prisma.cultivator.findFirst({ where: { userId: user.id } });
  if (!c) return NextResponse.json({ error: "未创建角色" }, { status: 400 });
  const st = (c.state as any) || {};

  return NextResponse.json({
    bodyStatus: st.bodyStatus || defaultBodyStatus(),
    bodyRefineLevel: st.bodyRefineLevel || 0,
    meridians: st.meridians || defaultMeridians(),
    nervous: st.nervous || defaultNervous(),
    organs: st.organs || defaultOrgans(),
    radiations: st.radiations || [],
    souls: st.souls || THREE_SOULS.map((s: any) => ({ ...s, level: 0, hp: 1 })),
    spirits: st.spirits || SIX_SPIRITS.map((s: any) => ({ ...s, level: 0, hp: 1 })),
    bodyComposition: st.bodyComposition || defaultBodyComposition(),
    vitalSigns: st.vitalSigns || defaultVitalSigns(),
    bloodStatus: st.bloodStatus || defaultBloodStatus(),
    wounds: st.wounds || [],
    diagramW: BODY_DIAGRAM_W || 120,
    diagramH: BODY_DIAGRAM_H || 160,
    meridianSystem: MERIDIAN_SYSTEM,
    nervousData: NERVOUS_SYSTEM_DATA,
    nervousParts: NERVOUS_SYSTEM_PARTS,
    nerveDamageEffects: NERVE_DAMAGE_EFFECTS,
    nervousCombatConfig: NERVOUS_COMBAT_CONFIG,
    organEffects: ORGAN_DESTRUCTION_EFFECTS,
    bodyPartBonus: BODY_PART_BONUS_MAP,
    bodyPartMedical: BODY_PART_MEDICAL,
    radiationMap: RADIATION_MAP,
    bodyRadiationMap: BODY_RADIATION_MAP,
    irreversibleParts: Object.keys(IRREVERSIBLE_PARTS || {}),
    refineStages: BODY_REFINE_STAGES,
    jadePendant: JADE_PENDANT_PROTECT,
    bpRounds: BP_ROUNDS,
    damageMechanics: DAMAGE_MECHANICS,
    vitalSignsConfig: VITAL_SIGNS,
    bloodSystem: BLOOD_SYSTEM,
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

  // === 淬炼身体 ===
  if (action === "refine") {
    const lv = (st.bodyRefineLevel || 0) + 1;
    const stages = BODY_REFINE_STAGES as any[];
    const stage = stages.find((s: any) => lv >= s.minLevel && lv <= s.maxLevel);
    if (!stage) return NextResponse.json({ error: "已达淬炼上限" }, { status: 400 });

    const bs = st.bodyStatus || defaultBodyStatus();
    for (const key of Object.keys(bs)) {
      if (bs[key]?.hp !== undefined) {
        bs[key].hp = Math.min(bs[key].maxHp, (bs[key].hp || bs[key].maxHp) + 8);
        bs[key].maxHp = (bs[key].maxHp || 100) + Math.floor((stage.hpMult || 0.05) * 10 + 1);
      }
    }
    st.bodyRefineLevel = lv;
    st.bodyStatus = bs;
    st.maxHp = (st.maxHp || 100) + 10;
    st.hp = (st.hp || 100) + 10;
    st.atk = (st.atk || 5) + (stage.atkBonus || 0);
    st.def = (st.def || 3) + (stage.defBonus || 0);

    if (!st.bodyComposition) st.bodyComposition = defaultBodyComposition();
    st.bodyComposition.muscleMass = (st.bodyComposition.muscleMass || 30) + 0.5;
    st.bodyComposition.boneMass = (st.bodyComposition.boneMass || 12) + 0.3;
    st.bodyComposition.bodyFatPct = Math.max(2, (st.bodyComposition.bodyFatPct || 18) - 0.5);

    await prisma.cultivator.update({ where: { id: c.id }, data: { state: st } });
    return NextResponse.json({ success: true, stage: stage.name, level: lv, icon: stage.icon });
  }

  // === 修炼魂魄 ===
  if (action === "train_soul") {
    const souls = st.souls || THREE_SOULS.map((s: any) => ({ ...s, level: 0, hp: 1 }));
    const s = souls[body.soulIdx];
    if (!s) return NextResponse.json({ error: "无效魂魄" }, { status: 400 });
    s.level = (s.level || 0) + 1;
    s.hp = (s.hp || 1) + 5;
    st.souls = souls;
    st.mp = (st.mp || 50) + 3;
    st.maxMp = (st.maxMp || 50) + 3;
    await prisma.cultivator.update({ where: { id: c.id }, data: { state: st } });
    return NextResponse.json({ success: true, soul: s });
  }

  if (action === "train_spirit") {
    const spirits = st.spirits || SIX_SPIRITS.map((s: any) => ({ ...s, level: 0, hp: 1 }));
    const sp = spirits[body.spiritIdx];
    if (!sp) return NextResponse.json({ error: "无效七魄" }, { status: 400 });
    sp.level = (sp.level || 0) + 1;
    sp.hp = (sp.hp || 1) + 5;
    st.spirits = spirits;
    const bonus = (sp.bonusPerLevel || {}) as any;
    if (bonus.dodgeRatePct) st.spd = (st.spd || 10) + 1;
    if (bonus.critRatePct) st.atk = (st.atk || 5) + 1;
    await prisma.cultivator.update({ where: { id: c.id }, data: { state: st } });
    return NextResponse.json({ success: true, spirit: sp });
  }

  // === 激活经脉 ===
  if (action === "activate_meridian") {
    const meridians = st.meridians || defaultMeridians();
    const m = meridians.find((m: any) => m.id === body.meridianId);
    if (!m) return NextResponse.json({ error: "经脉不存在" }, { status: 400 });
    if (m.active) return NextResponse.json({ error: "该经脉已激活" }, { status: 400 });
    m.active = true;
    m.level = 1;
    st.meridians = meridians;
    st.maxHp = (st.maxHp || 100) + 8;
    st.maxMp = (st.maxMp || 50) + 5;
    await prisma.cultivator.update({ where: { id: c.id }, data: { state: st } });
    return NextResponse.json({ success: true, meridian: m });
  }

  // === 治疗身体部位 ===
  if (action === "heal_part") {
    const bs = st.bodyStatus || defaultBodyStatus();
    const part = bs[body.partId];
    if (!part) return NextResponse.json({ error: "无效部位" }, { status: 400 });
    if ((st.gold || 0) < 50) return NextResponse.json({ error: "灵石不足(需50)" }, { status: 400 });
    st.gold -= 50;
    part.hp = Math.min(part.maxHp, (part.hp || 0) + 30);
    part.injured = false;
    st.bodyStatus = bs;
    st.hp = Math.min(st.maxHp || 100, (st.hp || 0) + 20);
    await prisma.cultivator.update({ where: { id: c.id }, data: { state: st } });
    return NextResponse.json({ success: true, part });
  }

  // === 受伤处理（战斗系统调用） ===
  if (action === "apply_injury") {
    const { partId, element, damage, damageType } = body;
    const bs = st.bodyStatus || defaultBodyStatus();
    const part = bs[partId];
    if (part) {
      part.hp = Math.max(0, part.hp - damage);
      part.injured = part.hp < (part.maxHp || 100) * 0.5;
    }

    // 精细化伤害：穿透各层
    const layerDist = (DAMAGE_MECHANICS as any).layerPenetration[element] ||
      (DAMAGE_MECHANICS as any).layerPenetration.physical_blunt;

    // 记录伤口
    if (!st.wounds) st.wounds = [];
    st.wounds.push({
      partId,
      element,
      damageType: damageType || element,
      damage,
      layerDistribution: layerDist,
      timestamp: Date.now(),
      healed: false,
    });

    // 失血计算（1伤害 ≈ 5ml 血液）
    if (!st.bloodStatus) st.bloodStatus = defaultBloodStatus();
    const bloodLoss = Math.floor(damage * 5);
    st.bloodStatus.currentVolume = Math.max(0, st.bloodStatus.currentVolume - bloodLoss);
    if (damage > 20) {
      st.bloodStatus.bleedingRate = Math.min(200, (st.bloodStatus.bleedingRate || 0) + damage);
    }

    // 更新生命体征
    if (!st.vitalSigns) st.vitalSigns = defaultVitalSigns();
    const vs = st.vitalSigns;
    const lossPct = 1 - (st.bloodStatus.currentVolume / st.bloodStatus.totalVolume);
    vs.heartRate = Math.min(200, 75 + Math.floor(lossPct * 80));
    vs.bloodPressureSystolic = Math.max(0, 118 - Math.floor(lossPct * 50));
    vs.bloodPressureDiastolic = Math.max(0, 76 - Math.floor(lossPct * 30));
    vs.oxygenSaturation = Math.max(0, 98 - Math.floor(lossPct * 25));

    // 休克判定
    let shock: string | null = null;
    if (lossPct > 0.40) shock = "低血容量性休克";
    else if (lossPct > 0.30 && (partId === "heart" || partId === "head")) shock = "神经源性休克";

    // 部位受伤辐射
    const radiation = (DAMAGE_MECHANICS as any).radiationMap[partId];
    const radiatedParts: string[] = [];
    if (radiation) {
      radiatedParts.push(...radiation.to);
    }

    st.bodyStatus = bs;
    st.vitalSigns = vs;
    st.bloodStatus = st.bloodStatus;

    await prisma.cultivator.update({ where: { id: c.id }, data: { state: st } });
    return NextResponse.json({
      success: true,
      part,
      bloodLoss,
      shock,
      radiatedParts,
      vitalSigns: vs,
      bloodStatus: st.bloodStatus,
    });
  }

  // === 伤口愈合推进 ===
  if (action === "advance_healing") {
    if (!st.wounds || st.wounds.length === 0) {
      return NextResponse.json({ success: true, message: "无伤口需要愈合" });
    }

    const realm = st.realm || 0;
    const bodyRefineLevel = st.bodyRefineLevel || 0;
    // 修仙愈合倍率：每大境界 ×2，每淬体10级 +20%
    const cultivationMult = Math.pow(2, Math.floor(realm / 3)) * (1 + Math.floor(bodyRefineLevel / 10) * 0.2);

    let healedCount = 0;
    for (const wound of st.wounds) {
      if (wound.healed) continue;
      wound.healProgress = (wound.healProgress || 0) + 10 * cultivationMult;
      if (wound.healProgress >= 100) {
        wound.healed = true;
        healedCount++;
        // 恢复部位HP
        const part = st.bodyStatus?.[wound.partId];
        if (part) {
          part.hp = Math.min(part.maxHp, part.hp + Math.floor(part.maxHp * 0.3));
          if (part.hp >= part.maxHp * 0.5) part.injured = false;
        }
      }
    }

    // 移除已愈合伤口
    st.wounds = st.wounds.filter((w: any) => !w.healed);

    // 恢复生命体征
    if (st.vitalSigns && st.bloodStatus) {
      const vs = st.vitalSigns;
      const bs = st.bloodStatus;
      // 止血
      bs.bleedingRate = Math.max(0, (bs.bleedingRate || 0) - 20);
      // 血量恢复
      bs.currentVolume = Math.min(bs.totalVolume, bs.currentVolume + Math.floor(cultivationMult * 50));
      // 体征回归正常
      vs.heartRate = Math.max(60, vs.heartRate - 5);
      vs.bloodPressureSystolic = Math.min(120, vs.bloodPressureSystolic + 3);
      vs.bloodPressureDiastolic = Math.min(80, vs.bloodPressureDiastolic + 2);
      vs.oxygenSaturation = Math.min(100, vs.oxygenSaturation + 2);
    }

    await prisma.cultivator.update({ where: { id: c.id }, data: { state: st } });
    return NextResponse.json({
      success: true,
      healedCount,
      remainingWounds: st.wounds.length,
      vitalSigns: st.vitalSigns,
      bloodStatus: st.bloodStatus,
    });
  }

  // === 更新身体成分 ===
  if (action === "update_composition") {
    st.bodyComposition = body.composition || st.bodyComposition || defaultBodyComposition();
    await prisma.cultivator.update({ where: { id: c.id }, data: { state: st } });
    return NextResponse.json({ success: true, composition: st.bodyComposition });
  }

  return NextResponse.json({ error: "未知操作" }, { status: 400 });
}

function defaultBodyStatus() {
  return {
    head: { hp: 100, maxHp: 100, injured: false },
    torso: { hp: 150, maxHp: 150, injured: false },
    leftArm: { hp: 80, maxHp: 80, injured: false },
    rightArm: { hp: 80, maxHp: 80, injured: false },
    leftLeg: { hp: 80, maxHp: 80, injured: false },
    rightLeg: { hp: 80, maxHp: 80, injured: false },
  };
}

function defaultMeridians() {
  const sys = MERIDIAN_SYSTEM as any;
  return (sys?.channels || []).map((ch: any) => ({
    id: ch.id, name: ch.name, side: ch.side, icon: ch.icon,
    realm: ch.realm, active: false, level: 0,
  }));
}

function defaultNervous() {
  return { conductionSpeedPct: 1.0, damageLevel: 0, effects: [] };
}

function defaultOrgans() {
  return {
    brain: { hp: 100, maxHp: 100, status: "normal" },
    heart: { hp: 100, maxHp: 100, status: "normal" },
    lung: { hp: 100, maxHp: 100, status: "normal" },
    liver: { hp: 100, maxHp: 100, status: "normal" },
    spleen: { hp: 100, maxHp: 100, status: "normal" },
    stomach: { hp: 100, maxHp: 100, status: "normal" },
    kidney: { hp: 100, maxHp: 100, status: "normal" },
    intestines: { hp: 100, maxHp: 100, status: "normal" },
  };
}
