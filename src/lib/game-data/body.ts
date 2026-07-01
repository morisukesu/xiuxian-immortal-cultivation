// 身体系统 - 经脉+神经+器官+三魂七魄
// 从 v0.35 迁移 - 共 18 个常量

export const BODY_PART_BONUS_MAP: any = {
  head:     { desc: '魂力上限', perLevel: 3, stat: 'maxSoulPower' },
  torso:    { desc: '气血上限', perLevel: 25, stat: 'maxHp' },
  leftArm:  { desc: '攻击力', perLevel: 2, stat: 'atk' },
  rightArm: { desc: '攻击力', perLevel: 2, stat: 'atk' },
  leftLeg:  { desc: '防御力', perLevel: 2, stat: 'def' },
  rightLeg: { desc: '防御力', perLevel: 2, stat: 'def' },
  heart:    { desc: '气血回复', perLevel: 0.5, stat: 'hpRegen' },
  liver:    { desc: '毒素抗性', perLevel: 2, stat: 'poisonRes' },
  spleen:   { desc: '灵力上限', perLevel: 8, stat: 'maxMp' },
  lung:     { desc: '灵气吸收', perLevel: 0.8, stat: 'mpRegen' },
  kidney:   { desc: '生命力', perLevel: 5, stat: 'maxHp' },
  gallbladder: { desc: '暴击率', perLevel: 0.3, stat: 'critRate' },
  stomach:  { desc: '丹药效果', perLevel: 0.5, stat: 'pillEff' },
  smallIntestine: { desc: '灵力回复', perLevel: 0.3, stat: 'mpRegen' },
  largeIntestine: { desc: '排毒能力', perLevel: 1, stat: 'detox' },
  bladder:  { desc: '水行抗性', perLevel: 1, stat: 'waterRes' },
  sanjiao:  { desc: '全属性', perLevel: 0.2, stat: 'allStat' },
  meridians: { desc: '灵力上限', perLevel: 12, stat: 'maxMp' },
  muscles:  { desc: '攻击力', perLevel: 3, stat: 'atk' },
  skin:     { desc: '防御力', perLevel: 3, stat: 'def' },
  bones:    { desc: '气血上限', perLevel: 20, stat: 'maxHp' },
  boneMarrow: { desc: '生命恢复', perLevel: 0.4, stat: 'hpRegen' },
  brain:    { desc: '悟性/经验', perLevel: 0.2, stat: 'expRate' },
  dantian:  { desc: '灵力容量', perLevel: 15, stat: 'maxMp' },
  foundation: { desc: '突破概率', perLevel: 0.15, stat: 'breakRate' },
  spiritualRoot: { desc: '修炼速度', perLevel: 0.25, stat: 'expRate' },

  centralNerve: { desc: '信息处理', perLevel: 0.3, stat: 'expRate' },
  peripheralNerve: { desc: '反应速度', perLevel: 0.5, stat: 'dodgeRate' },
  motorNerve: { desc: '攻击速度', perLevel: 1.5, stat: 'atk' },
  sensoryNerve: { desc: '感知范围', perLevel: 0.3, stat: 'critRate' },
  synapse: { desc: '灵力流转', perLevel: 5, stat: 'maxMp' },
};

export const BODY_PART_MEDICAL: any = {
  head:     { lethality: 0.95, vitalOrgan: true, bloodSupply: 'extreme', nerves: 'extreme', desc: '大脑为中枢神经系统核心，颅内出血可在数分钟内致命；脑干控制呼吸心跳', criticalZones: ['脑干', '大脑皮层', '小脑'], mortalityNote: '脑干损伤致死率接近100%' },
  torso:     { lethality: 0.85, vitalOrgan: true, bloodSupply: 'high', nerves: 'high', desc: '胸腔含心肺，腹腔含肝脾胃肠；穿透伤可致大出血、气胸、脏器破裂', criticalZones: ['心脏', '主动脉', '肝脏', '脾脏'], mortalityNote: '主动脉破裂可在2分钟内失血致死' },
  leftArm:   { lethality: 0.15, vitalOrgan: false, bloodSupply: 'moderate', nerves: 'moderate', desc: '肱动脉受损可致大量失血，但通常不致命', criticalZones: ['肱动脉', '桡神经'], mortalityNote: '单臂损伤极少致命' },
  rightArm:  { lethality: 0.15, vitalOrgan: false, bloodSupply: 'moderate', nerves: 'moderate', desc: '同左臂，优势手受伤影响战斗力更大', criticalZones: ['肱动脉', '正中神经'], mortalityNote: '同左臂' },
  leftLeg:   { lethality: 0.25, vitalOrgan: false, bloodSupply: 'high', nerves: 'moderate', desc: '股动脉为人体最大外周动脉，断裂后可在数分钟内失血2000ml以上致死', criticalZones: ['股动脉', '股神经', '腘动脉'], mortalityNote: '股动脉断裂致死率约30-50%' },
  rightLeg:  { lethality: 0.25, vitalOrgan: false, bloodSupply: 'high', nerves: 'moderate', desc: '同左腿', criticalZones: ['股动脉', '坐骨神经'], mortalityNote: '同左腿' },
  heart:     { lethality: 0.98, vitalOrgan: true, bloodSupply: 'extreme', nerves: 'extreme', desc: '心脏为血液循环动力源，心包填塞可在数分钟内致命', criticalZones: ['左心室', '冠状动脉', '心包'], mortalityNote: '心脏穿透伤院前死亡率>80%' },
  liver:     { lethality: 0.75, vitalOrgan: true, bloodSupply: 'extreme', nerves: 'moderate', desc: '肝脏血供极为丰富，破裂后可快速失血致死', criticalZones: ['肝门', '肝静脉'], mortalityNote: 'III级以上肝破裂死亡率约50%' },
  spleen:    { lethality: 0.60, vitalOrgan: true, bloodSupply: 'high', nerves: 'low', desc: '脾脏血供丰富，外伤极易破裂出血', criticalZones: ['脾门', '脾蒂'], mortalityNote: '脾破裂如不手术，死亡率约25-30%' },
  lung:      { lethality: 0.80, vitalOrgan: true, bloodSupply: 'high', nerves: 'moderate', desc: '双肺负责气体交换；气胸可在数分钟内致命', criticalZones: ['肺门', '主支气管'], mortalityNote: '张力性气胸可在数分钟内致死' },
  kidney:    { lethality: 0.45, vitalOrgan: true, bloodSupply: 'high', nerves: 'moderate', desc: '肾蒂血管丰富，损伤可致大量腹膜后出血；但有两颗肾可代偿', criticalZones: ['肾蒂', '肾盂'], mortalityNote: '单侧肾损伤极少致命' },
  gallbladder: { lethality: 0.20, vitalOrgan: false, bloodSupply: 'low', nerves: 'low', desc: '胆囊储存胆汁，破裂可致胆汁性腹膜炎', criticalZones: ['胆囊颈'], mortalityNote: '胆囊损伤极少直接致命' },
  stomach:     { lethality: 0.25, vitalOrgan: false, bloodSupply: 'moderate', nerves: 'moderate', desc: '胃酸具有强腐蚀性，穿孔可致腹膜炎', criticalZones: ['胃左动脉', '贲门'], mortalityNote: '胃穿孔如不治疗可致感染性休克' },
  smallIntestine: { lethality: 0.20, vitalOrgan: false, bloodSupply: 'moderate', nerves: 'low', desc: '小肠为营养吸收主要场所；穿孔致肠内容物外溢引发腹膜炎', criticalZones: ['肠系膜上动脉'], mortalityNote: '肠系膜血管损伤可致肠坏死' },
  largeIntestine: { lethality: 0.15, vitalOrgan: false, bloodSupply: 'low', nerves: 'low', desc: '大肠含大量细菌，穿孔可致严重腹腔感染', criticalZones: ['结肠中动脉'], mortalityNote: '结肠穿孔感染致死率较高但非即刻' },
  bladder:       { lethality: 0.10, vitalOrgan: false, bloodSupply: 'low', nerves: 'low', desc: '膀胱充盈时易破裂，尿液外渗致腹膜炎', criticalZones: ['膀胱颈'], mortalityNote: '膀胱破裂极少直接致命' },
  sanjiao:       { lethality: 0.15, vitalOrgan: false, bloodSupply: 'low', nerves: 'low', desc: '三焦为中医概念，对应胸腹腔功能分区', criticalZones: [], mortalityNote: '中医概念，对应实际脏器损伤' },
  brain:      { lethality: 0.99, vitalOrgan: true, bloodSupply: 'extreme', nerves: 'extreme', desc: '大脑为意识和生命中枢；颅内压升高可致脑疝压迫脑干致死', criticalZones: ['脑干', '丘脑', '脑桥'], mortalityNote: '脑疝形成后致死率极高' },
  meridians:  { lethality: 0.10, vitalOrgan: false, bloodSupply: 'none', nerves: 'extreme', desc: '经脉为灵气运行通道（修仙概念），阻塞致修炼停滞', criticalZones: [], mortalityNote: '非实体器官，阻塞影响修炼但不直接致命' },
  muscles:    { lethality: 0.05, vitalOrgan: false, bloodSupply: 'moderate', nerves: 'moderate', desc: '肌肉组织，损伤致力量下降；横纹肌溶解可致急性肾衰竭', criticalZones: ['肌腱附着点'], mortalityNote: '单纯肌肉损伤极少致命' },
  skin:       { lethality: 0.03, vitalOrgan: false, bloodSupply: 'moderate', nerves: 'high', desc: '皮肤为人体最大器官，烧伤面积>30%可致命', criticalZones: [], mortalityNote: '大面积烧伤致死率高但非即刻' },
  bones:      { lethality: 0.08, vitalOrgan: false, bloodSupply: 'low', nerves: 'low', desc: '骨骼支撑和保护作用；骨盆骨折可致大量内出血', criticalZones: ['骨盆', '脊柱'], mortalityNote: '骨盆骨折失血致死率约10%' },
  boneMarrow: { lethality: 0.12, vitalOrgan: false, bloodSupply: 'high', nerves: 'low', desc: '骨髓负责造血；损伤致贫血、免疫低下', criticalZones: ['红骨髓'], mortalityNote: '慢性致死而非即刻' },
  dantian: { lethality: 0.5, vitalOrgan: true, bloodSupply: 'none', nerves: 'extreme', desc: '丹田为储存灵力之所（修仙概念），破碎后灵力无法储存', criticalZones: ['丹核'], mortalityNote: '丹田破碎导致灵力归零，修为大降', irreversible: true },
  foundation: { lethality: 0.4, vitalOrgan: true, bloodSupply: 'none', nerves: 'extreme', desc: '根基为修炼之基（修仙概念），崩塌后突破概率大降', criticalZones: ['道基'], mortalityNote: '根基崩塌导致突破成功率归零', irreversible: true },
  spiritualRoot: { lethality: 0.45, vitalOrgan: true, bloodSupply: 'none', nerves: 'extreme', desc: '灵根为感应天地灵气之源（修仙概念），枯萎后修炼速度暴跌', criticalZones: ['灵核'], mortalityNote: '灵根枯萎导致修炼速度接近零', irreversible: true },
};

export const BODY_REFINE_STAGES: any = [
  { name: '凡体淬炼', minLevel: 0, maxLevel: 9, desc: '以凡俗之法锤炼肉身，打熬筋骨', hpMult: 0.05, atkBonus: 2, defBonus: 3, icon: '🏋️' },
  { name: '铜皮铁骨', minLevel: 10, maxLevel: 19, desc: '皮如铜铸，骨似铁打，寻常刀剑难伤', hpMult: 0.08, atkBonus: 4, defBonus: 6, icon: '🪨' },
  { name: '金刚不坏', minLevel: 20, maxLevel: 29, desc: '身如金刚，万法不侵，肉身可抗法宝', hpMult: 0.12, atkBonus: 7, defBonus: 10, icon: '💎' },
  { name: '龙象之力', minLevel: 30, maxLevel: 44, desc: '一拳碎山河，一脚裂大地，力可搬山', hpMult: 0.15, atkBonus: 12, defBonus: 15, icon: '🐉' },
  { name: '不灭金身', minLevel: 45, maxLevel: 59, desc: '金身不灭，万劫不磨，肉身成圣', hpMult: 0.2, atkBonus: 18, defBonus: 22, icon: '✨' },
  { name: '混沌体魄', minLevel: 60, maxLevel: 79, desc: '以混沌之力淬体，超越天地法则束缚', hpMult: 0.25, atkBonus: 25, defBonus: 30, icon: '🌀' },
  { name: '大道圣体', minLevel: 80, maxLevel: 99, desc: '肉身蕴含大道，举手投足皆是天威', hpMult: 0.3, atkBonus: 35, defBonus: 40, icon: '🌟' },
  { name: '万劫不朽', minLevel: 100, maxLevel: 999, desc: '超脱天地，肉身永恒不朽，与天地同寿', hpMult: 0.4, atkBonus: 50, defBonus: 55, icon: '♾️' },
];

export const BODY_DIAGRAM_H: any = 160;

export const BODY_DIAGRAM_W: any = 120;

export const BODY_RADIATION_MAP: any = {
  head:       ['brain','torso','skin'],
  torso:      ['heart','lung','liver','spleen','stomach','leftArm','rightArm','leftLeg','rightLeg','skin','muscles'],
  leftArm:    ['torso','muscles','bones','skin'],
  rightArm:   ['torso','muscles','bones','skin'],
  leftLeg:    ['torso','bones','muscles','skin'],
  rightLeg:   ['torso','bones','muscles','skin'],
  heart:      ['torso','lung','meridians'],
  liver:      ['torso','spleen','stomach','gallbladder'],
  spleen:     ['torso','liver','stomach'],
  lung:       ['torso','heart','skin'],
  kidney:     ['torso','bladder','boneMarrow'],
  gallbladder:['liver','stomach'],
  stomach:    ['torso','spleen','smallIntestine'],
  smallIntestine:['stomach','largeIntestine'],
  largeIntestine:['smallIntestine','bladder'],
  bladder:    ['kidney','largeIntestine'],
  sanjiao:    ['torso','meridians'],
  brain:      ['head','meridians','boneMarrow'],
  meridians:  ['dantian','foundation','spiritualRoot','brain','heart'],
  muscles:    ['bones','skin','torso','leftArm','rightArm','leftLeg','rightLeg'],
  skin:       ['head','torso','leftArm','rightArm','leftLeg','rightLeg','muscles'],
  bones:      ['boneMarrow','muscles','leftArm','rightArm','leftLeg','rightLeg'],
  boneMarrow: ['bones','brain','kidney'],
  dantian:    ['meridians','foundation','spiritualRoot','torso'],
  foundation: ['dantian','meridians','spiritualRoot','brain'],
  spiritualRoot:['dantian','foundation','meridians','brain'],
};

export const RADIATION_MAP: any = {

  body:   [['heart',0.15],['lung',0.12],['liver',0.12],['spleen',0.08],['stomach',0.10],['intestine',0.08],['spine',0.10]],
  torso:  [['heart',0.15],['lung',0.12],['liver',0.12],['spleen',0.08],['stomach',0.10],['intestine',0.08],['spine',0.10]],
  thorax: [['heart',0.18],['lung',0.15],['spine',0.08]],
  abdomen:[['liver',0.12],['spleen',0.10],['stomach',0.12],['intestine',0.15],['kidney',0.08]],
  head:   [['brain',0.20]],
  leg_l:  [['spine',0.05]],
  leg_r:  [['spine',0.05]],
  arm_l:  [['lung',0.05],['heart',0.03]],
  arm_r:  [['lung',0.05],['heart',0.03]],

  scale:  [['heart',0.05],['lung',0.05],['meridian',0.05]],
  wing:   [['lung',0.08]],
  tail:   [['spine_cord',0.06],['meridian',0.05]],
  claw:   [],

  trunk:  [['core',0.10],['sap',0.12]],
  branch: [['trunk',0.08]],
  leaf:   [['trunk',0.05]],
  flower: [['core',0.08]],

  shell:  [['thorax',0.06],['abdomen',0.06]],
  leg:    [['thorax',0.05]],
  stinger:[['venom',0.10]],
  };

export const IRREVERSIBLE_PARTS: any = {
  dantian: {
  key: 'dantian', name: '丹田', icon: '🌀',
  desc: '储存灵力之所，损伤后灵力容量永久下降',
  maxHp: 200, category: 'core',

  canHeal: (state) => state.realmIndex >= 36, // 散仙一转后可修复
  healDesc: '凝聚仙体后方可修复丹田损伤',
  statPenalty: (dmgPct) => ({ maxMp: -Math.floor(dmgPct * 50), mpRegen: -Math.floor(dmgPct * 30) }),
  damageSources: ['强行突破失败', '灵气暴走', '天劫雷击', '被人废功'],
  },
  foundation: {
  key: 'foundation', name: '根基', icon: '🏗️',
  desc: '修炼之根基，损伤后突破成功率永久下降',
  maxHp: 180, category: 'core',
  canHeal: (state) => state.realmIndex >= 36,
  healDesc: '凝聚仙体后方可修复根基损伤',
  statPenalty: (dmgPct) => ({ breakthroughRate: -Math.floor(dmgPct * 40), expRate: -Math.floor(dmgPct * 20) }),
  damageSources: ['强行突破失败', '走火入魔', '道基受损累积', '天劫反噬'],
  },
  spiritualRoot: {
  key: 'spiritualRoot', name: '灵根', icon: '🌿',
  desc: '天地灵气感应之源，损伤后修炼速度永久下降',
  maxHp: 150, category: 'core',
  canHeal: (state) => state.realmIndex >= 36,
  healDesc: '凝聚仙体后方可修复灵根损伤',
  statPenalty: (dmgPct) => ({ expRate: -Math.floor(dmgPct * 60), goldRate: -Math.floor(dmgPct * 15) }),
  damageSources: ['灵根冲突', '吸收异属性灵气', '天劫震碎灵根', '被人挖根'],
  },
};

export const MERIDIAN_SYSTEM: any = {
  // 12正经 + 任督二脉，每经4个关键穴位
  channels: [
    // ---- 外劲（realm 0）：手太阴肺经 + 手阳明大肠经 ----
    {id:'fei_L',name:'手太阴肺经',side:'left',realm:0,icon:'🫁',
     acupoints:[
       {id:'fei_L_1',name:'中府',x:72,y:38,desc:'肺之募穴，清宣肺气'},
       {id:'fei_L_2',name:'尺泽',x:62,y:62,desc:'肺经合穴，调理肺气'},
       {id:'fei_L_3',name:'列缺',x:58,y:78,desc:'络穴，宣肺解表'},
       {id:'fei_L_4',name:'少商',x:52,y:96,desc:'井穴，清肺利咽'}
     ]},
    {id:'fei_R',name:'手太阴肺经',side:'right',realm:0,icon:'🫁',
     acupoints:[
       {id:'fei_R_1',name:'中府',x:128,y:38,desc:'肺之募穴，清宣肺气'},
       {id:'fei_R_2',name:'尺泽',x:138,y:62,desc:'肺经合穴，调理肺气'},
       {id:'fei_R_3',name:'列缺',x:142,y:78,desc:'络穴，宣肺解表'},
       {id:'fei_R_4',name:'少商',x:148,y:96,desc:'井穴，清肺利咽'}
     ]},
    {id:'dachang_L',name:'手阳明大肠经',side:'left',realm:0,icon:'🫁',
     acupoints:[
       {id:'dachang_L_1',name:'商阳',x:50,y:98,desc:'井穴，清热利咽'},
       {id:'dachang_L_2',name:'合谷',x:55,y:82,desc:'原穴，通经活络'},
       {id:'dachang_L_3',name:'曲池',x:58,y:60,desc:'合穴，清热解表'},
       {id:'dachang_L_4',name:'迎香',x:82,y:15,desc:'通鼻窍，散风热'}
     ]},
    {id:'dachang_R',name:'手阳明大肠经',side:'right',realm:0,icon:'🫁',
     acupoints:[
       {id:'dachang_R_1',name:'商阳',x:150,y:98,desc:'井穴，清热利咽'},
       {id:'dachang_R_2',name:'合谷',x:145,y:82,desc:'原穴，通经活络'},
       {id:'dachang_R_3',name:'曲池',x:142,y:60,desc:'合穴，清热解表'},
       {id:'dachang_R_4',name:'迎香',x:118,y:15,desc:'通鼻窍，散风热'}
     ]},

    // ---- 暗劲（realm 1）：足阳明胃经 + 足太阴脾经 ----
    {id:'wei_L',name:'足阳明胃经',side:'left',realm:1,icon:'🫁',
     acupoints:[
       {id:'wei_L_1',name:'承泣',x:86,y:13,desc:'明目，散风热'},
       {id:'wei_L_2',name:'天枢',x:80,y:48,desc:'大肠募穴，调理肠胃'},
       {id:'wei_L_3',name:'足三里',x:82,y:72,desc:'合穴，强壮要穴'},
       {id:'wei_L_4',name:'厉兑',x:84,y:98,desc:'井穴，清胃热'}
     ]},
    {id:'wei_R',name:'足阳明胃经',side:'right',realm:1,icon:'🫁',
     acupoints:[
       {id:'wei_R_1',name:'承泣',x:114,y:13,desc:'明目，散风热'},
       {id:'wei_R_2',name:'天枢',x:120,y:48,desc:'大肠募穴，调理肠胃'},
       {id:'wei_R_3',name:'足三里',x:118,y:72,desc:'合穴，强壮要穴'},
       {id:'wei_R_4',name:'厉兑',x:116,y:98,desc:'井穴，清胃热'}
     ]},
    {id:'pi_L',name:'足太阴脾经',side:'left',realm:1,icon:'🫁',
     acupoints:[
       {id:'pi_L_1',name:'隐白',x:80,y:98,desc:'井穴，健脾统血'},
       {id:'pi_L_2',name:'三阴交',x:80,y:75,desc:'三经交会，健脾益血'},
       {id:'pi_L_3',name:'血海',x:78,y:62,desc:'活血化瘀，引血归经'},
       {id:'pi_L_4',name:'大包',x:72,y:40,desc:'脾之大络，统诸络脉'}
     ]},
    {id:'pi_R',name:'足太阴脾经',side:'right',realm:1,icon:'🫁',
     acupoints:[
       {id:'pi_R_1',name:'隐白',x:120,y:98,desc:'井穴，健脾统血'},
       {id:'pi_R_2',name:'三阴交',x:120,y:75,desc:'三经交会，健脾益血'},
       {id:'pi_R_3',name:'血海',x:122,y:62,desc:'活血化瘀，引血归经'},
       {id:'pi_R_4',name:'大包',x:128,y:40,desc:'脾之大络，统诸络脉'}
     ]},

    // ---- 化劲（realm 2）：手少阴心经 + 手太阳小肠经 ----
    {id:'xin_L',name:'手少阴心经',side:'left',realm:2,icon:'🫁',
     acupoints:[
       {id:'xin_L_1',name:'极泉',x:68,y:36,desc:'心经起穴，宽胸理气'},
       {id:'xin_L_2',name:'少海',x:60,y:58,desc:'合穴，宁心安神'},
       {id:'xin_L_3',name:'神门',x:56,y:76,desc:'原穴，安神定志'},
       {id:'xin_L_4',name:'少冲',x:50,y:92,desc:'井穴，清心开窍'}
     ]},
    {id:'xin_R',name:'手少阴心经',side:'right',realm:2,icon:'🫁',
     acupoints:[
       {id:'xin_R_1',name:'极泉',x:132,y:36,desc:'心经起穴，宽胸理气'},
       {id:'xin_R_2',name:'少海',x:140,y:58,desc:'合穴，宁心安神'},
       {id:'xin_R_3',name:'神门',x:144,y:76,desc:'原穴，安神定志'},
       {id:'xin_R_4',name:'少冲',x:150,y:92,desc:'井穴，清心开窍'}
     ]},
    {id:'xiaochang_L',name:'手太阳小肠经',side:'left',realm:2,icon:'🫁',
     acupoints:[
       {id:'xiaochang_L_1',name:'少泽',x:48,y:94,desc:'井穴，通乳清热'},
       {id:'xiaochang_L_2',name:'后溪',x:52,y:80,desc:'输穴，通督脉'},
       {id:'xiaochang_L_3',name:'天宗',x:60,y:42,desc:'舒筋活络，消肿止痛'},
       {id:'xiaochang_L_4',name:'听宫',x:80,y:12,desc:'聪耳开窍'}
     ]},
    {id:'xiaochang_R',name:'手太阳小肠经',side:'right',realm:2,icon:'🫁',
     acupoints:[
       {id:'xiaochang_R_1',name:'少泽',x:152,y:94,desc:'井穴，通乳清热'},
       {id:'xiaochang_R_2',name:'后溪',x:148,y:80,desc:'输穴，通督脉'},
       {id:'xiaochang_R_3',name:'天宗',x:140,y:42,desc:'舒筋活络，消肿止痛'},
       {id:'xiaochang_R_4',name:'听宫',x:120,y:12,desc:'聪耳开窍'}
     ]},

    // ---- 宗师（realm 3）：足太阳膀胱经 + 足少阴肾经 ----
    {id:'pangguang_L',name:'足太阳膀胱经',side:'left',realm:3,icon:'🫁',
     acupoints:[
       {id:'pangguang_L_1',name:'睛明',x:88,y:12,desc:'明目通窍'},
       {id:'pangguang_L_2',name:'肺俞',x:76,y:38,desc:'肺之背俞，调肺气'},
       {id:'pangguang_L_3',name:'委中',x:80,y:68,desc:'合穴，舒筋通络'},
       {id:'pangguang_L_4',name:'至阴',x:82,y:98,desc:'井穴，正胎位'}
     ]},
    {id:'pangguang_R',name:'足太阳膀胱经',side:'right',realm:3,icon:'🫁',
     acupoints:[
       {id:'pangguang_R_1',name:'睛明',x:112,y:12,desc:'明目通窍'},
       {id:'pangguang_R_2',name:'肺俞',x:124,y:38,desc:'肺之背俞，调肺气'},
       {id:'pangguang_R_3',name:'委中',x:120,y:68,desc:'合穴，舒筋通络'},
       {id:'pangguang_R_4',name:'至阴',x:118,y:98,desc:'井穴，正胎位'}
     ]},
    {id:'shen_L',name:'足少阴肾经',side:'left',realm:3,icon:'🫁',
     acupoints:[
       {id:'shen_L_1',name:'涌泉',x:82,y:98,desc:'井穴，滋阴降火'},
       {id:'shen_L_2',name:'太溪',x:80,y:78,desc:'原穴，滋阴益肾'},
       {id:'shen_L_3',name:'肓俞',x:80,y:50,desc:'通调冲任'},
       {id:'shen_L_4',name:'俞府',x:76,y:36,desc:'止咳平喘'}
     ]},
    {id:'shen_R',name:'足少阴肾经',side:'right',realm:3,icon:'🫁',
     acupoints:[
       {id:'shen_R_1',name:'涌泉',x:118,y:98,desc:'井穴，滋阴降火'},
       {id:'shen_R_2',name:'太溪',x:120,y:78,desc:'原穴，滋阴益肾'},
       {id:'shen_R_3',name:'肓俞',x:120,y:50,desc:'通调冲任'},
       {id:'shen_R_4',name:'俞府',x:124,y:36,desc:'止咳平喘'}
     ]},

    // ---- 大宗师（realm 4）：手厥阴心包经 + 手少阳三焦经 ----
    {id:'xinbao_L',name:'手厥阴心包经',side:'left',realm:4,icon:'🫁',
     acupoints:[
       {id:'xinbao_L_1',name:'天池',x:74,y:36,desc:'活血化瘀，宽胸理气'},
       {id:'xinbao_L_2',name:'曲泽',x:60,y:60,desc:'合穴，清心泻火'},
       {id:'xinbao_L_3',name:'内关',x:56,y:76,desc:'络穴，宁心安神'},
       {id:'xinbao_L_4',name:'中冲',x:50,y:92,desc:'井穴，开窍醒神'}
     ]},
    {id:'xinbao_R',name:'手厥阴心包经',side:'right',realm:4,icon:'🫁',
     acupoints:[
       {id:'xinbao_R_1',name:'天池',x:126,y:36,desc:'活血化瘀，宽胸理气'},
       {id:'xinbao_R_2',name:'曲泽',x:140,y:60,desc:'合穴，清心泻火'},
       {id:'xinbao_R_3',name:'内关',x:144,y:76,desc:'络穴，宁心安神'},
       {id:'xinbao_R_4',name:'中冲',x:150,y:92,desc:'井穴，开窍醒神'}
     ]},
    {id:'sanjiao_L',name:'手少阳三焦经',side:'left',realm:4,icon:'🫁',
     acupoints:[
       {id:'sanjiao_L_1',name:'关冲',x:48,y:94,desc:'井穴，清热开窍'},
       {id:'sanjiao_L_2',name:'外关',x:54,y:76,desc:'络穴，通经活络'},
       {id:'sanjiao_L_3',name:'支沟',x:56,y:66,desc:'通利三焦，降逆'},
       {id:'sanjiao_L_4',name:'丝竹空',x:78,y:12,desc:'明目，止头痛'}
     ]},
    {id:'sanjiao_R',name:'手少阳三焦经',side:'right',realm:4,icon:'🫁',
     acupoints:[
       {id:'sanjiao_R_1',name:'关冲',x:152,y:94,desc:'井穴，清热开窍'},
       {id:'sanjiao_R_2',name:'外关',x:146,y:76,desc:'络穴，通经活络'},
       {id:'sanjiao_R_3',name:'支沟',x:144,y:66,desc:'通利三焦，降逆'},
       {id:'sanjiao_R_4',name:'丝竹空',x:122,y:12,desc:'明目，止头痛'}
     ]},

    // ---- 蜕凡（realm 5）：足少阳胆经 + 足厥阴肝经 ----
    {id:'dan_L',name:'足少阳胆经',side:'left',realm:5,icon:'🫁',
     acupoints:[
       {id:'dan_L_1',name:'瞳子髎',x:88,y:12,desc:'明目退翳'},
       {id:'dan_L_2',name:'风池',x:78,y:18,desc:'祛风解表，明目开窍'},
       {id:'dan_L_3',name:'环跳',x:78,y:60,desc:'通经活络，利腰腿'},
       {id:'dan_L_4',name:'足窍阴',x:80,y:98,desc:'井穴，疏肝利胆'}
     ]},
    {id:'dan_R',name:'足少阳胆经',side:'right',realm:5,icon:'🫁',
     acupoints:[
       {id:'dan_R_1',name:'瞳子髎',x:112,y:12,desc:'明目退翳'},
       {id:'dan_R_2',name:'风池',x:122,y:18,desc:'祛风解表，明目开窍'},
       {id:'dan_R_3',name:'环跳',x:122,y:60,desc:'通经活络，利腰腿'},
       {id:'dan_R_4',name:'足窍阴',x:120,y:98,desc:'井穴，疏肝利胆'}
     ]},
    {id:'gan_L',name:'足厥阴肝经',side:'left',realm:5,icon:'🫁',
     acupoints:[
       {id:'gan_L_1',name:'大敦',x:80,y:98,desc:'井穴，疏肝理气'},
       {id:'gan_L_2',name:'太冲',x:78,y:82,desc:'原穴，疏肝解郁'},
       {id:'gan_L_3',name:'章门',x:74,y:46,desc:'脏会，疏肝健脾'},
       {id:'gan_L_4',name:'期门',x:76,y:38,desc:'肝之募穴，疏肝理气'}
     ]},
    {id:'gan_R',name:'足厥阴肝经',side:'right',realm:5,icon:'🫁',
     acupoints:[
       {id:'gan_R_1',name:'大敦',x:120,y:98,desc:'井穴，疏肝理气'},
       {id:'gan_R_2',name:'太冲',x:122,y:82,desc:'原穴，疏肝解郁'},
       {id:'gan_R_3',name:'章门',x:126,y:46,desc:'脏会，疏肝健脾'},
       {id:'gan_R_4',name:'期门',x:124,y:38,desc:'肝之募穴，疏肝理气'}
     ]},

    // ---- 先天（realm 6）：任脉 + 督脉（身体中线） ----
    {id:'renmai',name:'任脉',side:'center',realm:6,icon:'☯️',
     acupoints:[
       {id:'ren_1',name:'会阴',x:100,y:98,desc:'任脉起穴，调补精血'},
       {id:'ren_2',name:'气海',x:100,y:58,desc:'生气之海，补肾固精'},
       {id:'ren_3',name:'膻中',x:100,y:36,desc:'气会，宽胸理气'},
       {id:'ren_4',name:'承浆',x:100,y:8,desc:'任脉止穴，生津敛液'}
     ]},
    {id:'dumai',name:'督脉',side:'center',realm:6,icon:'☯️',
     acupoints:[
       {id:'du_1',name:'长强',x:100,y:98,desc:'督脉起穴，通调督脉'},
       {id:'du_2',name:'命门',x:100,y:56,desc:'生命之门，培元补肾'},
       {id:'du_3',name:'大椎',x:100,y:28,desc:'诸阳之会，清热解表'},
       {id:'du_4',name:'百会',x:100,y:5,desc:'百脉之会，升阳举陷'}
     ]}
  ],

  // 每境瓶颈：打通经脉数要求
  realmRequirements: [
    {realm:0,name:'外劲',channelsNeeded:4,desc:'打通手三阴三阳经，淬炼筋骨'},
    {realm:1,name:'暗劲',channelsNeeded:8,desc:'打通足阳明太阴经，内力初成'},
    {realm:2,name:'化劲',channelsNeeded:12,desc:'打通手少阴太阳经，化劲通神'},
    {realm:3,name:'宗师',channelsNeeded:16,desc:'打通足太阳少阴经，气沉丹田'},
    {realm:4,name:'大宗师',channelsNeeded:20,desc:'打通手厥阴少阳经，武道巅峰'},
    {realm:5,name:'蜕凡',channelsNeeded:24,desc:'打通足少阳厥阴经，脱胎换骨'},
    {realm:6,name:'先天',channelsNeeded:28,desc:'打通任督二脉，后天返先天！'}
  ],

  // 获取打通穴位总数
  getTotalOpened(state){
    return (state.openedAcupoints||[]).length;
  },
  // 获取当前境已打通经脉数
  getChannelsOpened(state, realmIndex){
    const opened = state.openedAcupoints||[];
    let count = 0;
    return count;
  },
  // 计算穴位解锁消耗：基础消耗 × 1.5^(已打通穴位总数)
  getUnlockCost(totalOpened){
    const herbs = Math.max(1, Math.floor(Math.pow(1.5, Math.min(totalOpened, 15))));
    const pills = Math.max(1, Math.floor(Math.pow(1.35, Math.min(totalOpened, 15))));
    return {herbs, pills};
  },
  // 蜕凡→先天特殊消耗：前面所有消耗的99倍
  getXifanCost(state){
    let totalHerbs = 0, totalPills = 0;
    const opened = state.openedAcupoints||[];
    for(let i = 0; i < opened.length; i++){
      totalHerbs += c.herbs;
      totalPills += c.pills;
    }
    return {herbs: totalHerbs * 99, pills: totalPills * 99};
  }
};

export const NERVOUS_SYSTEM_DATA: any = {

  conductionSpeed: {

  myelinatedA: { min: 12, max: 120, unit: 'm/s', desc: '有髓鞘A类神经纤维传导速度', typical: 50 },

  motorNerve: { min: 50, max: 70, unit: 'm/s', desc: '尺神经运动纤维传导速度', typical: 60 },

  sensoryNerve: { min: 40, max: 50, unit: 'm/s', desc: '正中神经感觉纤维传导速度', typical: 45 },

  unmyelinatedC: { min: 0.6, max: 2.3, unit: 'm/s', desc: '无髓鞘C类神经纤维（痛觉/温度觉）', typical: 1.2 },

  fastest: { value: 120, unit: 'm/s', desc: '最快有髓鞘运动神经纤维传导速度' },

  slowest: { value: 0.003, unit: 'm/s', desc: '最慢神经传导速度' },
  },

  processingSpeed: {

  brain: { value: 10, unit: 'bit/s', desc: '人类大脑信息处理速度（最新研究）' },

  typing: { value: 10, unit: 'bit/s', desc: '熟练打字员信息处理速度（120词/分钟）' },

  speaking: { value: 13, unit: 'bit/s', desc: '演讲信息处理速度（160词/分钟）' },

  blindSolve: { value: 11.8, unit: 'bit/s', desc: '盲解魔方观察阶段信息处理速度' },
  },

  formula: {
  conduction: '神经传导速度(m/s) = 两点间距离(cm) ÷ 10 ÷ 两点间潜伏期差(ms)',
  }
};

export const NERVOUS_SYSTEM_PARTS: any = {
  centralNerve: {
  id: 'centralNerve', name: '中枢神经', icon: '🧠', category: 'nervous',
  desc: '大脑和脊髓组成的中枢神经系统，负责整合和处理信息',
  baseConductionSpeed: 50, baseProcessingSpeed: 10,
  maxConductionSpeed: 120, maxProcessingSpeed: 50,
  conductionUnit: 'm/s', processingUnit: 'bit/s',
  medicalData: '中枢神经系统由大脑和脊髓组成，是人体神经系统的最高中枢。大脑皮层约含140亿个神经元，信息通过突触传递。',
  hpPct: 0.08, lethality: 0.9,
  },
  peripheralNerve: {
  id: 'peripheralNerve', name: '周围神经', icon: '⚡', category: 'nervous',
  desc: '连接中枢与全身的神经网络，传递运动和感觉信号',
  baseConductionSpeed: 40, baseProcessingSpeed: 5,
  maxConductionSpeed: 80, maxProcessingSpeed: 20,
  conductionUnit: 'm/s', processingUnit: 'bit/s',
  medicalData: '周围神经包括12对脑神经和31对脊神经。有髓鞘纤维传导速度12-120m/s，无髓鞘纤维0.6-2.3m/s。',
  hpPct: 0.05, lethality: 0.3,
  },
  motorNerve: {
  id: 'motorNerve', name: '运动神经', icon: '🏃', category: 'nervous',
  desc: '控制骨骼肌运动的传出神经，传导速度可达70m/s',
  baseConductionSpeed: 55, baseProcessingSpeed: 8,
  maxConductionSpeed: 100, maxProcessingSpeed: 30,
  conductionUnit: 'm/s', processingUnit: 'bit/s',
  medicalData: '运动神经纤维主要为Aα类有髓鞘纤维，直径12-20μm，传导速度50-70m/s。尺神经运动纤维约50-60m/s。',
  hpPct: 0.04, lethality: 0.2,
  },
  sensoryNerve: {
  id: 'sensoryNerve', name: '感觉神经', icon: '👁️', category: 'nervous',
  desc: '传递触觉、痛觉、温度觉等感觉信号的传入神经',
  baseConductionSpeed: 42, baseProcessingSpeed: 6,
  maxConductionSpeed: 75, maxProcessingSpeed: 25,
  conductionUnit: 'm/s', processingUnit: 'bit/s',
  medicalData: '感觉神经纤维包含Aβ（触觉，30-70m/s）、Aδ（快痛/冷觉，5-30m/s）和C纤维（慢痛/温觉，0.6-2.3m/s）。正中神经感觉纤维约40-50m/s。',
  hpPct: 0.03, lethality: 0.15,
  },
  synapse: {
  id: 'synapse', name: '神经突触', icon: '🔗', category: 'nervous',
  desc: '神经元之间的连接结构，信号传递的关键节点',
  baseConductionSpeed: 0.5, baseProcessingSpeed: 15,
  maxConductionSpeed: 5, maxProcessingSpeed: 40,
  conductionUnit: 'm/s', processingUnit: 'bit/s',
  medicalData: '突触传递存在0.5-1ms的突触延搁。一个神经元可有数千个突触连接。突触可塑性是学习和记忆的神经基础。',
  hpPct: 0.02, lethality: 0.1,
  },
};

export const NERVE_DAMAGE_EFFECTS: any = {

  mild: [
  { name: '神经传导减慢', icon: '🐌', desc: '神经传导速度下降15%', effect: { conductionSpeedPct: -0.15 }, medicalNote: '轻度脱髓鞘导致神经传导速度下降，类似早期周围神经病变' },
  { name: '感觉异常', icon: '🪡', desc: '麻木、刺痛感', effect: { dodgeRate: -10 }, medicalNote: '感觉神经损伤导致麻木(m numbness)和感觉异常(paresthesia)，常见于糖尿病周围神经病变' },
  { name: '肌力减弱', icon: '💪↓', desc: '肌力下降10%', effect: { atkPct: -0.10 }, medicalNote: '运动神经传导减弱导致肌力下降(paresis)，上运动神经元损伤肌张力增高但肌力下降' },
  { name: '反射减弱', icon: '⚡↓', desc: '反应速度变慢', effect: { speedPct: -0.10 }, medicalNote: '深反射减弱(lower reflex)提示下运动神经元或感觉传入通路受损' },
  { name: '植物神经紊乱', icon: '😰', desc: '心率不齐、出汗异常', effect: { hpRegenPct: -0.20 }, medicalNote: '自主神经功能障碍(autonomic dysfunction)，影响心率、血压、汗腺分泌等' },
  ],

  moderate: [
  { name: '周围神经炎', icon: '🔥', desc: '传导速度下降30%，持续灼痛', effect: { conductionSpeedPct: -0.30, atkPct: -0.15 }, medicalNote: '周围神经炎(peripheral neuritis)导致脱髓鞘和轴突损伤，灼性神经痛(causalgia)可持续数月' },
  { name: '不完全性瘫痪', icon: '🦽', desc: '一侧肢体部分瘫痪，攻击力减半', effect: { atkPct: -0.50, speedPct: -0.30 }, medicalNote: '不完全性瘫痪(incomplete paralysis/paresis)：上运动神经元损伤致对侧肢体偏瘫，Brown-Séquard综合征可致同侧瘫痪' },
  { name: '癫痫样发作', icon: '⚡', desc: '间歇性失控，每3回合跳过1回合', effect: { skipTurnChance: 0.33 }, medicalNote: '大脑皮层异常放电导致癫痫样发作(epileptic seizure)，强直-阵挛发作(grand mal)可致意识丧失' },
  { name: '共济失调', icon: '🌀', desc: '平衡失调，闪避率大降', effect: { dodgeRate: -40, critRate: -20 }, medicalNote: '小脑损伤导致共济失调(ataxia)：指鼻试验阳性、跟膝胫试验阳性、Romberg征阳性' },
  { name: '传导阻滞', icon: '🚫', desc: '神经信号传导阻断，速度减半', effect: { conductionSpeedPct: -0.50 }, medicalNote: '神经传导阻滞(nerve conduction block)：严重的脱髓鞘导致郎飞结间信号跳跃传导失败' },
  ],

  severe: [
  { name: '完全性瘫痪', icon: '♿', desc: '全身瘫痪，无法行动攻击', effect: { atkPct: -0.90, speedPct: -0.90, dodgeRate: -80 }, medicalNote: '完全性瘫痪(complete paralysis)：脊髓横贯性损伤(transverse myelitis)导致损伤平面以下全部运动感觉丧失' },
  { name: '呼吸肌麻痹', icon: '🫁', desc: '膈肌瘫痪，持续掉血', effect: { hpDrainPct: 0.05 }, medicalNote: '膈神经(phrenic nerve C3-C5)损伤致膈肌麻痹，"C3-C5 keeps the diaphragm alive"，不使用呼吸机可在数小时内死亡' },
  { name: '延髓麻痹', icon: '🧠💀', desc: '吞咽困难、言语障碍，全属性大降', effect: { atkPct: -0.70, defPct: -0.50, hpRegenPct: -0.80 }, medicalNote: '延髓麻痹(bulbar palsy)：IX、X、XII脑神经核损伤，致吞咽困难(dysphagia)、构音障碍(dysarthria)，可致吸入性肺炎死亡' },
  { name: '意识障碍', icon: '😵', desc: '意识模糊，处理速度降至1bit/s', effect: { processingSpeedPct: -0.90 }, medicalNote: '广泛大脑皮层或网状激活系统损伤导致意识障碍(disorders of consciousness)：嗜睡→昏睡→昏迷三级' },
  { name: '自主神经反射异常', icon: '💢', desc: '血压飙升，每回合自伤', effect: { selfDamagePct: 0.03 }, medicalNote: '自主神经反射异常(autonomic dysreflexia)：T6以上脊髓损伤后，下肢刺激致交感神经过度兴奋，血压可飙升至300mmHg致脑出血' },
  ],

  destroyed: [
  { name: '脑死亡', icon: '☠️', desc: '大脑功能完全丧失，即刻死亡', effect: { instantDeath: true }, medicalNote: '脑死亡(brain death)：全脑功能不可逆丧失，包括脑干反射消失。需确认试验：瞳孔反射(-)、角膜反射(-)、前庭眼反射(-)、呼吸暂停试验(+)' },
  { name: '高位脊髓断裂', icon: '☠️', desc: 'C1-C3脊髓断裂，呼吸心跳骤停', effect: { instantDeath: true }, medicalNote: '高位颈髓(C1-C3)完全断裂：膈神经核(C3-5)和心血管中枢(延髓)联系中断，呼吸停止+循环衰竭，数分钟内死亡' },
  { name: '全自主神经衰竭', icon: '☠️', desc: '心脏停搏+呼吸停止', effect: { instantDeath: true }, medicalNote: '全部自主神经系统衰竭：交感+副交感神经功能丧失→心脏失去窦房结自律性→心脏停搏；膈肌/肋间肌瘫痪→呼吸停止' },
  ],
};

export const NERVOUS_COMBAT_CONFIG: any = {

  baseTurnDuration: 3000,

  minTurnDuration: 800,

  conductionSpeedFactor: 0.6,

  attacksPerBitSpeed: 0.1,

  maxExtraAttacks: 5,

  conductionSpeedPerLevel: 2.5,

  processingSpeedPerLevel: 0.8,

  nerveUpgradeBaseCost: 150,

  nerveUpgradeHerbCost: 8,
};

export const ORGAN_DESTRUCTION_EFFECTS: any = {

  brain:    { deathCause: '脑干受压致呼吸心跳骤停', deathTime: 'instant', lifespanReduction: 100, medicalNote: '脑干为生命中枢，损伤后致死率接近100%。脑疝可在数分钟内致命。' },
  heart:    { deathCause: '心包填塞/心脏骤停', deathTime: 'instant', lifespanReduction: 100, medicalNote: '心脏穿透伤院前死亡率>80%。心包填塞可在3-5分钟内致命。冠状动脉阻塞致心肌梗死。' },

  lung:     { deathCause: '张力性气胸/呼吸衰竭', deathTime: 'minutes', lifespanReduction: 90, medicalNote: '双肺损毁致无法气体交换，张力性气胸可在数分钟内致命。单侧肺损毁另一侧可代偿。' },
  liver:    { deathCause: '肝脏破裂大出血/肝性脑病', deathTime: 'hours', lifespanReduction: 85, medicalNote: 'III级以上肝破裂死亡率约50%。肝脏血供极为丰富（门静脉+肝动脉），破裂后快速失血。肝衰竭致毒素蓄积。' },
  spleen:   { deathCause: '脾破裂失血性休克', deathTime: 'minutes_to_hours', lifespanReduction: 70, medicalNote: '脾脏血供丰富且质地脆弱，外伤极易破裂。如不手术，脾破裂死亡率约25-30%。' },
  torso:    { deathCause: '多脏器损伤/胸腹腔大出血', deathTime: 'minutes_to_hours', lifespanReduction: 80, medicalNote: '胸腔含心肺，腹腔含肝脾胃肠。穿透伤可致大出血、气胸、脏器破裂。主动脉破裂可在2分钟内失血致死。' },

  kidney:   { deathCause: '双肾衰竭/尿毒症', deathTime: 'days_to_weeks', lifespanReduction: 50, medicalNote: '单侧肾损伤极少致命（对侧代偿）。双肾损毁致无法排泄代谢废物，尿毒症在数天至数周内致命。' },
  stomach:  { deathCause: '弥漫性腹膜炎/感染性休克', deathTime: 'days', lifespanReduction: 40, medicalNote: '胃酸pH约1.5-2.0，穿孔后强腐蚀性胃液流入腹腔，致化学性腹膜炎继发细菌感染，感染性休克致死。' },
  smallIntestine: { deathCause: '肠坏死/脓毒血症', deathTime: 'days', lifespanReduction: 35, medicalNote: '肠系膜血管损伤致大面积肠坏死，肠道细菌移位入血致脓毒血症。肠穿孔腹膜炎致死率较高。' },
  largeIntestine: { deathCause: '粪性腹膜炎/脓毒血症', deathTime: 'days', lifespanReduction: 30, medicalNote: '大肠含大量厌氧菌和革兰阴性菌，穿孔后粪便外溢致严重腹腔感染。粪性腹膜炎死亡率约15-30%。' },
  gallbladder: { deathCause: '胆汁性腹膜炎', deathTime: 'days', lifespanReduction: 25, medicalNote: '胆汁漏入腹腔致化学性腹膜炎。如不治疗可致感染性休克，但手术可挽救。' },
  bladder:  { deathCause: '尿源性脓毒血症', deathTime: 'days', lifespanReduction: 15, medicalNote: '膀胱破裂致尿液外渗入腹腔，继发感染。充盈膀胱受外力时易破裂。及时引流可挽救。' },

  leftArm:  { deathCause: '肱动脉断裂失血', deathTime: 'hours', lifespanReduction: 10, medicalNote: '肱动脉受损可大量失血但止血后通常不致命。双臂全失致严重残疾。' },
  rightArm: { deathCause: '肱动脉断裂失血', deathTime: 'hours', lifespanReduction: 10, medicalNote: '同左臂。优势手受伤影响更大。' },
  leftLeg:  { deathCause: '股动脉断裂失血性休克', deathTime: 'minutes_to_hours', lifespanReduction: 20, medicalNote: '股动脉为人体最大外周动脉，断裂后可在数分钟内失血2000ml以上，致死率约30-50%。' },
  rightLeg: { deathCause: '股动脉断裂失血性休克', deathTime: 'minutes_to_hours', lifespanReduction: 20, medicalNote: '同左腿。双下肢截肢致严重行动障碍。' },

  dantian:  { deathCause: '丹田破碎·灵力归零', deathTime: 'gradual', lifespanReduction: 0, medicalNote: '丹田为灵力储存之所（修仙概念），破碎后灵力无法储存。修为散尽但不直接致命。寿命由debuff系统另行处理。', isXianxia: true },
  foundation: { deathCause: '根基崩塌·突破之路断绝', deathTime: 'none', lifespanReduction: 0, medicalNote: '根基为修炼之基（修仙概念），崩塌后无法突破。', isXianxia: true },
  spiritualRoot: { deathCause: '灵根枯萎·修炼资质归零', deathTime: 'none', lifespanReduction: 0, medicalNote: '灵根为感应灵气之源（修仙概念），枯萎后修炼速度暴跌。', isXianxia: true },
  meridians: { deathCause: '经脉损毁·灵气通道断绝', deathTime: 'none', lifespanReduction: 0, medicalNote: '经脉为灵气运行通道（修仙概念），损毁后无法修炼攻击防御。', isXianxia: true },

  skin:     { deathCause: '大面积烧伤致感染/低血容量', deathTime: 'days', lifespanReduction: 15, medicalNote: '烧伤面积>30%体表面积可致命（烧伤休克）。>60%死亡率极高。皮肤屏障丧失致感染。' },
  muscles:  { deathCause: '横纹肌溶解致急性肾衰竭', deathTime: 'days', lifespanReduction: 10, medicalNote: '大面积肌肉坏死释放肌红蛋白，阻塞肾小管致急性肾衰竭。同时高钾血症可致心脏骤停。' },
  bones:    { deathCause: '骨盆骨折致失血性休克', deathTime: 'hours', lifespanReduction: 12, medicalNote: '骨盆骨折可致腹膜后大量出血（1000-3000ml），失血致死率约10%。脊柱骨折可致截瘫。' },
  boneMarrow: { deathCause: '骨髓衰竭·造血功能丧失', deathTime: 'weeks_to_months', lifespanReduction: 8, medicalNote: '骨髓衰竭致全血细胞减少：贫血（乏力）、白细胞减少（感染）、血小板减少（出血）。' },
  sanjiao:  { deathCause: '三焦紊乱·水液代谢失常', deathTime: 'days', lifespanReduction: 5, medicalNote: '三焦为中医概念（上焦心肺、中焦脾胃、下焦肾膀胱），功能紊乱影响水液代谢。' },
};

export const THREE_SOULS: any = [
  {
  id:'taiguang', name:'胎光', title:'天魂',
  essence:'太清阳和之气所化',
  dominion:'生命本源与元阳',
  functions:['精神意识调控','智慧启迪','生命力本源'],
  desc:'唯一不生不灭的魂，决定神志清明度与生命力。受损会导致意识丧失。',
  cultivateTarget:'保持神志清明，增强生命力本源',
  maxLevel:100,
  bonusPerLevel:{maxHpPct:0.008, hpRegenPct:0.005, soulPowerPct:0.006},

  trainCost:lv=>({soulPower:Math.floor(10+lv*8), exp:Math.floor(50+lv*30)}),
  trainTime:lv=>Math.max(8, 20-lv*0.1),

  realmNames:['初觉胎光','微光胎光','明光胎光','灵光胎光','仙光胎光',
  '神光胎光','圣光胎光','道光胎光','太清胎光','元阳胎光'],
  },
  {
  id:'shuangling', name:'爽灵', title:'地魂',
  essence:'阴气之变所化',
  dominion:'因果业力与智慧情感反应',
  functions:['善恶行为记录','轮回质量调控','现实世界认知'],
  desc:'记录生前善恶行为，影响现实世界认知能力。可通过印堂色泽判断强弱。',
  cultivateTarget:'积累善业，提升智慧感知能力',
  maxLevel:100,
  bonusPerLevel:{expRatePct:0.006, critRatePct:0.004, dodgeRatePct:0.003},
  trainCost:lv=>({soulPower:Math.floor(12+lv*9), exp:Math.floor(60+lv*35)}),
  trainTime:lv=>Math.max(8, 22-lv*0.1),
  realmNames:['初觉爽灵','微明爽灵','明智爽灵','灵慧爽灵','仙慧爽灵',
  '神慧爽灵','圣慧爽灵','道慧爽灵','因果爽灵','轮回爽灵'],
  },
  {
  id:'youjing', name:'幽精', title:'人魂',
  essence:'阴气之杂所化',
  dominion:'情欲调控与祖德传承',
  functions:['情欲调控','性取向','生殖功能','祖德传承'],
  desc:'过盛易沉溺感官，衰弱则情感淡漠。通过修行调控情欲，保持情感稳定。',
  cultivateTarget:'通过修行调控情欲，保持情感稳定',
  maxLevel:100,
  bonusPerLevel:{atkPct:0.004, defPct:0.004, mpPct:0.005},
  trainCost:lv=>({soulPower:Math.floor(8+lv*7), exp:Math.floor(40+lv*25)}),
  trainTime:lv=>Math.max(8, 18-lv*0.1),
  realmNames:['初觉幽精','微情幽精','真情幽精','灵情幽精','仙情幽精',
  '神情幽精','圣情幽精','道情幽精','阴阳幽精','天地幽精'],
  },
];

export const SIX_SPIRITS: any = [
  {
  id:'shigou', name:'尸狗',
  dominion:'警觉与感知',
  desc:'负责睡眠中环境预警，感知危险',
  maxLevel:80,
  bonusPerLevel:{dodgeRatePct:0.005, critRatePct:0.003},
  trainCost:lv=>({soulPower:Math.floor(6+lv*5), exp:Math.floor(30+lv*20)}),
  trainTime:lv=>Math.max(6, 15-lv*0.1),
  },
  {
  id:'fushi', name:'伏矢',
  dominion:'代谢与能量转化',
  desc:'调控水液、营养吸收及排泄',
  maxLevel:80,
  bonusPerLevel:{hpRegenPct:0.006, mpRegenPct:0.004},
  trainCost:lv=>({soulPower:Math.floor(5+lv*5), exp:Math.floor(25+lv*18)}),
  trainTime:lv=>Math.max(6, 14-lv*0.1),
  },
  {
  id:'queyin', name:'雀阴',
  dominion:'生殖功能与性欲恢复',
  desc:'影响性能力修复及生育健康',
  maxLevel:80,
  bonusPerLevel:{maxHpPct:0.004, offspringQualityPct:0.01},
  trainCost:lv=>({soulPower:Math.floor(5+lv*4), exp:Math.floor(20+lv*15)}),
  trainTime:lv=>Math.max(6, 12-lv*0.1),
  },
  {
  id:'tunzei', name:'吞贼',
  dominion:'免疫防御',
  desc:'夜间清除病原体与毒素',
  maxLevel:80,
  bonusPerLevel:{defPct:0.005, poisonResistPct:0.008},
  trainCost:lv=>({soulPower:Math.floor(7+lv*6), exp:Math.floor(35+lv*22)}),
  trainTime:lv=>Math.max(6, 16-lv*0.1),
  },
  {
  id:'feidu', name:'非毒',
  dominion:'气血凝聚与毒素化解',
  desc:'维持体温感知，化解体内毒素',
  maxLevel:80,
  bonusPerLevel:{atkPct:0.003, poisonResistPct:0.006, hpRegenPct:0.003},
  trainCost:lv=>({soulPower:Math.floor(6+lv*5), exp:Math.floor(28+lv*20)}),
  trainTime:lv=>Math.max(6, 14-lv*0.1),
  },
  {
  id:'chuhui', name:'除秽',
  dominion:'消化与废物排泄',
  desc:'管理新陈代谢废物',
  maxLevel:80,
  bonusPerLevel:{expRatePct:0.004, pillEfficiencyPct:0.005},
  trainCost:lv=>({soulPower:Math.floor(5+lv*4), exp:Math.floor(22+lv*16)}),
  trainTime:lv=>Math.max(6, 13-lv*0.1),
  },
  {
  id:'choufei', name:'臭肺',
  dominion:'呼吸系统',
  desc:'调控呼吸节奏，增强氧气利用率',
  maxLevel:80,
  bonusPerLevel:{mpRegenPct:0.005, soulPowerPct:0.004},
  trainCost:lv=>({soulPower:Math.floor(6+lv*5), exp:Math.floor(26+lv*19)}),
  trainTime:lv=>Math.max(6, 14-lv*0.1),
  },
];

export const JADE_PENDANT_PROTECT: any = { huang: 3, xuan: 6, di: 10, tian: 15, xian: 22, shen: 30 };

export const BP_ROUNDS: any = [
  {name:'初窥门径',target:300,hands:4,discards:3,jokerSlots:3,gold:5},
  {name:'小有所成',target:800,hands:4,discards:3,jokerSlots:3,gold:6},
  {name:'炉火纯青',target:2000,hands:4,discards:3,jokerSlots:4,gold:7},
  {name:'登堂入室',target:5000,hands:4,discards:3,jokerSlots:4,gold:8},
  {name:'出神入化',target:12000,hands:5,discards:3,jokerSlots:5,gold:9},
  {name:'登峰造极',target:30000,hands:5,discards:4,jokerSlots:5,gold:10},
  {name:'超凡入圣',target:80000,hands:5,discards:4,jokerSlots:5,gold:12},
  {name:'修仙大成',target:200000,hands:5,discards:4,jokerSlots:6,gold:15},
];
