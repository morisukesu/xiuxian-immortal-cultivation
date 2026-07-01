import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";
import { generateEvent } from "@/lib/ai-engine";
import { getRealm } from "@/lib/game-data";

export async function POST() {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "未登录" }, { status: 401 });

  const dbUser = await prisma.user.findUnique({
    where: { id: user.userId },
    include: { cultivator: true },
  });
  if (!dbUser?.cultivator) return NextResponse.json({ error: "请先创建角色" }, { status: 400 });

  const c = dbUser.cultivator;
  const realm = getRealm(c.realmIndex);

  const event = await generateEvent({
    name: c.name,
    spiritualRoot: c.spiritualRoot,
    realmIndex: c.realmIndex,
    realm: `${realm.tier}·${realm.name}`,
    exp: c.exp,
    hp: c.hp,
    maxHp: c.maxHp,
  });

  // 保存事件（待选择）
  const gameEvent = await prisma.gameEvent.create({
    data: {
      cultivatorId: c.id,
      type: event.type,
      title: event.title,
      narrative: event.narrative,
      choices: JSON.stringify(event.choices),
      aiGenerated: true,
      aiModel: process.env.AI_MODEL || "unknown",
      seed: event.seed,
      difficulty: event.difficulty,
    },
  });

  return NextResponse.json({ event, gameEventId: gameEvent.id });
}
