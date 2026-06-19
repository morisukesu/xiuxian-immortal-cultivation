// ============================================================
// 修仙模拟器 — 地图/秘境探索系统
// ============================================================

/** 地图节点类型 */
export type MapNodeType =
  | "start"       // 起点
  | "combat"      // 战斗
  | "treasure"    // 宝藏
  | "heal"        // 治疗点
  | "event"       // 随机事件
  | "shop"        // 坊市
  | "boss"        // Boss
  | "portal"      // 传送门 (终点)
  | "empty"       // 空地
  | "fog";        // 迷雾 (未探索)

/** 地图节点 */
export interface MapNode {
  x: number;
  y: number;
  type: MapNodeType;
  isExplored: boolean;  // 是否已探索
  isVisited: boolean;   // 是否已访问
  data?: {
    enemyId?: string;
    treasure?: string[];
    eventId?: string;
    shopItems?: string[];
    description?: string;
  };
}

/** 地图状态 */
export interface MapState {
  name: string;
  level: number;  // 秘境层数
  width: number;
  height: number;
  nodes: MapNode[][];
  playerX: number;
  playerY: number;
  isExploring: boolean;
  steps: number;  // 已走步数
  maxSteps: number;  // 最大步数
}

// ============================================================
// 地图模板
// ============================================================

/** 秘境名称 */
const DUNGEON_NAMES = [
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

/** 层数后缀 */
const LEVEL_SUFFIXES = ["外层", "中层", "内层", "核心", "深处"];

// ============================================================
// 地图生成
// ============================================================

/** 生成随机地图 */
export function generateMap(
  level: number,
  width = 8,
  height = 8
): MapState {
  const dungeonName = DUNGEON_NAMES[Math.floor(Math.random() * DUNGEON_NAMES.length)];
  const levelSuffix = LEVEL_SUFFIXES[Math.min(Math.floor(level / 5), LEVEL_SUFFIXES.length - 1)];

  // 初始化地图
  const nodes: MapNode[][] = [];
  for (let y = 0; y < height; y++) {
    const row: MapNode[] = [];
    for (let x = 0; x < width; x++) {
      row.push({
        x,
        y,
        type: "fog",
        isExplored: false,
        isVisited: false,
      });
    }
    nodes.push(row);
  }

  // 设置起点
  nodes[0][0] = {
    x: 0,
    y: 0,
    type: "start",
    isExplored: true,
    isVisited: true,
    data: { description: "秘境入口，安全区域" },
  };

  // 设置终点 (传送门)
  const exitX = width - 1;
  const exitY = height - 1;
  nodes[exitY][exitX] = {
    x: exitX,
    y: exitY,
    type: "portal",
    isExplored: false,
    isVisited: false,
    data: { description: "通往下一层的传送门" },
  };

  // 随机生成节点
  const nodeCount = Math.floor((width * height) / 3);
  const nodeTypes: MapNodeType[] = ["combat", "treasure", "heal", "event", "shop"];

  for (let i = 0; i < nodeCount; i++) {
    const x = Math.floor(Math.random() * width);
    const y = Math.floor(Math.random() * height);

    // 跳过起点和终点
    if ((x === 0 && y === 0) || (x === exitX && y === exitY)) continue;
    if (nodes[y][x].type !== "fog") continue;

    const type = nodeTypes[Math.floor(Math.random() * nodeTypes.length)];
    nodes[y][x] = {
      x,
      y,
      type,
      isExplored: false,
      isVisited: false,
      data: generateNodeData(type, level),
    };
  }

  // 添加 Boss (每 5 层)
  if (level % 5 === 0) {
    const bossX = Math.floor(width / 2);
    const bossY = Math.floor(height / 2);
    if (nodes[bossY][bossX].type === "fog") {
      nodes[bossY][bossX] = {
        x: bossX,
        y: bossY,
        type: "boss",
        isExplored: false,
        isVisited: false,
        data: { description: "层主在此，凶险万分！" },
      };
    }
  }

  return {
    name: `${dungeonName}·${levelSuffix}`,
    level,
    width,
    height,
    nodes,
    playerX: 0,
    playerY: 0,
    isExploring: true,
    steps: 0,
    maxSteps: 50 + level * 10,
  };
}

/** 生成节点数据 */
function generateNodeData(type: MapNodeType, level: number): MapNode["data"] {
  switch (type) {
    case "combat":
      return { description: "前方有妖兽气息……" };
    case "treasure":
      return {
        treasure: [
          level < 5 ? "下品灵石" : level < 10 ? "中品灵石" : "上品灵石",
          Math.random() < 0.3 ? "丹药" : undefined,
          Math.random() < 0.2 ? "功法残卷" : undefined,
        ].filter(Boolean) as string[],
        description: "发现一处宝藏！",
      };
    case "heal":
      return { description: "灵气充沛之地，可恢复伤势" };
    case "event":
      return { description: "前方有异常波动……" };
    case "shop":
      return {
        shopItems: ["回春丹", "聚气散", "护身符", "符箓"],
        description: "发现一处坊市",
      };
    case "boss":
      return { description: "层主在此，凶险万分！" };
    default:
      return { description: "" };
  }
}

// ============================================================
// 探索逻辑
// ============================================================

/** 移动玩家 */
export function movePlayer(
  map: MapState,
  direction: "up" | "down" | "left" | "right"
): { map: MapState; result: MapNode | null } {
  if (!map.isExploring) return { map, result: null };

  let newX = map.playerX;
  let newY = map.playerY;

  switch (direction) {
    case "up": newY--; break;
    case "down": newY++; break;
    case "left": newX--; break;
    case "right": newX++; break;
  }

  // 检查边界
  if (newX < 0 || newX >= map.width || newY < 0 || newY >= map.height) {
    return { map, result: null };
  }

  // 更新地图
  const newMap = { ...map };
  newMap.playerX = newX;
  newMap.playerY = newY;
  newMap.steps++;

  // 探索周围节点
  exploreSurrounding(newMap, newX, newY);

  // 访问当前节点
  const currentNode = newMap.nodes[newY][newX];
  currentNode.isVisited = true;

  // 检查是否到达终点
  if (currentNode.type === "portal") {
    newMap.isExploring = false;
  }

  // 检查步数耗尽
  if (newMap.steps >= newMap.maxSteps) {
    newMap.isExploring = false;
  }

  return { map: newMap, result: currentNode };
}

/** 探索周围节点 (揭示迷雾) */
function exploreSurrounding(map: MapState, x: number, y: number) {
  const range = 1; // 视野范围

  for (let dy = -range; dy <= range; dy++) {
    for (let dx = -range; dx <= range; dx++) {
      const nx = x + dx;
      const ny = y + dy;

      if (nx >= 0 && nx < map.width && ny >= 0 && ny < map.height) {
        map.nodes[ny][nx].isExplored = true;
      }
    }
  }
}

/** 处理节点事件 */
export function handleNodeEvent(
  node: MapNode,
  playerLevel: number
): {
  type: string;
  description: string;
  rewards?: string[];
  enemyLevel?: number;
} {
  switch (node.type) {
    case "combat":
      return {
        type: "combat",
        description: node.data?.description || "遭遇妖兽！",
        enemyLevel: playerLevel + Math.floor(Math.random() * 3) - 1,
      };

    case "treasure":
      return {
        type: "treasure",
        description: node.data?.description || "发现宝藏！",
        rewards: node.data?.treasure,
      };

    case "heal":
      return {
        type: "heal",
        description: "在此地调息，伤势快速恢复",
        rewards: ["恢复 30% 生命值"],
      };

    case "event":
      return {
        type: "event",
        description: node.data?.description || "触发随机事件",
      };

    case "shop":
      return {
        type: "shop",
        description: "坊市商人：道友可要看看货？",
        rewards: node.data?.shopItems,
      };

    case "boss":
      return {
        type: "boss",
        description: "层主现身！小心应对！",
        enemyLevel: playerLevel + 5,
      };

    case "portal":
      return {
        type: "portal",
        description: "传送门开启，通往下一层",
      };

    default:
      return {
        type: "empty",
        description: "此处空无一物",
      };
  }
}

/** 序列化地图 (用于存储) */
export function serializeMap(map: MapState): unknown {
  return map;
}

/** 反序列化地图 */
export function deserializeMap(data: unknown): MapState | null {
  if (!data || typeof data !== "object") return null;
  return data as MapState;
}
