import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";
import { getRealm, getRoot } from "@/lib/game-data";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1).max(20),
  rootType: z.number().min(0).max(5),
});

export async function POST(request: NextRequest) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "未登录" }, { status: 401 });

  try {
    const body = await request.json();
    const data = schema.parse(body);

    const existing = await prisma.cultivator.findUnique({ where: { userId: user.userId } });
    if (existing) return NextResponse.json({ error: "已有角色" }, { status: 400 });

    const root = getRoot(data.rootType);
    const realm = getRealm(0);
    const cultivator = await prisma.cultivator.create({
      data: {
        userId: user.userId,
        name: data.name,
        spiritualRoot: root.name,
        rootType: data.rootType,
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

    return NextResponse.json({ cultivator, realm });
  } catch (e) {
    return NextResponse.json({ error: "创建失败: " + (e as Error).message }, { status: 400 });
  }
}
