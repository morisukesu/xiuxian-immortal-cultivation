import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";

export async function GET() {
  const user = await getCurrentUser();
  if (!user || user.role !== "admin") return NextResponse.json({ error: "无权限" }, { status: 403 });

  const [totalUsers, totalCultivators, totalEvents, aiEvents] = await Promise.all([
    prisma.user.count(),
    prisma.cultivator.count(),
    prisma.gameEvent.count(),
    prisma.gameEvent.count({ where: { aiGenerated: true } }),
  ]);

  return NextResponse.json({ totalUsers, totalCultivators, totalEvents, aiEvents });
}
