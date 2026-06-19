// ============================================================
// 战斗系统 API
// ============================================================

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import {
  createEnemy,
  initBattle,
  playerAction,
  calculatePlayerCombatStats,
} from "@/lib/combat-system";
import { deserializeBodyState } from "@/lib/body-system";
import type { BattleAction, BattleState } from "@/lib/combat-system";
import type { SpiritualRoot } from "@/lib/cultivation-data";

// 简化的战斗状态存储 (实际应该用 Redis 或数据库)
const activeBattles = new Map<string, BattleState>();

// ============================================================
// GET - 获取战斗状态
// ============================================================
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");

  if (!userId) {
    return NextResponse.json({ error: "缺少 userId" }, { status: 400 });
  }

  const battle = activeBattles.get(userId);
  if (!battle) {
    return NextResponse.json({ battle: null, message: "当前无战斗" });
  }

  return NextResponse.json({ battle });
}

// ============================================================
// POST - 战斗操作
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
      include: {
        cultivator: {
          include: {
            equipment: { where: { isEquipped: true } },
            pets: { where: { isSummoned: true } },
          },
        },
      },
    });

    if (!user?.cultivator) {
      return NextResponse.json({ error: "修仙者不存在" }, { status: 404 });
    }

    const cultivator = user.cultivator;

    // 开始新战斗
    if (action === "start") {
      const enemyLevel = body.enemyLevel || cultivator.realmLevel + cultivator.realm.indexOf("期") * 3;
      const enemy = createEnemy(enemyLevel);

      const bodyState = deserializeBodyState(
        cultivator.bodyState ? JSON.parse(cultivator.bodyState) : null
      );

      const playerStats = calculatePlayerCombatStats({
        realmIndex: 0, // 简化
        realmLevel: cultivator.realmLevel,
        spiritualRoot: cultivator.spiritualRoot as SpiritualRoot,
        bodyState,
        equipment: cultivator.equipment as any[],
        pet: cultivator.pets[0] as any || null,
      });

      const battle = initBattle(enemy, playerStats);
      activeBattles.set(userId, battle);

      return NextResponse.json({
        battle,
        enemy,
        playerStats,
        message: `遭遇 ${enemy.name}！战斗开始！`,
      });
    }

    // 执行战斗动作
    if (action === "action") {
      const battle = activeBattles.get(userId);
      if (!battle || !battle.isRunning) {
        return NextResponse.json({ error: "当前无战斗" }, { status: 400 });
      }

      const playerActionType = body.playerAction as BattleAction;
      const mpCost = body.mpCost || 0;

      // 获取敌人信息 (从战斗中重建)
      const bodyState = deserializeBodyState(
        cultivator.bodyState ? JSON.parse(cultivator.bodyState) : null
      );

      const playerStats = calculatePlayerCombatStats({
        realmIndex: 0,
        realmLevel: cultivator.realmLevel,
        spiritualRoot: cultivator.spiritualRoot as SpiritualRoot,
        bodyState,
        equipment: cultivator.equipment as any[],
        pet: cultivator.pets[0] as any || null,
      });

      // 简化：使用固定敌人属性
      const enemy = {
        id: "enemy",
        name: "妖兽",
        type: "beast" as const,
        level: cultivator.realmLevel,
        hp: battle.enemyHp,
        maxHp: battle.enemyMaxHp,
        attack: 20 + cultivator.realmLevel * 5,
        defense: 10 + cultivator.realmLevel * 3,
        speed: 8 + cultivator.realmLevel * 2,
        skill: "猛击",
        skillDamage: 30 + cultivator.realmLevel * 8,
        drops: [],
        description: "",
        icon: "🐒",
      };

      const result = playerAction(
        battle,
        enemy,
        playerActionType,
        playerStats.attack,
        playerStats.defense,
        playerStats.speed,
        mpCost
      );

      activeBattles.set(userId, result.battle);

      // 战斗结束处理
      if (result.battle.result) {
        if (result.battle.result === "victory") {
          // 胜利奖励
          const expReward = 20 + enemy.level * 10;
          await prisma.cultivator.update({
            where: { id: cultivator.id },
            data: {
              cultivationExp: { increment: expReward },
              totalExp: { increment: expReward },
            },
          });

          activeBattles.delete(userId);

          return NextResponse.json({
            battle: result.battle,
            reward: {
              exp: expReward,
              message: `战斗胜利！获得 ${expReward} 修炼值`,
            },
          });
        }

        if (result.battle.result === "defeat") {
          // 失败惩罚
          const expLoss = Math.floor(cultivator.cultivationExp * 0.2);
          await prisma.cultivator.update({
            where: { id: cultivator.id },
            data: {
              cultivationExp: { decrement: expLoss },
            },
          });

          activeBattles.delete(userId);

          return NextResponse.json({
            battle: result.battle,
            penalty: {
              expLoss,
              message: `战斗失败！损失 ${expLoss} 修炼值`,
            },
          });
        }

        if (result.battle.result === "flee") {
          activeBattles.delete(userId);
          return NextResponse.json({
            battle: result.battle,
            message: "成功逃脱！",
          });
        }
      }

      return NextResponse.json({
        battle: result.battle,
      });
    }

    // 结束战斗
    if (action === "end") {
      activeBattles.delete(userId);
      return NextResponse.json({ message: "战斗结束" });
    }

    return NextResponse.json({ error: "无效的操作" }, { status: 400 });
  } catch (error) {
    console.error("战斗系统操作失败:", error);
    return NextResponse.json({ error: "操作失败" }, { status: 500 });
  }
}
