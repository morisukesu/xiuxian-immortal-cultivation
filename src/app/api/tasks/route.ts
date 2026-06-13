import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { TASK_TYPES } from "@/lib";

// POST — 创建每日任务
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userId, type, description } = body;

    if (!userId || !type) {
      return NextResponse.json(
        { error: "缺少必填信息" },
        { status: 400 }
      );
    }

    if (!TASK_TYPES[type]) {
      return NextResponse.json(
        { error: "无效的任务类型" },
        { status: 400 }
      );
    }

    const task = await prisma.dailyTask.create({
      data: {
        userId,
        type,
        description: description || null,
      },
    });

    return NextResponse.json({ task });
  } catch (error) {
    console.error("创建任务失败:", error);
    return NextResponse.json(
      { error: "创建失败" },
      { status: 500 }
    );
  }
}

// PATCH — 完成任务
export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const { taskId, userId } = body;

    if (!taskId || !userId) {
      return NextResponse.json(
        { error: "缺少必填信息" },
        { status: 400 }
      );
    }

    // 获取任务
    const task = await prisma.dailyTask.findUnique({
      where: { id: taskId },
    });

    if (!task || task.userId !== userId) {
      return NextResponse.json(
        { error: "任务不存在" },
        { status: 404 }
      );
    }

    if (task.completed) {
      return NextResponse.json(
        { error: "任务已完成" },
        { status: 400 }
      );
    }

    // 获取修炼者信息以计算加成
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: { cultivator: true },
    });

    if (!user?.cultivator) {
      return NextResponse.json(
        { error: "请先创建修炼者" },
        { status: 400 }
      );
    }

    const { calculateTaskExp } = await import("@/lib/cultivation-data");
    const expGained = calculateTaskExp(
      task.type,
      user.cultivator.spiritualRoot as import("@/lib").SpiritualRoot
    );

    // 更新任务状态和修炼值
    const [updatedTask, updatedCultivator] = await prisma.$transaction([
      prisma.dailyTask.update({
        where: { id: taskId },
        data: {
          completed: true,
          cultivationBonus: expGained,
        },
      }),
      prisma.cultivator.update({
        where: { id: user.cultivator.id },
        data: {
          cultivationExp: { increment: expGained },
          totalExp: { increment: expGained },
        },
      }),
    ]);

    // ── 随机奇遇触发检测 ──
    let encounterResult = null;
    try {
      const {
        shouldTriggerEncounter,
        pickRandomEncounter,
        serializeEncounter,
      } = await import("@/lib/encounter-data");

      // 检查今日已触发次数
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);

      const encountersToday = await prisma.gameEvent.count({
        where: {
          cultivatorId: user.cultivator.id,
          type: "ENCOUNTER",
          createdAt: {
            gte: today,
            lt: tomorrow,
          },
        },
      });

      if (shouldTriggerEncounter()) {
        const encounter = pickRandomEncounter(encountersToday);
        if (encounter) {
          // 创建未结算的奇遇事件
          const gameEvent = await prisma.gameEvent.create({
            data: {
              cultivatorId: user.cultivator.id,
              type: "ENCOUNTER",
              title: encounter.title,
              narrative: encounter.narrative,
              choices: JSON.stringify(
                encounter.choices.map((c) => ({
                  riskLevel: c.riskLevel,
                  text: c.text,
                  hint: c.hint,
                }))
              ),
              chosenOption: null,
              reward: null,
            },
          });

          encounterResult = {
            eventId: gameEvent.id,
            encounter: serializeEncounter(encounter),
          };
        }
      }
    } catch (encounterErr) {
      // 奇遇触发失败不影响任务完成
      console.warn("奇遇触发异常，跳过:", encounterErr);
    }

    return NextResponse.json({
      task: updatedTask,
      cultivator: updatedCultivator,
      expGained,
      encounter: encounterResult, // null 或奇遇数据
    });
  } catch (error) {
    console.error("完成任务失败:", error);
    return NextResponse.json(
      { error: "操作失败" },
      { status: 500 }
    );
  }
}

// GET — 获取今日任务列表
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");

    if (!userId) {
      return NextResponse.json(
        { error: "缺少 userId" },
        { status: 400 }
      );
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const tasks = await prisma.dailyTask.findMany({
      where: {
        userId,
        date: {
          gte: today,
          lt: tomorrow,
        },
      },
      orderBy: { date: "desc" },
    });

    return NextResponse.json({ tasks });
  } catch (error) {
    console.error("获取任务失败:", error);
    return NextResponse.json(
      { error: "获取失败" },
      { status: 500 }
    );
  }
}
