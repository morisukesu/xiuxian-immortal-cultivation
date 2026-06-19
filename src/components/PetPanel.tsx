"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PawPrint, Flame, Droplets, Mountain, Wind, Zap, Snowflake, Moon, Sun } from "lucide-react";

interface Pet {
  id: string;
  name: string;
  type: string;
  attribute: string;
  quality: string;
  level: number;
  exp: number;
  hp: number;
  maxHp: number;
  attack: number;
  defense: number;
  speed: number;
  loyalty: number;
  mastery: number;
  isSummoned: boolean;
  isBonded: boolean;
  description: string;
  icon: string;
  skill: string;
  skillEffect: string;
}

interface PetPanelProps {
  userId: string;
}

const attributeIcons: Record<string, React.ReactNode> = {
  fire: <Flame className="w-5 h-5" />,
  water: <Droplets className="w-5 h-5" />,
  earth: <Mountain className="w-5 h-5" />,
  wind: <Wind className="w-5 h-5" />,
  lightning: <Zap className="w-5 h-5" />,
  ice: <Snowflake className="w-5 h-5" />,
  dark: <Moon className="w-5 h-5" />,
  light: <Sun className="w-5 h-5" />,
};

const attributeColors: Record<string, string> = {
  fire: "text-orange-400",
  water: "text-blue-400",
  earth: "text-amber-700",
  wind: "text-emerald-400",
  lightning: "text-purple-400",
  ice: "text-cyan-400",
  dark: "text-stone-500",
  light: "text-yellow-400",
};

const qualityNames: Record<string, string> = {
  common: "凡阶",
  uncommon: "灵阶",
  rare: "王阶",
  epic: "皇阶",
  legendary: "圣阶",
};

const qualityColors: Record<string, string> = {
  common: "text-stone-400",
  uncommon: "text-emerald-400",
  rare: "text-blue-400",
  epic: "text-purple-400",
  legendary: "text-amber-400",
};

export default function PetPanel({ userId }: PetPanelProps) {
  const [pets, setPets] = useState<Pet[]>([]);
  const [selectedPet, setSelectedPet] = useState<Pet | null>(null);
  const [catching, setCatching] = useState(false);
  const [feeding, setFeeding] = useState(false);
  const [bonding, setBonding] = useState(false);
  const [summoning, setSummoning] = useState(false);
  const [evolving, setEvolving] = useState(false);

  // 获取灵兽列表
  useEffect(() => {
    const fetchPets = async () => {
      try {
        const res = await fetch(`/api/pet?userId=${userId}`);
        if (res.ok) {
          const data = await res.json();
          setPets(data.pets || []);
        }
      } catch (error) {
        console.error("获取灵兽列表失败:", error);
      }
    };

    if (userId) {
      fetchPets();
    }
  }, [userId]);

  // 捕捉灵兽
  const catchPet = async () => {
    setCatching(true);
    try {
      const res = await fetch("/api/pet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "catch", userId }),
      });
      if (res.ok) {
        const data = await res.json();
        setPets(prev => [...prev, data.pet]);
      }
    } catch (error) {
      console.error("捕捉灵兽失败:", error);
    } finally {
      setCatching(false);
    }
  };

  // 喂养灵兽
  const feedPet = async (petId: string) => {
    setFeeding(true);
    try {
      const res = await fetch("/api/pet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "feed", userId, petId }),
      });
      if (res.ok) {
        const data = await res.json();
        setPets(prev => prev.map(p => (p.id === petId ? data.pet : p)));
      }
    } catch (error) {
      console.error("喂养失败:", error);
    } finally {
      setFeeding(false);
    }
  };

  // 缔结契约
  const bondPet = async (petId: string) => {
    setBonding(true);
    try {
      const res = await fetch("/api/pet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "bond", userId, petId }),
      });
      if (res.ok) {
        setPets(prev => prev.map(p => (p.id === petId ? { ...p, isBonded: true } : p)));
      }
    } catch (error) {
      console.error("缔结契约失败:", error);
    } finally {
      setBonding(false);
    }
  };

  // 召唤/收回
  const toggleSummon = async (petId: string) => {
    setSummoning(true);
    try {
      const res = await fetch("/api/pet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "toggleSummon", userId, petId }),
      });
      if (res.ok) {
        setPets(prev => prev.map(p => (p.id === petId ? { ...p, isSummoned: !p.isSummoned } : p)));
      }
    } catch (error) {
      console.error("召唤失败:", error);
    } finally {
      setSummoning(false);
    }
  };

  // 进化
  const evolvePet = async (petId: string) => {
    setEvolving(true);
    try {
      const res = await fetch("/api/pet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "evolve", userId, petId }),
      });
      if (res.ok) {
        const data = await res.json();
        setPets(prev => prev.map(p => (p.id === petId ? data.pet : p)));
      }
    } catch (error) {
      console.error("进化失败:", error);
    } finally {
      setEvolving(false);
    }
  };

  const summoned = pets.filter(p => p.isSummoned);
  const bonded = pets.filter(p => p.isBonded);

  return (
    <div className="space-y-4">
      {/* 灵兽捕捉 */}
      <Card className="bg-stone-900/50 border-stone-700/50">
        <CardContent className="pt-6">
          <div className="text-center space-y-3">
            <div className="text-4xl">🐉</div>
            <p className="text-stone-400 text-sm">
              捕捉天地灵兽，助你修仙之路
            </p>
            <Button
              onClick={catchPet}
              disabled={catching}
              className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500"
            >
              <PawPrint className="w-4 h-4 mr-2" />
              {catching ? "捕捉中..." : "寻找灵兽"}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* 召唤中的灵兽 */}
      {summoned.length > 0 && (
        <Card className="bg-stone-900/50 border-amber-600/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg text-amber-400">
              已召唤灵兽 ({summoned.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {summoned.map(pet => (
                <div
                  key={pet.id}
                  className={`p-4 rounded-lg border ${qualityColors[pet.quality].replace("text-", "border-").replace("400", "600/50")} bg-stone-800/50`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-3xl">{pet.icon || "🐾"}</div>
                    <div className="flex-1">
                      <div className={`text-sm font-bold ${qualityColors[pet.quality]}`}>
                        {pet.name}
                      </div>
                      <div className="text-xs text-stone-500">
                        Lv.{pet.level} · {qualityNames[pet.quality]}
                      </div>
                    </div>
                  </div>

                  {/* 属性条 */}
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-stone-400">HP</span>
                        <span className="text-red-400">{pet.hp}/{pet.maxHp}</span>
                      </div>
                      <div className="h-2 bg-stone-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-red-500 rounded-full transition-all"
                          style={{ width: `${(pet.hp / pet.maxHp) * 100}%` }}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="text-center">
                        <div className="text-xs text-stone-500">攻击</div>
                        <div className="text-sm font-bold text-orange-400">{pet.attack}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-stone-500">防御</div>
                        <div className="text-sm font-bold text-blue-400">{pet.defense}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-stone-500">速度</div>
                        <div className="text-sm font-bold text-emerald-400">{pet.speed}</div>
                      </div>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full mt-3 border-red-600 text-red-400 hover:bg-red-900/30"
                    onClick={() => toggleSummon(pet.id)}
                    disabled={summoning}
                  >
                    收回
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* 灵兽列表 */}
      <Card className="bg-stone-900/50 border-stone-700/50">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg text-amber-400 flex items-center gap-2">
            <PawPrint className="w-5 h-5" />
            灵兽园 ({pets.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          {pets.length === 0 ? (
            <div className="text-center py-8 text-stone-500">
              <PawPrint className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p>灵兽园空空如也</p>
              <p className="text-sm mt-1">去捕捉灵兽吧！</p>
            </div>
          ) : (
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {pets.map(pet => (
                <div
                  key={pet.id}
                  className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all ${
                    selectedPet?.id === pet.id
                      ? "bg-stone-700/50 border border-amber-600/50"
                      : "bg-stone-800/30 hover:bg-stone-800/50"
                  }`}
                  onClick={() => setSelectedPet(pet)}
                >
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{pet.icon || "🐾"}</div>
                    <div>
                      <div className={`text-sm font-medium ${qualityColors[pet.quality]}`}>
                        {pet.name}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-stone-500">
                        <span className={attributeColors[pet.attribute]}>
                          {attributeIcons[pet.attribute as keyof typeof attributeIcons]}
                        </span>
                        <span>{qualityNames[pet.quality]}</span>
                        <span>Lv.{pet.level}</span>
                        {pet.isSummoned && (
                          <span className="text-amber-400">⚡ 已召唤</span>
                        )}
                        {pet.isBonded && (
                          <span className="text-purple-400">💫 已契约</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {!pet.isSummoned && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-xs"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (!pet.isBonded) {
                            bondPet(pet.id);
                          } else {
                            toggleSummon(pet.id);
                          }
                        }}
                        disabled={bonding || summoning}
                      >
                        {!pet.isBonded ? "契约" : "召唤"}
                      </Button>
                    )}
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-xs border-blue-600 text-blue-400"
                      onClick={(e) => {
                        e.stopPropagation();
                        feedPet(pet.id);
                      }}
                      disabled={feeding}
                    >
                      喂养
                    </Button>
                    {pet.level >= 10 && !pet.isBonded && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-xs border-purple-600 text-purple-400"
                        onClick={(e) => {
                          e.stopPropagation();
                          evolvePet(pet.id);
                        }}
                        disabled={evolving}
                      >
                        进化
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* 灵兽详情 */}
      {selectedPet && (
        <Card className="bg-stone-900/50 border-stone-700/50">
          <CardHeader className="pb-2">
            <CardTitle className={`text-lg flex items-center gap-2 ${qualityColors[selectedPet.quality]}`}>
              <span className="text-2xl">{selectedPet.icon || "🐾"}</span>
              {selectedPet.name}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* 基本信息 */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-stone-800/50 rounded-lg p-3">
                  <div className="text-stone-400 text-xs mb-1">品质</div>
                  <div className={`text-lg font-bold ${qualityColors[selectedPet.quality]}`}>
                    {qualityNames[selectedPet.quality]}
                  </div>
                </div>
                <div className="bg-stone-800/50 rounded-lg p-3">
                  <div className="text-stone-400 text-xs mb-1">等级</div>
                  <div className="text-lg font-bold text-amber-400">
                    Lv.{selectedPet.level}
                  </div>
                </div>
              </div>

              {/* 属性 */}
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-stone-800/50 rounded-lg p-2 text-center">
                  <div className="text-xs text-stone-500">攻击</div>
                  <div className="text-lg font-bold text-orange-400">{selectedPet.attack}</div>
                </div>
                <div className="bg-stone-800/50 rounded-lg p-2 text-center">
                  <div className="text-xs text-stone-500">防御</div>
                  <div className="text-lg font-bold text-blue-400">{selectedPet.defense}</div>
                </div>
                <div className="bg-stone-800/50 rounded-lg p-2 text-center">
                  <div className="text-xs text-stone-500">速度</div>
                  <div className="text-lg font-bold text-emerald-400">{selectedPet.speed}</div>
                </div>
              </div>

              {/* 忠诚度 */}
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-stone-400">忠诚度</span>
                  <span className="text-purple-400">{selectedPet.loyalty}/100</span>
                </div>
                <div className="h-2 bg-stone-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-purple-500 rounded-full transition-all"
                    style={{ width: `${selectedPet.loyalty}%` }}
                  />
                </div>
              </div>

              {/* 精通度 */}
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-stone-400">精通度</span>
                  <span className="text-amber-400">{selectedPet.mastery}/100</span>
                </div>
                <div className="h-2 bg-stone-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-amber-500 rounded-full transition-all"
                    style={{ width: `${selectedPet.mastery}%` }}
                  />
                </div>
              </div>

              {/* 技能 */}
              {selectedPet.skill && (
                <div className="bg-stone-800/50 rounded-lg p-3">
                  <div className="text-sm font-medium text-amber-400 mb-1">
                    技能：{selectedPet.skill}
                  </div>
                  <div className="text-xs text-stone-400">{selectedPet.skillEffect}</div>
                </div>
              )}

              {/* 描述 */}
              <div className="bg-stone-800/30 rounded-lg p-3">
                <p className="text-xs text-stone-400 italic">
                  {selectedPet.description}
                </p>
              </div>

              {/* 操作按钮 */}
              <div className="flex gap-2">
                {!selectedPet.isBonded && (
                  <Button
                    className="flex-1 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400"
                    onClick={() => bondPet(selectedPet.id)}
                    disabled={bonding}
                  >
                    缔结契约
                  </Button>
                )}
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => toggleSummon(selectedPet.id)}
                  disabled={summoning}
                >
                  {selectedPet.isSummoned ? "收回" : "召唤"}
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-blue-600 text-blue-400 hover:bg-blue-900/30"
                  onClick={() => feedPet(selectedPet.id)}
                  disabled={feeding}
                >
                  喂养
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
