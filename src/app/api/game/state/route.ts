import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";
import { getRealm } from "@/lib/game-data";

export async function GET() {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "未登录" }, { status: 401 });

  const dbUser = await prisma.user.findUnique({
    where: { id: user.userId },
    include: { cultivator: true },
  });

  if (!dbUser) return NextResponse.json({ error: "用户不存在" }, { status: 404 });
  if (!dbUser.cultivator) return NextResponse.json({ user: dbUser, cultivator: null });

  const realm = getRealm(dbUser.cultivator.realmIndex);
  return NextResponse.json({
    user: { id: dbUser.id, username: dbUser.username, role: dbUser.role },
    cultivator: dbUser.cultivator,
    realm,
  });
}
