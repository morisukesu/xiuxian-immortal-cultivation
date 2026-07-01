import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";

export async function GET() {
  const user = await getCurrentUser();
  if (!user || user.role !== "admin") return NextResponse.json({ error: "无权限" }, { status: 403 });

  const configs = await prisma.worldConfig.findMany({ orderBy: { key: "asc" } });
  return NextResponse.json({ configs });
}
