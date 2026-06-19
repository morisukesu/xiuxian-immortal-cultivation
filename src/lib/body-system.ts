// ============================================================
// 修仙模拟器 — 身体经络系统
// ============================================================

/** 身体部位 */
export type BodyPart =
  | "head"        // 头部
  | "chest"       // 胸部
  | "abdomen"     // 腹部 (丹田所在)
  | "leftArm"     // 左臂
  | "rightArm"    // 右臂
  | "leftLeg"     // 左腿
  | "rightLeg";   // 右腿

/** 部位状态 */
export type PartCondition = "healthy" | "injured" | "broken" | "numb";

/** 身体部位详情 */
export interface BodyPartInfo {
  id: BodyPart;
  name: string;
  description: string;
  hp: number;         // 当前耐久
  maxHp: number;      // 最大耐久
  condition: PartCondition;
  meridianCount: number;  // 经络数量
  acupointCount: number;  // 穴位数量
}

/** 经络状态 */
export interface Meridian {
  name: string;
  isOpened: boolean;  // 是否打通
  flowRate: number;   // 灵气流量 0-100
  blockage: number;   // 堵塞程度 0-100
}

/** 穴位状态 */
export interface Acupoint {
  name: string;
  isActivated: boolean;  // 是否激活
  storage: number;       // 灵力存储 0-100
  maxStorage: number;
}

/** 身体系统完整状态 */
export interface BodySystemState {
  parts: Record<BodyPart, BodyPartInfo>;
  meridians: Meridian[];
  acupoints: Acupoint[];
  overallToughness: number;  // 整体坚韧度 0-100
  injuryPenalty: number;     // 伤势惩罚 0-1 (影响修炼速度)
}

// ============================================================
// 初始数据
// ============================================================

const INITIAL_PARTS: Record<BodyPart, Omit<BodyPartInfo, "hp" | "condition">> = {
  head: {
    id: "head",
    name: "头部",
    description: "神识所在，泥丸宫居于此处",
    maxHp: 100,
    meridianCount: 12,
    acupointCount: 8,
  },
  chest: {
    id: "chest",
    name: "胸部",
    description: "心肺所在，气血运行之枢",
    maxHp: 120,
    meridianCount: 8,
    acupointCount: 6,
  },
  abdomen: {
    id: "abdomen",
    name: "腹部",
    description: "丹田所在，灵力汇聚之地",
    maxHp: 150,
    meridianCount: 16,
    acupointCount: 12,
  },
  leftArm: {
    id: "leftArm",
    name: "左臂",
    description: "左手经脉所系，施法御器之用",
    maxHp: 80,
    meridianCount: 6,
    acupointCount: 4,
  },
  rightArm: {
    id: "rightArm",
    name: "右臂",
    description: "右手经脉所系，施法御器之用",
    maxHp: 80,
    meridianCount: 6,
    acupointCount: 4,
  },
  leftLeg: {
    id: "leftLeg",
    name: "左腿",
    description: "左足经脉所系，身法移动之基",
    maxHp: 90,
    meridianCount: 6,
    acupointCount: 5,
  },
  rightLeg: {
    id: "rightLeg",
    name: "右腿",
    description: "右足经脉所系，身法移动之基",
    maxHp: 90,
    meridianCount: 6,
    acupointCount: 5,
  },
};

/** 主要经络 */
const MAIN_MERIDIANS = [
  "手太阴肺经", "手阳明大肠经", "足阳明胃经", "足太阴脾经",
  "手少阴心经", "手太阳小肠经", "足太阳膀胱经", "足少阴肾经",
  "手厥阴心包经", "手少阳三焦经", "足少阳胆经", "足厥阴肝经",
  "任脉", "督脉",
];

/** 主要穴位 */
const MAIN_ACUPOINTS = [
  "百会", "印堂", "膻中", "气海", "关元", "神阙",
  "命门", "涌泉", "劳宫", "合谷", "足三里", "三阴交",
];

// ============================================================
// 辅助函数
// ============================================================

/** 创建初始身体状态 */
export function createInitialBodyState(): BodySystemState {
  const parts = {} as Record<BodyPart, BodyPartInfo>;
  
  (Object.keys(INITIAL_PARTS) as BodyPart[]).forEach((partId) => {
    const base = INITIAL_PARTS[partId];
    parts[partId] = {
      ...base,
      hp: base.maxHp,
      condition: "healthy",
    };
  });

  const meridians = MAIN_MERIDIANS.map((name) => ({
    name,
    isOpened: false,
    flowRate: 0,
    blockage: 100,
  }));

  const acupoints = MAIN_ACUPOINTS.map((name) => ({
    name,
    isActivated: false,
    storage: 0,
    maxStorage: 100,
  }));

  return {
    parts,
    meridians,
    acupoints,
    overallToughness: 50,
    injuryPenalty: 0,
  };
}

/** 计算部位状态 */
export function calculatePartCondition(hp: number, maxHp: number): PartCondition {
  const ratio = hp / maxHp;
  if (ratio >= 0.8) return "healthy";
  if (ratio >= 0.5) return "injured";
  if (ratio >= 0.1) return "broken";
  return "numb";
}

/** 更新部位 HP */
export function updatePartHp(
  state: BodySystemState,
  partId: BodyPart,
  delta: number
): BodySystemState {
  const part = state.parts[partId];
  if (!part) return state;

  const newHp = Math.max(0, Math.min(part.maxHp, part.hp + delta));
  part.hp = newHp;
  part.condition = calculatePartCondition(newHp, part.maxHp);

  // 重新计算整体伤势惩罚
  let totalInjury = 0;
  Object.values(state.parts).forEach((p) => {
    const injuryRatio = 1 - p.hp / p.maxHp;
    totalInjury += injuryRatio * (p.maxHp / 710); // 710 是总 HP
  });
  state.injuryPenalty = Math.min(1, totalInjury);

  return state;
}

/** 治疗部位 */
export function healPart(
  state: BodySystemState,
  partId: BodyPart,
  amount: number
): BodySystemState {
  return updatePartHp(state, partId, amount);
}

/** 打通经络 */
export function openMeridian(
  state: BodySystemState,
  meridianIndex: number
): BodySystemState {
  const meridian = state.meridians[meridianIndex];
  if (!meridian || meridian.isOpened) return state;

  meridian.isOpened = true;
  meridian.blockage = 0;
  meridian.flowRate = 100;

  // 打通经络提升整体坚韧度
  state.overallToughness = Math.min(100, state.overallToughness + 2);

  return state;
}

/** 激活穴位 */
export function activateAcupoint(
  state: BodySystemState,
  acupointIndex: number
): BodySystemState {
  const acupoint = state.acupoints[acupointIndex];
  if (!acupoint || acupoint.isActivated) return state;

  acupoint.isActivated = true;
  acupoint.storage = acupoint.maxStorage;

  // 激活穴位提升灵力存储
  state.overallToughness = Math.min(100, state.overallToughness + 1);

  return state;
}

/** 获取修炼速度加成 (基于身体状态) */
export function getCultivationSpeedBonus(state: BodySystemState): number {
  // 伤势惩罚
  const injuryPenalty = state.injuryPenalty;
  
  // 经络加成 (每打通一条 +3%)
  const openedMeridians = state.meridians.filter((m) => m.isOpened).length;
  const meridianBonus = openedMeridians * 0.03;

  // 穴位加成 (每激活一个 +1%)
  const activatedAcupoints = state.acupoints.filter((a) => a.isActivated).length;
  const acupointBonus = activatedAcupoints * 0.01;

  // 坚韧度加成 (每点 +0.5%)
  const toughnessBonus = state.overallToughness * 0.005;

  return 1 - injuryPenalty + meridianBonus + acupointBonus + toughnessBonus;
}

/** 序列化身体状态 (用于存储) */
export function serializeBodyState(state: BodySystemState): unknown {
  return {
    parts: state.parts,
    meridians: state.meridians,
    acupoints: state.acupoints,
    overallToughness: state.overallToughness,
    injuryPenalty: state.injuryPenalty,
  };
}

/** 反序列化身体状态 */
export function deserializeBodyState(data: unknown): BodySystemState {
  const defaults = createInitialBodyState();
  if (!data || typeof data !== "object") return defaults;

  const obj = data as Record<string, unknown>;
  return {
    parts: (obj.parts as Record<BodyPart, BodyPartInfo>) || defaults.parts,
    meridians: (obj.meridians as Meridian[]) || defaults.meridians,
    acupoints: (obj.acupoints as Acupoint[]) || defaults.acupoints,
    overallToughness: (obj.overallToughness as number) || defaults.overallToughness,
    injuryPenalty: (obj.injuryPenalty as number) || defaults.injuryPenalty,
  };
}
