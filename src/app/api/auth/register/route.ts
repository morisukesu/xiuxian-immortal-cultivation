import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { hashPassword, createToken, COOKIE_NAME_EXPORT } from "@/lib/auth";
import { getRealm, getRoot } from "@/lib/game-data";
import { z } from "zod";

const schema = z.object({
  username: z.string().min(3).max(20),
  password: z.string().min(1).max(50),
  cultivatorName: z.string().min(1).max(20).optional(),
  spiritualRoot: z.number().min(0).max(5).optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = schema.parse(body);

    const existing = await prisma.user.findUnique({ where: { username: data.username } });
    if (existing) return NextResponse.json({ error: "用户名已存在" }, { status: 409 });

    const isFirst = await prisma.user.count() === 0;
    const user = await prisma.user.create({
      data: {
        username: data.username,
        password: hashPassword(data.password),
        role: isFirst ? "admin" : "player",
      },
    });

    // Create cultivator if cultivatorName and spiritualRoot are provided
    let cultivator = null;
    if (data.cultivatorName && data.spiritualRoot !== undefined) {
      const root = getRoot(data.spiritualRoot);
      const realm = getRealm(0);
      cultivator = await prisma.cultivator.create({
        data: {
          userId: user.id,
          name: data.cultivatorName,
          spiritualRoot: root.name,
          rootType: data.spiritualRoot,
          hp: realm.hpBase,
          maxHp: realm.hpBase,
          mp: realm.mpBase,
          maxMp: realm.mpBase,
          state: {
            hp: realm.hpBase,
            maxHp: realm.hpBase,
            mp: realm.mpBase,
            maxMp: realm.mpBase,
            exp: 0,
            expNeeded: 100,
            realmName: realm.name || "炼气期",
            realmIndex: 0,
            gold: 0,
            atk: 5,
            def: 3,
            spd: 10,
            luck: 0,
            expRate: 1,
            pillToxicity: 0,
            lifespan: 100,
            bodyStatus: {
              head: { hp: 100, maxHp: 100, injured: false },
              torso: { hp: 150, maxHp: 150, injured: false },
              leftArm: { hp: 80, maxHp: 80, injured: false },
              rightArm: { hp: 80, maxHp: 80, injured: false },
              leftLeg: { hp: 80, maxHp: 80, injured: false },
              rightLeg: { hp: 80, maxHp: 80, injured: false },
            },
            bodyRefineLevel: 0,
            meridians: [],
            nervous: { conductionSpeedPct: 1.0, damageLevel: 0, effects: [] },
            organs: {},
            souls: [],
            spirits: [],
            radiations: [],
            equipped: {},
            equipInventory: [],
            inventory: [],
            techniques: [],
            pets: [],
            activePet: null,
            technique: null,
            tribulationHistory: [],
            cultivationBranch: "normal",
            mapPos: { x: 0, y: 0 },
            exploredAreas: [],
          },
        },
      });
    }

    const token = createToken(user.id, user.role);
    const res = NextResponse.json({ user: { id: user.id, username: user.username, role: user.role }, cultivator });
    res.cookies.set(COOKIE_NAME_EXPORT, token, { httpOnly: true, maxAge: 604800, sameSite: "lax" });
    return res;
  } catch (e) {
    return NextResponse.json({ error: "注册失败: " + (e as Error).message }, { status: 400 });
  }
}
