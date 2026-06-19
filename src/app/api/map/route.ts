// ============================================================
// 地图/秘境探索 API
// ============================================================

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import {
  generateMap,
  movePlayer,
  handleNodeEvent,
  serializeMap,
  deserializeMap,
} from "@/lib/map-system";
import type { MapState } from "@/lib/map-system";

// 简化的地图状态存储
const activeMaps = new Map<string, MapState>();

// ============================================================
// GET - 获取当前地图状态
// ============================================================
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");

  if (!userId) {
    return NextResponse.json({ error: "缺少 userId" }, { status: 400 });
  }

  const map = activeMaps.get(userId);
  if (!map) {
    return NextResponse.json({ map: null, message: "当前无探索" });
  }

  return NextResponse.json({ map });
}

// ============================================================
// POST - 地图操作
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

    const cultivator = user.cultivator;

    // 开始探索
    if (action === "start") {
      const level = body.level || cultivator.mapLevel;
      const map = generateMap(level);
      activeMaps.set(userId, map);

      return NextResponse.json({
        map,
        message: `进入 ${map.name}！探索开始！`,
      });
    }

    // 移动
    if (action === "move") {
      const map = activeMaps.get(userId);
      if (!map || !map.isExploring) {
        return NextResponse.json({ error: "当前无探索" }, { status: 400 });
      }

      const direction = body.direction as "up" | "down" | "left" | "right";
      const result = movePlayer(map, direction);

      if (!result.result) {
        return NextResponse.json({
          map: result.map,
          error: "无法移动到该位置",
        });
      }

      activeMaps.set(userId, result.map);

      // 处理节点事件
      const eventResult = handleNodeEvent(result.result, cultivator.mapLevel);

      // 到达传送门
      if (result.result.type === "portal") {
        // 增加地图层数
        await prisma.cultivator.update({
          where: { id: cultivator.id },
          data: {
            mapLevel: { increment: 1 },
          },
        });

        // 奖励
        const expReward = 50 + cultivator.mapLevel * 20;
        await prisma.cultivator.update({
          where: { id: cultivator.id },
          data: {
            cultivationExp: { increment: expReward },
            totalExp: { increment: expReward },
          },
        });

        activeMaps.delete(userId);

        return NextResponse.json({
          map: result.map,
          event: eventResult,
          reward: {
            exp: expReward,
            message: `到达下一层！获得 ${expReward} 修炼值`,
          },
        });
      }

      // 宝藏
      if (result.result.type === "treasure") {
        const expReward = 30 + cultivator.mapLevel * 10;
        await prisma.cultivator.update({
          where: { id: cultivator.id },
          data: {
            cultivationExp: { increment: expReward },
            totalExp: { increment: expReward },
          },
        });

        return NextResponse.json({
          map: result.map,
          event: eventResult,
          reward: {
            exp: expReward,
            message: `发现宝藏！获得 ${expReward} 修炼值`,
          },
        });
      }

      // 治疗
      if (result.result.type === "heal") {
        return NextResponse.json({
          map: result.map,
          event: eventResult,
          message: "调息恢复，伤势好转",
        });
      }

      // 战斗
      if (result.result.type === "combat" || result.result.type === "boss") {
        return NextResponse.json({
          map: result.map,
          event: eventResult,
          message: eventResult.description,
        });
      }

      return NextResponse.json({
        map: result.map,
        event: eventResult,
      });
    }

    // 结束探索
    if (action === "end") {
      activeMaps.delete(userId);
      return NextResponse.json({ message: "探索结束" });
    }

    return NextResponse.json({ error: "无效的操作" }, { status: 400 });
  } catch (error) {
    console.error("地图系统操作失败:", error);
    return NextResponse.json({ error: "操作失败" }, { status: 500 });
  }
}
