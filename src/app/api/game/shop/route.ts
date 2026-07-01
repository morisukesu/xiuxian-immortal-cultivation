import { NextRequest, NextResponse } from "next/server";
import { getAuthUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { SHOP_POOL } from "@/lib/game-data";

export async function GET(req: NextRequest) {
  const user = await getAuthUser(req);
  if (!user) return NextResponse.json({ error: "未登录" }, { status: 401 });
  const cultivator = await prisma.cultivator.findFirst({ where: { userId: user.id } });
  if (!cultivator) return NextResponse.json({ error: "未创建角色" }, { status: 400 });
  const state = (cultivator.state as any) || {};
  return NextResponse.json({ shop: SHOP_POOL, gold: state.gold || 0 });
}

export async function POST(req: NextRequest) {
  const user = await getAuthUser(req);
  if (!user) return NextResponse.json({ error: "未登录" }, { status: 401 });
  const cultivator = await prisma.cultivator.findFirst({ where: { userId: user.id } });
  if (!cultivator) return NextResponse.json({ error: "未创建角色" }, { status: 400 });

  const body = await req.json();
  const state = (cultivator.state as any) || {};
  const shop = SHOP_POOL as any[];
  const item = shop[body.itemIdx];

  if (!item) return NextResponse.json({ error: "商品不存在" }, { status: 400 });
  if ((state.gold || 0) < item.basePrice) return NextResponse.json({ error: "灵石不足" }, { status: 400 });

  state.gold -= item.basePrice;
  const inventory = state.inventory || [];
  inventory.push({ id: item.id, name: item.name, icon: item.icon, count: 1 });
  state.inventory = inventory;
  await prisma.cultivator.update({ where: { id: cultivator.id }, data: { state } });
  return NextResponse.json({ success: true, item: item.name, gold: state.gold });
}
