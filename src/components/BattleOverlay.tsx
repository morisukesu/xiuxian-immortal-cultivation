"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sword, Shield, Sparkles, Package, ArrowRight, AlertTriangle, Timer } from "lucide-react";

interface CombatState {
  player: {
    hp: number;
    maxHp: number;
    mp: number;
    maxMp: number;
    attack: number;
    defense: number;
  };
  enemy: {
    name: string;
    hp: number;
    maxHp: number;
    attack: number;
    defense: number;
    level: number;
  };
  turn: number;
  logs: CombatLog[];
}

interface CombatLog {
  id: string;
  turn: number;
  action: string;
  message: string;
  damage?: number;
  type: "player" | "enemy" | "system";
}

interface BattleOverlayProps {
  userId: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function BattleOverlay({ userId, isOpen, onClose }: BattleOverlayProps) {
  const [combatState, setCombatState] = useState<CombatState | null>(null);
  const [loading, setLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [autoMode, setAutoMode] = useState(false);
  const logsEndRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // 自动滚动日志
  useEffect(() => {
    if (logsEndRef.current) {
      logsEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [combatState?.logs]);

  // 计时器
  useEffect(() => {
    if (isOpen && combatState) {
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            endCombat();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isOpen, combatState]);

  // 自动战斗
  useEffect(() => {
    if (autoMode && combatState && timeLeft > 0) {
      const autoTimer = setInterval(() => {
        performAction("attack");
      }, 2000);

      return () => clearInterval(autoTimer);
    }
  }, [autoMode, combatState, timeLeft]);

  // 开始战斗
  const startCombat = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/combat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "start", userId }),
      });
      if (res.ok) {
        const data = await res.json();
        setCombatState(data.combatState);
        setTimeLeft(60);
      }
    } catch (error) {
      console.error("开始战斗失败:", error);
    } finally {
      setLoading(false);
    }
  };

  // 执行战斗动作
  const performAction = async (action: string) => {
    if (!combatState) return;

    setLoading(true);
    try {
      const res = await fetch("/api/combat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "action",
          userId,
          combatId: combatState.enemy?.name,
          actionType: action,
        }),
      });
      if (res.ok) {
        const data = await res.json();
        setCombatState(data.combatState);
        setTimeLeft(60);
      }
    } catch (error) {
      console.error("执行动作失败:", error);
    } finally {
      setLoading(false);
    }
  };

  // 结束战斗
  const endCombat = async () => {
    try {
      await fetch("/api/combat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "end", userId }),
      });
      setCombatState(null);
      setAutoMode(false);
      onClose();
    } catch (error) {
      console.error("结束战斗失败:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-hidden bg-stone-900 border-amber-600/50">
        <CardHeader className="border-b border-stone-700 pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl text-amber-400 flex items-center gap-2">
              <Sword className="w-6 h-6" />
              战斗
            </CardTitle>
            <div className="flex items-center gap-4">
              {combatState && (
                <div className="flex items-center gap-2">
                  <Timer className="w-4 h-4 text-stone-400" />
                  <span className={`text-sm font-mono ${timeLeft <= 10 ? "text-red-400" : "text-stone-300"}`}>
                    {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, "0")}
                  </span>
                </div>
              )}
              <Button variant="ghost" size="sm" onClick={onClose}>
                关闭
              </Button>
            </div>
          </div>
        </CardHeader>

        <CardContent className="overflow-y-auto max-h-[calc(90vh-80px)]">
          {!combatState ? (
            <div className="text-center py-16 space-y-6">
              <div className="text-6xl">⚔️</div>
              <h2 className="text-2xl font-bold text-stone-200">即将踏入战场</h2>
              <p className="text-stone-400">
                准备迎接挑战，证明你的实力
              </p>
              <Button
                onClick={startCombat}
                disabled={loading}
                className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 px-8 h-12 text-lg"
              >
                <Sword className="w-5 h-5 mr-2" />
                {loading ? "准备中..." : "开始战斗"}
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              {/* 战斗场景 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* 玩家 */}
                <Card className="bg-blue-950/30 border-blue-700/50">
                  <CardContent className="pt-4">
                    <div className="text-center mb-4">
                      <div className="text-4xl mb-2">🧘</div>
                      <div className="text-lg font-bold text-blue-300">修仙者</div>
                    </div>

                    <div className="space-y-3">
                      {/* HP */}
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-stone-400">HP</span>
                          <span className="text-red-400">{combatState.player.hp}/{combatState.player.maxHp}</span>
                        </div>
                        <div className="h-3 bg-stone-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-red-500 rounded-full transition-all duration-300"
                            style={{ width: `${(combatState.player.hp / combatState.player.maxHp) * 100}%` }}
                          />
                        </div>
                      </div>

                      {/* MP */}
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-stone-400">MP</span>
                          <span className="text-blue-400">{combatState.player.mp}/{combatState.player.maxMp}</span>
                        </div>
                        <div className="h-3 bg-stone-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-blue-500 rounded-full transition-all duration-300"
                            style={{ width: `${(combatState.player.mp / combatState.player.maxMp) * 100}%` }}
                          />
                        </div>
                      </div>

                      {/* 属性 */}
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-stone-800/50 rounded p-2 text-center">
                          <div className="text-xs text-stone-500">攻击</div>
                          <div className="text-sm font-bold text-orange-400">{combatState.player.attack}</div>
                        </div>
                        <div className="bg-stone-800/50 rounded p-2 text-center">
                          <div className="text-xs text-stone-500">防御</div>
                          <div className="text-sm font-bold text-blue-400">{combatState.player.defense}</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* VS */}
                <div className="flex flex-col items-center justify-center">
                  <div className="text-4xl font-bold text-red-500 mb-4">VS</div>
                  <div className="text-sm text-stone-500">第 {combatState.turn} 回合</div>
                </div>

                {/* 敌人 */}
                <Card className="bg-red-950/30 border-red-700/50">
                  <CardContent className="pt-4">
                    <div className="text-center mb-4">
                      <div className="text-4xl mb-2">👹</div>
                      <div className="text-lg font-bold text-red-300">{combatState.enemy.name}</div>
                      <div className="text-sm text-stone-500">Lv.{combatState.enemy.level}</div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-stone-400">HP</span>
                        <span className="text-red-400">{combatState.enemy.hp}/{combatState.enemy.maxHp}</span>
                      </div>
                      <div className="h-3 bg-stone-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-red-600 rounded-full transition-all duration-300"
                          style={{ width: `${(combatState.enemy.hp / combatState.enemy.maxHp) * 100}%` }}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* 行动按钮 */}
              <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                <Button
                  onClick={() => performAction("attack")}
                  disabled={loading}
                  className="bg-red-600 hover:bg-red-500"
                >
                  <Sword className="w-4 h-4 mr-1" />
                  攻击
                </Button>
                <Button
                  onClick={() => performAction("defend")}
                  disabled={loading}
                  variant="outline"
                  className="border-blue-600 text-blue-400"
                >
                  <Shield className="w-4 h-4 mr-1" />
                  防御
                </Button>
                <Button
                  onClick={() => performAction("skill")}
                  disabled={loading || combatState.player.mp < 20}
                  variant="outline"
                  className="border-purple-600 text-purple-400"
                >
                  <Sparkles className="w-4 h-4 mr-1" />
                  技能
                </Button>
                <Button
                  onClick={() => performAction("item")}
                  disabled={loading}
                  variant="outline"
                  className="border-emerald-600 text-emerald-400"
                >
                  <Package className="w-4 h-4 mr-1" />
                  物品
                </Button>
                <Button
                  onClick={() => performAction("shield")}
                  disabled={loading || combatState.player.mp < 30}
                  variant="outline"
                  className="border-cyan-600 text-cyan-400"
                >
                  <Shield className="w-4 h-4 mr-1" />
                  护盾
                </Button>
                <Button
                  onClick={() => performAction("flee")}
                  disabled={loading}
                  variant="outline"
                  className="border-stone-600 text-stone-400"
                >
                  <ArrowRight className="w-4 h-4 mr-1" />
                  逃跑
                </Button>
              </div>

              {/* 自动战斗 */}
              <div className="flex items-center justify-center gap-2">
                <label className="text-sm text-stone-400">自动战斗</label>
                <button
                  className={`w-12 h-6 rounded-full transition-colors ${autoMode ? "bg-amber-600" : "bg-stone-700"}`}
                  onClick={() => setAutoMode(!autoMode)}
                >
                  <div
                    className={`w-5 h-5 bg-white rounded-full transition-transform ${autoMode ? "translate-x-6" : "translate-x-1"}`}
                  />
                </button>
              </div>

              {/* 战斗日志 */}
              <Card className="bg-stone-950/50 border-stone-800">
                <CardContent className="pt-4">
                  <div className="max-h-48 overflow-y-auto space-y-1">
                    {combatState.logs.map(log => (
                      <div
                        key={log.id}
                        className={`text-xs p-2 rounded ${
                          log.type === "player"
                            ? "text-blue-300 bg-blue-900/20"
                            : log.type === "enemy"
                            ? "text-red-300 bg-red-900/20"
                            : "text-stone-400 bg-stone-800/20"
                        }`}
                      >
                        <span className="text-stone-500 mr-2">[{log.turn}T]</span>
                        {log.message}
                        {log.damage && (
                          <span className="text-red-400 font-bold ml-2">
                            -{log.damage} HP
                          </span>
                        )}
                      </div>
                    ))}
                    <div ref={logsEndRef} />
                  </div>
                </CardContent>
              </Card>

              {/* 结束战斗 */}
              <div className="text-center">
                <Button
                  variant="outline"
                  onClick={endCombat}
                  className="border-stone-600 text-stone-400 hover:bg-stone-800"
                >
                  结束战斗
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
