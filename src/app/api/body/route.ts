// ============================================================
// 身体经络系统 API
// ============================================================

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import {
  createInitialBodyState,
  updatePartHp,
  healPart,
  openMeridian,
  activateAcupoint,
  getCultivationSpeedBonus,
  serializeBodyState,
  deserializeBodyState,
} from "@/lib/body-system";

// ============================================================
// GET - 获取修仙者的身体状态
// ============================================================
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");

  if (!userId) {
    return NextResponse.json({ error: "缺少 userId" }, { status: 400 });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: { cultivator: true },
    });

    if (!user?.cultivator) {
      return NextResponse.json({ error: "修仙者不存在" }, { status: 404 });
    }

    const bodyState = deserializeBodyState(
      user.cultivator.bodyState ? JSON.parse(user.cultivator.bodyState) : null
    );

    const speedBonus = getCultivationSpeedBonus(bodyState);

    return NextResponse.json({
      bodyState,
      speedBonus,
      message: `当前修炼速度加成：${(speedBonus * 100 - 100).toFixed(1)}%`,
    });
  } catch (error) {
    console.error("获取身体状态失败:", error);
    return NextResponse.json({ error: "获取失败" }, { status: 500 });
  }
}

// ============================================================
// POST - 身体系统操作
// ============================================================
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { userId, action } = body;

    if (!userId) {
      return NextResponse.json({ error: "缺少 userId" }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: { cultivator: true },
    });

    if (!user?.cultivator) {
      return NextResponse.json({ error: "修仙者不存在" }, { status: 404 });
    }

    const cultivatorId = user.cultivator.id;
    let bodyState = deserializeBodyState(
      user.cultivator.bodyState ? JSON.parse(user.cultivator.bodyState) : null
    );

    // 初始化身体状态
    if (action === "init") {
      bodyState = createInitialBodyState();
      
      await prisma.cultivator.update({
        where: { id: cultivatorId },
        data: {
          bodyState: JSON.stringify(serializeBodyState(bodyState)),
          bodyToughness: bodyState.overallToughness,
        },
      });

      return NextResponse.json({
        bodyState,
        message: "身体系统初始化完成",
      });
    }

    // 治疗部位
    if (action === "heal") {
      const partId = body.partId;
      const amount = body.amount || 20;

      if (!partId) {
        return NextResponse.json({ error: "缺少 partId" }, { status: 400 });
      }

      bodyState = healPart(bodyState, partId, amount);

      await prisma.cultivator.update({
        where: { id: cultivatorId },
        data: {
          bodyState: JSON.stringify(serializeBodyState(bodyState)),
          bodyToughness: bodyState.overallToughness,
        },
      });

      return NextResponse.json({
        bodyState,
        message: `${partId} 伤势恢复 ${amount} 点`,
      });
    }

    // 打通经络
    if (action === "openMeridian") {
      const meridianIndex = body.meridianIndex;

      if (meridianIndex === undefined) {
        return NextResponse.json({ error: "缺少 meridianIndex" }, { status: 400 });
      }

      bodyState = openMeridian(bodyState, meridianIndex);

      await prisma.cultivator.update({
        where: { id: cultivatorId },
        data: {
          bodyState: JSON.stringify(serializeBodyState(bodyState)),
          bodyToughness: bodyState.overallToughness,
        },
      });

      const meridian = bodyState.meridians[meridianIndex];
      return NextResponse.json({
        bodyState,
        message: `成功打通 ${meridian.name}！修炼速度提升！`,
      });
    }

    // 激活穴位
    if (action === "activateAcupoint") {
      const acupointIndex = body.acupointIndex;

      if (acupointIndex === undefined) {
        return NextResponse.json({ error: "缺少 acupointIndex" }, { status: 400 });
      }

      bodyState = activateAcupoint(bodyState, acupointIndex);

      await prisma.cultivator.update({
        where: { id: cultivatorId },
        data: {
          bodyState: JSON.stringify(serializeBodyState(bodyState)),
          bodyToughness: bodyState.overallToughness,
        },
      });

      const acupoint = bodyState.acupoints[acupointIndex];
      return NextResponse.json({
        bodyState,
        message: `成功激活 ${acupoint.name} 穴位！`,
      });
    }

    // 修炼提升身体
    if (action === "cultivate") {
      // 根据任务类型提升身体状态
      const taskType = body.taskType;
      const spiritualRoot = body.spiritualRoot || "杂灵根";
      
      // 灵根速度加成
      const rootBonusMap: Record<string, number> = {
        "杂灵根": 0.8,
        "四灵根": 0.9,
        "三灵根": 1.0,
        "双灵根": 1.1,
        "异灵根": 1.2,
        "天灵根": 1.3,
      };
      const rootBonus = rootBonusMap[spiritualRoot] || 1.0;

      // 不同任务对身体的影响
      switch (taskType) {
        case "EXERCISE":
          // 锻体提升整体坚韧度和 HP
          bodyState.overallToughness = Math.min(100, bodyState.overallToughness + Math.floor(3 * rootBonus));
          break;
        case "MEDITATE":
          // 打坐有概率打通经络或激活穴位
          if (Math.random() < 0.15 * rootBonus) {
            // 尝试打通未打通的经络
            const unopened = bodyState.meridians.findIndex((m) => !m.isOpened);
            if (unopened >= 0) {
              bodyState = openMeridian(bodyState, unopened);
              return NextResponse.json({
                bodyState,
                message: `打坐感悟中，突然灵光一闪！成功打通 ${bodyState.meridians[unopened].name}！`,
              });
            }
          }
          if (Math.random() < 0.1 * rootBonus) {
            // 尝试激活未激活的穴位
            const unactivated = bodyState.acupoints.findIndex((a) => !a.isActivated);
            if (unactivated >= 0) {
              bodyState = activateAcupoint(bodyState, unactivated);
              return NextResponse.json({
                bodyState,
                message: `内视自省，发现 ${bodyState.acupoints[unactivated].name} 穴窍！尝试激活成功！`,
                activated: bodyState.acupoints[unactivated].name,
              });
            }
          }
          break;
        case "STUDY":
          // 悟道有概率提升坚韧度
          bodyState.overallToughness = Math.min(100, bodyState.overallToughness + Math.floor(1 * rootBonus));
          break;
        case "SLEEP":
          // 静修恢复身体伤势
          Object.keys(bodyState.parts).forEach((partId) => {
            const hp = (bodyState.parts as any)[partId];
            if (hp.hp < hp.maxHp) {
              bodyState = healPart(bodyState, partId as any, Math.floor(5 * rootBonus));
            }
          });
          break;
      }

      await prisma.cultivator.update({
        where: { id: cultivatorId },
        data: {
          bodyState: JSON.stringify(serializeBodyState(bodyState)),
          bodyToughness: bodyState.overallToughness,
        },
      });

      return NextResponse.json({
        bodyState,
        message: "修炼完成，身体状态有所提升",
      });
    }

    return NextResponse.json({ error: "无效的操作" }, { status: 400 });
  } catch (error) {
    console.error("身体系统操作失败:", error);
    return NextResponse.json({ error: "操作失败" }, { status: 500 });
  }
}
