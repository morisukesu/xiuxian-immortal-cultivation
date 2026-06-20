"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Map, Compass, ChevronUp, ChevronDown, ChevronLeft, ChevronRight, Eye, EyeOff } from "lucide-react";

interface MapNode {
  x: number;
  y: number;
  type: "start" | "combat" | "treasure" | "heal" | "event" | "market" | "boss" | "portal" | "empty";
  explored: boolean;
  cleared: boolean;
}

interface MapState {
  nodes: MapNode[][];
  playerPos: { x: number; y: number };
  level: number;
  name: string;
  stepsLeft: number;
  maxSteps: number;
}

interface MapExplorerProps {
  userId: string;
}

const nodeEmojis: Record<string, string> = {
  start: "🚪",
  combat: "⚔️",
  treasure: "💎",
  heal: "💚",
  event: "❓",
  market: "🏪",
  boss: "👹",
  portal: "🌀",
  empty: "·",
};

const nodeNames: Record<string, string> = {
  start: "入口",
  combat: "战斗",
  treasure: "宝藏",
  heal: "疗伤",
  event: "奇遇",
  market: "坊市",
  boss: "BOSS",
  portal: "传送",
  empty: "空地",
};

const mapNames = [
  "血色禁地",
  "虚天殿",
  "坠魔谷",
  "昆吾山",
  "苍坤遗迹",
  "古修士洞府",
  "海底灵穴",
  "天南秘境",
  "乱星海遗迹",
  "灵界秘境",
];

export default function MapExplorer({ userId }: MapExplorerProps) {
  const [mapState, setMapState] = useState<MapState | null>(null);
  const [loading, setLoading] = useState(false);
  const [showFog, setShowFog] = useState(true);
  const [selectedNode, setSelectedNode] = useState<MapNode | null>(null);

  // 获取地图状态
  useEffect(() => {
    const fetchMap = async () => {
      try {
        const res = await fetch(`/api/map?userId=${userId}`);
        if (res.ok) {
          const data = await res.json();
          if (data.mapState) {
            setMapState(data.mapState);
          }
        }
      } catch (error) {
        console.error("获取地图状态失败:", error);
      }
    };

    if (userId) {
      fetchMap();
    }
  }, [userId]);

  // 开始探索
  const startExplore = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/map", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "start", userId }),
      });
      if (res.ok) {
        const data = await res.json();
        setMapState(data.mapState);
      }
    } catch (error) {
      console.error("开始探索失败:", error);
    } finally {
      setLoading(false);
    }
  };

  // 移动
  const move = async (dx: number, dy: number) => {
    if (!mapState) return;

    setLoading(true);
    try {
      const res = await fetch("/api/map", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "move",
          userId,
          dx,
          dy,
        }),
      });
      if (res.ok) {
        const data = await res.json();
        setMapState(data.mapState);
      }
    } catch (error) {
      console.error("移动失败:", error);
    } finally {
      setLoading(false);
    }
  };

  // 结束探索
  const endExplore = async () => {
    try {
      await fetch("/api/map", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "end", userId }),
      });
      setMapState(null);
    } catch (error) {
      console.error("结束探索失败:", error);
    }
  };

  const getNodeColor = (node: MapNode) => {
    if (!node.explored && showFog) return "bg-stone-800";
    if (node.cleared) return "bg-stone-800/50";
    
    switch (node.type) {
      case "start": return "bg-emerald-900/50";
      case "combat": return "bg-red-900/50";
      case "treasure": return "bg-yellow-900/50";
      case "heal": return "bg-emerald-900/50";
      case "event": return "bg-purple-900/50";
      case "market": return "bg-blue-900/50";
      case "boss": return "bg-red-900/70";
      case "portal": return "bg-cyan-900/50";
      default: return "bg-stone-800/30";
    }
  };

  const isPlayerHere = (x: number, y: number) => {
    return mapState?.playerPos.x === x && mapState?.playerPos.y === y;
  };

  return (
    <div className="space-y-4">
      {!mapState ? (
        <Card className="bg-stone-900/50 border-stone-700/50">
          <CardContent className="pt-6 text-center">
            <div className="text-4xl mb-4">🗺️</div>
            <h2 className="text-xl font-bold text-stone-200 mb-2">秘境探索</h2>
            <p className="text-stone-400 mb-4">
              探索神秘秘境，寻找机缘造化
            </p>
            <Button
              onClick={startExplore}
              disabled={loading}
              className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500"
            >
              <Compass className="w-4 h-4 mr-2" />
              {loading ? "准备中..." : "开始探索"}
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {/* 秘境信息 */}
          <Card className="bg-stone-900/50 border-stone-700/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-amber-400 flex items-center gap-2">
                <Map className="w-5 h-5" />
                {mapState.name || mapNames[Math.floor(Math.random() * mapNames.length)]}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-stone-800/50 rounded-lg p-3 text-center">
                  <div className="text-xs text-stone-500 mb-1">层数</div>
                  <div className="text-lg font-bold text-amber-400">{mapState.level}</div>
                </div>
                <div className="bg-stone-800/50 rounded-lg p-3 text-center">
                  <div className="text-xs text-stone-500 mb-1">剩余步数</div>
                  <div className={`text-lg font-bold ${mapState.stepsLeft < 5 ? "text-red-400" : "text-emerald-400"}`}>
                    {mapState.stepsLeft}/{mapState.maxSteps}
                  </div>
                </div>
                <div className="bg-stone-800/50 rounded-lg p-3 text-center">
                  <div className="text-xs text-stone-500 mb-1">已探索</div>
                  <div className="text-lg font-bold text-blue-400">
                    {mapState.nodes.flat().filter(n => n.explored).length}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 地图网格 */}
          <Card className="bg-stone-900/50 border-stone-700/50">
            <CardContent className="pt-4">
              <div className="flex justify-center mb-4">
                <label className="flex items-center gap-2 text-sm text-stone-400 cursor-pointer">
                  {showFog ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                  迷雾效果
                  <button
                    className={`w-10 h-5 rounded-full transition-colors ${showFog ? "bg-amber-600" : "bg-stone-700"}`}
                    onClick={() => setShowFog(!showFog)}
                  >
                    <div
                      className={`w-4 h-4 bg-white rounded-full transition-transform ${showFog ? "translate-x-5" : "translate-x-0.5"}`}
                    />
                  </button>
                </label>
              </div>

              <div className="overflow-x-auto">
                <div className="inline-grid gap-1 mx-auto" style={{ gridTemplateColumns: "repeat(8, minmax(0, 1fr))" }}>
                  {mapState.nodes.map((row, y) =>
                    row.map((node, x) => (
                      <button
                        key={`${x}-${y}`}
                        className={`w-12 h-12 md:w-16 md:h-16 rounded-lg flex items-center justify-center text-lg md:text-2xl transition-all ${getNodeColor(node)} ${
                          isPlayerHere(x, y) ? "ring-2 ring-amber-400 ring-offset-2 ring-offset-stone-900" : ""
                        } ${node.explored && showFog ? "hover:scale-105" : ""}`}
                        onClick={() => node.explored && setSelectedNode(node)}
                        disabled={!node.explored || loading}
                      >
                        {!node.explored && showFog ? (
                          <span className="text-stone-600">?</span>
                        ) : (
                          <span className={node.cleared ? "opacity-50" : ""}>
                            {isPlayerHere(x, y) ? "🧘" : nodeEmojis[node.type]}
                          </span>
                        )}
                      </button>
                    ))
                  )}
                </div>
              </div>

              {/* 移动控制 */}
              <div className="flex justify-center mt-6">
                <div className="grid grid-cols-3 gap-2 w-36">
                  <div />
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => move(0, -1)}
                    disabled={loading || mapState.stepsLeft <= 0}
                  >
                    <ChevronUp className="w-4 h-4" />
                  </Button>
                  <div />
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => move(-1, 0)}
                    disabled={loading || mapState.stepsLeft <= 0}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <div className="flex items-center justify-center">
                    <Compass className="w-6 h-6 text-amber-400" />
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => move(1, 0)}
                    disabled={loading || mapState.stepsLeft <= 0}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                  <div />
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => move(0, 1)}
                    disabled={loading || mapState.stepsLeft <= 0}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                  <div />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 选中节点详情 */}
          {selectedNode && selectedNode.explored && (
            <Card className="bg-stone-900/50 border-stone-700/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-amber-400">
                  {nodeNames[selectedNode.type]}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{nodeEmojis[selectedNode.type]}</div>
                  <div>
                    <div className="text-sm text-stone-300">
                      位置：({selectedNode.x}, {selectedNode.y})
                    </div>
                    <div className="text-xs text-stone-500">
                      {selectedNode.cleared ? "已清理" : "未清理"}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* 结束探索 */}
          <div className="text-center">
            <Button
              variant="outline"
              onClick={endExplore}
              className="border-stone-600 text-stone-400 hover:bg-stone-800"
            >
              结束探索
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
