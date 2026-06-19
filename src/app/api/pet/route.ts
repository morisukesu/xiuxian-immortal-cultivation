// ============================================================
// 灵兽系统 API
// ============================================================

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import {
  createPet,
  addPetExp,
  increaseLoyalty,
  bondPet,
  toggleSummon,
  canEvolve,
  evolvePet,
  calculatePetPower,
  type Pet,
  type PetType,
  type PetAttribute,
  type PetQuality,
} from "@/lib/pet-system";

// 辅助函数：将 Prisma Pet 转换为 Pet 类型
function toPetType(prismaPet: any): Pet {
  return {
    ...prismaPet,
    type: prismaPet.type as PetType,
    attribute: prismaPet.attribute as PetAttribute,
    quality: prismaPet.quality as PetQuality,
  };
}

// ============================================================
// GET - 获取修仙者的灵兽列表
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
      include: { cultivator: { include: { pets: true } } },
    });

    if (!user?.cultivator) {
      return NextResponse.json({ error: "修仙者不存在" }, { status: 404 });
    }

    return NextResponse.json({
      pets: user.cultivator.pets,
      power: user.cultivator.pets.reduce((total, pet) => {
        return total + calculatePetPower({
          ...pet,
          id: pet.id,
          name: pet.name,
          type: pet.type as any,
          attribute: pet.attribute as any,
          quality: pet.quality as any,
          level: pet.level,
          exp: pet.exp,
          hp: pet.hp,
          maxHp: pet.maxHp,
          attack: pet.attack,
          defense: pet.defense,
          speed: pet.speed,
          loyalty: pet.loyalty,
          mastery: pet.mastery,
          isSummoned: pet.isSummoned,
          isBonded: pet.isBonded,
          description: pet.description,
          icon: pet.icon,
          skill: pet.skill,
          skillEffect: pet.skillEffect,
        });
      }, 0),
    });
  } catch (error) {
    console.error("获取灵兽失败:", error);
    return NextResponse.json({ error: "获取灵兽失败" }, { status: 500 });
  }
}

// ============================================================
// POST - 灵兽操作
// ============================================================
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { userId, action, petId } = body;

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

    // 捕捉灵兽
    if (action === "catch") {
      const pet = createPet(body.templateIndex);
      
      const saved = await prisma.pet.create({
        data: {
          ...pet,
          cultivatorId,
        },
      });

      return NextResponse.json({
        pet: saved,
        message: `成功捕捉 ${saved.name}！`,
      });
    }

    // 获取灵兽详情
    if (!petId) {
      return NextResponse.json({ error: "缺少 petId" }, { status: 400 });
    }

    const pet = await prisma.pet.findFirst({
      where: { id: petId, cultivatorId },
    });

    if (!pet) {
      return NextResponse.json({ error: "灵兽不存在" }, { status: 404 });
    }

    // 喂养灵兽
    if (action === "feed") {
      const expAmount = body.expAmount || 20;
      const loyaltyAmount = body.loyaltyAmount || 5;
      
      const petData: Pet = {
        ...pet,
        type: pet.type as PetType,
        attribute: pet.attribute as PetAttribute,
        quality: pet.quality as PetQuality,
      };
      
      const result = addPetExp(petData, expAmount);
      const updatedPet = increaseLoyalty(result.pet, loyaltyAmount);

      await prisma.pet.update({
        where: { id: petId },
        data: {
          level: updatedPet.level,
          exp: updatedPet.exp,
          hp: updatedPet.hp,
          maxHp: updatedPet.maxHp,
          attack: updatedPet.attack,
          defense: updatedPet.defense,
          speed: updatedPet.speed,
          loyalty: updatedPet.loyalty,
          mastery: updatedPet.mastery,
        },
      });

      return NextResponse.json({
        pet: updatedPet,
        levelUp: result.levelUp,
        message: result.levelUp
          ? `${updatedPet.name} 升至 ${updatedPet.level} 级！`
          : `喂养成功，获得 ${expAmount} 经验`,
      });
    }

    // 认主
    if (action === "bond") {
      if (pet.isBonded) {
        return NextResponse.json({ error: "已认主" }, { status: 400 });
      }

      const petData: Pet = {
        ...pet,
        type: pet.type as PetType,
        attribute: pet.attribute as PetAttribute,
        quality: pet.quality as PetQuality,
      };
      
      const updatedPet = bondPet(petData);

      await prisma.pet.update({
        where: { id: petId },
        data: {
          isBonded: true,
          loyalty: updatedPet.loyalty,
        },
      });

      return NextResponse.json({
        pet: updatedPet,
        message: `${updatedPet.name} 已认你为主！`,
      });
    }

    // 召唤/收回
    if (action === "toggleSummon") {
      if (!pet.isBonded) {
        return NextResponse.json({ error: "灵兽未认主，无法召唤" }, { status: 400 });
      }

      const updatedPet = toggleSummon(toPetType(pet));

      await prisma.pet.update({
        where: { id: petId },
        data: {
          isSummoned: updatedPet.isSummoned,
        },
      });

      return NextResponse.json({
        pet: updatedPet,
        message: updatedPet.isSummoned
          ? `${updatedPet.name} 已召唤出战！`
          : `${updatedPet.name} 已收回`,
      });
    }

    // 进化
    if (action === "evolve") {
      const evolution = canEvolve(toPetType(pet));
      if (!evolution) {
        return NextResponse.json({
          error: "灵兽未达到进化条件",
        }, { status: 400 });
      }

      const updatedPet = evolvePet(toPetType(pet), evolution);
      if (!updatedPet) {
        return NextResponse.json({ error: "进化失败" }, { status: 500 });
      }

      await prisma.pet.update({
        where: { id: petId },
        data: {
          name: updatedPet.name,
          type: updatedPet.type,
          attribute: updatedPet.attribute,
          quality: updatedPet.quality,
          level: updatedPet.level,
          hp: updatedPet.hp,
          maxHp: updatedPet.maxHp,
          attack: updatedPet.attack,
          defense: updatedPet.defense,
          speed: updatedPet.speed,
          description: updatedPet.description,
          icon: updatedPet.icon,
          skill: updatedPet.skill,
          skillEffect: updatedPet.skillEffect,
        },
      });

      return NextResponse.json({
        pet: updatedPet,
        evolution,
        message: `${evolution.from} → ${evolution.to}！灵兽进化成功！`,
      });
    }

    return NextResponse.json({ error: "无效的操作" }, { status: 400 });
  } catch (error) {
    console.error("灵兽操作失败:", error);
    return NextResponse.json({ error: "操作失败" }, { status: 500 });
  }
}

// ============================================================
// DELETE - 放生灵兽
// ============================================================
export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const petId = searchParams.get("petId");
    const userId = searchParams.get("userId");

    if (!petId || !userId) {
      return NextResponse.json({ error: "缺少参数" }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: { cultivator: true },
    });

    if (!user?.cultivator) {
      return NextResponse.json({ error: "修仙者不存在" }, { status: 404 });
    }

    const pet = await prisma.pet.findFirst({
      where: { id: petId, cultivatorId: user.cultivator.id },
    });

    if (!pet) {
      return NextResponse.json({ error: "灵兽不存在" }, { status: 404 });
    }

    await prisma.pet.delete({ where: { id: petId } });

    return NextResponse.json({
      message: `${pet.name} 已放生，回归自然`,
    });
  } catch (error) {
    console.error("放生灵兽失败:", error);
    return NextResponse.json({ error: "放生失败" }, { status: 500 });
  }
}
