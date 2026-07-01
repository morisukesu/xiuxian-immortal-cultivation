import { NextRequest, NextResponse } from "next/server";
import { getAuthUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { EQUIPMENT_SLOTS } from "@/lib/game-data";

export async function POST(req: NextRequest) {
  const user = await getAuthUser(req);
  if (!user) return NextResponse.json({ error: "未登录" }, { status: 401 });
  const cultivator = await prisma.cultivator.findFirst({ where: { userId: user.id } });
  if (!cultivator) return NextResponse.json({ error: "未创建角色" }, { status: 400 });

  const body = await req.json();
  const state = (cultivator.state as any) || {};
  const inventory = state.inventory || [];
  const equipped = state.equipped || {};
  const slot = body.slot;
  const itemIdx = body.itemIdx;

  if (body.action === "equip") {
    const item = inventory[itemIdx];
    if (!item || !item.slot) return NextResponse.json({ error: "无效装备" }, { status: 400 });
    if (item.slot !== slot) return NextResponse.json({ error: "装备类型不匹配" }, { status: 400 });

    // 卸下旧装备
    if (equipped[slot]) {
      inventory.push(equipped[slot]);
    }
    // 装备新
    equipped[slot] = item;
    inventory.splice(itemIdx, 1);
    state.equipped = equipped;
    state.inventory = inventory;
    await prisma.cultivator.update({ where: { id: cultivator.id }, data: { state } });
    return NextResponse.json({ success: true, equipped, log: `装备了 ${item.name}` });
  }

  if (body.action === "unequip") {
    if (equipped[slot]) {
      inventory.push(equipped[slot]);
      delete equipped[slot];
      state.equipped = equipped;
      state.inventory = inventory;
      await prisma.cultivator.update({ where: { id: cultivator.id }, data: { state } });
      return NextResponse.json({ success: true, equipped, log: "卸下装备" });
    }
  }

  return NextResponse.json({ error: "未知操作" }, { status: 400 });
}
