"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Activity, Zap, Shield } from "lucide-react";

interface BodyPart {
  id: string;
  name: string;
  hp: number;
  maxHp: number;
  status: "healthy" | "injured" | "damaged" | "numb";
  position: { x: number; y: number };
}

interface Meridian {
  id: string;
  name: string;
  opened: boolean;
  type: "regular" | "ren" | "du";
}

interface Acupoint {
  id: string;
  name: string;
  activated: boolean;
  meridianId: string;
  position: { x: number; y: number };
}

interface BodyMeridianDiagramProps {
  userId: string;
}

// 默认身体部位数据
const defaultBodyParts: BodyPart[] = [
  { id: "head", name: "头部", hp: 100, maxHp: 100, status: "healthy", position: { x: 150, y: 40 } },
  { id: "chest", name: "胸部", hp: 120, maxHp: 120, status: "healthy", position: { x: 150, y: 100 } },
  { id: "abdomen", name: "腹部", hp: 120, maxHp: 120, status: "healthy", position: { x: 150, y: 160 } },
  { id: "leftArm", name: "左臂", hp: 80, maxHp: 80, status: "healthy", position: { x: 80, y: 110 } },
  { id: "rightArm", name: "右臂", hp: 80, maxHp: 80, status: "healthy", position: { x: 220, y: 110 } },
  { id: "leftLeg", name: "左腿", hp: 90, maxHp: 90, status: "healthy", position: { x: 100, y: 230 } },
  { id: "rightLeg", name: "右腿", hp: 90, maxHp: 90, status: "healthy", position: { x: 200, y: 230 } },
];

// 默认经络数据
const defaultMeridians: Meridian[] = [
  { id: "lung", name: "手太阴肺经", opened: false, type: "regular" },
  { id: "largeIntestine", name: "手阳明大肠经", opened: false, type: "regular" },
  { id: "stomach", name: "足阳明胃经", opened: false, type: "regular" },
  { id: "spleen", name: "足太阴脾经", opened: false, type: "regular" },
  { id: "heart", name: "手少阴心经", opened: false, type: "regular" },
  { id: "smallIntestine", name: "手太阳小肠经", opened: false, type: "regular" },
  { id: "bladder", name: "足太阳膀胱经", opened: false, type: "regular" },
  { id: "kidney", name: "足少阴肾经", opened: false, type: "regular" },
  { id: "pericardium", name: "手厥阴心包经", opened: false, type: "regular" },
  { id: "tripleWarmer", name: "手少阳三焦经", opened: false, type: "regular" },
  { id: "gallbladder", name: "足少阳胆经", opened: false, type: "regular" },
  { id: "liver", name: "足厥阴肝经", opened: false, type: "regular" },
  { id: "ren", name: "任脉", opened: false, type: "ren" },
  { id: "du", name: "督脉", opened: false, type: "du" },
];

// 默认穴位数据
const defaultAcupoints: Acupoint[] = [
  { id: "baihui", name: "百会", activated: false, meridianId: "du", position: { x: 150, y: 20 } },
  { id: "yintang", name: "印堂", activated: false, meridianId: "du", position: { x: 150, y: 35 } },
  { id: "tanzhong", name: "膻中", activated: false, meridianId: "ren", position: { x: 150, y: 110 } },
  { id: "qihai", name: "气海", activated: false, meridianId: "ren", position: { x: 150, y: 170 } },
  { id: "guanyuan", name: "关元", activated: false, meridianId: "ren", position: { x: 150, y: 190 } },
  { id: "zusanli", name: "足三里", activated: false, meridianId: "stomach", position: { x: 120, y: 240 } },
  { id: "laogong", name: "劳宫", activated: false, meridianId: "pericardium", position: { x: 70, y: 140 } },
  { id: "neiguan", name: "内关", activated: false, meridianId: "pericardium", position: { x: 75, y: 120 } },
];

export default function BodyMeridianDiagram({ userId }: BodyMeridianDiagramProps) {
  const [bodyParts, setBodyParts] = useState<BodyPart[]>(defaultBodyParts);
  const [meridians, setMeridians] = useState<Meridian[]>(defaultMeridians);
  const [acupoints, setAcupoints] = useState<Acupoint[]>(defaultAcupoints);
  const [selectedPart, setSelectedPart] = useState<BodyPart | null>(null);
  const [cultivating, setCultivating] = useState(false);
  const [bodyToughness, setBodyToughness] = useState(50);

  // 获取身体状态
  useEffect(() => {
    const fetchBodyState = async () => {
      try {
        const res = await fetch(`/api/body?userId=${userId}`);
        if (res.ok) {
          const data = await res.json();
          if (data.bodyState) {
            setBodyParts(data.bodyState.parts || bodyParts);
            setMeridians(data.bodyState.meridians || meridians);
            setAcupoints(data.bodyState.acupoints || acupoints);
          }
          if (data.bodyToughness !== undefined) {
            setBodyToughness(data.bodyToughness);
          }
        }
      } catch (error) {
        console.error("获取身体状态失败:", error);
      }
    };

    if (userId) {
      fetchBodyState();
    }
  }, [userId]);

  // 修炼身体
  const cultivateBody = async () => {
    setCultivating(true);
    try {
      const res = await fetch("/api/body", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "cultivate", userId }),
      });
      if (res.ok) {
        const data = await res.json();
        if (data.bodyState) {
          setBodyParts(data.bodyState.parts);
          setBodyToughness(data.bodyToughness);
        }
      }
    } catch (error) {
      console.error("修炼失败:", error);
    } finally {
      setCultivating(false);
    }
  };

  // 打开经络
  const openMeridian = async (meridianId: string) => {
    try {
      const res = await fetch("/api/body", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "openMeridian", userId, meridianId }),
      });
      if (res.ok) {
        setMeridians(prev =>
          prev.map(m => (m.id === meridianId ? { ...m, opened: true } : m))
        );
      }
    } catch (error) {
      console.error("打开经络失败:", error);
    }
  };

  // 激活穴位
  const activateAcupoint = async (acupointId: string) => {
    try {
      const res = await fetch("/api/body", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "activateAcupoint", userId, acupointId }),
      });
      if (res.ok) {
        setAcupoints(prev =>
          prev.map(a => (a.id === acupointId ? { ...a, activated: true } : a))
        );
      }
    } catch (error) {
      console.error("激活穴位失败:", error);
    }
  };

  // 计算修炼速度加成
  const cultivationBonus = (() => {
    const openedMeridians = meridians.filter(m => m.opened).length;
    const activatedAcupoints = acupoints.filter(a => a.activated).length;
    return openedMeridians * 5 + activatedAcupoints * 10;
  })();

  // 获取状态颜色
  const getStatusColor = (status: string) => {
    switch (status) {
      case "healthy": return "text-emerald-400";
      case "injured": return "text-amber-400";
      case "damaged": return "text-orange-400";
      case "numb": return "text-stone-400";
      default: return "text-stone-500";
    }
  };

  // 获取状态背景
  const getStatusBg = (status: string) => {
    switch (status) {
      case "healthy": return "bg-emerald-500";
      case "injured": return "bg-amber-500";
      case "damaged": return "bg-orange-500";
      case "numb": return "bg-stone-500";
      default: return "bg-stone-600";
    }
  };

  return (
    <div className="space-y-4">
      {/* 身体韧性概览 */}
      <Card className="bg-stone-900/50 border-stone-700/50">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg text-amber-400 flex items-center gap-2">
            <Shield className="w-5 h-5" />
            肉身境界
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-stone-800/50 rounded-lg p-3">
              <div className="text-stone-400 text-xs mb-1">肉身强度</div>
              <div className="text-2xl font-bold text-amber-400">{bodyToughness}</div>
              <div className="text-stone-500 text-xs mt-1">
                修炼速度 +{cultivationBonus}%
              </div>
            </div>
            <div className="bg-stone-800/50 rounded-lg p-3">
              <div className="text-stone-400 text-xs mb-1">经络打通</div>
              <div className="text-2xl font-bold text-blue-400">
                {meridians.filter(m => m.opened).length}/14
              </div>
              <div className="text-stone-500 text-xs mt-1">
                任督二脉 {meridians.find(m => m.id === "ren")?.opened && meridians.find(m => m.id === "du")?.opened ? "已通" : "未通"}
              </div>
            </div>
            <div className="bg-stone-800/50 rounded-lg p-3">
              <div className="text-stone-400 text-xs mb-1">穴位激活</div>
              <div className="text-2xl font-bold text-purple-400">
                {acupoints.filter(a => a.activated).length}/12
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Button
                onClick={cultivateBody}
                disabled={cultivating}
                className="w-full bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500"
              >
                <Activity className="w-4 h-4 mr-2" />
                {cultivating ? "修炼中..." : "淬炼肉身"}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 人体经络图 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* 人体示意图 */}
        <Card className="bg-stone-900/50 border-stone-700/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg text-amber-400 flex items-center gap-2">
              <Heart className="w-5 h-5" />
              身体状态
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative w-full h-80 bg-stone-800/30 rounded-lg overflow-hidden">
              {/* 人体轮廓 SVG */}
              <svg viewBox="0 0 300 300" className="w-full h-full">
                {/* 经络连线 */}
                {meridians.map(meridian =>
                  meridian.opened ? (
                    <g key={meridian.id}>
                      <circle
                        cx={150}
                        cy={150}
                        r="100"
                        fill="none"
                        stroke={meridian.type === "ren" ? "#3b82f6" : meridian.type === "du" ? "#ef4444" : "#60a5fa"}
                        strokeWidth="1"
                        opacity="0.3"
                        strokeDasharray="5,5"
                      />
                    </g>
                  ) : null
                )}

                {/* 穴位 */}
                {acupoints.map(acupoint => (
                  <g key={acupoint.id}>
                    <circle
                      cx={acupoint.position.x}
                      cy={acupoint.position.y}
                      r={acupoint.activated ? 6 : 3}
                      fill={acupoint.activated ? "#a855f7" : "#78716c"}
                      className="cursor-pointer"
                      onClick={() => !acupoint.activated && activateAcupoint(acupoint.id)}
                    />
                    {acupoint.activated && (
                      <circle
                        cx={acupoint.position.x}
                        cy={acupoint.position.y}
                        r="10"
                        fill="none"
                        stroke="#a855f7"
                        strokeWidth="1"
                        opacity="0.5"
                      >
                        <animate
                          attributeName="r"
                          from="6"
                          to="12"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="opacity"
                          from="0.8"
                          to="0"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                      </circle>
                    )}
                  </g>
                ))}

                {/* 身体部位 */}
                {bodyParts.map(part => (
                  <g
                    key={part.id}
                    className="cursor-pointer"
                    onClick={() => setSelectedPart(part)}
                  >
                    <circle
                      cx={part.position.x}
                      cy={part.position.y}
                      r="15"
                      fill={getStatusBg(part.status)}
                      opacity="0.7"
                    />
                    <text
                      x={part.position.x}
                      y={part.position.y + 4}
                      textAnchor="middle"
                      fill="white"
                      fontSize="10"
                      className="pointer-events-none"
                    >
                      {part.name.slice(0, 2)}
                    </text>
                  </g>
                ))}
              </svg>
            </div>

            {/* 身体部位列表 */}
            <div className="mt-4 space-y-2">
              {bodyParts.map(part => (
                <div
                  key={part.id}
                  className={`flex items-center justify-between p-2 rounded-lg cursor-pointer transition-colors ${
                    selectedPart?.id === part.id
                      ? "bg-stone-700/50"
                      : "bg-stone-800/30 hover:bg-stone-800/50"
                  }`}
                  onClick={() => setSelectedPart(part)}
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${getStatusBg(part.status)}`} />
                    <span className="text-sm text-stone-300">{part.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`text-xs ${getStatusColor(part.status)}`}>
                      {part.status === "healthy" && "健康"}
                      {part.status === "injured" && "受伤"}
                      {part.status === "damaged" && "破损"}
                      {part.status === "numb" && "麻木"}
                    </span>
                    <span className="text-xs text-stone-500">
                      {part.hp}/{part.maxHp}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 经络列表 */}
        <Card className="bg-stone-900/50 border-stone-700/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg text-blue-400 flex items-center gap-2">
              <Zap className="w-5 h-5" />
              经络系统
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {meridians.map(meridian => (
                <div
                  key={meridian.id}
                  className={`flex items-center justify-between p-3 rounded-lg ${
                    meridian.opened
                      ? "bg-blue-900/20 border border-blue-700/50"
                      : "bg-stone-800/30"
                  }`}
                >
                  <div>
                    <div className="text-sm font-medium text-stone-200">
                      {meridian.name}
                    </div>
                    <div className="text-xs text-stone-500">
                      {meridian.type === "ren" && "阴脉之海"}
                      {meridian.type === "du" && "阳脉之海"}
                      {meridian.type === "regular" && "十二正经"}
                    </div>
                  </div>
                  {meridian.opened ? (
                    <span className="text-xs text-blue-400 px-2 py-1 rounded bg-blue-900/30">
                      已打通
                    </span>
                  ) : (
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-xs border-blue-600 text-blue-400 hover:bg-blue-900/30"
                      onClick={() => openMeridian(meridian.id)}
                    >
                      打通
                    </Button>
                  )}
                </div>
              ))}
            </div>

            {/* 穴位列表 */}
            <div className="mt-4">
              <h3 className="text-sm font-medium text-stone-300 mb-2">主要穴位</h3>
              <div className="grid grid-cols-3 gap-2">
                {acupoints.map(acupoint => (
                  <button
                    key={acupoint.id}
                    className={`p-2 rounded-lg text-xs transition-all ${
                      acupoint.activated
                        ? "bg-purple-900/30 border border-purple-600/50 text-purple-300"
                        : "bg-stone-800/30 border border-stone-700/30 text-stone-500 hover:border-purple-600/50"
                    }`}
                    onClick={() => !acupoint.activated && activateAcupoint(acupoint.id)}
                    disabled={acupoint.activated}
                  >
                    {acupoint.name}
                  </button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 选中部位详情 */}
      {selectedPart && (
        <Card className="bg-stone-900/50 border-stone-700/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg text-amber-400">
              {selectedPart.name}详情
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-stone-800/50 rounded-lg p-3">
                <div className="text-stone-400 text-xs mb-1">气血</div>
                <div className="text-xl font-bold text-red-400">
                  {selectedPart.hp}/{selectedPart.maxHp}
                </div>
              </div>
              <div className="bg-stone-800/50 rounded-lg p-3">
                <div className="text-stone-400 text-xs mb-1">状态</div>
                <div className={`text-xl font-bold ${getStatusColor(selectedPart.status)}`}>
                  {selectedPart.status === "healthy" && "健康"}
                  {selectedPart.status === "injured" && "受伤"}
                  {selectedPart.status === "damaged" && "破损"}
                  {selectedPart.status === "numb" && "麻木"}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
