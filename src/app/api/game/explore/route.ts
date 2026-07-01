import { NextRequest, NextResponse } from "next/server";
import { getAuthUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { BIOMES, EXPLORE_BOSSES, EXPLORE_TREASURES, EXPLORE_EVENTS } from "@/lib/game-data";

export async function POST(req: NextRequest) {
  const user = await getAuthUser(req);
  if (!user) return NextResponse.json({ error: "未登录" }, { status: 401 });

  const cultivator = await prisma.cultivator.findFirst({ where: { userId: user.id } });
  if (!cultivator) return NextResponse.json({ error: "未创建角色" }, { status: 400 });

  const body = await req.json().catch(() => ({}));
  const action = body.action || "explore";

  const state = (cultivator.state as any) || {};
  const realmIdx = state.realmIndex || 0;

  if (action === "map") {
    return NextResponse.json({
      biomes: BIOMES,
      currentPos: state.mapPos || { x: 0, y: 0 },
      explored: state.exploredAreas || [],
    });
  }

  if (action === "enter_biome") {
    const biomeIdx = body.biomeIdx || 0;
    const biome = (BIOMES as any[])[biomeIdx] || (BIOMES as any[])[0];
    const events = (EXPLORE_EVENTS as any[]).filter(() => Math.random() < 0.7).slice(0, 3);
    const boss = (EXPLORE_BOSSES as any[])[Math.floor(Math.random() * Math.min(EXPLORE_BOSSES.length, realmIdx + 2))];
    const treasure = (EXPLORE_TREASURES as any[])[Math.floor(Math.random() * EXPLORE_TREASURES.length)];

    return NextResponse.json({
      biome,
      events,
      boss,
      treasure,
      log: `你进入了【${biome.name || '未知区域'}】，感受到了灵气波动...`,
    });
  }

  // 默认探索
  const rand = Math.random();
  let result: any;
  if (rand < 0.3) {
    const boss = (EXPLORE_BOSSES as any[])[Math.floor(Math.random() * EXPLORE_BOSSES.length)];
    result = { type: "boss", boss, log: `遭遇了 ${boss.name || '未知妖兽'}！` };
  } else if (rand < 0.6) {
    const treasure = (EXPLORE_TREASURES as any[])[Math.floor(Math.random() * EXPLORE_TREASURES.length)];
    result = { type: "treasure", treasure, log: `发现了 ${treasure.name || '宝箱'}！` };
  } else if (rand < 0.85) {
    const event = (EXPLORE_EVENTS as any[])[Math.floor(Math.random() * EXPLORE_EVENTS.length)];
    result = { type: "event", event, log: `触发了事件：${event.name || '奇遇'}` };
  } else {
    const expGain = 5 + Math.floor(Math.random() * 20) + realmIdx * 3;
    const goldGain = 1 + Math.floor(Math.random() * 10);
    state.exp = (state.exp || 0) + expGain;
    state.gold = (state.gold || 0) + goldGain;
    await prisma.cultivator.update({ where: { id: cultivator.id }, data: { state } });
    result = { type: "normal", expGain, goldGain, log: `探索一番，获得 ${expGain} 经验、${goldGain} 灵石` };
  }

  return NextResponse.json(result);
}
