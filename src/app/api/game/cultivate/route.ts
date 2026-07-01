import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";
import { getRealm, getRoot } from "@/lib/game-data";

export async function POST() {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "未登录" }, { status: 401 });

  const dbUser = await prisma.user.findUnique({
    where: { id: user.userId },
    include: { cultivator: true },
  });
  if (!dbUser?.cultivator) return NextResponse.json({ error: "无角色" }, { status: 400 });

  const c = dbUser.cultivator;
  const realm = getRealm(c.realmIndex);
  const root = getRoot(c.rootType);
  const baseExp = Math.floor(20 * realm.qiMult * root.speedBonus);
  const goldGain = Math.floor(5 * realm.goldRate * 10);

  await prisma.cultivator.update({
    where: { id: c.id },
    data: {
      exp: { increment: baseExp },
      totalExp: { increment: baseExp },
      gold: { increment: goldGain },
    },
  });

  await prisma.gameEvent.create({
    data: {
      cultivatorId: c.id,
      type: "CULTIVATE",
      title: "日常修炼",
      narrative: `${c.name}静坐修炼，灵力流转经脉，修为增长${baseExp}点。`,
      aiGenerated: false,
    },
  });

  return NextResponse.json({ expGain: baseExp, goldGain, totalExp: c.totalExp + baseExp });
}
