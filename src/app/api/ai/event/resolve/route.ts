import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";
import { resolveEvent } from "@/lib/ai-engine";
import { getRealm } from "@/lib/game-data";
import { jsonParse } from "@/lib/utils";
import { z } from "zod";

const schema = z.object({
  eventId: z.string(),
  choiceIndex: z.number().min(0).max(2),
});

export async function POST(request: NextRequest) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "未登录" }, { status: 401 });

  try {
    const body = await request.json();
    const { eventId, choiceIndex } = schema.parse(body);

    const gameEvent = await prisma.gameEvent.findUnique({ where: { id: eventId } });
    if (!gameEvent) return NextResponse.json({ error: "事件不存在" }, { status: 404 });

    const dbUser = await prisma.user.findUnique({
      where: { id: user.userId },
      include: { cultivator: true },
    });
    if (!dbUser?.cultivator) return NextResponse.json({ error: "无角色" }, { status: 400 });

    const c = dbUser.cultivator;
    const realm = getRealm(c.realmIndex);

    const choices = jsonParse(gameEvent.choices, []);
    const event = {
      type: gameEvent.type,
      title: gameEvent.title,
      narrative: gameEvent.narrative,
      mood: "奇",
      choices,
      difficulty: gameEvent.difficulty,
      seed: gameEvent.seed || "",
    };

    const result = await resolveEvent(event, choiceIndex, {
      name: c.name,
      spiritualRoot: c.spiritualRoot,
      realmIndex: c.realmIndex,
      realm: `${realm.tier}·${realm.name}`,
      exp: c.exp,
      hp: c.hp,
      maxHp: c.maxHp,
    });

    // 应用奖励
    const updates: any = {};
    for (const r of result.rewards) {
      if (r.type === "exp") { updates.exp = { increment: r.value }; updates.totalExp = { increment: r.value }; }
      else if (r.type === "gold") { updates.gold = { increment: r.value }; }
      else if (r.type === "herbs") { updates.herbs = { increment: r.value }; }
      else if (r.type === "wudao") { updates.wudao = { increment: r.value }; }
    }

    if (Object.keys(updates).length > 0) {
      await prisma.cultivator.update({ where: { id: c.id }, data: updates });
    }

    await prisma.gameEvent.update({
      where: { id: eventId },
      data: {
        chosenOption: choiceIndex,
        reward: JSON.stringify(result.rewards),
        resultNarrative: result.resultNarrative,
      },
    });

    return NextResponse.json(result);
  } catch (e) {
    return NextResponse.json({ error: "处理失败: " + (e as Error).message }, { status: 400 });
  }
}
