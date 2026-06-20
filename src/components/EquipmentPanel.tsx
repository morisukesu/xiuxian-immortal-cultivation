"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Sword, Gem, Zap, Sparkles, ArrowUpRight } from "lucide-react";

interface Equipment {
  id: string;
  name: string;
  type: string;
  slot: string;
  quality: string;
  baseStats: string;
  affixes: string;
  level: number;
  exp: number;
  description: string;
  icon: string;
  isEquipped: boolean;
}

interface EquipmentPanelProps {
  userId: string;
}

const slotNames: Record<string, string> = {
  head: "头部",
  neck: "颈部",
  body: "身体",
  leftHand: "左手",
  rightHand: "右手",
  ring1: "戒指 1",
  ring2: "戒指 2",
  belt: "腰带",
  boots: "靴子",
  weapon: "武器",
};

const qualityColors: Record<string, string> = {
  common: "text-stone-400",
  uncommon: "text-emerald-400",
  rare: "text-blue-400",
  epic: "text-purple-400",
  legendary: "text-amber-400",
};

const qualityNames: Record<string, string> = {
  common: "凡品",
  uncommon: "良品",
  rare: "珍品",
  epic: "极品",
  legendary: "仙品",
};

const typeIcons: Record<string, React.ReactNode> = {
  armor: <Shield className="w-5 h-5" />,
  weapon: <Sword className="w-5 h-5" />,
  accessory: <Gem className="w-5 h-5" />,
  artifact: <Zap className="w-5 h-5" />,
};

export default function EquipmentPanel({ userId }: EquipmentPanelProps) {
  const [equipments, setEquipments] = useState<Equipment[]>([]);
  const [selectedEquipment, setSelectedEquipment] = useState<Equipment | null>(null);
  const [drawing, setDrawing] = useState(false);
  const [equipping, setEquipping] = useState(false);
  const [upgrading, setUpgrading] = useState(false);
  const [activeTab, setActiveTab] = useState<"equipped" | "inventory">("inventory");

  // 获取装备列表
  useEffect(() => {
    const fetchEquipments = async () => {
      try {
        const res = await fetch(`/api/equipment?userId=${userId}`);
        if (res.ok) {
          const data = await res.json();
          setEquipments(data.equipments || []);
        }
      } catch (error) {
        console.error("获取装备列表失败:", error);
      }
    };

    if (userId) {
      fetchEquipments();
    }
  }, [userId]);

  // 抽取装备
  const drawEquipment = async () => {
    setDrawing(true);
    try {
      const res = await fetch("/api/equipment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "draw", userId }),
      });
      if (res.ok) {
        const data = await res.json();
        setEquipments(prev => [...prev, data.equipment]);
      }
    } catch (error) {
      console.error("抽取装备失败:", error);
    } finally {
      setDrawing(false);
    }
  };

  // 装备/卸下
  const toggleEquip = async (equipmentId: string) => {
    setEquipping(true);
    try {
      const res = await fetch("/api/equipment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "equip", userId, equipmentId }),
      });
      if (res.ok) {
        setEquipments(prev =>
          prev.map(eq =>
            eq.id === equipmentId ? { ...eq, isEquipped: !eq.isEquipped } : eq
          )
        );
      }
    } catch (error) {
      console.error("装备失败:", error);
    } finally {
      setEquipping(false);
    }
  };

  // 强化装备
  const upgradeEquipment = async (equipmentId: string) => {
    setUpgrading(true);
    try {
      const res = await fetch("/api/equipment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "upgrade", userId, equipmentId }),
      });
      if (res.ok) {
        const data = await res.json();
        setEquipments(prev =>
          prev.map(eq => (eq.id === equipmentId ? data.equipment : eq))
        );
      }
    } catch (error) {
      console.error("强化失败:", error);
    } finally {
      setUpgrading(false);
    }
  };

  // 分解装备
  const dismantleEquipment = async (equipmentId: string) => {
    try {
      const res = await fetch(`/api/equipment?equipmentId=${equipmentId}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setEquipments(prev => prev.filter(eq => eq.id !== equipmentId));
      }
    } catch (error) {
      console.error("分解失败:", error);
    }
  };

  const equipped = equipments.filter(eq => eq.isEquipped);
  const inventory = equipments.filter(eq => !eq.isEquipped);

  return (
    <div className="space-y-4">
      {/* 装备抽取 */}
      <Card className="bg-stone-900/50 border-stone-700/50">
        <CardContent className="pt-6">
          <div className="text-center space-y-3">
            <div className="text-4xl">⚔️</div>
            <p className="text-stone-400 text-sm">
              寻找天地灵宝，强化自身战力
            </p>
            <Button
              onClick={drawEquipment}
              disabled={drawing}
              className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              {drawing ? "探寻中..." : "探寻灵宝"}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Tab 切换 */}
      <div className="flex gap-2">
        <Button
          variant={activeTab === "equipped" ? "default" : "outline"}
          className={activeTab === "equipped" ? "bg-amber-600" : ""}
          onClick={() => setActiveTab("equipped")}
        >
          已装备 ({equipped.length})
        </Button>
        <Button
          variant={activeTab === "inventory" ? "default" : "outline"}
          className={activeTab === "inventory" ? "bg-amber-600" : ""}
          onClick={() => setActiveTab("inventory")}
        >
          背包 ({inventory.length})
        </Button>
      </div>

      {/* 装备槽位 - 已装备 */}
      {activeTab === "equipped" && (
        <Card className="bg-stone-900/50 border-stone-700/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg text-amber-400 flex items-center gap-2">
              <Shield className="w-5 h-5" />
              装备槽位
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-5 gap-3 max-w-sm mx-auto">
              {/* 头部 */}
              <EquipmentSlot slot="head" equipment={equipped.find(eq => eq.slot === "head")} />
              {/* 颈部 */}
              <EquipmentSlot slot="neck" equipment={equipped.find(eq => eq.slot === "neck")} />
              {/* 身体 */}
              <EquipmentSlot slot="body" equipment={equipped.find(eq => eq.slot === "body")} />
              {/* 武器 */}
              <div className="col-start-2 col-span-3">
                <EquipmentSlot slot="weapon" equipment={equipped.find(eq => eq.slot === "weapon")} />
              </div>
              {/* 左手 */}
              <EquipmentSlot slot="leftHand" equipment={equipped.find(eq => eq.slot === "leftHand")} />
              {/* 右手 */}
              <EquipmentSlot slot="rightHand" equipment={equipped.find(eq => eq.slot === "rightHand")} />
              {/* 戒指 */}
              <EquipmentSlot slot="ring1" equipment={equipped.find(eq => eq.slot === "ring1")} />
              <EquipmentSlot slot="ring2" equipment={equipped.find(eq => eq.slot === "ring2")} />
              {/* 腰带 */}
              <EquipmentSlot slot="belt" equipment={equipped.find(eq => eq.slot === "belt")} />
              {/* 靴子 */}
              <EquipmentSlot slot="boots" equipment={equipped.find(eq => eq.slot === "boots")} />
            </div>
          </CardContent>
        </Card>
      )}

      {/* 背包 - 装备列表 */}
      {activeTab === "inventory" && (
        <Card className="bg-stone-900/50 border-stone-700/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg text-amber-400">
              装备背包
            </CardTitle>
          </CardHeader>
          <CardContent>
            {inventory.length === 0 ? (
              <div className="text-center py-8 text-stone-500">
                <Sword className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p>背包空空如也</p>
                <p className="text-sm">去探寻灵宝吧！</p>
              </div>
            ) : (
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {inventory.map(eq => (
                  <div
                    key={eq.id}
                    className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all ${
                      selectedEquipment?.id === eq.id
                        ? "bg-stone-700/50 border border-amber-600/50"
                        : "bg-stone-800/30 hover:bg-stone-800/50"
                    }`}
                    onClick={() => setSelectedEquipment(eq)}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`text-xl ${qualityColors[eq.quality]}`}>
                        {typeIcons[eq.type]}
                      </div>
                      <div>
                        <div className={`text-sm font-medium ${qualityColors[eq.quality]}`}>
                          {eq.name}
                        </div>
                        <div className="text-xs text-stone-500">
                          {qualityNames[eq.quality]} · {slotNames[eq.slot]} · Lv.{eq.level}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-xs"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleEquip(eq.id);
                        }}
                      >
                        装备
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-xs border-blue-600 text-blue-400"
                        onClick={(e) => {
                          e.stopPropagation();
                          upgradeEquipment(eq.id);
                        }}
                      >
                        强化
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* 装备详情 */}
      {selectedEquipment && (
        <Card className="bg-stone-900/50 border-stone-700/50">
          <CardHeader className="pb-2">
            <CardTitle className={`text-lg flex items-center gap-2 ${qualityColors[selectedEquipment.quality]}`}>
              {typeIcons[selectedEquipment.type]}
              {selectedEquipment.name}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* 基本信息 */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-stone-800/50 rounded-lg p-3">
                  <div className="text-stone-400 text-xs mb-1">品质</div>
                  <div className={`text-lg font-bold ${qualityColors[selectedEquipment.quality]}`}>
                    {qualityNames[selectedEquipment.quality]}
                  </div>
                </div>
                <div className="bg-stone-800/50 rounded-lg p-3">
                  <div className="text-stone-400 text-xs mb-1">等级</div>
                  <div className="text-lg font-bold text-amber-400">
                    Lv.{selectedEquipment.level}
                  </div>
                </div>
              </div>

              {/* 基础属性 */}
              <div>
                <h3 className="text-sm font-medium text-stone-300 mb-2">基础属性</h3>
                <div className="grid grid-cols-3 gap-2">
                  {(() => {
                    try {
                      const stats = JSON.parse(selectedEquipment.baseStats);
                      return Object.entries(stats).map(([key, value]) => (
                        <div key={key} className="bg-stone-800/50 rounded-lg p-2 text-center">
                          <div className="text-xs text-stone-500">{key}</div>
                          <div className="text-sm font-bold text-emerald-400">{value as string}</div>
                        </div>
                      ));
                    } catch {
                      return null;
                    }
                  })()}
                </div>
              </div>

              {/* 附加词条 */}
              <div>
                <h3 className="text-sm font-medium text-stone-300 mb-2">附加词条</h3>
                <div className="space-y-1">
                  {(() => {
                    try {
                      const affixes = JSON.parse(selectedEquipment.affixes);
                      return (affixes as Array<{name: string; value: string}>)?.map((affix, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs">
                          <ArrowUpRight className="w-3 h-3 text-purple-400" />
                          <span className="text-purple-300">{affix.name}</span>
                          <span className="text-emerald-400">{affix.value}</span>
                        </div>
                      ));
                    } catch {
                      return <span className="text-stone-500 text-xs">无附加词条</span>;
                    }
                  })()}
                </div>
              </div>

              {/* 描述 */}
              <div className="bg-stone-800/30 rounded-lg p-3">
                <p className="text-xs text-stone-400 italic">
                  {selectedEquipment.description}
                </p>
              </div>

              {/* 操作按钮 */}
              <div className="flex gap-2">
                {!selectedEquipment.isEquipped && (
                  <Button
                    className="flex-1 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500"
                    onClick={() => toggleEquip(selectedEquipment.id)}
                    disabled={equipping}
                  >
                    装备
                  </Button>
                )}
                <Button
                  variant="outline"
                  className="flex-1 border-blue-600 text-blue-400 hover:bg-blue-900/30"
                  onClick={() => upgradeEquipment(selectedEquipment.id)}
                  disabled={upgrading}
                >
                  强化
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-red-600 text-red-400 hover:bg-red-900/30"
                  onClick={() => dismantleEquipment(selectedEquipment.id)}
                >
                  分解
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

// 装备槽位组件
function EquipmentSlot({ slot, equipment }: { slot: string; equipment?: Equipment }) {
  return (
    <div className="aspect-square rounded-lg border-2 border-dashed border-stone-700 bg-stone-800/20 flex flex-col items-center justify-center p-2 text-center">
      {equipment ? (
        <>
          <div className="text-2xl mb-1">
            {slot === "head" && "🎩"}
            {slot === "neck" && "📿"}
            {slot === "body" && "👘"}
            {slot === "weapon" && "⚔️"}
            {slot === "leftHand" && "🛡️"}
            {slot === "rightHand" && "💍"}
            {slot === "ring1" || slot === "ring2" && "💍"}
            {slot === "belt" && "🎀"}
            {slot === "boots" && "👢"}
          </div>
          <div className={`text-xs ${qualityColors[equipment.quality]} truncate w-full`}>
            {equipment.name}
          </div>
          <div className="text-xs text-stone-500">Lv.{equipment.level}</div>
        </>
      ) : (
        <>
          <div className="text-stone-600 text-xs">{slotNames[slot]}</div>
          <div className="text-stone-700 text-xs mt-1">空</div>
        </>
      )}
    </div>
  );
}
