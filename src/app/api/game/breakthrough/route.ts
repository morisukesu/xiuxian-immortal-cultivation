import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";
import { getRealm, getNextRealm } from "@/lib/game-data";

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
  const nextRealm = getNextRealm(c.realmIndex);

  if (!nextRealm) return NextResponse.json({ error: "已达最高境界" }, { status: 400 });
  if (c.exp < realm.expNeeded) return NextResponse.json({ error: `需要${realm.expNeeded}修炼值` }, { status: 400 });

  const success = Math.random() * 100 < realm.successRate;

  if (success) {
    await prisma.cultivator.update({
      where: { id: c.id },
      data: {
        realmIndex: { increment: 1 },
        exp: 0,
        totalBreakthroughs: { increment: 1 },
        hp: nextRealm.hpBase,
        maxHp: nextRealm.hpBase,
        mp: nextRealm.mpBase,
        maxMp: nextRealm.mpBase,
        permAtk: { increment: nextRealm.atkBase - realm.atkBase },
        permDef: { increment: nextRealm.defBase - realm.defBase },
      },
    });

    await prisma.gameEvent.create({
      data: {
        cultivatorId: c.id,
        type: "BREAKTHROUGH",
        title: `突破！${nextRealm.name}`,
        narrative: `${c.name}成功突破至${nextRealm.tier}·${nextRealm.name}！天地灵气疯狂涌入，修为大增！`,
        aiGenerated: false,
        reward: JSON.stringify({ newRealm: nextRealm.name }),
      },
    });

    return NextResponse.json({ success: true, newRealm: nextRealm, message: `突破成功！进入${nextRealm.name}` });
  } else {
    const expLoss = Math.floor(c.exp * 0.3);
    await prisma.cultivator.update({
      where: { id: c.id },
      data: { exp: { decrement: expLoss } },
    });

    await prisma.gameEvent.create({
      data: {
        cultivatorId: c.id,
        type: "BREAKTHROUGH_FAILED",
        title: "突破失败",
        narrative: `${c.name}尝试突破${nextRealm.name}失败，走火入魔，损失${expLoss}修炼值。`,
        aiGenerated: false,
      },
    });

    return NextResponse.json({ success: false, expLoss, message: "突破失败，损失部分修炼值" });
  }
}
