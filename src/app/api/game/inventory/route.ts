import { NextRequest, NextResponse } from "next/server";
import { getAuthUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { ITEM_INFO, EQUIPMENT_SLOTS, AFFIX_LIBRARY } from "@/lib/game-data";

export async function GET(req: NextRequest) {
  const user = await getAuthUser(req);
  if (!user) return NextResponse.json({ error: "未登录" }, { status: 401 });

  const cultivator = await prisma.cultivator.findFirst({ where: { userId: user.id } });
  if (!cultivator) return NextResponse.json({ error: "未创建角色" }, { status: 400 });

  const state = (cultivator.state as any) || {};
  const inventory = state.inventory || [];
  const equipped = state.equipped || {};

  return NextResponse.json({
    inventory: inventory.map((item: any) => {
      const info = (ITEM_INFO as any)[item.id] || {};
      return { ...info, ...item };
    }),
    equipped,
    slots: EQUIPMENT_SLOTS,
    gold: state.gold || 0,
    backpackSize: inventory.length,
    affixLibrary: AFFIX_LIBRARY,
  });
}
