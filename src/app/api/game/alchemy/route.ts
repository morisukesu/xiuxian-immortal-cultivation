import { NextRequest, NextResponse } from "next/server";
import { getAuthUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { ALCHEMY_RECIPES, MEDICAL_PILLS, PILL_TOXICITY } from "@/lib/game-data";

export async function GET(req: NextRequest) {
  const user = await getAuthUser(req);
  if (!user) return NextResponse.json({ error: "未登录" }, { status: 401 });
  const cultivator = await prisma.cultivator.findFirst({ where: { userId: user.id } });
  if (!cultivator) return NextResponse.json({ error: "未创建角色" }, { status: 400 });
  const state = (cultivator.state as any) || {};
  return NextResponse.json({
    recipes: ALCHEMY_RECIPES,
    pills: MEDICAL_PILLS,
    toxicity: PILL_TOXICITY,
    currentToxicity: state.pillToxicity || 0,
    herbs: state.herbs || {},
  });
}

export async function POST(req: NextRequest) {
  const user = await getAuthUser(req);
  if (!user) return NextResponse.json({ error: "未登录" }, { status: 401 });
  const cultivator = await prisma.cultivator.findFirst({ where: { userId: user.id } });
  if (!cultivator) return NextResponse.json({ error: "未创建角色" }, { status: 400 });

  const body = await req.json();
  const state = (cultivator.state as any) || {};
  const recipes = ALCHEMY_RECIPES as any[];
  const recipe = recipes[body.recipeIdx];

  if (!recipe) return NextResponse.json({ error: "配方不存在" }, { status: 400 });

  // 检查材料
  const herbs = state.herbs || {};
  for (const [herb, count] of Object.entries(recipe.materials || {})) {
    if ((herbs[herb] || 0) < (count as number)) {
      return NextResponse.json({ error: `材料不足：${herb}` }, { status: 400 });
    }
  }

  // 扣除材料
  for (const [herb, count] of Object.entries(recipe.materials || {})) {
    herbs[herb] -= count as number;
  }

  // 炼丹成功率
  const successRate = recipe.successRate || 0.7;
  const isSuccess = Math.random() < successRate;

  if (isSuccess) {
    const inventory = state.inventory || [];
    inventory.push({ id: recipe.output, count: 1 });
    state.inventory = inventory;
    state.herbs = herbs;
    await prisma.cultivator.update({ where: { id: cultivator.id }, data: { state } });
    return NextResponse.json({ success: true, pill: recipe.output, log: `炼丹成功！获得 ${recipe.name}` });
  } else {
    state.pillToxicity = (state.pillToxicity || 0) + (recipe.toxicity || 5);
    state.herbs = herbs;
    await prisma.cultivator.update({ where: { id: cultivator.id }, data: { state } });
    return NextResponse.json({ success: false, toxicity: state.pillToxicity, log: "炼丹失败，丹毒增加" });
  }
}
