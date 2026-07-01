import { NextRequest, NextResponse } from "next/server";
import { getAuthUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { TECHNIQUES } from "@/lib/game-data";

export async function GET(req: NextRequest) {
  const user = await getAuthUser(req);
  if (!user) return NextResponse.json({ error: "未登录" }, { status: 401 });
  const cultivator = await prisma.cultivator.findFirst({ where: { userId: user.id } });
  if (!cultivator) return NextResponse.json({ error: "未创建角色" }, { status: 400 });
  const state = (cultivator.state as any) || {};
  return NextResponse.json({
    techniques: TECHNIQUES,
    learned: state.techniques || [],
    currentTechnique: state.technique || null,
  });
}
