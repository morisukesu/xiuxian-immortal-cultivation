import { NextRequest, NextResponse } from "next/server";
import { getAuthUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { TRIBULATIONS, BRANCH_TRIBULATIONS } from "@/lib/game-data";

export async function GET(req: NextRequest) {
  const user = await getAuthUser(req);
  if (!user) return NextResponse.json({ error: "未登录" }, { status: 401 });
  const cultivator = await prisma.cultivator.findFirst({ where: { userId: user.id } });
  if (!cultivator) return NextResponse.json({ error: "未创建角色" }, { status: 400 });
  const state = (cultivator.state as any) || {};
  const branch = state.cultivationBranch || 'normal';
  const tribList = (BRANCH_TRIBULATIONS as any)[branch] || TRIBULATIONS;
  const nextIdx = state.tribulationHistory?.length || 0;
  const next = (tribList as any[])[nextIdx] || (tribList as any[])[0];
  return NextResponse.json({
    next,
    history: state.tribulationHistory || [],
    total: (tribList as any[]).length,
  });
}

export async function POST(req: NextRequest) {
  const user = await getAuthUser(req);
  if (!user) return NextResponse.json({ error: "未登录" }, { status: 401 });
  const cultivator = await prisma.cultivator.findFirst({ where: { userId: user.id } });
  if (!cultivator) return NextResponse.json({ error: "未创建角色" }, { status: 400 });

  const body = await req.json();
  const state = (cultivator.state as any) || {};
  const branch = state.cultivationBranch || 'normal';
  const tribList = (BRANCH_TRIBULATIONS as any)[branch] || TRIBULATIONS;
  const idx = state.tribulationHistory?.length || 0;
  const trib = (tribList as any[])[idx] || (tribList as any[])[0];

  const strategy = body.strategy || 'face';
  const strategyMap: any = { face: 1.0, defend: 1.3, dodge: 0.7, use_item: 1.5 };
  const baseRate = trib.successRate || 0.5;
  const finalRate = Math.min(0.95, baseRate * (strategyMap[strategy] || 1.0));
  const success = Math.random() < finalRate;

  const history = state.tribulationHistory || [];
  history.push({ tribulation: trib, strategy, success, time: Date.now() });
  state.tribulationHistory = history;

  if (success) {
    state.hp = state.maxHp;
    state.mp = state.maxMp;
    state.realmIndex = (state.realmIndex || 0) + 1;
    await prisma.cultivator.update({ where: { id: cultivator.id }, data: { state } });
    return NextResponse.json({ success: true, newRealm: state.realmIndex, log: "渡劫成功！境界提升！" });
  } else {
    state.hp = Math.floor((state.maxHp || 100) * 0.1);
    if (state.hp <= 0) {
      state.realmIndex = Math.max(0, (state.realmIndex || 0) - 1);
      state.hp = state.maxHp;
      await prisma.cultivator.update({ where: { id: cultivator.id }, data: { state } });
      return NextResponse.json({ success: false, realmLoss: true, log: "渡劫失败！境界跌落！" });
    }
    await prisma.cultivator.update({ where: { id: cultivator.id }, data: { state } });
    return NextResponse.json({ success: false, log: "渡劫失败！重伤！" });
  }
}
