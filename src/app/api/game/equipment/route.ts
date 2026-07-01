import { NextRequest, NextResponse } from "next/server";
import { getAuthUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import {
  EQUIPMENT_SLOTS, EQUIPMENT_POOL, EQUIPMENT_SLOT_ICONS,
  EQUIPMENT_SLOT_NAMES, TIER_COLORS, TIER_ORDER, EQUIP_GRADES,
  WEAPON_DATA, GRADE_COLORS
} from "@/lib/game-data/equipment";

export async function GET(req: NextRequest) {
  const user = await getAuthUser(req);
  if (!user) return NextResponse.json({ error: "未登录" }, { status: 401 });
  const c = await prisma.cultivator.findFirst({ where: { userId: user.id } });
  if (!c) return NextResponse.json({ error: "未创建角色" }, { status: 400 });
  const st = (c.state as any) || {};

  return NextResponse.json({
    equipped: st.equipped || {},
    inventory: st.equipInventory || [],
    gold: st.gold || 0,
    slots: EQUIPMENT_SLOTS,
    slotIcons: EQUIPMENT_SLOT_ICONS,
    slotNames: EQUIPMENT_SLOT_NAMES,
    tierColors: TIER_COLORS,
    tierOrder: TIER_ORDER,
    grades: EQUIP_GRADES,
    gradeColors: GRADE_COLORS,
    weaponData: WEAPON_DATA,
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

  // ====== 装备穿戴 ======
  if (action === "equip") {
    const inv = st.equipInventory || [];
    const item = inv.find((i: any) => i.uid === body.uid);
    if (!item) return NextResponse.json({ error: "物品不存在" }, { status: 400 });

    if (!st.equipped) st.equipped = {};
    // 卸下旧装备
    const old = st.equipped[item.slot];
    if (old) {
      inv.push(old);
      removeStatBonus(st, old);
    }
    // 穿上新装备
    st.equipped[item.slot] = item;
    inv.splice(inv.indexOf(item), 1);
    applyStatBonus(st, item);

    await prisma.cultivator.update({ where: { id: c.id }, data: { state: st } });
    return NextResponse.json({ success: true, equipped: st.equipped, inventory: inv });
  }

  // ====== 卸下装备 ======
  if (action === "unequip") {
    if (!st.equipped) return NextResponse.json({ error: "无装备" }, { status: 400 });
    const item = st.equipped[body.slot];
    if (!item) return NextResponse.json({ error: "该槽位无装备" }, { status: 400 });
    if (!st.equipInventory) st.equipInventory = [];
    st.equipInventory.push(item);
    delete st.equipped[body.slot];
    removeStatBonus(st, item);
    await prisma.cultivator.update({ where: { id: c.id }, data: { state: st } });
    return NextResponse.json({ success: true, equipped: st.equipped, inventory: st.equipInventory });
  }

  // ====== 抽取装备 ======
  if (action === "draw") {
    const cost = 50;
    if ((st.gold || 0) < cost) return NextResponse.json({ error: `灵石不足(需${cost})` }, { status: 400 });
    st.gold -= cost;

    const realmIdx = st.realmIndex || 0;
    const maxTier = Math.min(TIER_ORDER.length - 1, Math.floor(realmIdx / 2));
    const tierIdx = Math.floor(Math.random() * (maxTier + 1));
    const tier = TIER_ORDER[tierIdx];
    const pool = EQUIPMENT_POOL.filter((e: any) => e.tier === tier);
    const base = pool[Math.floor(Math.random() * pool.length)] || EQUIPMENT_POOL[0];

    const gradeIdx = Math.floor(Math.random() * EQUIP_GRADES.length);
    const grade = EQUIP_GRADES[gradeIdx];
    const gradeMult = 1 + gradeIdx * 0.15;

    const item = {
      uid: `eq_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
      ...base,
      grade,
      gradeIdx,
      atk: base.atk ? Math.round(base.atk * gradeMult) : undefined,
      def: base.def ? Math.round(base.def * gradeMult) : undefined,
      hp: base.hp ? Math.round(base.hp * gradeMult) : undefined,
      mp: base.mp ? Math.round(base.mp * gradeMult) : undefined,
    };

    if (!st.equipInventory) st.equipInventory = [];
    st.equipInventory.push(item);
    await prisma.cultivator.update({ where: { id: c.id }, data: { state: st } });
    return NextResponse.json({ success: true, item, gold: st.gold });
  }

  // ====== 强化词缀 ======
  if (action === "enhance") {
    const inv = st.equipInventory || [];
    const item = inv.find((i: any) => i.uid === body.uid) || (st.equipped || {})[body.slot];
    if (!item) return NextResponse.json({ error: "物品不存在" }, { status: 400 });
    const cost = 100 * ((item.enhanceLevel || 0) + 1);
    if ((st.gold || 0) < cost) return NextResponse.json({ error: `灵石不足(需${cost})` }, { status: 400 });
    st.gold -= cost;
    item.enhanceLevel = (item.enhanceLevel || 0) + 1;
    const bonus = 1 + item.enhanceLevel * 0.1;
    if (item.atk) item.atk = Math.round(item.atk * bonus);
    if (item.def) item.def = Math.round(item.def * bonus);
    if (item.hp) item.hp = Math.round(item.hp * bonus);
    await prisma.cultivator.update({ where: { id: c.id }, data: { state: st } });
    return NextResponse.json({ success: true, item, gold: st.gold });
  }

  // ====== 计算总属性 ======
  if (action === "stats") {
    const equipped = st.equipped || {};
    let totalAtk = 0, totalDef = 0, totalHp = 0, totalMp = 0;
    for (const slot of Object.keys(equipped)) {
      const e = equipped[slot];
      if (e) { totalAtk += e.atk || 0; totalDef += e.def || 0; totalHp += e.hp || 0; totalMp += e.mp || 0; }
    }
    return NextResponse.json({ totalAtk, totalDef, totalHp, totalMp, equipped });
  }

  return NextResponse.json({ error: "未知操作" }, { status: 400 });
}

function applyStatBonus(st: any, item: any) {
  if (item.atk) st.atk = (st.atk || 5) + item.atk;
  if (item.def) st.def = (st.def || 3) + item.def;
  if (item.hp) { st.maxHp = (st.maxHp || 100) + item.hp; st.hp = (st.hp || 100) + item.hp; }
  if (item.mp) { st.maxMp = (st.maxMp || 50) + item.mp; st.mp = (st.mp || 50) + item.mp; }
  if (item.speed) st.spd = (st.spd || 10) + item.speed * 10;
}

function removeStatBonus(st: any, item: any) {
  if (item.atk) st.atk = Math.max(1, (st.atk || 5) - item.atk);
  if (item.def) st.def = Math.max(0, (st.def || 3) - item.def);
  if (item.hp) { st.maxHp = Math.max(1, (st.maxHp || 100) - item.hp); st.hp = Math.max(1, (st.hp || 100) - item.hp); }
  if (item.mp) { st.maxMp = Math.max(0, (st.maxMp || 50) - item.mp); st.mp = Math.max(0, (st.mp || 50) - item.mp); }
  if (item.speed) st.spd = Math.max(1, (st.spd || 10) - item.speed * 10);
}
