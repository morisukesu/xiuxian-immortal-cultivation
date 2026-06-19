// ============================================================
// 装备系统 API
// ============================================================

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { generateRandomEquipment, levelUpEquipment, getLevelUpExp } from "@/lib/equipment-system";
import type { Equipment } from "@/lib/equipment-system";

// ============================================================
// GET - 获取修仙者的装备列表
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
      include: { cultivator: { include: { equipment: true } } },
    });

    if (!user?.cultivator) {
      return NextResponse.json({ error: "修仙者不存在" }, { status: 404 });
    }

    return NextResponse.json({
      equipment: user.cultivator.equipment,
    });
  } catch (error) {
    console.error("获取装备失败:", error);
    return NextResponse.json({ error: "获取装备失败" }, { status: 500 });
  }
}

// ============================================================
// POST - 抽取/强化装备
// ============================================================
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { userId, action, equipmentId } = body;

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

    // 抽取装备
    if (action === "draw") {
      const equipment = generateRandomEquipment();
      
      const saved = await prisma.equipment.create({
        data: {
          ...equipment,
          baseStats: JSON.stringify(equipment.baseStats),
          affixes: JSON.stringify(equipment.affixes),
          cultivatorId,
        },
      });

      return NextResponse.json({
        equipment: {
          ...saved,
          baseStats: JSON.parse(saved.baseStats as string),
          affixes: JSON.parse(saved.affixes as string),
        },
      });
    }

    // 强化装备
    if (action === "upgrade") {
      if (!equipmentId) {
        return NextResponse.json({ error: "缺少 equipmentId" }, { status: 400 });
      }

      const equipment = await prisma.equipment.findFirst({
        where: { id: equipmentId, cultivatorId },
      });

      if (!equipment) {
        return NextResponse.json({ error: "装备不存在" }, { status: 404 });
      }

      // 消耗经验升级
      const requiredExp = getLevelUpExp(equipment.level);
      if (user.cultivator.totalExp < requiredExp) {
        return NextResponse.json(
          { error: `修炼值不足，需要 ${requiredExp} 修炼值` },
          { status: 400 }
        );
      }

      const parsedEquipment = {
        ...equipment,
        baseStats: JSON.parse(equipment.baseStats as string),
        affixes: JSON.parse(equipment.affixes as string),
      } as unknown as Equipment;

      const upgraded = levelUpEquipment(parsedEquipment);

      // 扣除修炼值
      await prisma.cultivator.update({
        where: { id: cultivatorId },
        data: {
          totalExp: { decrement: requiredExp },
        },
      });

      // 更新装备
      const updated = await prisma.equipment.update({
        where: { id: equipmentId },
        data: {
          level: upgraded.level,
          exp: upgraded.exp,
          baseStats: JSON.stringify(upgraded.baseStats),
          affixes: JSON.stringify(upgraded.affixes),
        },
      });

      return NextResponse.json({
        equipment: {
          ...updated,
          baseStats: JSON.parse(updated.baseStats as string),
          affixes: JSON.parse(updated.affixes as string),
        },
        expGained: -requiredExp,
      });
    }

    // 装备/卸下装备
    if (action === "equip" || action === "unequip") {
      if (!equipmentId) {
        return NextResponse.json({ error: "缺少 equipmentId" }, { status: 400 });
      }

      const equipment = await prisma.equipment.findFirst({
        where: { id: equipmentId, cultivatorId },
      });

      if (!equipment) {
        return NextResponse.json({ error: "装备不存在" }, { status: 404 });
      }

      // 卸下该槽位的所有装备
      await prisma.equipment.updateMany({
        where: { cultivatorId, slot: equipment.slot },
        data: { isEquipped: false },
      });

      if (action === "equip") {
        await prisma.equipment.update({
          where: { id: equipmentId },
          data: { isEquipped: true },
        });
      }

      return NextResponse.json({ success: true, action });
    }

    return NextResponse.json({ error: "无效的操作" }, { status: 400 });
  } catch (error) {
    console.error("装备操作失败:", error);
    return NextResponse.json({ error: "操作失败" }, { status: 500 });
  }
}

// ============================================================
// DELETE - 分解装备 (获取修炼值)
// ============================================================
export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const equipmentId = searchParams.get("equipmentId");
    const userId = searchParams.get("userId");

    if (!equipmentId || !userId) {
      return NextResponse.json({ error: "缺少参数" }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: { cultivator: true },
    });

    if (!user?.cultivator) {
      return NextResponse.json({ error: "修仙者不存在" }, { status: 404 });
    }

    const equipment = await prisma.equipment.findFirst({
      where: { id: equipmentId, cultivatorId: user.cultivator.id },
    });

    if (!equipment) {
      return NextResponse.json({ error: "装备不存在" }, { status: 404 });
    }

    // 根据品质给予分解奖励
    const qualityBonus = {
      common: 10,
      uncommon: 25,
      rare: 50,
      epic: 100,
      legendary: 200,
    }[equipment.quality] || 10;

    const reward = qualityBonus * equipment.level;

    // 删除装备并奖励修炼值
    await prisma.equipment.delete({ where: { id: equipmentId } });
    await prisma.cultivator.update({
      where: { id: user.cultivator.id },
      data: {
        cultivationExp: { increment: reward },
        totalExp: { increment: reward },
      },
    });

    return NextResponse.json({
      reward,
      message: `分解 ${equipment.name}，获得 ${reward} 修炼值`,
    });
  } catch (error) {
    console.error("分解装备失败:", error);
    return NextResponse.json({ error: "分解失败" }, { status: 500 });
  }
}
