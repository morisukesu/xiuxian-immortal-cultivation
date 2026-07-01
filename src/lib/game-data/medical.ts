// 临床医学数据库 - 修仙模拟器 v2.0
// 基于人民卫生出版社《内科学》第10版临床医学数据
// 覆盖：身体成分、骨骼、肌肉、脂肪、水分、血液、生命体征、精细化伤害机制

// ============================================================
// 1. 身体成分模型
// ============================================================
export const BODY_COMPOSITION_MODEL = {
  // 标准成人身体成分比例（WHO数据）
  standardRatios: {
    water: 0.60,      // 水分 60%
    protein: 0.18,    // 蛋白质 18%
    fat: 0.15,        // 脂肪 15%
    mineral: 0.06,    // 矿物质 6%
    carb: 0.01,       // 碳水 1%
  },
  // 体脂率标准（WHO + 中国标准）
  bodyFatStandards: {
    male: {
      essential: { min: 2, max: 5, label: '必需脂肪', desc: '低于此值危及生命' },
      athlete:   { min: 6, max: 13, label: '运动员', desc: '体能极佳' },
      fitness:   { min: 14, max: 17, label: '健康', desc: '身体素质优良' },
      average:   { min: 18, max: 24, label: '普通', desc: '正常范围' },
      obese:     { min: 25, max: 100, label: '肥胖', desc: '需控制体脂' },
    },
    female: {
      essential: { min: 10, max: 13, label: '必需脂肪', desc: '低于此值危及生命' },
      athlete:   { min: 14, max: 20, label: '运动员', desc: '体能极佳' },
      fitness:   { min: 21, max: 24, label: '健康', desc: '身体素质优良' },
      average:   { min: 25, max: 31, label: '普通', desc: '正常范围' },
      obese:     { min: 32, max: 100, label: '肥胖', desc: '需控制体脂' },
    },
  },
  // BMI 标准（WHO + 中国）
  bmiStandards: [
    { range: [0, 18.5], label: '偏瘦', color: '#3498db', desc: '体重过轻，免疫力低下' },
    { range: [18.5, 24], label: '正常', color: '#27ae60', desc: '健康体重范围' },
    { range: [24, 28], label: '超重', color: '#f39c12', desc: '中国标准超重' },
    { range: [28, 32], label: '肥胖', color: '#e67e22', desc: '肥胖症风险增高' },
    { range: [32, 100], label: '重度肥胖', color: '#e74c3c', desc: '严重健康风险' },
  ],
  // BMR 基础代谢率（Mifflin-St Jeor 公式）
  bmrFormula: {
    male: '10*weight + 6.25*height - 5*age + 5',
    female: '10*weight + 6.25*height - 5*age - 161',
    desc: 'Mifflin-St Jeor 公式，比 Harris-Benedict 更准确',
  },
  // 修仙境界对身体成分的修正
  cultivationModifiers: [
    { realm: '凡人', fatMult: 1.0, muscleMult: 1.0, boneMult: 1.0, waterMult: 1.0, desc: '凡人正常比例' },
    { realm: '练气', fatMult: 0.95, muscleMult: 1.05, boneMult: 1.0, waterMult: 1.0, desc: '灵气滋养，脂肪略减' },
    { realm: '筑基', fatMult: 0.85, muscleMult: 1.15, boneMult: 1.1, waterMult: 0.98, desc: '筑基洗髓，肌肉骨骼增强' },
    { realm: '金丹', fatMult: 0.70, muscleMult: 1.3, boneMult: 1.25, waterMult: 0.95, desc: '金丹淬体，脂肪大减' },
    { realm: '元婴', fatMult: 0.50, muscleMult: 1.5, boneMult: 1.5, waterMult: 0.90, desc: '元婴重塑肉身' },
    { realm: '化神', fatMult: 0.35, muscleMult: 1.8, boneMult: 1.8, waterMult: 0.85, desc: '化神之力改造体质' },
    { realm: '合体', fatMult: 0.20, muscleMult: 2.2, boneMult: 2.2, waterMult: 0.80, desc: '体如精钢，近无脂肪' },
    { realm: '大乘', fatMult: 0.10, muscleMult: 2.8, boneMult: 2.8, waterMult: 0.70, desc: '大乘之体，超凡脱俗' },
    { realm: '渡劫', fatMult: 0.05, muscleMult: 3.5, boneMult: 3.5, waterMult: 0.60, desc: '渡劫之体，肉身成圣' },
    { realm: '仙人', fatMult: 0.01, muscleMult: 5.0, boneMult: 5.0, waterMult: 0.50, desc: '仙人之体，几近纯粹灵力' },
  ],
} as const;

// ============================================================
// 2. 骨骼系统（206块骨骼）
// ============================================================
export const SKELETAL_SYSTEM = {
  totalBones: 206,
  regions: {
    skull: { count: 29, name: '颅骨', parts: ['脑颅骨8', '面颅骨15', '听小骨6'], desc: '保护脑组织，构成面部支架' },
    spine: { count: 33, name: '脊柱', parts: ['颈椎7', '胸椎12', '腰椎5', '骶椎5', '尾椎4'], desc: '人体中轴，保护脊髓' },
    thorax: { count: 25, name: '胸廓', parts: ['胸骨1', '肋骨24'], desc: '保护心肺，参与呼吸' },
    upperLimb: { count: 64, name: '上肢', parts: ['肩带4', '自由上肢60'], desc: '手臂灵活操控' },
    lowerLimb: { count: 62, name: '下肢', parts: ['下肢带2', '自由下肢60'], desc: '支撑身体行走' },
  },
  // 骨密度 T 值（WHO 骨质疏松诊断标准）
  boneDensityT: [
    { range: [-1.0, 100], label: '正常', desc: '骨密度正常', combatEffect: null },
    { range: [-2.5, -1.0], label: '骨量减少', desc: '骨量偏低，骨折风险增加', combatEffect: { fractureMult: 1.5, defensePct: -5 } },
    { range: [-100, -2.5], label: '骨质疏松', desc: '骨质严重流失', combatEffect: { fractureMult: 3.0, defensePct: -15 } },
  ],
  // 修仙淬骨阶段
  cultivationBoneStages: [
    { stage: 0, name: '凡骨', density: 80, desc: '凡人骨骼，脆而易折', icon: '🦴' },
    { stage: 1, name: '铜骨', density: 150, desc: '灵气淬炼，硬如铜铁', icon: '🟫' },
    { stage: 2, name: '铁骨', density: 300, desc: '铁骨铮铮，刀剑难伤', icon: '⬛' },
    { stage: 3, name: '银骨', density: 550, desc: '银骨通灵，抗蚀防腐', icon: '⬜' },
    { stage: 4, name: '金骨', density: 900, desc: '金骨璀璨，坚不可摧', icon: '🟨' },
    { stage: 5, name: '玉骨', density: 1400, desc: '玉骨冰肌，灵力内蕴', icon: '🟦' },
    { stage: 6, name: '灵骨', density: 2000, desc: '灵骨通透，与灵气共鸣', icon: '🟪' },
    { stage: 7, name: '仙骨', density: 3000, desc: '仙骨不灭，与天地同寿', icon: '✨' },
  ],
} as const;

// ============================================================
// 3. 肌肉系统（639块骨骼肌）
// ============================================================
export const MUSCULAR_SYSTEM = {
  totalMuscles: 639,
  groups: {
    headNeck: { count: 85, name: '头颈肌群', desc: '面部表情、咀嚼、颈部活动', combatEffect: { atkPct: 5 } },
    trunk: { count: 142, name: '躯干肌群', desc: '胸腹背核心力量', combatEffect: { defPct: 10, atkPct: 10 } },
    upperLimb: { count: 167, name: '上肢肌群', desc: '手臂力量与精细操控', combatEffect: { atkPct: 15, speedPct: 5 } },
    lowerLimb: { count: 245, name: '下肢肌群', desc: '腿部爆发与移动速度', combatEffect: { speedPct: 15, dodgePct: 5 } },
  },
  // 肌纤维类型
  fiberTypes: {
    typeI: { name: '慢缩I型', color: '#e74c3c', desc: '耐力型，抗疲劳，适合持久战', trait: { staminaPct: 20, atkPct: -5 } },
    typeIIa: { name: '快缩IIa型', color: '#f39c12', desc: '均衡型，力量与耐力兼顾', trait: { staminaPct: 0, atkPct: 0 } },
    typeIIx: { name: '快缩IIx型', color: '#3498db', desc: '爆发型，力量大但易疲劳', trait: { staminaPct: -20, atkPct: 15 } },
  },
  // 肌肉损伤分级
  injuryGrades: [
    { grade: 1, name: '轻度拉伤', desc: '肌纤维微小撕裂', healDays: 7, combatEffect: { atkPct: -10 } },
    { grade: 2, name: '中度撕裂', desc: '部分肌纤维断裂', healDays: 21, combatEffect: { atkPct: -30, speedPct: -20 } },
    { grade: 3, name: '重度断裂', desc: '肌肉完全断裂', healDays: 90, combatEffect: { atkPct: -70, speedPct: -50 } },
    { grade: 4, name: '横纹肌溶解', desc: 'CK>5000 U/L，可致急性肾衰竭', healDays: 180, combatEffect: { atkPct: -90, speedPct: -80, organRisk: 'kidney' } },
  ],
} as const;

// ============================================================
// 4. 脂肪系统
// ============================================================
export const ADIPOSE_SYSTEM = {
  types: {
    subcutaneous: { name: '皮下脂肪', desc: '缓冲钝器伤害', combatEffect: { bluntResist: 0.02, per: 0.01 } },
    visceral: { name: '内脏脂肪', desc: '包裹脏器，过多则有害', combatEffect: { organProtect: 0.01, per: 0.01, maxBenefit: 0.15 } },
    brown: { name: '棕色脂肪', desc: '产热抗寒，消耗白色脂肪', combatEffect: { iceResist: 0.03, per: 0.01 } },
    marrow: { name: '骨髓脂肪', desc: '骨髓腔内脂肪，影响造血', combatEffect: { bloodRegenPct: -0.005, per: 0.01 } },
  },
  // 体脂率对战斗的影响
  combatEffects: [
    { range: [0, 5], label: '过低', effect: { bluntResist: 0, organProtect: 0, desc: '几乎无缓冲，钝器伤害全额', debuff: '易受钝器重伤' } },
    { range: [5, 15], label: '最佳', effect: { bluntResist: 0.15, organProtect: 0.10, iceResist: 0.05, desc: '最佳战斗体脂', buff: '伤害缓冲最优' } },
    { range: [15, 25], label: '普通', effect: { bluntResist: 0.20, organProtect: 0.12, iceResist: 0.08, speedPct: -5, desc: '缓冲增加但速度略降' } },
    { range: [25, 100], label: '过高', effect: { bluntResist: 0.25, organProtect: 0.15, iceResist: 0.10, speedPct: -20, atkPct: -10, desc: '缓冲最大但严重影响灵活性' } },
  ],
} as const;

// ============================================================
// 5. 水分系统
// ============================================================
export const HYDRATION_SYSTEM = {
  // 水分分布
  distribution: {
    intracellular: 0.67,  // 细胞内液 67%
    extracellular: 0.33,  // 细胞外液 33%
    extracellularBreakdown: { interstitial: 0.25, plasma: 0.08 },  // 组织间液 + 血浆
  },
  // 脱水分级（基于体重丢失百分比）
  dehydrationGrades: [
    { grade: 0, pct: 0, label: '正常', desc: '水分正常', combatEffect: null },
    { grade: 1, pct: 2, label: '轻度脱水', desc: '口渴、尿量减少', combatEffect: { speedPct: -5, staminaPct: -10 } },
    { grade: 2, pct: 4, label: '中度脱水', desc: '心率加快、皮肤干燥', combatEffect: { speedPct: -15, atkPct: -10, staminaPct: -25 } },
    { grade: 3, pct: 6, label: '重度脱水', desc: '低血压、意识模糊', combatEffect: { speedPct: -30, atkPct: -25, staminaPct: -50, defPct: -15 } },
    { grade: 4, pct: 8, label: '致命脱水', desc: '休克、多器官衰竭', combatEffect: { speedPct: -60, atkPct: -50, staminaPct: -80, defPct: -40, organRisk: 'kidney' } },
  ],
  // 失血量分级
  hemorrhageGrades: [
    { grade: 'I', pct: 0.10, label: 'I级轻度失血', desc: '失血<500ml，代偿良好', combatEffect: null },
    { grade: 'II', pct: 0.20, label: 'II级中度失血', desc: '失血500-1000ml，心率↑', combatEffect: { hrMult: 1.2, atkPct: -5 } },
    { grade: 'III', pct: 0.30, label: 'III级重度失血', desc: '失血1000-1500ml，血压↓', combatEffect: { hrMult: 1.5, bpSystolicDelta: -20, atkPct: -20, speedPct: -15, desc: '低血容量性休克前兆' } },
    { grade: 'IV', pct: 0.40, label: 'IV级致命失血', desc: '失血>1500ml，意识丧失', combatEffect: { hrMult: 1.8, bpSystolicDelta: -40, atkPct: -50, speedPct: -40, shock: 'hypovolemic', desc: '低血容量性休克' } },
  ],
} as const;

// ============================================================
// 6. 精细化伤害机制
// ============================================================
export const DAMAGE_MECHANICS = {
  // 伤害类型 × 身体层穿透比例
  layerPenetration: {
    physical_blunt: { skin: 0.05, fat: 0.15, muscle: 0.30, bone: 0.25, organ: 0.25, desc: '钝器冲击波传导，各层均匀受损' },
    physical_sharp: { skin: 0.03, fat: 0.08, muscle: 0.35, bone: 0.00, organ: 0.54, desc: '利器切透浅层直达肌肉和脏器' },
    physical_pierce: { skin: 0.02, fat: 0.05, muscle: 0.18, bone: 0.05, organ: 0.70, desc: '穿刺穿透所有层直达脏器' },
    fire: { skin: 0.15, fat: 0.25, muscle: 0.30, bone: 0.00, organ: 0.30, desc: '火焰灼烧皮肤脂肪，脂肪层燃烧加剧伤害' },
    ice: { skin: 0.10, fat: 0.05, muscle: 0.20, bone: 0.10, organ: 0.55, desc: '寒冰穿透脂肪（脂肪有保温作用），冻结脏器' },
    thunder: { skin: 0.02, fat: 0.03, muscle: 0.15, bone: 0.00, organ: 0.80, desc: '雷电直透体内，心脏和神经系统首当其冲' },
    poison: { skin: 0.05, fat: 0.05, muscle: 0.10, bone: 0.00, organ: 0.80, desc: '毒素进入血液循环，攻击脏器和神经' },
    spiritual: { skin: 0.00, fat: 0.00, muscle: 0.00, bone: 0.00, organ: 0.00, desc: '精神攻击直接作用于魂魄，无视肉体', special: 'soul_damage' },
  } as const,
  // 部位受伤辐射（伤及某部位后影响的其他部位）
  radiationMap: {
    head: { to: ['brain', 'centralNerve', 'eyes'], delay: 0, desc: '头部受伤→脑/神经' },
    heart: { to: ['wholeBody'], delay: 1, desc: '心脏受损→全身缺血', effect: 'ischemia' },
    lung: { to: ['heart', 'brain'], delay: 2, desc: '肺受损→缺氧→脑/心', effect: 'hypoxia' },
    liver: { to: ['kidney', 'stomach'], delay: 3, desc: '肝受损→毒素蓄积→肾/胃', effect: 'toxin_accumulation' },
    kidney: { to: ['wholeBody'], delay: 4, desc: '肾受损→尿毒症→全身', effect: 'uremia' },
    spleen: { to: ['liver', 'stomach'], delay: 2, desc: '脾破裂→大出血→全身缺血', effect: 'hemorrhage' },
    spine: { to: ['nervousSystem'], delay: 0, desc: '脊柱受损→神经传导中断→瘫痪', effect: 'paralysis' },
  } as const,
  // 伤口愈合4阶段
  healingPhases: [
    { phase: 1, name: '止血期', duration: '数分钟-数小时', desc: '血管收缩→血小板聚集→凝血块形成', modifiable: ['blood_pressure', 'platelet'] },
    { phase: 2, name: '炎症期', duration: '1-5天', desc: '白细胞清除坏死组织，红肿热痛', modifiable: ['immune_system', 'infection_risk'] },
    { phase: 3, name: '增殖期', duration: '5-21天', desc: '成纤维细胞增殖→胶原蛋白沉积→新生血管', modifiable: ['nutrition', 'oxygen_supply'] },
    { phase: 4, name: '重塑期', duration: '21天-2年', desc: '胶原纤维重排→瘢痕成熟→功能恢复', modifiable: ['age', 'mobility'] },
  ] as const,
  // 愈合影响因素
  healingFactors: {
    mortal: [
      { factor: 'age', effect: '年龄每增加10岁，愈合速度↓15%', direction: -1 },
      { factor: 'nutrition', effect: '蛋白质缺乏→胶原合成不足', direction: -1 },
      { factor: 'diabetes', effect: '高血糖→微血管病变→愈合↓40%', direction: -1 },
      { factor: 'immunosuppression', effect: '免疫抑制→感染风险↑', direction: -1 },
      { factor: 'smoking', effect: '尼古丁→血管收缩→缺氧→愈合↓30%', direction: -1 },
    ],
    cultivation: [
      { factor: 'realm', effect: '每提升一个大境界，愈合速度×2', direction: 1 },
      { factor: 'bodyRefine', effect: '淬体等级每+10，愈合+20%', direction: 1 },
      { factor: 'soulPower', effect: '魂魄强度影响细胞再生', direction: 1 },
      { factor: 'qiCirculation', effect: '灵气运转加速代谢和修复', direction: 1 },
    ],
  } as const,
  // 休克机制
  shockTypes: {
    hypovolemic: { name: '低血容量性休克', trigger: '失血>20%或脱水>6%', effect: { bpDelta: -30, hrDelta: 40, consciousness: 'confusion' }, desc: '失血/失液导致回心血量不足' },
    neurogenic: { name: '神经源性休克', trigger: '脊髓/脑干损伤', effect: { bpDelta: -25, hrDelta: -20, consciousness: 'unconscious' }, desc: '神经损伤导致血管张力丧失' },
    septic: { name: '感染性休克', trigger: '开放性伤口感染>24h', effect: { bpDelta: -35, hrDelta: 50, tempDelta: 2.0, consciousness: 'confusion' }, desc: '全身炎症反应→血管扩张→多器官衰竭' },
    anaphylactic: { name: '过敏性休克', trigger: '特定毒素/药物', effect: { bpDelta: -40, hrDelta: 60, consciousness: 'collapse' }, desc: '过敏反应→支气管痉挛→循环衰竭' },
  } as const,
  // 部位受伤战斗 debuff（HP百分比阈值）
  partInjuryThresholds: [
    { threshold: 0.50, label: '轻度受损', effects: { atkPct: -5, defPct: -5 }, desc: '部位HP<50%时' },
    { threshold: 0.20, label: '重度受损', effects: { atkPct: -20, defPct: -20, speedPct: -15 }, desc: '部位HP<20%时' },
    { threshold: 0.00, label: '摧毁', effects: { atkPct: -50, special: 'part_destroyed' }, desc: '部位HP归零' },
  ] as const,
} as const;

// ============================================================
// 7. 生命体征监测
// ============================================================
export const VITAL_SIGNS = {
  // 心率（次/分）
  heartRate: {
    normal: [60, 100],
    bradycardia: { range: [0, 60], label: '心动过缓', desc: '心率<60，可能为运动员正常或传导阻滞' },
    tachycardia: { range: [100, 150], label: '心动过速', desc: '心率>100，失血/疼痛/焦虑代偿' },
    severe: { range: [150, 200], label: '危急心动过速', desc: '心率>150，失血代偿极限' },
    fatal: { range: [200, 999], label: '致命', desc: '心率>200，室颤/心脏骤停风险' },
  },
  // 血压（mmHg）
  bloodPressure: {
    normal: { systolic: [90, 120], diastolic: [60, 80] },
    elevated: { systolic: [120, 139], diastolic: [80, 89], label: '血压偏高' },
    hypertension: { systolic: [140, 180], diastolic: [90, 110], label: '高血压' },
    hypotension: { systolic: [0, 90], diastolic: [0, 60], label: '低血压', desc: '失血/脱水/休克' },
    crisis: { systolic: [180, 999], diastolic: [110, 999], label: '高血压危象' },
  },
  // 呼吸频率（次/分）
  respiratoryRate: {
    normal: [12, 20],
    bradypnea: { range: [0, 12], label: '呼吸过缓', desc: '脑干受压/阿片类中毒' },
    tachypnea: { range: [20, 30], label: '呼吸过速', desc: '缺氧/疼痛/发热代偿' },
    severe: { range: [30, 999], label: '危急', desc: 'ARDS/严重酸中毒代偿' },
  },
  // 体温（°C）
  temperature: {
    normal: [36.1, 37.2],
    hypothermia_mild: { range: [32, 36.1], label: '轻度低温', desc: '寒战、代谢减慢' },
    hypothermia_severe: { range: [0, 32], label: '重度低温', desc: '意识丧失、心律失常' },
    fever_low: { range: [37.2, 38.5], label: '低热', desc: '炎症反应/感染早期' },
    fever_high: { range: [38.5, 40], label: '高热', desc: '严重感染/组织坏死' },
    fever_hyper: { range: [40, 999], label: '超高热', desc: '热射病/中枢性高热，致命' },
  },
  // 血氧饱和度（SpO2 %）
  oxygenSaturation: {
    normal: [95, 100],
    mild_hypoxia: { range: [90, 94], label: '轻度缺氧', desc: '肺功能下降/高原', effect: { atkPct: -5 } },
    moderate_hypoxia: { range: [85, 89], label: '中度缺氧', desc: '呼吸衰竭', effect: { atkPct: -15, speedPct: -10 } },
    severe_hypoxia: { range: [75, 84], label: '重度缺氧', desc: 'ARDS/窒息', effect: { atkPct: -35, speedPct: -30, consciousness: 'confused' } },
    fatal_hypoxia: { range: [0, 74], label: '致命缺氧', desc: '脑损伤/心脏骤停', effect: { consciousness: 'unconscious', organRisk: 'brain' } },
  },
  // 灵力饱和度（修仙特有）
  qiSaturation: {
    normal: [80, 100],
    low: { range: [50, 79], label: '灵力不足', desc: '灵力偏低', effect: { skillPowerPct: -20 } },
    depleted: { range: [20, 49], label: '灵力枯竭', desc: '难以施展法术', effect: { skillPowerPct: -50, castFailRate: 0.3 } },
    exhausted: { range: [0, 19], label: '灵力耗尽', desc: '无法施法', effect: { skillPowerPct: -100, castFailRate: 1.0 } },
  },
} as const;

// ============================================================
// 8. 血液系统
// ============================================================
export const BLOOD_SYSTEM = {
  // 血液成分
  composition: {
    plasma: 0.55,       // 血浆 55%
    rbc: 0.44,          // 红细胞 44%
    wbc: 0.005,         // 白细胞 0.5%
    platelet: 0.005,    // 血小板 0.5%
  },
  // 总血量（ml/kg）
  bloodVolume: { male: 75, female: 65, desc: '男性约75ml/kg，女性约65ml/kg' },
  // 失血代偿机制（4级）
  compensation: [
    { grade: 'I', pct: 0.10, label: '代偿期', desc: '失血<10%，交感神经兴奋代偿', vital: { hrDelta: 10, bpDelta: 0 } },
    { grade: 'II', pct: 0.20, label: '部分代偿', desc: '失血10-20%，心率↑血压略↓', vital: { hrDelta: 25, bpDelta: -10 } },
    { grade: 'III', pct: 0.30, label: '失代偿', desc: '失血20-30%，组织灌注不足', vital: { hrDelta: 45, bpDelta: -25, consciousness: 'anxious' } },
    { grade: 'IV', pct: 0.40, label: '不可逆', desc: '失血>40%，多器官衰竭', vital: { hrDelta: 70, bpDelta: -45, consciousness: 'coma' } },
  ],
  // 修仙血液进化
  cultivationBloodStages: [
    { stage: 0, name: '凡血', desc: '凡人血液，含杂质', qiContent: 0, regen: 1.0, icon: '🩸' },
    { stage: 1, name: '灵血', desc: '灵气融入血液，携灵量增', qiContent: 10, regen: 1.5, icon: '🔴' },
    { stage: 2, name: '基血', desc: '筑基后血液质变', qiContent: 30, regen: 2.0, icon: '🟠' },
    { stage: 3, name: '金血', desc: '金丹之力灌注', qiContent: 60, regen: 3.0, icon: '🟡' },
    { stage: 4, name: '婴血', desc: '元婴之血，自愈极快', qiContent: 100, regen: 5.0, icon: '🟢' },
    { stage: 5, name: '神血', desc: '化神之血，灵力充沛', qiContent: 200, regen: 8.0, icon: '🔵' },
    { stage: 6, name: '仙血', desc: '仙人之血，一滴可重生', qiContent: 500, regen: 20.0, icon: '✨' },
  ],
} as const;

// ============================================================
// 默认值生成函数
// ============================================================
export function defaultBodyComposition(weight = 70, height = 175) {
  const bmi = weight / Math.pow(height / 100, 2);
  return {
    weight,
    height,
    bmi: Math.round(bmi * 10) / 10,
    bodyFatPct: 18,      // 18% 正常体脂
    muscleMass: 30,      // 30kg 骨骼肌
    boneMass: 12,        // 12kg 骨骼
    waterPct: 60,        // 60% 水分
    bloodVolume: 5250,   // ml (75ml/kg × 70kg)
    basalMetabolicRate: 1680, // kcal/day (Mifflin-St Jeor)
  };
}

export function defaultVitalSigns() {
  return {
    heartRate: 75,
    bloodPressureSystolic: 118,
    bloodPressureDiastolic: 76,
    respiratoryRate: 16,
    temperature: 36.8,
    oxygenSaturation: 98,
    qiSaturation: 100,
  };
}

export function defaultBloodStatus() {
  return {
    bloodType: '凡血',
    bloodStage: 0,
    totalVolume: 5250,
    currentVolume: 5250,
    plasmaPct: 55,
    rbcCount: 5.0,       // ×10^12/L
    wbcCount: 7.0,       // ×10^9/L
    plateletCount: 250,  // ×10^9/L
    hemoglobin: 150,     // g/L
    bleedingRate: 0,     // ml/min
    toxinLevel: 0,       // 0-100
  };
}
