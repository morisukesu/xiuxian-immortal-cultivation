// 灵根+体质+基因特质
// 从 v0.35 迁移 - 共 15 个常量

export const ROOT_TYPES: any = [

{name:'五行杂灵根',quality:0,bonus:{金:0,木:0,水:0,火:0,土:0},desc:'五行俱全，杂而不纯',weight:30},
{name:'四灵根',quality:1,bonus:{金:.1,木:.1,水:.1,火:.1,土:.1},desc:'四种灵根，修炼略慢',weight:25},

{name:'三灵根·金木水',quality:2,bonus:{金:.25,木:.25,水:.25,火:0,土:0},desc:'金木水三灵根',weight:8},
{name:'三灵根·木火土',quality:2,bonus:{金:0,木:.25,水:0,火:.25,土:.25},desc:'木火土三灵根',weight:8},
{name:'三灵根·金水火',quality:2,bonus:{金:.25,木:0,水:.25,火:.25,土:0},desc:'金水火三灵根',weight:8},
{name:'三灵根·金木土',quality:2,bonus:{金:.25,木:.25,水:0,火:0,土:.25},desc:'金木土三灵根',weight:8},
{name:'三灵根·水火土',quality:2,bonus:{金:0,木:0,水:.25,火:.25,土:.25},desc:'水火土三灵根',weight:8},

{name:'双灵根·金木',quality:3,bonus:{金:.4,木:.4,水:0,火:0,土:0},desc:'金木双灵根，攻守兼备',weight:5},
{name:'双灵根·金水',quality:3,bonus:{金:.4,木:0,水:.4,火:0,土:0},desc:'金水双灵根，刚柔并济',weight:5},
{name:'双灵根·金火',quality:3,bonus:{金:.4,木:0,水:0,火:.4,土:0},desc:'金火双灵根，锋锐无比',weight:5},
{name:'双灵根·金土',quality:3,bonus:{金:.4,木:0,水:0,火:0,土:.4},desc:'金土双灵根，坚固厚重',weight:5},
{name:'双灵根·木水',quality:3,bonus:{金:0,木:.4,水:.4,火:0,土:0},desc:'木水双灵根，生机盎然',weight:5},
{name:'双灵根·木火',quality:3,bonus:{金:0,木:.4,水:0,火:.4,土:0},desc:'木火双灵根，风火燎原',weight:5},
{name:'双灵根·木土',quality:3,bonus:{金:0,木:.4,水:0,火:0,土:.4},desc:'木土双灵根，厚德载物',weight:5},
{name:'双灵根·水火',quality:3,bonus:{金:0,木:0,水:.4,火:.4,土:0},desc:'水火双灵根，冰火两重天',weight:5},
{name:'双灵根·水土',quality:3,bonus:{金:0,木:0,水:.4,火:0,土:.4},desc:'水土双灵根，润泽万物',weight:5},
{name:'双灵根·火土',quality:3,bonus:{金:0,木:0,水:0,火:.4,土:.4},desc:'火土双灵根，熔岩之力',weight:5},

{name:'单灵根·金',quality:4,bonus:{金:.65,木:0,水:0,火:0,土:0},desc:'金灵根天资，锋芒毕露',weight:2},
{name:'单灵根·木',quality:4,bonus:{金:0,木:.65,水:0,火:0,土:0},desc:'木灵根天资，生生不息',weight:2},
{name:'单灵根·水',quality:4,bonus:{金:0,木:0,水:.65,火:0,土:0},desc:'水灵根天资，上善若水',weight:2},
{name:'单灵根·火',quality:4,bonus:{金:0,木:0,水:0,火:.65,土:0},desc:'火灵根天资，焚天煮海',weight:2},
{name:'单灵根·土',quality:4,bonus:{金:0,木:0,水:0,火:0,土:.65},desc:'土灵根天资，厚土载天',weight:2},

{name:'变异灵根·雷',quality:5,bonus:{雷:.85,金:.1},desc:'雷灵根，天劫之主',weight:1},
{name:'变异灵根·冰',quality:5,bonus:{冰:.85,水:.1},desc:'冰灵根，冰封万里',weight:1},
{name:'变异灵根·风',quality:5,bonus:{风:.85,木:.1},desc:'风灵根，御风而行',weight:1},
{name:'变异灵根·暗',quality:5,bonus:{暗:.85,水:.05},desc:'暗灵根，暗影之力',weight:0.8},
{name:'变异灵根·光',quality:5,bonus:{光:.85,火:.05},desc:'光灵根，圣光普照',weight:0.8},
{name:'变异灵根·毒',quality:5,bonus:{毒:.8,木:.1},desc:'毒灵根，万毒不侵',weight:0.5},
{name:'变异灵根·血',quality:5,bonus:{血:.8,火:.1},desc:'血灵根，血海滔天',weight:0.5},

{name:'天灵根',quality:6,bonus:{金:.3,木:.3,水:.3,火:.3,土:.3},desc:'万中无一，五行均衡',weight:0.5},
{name:'五行圆满灵根',quality:6,bonus:{金:.35,木:.35,水:.35,火:.35,土:.35},desc:'五行圆满，大道之基',weight:0.3},
{name:'雷火双变异',quality:6,bonus:{雷:.5,火:.4,金:.1},desc:'雷火双绝，攻伐无双',weight:0.2},
{name:'冰风双变异',quality:6,bonus:{冰:.5,风:.4,水:.05},desc:'冰风双绝，来去无踪',weight:0.2},

{name:'混沌灵根',quality:7,bonus:{金:.2,木:.2,水:.2,火:.2,土:.2,雷:.1,冰:.05,风:.05},desc:'混沌初开，万法归一',weight:0.1},
{name:'先天道体灵根',quality:7,bonus:{金:.25,木:.25,水:.25,火:.25,土:.25},desc:'先天道体，天道眷顾',weight:0.08},
{name:'太初灵根',quality:7,bonus:{金:.3,木:.3,水:.3,火:.3,土:.3,光:.15,暗:.15},desc:'太初之灵，超越五行',weight:0.05},
{name:'鸿蒙灵根',quality:8,bonus:{金:.35,木:.35,水:.35,火:.35,土:.35,雷:.2,冰:.15,风:.15,暗:.1,光:.1},desc:'鸿蒙至宝，天地独尊',weight:0.02},
{name:'万法源灵根',quality:8,bonus:{金:.3,木:.3,水:.3,火:.3,土:.3,雷:.25,风:.25,冰:.2,光:.15,暗:.15,毒:.1,血:.1},desc:'万法之源，大道至尊',weight:0.01},
// === 混沌起源灵根（混沌不灭体专属，不可随机获得）===
{name:'混沌起源灵根',quality:9,bonus:{金:.4,木:.4,水:.4,火:.4,土:.4,雷:.3,风:.3,冰:.25,光:.2,暗:.2,毒:.15,血:.15},desc:'混沌起源，万法之祖，天理不容',weight:0,isChaosRoot:true},
// === 无灵根 ===
{name:'无灵根',quality:-1,bonus:{},desc:'天生没有灵根，无法引气入体修仙，但可走武道之路',weight:0,isNoRoot:true},
];

export const ROOT_TYPES_ORIG_LEN: any = ROOT_TYPES.length;

export const CONSTITUTIONS: any = [

{quality:0,name:'凡体',desc:'普通体质，毫无特殊',bonus:{},weight:30},
{quality:0,name:'虚弱体',desc:'体质虚弱，修炼缓慢',bonus:{expRate:-.1,hp:-.1},weight:5},
{quality:0,name:'后天体',desc:'后天之体，尚可修炼',bonus:{expRate:.02},weight:20},

{quality:1,name:'强壮体',desc:'体魄强于常人',bonus:{hp:.1,def:.05},weight:10},
{quality:1,name:'灵觉体',desc:'感知灵敏，修炼略快',bonus:{expRate:.05},weight:10},
{quality:1,name:'疾风体',desc:'身法轻盈',bonus:{expRate:.03,atk:.03},weight:8},
{quality:1,name:'厚土体',desc:'根基稳固',bonus:{hp:.08,def:.08},weight:8},
{quality:1,name:'寒冰体',desc:'体质偏寒，亲近水系',bonus:{expRate:.04,mp:.05},weight:6},

{quality:2,name:'烈阳体',desc:'阳气旺盛，火系功法加成',bonus:{expRate:.08,atk:.05},weight:5},
{quality:2,name:'玄阴体',desc:'阴气浓郁，水系功法加成',bonus:{expRate:.08,mp:.08},weight:5},
{quality:2,name:'金刚体',desc:'刀枪不入，防御惊人',bonus:{def:.15,hp:.1},weight:4},
{quality:2,name:'灵木体',desc:'生机盎然，恢复极快',bonus:{hp:.08,expRate:.06},weight:4},
{quality:2,name:'锐金体',desc:'攻击力超群',bonus:{atk:.12,expRate:.05},weight:4},
{quality:2,name:'重土体',desc:'防御极强，不动如山',bonus:{def:.12,hp:.12},weight:4},
{quality:2,name:'雷霆体',desc:'蕴含雷电之力',bonus:{atk:.08,expRate:.08},weight:3},
{quality:2,name:'龙象体',desc:'力大无穷',bonus:{atk:.1,hp:.1,def:.05},weight:3},

{quality:3,name:'五行体',desc:'五行俱全，全面增幅',bonus:{expRate:.12,atk:.05,def:.05,hp:.05,mp:.05},weight:2},
{quality:3,name:'天雷体',desc:'天雷入体，雷系至强',bonus:{atk:.15,expRate:.1},weight:1.5},
{quality:3,name:'九阴体',desc:'九阴绝脉，至阴之体',bonus:{expRate:.12,mp:.12},weight:1.5},
{quality:3,name:'九阳体',desc:'九阳神脉，至阳之体',bonus:{expRate:.12,atk:.12},weight:1.5},
{quality:3,name:'幽冥体',desc:'与冥界沟通之力',bonus:{expRate:.1,mp:.1,atk:.08},weight:1},
{quality:3,name:'圣光体',desc:'光明圣洁，克制黑暗',bonus:{expRate:.1,hp:.1,mp:.08},weight:1},
{quality:3,name:'毒体',desc:'万毒之源，百毒不侵',bonus:{atk:.1,expRate:.1,def:.05},weight:1},
{quality:3,name:'风灵体',desc:'风之宠儿，速度极快',bonus:{expRate:.12,atk:.08},weight:1},
{quality:3,name:'地灵体',desc:'大地之子，防御至强',bonus:{def:.18,hp:.12},weight:1},
{quality:3,name:'火灵体',desc:'火焰之躯，火系巅峰',bonus:{atk:.12,expRate:.1},weight:1},
{quality:3,name:'水灵体',desc:'水之化身，生生不息',bonus:{mp:.12,expRate:.1,hp:.05},weight:1},
{quality:3,name:'木灵体',desc:'万木之灵，生机无限',bonus:{hp:.12,expRate:.1},weight:1},
{quality:3,name:'金灵体',desc:'庚金之体，锋利无匹',bonus:{atk:.15,expRate:.08},weight:1},
{quality:3,name:'土灵体',desc:'厚德载物，万法不侵',bonus:{def:.15,hp:.1},weight:1},
{quality:3,name:'冰魄体',desc:'冰魄入骨，寒气逼人',bonus:{expRate:.1,mp:.1,def:.08},weight:1},
{quality:3,name:'赤炎体',desc:'赤炎焚天，火系至强',bonus:{atk:.15,expRate:.08},weight:1},

{quality:4,name:'先天道体',desc:'先天之体，大道宠儿',bonus:{expRate:.2,atk:.1,def:.1,hp:.1,mp:.1},weight:0.5},
{quality:4,name:'混元体',desc:'混元一体，万物归一',bonus:{expRate:.18,atk:.12,def:.12},weight:0.4},
{quality:4,name:'星辰体',desc:'星辰之体，引星力入体',bonus:{expRate:.2,mp:.15},weight:0.4},
{quality:4,name:'日月体',desc:'日月双辉，阴阳合一',bonus:{expRate:.2,atk:.1,hp:.1},weight:0.3},
{quality:4,name:'万毒不侵体',desc:'百毒不侵，万邪不入',bonus:{expRate:.15,def:.15,atk:.08},weight:0.3},
{quality:4,name:'天魔体',desc:'天魔之躯，魔道至强',bonus:{atk:.2,expRate:.15},weight:0.3},
{quality:4,name:'真龙体',desc:'真龙血脉，龙威盖世',bonus:{atk:.15,def:.12,hp:.15,expRate:.12},weight:0.3},
{quality:4,name:'真凤体',desc:'真凤血脉，涅槃重生',bonus:{hp:.2,expRate:.15,mp:.1},weight:0.3},
{quality:4,name:'天罡体',desc:'天罡正气，万法不侵',bonus:{def:.2,expRate:.15},weight:0.2},
{quality:4,name:'地煞体',desc:'地煞之力，攻伐无双',bonus:{atk:.2,expRate:.15},weight:0.2},
{quality:4,name:'不灭体',desc:'肉身不灭，恢复极快',bonus:{hp:.25,def:.1,expRate:.12},weight:0.2},
{quality:4,name:'噬灵体',desc:'吞噬灵气，修炼神速',bonus:{expRate:.25,mp:.1},weight:0.2},
{quality:4,name:'天命体',desc:'天命之人，气运加身',bonus:{expRate:.18,goldRate:.2},weight:0.2},
{quality:4,name:'轮回体',desc:'轮回之力，生生不息',bonus:{expRate:.2,hp:.12,mp:.12},weight:0.2},
{quality:4,name:'无垢体',desc:'纯净无瑕，灵气亲和',bonus:{expRate:.22,mp:.12},weight:0.15},
{quality:4,name:'剑体',desc:'人剑合一，剑道天才',bonus:{atk:.2,expRate:.12},weight:0.15},
{quality:4,name:'万兽体',desc:'万兽臣服，驱使妖兽',bonus:{expRate:.15,atk:.1,hp:.1},weight:0.15},

{quality:5,name:'混沌体',desc:'混沌之躯，超越五行',bonus:{expRate:.3,atk:.15,def:.15,hp:.15,mp:.15},weight:0.08},
{quality:5,name:'鸿蒙体',desc:'鸿蒙至体，天地之主',bonus:{expRate:.35,atk:.2,def:.2,hp:.2,mp:.2},weight:0.05},
{quality:5,name:'太虚体',desc:'太虚之体，虚实转化',bonus:{expRate:.3,atk:.18,def:.18},weight:0.05},
{quality:5,name:'荒体',desc:'荒古之体，力压天地',bonus:{atk:.25,hp:.25,expRate:.25},weight:0.04},
{quality:5,name:'苍天霸体',desc:'霸绝天下，无敌之姿',bonus:{atk:.3,expRate:.25},weight:0.03},
{quality:5,name:'荒古圣体',desc:'圣体降临，镇压万古',bonus:{atk:.2,def:.2,hp:.2,expRate:.3},weight:0.03},
{quality:5,name:'太阳体',desc:'太阳之精，焚天灭地',bonus:{atk:.25,expRate:.3},weight:0.03},
{quality:5,name:'太阴体',desc:'太阴之华，冰封万物',bonus:{mp:.25,expRate:.3,def:.15},weight:0.03},
{quality:5,name:'虚空体',desc:'虚空之体，来去无踪',bonus:{expRate:.3,atk:.15,mp:.18},weight:0.02},
{quality:5,name:'因果体',desc:'因果之体，命运之主',bonus:{expRate:.3,goldRate:.25,atk:.12},weight:0.02},
{quality:5,name:'命运体',desc:'命运之体，天命所归',bonus:{expRate:.35,goldRate:.3},weight:0.02},
{quality:5,name:'时间体',desc:'时间之体，掌握时空',bonus:{expRate:.35,mp:.2},weight:0.01},
{quality:5,name:'空间体',desc:'空间之体，突破天地',bonus:{expRate:.3,def:.2,mp:.2},weight:0.01},
{quality:5,name:'不朽体',desc:'不朽之躯，永恒不灭',bonus:{hp:.3,def:.2,expRate:.25},weight:0.01},
{quality:5,name:'万法体',desc:'万法之体，大道通达',bonus:{expRate:.35,atk:.15,def:.15,mp:.15},weight:0.01},

{quality:6,name:'先天圣体道胎',desc:'先天圣体，道之载体',bonus:{expRate:.45,atk:.25,def:.25,hp:.25,mp:.25},weight:0.008},
{quality:6,name:'至尊体',desc:'至尊之体，凌驾万物',bonus:{expRate:.4,atk:.3,def:.3,hp:.2,mp:.2},weight:0.005},
{quality:6,name:'大帝体',desc:'大帝之躯，举世无敌',bonus:{atk:.35,def:.25,expRate:.4,hp:.25},weight:0.005},
{quality:6,name:'仙王体',desc:'仙王之体，仙界至尊',bonus:{expRate:.45,atk:.3,mp:.3},weight:0.003},
{quality:6,name:'无上体',desc:'无上之体，超越一切',bonus:{expRate:.5,atk:.25,def:.25,hp:.25,mp:.25},weight:0.002},
{quality:6,name:'禁忌体',desc:'禁忌之力，天道所不容',bonus:{expRate:.5,atk:.35,hp:.2},weight:0.002},
{quality:6,name:'归墟体',desc:'归墟之体，万法归寂',bonus:{expRate:.45,def:.3,mp:.3},weight:0.001},
{quality:6,name:'创世体',desc:'创世之体，开天辟地',bonus:{expRate:.5,atk:.3,def:.3,hp:.3,mp:.3},weight:0.001},
{quality:6,name:'虚无体',desc:'虚无之体，超越存在',bonus:{expRate:.55,atk:.25,def:.25,mp:.35},weight:0.0005},
{quality:6,name:'大道体',desc:'大道之体，天道化身',bonus:{expRate:.6,atk:.3,def:.3,hp:.3,mp:.3,goldRate:.3},weight:0.0003},
// === 混沌不灭体（天理不容的最强体质）===
{quality:8,name:'混沌不灭体',desc:'天理不容之体，万物不灭，混沌至高，但天劫难度+1300%、失败即死',bonus:{expRate:1,atk:1,def:1,hp:10,mp:.5},weight:0.0001,isChaosBody:true},
// === 武道仙体（特殊体质，走星空武道之路）===
{quality:7,name:'武道仙体',desc:'先天武道仙体，可踏上星空武道修炼体系，不需灵根亦可证道',bonus:{expRate:.35,atk:.3,def:.3,hp:.35,mp:.15},weight:0.03,isMartialBody:true},
];

export const CONSTITUTIONS_ORIG_LEN: any = CONSTITUTIONS.length;

export const TRAITS_HUMAN: any = [
{
  "id": "u_bad_1",
  "name": "霉运缠身",
  "grade": 0,
  "desc": "天生命苦，事事不顺",
  "bonuses": {
  "expRate": -0.05,
  "luck": -2
  }
  },
  {
  "id": "u_bad_2",
  "name": "灵根堵塞",
  "grade": 0,
  "desc": "灵脉不通，修炼困难",
  "bonuses": {
  "expRate": -0.08
  }
  },
  {
  "id": "u_bad_3",
  "name": "体弱多病",
  "grade": 0,
  "desc": "身体羸弱，动辄生病",
  "bonuses": {
  "hp": -0.1,
  "def": -0.05
  }
  },
  {
  "id": "u_bad_4",
  "name": "心魔深种",
  "grade": 0,
  "desc": "心魔缠身，难以自拔",
  "bonuses": {
  "mp": -0.1,
  "expRate": -0.03
  }
  },
  {
  "id": "u_bad_5",
  "name": "天妒英才",
  "grade": 0,
  "desc": "天道不容，劫难不断",
  "bonuses": {
  "luck": -5,
  "expRate": -0.05
  }
  },
  {
  "id": "u_bad_6",
  "name": "五感迟钝",
  "grade": 0,
  "desc": "感知迟钝，修炼缓慢",
  "bonuses": {
  "expRate": -0.06,
  "dodgeRate": -0.03
  }
  },
  {
  "id": "u_bad_7",
  "name": "招灾体质",
  "grade": 0,
  "desc": "走到哪里灾祸跟到哪里",
  "bonuses": {
  "luck": -3,
  "hp": -0.05
  }
  },
  {
  "id": "u_bad_8",
  "name": "灵气排斥",
  "grade": 0,
  "desc": "天地灵气对你避而远之",
  "bonuses": {
  "expRate": -0.1,
  "mp": -0.05
  }
  },
  {
  "id": "u_bad_9",
  "name": "命犯孤星",
  "grade": 0,
  "desc": "天煞孤星，六亲无缘",
  "bonuses": {
  "luck": -4,
  "goldRate": -0.1
  }
  },
  {
  "id": "u_bad_10",
  "name": "根基虚浮",
  "grade": 0,
  "desc": "修炼根基不稳，上限极低",
  "bonuses": {
  "atk": -0.05,
  "def": -0.05,
  "expRate": -0.04
  }
  },
  {
  "id": "u_bad_11",
  "name": "经脉逆转",
  "grade": 0,
  "desc": "经脉逆行，修炼事倍功半",
  "bonuses": {
  "expRate": -0.12,
  "mp": -0.08
  }
  },
  {
  "id": "u_bad_12",
  "name": "业力缠身",
  "grade": 0,
  "desc": "前世业障深重，此生难修",
  "bonuses": {
  "expRate": -0.07,
  "luck": -3,
  "goldRate": -0.05
  }
  },
  {
  "id": "human_t1",
  "name": "残破的人族之力",
  "grade": 0,
  "desc": "人道之力凝聚的废弃级词条",
  "bonuses": {
  "mp": 0
  },
  "path": "human"
  },
  {
  "id": "human_t2",
  "name": "腐朽的文明之力",
  "grade": 0,
  "desc": "人道之力凝聚的废弃级词条",
  "bonuses": {
  "critRate": 0
  },
  "path": "human"
  },
  {
  "id": "human_t3",
  "name": "凋零的智慧之力",
  "grade": 0,
  "desc": "人道之力凝聚的废弃级词条",
  "bonuses": {
  "atk": 0
  },
  "path": "human"
  },
  {
  "id": "human_t4",
  "name": "衰败的文道之力",
  "grade": 0,
  "desc": "人道之力凝聚的废弃级词条",
  "bonuses": {
  "mp": 0
  },
  "path": "human"
  },
  {
  "id": "human_t5",
  "name": "枯萎的武道之力",
  "grade": 0,
  "desc": "人道之力凝聚的废弃级词条",
  "bonuses": {
  "critRate": 0
  },
  "path": "human"
  },
  {
  "id": "u_waste_1",
  "name": "资质愚钝",
  "grade": 1,
  "desc": "天资愚钝，领悟力差",
  "bonuses": {
  "expRate": -0.03
  }
  },
  {
  "id": "u_waste_2",
  "name": "胆小如鼠",
  "grade": 1,
  "desc": "性格懦弱，不敢争先",
  "bonuses": {
  "atk": -0.03,
  "critRate": -0.02
  }
  },
  {
  "id": "u_waste_3",
  "name": "好吃懒做",
  "grade": 1,
  "desc": "天性懒惰，不思进取",
  "bonuses": {
  "expRate": -0.04,
  "goldRate": -0.03
  }
  },
  {
  "id": "u_waste_4",
  "name": "目不识丁",
  "grade": 1,
  "desc": "大字不识，功法难悟",
  "bonuses": {
  "expRate": -0.05
  }
  },
  {
  "id": "u_waste_5",
  "name": "五行偏枯",
  "grade": 1,
  "desc": "五行不全，修炼受限",
  "bonuses": {
  "mp": -0.05,
  "expRate": -0.02
  }
  },
  {
  "id": "u_waste_6",
  "name": "心浮气躁",
  "grade": 1,
  "desc": "性情急躁，难以静修",
  "bonuses": {
  "expRate": -0.04,
  "critRate": -0.01
  }
  },
  {
  "id": "u_waste_7",
  "name": "筋骨不佳",
  "grade": 1,
  "desc": "筋骨平庸，肉体凡胎",
  "bonuses": {
  "hp": -0.05,
  "atk": -0.02
  }
  },
  {
  "id": "u_waste_8",
  "name": "气运低迷",
  "grade": 1,
  "desc": "运气不好，喝水都塞牙",
  "bonuses": {
  "luck": -2,
  "goldRate": -0.03
  }
  },
  {
  "id": "u_waste_9",
  "name": "反应迟缓",
  "grade": 1,
  "desc": "反应慢半拍，战斗吃亏",
  "bonuses": {
  "dodgeRate": -0.03,
  "atk": -0.02
  }
  },
  {
  "id": "u_waste_10",
  "name": "贪生怕死",
  "grade": 1,
  "desc": "过于谨慎，错失良机",
  "bonuses": {
  "atk": -0.04,
  "luck": -1
  }
  },
  {
  "id": "u_waste_11",
  "name": "不善言辞",
  "grade": 1,
  "desc": "嘴笨舌拙，难交道友",
  "bonuses": {
  "goldRate": -0.05,
  "luck": -1
  }
  },
  {
  "id": "u_waste_12",
  "name": "嗅觉不灵",
  "grade": 1,
  "desc": "闻不到灵草的气味",
  "bonuses": {
  "goldRate": -0.04
  }
  },
  {
  "id": "u_waste_13",
  "name": "方向感差",
  "grade": 1,
  "desc": "经常迷路，浪费时间",
  "bonuses": {
  "expRate": -0.02,
  "luck": -1
  }
  },
  {
  "id": "u_waste_14",
  "name": "恐高症",
  "grade": 1,
  "desc": "无法御剑飞行",
  "bonuses": {
  "dodgeRate": -0.02,
  "expRate": -0.01
  }
  },
  {
  "id": "u_waste_15",
  "name": "社恐体质",
  "grade": 1,
  "desc": "害怕与人交流",
  "bonuses": {
  "goldRate": -0.03,
  "def": -0.01
  }
  },
  {
  "id": "human_t6",
  "name": "微弱的人族之力",
  "grade": 1,
  "desc": "人道之力凝聚的垃圾级词条",
  "bonuses": {
  "def": 0.153
  },
  "path": "human"
  },
  {
  "id": "human_t7",
  "name": "黯淡的文明之力",
  "grade": 1,
  "desc": "人道之力凝聚的垃圾级词条",
  "bonuses": {
  "expRate": 0.17
  },
  "path": "human"
  },
  {
  "id": "human_t8",
  "name": "微光的智慧之力",
  "grade": 1,
  "desc": "人道之力凝聚的垃圾级词条",
  "bonuses": {
  "dodgeRate": 0.127
  },
  "path": "human"
  },
  {
  "id": "human_t9",
  "name": "淡薄的文道之力",
  "grade": 1,
  "desc": "人道之力凝聚的垃圾级词条",
  "bonuses": {
  "def": 0.159
  },
  "path": "human"
  },
  {
  "id": "human_t10",
  "name": "稀薄的武道之力",
  "grade": 1,
  "desc": "人道之力凝聚的垃圾级词条",
  "bonuses": {
  "expRate": 0.136
  },
  "path": "human"
  },
  {
  "id": "human_t11",
  "name": "微弱的谋略之力",
  "grade": 1,
  "desc": "人道之力凝聚的垃圾级词条",
  "bonuses": {
  "dodgeRate": 0.14
  },
  "path": "human"
  },
  {
  "id": "human_t12",
  "name": "黯淡的工匠之力",
  "grade": 1,
  "desc": "人道之力凝聚的垃圾级词条",
  "bonuses": {
  "def": 0.135
  },
  "path": "human"
  },
  {
  "id": "u_fish_1",
  "name": "勉强及格",
  "grade": 2,
  "desc": "资质勉强够用，聊胜于无",
  "bonuses": {
  "expRate": 0.01
  }
  },
  {
  "id": "u_fish_2",
  "name": "小有慧根",
  "grade": 2,
  "desc": "有一丝修仙资质",
  "bonuses": {
  "expRate": 0.02,
  "mp": 0.02
  }
  },
  {
  "id": "u_fish_3",
  "name": "皮糙肉厚",
  "grade": 2,
  "desc": "比常人耐打一些",
  "bonuses": {
  "hp": 0.03,
  "def": 0.02
  }
  },
  {
  "id": "u_fish_4",
  "name": "手脚麻利",
  "grade": 2,
  "desc": "动作比常人快",
  "bonuses": {
  "atk": 0.02,
  "dodgeRate": 0.01
  }
  },
  {
  "id": "u_fish_5",
  "name": "嗅觉灵敏",
  "grade": 2,
  "desc": "能闻到灵草的气味",
  "bonuses": {
  "goldRate": 0.02,
  "luck": 1
  }
  },
  {
  "id": "u_fish_6",
  "name": "记性尚可",
  "grade": 2,
  "desc": "功法记得住",
  "bonuses": {
  "expRate": 0.015
  }
  },
  {
  "id": "u_fish_7",
  "name": "饭量惊人",
  "grade": 2,
  "desc": "吃得多力气大",
  "bonuses": {
  "hp": 0.02,
  "atk": 0.01
  }
  },
  {
  "id": "u_fish_8",
  "name": "睡眠充足",
  "grade": 2,
  "desc": "休息效率高",
  "bonuses": {
  "expRate": 0.02
  }
  },
  {
  "id": "u_fish_9",
  "name": "视力不错",
  "grade": 2,
  "desc": "看得远看得清",
  "bonuses": {
  "critRate": 0.01,
  "dodgeRate": 0.01
  }
  },
  {
  "id": "u_fish_10",
  "name": "运气普通",
  "grade": 2,
  "desc": "不好不坏的运气",
  "bonuses": {
  "luck": 0
  }
  },
  {
  "id": "u_fish_11",
  "name": "韧性十足",
  "grade": 2,
  "desc": "不容易放弃",
  "bonuses": {
  "hp": 0.02,
  "def": 0.01
  }
  },
  {
  "id": "u_fish_12",
  "name": "胆子够大",
  "grade": 2,
  "desc": "敢想敢做",
  "bonuses": {
  "atk": 0.02,
  "critRate": 0.01
  }
  },
  {
  "id": "u_fish_13",
  "name": "好奇心强",
  "grade": 2,
  "desc": "喜欢探索",
  "bonuses": {
  "luck": 1,
  "expRate": 0.01
  }
  },
  {
  "id": "u_fish_14",
  "name": "人缘不错",
  "grade": 2,
  "desc": "容易交到朋友",
  "bonuses": {
  "goldRate": 0.02,
  "luck": 1
  }
  },
  {
  "id": "u_fish_15",
  "name": "适应力强",
  "grade": 2,
  "desc": "到哪都能活",
  "bonuses": {
  "hp": 0.01,
  "def": 0.01,
  "expRate": 0.01
  }
  },
  {
  "id": "u_fish_16",
  "name": "直觉敏锐",
  "grade": 2,
  "desc": "偶尔能感觉到危险",
  "bonuses": {
  "dodgeRate": 0.02,
  "luck": 1
  }
  },
  {
  "id": "u_fish_17",
  "name": "手巧心灵",
  "grade": 2,
  "desc": "擅长手工",
  "bonuses": {
  "def": 0.02,
  "goldRate": 0.01
  }
  },
  {
  "id": "u_fish_18",
  "name": "耐力持久",
  "grade": 2,
  "desc": "能坚持更久",
  "bonuses": {
  "hp": 0.03,
  "expRate": 0.01
  }
  },
  {
  "id": "human_t13",
  "name": "普通的人族之力",
  "grade": 2,
  "desc": "人道之力凝聚的杂鱼级词条",
  "bonuses": {
  "goldRate": 0.258,
  "critRate": 0.084
  },
  "path": "human"
  },
  {
  "id": "human_t14",
  "name": "寻常的文明之力",
  "grade": 2,
  "desc": "人道之力凝聚的杂鱼级词条",
  "bonuses": {
  "luck": 0.352,
  "expRate": 0.077
  },
  "path": "human"
  },
  {
  "id": "human_t15",
  "name": "平凡的智慧之力",
  "grade": 2,
  "desc": "人道之力凝聚的杂鱼级词条",
  "bonuses": {
  "hp": 0.321
  },
  "path": "human"
  },
  {
  "id": "human_t16",
  "name": "一般的文道之力",
  "grade": 2,
  "desc": "人道之力凝聚的杂鱼级词条",
  "bonuses": {
  "goldRate": 0.353,
  "atk": 0.083
  },
  "path": "human"
  },
  {
  "id": "human_t17",
  "name": "基本的武道之力",
  "grade": 2,
  "desc": "人道之力凝聚的杂鱼级词条",
  "bonuses": {
  "luck": 0.345,
  "dodgeRate": 0.088
  },
  "path": "human"
  },
  {
  "id": "human_t18",
  "name": "普通的谋略之力",
  "grade": 2,
  "desc": "人道之力凝聚的杂鱼级词条",
  "bonuses": {
  "hp": 0.3,
  "goldRate": 0.076
  },
  "path": "human"
  },
  {
  "id": "human_t19",
  "name": "寻常的工匠之力",
  "grade": 2,
  "desc": "人道之力凝聚的杂鱼级词条",
  "bonuses": {
  "goldRate": 0.311,
  "mp": 0.067
  },
  "path": "human"
  },
  {
  "id": "human_t20",
  "name": "平凡的医道之力",
  "grade": 2,
  "desc": "人道之力凝聚的杂鱼级词条",
  "bonuses": {
  "luck": 0.275,
  "def": 0.062
  },
  "path": "human"
  },
  {
  "id": "human_t21",
  "name": "一般的商道之力",
  "grade": 2,
  "desc": "人道之力凝聚的杂鱼级词条",
  "bonuses": {
  "hp": 0.242,
  "luck": 0.063
  },
  "path": "human"
  },
  {
  "id": "u_unrank_1",
  "name": "小聪明",
  "grade": 3,
  "desc": "有点小聪明，但格局不大",
  "bonuses": {
  "expRate": 0.03,
  "luck": 1
  }
  },
  {
  "id": "u_unrank_2",
  "name": "铜皮铁骨",
  "grade": 3,
  "desc": "身体比常人结实",
  "bonuses": {
  "hp": 0.05,
  "def": 0.04
  }
  },
  {
  "id": "u_unrank_3",
  "name": "耳聪目明",
  "grade": 3,
  "desc": "五感灵敏",
  "bonuses": {
  "critRate": 0.02,
  "dodgeRate": 0.02
  }
  },
  {
  "id": "u_unrank_4",
  "name": "勤奋刻苦",
  "grade": 3,
  "desc": "比别人更努力",
  "bonuses": {
  "expRate": 0.04
  }
  },
  {
  "id": "u_unrank_5",
  "name": "福缘浅薄",
  "grade": 3,
  "desc": "有点小运气",
  "bonuses": {
  "luck": 2,
  "goldRate": 0.03
  }
  },
  {
  "id": "u_unrank_6",
  "name": "力气过人",
  "grade": 3,
  "desc": "比常人力气大",
  "bonuses": {
  "atk": 0.05
  }
  },
  {
  "id": "u_unrank_7",
  "name": "灵觉初醒",
  "grade": 3,
  "desc": "对灵气有微弱感应",
  "bonuses": {
  "mp": 0.04,
  "expRate": 0.02
  }
  },
  {
  "id": "u_unrank_8",
  "name": "战斗本能",
  "grade": 3,
  "desc": "天生的战斗直觉",
  "bonuses": {
  "atk": 0.03,
  "critRate": 0.02
  }
  },
  {
  "id": "u_unrank_9",
  "name": "心志坚定",
  "grade": 3,
  "desc": "不容易被迷惑",
  "bonuses": {
  "mp": 0.03,
  "def": 0.02
  }
  },
  {
  "id": "u_unrank_10",
  "name": "灵草亲和",
  "grade": 3,
  "desc": "种草有一手",
  "bonuses": {
  "goldRate": 0.04
  }
  },
  {
  "id": "u_unrank_11",
  "name": "速度见长",
  "grade": 3,
  "desc": "比常人快一些",
  "bonuses": {
  "dodgeRate": 0.03,
  "atk": 0.02
  }
  },
  {
  "id": "u_unrank_12",
  "name": "记忆力好",
  "grade": 3,
  "desc": "功法过目不忘",
  "bonuses": {
  "expRate": 0.03,
  "mp": 0.02
  }
  },
  {
  "id": "u_unrank_13",
  "name": "社交达人",
  "grade": 3,
  "desc": "人缘极好",
  "bonuses": {
  "goldRate": 0.03,
  "luck": 2
  }
  },
  {
  "id": "u_unrank_14",
  "name": "危机嗅觉",
  "grade": 3,
  "desc": "总能提前感知危险",
  "bonuses": {
  "dodgeRate": 0.03,
  "luck": 1
  }
  },
  {
  "id": "u_unrank_15",
  "name": "自学成才",
  "grade": 3,
  "desc": "自学能力强",
  "bonuses": {
  "expRate": 0.03
  }
  },
  {
  "id": "human_t22",
  "name": "初生的人族之力",
  "grade": 3,
  "desc": "人道之力凝聚的不入流级词条",
  "bonuses": {
  "critRate": 0.504,
  "dodgeRate": 0.093
  },
  "path": "human"
  },
  {
  "id": "human_t23",
  "name": "萌芽的文明之力",
  "grade": 3,
  "desc": "人道之力凝聚的不入流级词条",
  "bonuses": {
  "atk": 0.417,
  "goldRate": 0.132
  },
  "path": "human"
  },
  {
  "id": "human_t24",
  "name": "初成的智慧之力",
  "grade": 3,
  "desc": "人道之力凝聚的不入流级词条",
  "bonuses": {
  "mp": 0.421
  },
  "path": "human"
  },
  {
  "id": "human_t25",
  "name": "初现的文道之力",
  "grade": 3,
  "desc": "人道之力凝聚的不入流级词条",
  "bonuses": {
  "critRate": 0.475,
  "def": 0.111
  },
  "path": "human"
  },
  {
  "id": "human_t26",
  "name": "雏形的武道之力",
  "grade": 3,
  "desc": "人道之力凝聚的不入流级词条",
  "bonuses": {
  "atk": 0.414,
  "luck": 0.118
  },
  "path": "human"
  },
  {
  "id": "human_t27",
  "name": "初生的谋略之力",
  "grade": 3,
  "desc": "人道之力凝聚的不入流级词条",
  "bonuses": {
  "mp": 0.551,
  "critRate": 0.108
  },
  "path": "human"
  },
  {
  "id": "human_t28",
  "name": "萌芽的工匠之力",
  "grade": 3,
  "desc": "人道之力凝聚的不入流级词条",
  "bonuses": {
  "critRate": 0.52,
  "expRate": 0.081
  },
  "path": "human"
  },
  {
  "id": "u_rank_1",
  "name": "资质入流",
  "grade": 4,
  "desc": "修仙资质勉强入流",
  "bonuses": {
  "expRate": 0.05,
  "mp": 0.03
  }
  },
  {
  "id": "u_rank_2",
  "name": "铜墙铁壁",
  "grade": 4,
  "desc": "防御力不俗",
  "bonuses": {
  "def": 0.08,
  "hp": 0.05
  }
  },
  {
  "id": "u_rank_3",
  "name": "利刃锋芒",
  "grade": 4,
  "desc": "攻击力出色",
  "bonuses": {
  "atk": 0.08,
  "critRate": 0.03
  }
  },
  {
  "id": "u_rank_4",
  "name": "气运加身",
  "grade": 4,
  "desc": "有几分气运",
  "bonuses": {
  "luck": 3,
  "goldRate": 0.05
  }
  },
  {
  "id": "u_rank_5",
  "name": "悟性尚佳",
  "grade": 4,
  "desc": "领悟力不错",
  "bonuses": {
  "expRate": 0.06,
  "mp": 0.02
  }
  },
  {
  "id": "u_rank_6",
  "name": "体魄强健",
  "grade": 4,
  "desc": "身体素质优秀",
  "bonuses": {
  "hp": 0.08,
  "atk": 0.03
  }
  },
  {
  "id": "u_rank_7",
  "name": "身法灵活",
  "grade": 4,
  "desc": "闪避能力出众",
  "bonuses": {
  "dodgeRate": 0.05,
  "atk": 0.02
  }
  },
  {
  "id": "u_rank_8",
  "name": "灵力充沛",
  "grade": 4,
  "desc": "灵力储备丰厚",
  "bonuses": {
  "mp": 0.08,
  "expRate": 0.03
  }
  },
  {
  "id": "u_rank_9",
  "name": "感知敏锐",
  "grade": 4,
  "desc": "对危险有敏锐感知",
  "bonuses": {
  "dodgeRate": 0.04,
  "luck": 2
  }
  },
  {
  "id": "u_rank_10",
  "name": "经商天赋",
  "grade": 4,
  "desc": "做生意有头脑",
  "bonuses": {
  "goldRate": 0.08
  }
  },
  {
  "id": "u_rank_11",
  "name": "坚韧不拔",
  "grade": 4,
  "desc": "意志力坚定",
  "bonuses": {
  "hp": 0.05,
  "def": 0.04,
  "expRate": 0.02
  }
  },
  {
  "id": "u_rank_12",
  "name": "战斗天赋",
  "grade": 4,
  "desc": "天生战士",
  "bonuses": {
  "atk": 0.06,
  "critRate": 0.03,
  "dodgeRate": 0.02
  }
  },
  {
  "id": "human_t29",
  "name": "凝聚的人族之力",
  "grade": 4,
  "desc": "人道之力凝聚的入流级词条",
  "bonuses": {
  "def": 0.748,
  "mp": 0.181
  },
  "path": "human"
  },
  {
  "id": "human_t30",
  "name": "成型的文明之力",
  "grade": 4,
  "desc": "人道之力凝聚的入流级词条",
  "bonuses": {
  "expRate": 0.742,
  "def": 0.108
  },
  "path": "human"
  },
  {
  "id": "human_t31",
  "name": "成熟的智慧之力",
  "grade": 4,
  "desc": "人道之力凝聚的入流级词条",
  "bonuses": {
  "dodgeRate": 0.763,
  "luck": 0.184
  },
  "path": "human"
  },
  {
  "id": "human_t32",
  "name": "稳固的文道之力",
  "grade": 4,
  "desc": "人道之力凝聚的入流级词条",
  "bonuses": {
  "def": 0.83,
  "critRate": 0.207
  },
  "path": "human"
  },
  {
  "id": "human_t33",
  "name": "坚实的武道之力",
  "grade": 4,
  "desc": "人道之力凝聚的入流级词条",
  "bonuses": {
  "expRate": 0.572
  },
  "path": "human"
  },
  {
  "id": "human_t34",
  "name": "凝聚的谋略之力",
  "grade": 4,
  "desc": "人道之力凝聚的入流级词条",
  "bonuses": {
  "dodgeRate": 0.665,
  "hp": 0.148
  },
  "path": "human"
  },
  {
  "id": "u_yel_1",
  "name": "黄级慧根",
  "grade": 5,
  "desc": "黄级修仙资质",
  "bonuses": {
  "expRate": 0.08,
  "mp": 0.05
  }
  },
  {
  "id": "u_yel_2",
  "name": "铁壁之躯",
  "grade": 5,
  "desc": "防御力出色",
  "bonuses": {
  "def": 0.12,
  "hp": 0.08
  }
  },
  {
  "id": "u_yel_3",
  "name": "锋锐之体",
  "grade": 5,
  "desc": "攻击力超群",
  "bonuses": {
  "atk": 0.1,
  "critRate": 0.04
  }
  },
  {
  "id": "u_yel_4",
  "name": "气运亨通",
  "grade": 5,
  "desc": "运气不错",
  "bonuses": {
  "luck": 4,
  "goldRate": 0.06
  }
  },
  {
  "id": "u_yel_5",
  "name": "过目不忘",
  "grade": 5,
  "desc": "功法一看就会",
  "bonuses": {
  "expRate": 0.1
  }
  },
  {
  "id": "u_yel_6",
  "name": "百毒不侵",
  "grade": 5,
  "desc": "毒素免疫",
  "bonuses": {
  "hp": 0.06,
  "def": 0.05
  }
  },
  {
  "id": "u_yel_7",
  "name": "御风而行",
  "grade": 5,
  "desc": "速度极快",
  "bonuses": {
  "dodgeRate": 0.06,
  "atk": 0.04
  }
  },
  {
  "id": "u_yel_8",
  "name": "灵力如海",
  "grade": 5,
  "desc": "灵力储备惊人",
  "bonuses": {
  "mp": 0.1,
  "expRate": 0.05
  }
  },
  {
  "id": "u_yel_9",
  "name": "预知危险",
  "grade": 5,
  "desc": "总能提前躲避",
  "bonuses": {
  "dodgeRate": 0.08,
  "luck": 2
  }
  },
  {
  "id": "u_yel_10",
  "name": "招财进宝",
  "grade": 5,
  "desc": "财运亨通",
  "bonuses": {
  "goldRate": 0.1,
  "luck": 2
  }
  },
  {
  "id": "u_yel_11",
  "name": "铜皮铁骨",
  "grade": 5,
  "desc": "肉体极其强韧",
  "bonuses": {
  "hp": 0.1,
  "def": 0.06
  }
  },
  {
  "id": "u_yel_12",
  "name": "战斗狂人",
  "grade": 5,
  "desc": "越战越勇",
  "bonuses": {
  "atk": 0.08,
  "critRate": 0.05
  }
  },
  {
  "id": "u_yel_13",
  "name": "修炼达人",
  "grade": 5,
  "desc": "修炼效率极高",
  "bonuses": {
  "expRate": 0.09,
  "mp": 0.04
  }
  },
  {
  "id": "u_yel_14",
  "name": "全能选手",
  "grade": 5,
  "desc": "各方面均衡发展",
  "bonuses": {
  "atk": 0.04,
  "def": 0.04,
  "hp": 0.04,
  "mp": 0.04,
  "expRate": 0.04
  }
  },
  {
  "id": "human_t35",
  "name": "闪耀的人族之力",
  "grade": 5,
  "desc": "人道之力凝聚的黄级词条",
  "bonuses": {
  "hp": 1.069,
  "def": 0.169
  },
  "path": "human"
  },
  {
  "id": "human_t36",
  "name": "明亮的文明之力",
  "grade": 5,
  "desc": "人道之力凝聚的黄级词条",
  "bonuses": {
  "goldRate": 1.009,
  "luck": 0.139
  },
  "path": "human"
  },
  {
  "id": "human_t37",
  "name": "光耀的智慧之力",
  "grade": 5,
  "desc": "人道之力凝聚的黄级词条",
  "bonuses": {
  "luck": 0.769,
  "critRate": 0.162
  },
  "path": "human"
  },
  {
  "id": "human_t38",
  "name": "璀璨的文道之力",
  "grade": 5,
  "desc": "人道之力凝聚的黄级词条",
  "bonuses": {
  "hp": 1.005,
  "expRate": 0.186
  },
  "path": "human"
  },
  {
  "id": "human_t39",
  "name": "夺目的武道之力",
  "grade": 5,
  "desc": "人道之力凝聚的黄级词条",
  "bonuses": {
  "goldRate": 1.046,
  "hp": 0.157
  },
  "path": "human"
  },
  {
  "id": "human_t40",
  "name": "闪耀的谋略之力",
  "grade": 5,
  "desc": "人道之力凝聚的黄级词条",
  "bonuses": {
  "luck": 0.936,
  "atk": 0.225
  },
  "path": "human"
  },
  {
  "id": "human_t41",
  "name": "明亮的工匠之力",
  "grade": 5,
  "desc": "人道之力凝聚的黄级词条",
  "bonuses": {
  "hp": 1.057,
  "dodgeRate": 0.159
  },
  "path": "human"
  },
  {
  "id": "u_xuan_1",
  "name": "玄级天资",
  "grade": 6,
  "desc": "玄级修仙天赋",
  "bonuses": {
  "expRate": 0.12,
  "mp": 0.08
  }
  },
  {
  "id": "u_xuan_2",
  "name": "金刚不坏",
  "grade": 6,
  "desc": "防御力惊人",
  "bonuses": {
  "def": 0.15,
  "hp": 0.1
  }
  },
  {
  "id": "u_xuan_3",
  "name": "剑意凛然",
  "grade": 6,
  "desc": "攻击力极强",
  "bonuses": {
  "atk": 0.15,
  "critRate": 0.06
  }
  },
  {
  "id": "u_xuan_4",
  "name": "鸿运当头",
  "grade": 6,
  "desc": "好运连连",
  "bonuses": {
  "luck": 5,
  "goldRate": 0.08
  }
  },
  {
  "id": "u_xuan_5",
  "name": "天资聪颖",
  "grade": 6,
  "desc": "领悟力超群",
  "bonuses": {
  "expRate": 0.15
  }
  },
  {
  "id": "u_xuan_6",
  "name": "五行亲和",
  "grade": 6,
  "desc": "五行之力亲和",
  "bonuses": {
  "mp": 0.1,
  "expRate": 0.08,
  "atk": 0.03
  }
  },
  {
  "id": "u_xuan_7",
  "name": "雷霆之速",
  "grade": 6,
  "desc": "速度如闪电",
  "bonuses": {
  "dodgeRate": 0.1,
  "atk": 0.05
  }
  },
  {
  "id": "u_xuan_8",
  "name": "灵海深邃",
  "grade": 6,
  "desc": "灵力储备极深",
  "bonuses": {
  "mp": 0.15,
  "expRate": 0.06
  }
  },
  {
  "id": "u_xuan_9",
  "name": "天眼通",
  "grade": 6,
  "desc": "洞察万物",
  "bonuses": {
  "dodgeRate": 0.08,
  "critRate": 0.05,
  "luck": 2
  }
  },
  {
  "id": "u_xuan_10",
  "name": "富甲一方",
  "grade": 6,
  "desc": "灵石自动来",
  "bonuses": {
  "goldRate": 0.15,
  "luck": 3
  }
  },
  {
  "id": "u_xuan_11",
  "name": "龙象之力",
  "grade": 6,
  "desc": "力大无穷",
  "bonuses": {
  "atk": 0.12,
  "hp": 0.1,
  "def": 0.05
  }
  },
  {
  "id": "u_xuan_12",
  "name": "万法皆通",
  "grade": 6,
  "desc": "功法领悟极快",
  "bonuses": {
  "expRate": 0.12,
  "mp": 0.06,
  "atk": 0.04
  }
  },
  {
  "id": "u_xuan_13",
  "name": "九阳之体",
  "grade": 6,
  "desc": "阳气旺盛",
  "bonuses": {
  "atk": 0.1,
  "hp": 0.08,
  "expRate": 0.08
  }
  },
  {
  "id": "u_xuan_14",
  "name": "九阴之脉",
  "grade": 6,
  "desc": "阴气浓郁",
  "bonuses": {
  "mp": 0.12,
  "def": 0.06,
  "expRate": 0.08
  }
  },
  {
  "id": "human_t42",
  "name": "玄妙的人族之力",
  "grade": 6,
  "desc": "人道之力凝聚的玄级词条",
  "bonuses": {
  "critRate": 1.329
  },
  "path": "human"
  },
  {
  "id": "human_t43",
  "name": "深奥的文明之力",
  "grade": 6,
  "desc": "人道之力凝聚的玄级词条",
  "bonuses": {
  "atk": 1.448,
  "expRate": 0.241
  },
  "path": "human"
  },
  {
  "id": "human_t44",
  "name": "精妙的智慧之力",
  "grade": 6,
  "desc": "人道之力凝聚的玄级词条",
  "bonuses": {
  "mp": 1.136,
  "hp": 0.372
  },
  "path": "human"
  },
  {
  "id": "human_t45",
  "name": "通玄的文道之力",
  "grade": 6,
  "desc": "人道之力凝聚的玄级词条",
  "bonuses": {
  "critRate": 1.517,
  "atk": 0.322
  },
  "path": "human"
  },
  {
  "id": "human_t46",
  "name": "入微的武道之力",
  "grade": 6,
  "desc": "人道之力凝聚的玄级词条",
  "bonuses": {
  "atk": 1.308,
  "dodgeRate": 0.346
  },
  "path": "human"
  },
  {
  "id": "human_t47",
  "name": "玄妙的谋略之力",
  "grade": 6,
  "desc": "人道之力凝聚的玄级词条",
  "bonuses": {
  "mp": 1.103,
  "goldRate": 0.276
  },
  "path": "human"
  },
  {
  "id": "human_t48",
  "name": "深奥的工匠之力",
  "grade": 6,
  "desc": "人道之力凝聚的玄级词条",
  "bonuses": {
  "critRate": 1.159,
  "mp": 0.265
  },
  "path": "human"
  },
  {
  "id": "u_earth_1",
  "name": "地级天资",
  "grade": 7,
  "desc": "地级修仙天赋",
  "bonuses": {
  "expRate": 0.2,
  "mp": 0.12
  }
  },
  {
  "id": "u_earth_2",
  "name": "不灭金身",
  "grade": 7,
  "desc": "万法不侵",
  "bonuses": {
  "def": 0.2,
  "hp": 0.15
  }
  },
  {
  "id": "u_earth_3",
  "name": "剑道宗师",
  "grade": 7,
  "desc": "剑道天赋冠绝同辈",
  "bonuses": {
  "atk": 0.2,
  "critRate": 0.08
  }
  },
  {
  "id": "u_earth_4",
  "name": "天命之子",
  "grade": 7,
  "desc": "受天道眷顾",
  "bonuses": {
  "luck": 6,
  "goldRate": 0.1,
  "expRate": 0.05
  }
  },
  {
  "id": "u_earth_5",
  "name": "仙骨天成",
  "grade": 7,
  "desc": "天生仙骨",
  "bonuses": {
  "expRate": 0.22,
  "mp": 0.1
  }
  },
  {
  "id": "u_earth_6",
  "name": "五行均衡",
  "grade": 7,
  "desc": "五行完美均衡",
  "bonuses": {
  "atk": 0.08,
  "def": 0.08,
  "hp": 0.08,
  "mp": 0.08,
  "expRate": 0.08
  }
  },
  {
  "id": "u_earth_7",
  "name": "电光火石",
  "grade": 7,
  "desc": "速度无人能及",
  "bonuses": {
  "dodgeRate": 0.15,
  "atk": 0.08
  }
  },
  {
  "id": "u_earth_8",
  "name": "灵力无穷",
  "grade": 7,
  "desc": "灵力取之不尽",
  "bonuses": {
  "mp": 0.2,
  "expRate": 0.08
  }
  },
  {
  "id": "u_earth_9",
  "name": "预知未来",
  "grade": 7,
  "desc": "能预知片刻之后",
  "bonuses": {
  "dodgeRate": 0.12,
  "critRate": 0.08,
  "luck": 3
  }
  },
  {
  "id": "u_earth_10",
  "name": "聚宝盆",
  "grade": 7,
  "desc": "灵石如流水",
  "bonuses": {
  "goldRate": 0.2,
  "luck": 4
  }
  },
  {
  "id": "u_earth_11",
  "name": "神力盖世",
  "grade": 7,
  "desc": "力量超越极限",
  "bonuses": {
  "atk": 0.18,
  "hp": 0.12
  }
  },
  {
  "id": "u_earth_12",
  "name": "道心通明",
  "grade": 7,
  "desc": "道心澄澈无垢",
  "bonuses": {
  "expRate": 0.18,
  "mp": 0.1,
  "def": 0.05
  }
  },
  {
  "id": "human_t49",
  "name": "大地的人族之力",
  "grade": 7,
  "desc": "人道之力凝聚的地级词条",
  "bonuses": {
  "def": 2.12,
  "hp": 0.509
  },
  "path": "human"
  },
  {
  "id": "human_t50",
  "name": "厚重的文明之力",
  "grade": 7,
  "desc": "人道之力凝聚的地级词条",
  "bonuses": {
  "expRate": 1.892,
  "atk": 0.28
  },
  "path": "human"
  },
  {
  "id": "human_t51",
  "name": "承载的智慧之力",
  "grade": 7,
  "desc": "人道之力凝聚的地级词条",
  "bonuses": {
  "dodgeRate": 1.908
  },
  "path": "human"
  },
  {
  "id": "human_t52",
  "name": "深沉的文道之力",
  "grade": 7,
  "desc": "人道之力凝聚的地级词条",
  "bonuses": {
  "def": 1.857,
  "goldRate": 0.372
  },
  "path": "human"
  },
  {
  "id": "human_t53",
  "name": "沉稳的武道之力",
  "grade": 7,
  "desc": "人道之力凝聚的地级词条",
  "bonuses": {
  "expRate": 2.157,
  "mp": 0.531
  },
  "path": "human"
  },
  {
  "id": "human_t54",
  "name": "大地的谋略之力",
  "grade": 7,
  "desc": "人道之力凝聚的地级词条",
  "bonuses": {
  "dodgeRate": 2.018,
  "def": 0.286
  },
  "path": "human"
  },
  {
  "id": "u_heaven_1",
  "name": "天级天资",
  "grade": 8,
  "desc": "天级修仙天赋",
  "bonuses": {
  "expRate": 0.3,
  "mp": 0.15
  }
  },
  {
  "id": "u_heaven_2",
  "name": "不朽之躯",
  "grade": 8,
  "desc": "肉身近乎不朽",
  "bonuses": {
  "def": 0.25,
  "hp": 0.2
  }
  },
  {
  "id": "u_heaven_3",
  "name": "破灭之拳",
  "grade": 8,
  "desc": "一拳可破万物",
  "bonuses": {
  "atk": 0.25,
  "critRate": 0.1
  }
  },
  {
  "id": "u_heaven_4",
  "name": "天命所归",
  "grade": 8,
  "desc": "天命加身",
  "bonuses": {
  "luck": 8,
  "goldRate": 0.12,
  "expRate": 0.08
  }
  },
  {
  "id": "u_heaven_5",
  "name": "先天道体",
  "grade": 8,
  "desc": "先天大道之体",
  "bonuses": {
  "expRate": 0.3,
  "atk": 0.08,
  "def": 0.08,
  "hp": 0.08,
  "mp": 0.08
  }
  },
  {
  "id": "u_heaven_6",
  "name": "混沌亲和",
  "grade": 8,
  "desc": "对混沌之力有亲和",
  "bonuses": {
  "mp": 0.15,
  "expRate": 0.2,
  "atk": 0.05
  }
  },
  {
  "id": "u_heaven_7",
  "name": "时空感知",
  "grade": 8,
  "desc": "对时空有特殊感知",
  "bonuses": {
  "dodgeRate": 0.2,
  "critRate": 0.08,
  "luck": 4
  }
  },
  {
  "id": "u_heaven_8",
  "name": "造化之力",
  "grade": 8,
  "desc": "掌控造化之力",
  "bonuses": {
  "expRate": 0.25,
  "goldRate": 0.15,
  "mp": 0.1
  }
  },
  {
  "id": "u_heaven_9",
  "name": "因果之眼",
  "grade": 8,
  "desc": "能看透因果",
  "bonuses": {
  "luck": 6,
  "dodgeRate": 0.12,
  "expRate": 0.1
  }
  },
  {
  "id": "u_heaven_10",
  "name": "万法归一",
  "grade": 8,
  "desc": "所有功法融会贯通",
  "bonuses": {
  "expRate": 0.28,
  "atk": 0.1,
  "def": 0.1
  }
  },
  {
  "id": "human_t55",
  "name": "天降的人族之力",
  "grade": 8,
  "desc": "人道之力凝聚的天级词条",
  "bonuses": {
  "hp": 2.2,
  "atk": 0.489
  },
  "path": "human"
  },
  {
  "id": "human_t56",
  "name": "苍穹的文明之力",
  "grade": 8,
  "desc": "人道之力凝聚的天级词条",
  "bonuses": {
  "goldRate": 2.809,
  "dodgeRate": 0.411
  },
  "path": "human"
  },
  {
  "id": "human_t57",
  "name": "穹顶的智慧之力",
  "grade": 8,
  "desc": "人道之力凝聚的天级词条",
  "bonuses": {
  "luck": 2.343,
  "goldRate": 0.387
  },
  "path": "human"
  },
  {
  "id": "human_t58",
  "name": "高空的文道之力",
  "grade": 8,
  "desc": "人道之力凝聚的天级词条",
  "bonuses": {
  "hp": 2.254,
  "mp": 0.56
  },
  "path": "human"
  },
  {
  "id": "human_t59",
  "name": "凌空的武道之力",
  "grade": 8,
  "desc": "人道之力凝聚的天级词条",
  "bonuses": {
  "goldRate": 2.562,
  "def": 0.609
  },
  "path": "human"
  },
  {
  "id": "u_imm_1",
  "name": "仙级天资",
  "grade": 9,
  "desc": "仙级修仙天赋",
  "bonuses": {
  "expRate": 0.4,
  "mp": 0.2
  }
  },
  {
  "id": "u_imm_2",
  "name": "仙体初成",
  "grade": 9,
  "desc": "肉身初具仙体",
  "bonuses": {
  "def": 0.3,
  "hp": 0.25,
  "expRate": 0.1
  }
  },
  {
  "id": "u_imm_3",
  "name": "仙剑之魂",
  "grade": 9,
  "desc": "剑道已达仙人水准",
  "bonuses": {
  "atk": 0.3,
  "critRate": 0.12
  }
  },
  {
  "id": "u_imm_4",
  "name": "仙缘深厚",
  "grade": 9,
  "desc": "仙缘极深",
  "bonuses": {
  "luck": 10,
  "goldRate": 0.15,
  "expRate": 0.15
  }
  },
  {
  "id": "u_imm_5",
  "name": "太上忘情",
  "grade": 9,
  "desc": "心境已达太上之境",
  "bonuses": {
  "expRate": 0.45,
  "mp": 0.15,
  "def": 0.1
  }
  },
  {
  "id": "u_imm_6",
  "name": "天地为炉",
  "grade": 9,
  "desc": "以天地为炉鼎",
  "bonuses": {
  "atk": 0.15,
  "def": 0.15,
  "hp": 0.15,
  "mp": 0.15,
  "expRate": 0.15
  }
  },
  {
  "id": "u_imm_7",
  "name": "仙风道骨",
  "grade": 9,
  "desc": "仙风道骨，资质绝伦",
  "bonuses": {
  "expRate": 0.4,
  "atk": 0.12,
  "def": 0.12,
  "mp": 0.12
  }
  },
  {
  "id": "u_imm_8",
  "name": "命运编织者",
  "grade": 9,
  "desc": "能编织自身命运",
  "bonuses": {
  "luck": 8,
  "dodgeRate": 0.15,
  "goldRate": 0.12,
  "expRate": 0.1
  }
  },
  {
  "id": "human_t60",
  "name": "仙灵的人族之力",
  "grade": 9,
  "desc": "人道之力凝聚的仙级词条",
  "bonuses": {
  "atk": 4.087
  },
  "path": "human"
  },
  {
  "id": "human_t61",
  "name": "仙韵的文明之力",
  "grade": 9,
  "desc": "人道之力凝聚的仙级词条",
  "bonuses": {
  "mp": 2.884,
  "dodgeRate": 0.895
  },
  "path": "human"
  },
  {
  "id": "human_t62",
  "name": "仙气的智慧之力",
  "grade": 9,
  "desc": "人道之力凝聚的仙级词条",
  "bonuses": {
  "critRate": 3.402,
  "goldRate": 0.946
  },
  "path": "human"
  },
  {
  "id": "human_t63",
  "name": "仙华的文道之力",
  "grade": 9,
  "desc": "人道之力凝聚的仙级词条",
  "bonuses": {
  "atk": 2.972,
  "mp": 0.988
  },
  "path": "human"
  },
  {
  "id": "u_div_1",
  "name": "神级天资",
  "grade": 10,
  "desc": "神级修仙天赋",
  "bonuses": {
  "expRate": 0.5,
  "mp": 0.25
  }
  },
  {
  "id": "u_div_2",
  "name": "神体初铸",
  "grade": 10,
  "desc": "肉身初铸神体",
  "bonuses": {
  "def": 0.35,
  "hp": 0.3,
  "expRate": 0.15
  }
  },
  {
  "id": "u_div_3",
  "name": "弑神之力",
  "grade": 10,
  "desc": "拥有弑神的力量",
  "bonuses": {
  "atk": 0.35,
  "critRate": 0.15
  }
  },
  {
  "id": "u_div_4",
  "name": "天命主宰",
  "grade": 10,
  "desc": "主宰自身天命",
  "bonuses": {
  "luck": 12,
  "goldRate": 0.2,
  "expRate": 0.2
  }
  },
  {
  "id": "u_div_5",
  "name": "大道亲和",
  "grade": 10,
  "desc": "对大道有极深亲和",
  "bonuses": {
  "expRate": 0.55,
  "mp": 0.2,
  "def": 0.12
  }
  },
  {
  "id": "u_div_6",
  "name": "万物归元",
  "grade": 10,
  "desc": "万物之力归于己身",
  "bonuses": {
  "atk": 0.2,
  "def": 0.2,
  "hp": 0.2,
  "mp": 0.2,
  "expRate": 0.2
  }
  },
  {
  "id": "u_div_7",
  "name": "时空主宰",
  "grade": 10,
  "desc": "对时空有掌控力",
  "bonuses": {
  "dodgeRate": 0.2,
  "critRate": 0.12,
  "luck": 8,
  "expRate": 0.15
  }
  },
  {
  "id": "human_t64",
  "name": "神赐的人族之力",
  "grade": 10,
  "desc": "人道之力凝聚的神级词条",
  "bonuses": {
  "expRate": 4.625,
  "hp": 0.938
  },
  "path": "human"
  },
  {
  "id": "human_t65",
  "name": "神威的文明之力",
  "grade": 10,
  "desc": "人道之力凝聚的神级词条",
  "bonuses": {
  "dodgeRate": 5.513,
  "atk": 1.458
  },
  "path": "human"
  },
  {
  "id": "human_t66",
  "name": "神圣的智慧之力",
  "grade": 10,
  "desc": "人道之力凝聚的神级词条",
  "bonuses": {
  "def": 5.874,
  "dodgeRate": 1.388
  },
  "path": "human"
  },
  {
  "id": "u_saint_1",
  "name": "圣级天资",
  "grade": 11,
  "desc": "圣级修仙天赋",
  "bonuses": {
  "expRate": 0.65,
  "mp": 0.3
  }
  },
  {
  "id": "u_saint_2",
  "name": "圣体初现",
  "grade": 11,
  "desc": "肉身初具圣体",
  "bonuses": {
  "def": 0.4,
  "hp": 0.35,
  "expRate": 0.2
  }
  },
  {
  "id": "u_saint_3",
  "name": "斩圣之刃",
  "grade": 11,
  "desc": "攻击力可斩圣人",
  "bonuses": {
  "atk": 0.4,
  "critRate": 0.18
  }
  },
  {
  "id": "u_saint_4",
  "name": "圣人之姿",
  "grade": 11,
  "desc": "天生圣人之姿",
  "bonuses": {
  "expRate": 0.6,
  "atk": 0.15,
  "def": 0.15,
  "hp": 0.15,
  "mp": 0.15
  }
  },
  {
  "id": "u_saint_5",
  "name": "天道眷顾",
  "grade": 11,
  "desc": "天道亲自眷顾",
  "bonuses": {
  "luck": 15,
  "goldRate": 0.25,
  "expRate": 0.25
  }
  },
  {
  "id": "u_saint_6",
  "name": "轮回之主",
  "grade": 11,
  "desc": "对轮回有深刻理解",
  "bonuses": {
  "expRate": 0.6,
  "mp": 0.25,
  "dodgeRate": 0.15,
  "luck": 10
  }
  },
  {
  "id": "human_t67",
  "name": "圣洁的人族之力",
  "grade": 11,
  "desc": "人道之力凝聚的圣级词条",
  "bonuses": {
  "goldRate": 8.17,
  "critRate": 1.139
  },
  "path": "human"
  },
  {
  "id": "human_t68",
  "name": "圣光的文明之力",
  "grade": 11,
  "desc": "人道之力凝聚的圣级词条",
  "bonuses": {
  "luck": 5.929,
  "expRate": 1.851
  },
  "path": "human"
  },
  {
  "id": "u_chaos_1",
  "name": "混沌天资",
  "grade": 12,
  "desc": "混沌级修仙天赋",
  "bonuses": {
  "expRate": 0.8,
  "mp": 0.35,
  "atk": 0.15
  }
  },
  {
  "id": "u_chaos_2",
  "name": "混沌之体",
  "grade": 12,
  "desc": "混沌之力铸体",
  "bonuses": {
  "atk": 0.25,
  "def": 0.25,
  "hp": 0.25,
  "mp": 0.25,
  "expRate": 0.3
  }
  },
  {
  "id": "u_chaos_3",
  "name": "混沌之子",
  "grade": 12,
  "desc": "混沌之中的异数",
  "bonuses": {
  "luck": 20,
  "goldRate": 0.3,
  "expRate": 0.4,
  "atk": 0.15,
  "def": 0.15
  }
  },
  {
  "id": "u_chaos_4",
  "name": "万法归混沌",
  "grade": 12,
  "desc": "一切法归于混沌",
  "bonuses": {
  "expRate": 0.85,
  "atk": 0.2,
  "def": 0.2,
  "mp": 0.3
  }
  },
  {
  "id": "human_t69",
  "name": "混沌的人族之力",
  "grade": 12,
  "desc": "人道之力凝聚的混沌级词条",
  "bonuses": {
  "mp": 10.152
  },
  "path": "human"
  },
  {
  "id": "u_trans_1",
  "name": "超脱天资",
  "grade": 13,
  "desc": "超脱一切的天赋",
  "bonuses": {
  "expRate": 1,
  "mp": 0.4,
  "atk": 0.2
  }
  },
  {
  "id": "u_trans_2",
  "name": "超脱之体",
  "grade": 13,
  "desc": "超越一切的肉身",
  "bonuses": {
  "atk": 0.3,
  "def": 0.3,
  "hp": 0.3,
  "mp": 0.3,
  "expRate": 0.5
  }
  },
  {
  "id": "u_trans_3",
  "name": "天道化身",
  "grade": 13,
  "desc": "你就是天道的化身",
  "bonuses": {
  "luck": 25,
  "goldRate": 0.4,
  "expRate": 0.6,
  "atk": 0.2,
  "def": 0.2
  }
  },
  {
  "id": "u_trans_4",
  "name": "大道唯一",
  "grade": 13,
  "desc": "大道之中唯一的异数",
  "bonuses": {
  "expRate": 1.2,
  "atk": 0.25,
  "def": 0.25,
  "mp": 0.35,
  "luck": 15
  }
  },
  {
  "id": "human_t70",
  "name": "超脱的人族之力",
  "grade": 13,
  "desc": "人道之力凝聚的超脱级词条",
  "bonuses": {
  "dodgeRate": 16.629,
  "hp": 2.678
  },
  "path": "human"
  }

];

export const TRAITS_HEAVEN: any = [
{
  "id": "u_bad_1",
  "name": "霉运缠身",
  "grade": 0,
  "desc": "天生命苦，事事不顺",
  "bonuses": {
  "expRate": -0.05,
  "luck": -2
  }
  },
  {
  "id": "u_bad_2",
  "name": "灵根堵塞",
  "grade": 0,
  "desc": "灵脉不通，修炼困难",
  "bonuses": {
  "expRate": -0.08
  }
  },
  {
  "id": "u_bad_3",
  "name": "体弱多病",
  "grade": 0,
  "desc": "身体羸弱，动辄生病",
  "bonuses": {
  "hp": -0.1,
  "def": -0.05
  }
  },
  {
  "id": "u_bad_4",
  "name": "心魔深种",
  "grade": 0,
  "desc": "心魔缠身，难以自拔",
  "bonuses": {
  "mp": -0.1,
  "expRate": -0.03
  }
  },
  {
  "id": "u_bad_5",
  "name": "天妒英才",
  "grade": 0,
  "desc": "天道不容，劫难不断",
  "bonuses": {
  "luck": -5,
  "expRate": -0.05
  }
  },
  {
  "id": "u_bad_6",
  "name": "五感迟钝",
  "grade": 0,
  "desc": "感知迟钝，修炼缓慢",
  "bonuses": {
  "expRate": -0.06,
  "dodgeRate": -0.03
  }
  },
  {
  "id": "u_bad_7",
  "name": "招灾体质",
  "grade": 0,
  "desc": "走到哪里灾祸跟到哪里",
  "bonuses": {
  "luck": -3,
  "hp": -0.05
  }
  },
  {
  "id": "u_bad_8",
  "name": "灵气排斥",
  "grade": 0,
  "desc": "天地灵气对你避而远之",
  "bonuses": {
  "expRate": -0.1,
  "mp": -0.05
  }
  },
  {
  "id": "u_bad_9",
  "name": "命犯孤星",
  "grade": 0,
  "desc": "天煞孤星，六亲无缘",
  "bonuses": {
  "luck": -4,
  "goldRate": -0.1
  }
  },
  {
  "id": "u_bad_10",
  "name": "根基虚浮",
  "grade": 0,
  "desc": "修炼根基不稳，上限极低",
  "bonuses": {
  "atk": -0.05,
  "def": -0.05,
  "expRate": -0.04
  }
  },
  {
  "id": "u_bad_11",
  "name": "经脉逆转",
  "grade": 0,
  "desc": "经脉逆行，修炼事倍功半",
  "bonuses": {
  "expRate": -0.12,
  "mp": -0.08
  }
  },
  {
  "id": "u_bad_12",
  "name": "业力缠身",
  "grade": 0,
  "desc": "前世业障深重，此生难修",
  "bonuses": {
  "expRate": -0.07,
  "luck": -3,
  "goldRate": -0.05
  }
  },
  {
  "id": "heaven_t1",
  "name": "残破的天雷之力",
  "grade": 0,
  "desc": "天道之力凝聚的废弃级词条",
  "bonuses": {
  "mp": 0
  },
  "path": "heaven"
  },
  {
  "id": "heaven_t2",
  "name": "腐朽的天威之力",
  "grade": 0,
  "desc": "天道之力凝聚的废弃级词条",
  "bonuses": {
  "critRate": 0
  },
  "path": "heaven"
  },
  {
  "id": "heaven_t3",
  "name": "凋零的天命之力",
  "grade": 0,
  "desc": "天道之力凝聚的废弃级词条",
  "bonuses": {
  "atk": 0
  },
  "path": "heaven"
  },
  {
  "id": "heaven_t4",
  "name": "衰败的天道之力",
  "grade": 0,
  "desc": "天道之力凝聚的废弃级词条",
  "bonuses": {
  "mp": 0
  },
  "path": "heaven"
  },
  {
  "id": "heaven_t5",
  "name": "枯萎的星辰之力",
  "grade": 0,
  "desc": "天道之力凝聚的废弃级词条",
  "bonuses": {
  "critRate": 0
  },
  "path": "heaven"
  },
  {
  "id": "u_waste_1",
  "name": "资质愚钝",
  "grade": 1,
  "desc": "天资愚钝，领悟力差",
  "bonuses": {
  "expRate": -0.03
  }
  },
  {
  "id": "u_waste_2",
  "name": "胆小如鼠",
  "grade": 1,
  "desc": "性格懦弱，不敢争先",
  "bonuses": {
  "atk": -0.03,
  "critRate": -0.02
  }
  },
  {
  "id": "u_waste_3",
  "name": "好吃懒做",
  "grade": 1,
  "desc": "天性懒惰，不思进取",
  "bonuses": {
  "expRate": -0.04,
  "goldRate": -0.03
  }
  },
  {
  "id": "u_waste_4",
  "name": "目不识丁",
  "grade": 1,
  "desc": "大字不识，功法难悟",
  "bonuses": {
  "expRate": -0.05
  }
  },
  {
  "id": "u_waste_5",
  "name": "五行偏枯",
  "grade": 1,
  "desc": "五行不全，修炼受限",
  "bonuses": {
  "mp": -0.05,
  "expRate": -0.02
  }
  },
  {
  "id": "u_waste_6",
  "name": "心浮气躁",
  "grade": 1,
  "desc": "性情急躁，难以静修",
  "bonuses": {
  "expRate": -0.04,
  "critRate": -0.01
  }
  },
  {
  "id": "u_waste_7",
  "name": "筋骨不佳",
  "grade": 1,
  "desc": "筋骨平庸，肉体凡胎",
  "bonuses": {
  "hp": -0.05,
  "atk": -0.02
  }
  },
  {
  "id": "u_waste_8",
  "name": "气运低迷",
  "grade": 1,
  "desc": "运气不好，喝水都塞牙",
  "bonuses": {
  "luck": -2,
  "goldRate": -0.03
  }
  },
  {
  "id": "u_waste_9",
  "name": "反应迟缓",
  "grade": 1,
  "desc": "反应慢半拍，战斗吃亏",
  "bonuses": {
  "dodgeRate": -0.03,
  "atk": -0.02
  }
  },
  {
  "id": "u_waste_10",
  "name": "贪生怕死",
  "grade": 1,
  "desc": "过于谨慎，错失良机",
  "bonuses": {
  "atk": -0.04,
  "luck": -1
  }
  },
  {
  "id": "u_waste_11",
  "name": "不善言辞",
  "grade": 1,
  "desc": "嘴笨舌拙，难交道友",
  "bonuses": {
  "goldRate": -0.05,
  "luck": -1
  }
  },
  {
  "id": "u_waste_12",
  "name": "嗅觉不灵",
  "grade": 1,
  "desc": "闻不到灵草的气味",
  "bonuses": {
  "goldRate": -0.04
  }
  },
  {
  "id": "u_waste_13",
  "name": "方向感差",
  "grade": 1,
  "desc": "经常迷路，浪费时间",
  "bonuses": {
  "expRate": -0.02,
  "luck": -1
  }
  },
  {
  "id": "u_waste_14",
  "name": "恐高症",
  "grade": 1,
  "desc": "无法御剑飞行",
  "bonuses": {
  "dodgeRate": -0.02,
  "expRate": -0.01
  }
  },
  {
  "id": "u_waste_15",
  "name": "社恐体质",
  "grade": 1,
  "desc": "害怕与人交流",
  "bonuses": {
  "goldRate": -0.03,
  "def": -0.01
  }
  },
  {
  "id": "heaven_t6",
  "name": "微弱的天雷之力",
  "grade": 1,
  "desc": "天道之力凝聚的垃圾级词条",
  "bonuses": {
  "def": 0.157
  },
  "path": "heaven"
  },
  {
  "id": "heaven_t7",
  "name": "黯淡的天威之力",
  "grade": 1,
  "desc": "天道之力凝聚的垃圾级词条",
  "bonuses": {
  "expRate": 0.161
  },
  "path": "heaven"
  },
  {
  "id": "heaven_t8",
  "name": "微光的天命之力",
  "grade": 1,
  "desc": "天道之力凝聚的垃圾级词条",
  "bonuses": {
  "dodgeRate": 0.159
  },
  "path": "heaven"
  },
  {
  "id": "heaven_t9",
  "name": "淡薄的天道之力",
  "grade": 1,
  "desc": "天道之力凝聚的垃圾级词条",
  "bonuses": {
  "def": 0.154
  },
  "path": "heaven"
  },
  {
  "id": "heaven_t10",
  "name": "稀薄的星辰之力",
  "grade": 1,
  "desc": "天道之力凝聚的垃圾级词条",
  "bonuses": {
  "expRate": 0.174
  },
  "path": "heaven"
  },
  {
  "id": "heaven_t11",
  "name": "微弱的日月之力",
  "grade": 1,
  "desc": "天道之力凝聚的垃圾级词条",
  "bonuses": {
  "dodgeRate": 0.151
  },
  "path": "heaven"
  },
  {
  "id": "heaven_t12",
  "name": "黯淡的天眼之力",
  "grade": 1,
  "desc": "天道之力凝聚的垃圾级词条",
  "bonuses": {
  "def": 0.162
  },
  "path": "heaven"
  },
  {
  "id": "u_fish_1",
  "name": "勉强及格",
  "grade": 2,
  "desc": "资质勉强够用，聊胜于无",
  "bonuses": {
  "expRate": 0.01
  }
  },
  {
  "id": "u_fish_2",
  "name": "小有慧根",
  "grade": 2,
  "desc": "有一丝修仙资质",
  "bonuses": {
  "expRate": 0.02,
  "mp": 0.02
  }
  },
  {
  "id": "u_fish_3",
  "name": "皮糙肉厚",
  "grade": 2,
  "desc": "比常人耐打一些",
  "bonuses": {
  "hp": 0.03,
  "def": 0.02
  }
  },
  {
  "id": "u_fish_4",
  "name": "手脚麻利",
  "grade": 2,
  "desc": "动作比常人快",
  "bonuses": {
  "atk": 0.02,
  "dodgeRate": 0.01
  }
  },
  {
  "id": "u_fish_5",
  "name": "嗅觉灵敏",
  "grade": 2,
  "desc": "能闻到灵草的气味",
  "bonuses": {
  "goldRate": 0.02,
  "luck": 1
  }
  },
  {
  "id": "u_fish_6",
  "name": "记性尚可",
  "grade": 2,
  "desc": "功法记得住",
  "bonuses": {
  "expRate": 0.015
  }
  },
  {
  "id": "u_fish_7",
  "name": "饭量惊人",
  "grade": 2,
  "desc": "吃得多力气大",
  "bonuses": {
  "hp": 0.02,
  "atk": 0.01
  }
  },
  {
  "id": "u_fish_8",
  "name": "睡眠充足",
  "grade": 2,
  "desc": "休息效率高",
  "bonuses": {
  "expRate": 0.02
  }
  },
  {
  "id": "u_fish_9",
  "name": "视力不错",
  "grade": 2,
  "desc": "看得远看得清",
  "bonuses": {
  "critRate": 0.01,
  "dodgeRate": 0.01
  }
  },
  {
  "id": "u_fish_10",
  "name": "运气普通",
  "grade": 2,
  "desc": "不好不坏的运气",
  "bonuses": {
  "luck": 0
  }
  },
  {
  "id": "u_fish_11",
  "name": "韧性十足",
  "grade": 2,
  "desc": "不容易放弃",
  "bonuses": {
  "hp": 0.02,
  "def": 0.01
  }
  },
  {
  "id": "u_fish_12",
  "name": "胆子够大",
  "grade": 2,
  "desc": "敢想敢做",
  "bonuses": {
  "atk": 0.02,
  "critRate": 0.01
  }
  },
  {
  "id": "u_fish_13",
  "name": "好奇心强",
  "grade": 2,
  "desc": "喜欢探索",
  "bonuses": {
  "luck": 1,
  "expRate": 0.01
  }
  },
  {
  "id": "u_fish_14",
  "name": "人缘不错",
  "grade": 2,
  "desc": "容易交到朋友",
  "bonuses": {
  "goldRate": 0.02,
  "luck": 1
  }
  },
  {
  "id": "u_fish_15",
  "name": "适应力强",
  "grade": 2,
  "desc": "到哪都能活",
  "bonuses": {
  "hp": 0.01,
  "def": 0.01,
  "expRate": 0.01
  }
  },
  {
  "id": "u_fish_16",
  "name": "直觉敏锐",
  "grade": 2,
  "desc": "偶尔能感觉到危险",
  "bonuses": {
  "dodgeRate": 0.02,
  "luck": 1
  }
  },
  {
  "id": "u_fish_17",
  "name": "手巧心灵",
  "grade": 2,
  "desc": "擅长手工",
  "bonuses": {
  "def": 0.02,
  "goldRate": 0.01
  }
  },
  {
  "id": "u_fish_18",
  "name": "耐力持久",
  "grade": 2,
  "desc": "能坚持更久",
  "bonuses": {
  "hp": 0.03,
  "expRate": 0.01
  }
  },
  {
  "id": "heaven_t13",
  "name": "普通的天雷之力",
  "grade": 2,
  "desc": "天道之力凝聚的杂鱼级词条",
  "bonuses": {
  "goldRate": 0.344,
  "critRate": 0.072
  },
  "path": "heaven"
  },
  {
  "id": "heaven_t14",
  "name": "寻常的天威之力",
  "grade": 2,
  "desc": "天道之力凝聚的杂鱼级词条",
  "bonuses": {
  "luck": 0.322,
  "expRate": 0.087
  },
  "path": "heaven"
  },
  {
  "id": "heaven_t15",
  "name": "平凡的天命之力",
  "grade": 2,
  "desc": "天道之力凝聚的杂鱼级词条",
  "bonuses": {
  "hp": 0.349
  },
  "path": "heaven"
  },
  {
  "id": "heaven_t16",
  "name": "一般的天道之力",
  "grade": 2,
  "desc": "天道之力凝聚的杂鱼级词条",
  "bonuses": {
  "goldRate": 0.343,
  "atk": 0.057
  },
  "path": "heaven"
  },
  {
  "id": "heaven_t17",
  "name": "基本的星辰之力",
  "grade": 2,
  "desc": "天道之力凝聚的杂鱼级词条",
  "bonuses": {
  "luck": 0.325,
  "dodgeRate": 0.072
  },
  "path": "heaven"
  },
  {
  "id": "heaven_t18",
  "name": "普通的日月之力",
  "grade": 2,
  "desc": "天道之力凝聚的杂鱼级词条",
  "bonuses": {
  "hp": 0.324,
  "goldRate": 0.057
  },
  "path": "heaven"
  },
  {
  "id": "heaven_t19",
  "name": "寻常的天眼之力",
  "grade": 2,
  "desc": "天道之力凝聚的杂鱼级词条",
  "bonuses": {
  "goldRate": 0.257,
  "mp": 0.065
  },
  "path": "heaven"
  },
  {
  "id": "heaven_t20",
  "name": "平凡的天机之力",
  "grade": 2,
  "desc": "天道之力凝聚的杂鱼级词条",
  "bonuses": {
  "luck": 0.253,
  "def": 0.05
  },
  "path": "heaven"
  },
  {
  "id": "heaven_t21",
  "name": "一般的天火之力",
  "grade": 2,
  "desc": "天道之力凝聚的杂鱼级词条",
  "bonuses": {
  "hp": 0.317,
  "luck": 0.045
  },
  "path": "heaven"
  },
  {
  "id": "u_unrank_1",
  "name": "小聪明",
  "grade": 3,
  "desc": "有点小聪明，但格局不大",
  "bonuses": {
  "expRate": 0.03,
  "luck": 1
  }
  },
  {
  "id": "u_unrank_2",
  "name": "铜皮铁骨",
  "grade": 3,
  "desc": "身体比常人结实",
  "bonuses": {
  "hp": 0.05,
  "def": 0.04
  }
  },
  {
  "id": "u_unrank_3",
  "name": "耳聪目明",
  "grade": 3,
  "desc": "五感灵敏",
  "bonuses": {
  "critRate": 0.02,
  "dodgeRate": 0.02
  }
  },
  {
  "id": "u_unrank_4",
  "name": "勤奋刻苦",
  "grade": 3,
  "desc": "比别人更努力",
  "bonuses": {
  "expRate": 0.04
  }
  },
  {
  "id": "u_unrank_5",
  "name": "福缘浅薄",
  "grade": 3,
  "desc": "有点小运气",
  "bonuses": {
  "luck": 2,
  "goldRate": 0.03
  }
  },
  {
  "id": "u_unrank_6",
  "name": "力气过人",
  "grade": 3,
  "desc": "比常人力气大",
  "bonuses": {
  "atk": 0.05
  }
  },
  {
  "id": "u_unrank_7",
  "name": "灵觉初醒",
  "grade": 3,
  "desc": "对灵气有微弱感应",
  "bonuses": {
  "mp": 0.04,
  "expRate": 0.02
  }
  },
  {
  "id": "u_unrank_8",
  "name": "战斗本能",
  "grade": 3,
  "desc": "天生的战斗直觉",
  "bonuses": {
  "atk": 0.03,
  "critRate": 0.02
  }
  },
  {
  "id": "u_unrank_9",
  "name": "心志坚定",
  "grade": 3,
  "desc": "不容易被迷惑",
  "bonuses": {
  "mp": 0.03,
  "def": 0.02
  }
  },
  {
  "id": "u_unrank_10",
  "name": "灵草亲和",
  "grade": 3,
  "desc": "种草有一手",
  "bonuses": {
  "goldRate": 0.04
  }
  },
  {
  "id": "u_unrank_11",
  "name": "速度见长",
  "grade": 3,
  "desc": "比常人快一些",
  "bonuses": {
  "dodgeRate": 0.03,
  "atk": 0.02
  }
  },
  {
  "id": "u_unrank_12",
  "name": "记忆力好",
  "grade": 3,
  "desc": "功法过目不忘",
  "bonuses": {
  "expRate": 0.03,
  "mp": 0.02
  }
  },
  {
  "id": "u_unrank_13",
  "name": "社交达人",
  "grade": 3,
  "desc": "人缘极好",
  "bonuses": {
  "goldRate": 0.03,
  "luck": 2
  }
  },
  {
  "id": "u_unrank_14",
  "name": "危机嗅觉",
  "grade": 3,
  "desc": "总能提前感知危险",
  "bonuses": {
  "dodgeRate": 0.03,
  "luck": 1
  }
  },
  {
  "id": "u_unrank_15",
  "name": "自学成才",
  "grade": 3,
  "desc": "自学能力强",
  "bonuses": {
  "expRate": 0.03
  }
  },
  {
  "id": "heaven_t22",
  "name": "初生的天雷之力",
  "grade": 3,
  "desc": "天道之力凝聚的不入流级词条",
  "bonuses": {
  "critRate": 0.404,
  "dodgeRate": 0.143
  },
  "path": "heaven"
  },
  {
  "id": "heaven_t23",
  "name": "萌芽的天威之力",
  "grade": 3,
  "desc": "天道之力凝聚的不入流级词条",
  "bonuses": {
  "atk": 0.501,
  "goldRate": 0.11
  },
  "path": "heaven"
  },
  {
  "id": "heaven_t24",
  "name": "初成的天命之力",
  "grade": 3,
  "desc": "天道之力凝聚的不入流级词条",
  "bonuses": {
  "mp": 0.409
  },
  "path": "heaven"
  },
  {
  "id": "heaven_t25",
  "name": "初现的天道之力",
  "grade": 3,
  "desc": "天道之力凝聚的不入流级词条",
  "bonuses": {
  "critRate": 0.47,
  "def": 0.094
  },
  "path": "heaven"
  },
  {
  "id": "heaven_t26",
  "name": "雏形的星辰之力",
  "grade": 3,
  "desc": "天道之力凝聚的不入流级词条",
  "bonuses": {
  "atk": 0.492,
  "luck": 0.144
  },
  "path": "heaven"
  },
  {
  "id": "heaven_t27",
  "name": "初生的日月之力",
  "grade": 3,
  "desc": "天道之力凝聚的不入流级词条",
  "bonuses": {
  "mp": 0.446,
  "critRate": 0.142
  },
  "path": "heaven"
  },
  {
  "id": "heaven_t28",
  "name": "萌芽的天眼之力",
  "grade": 3,
  "desc": "天道之力凝聚的不入流级词条",
  "bonuses": {
  "critRate": 0.534,
  "expRate": 0.081
  },
  "path": "heaven"
  },
  {
  "id": "u_rank_1",
  "name": "资质入流",
  "grade": 4,
  "desc": "修仙资质勉强入流",
  "bonuses": {
  "expRate": 0.05,
  "mp": 0.03
  }
  },
  {
  "id": "u_rank_2",
  "name": "铜墙铁壁",
  "grade": 4,
  "desc": "防御力不俗",
  "bonuses": {
  "def": 0.08,
  "hp": 0.05
  }
  },
  {
  "id": "u_rank_3",
  "name": "利刃锋芒",
  "grade": 4,
  "desc": "攻击力出色",
  "bonuses": {
  "atk": 0.08,
  "critRate": 0.03
  }
  },
  {
  "id": "u_rank_4",
  "name": "气运加身",
  "grade": 4,
  "desc": "有几分气运",
  "bonuses": {
  "luck": 3,
  "goldRate": 0.05
  }
  },
  {
  "id": "u_rank_5",
  "name": "悟性尚佳",
  "grade": 4,
  "desc": "领悟力不错",
  "bonuses": {
  "expRate": 0.06,
  "mp": 0.02
  }
  },
  {
  "id": "u_rank_6",
  "name": "体魄强健",
  "grade": 4,
  "desc": "身体素质优秀",
  "bonuses": {
  "hp": 0.08,
  "atk": 0.03
  }
  },
  {
  "id": "u_rank_7",
  "name": "身法灵活",
  "grade": 4,
  "desc": "闪避能力出众",
  "bonuses": {
  "dodgeRate": 0.05,
  "atk": 0.02
  }
  },
  {
  "id": "u_rank_8",
  "name": "灵力充沛",
  "grade": 4,
  "desc": "灵力储备丰厚",
  "bonuses": {
  "mp": 0.08,
  "expRate": 0.03
  }
  },
  {
  "id": "u_rank_9",
  "name": "感知敏锐",
  "grade": 4,
  "desc": "对危险有敏锐感知",
  "bonuses": {
  "dodgeRate": 0.04,
  "luck": 2
  }
  },
  {
  "id": "u_rank_10",
  "name": "经商天赋",
  "grade": 4,
  "desc": "做生意有头脑",
  "bonuses": {
  "goldRate": 0.08
  }
  },
  {
  "id": "u_rank_11",
  "name": "坚韧不拔",
  "grade": 4,
  "desc": "意志力坚定",
  "bonuses": {
  "hp": 0.05,
  "def": 0.04,
  "expRate": 0.02
  }
  },
  {
  "id": "u_rank_12",
  "name": "战斗天赋",
  "grade": 4,
  "desc": "天生战士",
  "bonuses": {
  "atk": 0.06,
  "critRate": 0.03,
  "dodgeRate": 0.02
  }
  },
  {
  "id": "heaven_t29",
  "name": "凝聚的天雷之力",
  "grade": 4,
  "desc": "天道之力凝聚的入流级词条",
  "bonuses": {
  "def": 0.708,
  "mp": 0.201
  },
  "path": "heaven"
  },
  {
  "id": "heaven_t30",
  "name": "成型的天威之力",
  "grade": 4,
  "desc": "天道之力凝聚的入流级词条",
  "bonuses": {
  "expRate": 0.687,
  "def": 0.137
  },
  "path": "heaven"
  },
  {
  "id": "heaven_t31",
  "name": "成熟的天命之力",
  "grade": 4,
  "desc": "天道之力凝聚的入流级词条",
  "bonuses": {
  "dodgeRate": 0.839,
  "luck": 0.184
  },
  "path": "heaven"
  },
  {
  "id": "heaven_t32",
  "name": "稳固的天道之力",
  "grade": 4,
  "desc": "天道之力凝聚的入流级词条",
  "bonuses": {
  "def": 0.794,
  "critRate": 0.11
  },
  "path": "heaven"
  },
  {
  "id": "heaven_t33",
  "name": "坚实的星辰之力",
  "grade": 4,
  "desc": "天道之力凝聚的入流级词条",
  "bonuses": {
  "expRate": 0.662
  },
  "path": "heaven"
  },
  {
  "id": "heaven_t34",
  "name": "凝聚的日月之力",
  "grade": 4,
  "desc": "天道之力凝聚的入流级词条",
  "bonuses": {
  "dodgeRate": 0.693,
  "hp": 0.142
  },
  "path": "heaven"
  },
  {
  "id": "u_yel_1",
  "name": "黄级慧根",
  "grade": 5,
  "desc": "黄级修仙资质",
  "bonuses": {
  "expRate": 0.08,
  "mp": 0.05
  }
  },
  {
  "id": "u_yel_2",
  "name": "铁壁之躯",
  "grade": 5,
  "desc": "防御力出色",
  "bonuses": {
  "def": 0.12,
  "hp": 0.08
  }
  },
  {
  "id": "u_yel_3",
  "name": "锋锐之体",
  "grade": 5,
  "desc": "攻击力超群",
  "bonuses": {
  "atk": 0.1,
  "critRate": 0.04
  }
  },
  {
  "id": "u_yel_4",
  "name": "气运亨通",
  "grade": 5,
  "desc": "运气不错",
  "bonuses": {
  "luck": 4,
  "goldRate": 0.06
  }
  },
  {
  "id": "u_yel_5",
  "name": "过目不忘",
  "grade": 5,
  "desc": "功法一看就会",
  "bonuses": {
  "expRate": 0.1
  }
  },
  {
  "id": "u_yel_6",
  "name": "百毒不侵",
  "grade": 5,
  "desc": "毒素免疫",
  "bonuses": {
  "hp": 0.06,
  "def": 0.05
  }
  },
  {
  "id": "u_yel_7",
  "name": "御风而行",
  "grade": 5,
  "desc": "速度极快",
  "bonuses": {
  "dodgeRate": 0.06,
  "atk": 0.04
  }
  },
  {
  "id": "u_yel_8",
  "name": "灵力如海",
  "grade": 5,
  "desc": "灵力储备惊人",
  "bonuses": {
  "mp": 0.1,
  "expRate": 0.05
  }
  },
  {
  "id": "u_yel_9",
  "name": "预知危险",
  "grade": 5,
  "desc": "总能提前躲避",
  "bonuses": {
  "dodgeRate": 0.08,
  "luck": 2
  }
  },
  {
  "id": "u_yel_10",
  "name": "招财进宝",
  "grade": 5,
  "desc": "财运亨通",
  "bonuses": {
  "goldRate": 0.1,
  "luck": 2
  }
  },
  {
  "id": "u_yel_11",
  "name": "铜皮铁骨",
  "grade": 5,
  "desc": "肉体极其强韧",
  "bonuses": {
  "hp": 0.1,
  "def": 0.06
  }
  },
  {
  "id": "u_yel_12",
  "name": "战斗狂人",
  "grade": 5,
  "desc": "越战越勇",
  "bonuses": {
  "atk": 0.08,
  "critRate": 0.05
  }
  },
  {
  "id": "u_yel_13",
  "name": "修炼达人",
  "grade": 5,
  "desc": "修炼效率极高",
  "bonuses": {
  "expRate": 0.09,
  "mp": 0.04
  }
  },
  {
  "id": "u_yel_14",
  "name": "全能选手",
  "grade": 5,
  "desc": "各方面均衡发展",
  "bonuses": {
  "atk": 0.04,
  "def": 0.04,
  "hp": 0.04,
  "mp": 0.04,
  "expRate": 0.04
  }
  },
  {
  "id": "heaven_t35",
  "name": "闪耀的天雷之力",
  "grade": 5,
  "desc": "天道之力凝聚的黄级词条",
  "bonuses": {
  "hp": 0.76,
  "def": 0.154
  },
  "path": "heaven"
  },
  {
  "id": "heaven_t36",
  "name": "明亮的天威之力",
  "grade": 5,
  "desc": "天道之力凝聚的黄级词条",
  "bonuses": {
  "goldRate": 0.76,
  "luck": 0.211
  },
  "path": "heaven"
  },
  {
  "id": "heaven_t37",
  "name": "光耀的天命之力",
  "grade": 5,
  "desc": "天道之力凝聚的黄级词条",
  "bonuses": {
  "luck": 1,
  "critRate": 0.206
  },
  "path": "heaven"
  },
  {
  "id": "heaven_t38",
  "name": "璀璨的天道之力",
  "grade": 5,
  "desc": "天道之力凝聚的黄级词条",
  "bonuses": {
  "hp": 1.021,
  "expRate": 0.255
  },
  "path": "heaven"
  },
  {
  "id": "heaven_t39",
  "name": "夺目的星辰之力",
  "grade": 5,
  "desc": "天道之力凝聚的黄级词条",
  "bonuses": {
  "goldRate": 1.073,
  "hp": 0.268
  },
  "path": "heaven"
  },
  {
  "id": "heaven_t40",
  "name": "闪耀的日月之力",
  "grade": 5,
  "desc": "天道之力凝聚的黄级词条",
  "bonuses": {
  "luck": 0.954,
  "atk": 0.236
  },
  "path": "heaven"
  },
  {
  "id": "heaven_t41",
  "name": "明亮的天眼之力",
  "grade": 5,
  "desc": "天道之力凝聚的黄级词条",
  "bonuses": {
  "hp": 1.005,
  "dodgeRate": 0.171
  },
  "path": "heaven"
  },
  {
  "id": "u_xuan_1",
  "name": "玄级天资",
  "grade": 6,
  "desc": "玄级修仙天赋",
  "bonuses": {
  "expRate": 0.12,
  "mp": 0.08
  }
  },
  {
  "id": "u_xuan_2",
  "name": "金刚不坏",
  "grade": 6,
  "desc": "防御力惊人",
  "bonuses": {
  "def": 0.15,
  "hp": 0.1
  }
  },
  {
  "id": "u_xuan_3",
  "name": "剑意凛然",
  "grade": 6,
  "desc": "攻击力极强",
  "bonuses": {
  "atk": 0.15,
  "critRate": 0.06
  }
  },
  {
  "id": "u_xuan_4",
  "name": "鸿运当头",
  "grade": 6,
  "desc": "好运连连",
  "bonuses": {
  "luck": 5,
  "goldRate": 0.08
  }
  },
  {
  "id": "u_xuan_5",
  "name": "天资聪颖",
  "grade": 6,
  "desc": "领悟力超群",
  "bonuses": {
  "expRate": 0.15
  }
  },
  {
  "id": "u_xuan_6",
  "name": "五行亲和",
  "grade": 6,
  "desc": "五行之力亲和",
  "bonuses": {
  "mp": 0.1,
  "expRate": 0.08,
  "atk": 0.03
  }
  },
  {
  "id": "u_xuan_7",
  "name": "雷霆之速",
  "grade": 6,
  "desc": "速度如闪电",
  "bonuses": {
  "dodgeRate": 0.1,
  "atk": 0.05
  }
  },
  {
  "id": "u_xuan_8",
  "name": "灵海深邃",
  "grade": 6,
  "desc": "灵力储备极深",
  "bonuses": {
  "mp": 0.15,
  "expRate": 0.06
  }
  },
  {
  "id": "u_xuan_9",
  "name": "天眼通",
  "grade": 6,
  "desc": "洞察万物",
  "bonuses": {
  "dodgeRate": 0.08,
  "critRate": 0.05,
  "luck": 2
  }
  },
  {
  "id": "u_xuan_10",
  "name": "富甲一方",
  "grade": 6,
  "desc": "灵石自动来",
  "bonuses": {
  "goldRate": 0.15,
  "luck": 3
  }
  },
  {
  "id": "u_xuan_11",
  "name": "龙象之力",
  "grade": 6,
  "desc": "力大无穷",
  "bonuses": {
  "atk": 0.12,
  "hp": 0.1,
  "def": 0.05
  }
  },
  {
  "id": "u_xuan_12",
  "name": "万法皆通",
  "grade": 6,
  "desc": "功法领悟极快",
  "bonuses": {
  "expRate": 0.12,
  "mp": 0.06,
  "atk": 0.04
  }
  },
  {
  "id": "u_xuan_13",
  "name": "九阳之体",
  "grade": 6,
  "desc": "阳气旺盛",
  "bonuses": {
  "atk": 0.1,
  "hp": 0.08,
  "expRate": 0.08
  }
  },
  {
  "id": "u_xuan_14",
  "name": "九阴之脉",
  "grade": 6,
  "desc": "阴气浓郁",
  "bonuses": {
  "mp": 0.12,
  "def": 0.06,
  "expRate": 0.08
  }
  },
  {
  "id": "heaven_t42",
  "name": "玄妙的天雷之力",
  "grade": 6,
  "desc": "天道之力凝聚的玄级词条",
  "bonuses": {
  "critRate": 1.122
  },
  "path": "heaven"
  },
  {
  "id": "heaven_t43",
  "name": "深奥的天威之力",
  "grade": 6,
  "desc": "天道之力凝聚的玄级词条",
  "bonuses": {
  "atk": 1.504,
  "expRate": 0.218
  },
  "path": "heaven"
  },
  {
  "id": "heaven_t44",
  "name": "精妙的天命之力",
  "grade": 6,
  "desc": "天道之力凝聚的玄级词条",
  "bonuses": {
  "mp": 1.517,
  "hp": 0.236
  },
  "path": "heaven"
  },
  {
  "id": "heaven_t45",
  "name": "通玄的天道之力",
  "grade": 6,
  "desc": "天道之力凝聚的玄级词条",
  "bonuses": {
  "critRate": 1.237,
  "atk": 0.279
  },
  "path": "heaven"
  },
  {
  "id": "heaven_t46",
  "name": "入微的星辰之力",
  "grade": 6,
  "desc": "天道之力凝聚的玄级词条",
  "bonuses": {
  "atk": 1.476,
  "dodgeRate": 0.238
  },
  "path": "heaven"
  },
  {
  "id": "heaven_t47",
  "name": "玄妙的日月之力",
  "grade": 6,
  "desc": "天道之力凝聚的玄级词条",
  "bonuses": {
  "mp": 1.206,
  "goldRate": 0.364
  },
  "path": "heaven"
  },
  {
  "id": "heaven_t48",
  "name": "深奥的天眼之力",
  "grade": 6,
  "desc": "天道之力凝聚的玄级词条",
  "bonuses": {
  "critRate": 1.354,
  "mp": 0.299
  },
  "path": "heaven"
  },
  {
  "id": "u_earth_1",
  "name": "地级天资",
  "grade": 7,
  "desc": "地级修仙天赋",
  "bonuses": {
  "expRate": 0.2,
  "mp": 0.12
  }
  },
  {
  "id": "u_earth_2",
  "name": "不灭金身",
  "grade": 7,
  "desc": "万法不侵",
  "bonuses": {
  "def": 0.2,
  "hp": 0.15
  }
  },
  {
  "id": "u_earth_3",
  "name": "剑道宗师",
  "grade": 7,
  "desc": "剑道天赋冠绝同辈",
  "bonuses": {
  "atk": 0.2,
  "critRate": 0.08
  }
  },
  {
  "id": "u_earth_4",
  "name": "天命之子",
  "grade": 7,
  "desc": "受天道眷顾",
  "bonuses": {
  "luck": 6,
  "goldRate": 0.1,
  "expRate": 0.05
  }
  },
  {
  "id": "u_earth_5",
  "name": "仙骨天成",
  "grade": 7,
  "desc": "天生仙骨",
  "bonuses": {
  "expRate": 0.22,
  "mp": 0.1
  }
  },
  {
  "id": "u_earth_6",
  "name": "五行均衡",
  "grade": 7,
  "desc": "五行完美均衡",
  "bonuses": {
  "atk": 0.08,
  "def": 0.08,
  "hp": 0.08,
  "mp": 0.08,
  "expRate": 0.08
  }
  },
  {
  "id": "u_earth_7",
  "name": "电光火石",
  "grade": 7,
  "desc": "速度无人能及",
  "bonuses": {
  "dodgeRate": 0.15,
  "atk": 0.08
  }
  },
  {
  "id": "u_earth_8",
  "name": "灵力无穷",
  "grade": 7,
  "desc": "灵力取之不尽",
  "bonuses": {
  "mp": 0.2,
  "expRate": 0.08
  }
  },
  {
  "id": "u_earth_9",
  "name": "预知未来",
  "grade": 7,
  "desc": "能预知片刻之后",
  "bonuses": {
  "dodgeRate": 0.12,
  "critRate": 0.08,
  "luck": 3
  }
  },
  {
  "id": "u_earth_10",
  "name": "聚宝盆",
  "grade": 7,
  "desc": "灵石如流水",
  "bonuses": {
  "goldRate": 0.2,
  "luck": 4
  }
  },
  {
  "id": "u_earth_11",
  "name": "神力盖世",
  "grade": 7,
  "desc": "力量超越极限",
  "bonuses": {
  "atk": 0.18,
  "hp": 0.12
  }
  },
  {
  "id": "u_earth_12",
  "name": "道心通明",
  "grade": 7,
  "desc": "道心澄澈无垢",
  "bonuses": {
  "expRate": 0.18,
  "mp": 0.1,
  "def": 0.05
  }
  },
  {
  "id": "heaven_t49",
  "name": "大地的天雷之力",
  "grade": 7,
  "desc": "天道之力凝聚的地级词条",
  "bonuses": {
  "def": 2.108,
  "hp": 0.296
  },
  "path": "heaven"
  },
  {
  "id": "heaven_t50",
  "name": "厚重的天威之力",
  "grade": 7,
  "desc": "天道之力凝聚的地级词条",
  "bonuses": {
  "expRate": 1.456,
  "atk": 0.351
  },
  "path": "heaven"
  },
  {
  "id": "heaven_t51",
  "name": "承载的天命之力",
  "grade": 7,
  "desc": "天道之力凝聚的地级词条",
  "bonuses": {
  "dodgeRate": 2.031
  },
  "path": "heaven"
  },
  {
  "id": "heaven_t52",
  "name": "深沉的天道之力",
  "grade": 7,
  "desc": "天道之力凝聚的地级词条",
  "bonuses": {
  "def": 1.773,
  "goldRate": 0.413
  },
  "path": "heaven"
  },
  {
  "id": "heaven_t53",
  "name": "沉稳的星辰之力",
  "grade": 7,
  "desc": "天道之力凝聚的地级词条",
  "bonuses": {
  "expRate": 1.762,
  "mp": 0.29
  },
  "path": "heaven"
  },
  {
  "id": "heaven_t54",
  "name": "大地的日月之力",
  "grade": 7,
  "desc": "天道之力凝聚的地级词条",
  "bonuses": {
  "dodgeRate": 1.53,
  "def": 0.491
  },
  "path": "heaven"
  },
  {
  "id": "u_heaven_1",
  "name": "天级天资",
  "grade": 8,
  "desc": "天级修仙天赋",
  "bonuses": {
  "expRate": 0.3,
  "mp": 0.15
  }
  },
  {
  "id": "u_heaven_2",
  "name": "不朽之躯",
  "grade": 8,
  "desc": "肉身近乎不朽",
  "bonuses": {
  "def": 0.25,
  "hp": 0.2
  }
  },
  {
  "id": "u_heaven_3",
  "name": "破灭之拳",
  "grade": 8,
  "desc": "一拳可破万物",
  "bonuses": {
  "atk": 0.25,
  "critRate": 0.1
  }
  },
  {
  "id": "u_heaven_4",
  "name": "天命所归",
  "grade": 8,
  "desc": "天命加身",
  "bonuses": {
  "luck": 8,
  "goldRate": 0.12,
  "expRate": 0.08
  }
  },
  {
  "id": "u_heaven_5",
  "name": "先天道体",
  "grade": 8,
  "desc": "先天大道之体",
  "bonuses": {
  "expRate": 0.3,
  "atk": 0.08,
  "def": 0.08,
  "hp": 0.08,
  "mp": 0.08
  }
  },
  {
  "id": "u_heaven_6",
  "name": "混沌亲和",
  "grade": 8,
  "desc": "对混沌之力有亲和",
  "bonuses": {
  "mp": 0.15,
  "expRate": 0.2,
  "atk": 0.05
  }
  },
  {
  "id": "u_heaven_7",
  "name": "时空感知",
  "grade": 8,
  "desc": "对时空有特殊感知",
  "bonuses": {
  "dodgeRate": 0.2,
  "critRate": 0.08,
  "luck": 4
  }
  },
  {
  "id": "u_heaven_8",
  "name": "造化之力",
  "grade": 8,
  "desc": "掌控造化之力",
  "bonuses": {
  "expRate": 0.25,
  "goldRate": 0.15,
  "mp": 0.1
  }
  },
  {
  "id": "u_heaven_9",
  "name": "因果之眼",
  "grade": 8,
  "desc": "能看透因果",
  "bonuses": {
  "luck": 6,
  "dodgeRate": 0.12,
  "expRate": 0.1
  }
  },
  {
  "id": "u_heaven_10",
  "name": "万法归一",
  "grade": 8,
  "desc": "所有功法融会贯通",
  "bonuses": {
  "expRate": 0.28,
  "atk": 0.1,
  "def": 0.1
  }
  },
  {
  "id": "heaven_t55",
  "name": "天降的天雷之力",
  "grade": 8,
  "desc": "天道之力凝聚的天级词条",
  "bonuses": {
  "hp": 2.461,
  "atk": 0.469
  },
  "path": "heaven"
  },
  {
  "id": "heaven_t56",
  "name": "苍穹的天威之力",
  "grade": 8,
  "desc": "天道之力凝聚的天级词条",
  "bonuses": {
  "goldRate": 2.975,
  "dodgeRate": 0.683
  },
  "path": "heaven"
  },
  {
  "id": "heaven_t57",
  "name": "穹顶的天命之力",
  "grade": 8,
  "desc": "天道之力凝聚的天级词条",
  "bonuses": {
  "luck": 2.469,
  "goldRate": 0.492
  },
  "path": "heaven"
  },
  {
  "id": "heaven_t58",
  "name": "高空的天道之力",
  "grade": 8,
  "desc": "天道之力凝聚的天级词条",
  "bonuses": {
  "hp": 2.793,
  "mp": 0.45
  },
  "path": "heaven"
  },
  {
  "id": "heaven_t59",
  "name": "凌空的星辰之力",
  "grade": 8,
  "desc": "天道之力凝聚的天级词条",
  "bonuses": {
  "goldRate": 2.017,
  "def": 0.539
  },
  "path": "heaven"
  },
  {
  "id": "u_imm_1",
  "name": "仙级天资",
  "grade": 9,
  "desc": "仙级修仙天赋",
  "bonuses": {
  "expRate": 0.4,
  "mp": 0.2
  }
  },
  {
  "id": "u_imm_2",
  "name": "仙体初成",
  "grade": 9,
  "desc": "肉身初具仙体",
  "bonuses": {
  "def": 0.3,
  "hp": 0.25,
  "expRate": 0.1
  }
  },
  {
  "id": "u_imm_3",
  "name": "仙剑之魂",
  "grade": 9,
  "desc": "剑道已达仙人水准",
  "bonuses": {
  "atk": 0.3,
  "critRate": 0.12
  }
  },
  {
  "id": "u_imm_4",
  "name": "仙缘深厚",
  "grade": 9,
  "desc": "仙缘极深",
  "bonuses": {
  "luck": 10,
  "goldRate": 0.15,
  "expRate": 0.15
  }
  },
  {
  "id": "u_imm_5",
  "name": "太上忘情",
  "grade": 9,
  "desc": "心境已达太上之境",
  "bonuses": {
  "expRate": 0.45,
  "mp": 0.15,
  "def": 0.1
  }
  },
  {
  "id": "u_imm_6",
  "name": "天地为炉",
  "grade": 9,
  "desc": "以天地为炉鼎",
  "bonuses": {
  "atk": 0.15,
  "def": 0.15,
  "hp": 0.15,
  "mp": 0.15,
  "expRate": 0.15
  }
  },
  {
  "id": "u_imm_7",
  "name": "仙风道骨",
  "grade": 9,
  "desc": "仙风道骨，资质绝伦",
  "bonuses": {
  "expRate": 0.4,
  "atk": 0.12,
  "def": 0.12,
  "mp": 0.12
  }
  },
  {
  "id": "u_imm_8",
  "name": "命运编织者",
  "grade": 9,
  "desc": "能编织自身命运",
  "bonuses": {
  "luck": 8,
  "dodgeRate": 0.15,
  "goldRate": 0.12,
  "expRate": 0.1
  }
  },
  {
  "id": "heaven_t60",
  "name": "仙灵的天雷之力",
  "grade": 9,
  "desc": "天道之力凝聚的仙级词条",
  "bonuses": {
  "atk": 4.004
  },
  "path": "heaven"
  },
  {
  "id": "heaven_t61",
  "name": "仙韵的天威之力",
  "grade": 9,
  "desc": "天道之力凝聚的仙级词条",
  "bonuses": {
  "mp": 4.08,
  "dodgeRate": 0.612
  },
  "path": "heaven"
  },
  {
  "id": "heaven_t62",
  "name": "仙气的天命之力",
  "grade": 9,
  "desc": "天道之力凝聚的仙级词条",
  "bonuses": {
  "critRate": 3.623,
  "goldRate": 0.602
  },
  "path": "heaven"
  },
  {
  "id": "heaven_t63",
  "name": "仙华的天道之力",
  "grade": 9,
  "desc": "天道之力凝聚的仙级词条",
  "bonuses": {
  "atk": 2.824,
  "mp": 0.816
  },
  "path": "heaven"
  },
  {
  "id": "u_div_1",
  "name": "神级天资",
  "grade": 10,
  "desc": "神级修仙天赋",
  "bonuses": {
  "expRate": 0.5,
  "mp": 0.25
  }
  },
  {
  "id": "u_div_2",
  "name": "神体初铸",
  "grade": 10,
  "desc": "肉身初铸神体",
  "bonuses": {
  "def": 0.35,
  "hp": 0.3,
  "expRate": 0.15
  }
  },
  {
  "id": "u_div_3",
  "name": "弑神之力",
  "grade": 10,
  "desc": "拥有弑神的力量",
  "bonuses": {
  "atk": 0.35,
  "critRate": 0.15
  }
  },
  {
  "id": "u_div_4",
  "name": "天命主宰",
  "grade": 10,
  "desc": "主宰自身天命",
  "bonuses": {
  "luck": 12,
  "goldRate": 0.2,
  "expRate": 0.2
  }
  },
  {
  "id": "u_div_5",
  "name": "大道亲和",
  "grade": 10,
  "desc": "对大道有极深亲和",
  "bonuses": {
  "expRate": 0.55,
  "mp": 0.2,
  "def": 0.12
  }
  },
  {
  "id": "u_div_6",
  "name": "万物归元",
  "grade": 10,
  "desc": "万物之力归于己身",
  "bonuses": {
  "atk": 0.2,
  "def": 0.2,
  "hp": 0.2,
  "mp": 0.2,
  "expRate": 0.2
  }
  },
  {
  "id": "u_div_7",
  "name": "时空主宰",
  "grade": 10,
  "desc": "对时空有掌控力",
  "bonuses": {
  "dodgeRate": 0.2,
  "critRate": 0.12,
  "luck": 8,
  "expRate": 0.15
  }
  },
  {
  "id": "heaven_t64",
  "name": "神赐的天雷之力",
  "grade": 10,
  "desc": "天道之力凝聚的神级词条",
  "bonuses": {
  "expRate": 5.969,
  "hp": 1.122
  },
  "path": "heaven"
  },
  {
  "id": "heaven_t65",
  "name": "神威的天威之力",
  "grade": 10,
  "desc": "天道之力凝聚的神级词条",
  "bonuses": {
  "dodgeRate": 5.816,
  "atk": 1.071
  },
  "path": "heaven"
  },
  {
  "id": "heaven_t66",
  "name": "神圣的天命之力",
  "grade": 10,
  "desc": "天道之力凝聚的神级词条",
  "bonuses": {
  "def": 5.217,
  "dodgeRate": 1.261
  },
  "path": "heaven"
  },
  {
  "id": "u_saint_1",
  "name": "圣级天资",
  "grade": 11,
  "desc": "圣级修仙天赋",
  "bonuses": {
  "expRate": 0.65,
  "mp": 0.3
  }
  },
  {
  "id": "u_saint_2",
  "name": "圣体初现",
  "grade": 11,
  "desc": "肉身初具圣体",
  "bonuses": {
  "def": 0.4,
  "hp": 0.35,
  "expRate": 0.2
  }
  },
  {
  "id": "u_saint_3",
  "name": "斩圣之刃",
  "grade": 11,
  "desc": "攻击力可斩圣人",
  "bonuses": {
  "atk": 0.4,
  "critRate": 0.18
  }
  },
  {
  "id": "u_saint_4",
  "name": "圣人之姿",
  "grade": 11,
  "desc": "天生圣人之姿",
  "bonuses": {
  "expRate": 0.6,
  "atk": 0.15,
  "def": 0.15,
  "hp": 0.15,
  "mp": 0.15
  }
  },
  {
  "id": "u_saint_5",
  "name": "天道眷顾",
  "grade": 11,
  "desc": "天道亲自眷顾",
  "bonuses": {
  "luck": 15,
  "goldRate": 0.25,
  "expRate": 0.25
  }
  },
  {
  "id": "u_saint_6",
  "name": "轮回之主",
  "grade": 11,
  "desc": "对轮回有深刻理解",
  "bonuses": {
  "expRate": 0.6,
  "mp": 0.25,
  "dodgeRate": 0.15,
  "luck": 10
  }
  },
  {
  "id": "heaven_t67",
  "name": "圣洁的天雷之力",
  "grade": 11,
  "desc": "天道之力凝聚的圣级词条",
  "bonuses": {
  "goldRate": 6.911,
  "critRate": 1.33
  },
  "path": "heaven"
  },
  {
  "id": "heaven_t68",
  "name": "圣光的天威之力",
  "grade": 11,
  "desc": "天道之力凝聚的圣级词条",
  "bonuses": {
  "luck": 6.701,
  "expRate": 1.368
  },
  "path": "heaven"
  },
  {
  "id": "u_chaos_1",
  "name": "混沌天资",
  "grade": 12,
  "desc": "混沌级修仙天赋",
  "bonuses": {
  "expRate": 0.8,
  "mp": 0.35,
  "atk": 0.15
  }
  },
  {
  "id": "u_chaos_2",
  "name": "混沌之体",
  "grade": 12,
  "desc": "混沌之力铸体",
  "bonuses": {
  "atk": 0.25,
  "def": 0.25,
  "hp": 0.25,
  "mp": 0.25,
  "expRate": 0.3
  }
  },
  {
  "id": "u_chaos_3",
  "name": "混沌之子",
  "grade": 12,
  "desc": "混沌之中的异数",
  "bonuses": {
  "luck": 20,
  "goldRate": 0.3,
  "expRate": 0.4,
  "atk": 0.15,
  "def": 0.15
  }
  },
  {
  "id": "u_chaos_4",
  "name": "万法归混沌",
  "grade": 12,
  "desc": "一切法归于混沌",
  "bonuses": {
  "expRate": 0.85,
  "atk": 0.2,
  "def": 0.2,
  "mp": 0.3
  }
  },
  {
  "id": "heaven_t69",
  "name": "混沌的天雷之力",
  "grade": 12,
  "desc": "天道之力凝聚的混沌级词条",
  "bonuses": {
  "mp": 8.833
  },
  "path": "heaven"
  },
  {
  "id": "u_trans_1",
  "name": "超脱天资",
  "grade": 13,
  "desc": "超脱一切的天赋",
  "bonuses": {
  "expRate": 1,
  "mp": 0.4,
  "atk": 0.2
  }
  },
  {
  "id": "u_trans_2",
  "name": "超脱之体",
  "grade": 13,
  "desc": "超越一切的肉身",
  "bonuses": {
  "atk": 0.3,
  "def": 0.3,
  "hp": 0.3,
  "mp": 0.3,
  "expRate": 0.5
  }
  },
  {
  "id": "u_trans_3",
  "name": "天道化身",
  "grade": 13,
  "desc": "你就是天道的化身",
  "bonuses": {
  "luck": 25,
  "goldRate": 0.4,
  "expRate": 0.6,
  "atk": 0.2,
  "def": 0.2
  }
  },
  {
  "id": "u_trans_4",
  "name": "大道唯一",
  "grade": 13,
  "desc": "大道之中唯一的异数",
  "bonuses": {
  "expRate": 1.2,
  "atk": 0.25,
  "def": 0.25,
  "mp": 0.35,
  "luck": 15
  }
  },
  {
  "id": "heaven_t70",
  "name": "超脱的天雷之力",
  "grade": 13,
  "desc": "天道之力凝聚的超脱级词条",
  "bonuses": {
  "dodgeRate": 16.92,
  "hp": 3.017
  },
  "path": "heaven"
  }

];

export const TRAITS_BEAST: any = [
{
  "id": "u_bad_1",
  "name": "霉运缠身",
  "grade": 0,
  "desc": "天生命苦，事事不顺",
  "bonuses": {
  "expRate": -0.05,
  "luck": -2
  }
  },
  {
  "id": "u_bad_2",
  "name": "灵根堵塞",
  "grade": 0,
  "desc": "灵脉不通，修炼困难",
  "bonuses": {
  "expRate": -0.08
  }
  },
  {
  "id": "u_bad_3",
  "name": "体弱多病",
  "grade": 0,
  "desc": "身体羸弱，动辄生病",
  "bonuses": {
  "hp": -0.1,
  "def": -0.05
  }
  },
  {
  "id": "u_bad_4",
  "name": "心魔深种",
  "grade": 0,
  "desc": "心魔缠身，难以自拔",
  "bonuses": {
  "mp": -0.1,
  "expRate": -0.03
  }
  },
  {
  "id": "u_bad_5",
  "name": "天妒英才",
  "grade": 0,
  "desc": "天道不容，劫难不断",
  "bonuses": {
  "luck": -5,
  "expRate": -0.05
  }
  },
  {
  "id": "u_bad_6",
  "name": "五感迟钝",
  "grade": 0,
  "desc": "感知迟钝，修炼缓慢",
  "bonuses": {
  "expRate": -0.06,
  "dodgeRate": -0.03
  }
  },
  {
  "id": "u_bad_7",
  "name": "招灾体质",
  "grade": 0,
  "desc": "走到哪里灾祸跟到哪里",
  "bonuses": {
  "luck": -3,
  "hp": -0.05
  }
  },
  {
  "id": "u_bad_8",
  "name": "灵气排斥",
  "grade": 0,
  "desc": "天地灵气对你避而远之",
  "bonuses": {
  "expRate": -0.1,
  "mp": -0.05
  }
  },
  {
  "id": "u_bad_9",
  "name": "命犯孤星",
  "grade": 0,
  "desc": "天煞孤星，六亲无缘",
  "bonuses": {
  "luck": -4,
  "goldRate": -0.1
  }
  },
  {
  "id": "u_bad_10",
  "name": "根基虚浮",
  "grade": 0,
  "desc": "修炼根基不稳，上限极低",
  "bonuses": {
  "atk": -0.05,
  "def": -0.05,
  "expRate": -0.04
  }
  },
  {
  "id": "u_bad_11",
  "name": "经脉逆转",
  "grade": 0,
  "desc": "经脉逆行，修炼事倍功半",
  "bonuses": {
  "expRate": -0.12,
  "mp": -0.08
  }
  },
  {
  "id": "u_bad_12",
  "name": "业力缠身",
  "grade": 0,
  "desc": "前世业障深重，此生难修",
  "bonuses": {
  "expRate": -0.07,
  "luck": -3,
  "goldRate": -0.05
  }
  },
  {
  "id": "beast_t1",
  "name": "残破的妖力之力",
  "grade": 0,
  "desc": "畜生道之力凝聚的废弃级词条",
  "bonuses": {
  "mp": 0
  },
  "path": "beast"
  },
  {
  "id": "beast_t2",
  "name": "腐朽的兽性之力",
  "grade": 0,
  "desc": "畜生道之力凝聚的废弃级词条",
  "bonuses": {
  "critRate": 0
  },
  "path": "beast"
  },
  {
  "id": "beast_t3",
  "name": "凋零的血脉之力",
  "grade": 0,
  "desc": "畜生道之力凝聚的废弃级词条",
  "bonuses": {
  "atk": 0
  },
  "path": "beast"
  },
  {
  "id": "beast_t4",
  "name": "衰败的化形之力",
  "grade": 0,
  "desc": "畜生道之力凝聚的废弃级词条",
  "bonuses": {
  "mp": 0
  },
  "path": "beast"
  },
  {
  "id": "beast_t5",
  "name": "枯萎的妖丹之力",
  "grade": 0,
  "desc": "畜生道之力凝聚的废弃级词条",
  "bonuses": {
  "critRate": 0
  },
  "path": "beast"
  },
  {
  "id": "u_waste_1",
  "name": "资质愚钝",
  "grade": 1,
  "desc": "天资愚钝，领悟力差",
  "bonuses": {
  "expRate": -0.03
  }
  },
  {
  "id": "u_waste_2",
  "name": "胆小如鼠",
  "grade": 1,
  "desc": "性格懦弱，不敢争先",
  "bonuses": {
  "atk": -0.03,
  "critRate": -0.02
  }
  },
  {
  "id": "u_waste_3",
  "name": "好吃懒做",
  "grade": 1,
  "desc": "天性懒惰，不思进取",
  "bonuses": {
  "expRate": -0.04,
  "goldRate": -0.03
  }
  },
  {
  "id": "u_waste_4",
  "name": "目不识丁",
  "grade": 1,
  "desc": "大字不识，功法难悟",
  "bonuses": {
  "expRate": -0.05
  }
  },
  {
  "id": "u_waste_5",
  "name": "五行偏枯",
  "grade": 1,
  "desc": "五行不全，修炼受限",
  "bonuses": {
  "mp": -0.05,
  "expRate": -0.02
  }
  },
  {
  "id": "u_waste_6",
  "name": "心浮气躁",
  "grade": 1,
  "desc": "性情急躁，难以静修",
  "bonuses": {
  "expRate": -0.04,
  "critRate": -0.01
  }
  },
  {
  "id": "u_waste_7",
  "name": "筋骨不佳",
  "grade": 1,
  "desc": "筋骨平庸，肉体凡胎",
  "bonuses": {
  "hp": -0.05,
  "atk": -0.02
  }
  },
  {
  "id": "u_waste_8",
  "name": "气运低迷",
  "grade": 1,
  "desc": "运气不好，喝水都塞牙",
  "bonuses": {
  "luck": -2,
  "goldRate": -0.03
  }
  },
  {
  "id": "u_waste_9",
  "name": "反应迟缓",
  "grade": 1,
  "desc": "反应慢半拍，战斗吃亏",
  "bonuses": {
  "dodgeRate": -0.03,
  "atk": -0.02
  }
  },
  {
  "id": "u_waste_10",
  "name": "贪生怕死",
  "grade": 1,
  "desc": "过于谨慎，错失良机",
  "bonuses": {
  "atk": -0.04,
  "luck": -1
  }
  },
  {
  "id": "u_waste_11",
  "name": "不善言辞",
  "grade": 1,
  "desc": "嘴笨舌拙，难交道友",
  "bonuses": {
  "goldRate": -0.05,
  "luck": -1
  }
  },
  {
  "id": "u_waste_12",
  "name": "嗅觉不灵",
  "grade": 1,
  "desc": "闻不到灵草的气味",
  "bonuses": {
  "goldRate": -0.04
  }
  },
  {
  "id": "u_waste_13",
  "name": "方向感差",
  "grade": 1,
  "desc": "经常迷路，浪费时间",
  "bonuses": {
  "expRate": -0.02,
  "luck": -1
  }
  },
  {
  "id": "u_waste_14",
  "name": "恐高症",
  "grade": 1,
  "desc": "无法御剑飞行",
  "bonuses": {
  "dodgeRate": -0.02,
  "expRate": -0.01
  }
  },
  {
  "id": "u_waste_15",
  "name": "社恐体质",
  "grade": 1,
  "desc": "害怕与人交流",
  "bonuses": {
  "goldRate": -0.03,
  "def": -0.01
  }
  },
  {
  "id": "beast_t6",
  "name": "微弱的妖力之力",
  "grade": 1,
  "desc": "畜生道之力凝聚的垃圾级词条",
  "bonuses": {
  "def": 0.126
  },
  "path": "beast"
  },
  {
  "id": "beast_t7",
  "name": "黯淡的兽性之力",
  "grade": 1,
  "desc": "畜生道之力凝聚的垃圾级词条",
  "bonuses": {
  "expRate": 0.122
  },
  "path": "beast"
  },
  {
  "id": "beast_t8",
  "name": "微光的血脉之力",
  "grade": 1,
  "desc": "畜生道之力凝聚的垃圾级词条",
  "bonuses": {
  "dodgeRate": 0.18
  },
  "path": "beast"
  },
  {
  "id": "beast_t9",
  "name": "淡薄的化形之力",
  "grade": 1,
  "desc": "畜生道之力凝聚的垃圾级词条",
  "bonuses": {
  "def": 0.172
  },
  "path": "beast"
  },
  {
  "id": "beast_t10",
  "name": "稀薄的妖丹之力",
  "grade": 1,
  "desc": "畜生道之力凝聚的垃圾级词条",
  "bonuses": {
  "expRate": 0.17
  },
  "path": "beast"
  },
  {
  "id": "beast_t11",
  "name": "微弱的妖魂之力",
  "grade": 1,
  "desc": "畜生道之力凝聚的垃圾级词条",
  "bonuses": {
  "dodgeRate": 0.179
  },
  "path": "beast"
  },
  {
  "id": "beast_t12",
  "name": "黯淡的妖气之力",
  "grade": 1,
  "desc": "畜生道之力凝聚的垃圾级词条",
  "bonuses": {
  "def": 0.14
  },
  "path": "beast"
  },
  {
  "id": "u_fish_1",
  "name": "勉强及格",
  "grade": 2,
  "desc": "资质勉强够用，聊胜于无",
  "bonuses": {
  "expRate": 0.01
  }
  },
  {
  "id": "u_fish_2",
  "name": "小有慧根",
  "grade": 2,
  "desc": "有一丝修仙资质",
  "bonuses": {
  "expRate": 0.02,
  "mp": 0.02
  }
  },
  {
  "id": "u_fish_3",
  "name": "皮糙肉厚",
  "grade": 2,
  "desc": "比常人耐打一些",
  "bonuses": {
  "hp": 0.03,
  "def": 0.02
  }
  },
  {
  "id": "u_fish_4",
  "name": "手脚麻利",
  "grade": 2,
  "desc": "动作比常人快",
  "bonuses": {
  "atk": 0.02,
  "dodgeRate": 0.01
  }
  },
  {
  "id": "u_fish_5",
  "name": "嗅觉灵敏",
  "grade": 2,
  "desc": "能闻到灵草的气味",
  "bonuses": {
  "goldRate": 0.02,
  "luck": 1
  }
  },
  {
  "id": "u_fish_6",
  "name": "记性尚可",
  "grade": 2,
  "desc": "功法记得住",
  "bonuses": {
  "expRate": 0.015
  }
  },
  {
  "id": "u_fish_7",
  "name": "饭量惊人",
  "grade": 2,
  "desc": "吃得多力气大",
  "bonuses": {
  "hp": 0.02,
  "atk": 0.01
  }
  },
  {
  "id": "u_fish_8",
  "name": "睡眠充足",
  "grade": 2,
  "desc": "休息效率高",
  "bonuses": {
  "expRate": 0.02
  }
  },
  {
  "id": "u_fish_9",
  "name": "视力不错",
  "grade": 2,
  "desc": "看得远看得清",
  "bonuses": {
  "critRate": 0.01,
  "dodgeRate": 0.01
  }
  },
  {
  "id": "u_fish_10",
  "name": "运气普通",
  "grade": 2,
  "desc": "不好不坏的运气",
  "bonuses": {
  "luck": 0
  }
  },
  {
  "id": "u_fish_11",
  "name": "韧性十足",
  "grade": 2,
  "desc": "不容易放弃",
  "bonuses": {
  "hp": 0.02,
  "def": 0.01
  }
  },
  {
  "id": "u_fish_12",
  "name": "胆子够大",
  "grade": 2,
  "desc": "敢想敢做",
  "bonuses": {
  "atk": 0.02,
  "critRate": 0.01
  }
  },
  {
  "id": "u_fish_13",
  "name": "好奇心强",
  "grade": 2,
  "desc": "喜欢探索",
  "bonuses": {
  "luck": 1,
  "expRate": 0.01
  }
  },
  {
  "id": "u_fish_14",
  "name": "人缘不错",
  "grade": 2,
  "desc": "容易交到朋友",
  "bonuses": {
  "goldRate": 0.02,
  "luck": 1
  }
  },
  {
  "id": "u_fish_15",
  "name": "适应力强",
  "grade": 2,
  "desc": "到哪都能活",
  "bonuses": {
  "hp": 0.01,
  "def": 0.01,
  "expRate": 0.01
  }
  },
  {
  "id": "u_fish_16",
  "name": "直觉敏锐",
  "grade": 2,
  "desc": "偶尔能感觉到危险",
  "bonuses": {
  "dodgeRate": 0.02,
  "luck": 1
  }
  },
  {
  "id": "u_fish_17",
  "name": "手巧心灵",
  "grade": 2,
  "desc": "擅长手工",
  "bonuses": {
  "def": 0.02,
  "goldRate": 0.01
  }
  },
  {
  "id": "u_fish_18",
  "name": "耐力持久",
  "grade": 2,
  "desc": "能坚持更久",
  "bonuses": {
  "hp": 0.03,
  "expRate": 0.01
  }
  },
  {
  "id": "beast_t13",
  "name": "普通的妖力之力",
  "grade": 2,
  "desc": "畜生道之力凝聚的杂鱼级词条",
  "bonuses": {
  "goldRate": 0.317,
  "critRate": 0.053
  },
  "path": "beast"
  },
  {
  "id": "beast_t14",
  "name": "寻常的兽性之力",
  "grade": 2,
  "desc": "畜生道之力凝聚的杂鱼级词条",
  "bonuses": {
  "luck": 0.358,
  "expRate": 0.049
  },
  "path": "beast"
  },
  {
  "id": "beast_t15",
  "name": "平凡的血脉之力",
  "grade": 2,
  "desc": "畜生道之力凝聚的杂鱼级词条",
  "bonuses": {
  "hp": 0.336
  },
  "path": "beast"
  },
  {
  "id": "beast_t16",
  "name": "一般的化形之力",
  "grade": 2,
  "desc": "畜生道之力凝聚的杂鱼级词条",
  "bonuses": {
  "goldRate": 0.335,
  "atk": 0.063
  },
  "path": "beast"
  },
  {
  "id": "beast_t17",
  "name": "基本的妖丹之力",
  "grade": 2,
  "desc": "畜生道之力凝聚的杂鱼级词条",
  "bonuses": {
  "luck": 0.284,
  "dodgeRate": 0.071
  },
  "path": "beast"
  },
  {
  "id": "beast_t18",
  "name": "普通的妖魂之力",
  "grade": 2,
  "desc": "畜生道之力凝聚的杂鱼级词条",
  "bonuses": {
  "hp": 0.261,
  "goldRate": 0.064
  },
  "path": "beast"
  },
  {
  "id": "beast_t19",
  "name": "寻常的妖气之力",
  "grade": 2,
  "desc": "畜生道之力凝聚的杂鱼级词条",
  "bonuses": {
  "goldRate": 0.275,
  "mp": 0.08
  },
  "path": "beast"
  },
  {
  "id": "beast_t20",
  "name": "平凡的本命之力",
  "grade": 2,
  "desc": "畜生道之力凝聚的杂鱼级词条",
  "bonuses": {
  "luck": 0.304,
  "def": 0.048
  },
  "path": "beast"
  },
  {
  "id": "beast_t21",
  "name": "一般的天赋之力",
  "grade": 2,
  "desc": "畜生道之力凝聚的杂鱼级词条",
  "bonuses": {
  "hp": 0.332,
  "luck": 0.068
  },
  "path": "beast"
  },
  {
  "id": "u_unrank_1",
  "name": "小聪明",
  "grade": 3,
  "desc": "有点小聪明，但格局不大",
  "bonuses": {
  "expRate": 0.03,
  "luck": 1
  }
  },
  {
  "id": "u_unrank_2",
  "name": "铜皮铁骨",
  "grade": 3,
  "desc": "身体比常人结实",
  "bonuses": {
  "hp": 0.05,
  "def": 0.04
  }
  },
  {
  "id": "u_unrank_3",
  "name": "耳聪目明",
  "grade": 3,
  "desc": "五感灵敏",
  "bonuses": {
  "critRate": 0.02,
  "dodgeRate": 0.02
  }
  },
  {
  "id": "u_unrank_4",
  "name": "勤奋刻苦",
  "grade": 3,
  "desc": "比别人更努力",
  "bonuses": {
  "expRate": 0.04
  }
  },
  {
  "id": "u_unrank_5",
  "name": "福缘浅薄",
  "grade": 3,
  "desc": "有点小运气",
  "bonuses": {
  "luck": 2,
  "goldRate": 0.03
  }
  },
  {
  "id": "u_unrank_6",
  "name": "力气过人",
  "grade": 3,
  "desc": "比常人力气大",
  "bonuses": {
  "atk": 0.05
  }
  },
  {
  "id": "u_unrank_7",
  "name": "灵觉初醒",
  "grade": 3,
  "desc": "对灵气有微弱感应",
  "bonuses": {
  "mp": 0.04,
  "expRate": 0.02
  }
  },
  {
  "id": "u_unrank_8",
  "name": "战斗本能",
  "grade": 3,
  "desc": "天生的战斗直觉",
  "bonuses": {
  "atk": 0.03,
  "critRate": 0.02
  }
  },
  {
  "id": "u_unrank_9",
  "name": "心志坚定",
  "grade": 3,
  "desc": "不容易被迷惑",
  "bonuses": {
  "mp": 0.03,
  "def": 0.02
  }
  },
  {
  "id": "u_unrank_10",
  "name": "灵草亲和",
  "grade": 3,
  "desc": "种草有一手",
  "bonuses": {
  "goldRate": 0.04
  }
  },
  {
  "id": "u_unrank_11",
  "name": "速度见长",
  "grade": 3,
  "desc": "比常人快一些",
  "bonuses": {
  "dodgeRate": 0.03,
  "atk": 0.02
  }
  },
  {
  "id": "u_unrank_12",
  "name": "记忆力好",
  "grade": 3,
  "desc": "功法过目不忘",
  "bonuses": {
  "expRate": 0.03,
  "mp": 0.02
  }
  },
  {
  "id": "u_unrank_13",
  "name": "社交达人",
  "grade": 3,
  "desc": "人缘极好",
  "bonuses": {
  "goldRate": 0.03,
  "luck": 2
  }
  },
  {
  "id": "u_unrank_14",
  "name": "危机嗅觉",
  "grade": 3,
  "desc": "总能提前感知危险",
  "bonuses": {
  "dodgeRate": 0.03,
  "luck": 1
  }
  },
  {
  "id": "u_unrank_15",
  "name": "自学成才",
  "grade": 3,
  "desc": "自学能力强",
  "bonuses": {
  "expRate": 0.03
  }
  },
  {
  "id": "beast_t22",
  "name": "初生的妖力之力",
  "grade": 3,
  "desc": "畜生道之力凝聚的不入流级词条",
  "bonuses": {
  "critRate": 0.459,
  "dodgeRate": 0.136
  },
  "path": "beast"
  },
  {
  "id": "beast_t23",
  "name": "萌芽的兽性之力",
  "grade": 3,
  "desc": "畜生道之力凝聚的不入流级词条",
  "bonuses": {
  "atk": 0.533,
  "goldRate": 0.117
  },
  "path": "beast"
  },
  {
  "id": "beast_t24",
  "name": "初成的血脉之力",
  "grade": 3,
  "desc": "畜生道之力凝聚的不入流级词条",
  "bonuses": {
  "mp": 0.564
  },
  "path": "beast"
  },
  {
  "id": "beast_t25",
  "name": "初现的化形之力",
  "grade": 3,
  "desc": "畜生道之力凝聚的不入流级词条",
  "bonuses": {
  "critRate": 0.425,
  "def": 0.113
  },
  "path": "beast"
  },
  {
  "id": "beast_t26",
  "name": "雏形的妖丹之力",
  "grade": 3,
  "desc": "畜生道之力凝聚的不入流级词条",
  "bonuses": {
  "atk": 0.478,
  "luck": 0.08
  },
  "path": "beast"
  },
  {
  "id": "beast_t27",
  "name": "初生的妖魂之力",
  "grade": 3,
  "desc": "畜生道之力凝聚的不入流级词条",
  "bonuses": {
  "mp": 0.577,
  "critRate": 0.111
  },
  "path": "beast"
  },
  {
  "id": "beast_t28",
  "name": "萌芽的妖气之力",
  "grade": 3,
  "desc": "畜生道之力凝聚的不入流级词条",
  "bonuses": {
  "critRate": 0.461,
  "expRate": 0.125
  },
  "path": "beast"
  },
  {
  "id": "u_rank_1",
  "name": "资质入流",
  "grade": 4,
  "desc": "修仙资质勉强入流",
  "bonuses": {
  "expRate": 0.05,
  "mp": 0.03
  }
  },
  {
  "id": "u_rank_2",
  "name": "铜墙铁壁",
  "grade": 4,
  "desc": "防御力不俗",
  "bonuses": {
  "def": 0.08,
  "hp": 0.05
  }
  },
  {
  "id": "u_rank_3",
  "name": "利刃锋芒",
  "grade": 4,
  "desc": "攻击力出色",
  "bonuses": {
  "atk": 0.08,
  "critRate": 0.03
  }
  },
  {
  "id": "u_rank_4",
  "name": "气运加身",
  "grade": 4,
  "desc": "有几分气运",
  "bonuses": {
  "luck": 3,
  "goldRate": 0.05
  }
  },
  {
  "id": "u_rank_5",
  "name": "悟性尚佳",
  "grade": 4,
  "desc": "领悟力不错",
  "bonuses": {
  "expRate": 0.06,
  "mp": 0.02
  }
  },
  {
  "id": "u_rank_6",
  "name": "体魄强健",
  "grade": 4,
  "desc": "身体素质优秀",
  "bonuses": {
  "hp": 0.08,
  "atk": 0.03
  }
  },
  {
  "id": "u_rank_7",
  "name": "身法灵活",
  "grade": 4,
  "desc": "闪避能力出众",
  "bonuses": {
  "dodgeRate": 0.05,
  "atk": 0.02
  }
  },
  {
  "id": "u_rank_8",
  "name": "灵力充沛",
  "grade": 4,
  "desc": "灵力储备丰厚",
  "bonuses": {
  "mp": 0.08,
  "expRate": 0.03
  }
  },
  {
  "id": "u_rank_9",
  "name": "感知敏锐",
  "grade": 4,
  "desc": "对危险有敏锐感知",
  "bonuses": {
  "dodgeRate": 0.04,
  "luck": 2
  }
  },
  {
  "id": "u_rank_10",
  "name": "经商天赋",
  "grade": 4,
  "desc": "做生意有头脑",
  "bonuses": {
  "goldRate": 0.08
  }
  },
  {
  "id": "u_rank_11",
  "name": "坚韧不拔",
  "grade": 4,
  "desc": "意志力坚定",
  "bonuses": {
  "hp": 0.05,
  "def": 0.04,
  "expRate": 0.02
  }
  },
  {
  "id": "u_rank_12",
  "name": "战斗天赋",
  "grade": 4,
  "desc": "天生战士",
  "bonuses": {
  "atk": 0.06,
  "critRate": 0.03,
  "dodgeRate": 0.02
  }
  },
  {
  "id": "beast_t29",
  "name": "凝聚的妖力之力",
  "grade": 4,
  "desc": "畜生道之力凝聚的入流级词条",
  "bonuses": {
  "def": 0.759,
  "mp": 0.188
  },
  "path": "beast"
  },
  {
  "id": "beast_t30",
  "name": "成型的兽性之力",
  "grade": 4,
  "desc": "畜生道之力凝聚的入流级词条",
  "bonuses": {
  "expRate": 0.629,
  "def": 0.145
  },
  "path": "beast"
  },
  {
  "id": "beast_t31",
  "name": "成熟的血脉之力",
  "grade": 4,
  "desc": "畜生道之力凝聚的入流级词条",
  "bonuses": {
  "dodgeRate": 0.748,
  "luck": 0.189
  },
  "path": "beast"
  },
  {
  "id": "beast_t32",
  "name": "稳固的化形之力",
  "grade": 4,
  "desc": "畜生道之力凝聚的入流级词条",
  "bonuses": {
  "def": 0.661,
  "critRate": 0.157
  },
  "path": "beast"
  },
  {
  "id": "beast_t33",
  "name": "坚实的妖丹之力",
  "grade": 4,
  "desc": "畜生道之力凝聚的入流级词条",
  "bonuses": {
  "expRate": 0.64
  },
  "path": "beast"
  },
  {
  "id": "beast_t34",
  "name": "凝聚的妖魂之力",
  "grade": 4,
  "desc": "畜生道之力凝聚的入流级词条",
  "bonuses": {
  "dodgeRate": 0.684,
  "hp": 0.183
  },
  "path": "beast"
  },
  {
  "id": "u_yel_1",
  "name": "黄级慧根",
  "grade": 5,
  "desc": "黄级修仙资质",
  "bonuses": {
  "expRate": 0.08,
  "mp": 0.05
  }
  },
  {
  "id": "u_yel_2",
  "name": "铁壁之躯",
  "grade": 5,
  "desc": "防御力出色",
  "bonuses": {
  "def": 0.12,
  "hp": 0.08
  }
  },
  {
  "id": "u_yel_3",
  "name": "锋锐之体",
  "grade": 5,
  "desc": "攻击力超群",
  "bonuses": {
  "atk": 0.1,
  "critRate": 0.04
  }
  },
  {
  "id": "u_yel_4",
  "name": "气运亨通",
  "grade": 5,
  "desc": "运气不错",
  "bonuses": {
  "luck": 4,
  "goldRate": 0.06
  }
  },
  {
  "id": "u_yel_5",
  "name": "过目不忘",
  "grade": 5,
  "desc": "功法一看就会",
  "bonuses": {
  "expRate": 0.1
  }
  },
  {
  "id": "u_yel_6",
  "name": "百毒不侵",
  "grade": 5,
  "desc": "毒素免疫",
  "bonuses": {
  "hp": 0.06,
  "def": 0.05
  }
  },
  {
  "id": "u_yel_7",
  "name": "御风而行",
  "grade": 5,
  "desc": "速度极快",
  "bonuses": {
  "dodgeRate": 0.06,
  "atk": 0.04
  }
  },
  {
  "id": "u_yel_8",
  "name": "灵力如海",
  "grade": 5,
  "desc": "灵力储备惊人",
  "bonuses": {
  "mp": 0.1,
  "expRate": 0.05
  }
  },
  {
  "id": "u_yel_9",
  "name": "预知危险",
  "grade": 5,
  "desc": "总能提前躲避",
  "bonuses": {
  "dodgeRate": 0.08,
  "luck": 2
  }
  },
  {
  "id": "u_yel_10",
  "name": "招财进宝",
  "grade": 5,
  "desc": "财运亨通",
  "bonuses": {
  "goldRate": 0.1,
  "luck": 2
  }
  },
  {
  "id": "u_yel_11",
  "name": "铜皮铁骨",
  "grade": 5,
  "desc": "肉体极其强韧",
  "bonuses": {
  "hp": 0.1,
  "def": 0.06
  }
  },
  {
  "id": "u_yel_12",
  "name": "战斗狂人",
  "grade": 5,
  "desc": "越战越勇",
  "bonuses": {
  "atk": 0.08,
  "critRate": 0.05
  }
  },
  {
  "id": "u_yel_13",
  "name": "修炼达人",
  "grade": 5,
  "desc": "修炼效率极高",
  "bonuses": {
  "expRate": 0.09,
  "mp": 0.04
  }
  },
  {
  "id": "u_yel_14",
  "name": "全能选手",
  "grade": 5,
  "desc": "各方面均衡发展",
  "bonuses": {
  "atk": 0.04,
  "def": 0.04,
  "hp": 0.04,
  "mp": 0.04,
  "expRate": 0.04
  }
  },
  {
  "id": "beast_t35",
  "name": "闪耀的妖力之力",
  "grade": 5,
  "desc": "畜生道之力凝聚的黄级词条",
  "bonuses": {
  "hp": 0.972,
  "def": 0.234
  },
  "path": "beast"
  },
  {
  "id": "beast_t36",
  "name": "明亮的兽性之力",
  "grade": 5,
  "desc": "畜生道之力凝聚的黄级词条",
  "bonuses": {
  "goldRate": 0.738,
  "luck": 0.18
  },
  "path": "beast"
  },
  {
  "id": "beast_t37",
  "name": "光耀的血脉之力",
  "grade": 5,
  "desc": "畜生道之力凝聚的黄级词条",
  "bonuses": {
  "luck": 0.898,
  "critRate": 0.14
  },
  "path": "beast"
  },
  {
  "id": "beast_t38",
  "name": "璀璨的化形之力",
  "grade": 5,
  "desc": "畜生道之力凝聚的黄级词条",
  "bonuses": {
  "hp": 0.811,
  "expRate": 0.187
  },
  "path": "beast"
  },
  {
  "id": "beast_t39",
  "name": "夺目的妖丹之力",
  "grade": 5,
  "desc": "畜生道之力凝聚的黄级词条",
  "bonuses": {
  "goldRate": 0.991,
  "hp": 0.263
  },
  "path": "beast"
  },
  {
  "id": "beast_t40",
  "name": "闪耀的妖魂之力",
  "grade": 5,
  "desc": "畜生道之力凝聚的黄级词条",
  "bonuses": {
  "luck": 0.848,
  "atk": 0.171
  },
  "path": "beast"
  },
  {
  "id": "beast_t41",
  "name": "明亮的妖气之力",
  "grade": 5,
  "desc": "畜生道之力凝聚的黄级词条",
  "bonuses": {
  "hp": 0.934,
  "dodgeRate": 0.177
  },
  "path": "beast"
  },
  {
  "id": "u_xuan_1",
  "name": "玄级天资",
  "grade": 6,
  "desc": "玄级修仙天赋",
  "bonuses": {
  "expRate": 0.12,
  "mp": 0.08
  }
  },
  {
  "id": "u_xuan_2",
  "name": "金刚不坏",
  "grade": 6,
  "desc": "防御力惊人",
  "bonuses": {
  "def": 0.15,
  "hp": 0.1
  }
  },
  {
  "id": "u_xuan_3",
  "name": "剑意凛然",
  "grade": 6,
  "desc": "攻击力极强",
  "bonuses": {
  "atk": 0.15,
  "critRate": 0.06
  }
  },
  {
  "id": "u_xuan_4",
  "name": "鸿运当头",
  "grade": 6,
  "desc": "好运连连",
  "bonuses": {
  "luck": 5,
  "goldRate": 0.08
  }
  },
  {
  "id": "u_xuan_5",
  "name": "天资聪颖",
  "grade": 6,
  "desc": "领悟力超群",
  "bonuses": {
  "expRate": 0.15
  }
  },
  {
  "id": "u_xuan_6",
  "name": "五行亲和",
  "grade": 6,
  "desc": "五行之力亲和",
  "bonuses": {
  "mp": 0.1,
  "expRate": 0.08,
  "atk": 0.03
  }
  },
  {
  "id": "u_xuan_7",
  "name": "雷霆之速",
  "grade": 6,
  "desc": "速度如闪电",
  "bonuses": {
  "dodgeRate": 0.1,
  "atk": 0.05
  }
  },
  {
  "id": "u_xuan_8",
  "name": "灵海深邃",
  "grade": 6,
  "desc": "灵力储备极深",
  "bonuses": {
  "mp": 0.15,
  "expRate": 0.06
  }
  },
  {
  "id": "u_xuan_9",
  "name": "天眼通",
  "grade": 6,
  "desc": "洞察万物",
  "bonuses": {
  "dodgeRate": 0.08,
  "critRate": 0.05,
  "luck": 2
  }
  },
  {
  "id": "u_xuan_10",
  "name": "富甲一方",
  "grade": 6,
  "desc": "灵石自动来",
  "bonuses": {
  "goldRate": 0.15,
  "luck": 3
  }
  },
  {
  "id": "u_xuan_11",
  "name": "龙象之力",
  "grade": 6,
  "desc": "力大无穷",
  "bonuses": {
  "atk": 0.12,
  "hp": 0.1,
  "def": 0.05
  }
  },
  {
  "id": "u_xuan_12",
  "name": "万法皆通",
  "grade": 6,
  "desc": "功法领悟极快",
  "bonuses": {
  "expRate": 0.12,
  "mp": 0.06,
  "atk": 0.04
  }
  },
  {
  "id": "u_xuan_13",
  "name": "九阳之体",
  "grade": 6,
  "desc": "阳气旺盛",
  "bonuses": {
  "atk": 0.1,
  "hp": 0.08,
  "expRate": 0.08
  }
  },
  {
  "id": "u_xuan_14",
  "name": "九阴之脉",
  "grade": 6,
  "desc": "阴气浓郁",
  "bonuses": {
  "mp": 0.12,
  "def": 0.06,
  "expRate": 0.08
  }
  },
  {
  "id": "beast_t42",
  "name": "玄妙的妖力之力",
  "grade": 6,
  "desc": "畜生道之力凝聚的玄级词条",
  "bonuses": {
  "critRate": 1.091
  },
  "path": "beast"
  },
  {
  "id": "beast_t43",
  "name": "深奥的兽性之力",
  "grade": 6,
  "desc": "畜生道之力凝聚的玄级词条",
  "bonuses": {
  "atk": 1.279,
  "expRate": 0.22
  },
  "path": "beast"
  },
  {
  "id": "beast_t44",
  "name": "精妙的血脉之力",
  "grade": 6,
  "desc": "畜生道之力凝聚的玄级词条",
  "bonuses": {
  "mp": 1.217,
  "hp": 0.37
  },
  "path": "beast"
  },
  {
  "id": "beast_t45",
  "name": "通玄的化形之力",
  "grade": 6,
  "desc": "畜生道之力凝聚的玄级词条",
  "bonuses": {
  "critRate": 1.518,
  "atk": 0.313
  },
  "path": "beast"
  },
  {
  "id": "beast_t46",
  "name": "入微的妖丹之力",
  "grade": 6,
  "desc": "畜生道之力凝聚的玄级词条",
  "bonuses": {
  "atk": 1.336,
  "dodgeRate": 0.237
  },
  "path": "beast"
  },
  {
  "id": "beast_t47",
  "name": "玄妙的妖魂之力",
  "grade": 6,
  "desc": "畜生道之力凝聚的玄级词条",
  "bonuses": {
  "mp": 1.08,
  "goldRate": 0.301
  },
  "path": "beast"
  },
  {
  "id": "beast_t48",
  "name": "深奥的妖气之力",
  "grade": 6,
  "desc": "畜生道之力凝聚的玄级词条",
  "bonuses": {
  "critRate": 1.321,
  "mp": 0.346
  },
  "path": "beast"
  },
  {
  "id": "u_earth_1",
  "name": "地级天资",
  "grade": 7,
  "desc": "地级修仙天赋",
  "bonuses": {
  "expRate": 0.2,
  "mp": 0.12
  }
  },
  {
  "id": "u_earth_2",
  "name": "不灭金身",
  "grade": 7,
  "desc": "万法不侵",
  "bonuses": {
  "def": 0.2,
  "hp": 0.15
  }
  },
  {
  "id": "u_earth_3",
  "name": "剑道宗师",
  "grade": 7,
  "desc": "剑道天赋冠绝同辈",
  "bonuses": {
  "atk": 0.2,
  "critRate": 0.08
  }
  },
  {
  "id": "u_earth_4",
  "name": "天命之子",
  "grade": 7,
  "desc": "受天道眷顾",
  "bonuses": {
  "luck": 6,
  "goldRate": 0.1,
  "expRate": 0.05
  }
  },
  {
  "id": "u_earth_5",
  "name": "仙骨天成",
  "grade": 7,
  "desc": "天生仙骨",
  "bonuses": {
  "expRate": 0.22,
  "mp": 0.1
  }
  },
  {
  "id": "u_earth_6",
  "name": "五行均衡",
  "grade": 7,
  "desc": "五行完美均衡",
  "bonuses": {
  "atk": 0.08,
  "def": 0.08,
  "hp": 0.08,
  "mp": 0.08,
  "expRate": 0.08
  }
  },
  {
  "id": "u_earth_7",
  "name": "电光火石",
  "grade": 7,
  "desc": "速度无人能及",
  "bonuses": {
  "dodgeRate": 0.15,
  "atk": 0.08
  }
  },
  {
  "id": "u_earth_8",
  "name": "灵力无穷",
  "grade": 7,
  "desc": "灵力取之不尽",
  "bonuses": {
  "mp": 0.2,
  "expRate": 0.08
  }
  },
  {
  "id": "u_earth_9",
  "name": "预知未来",
  "grade": 7,
  "desc": "能预知片刻之后",
  "bonuses": {
  "dodgeRate": 0.12,
  "critRate": 0.08,
  "luck": 3
  }
  },
  {
  "id": "u_earth_10",
  "name": "聚宝盆",
  "grade": 7,
  "desc": "灵石如流水",
  "bonuses": {
  "goldRate": 0.2,
  "luck": 4
  }
  },
  {
  "id": "u_earth_11",
  "name": "神力盖世",
  "grade": 7,
  "desc": "力量超越极限",
  "bonuses": {
  "atk": 0.18,
  "hp": 0.12
  }
  },
  {
  "id": "u_earth_12",
  "name": "道心通明",
  "grade": 7,
  "desc": "道心澄澈无垢",
  "bonuses": {
  "expRate": 0.18,
  "mp": 0.1,
  "def": 0.05
  }
  },
  {
  "id": "beast_t49",
  "name": "大地的妖力之力",
  "grade": 7,
  "desc": "畜生道之力凝聚的地级词条",
  "bonuses": {
  "def": 1.474,
  "hp": 0.406
  },
  "path": "beast"
  },
  {
  "id": "beast_t50",
  "name": "厚重的兽性之力",
  "grade": 7,
  "desc": "畜生道之力凝聚的地级词条",
  "bonuses": {
  "expRate": 1.835,
  "atk": 0.536
  },
  "path": "beast"
  },
  {
  "id": "beast_t51",
  "name": "承载的血脉之力",
  "grade": 7,
  "desc": "畜生道之力凝聚的地级词条",
  "bonuses": {
  "dodgeRate": 1.966
  },
  "path": "beast"
  },
  {
  "id": "beast_t52",
  "name": "深沉的化形之力",
  "grade": 7,
  "desc": "畜生道之力凝聚的地级词条",
  "bonuses": {
  "def": 2.068,
  "goldRate": 0.505
  },
  "path": "beast"
  },
  {
  "id": "beast_t53",
  "name": "沉稳的妖丹之力",
  "grade": 7,
  "desc": "畜生道之力凝聚的地级词条",
  "bonuses": {
  "expRate": 1.609,
  "mp": 0.395
  },
  "path": "beast"
  },
  {
  "id": "beast_t54",
  "name": "大地的妖魂之力",
  "grade": 7,
  "desc": "畜生道之力凝聚的地级词条",
  "bonuses": {
  "dodgeRate": 1.941,
  "def": 0.328
  },
  "path": "beast"
  },
  {
  "id": "u_heaven_1",
  "name": "天级天资",
  "grade": 8,
  "desc": "天级修仙天赋",
  "bonuses": {
  "expRate": 0.3,
  "mp": 0.15
  }
  },
  {
  "id": "u_heaven_2",
  "name": "不朽之躯",
  "grade": 8,
  "desc": "肉身近乎不朽",
  "bonuses": {
  "def": 0.25,
  "hp": 0.2
  }
  },
  {
  "id": "u_heaven_3",
  "name": "破灭之拳",
  "grade": 8,
  "desc": "一拳可破万物",
  "bonuses": {
  "atk": 0.25,
  "critRate": 0.1
  }
  },
  {
  "id": "u_heaven_4",
  "name": "天命所归",
  "grade": 8,
  "desc": "天命加身",
  "bonuses": {
  "luck": 8,
  "goldRate": 0.12,
  "expRate": 0.08
  }
  },
  {
  "id": "u_heaven_5",
  "name": "先天道体",
  "grade": 8,
  "desc": "先天大道之体",
  "bonuses": {
  "expRate": 0.3,
  "atk": 0.08,
  "def": 0.08,
  "hp": 0.08,
  "mp": 0.08
  }
  },
  {
  "id": "u_heaven_6",
  "name": "混沌亲和",
  "grade": 8,
  "desc": "对混沌之力有亲和",
  "bonuses": {
  "mp": 0.15,
  "expRate": 0.2,
  "atk": 0.05
  }
  },
  {
  "id": "u_heaven_7",
  "name": "时空感知",
  "grade": 8,
  "desc": "对时空有特殊感知",
  "bonuses": {
  "dodgeRate": 0.2,
  "critRate": 0.08,
  "luck": 4
  }
  },
  {
  "id": "u_heaven_8",
  "name": "造化之力",
  "grade": 8,
  "desc": "掌控造化之力",
  "bonuses": {
  "expRate": 0.25,
  "goldRate": 0.15,
  "mp": 0.1
  }
  },
  {
  "id": "u_heaven_9",
  "name": "因果之眼",
  "grade": 8,
  "desc": "能看透因果",
  "bonuses": {
  "luck": 6,
  "dodgeRate": 0.12,
  "expRate": 0.1
  }
  },
  {
  "id": "u_heaven_10",
  "name": "万法归一",
  "grade": 8,
  "desc": "所有功法融会贯通",
  "bonuses": {
  "expRate": 0.28,
  "atk": 0.1,
  "def": 0.1
  }
  },
  {
  "id": "beast_t55",
  "name": "天降的妖力之力",
  "grade": 8,
  "desc": "畜生道之力凝聚的天级词条",
  "bonuses": {
  "hp": 2.053,
  "atk": 0.405
  },
  "path": "beast"
  },
  {
  "id": "beast_t56",
  "name": "苍穹的兽性之力",
  "grade": 8,
  "desc": "畜生道之力凝聚的天级词条",
  "bonuses": {
  "goldRate": 2.921,
  "dodgeRate": 0.397
  },
  "path": "beast"
  },
  {
  "id": "beast_t57",
  "name": "穹顶的血脉之力",
  "grade": 8,
  "desc": "畜生道之力凝聚的天级词条",
  "bonuses": {
  "luck": 2.98,
  "goldRate": 0.553
  },
  "path": "beast"
  },
  {
  "id": "beast_t58",
  "name": "高空的化形之力",
  "grade": 8,
  "desc": "畜生道之力凝聚的天级词条",
  "bonuses": {
  "hp": 2.706,
  "mp": 0.632
  },
  "path": "beast"
  },
  {
  "id": "beast_t59",
  "name": "凌空的妖丹之力",
  "grade": 8,
  "desc": "畜生道之力凝聚的天级词条",
  "bonuses": {
  "goldRate": 2.132,
  "def": 0.567
  },
  "path": "beast"
  },
  {
  "id": "u_imm_1",
  "name": "仙级天资",
  "grade": 9,
  "desc": "仙级修仙天赋",
  "bonuses": {
  "expRate": 0.4,
  "mp": 0.2
  }
  },
  {
  "id": "u_imm_2",
  "name": "仙体初成",
  "grade": 9,
  "desc": "肉身初具仙体",
  "bonuses": {
  "def": 0.3,
  "hp": 0.25,
  "expRate": 0.1
  }
  },
  {
  "id": "u_imm_3",
  "name": "仙剑之魂",
  "grade": 9,
  "desc": "剑道已达仙人水准",
  "bonuses": {
  "atk": 0.3,
  "critRate": 0.12
  }
  },
  {
  "id": "u_imm_4",
  "name": "仙缘深厚",
  "grade": 9,
  "desc": "仙缘极深",
  "bonuses": {
  "luck": 10,
  "goldRate": 0.15,
  "expRate": 0.15
  }
  },
  {
  "id": "u_imm_5",
  "name": "太上忘情",
  "grade": 9,
  "desc": "心境已达太上之境",
  "bonuses": {
  "expRate": 0.45,
  "mp": 0.15,
  "def": 0.1
  }
  },
  {
  "id": "u_imm_6",
  "name": "天地为炉",
  "grade": 9,
  "desc": "以天地为炉鼎",
  "bonuses": {
  "atk": 0.15,
  "def": 0.15,
  "hp": 0.15,
  "mp": 0.15,
  "expRate": 0.15
  }
  },
  {
  "id": "u_imm_7",
  "name": "仙风道骨",
  "grade": 9,
  "desc": "仙风道骨，资质绝伦",
  "bonuses": {
  "expRate": 0.4,
  "atk": 0.12,
  "def": 0.12,
  "mp": 0.12
  }
  },
  {
  "id": "u_imm_8",
  "name": "命运编织者",
  "grade": 9,
  "desc": "能编织自身命运",
  "bonuses": {
  "luck": 8,
  "dodgeRate": 0.15,
  "goldRate": 0.12,
  "expRate": 0.1
  }
  },
  {
  "id": "beast_t60",
  "name": "仙灵的妖力之力",
  "grade": 9,
  "desc": "畜生道之力凝聚的仙级词条",
  "bonuses": {
  "atk": 3.535
  },
  "path": "beast"
  },
  {
  "id": "beast_t61",
  "name": "仙韵的兽性之力",
  "grade": 9,
  "desc": "畜生道之力凝聚的仙级词条",
  "bonuses": {
  "mp": 3.539,
  "dodgeRate": 0.576
  },
  "path": "beast"
  },
  {
  "id": "beast_t62",
  "name": "仙气的血脉之力",
  "grade": 9,
  "desc": "畜生道之力凝聚的仙级词条",
  "bonuses": {
  "critRate": 3.799,
  "goldRate": 1.017
  },
  "path": "beast"
  },
  {
  "id": "beast_t63",
  "name": "仙华的化形之力",
  "grade": 9,
  "desc": "畜生道之力凝聚的仙级词条",
  "bonuses": {
  "atk": 3.036,
  "mp": 0.553
  },
  "path": "beast"
  },
  {
  "id": "u_div_1",
  "name": "神级天资",
  "grade": 10,
  "desc": "神级修仙天赋",
  "bonuses": {
  "expRate": 0.5,
  "mp": 0.25
  }
  },
  {
  "id": "u_div_2",
  "name": "神体初铸",
  "grade": 10,
  "desc": "肉身初铸神体",
  "bonuses": {
  "def": 0.35,
  "hp": 0.3,
  "expRate": 0.15
  }
  },
  {
  "id": "u_div_3",
  "name": "弑神之力",
  "grade": 10,
  "desc": "拥有弑神的力量",
  "bonuses": {
  "atk": 0.35,
  "critRate": 0.15
  }
  },
  {
  "id": "u_div_4",
  "name": "天命主宰",
  "grade": 10,
  "desc": "主宰自身天命",
  "bonuses": {
  "luck": 12,
  "goldRate": 0.2,
  "expRate": 0.2
  }
  },
  {
  "id": "u_div_5",
  "name": "大道亲和",
  "grade": 10,
  "desc": "对大道有极深亲和",
  "bonuses": {
  "expRate": 0.55,
  "mp": 0.2,
  "def": 0.12
  }
  },
  {
  "id": "u_div_6",
  "name": "万物归元",
  "grade": 10,
  "desc": "万物之力归于己身",
  "bonuses": {
  "atk": 0.2,
  "def": 0.2,
  "hp": 0.2,
  "mp": 0.2,
  "expRate": 0.2
  }
  },
  {
  "id": "u_div_7",
  "name": "时空主宰",
  "grade": 10,
  "desc": "对时空有掌控力",
  "bonuses": {
  "dodgeRate": 0.2,
  "critRate": 0.12,
  "luck": 8,
  "expRate": 0.15
  }
  },
  {
  "id": "beast_t64",
  "name": "神赐的妖力之力",
  "grade": 10,
  "desc": "畜生道之力凝聚的神级词条",
  "bonuses": {
  "expRate": 5.215,
  "hp": 1.405
  },
  "path": "beast"
  },
  {
  "id": "beast_t65",
  "name": "神威的兽性之力",
  "grade": 10,
  "desc": "畜生道之力凝聚的神级词条",
  "bonuses": {
  "dodgeRate": 5.541,
  "atk": 0.892
  },
  "path": "beast"
  },
  {
  "id": "beast_t66",
  "name": "神圣的血脉之力",
  "grade": 10,
  "desc": "畜生道之力凝聚的神级词条",
  "bonuses": {
  "def": 4.809,
  "dodgeRate": 1.31
  },
  "path": "beast"
  },
  {
  "id": "u_saint_1",
  "name": "圣级天资",
  "grade": 11,
  "desc": "圣级修仙天赋",
  "bonuses": {
  "expRate": 0.65,
  "mp": 0.3
  }
  },
  {
  "id": "u_saint_2",
  "name": "圣体初现",
  "grade": 11,
  "desc": "肉身初具圣体",
  "bonuses": {
  "def": 0.4,
  "hp": 0.35,
  "expRate": 0.2
  }
  },
  {
  "id": "u_saint_3",
  "name": "斩圣之刃",
  "grade": 11,
  "desc": "攻击力可斩圣人",
  "bonuses": {
  "atk": 0.4,
  "critRate": 0.18
  }
  },
  {
  "id": "u_saint_4",
  "name": "圣人之姿",
  "grade": 11,
  "desc": "天生圣人之姿",
  "bonuses": {
  "expRate": 0.6,
  "atk": 0.15,
  "def": 0.15,
  "hp": 0.15,
  "mp": 0.15
  }
  },
  {
  "id": "u_saint_5",
  "name": "天道眷顾",
  "grade": 11,
  "desc": "天道亲自眷顾",
  "bonuses": {
  "luck": 15,
  "goldRate": 0.25,
  "expRate": 0.25
  }
  },
  {
  "id": "u_saint_6",
  "name": "轮回之主",
  "grade": 11,
  "desc": "对轮回有深刻理解",
  "bonuses": {
  "expRate": 0.6,
  "mp": 0.25,
  "dodgeRate": 0.15,
  "luck": 10
  }
  },
  {
  "id": "beast_t67",
  "name": "圣洁的妖力之力",
  "grade": 11,
  "desc": "畜生道之力凝聚的圣级词条",
  "bonuses": {
  "goldRate": 5.658,
  "critRate": 1.243
  },
  "path": "beast"
  },
  {
  "id": "beast_t68",
  "name": "圣光的兽性之力",
  "grade": 11,
  "desc": "畜生道之力凝聚的圣级词条",
  "bonuses": {
  "luck": 6.646,
  "expRate": 1.386
  },
  "path": "beast"
  },
  {
  "id": "u_chaos_1",
  "name": "混沌天资",
  "grade": 12,
  "desc": "混沌级修仙天赋",
  "bonuses": {
  "expRate": 0.8,
  "mp": 0.35,
  "atk": 0.15
  }
  },
  {
  "id": "u_chaos_2",
  "name": "混沌之体",
  "grade": 12,
  "desc": "混沌之力铸体",
  "bonuses": {
  "atk": 0.25,
  "def": 0.25,
  "hp": 0.25,
  "mp": 0.25,
  "expRate": 0.3
  }
  },
  {
  "id": "u_chaos_3",
  "name": "混沌之子",
  "grade": 12,
  "desc": "混沌之中的异数",
  "bonuses": {
  "luck": 20,
  "goldRate": 0.3,
  "expRate": 0.4,
  "atk": 0.15,
  "def": 0.15
  }
  },
  {
  "id": "u_chaos_4",
  "name": "万法归混沌",
  "grade": 12,
  "desc": "一切法归于混沌",
  "bonuses": {
  "expRate": 0.85,
  "atk": 0.2,
  "def": 0.2,
  "mp": 0.3
  }
  },
  {
  "id": "beast_t69",
  "name": "混沌的妖力之力",
  "grade": 12,
  "desc": "畜生道之力凝聚的混沌级词条",
  "bonuses": {
  "mp": 8.829
  },
  "path": "beast"
  },
  {
  "id": "u_trans_1",
  "name": "超脱天资",
  "grade": 13,
  "desc": "超脱一切的天赋",
  "bonuses": {
  "expRate": 1,
  "mp": 0.4,
  "atk": 0.2
  }
  },
  {
  "id": "u_trans_2",
  "name": "超脱之体",
  "grade": 13,
  "desc": "超越一切的肉身",
  "bonuses": {
  "atk": 0.3,
  "def": 0.3,
  "hp": 0.3,
  "mp": 0.3,
  "expRate": 0.5
  }
  },
  {
  "id": "u_trans_3",
  "name": "天道化身",
  "grade": 13,
  "desc": "你就是天道的化身",
  "bonuses": {
  "luck": 25,
  "goldRate": 0.4,
  "expRate": 0.6,
  "atk": 0.2,
  "def": 0.2
  }
  },
  {
  "id": "u_trans_4",
  "name": "大道唯一",
  "grade": 13,
  "desc": "大道之中唯一的异数",
  "bonuses": {
  "expRate": 1.2,
  "atk": 0.25,
  "def": 0.25,
  "mp": 0.35,
  "luck": 15
  }
  },
  {
  "id": "beast_t70",
  "name": "超脱的妖力之力",
  "grade": 13,
  "desc": "畜生道之力凝聚的超脱级词条",
  "bonuses": {
  "dodgeRate": 13.151,
  "hp": 2.85
  },
  "path": "beast"
  }

];

export const TRAITS_ASURA: any = [
{
  "id": "u_bad_1",
  "name": "霉运缠身",
  "grade": 0,
  "desc": "天生命苦，事事不顺",
  "bonuses": {
  "expRate": -0.05,
  "luck": -2
  }
  },
  {
  "id": "u_bad_2",
  "name": "灵根堵塞",
  "grade": 0,
  "desc": "灵脉不通，修炼困难",
  "bonuses": {
  "expRate": -0.08
  }
  },
  {
  "id": "u_bad_3",
  "name": "体弱多病",
  "grade": 0,
  "desc": "身体羸弱，动辄生病",
  "bonuses": {
  "hp": -0.1,
  "def": -0.05
  }
  },
  {
  "id": "u_bad_4",
  "name": "心魔深种",
  "grade": 0,
  "desc": "心魔缠身，难以自拔",
  "bonuses": {
  "mp": -0.1,
  "expRate": -0.03
  }
  },
  {
  "id": "u_bad_5",
  "name": "天妒英才",
  "grade": 0,
  "desc": "天道不容，劫难不断",
  "bonuses": {
  "luck": -5,
  "expRate": -0.05
  }
  },
  {
  "id": "u_bad_6",
  "name": "五感迟钝",
  "grade": 0,
  "desc": "感知迟钝，修炼缓慢",
  "bonuses": {
  "expRate": -0.06,
  "dodgeRate": -0.03
  }
  },
  {
  "id": "u_bad_7",
  "name": "招灾体质",
  "grade": 0,
  "desc": "走到哪里灾祸跟到哪里",
  "bonuses": {
  "luck": -3,
  "hp": -0.05
  }
  },
  {
  "id": "u_bad_8",
  "name": "灵气排斥",
  "grade": 0,
  "desc": "天地灵气对你避而远之",
  "bonuses": {
  "expRate": -0.1,
  "mp": -0.05
  }
  },
  {
  "id": "u_bad_9",
  "name": "命犯孤星",
  "grade": 0,
  "desc": "天煞孤星，六亲无缘",
  "bonuses": {
  "luck": -4,
  "goldRate": -0.1
  }
  },
  {
  "id": "u_bad_10",
  "name": "根基虚浮",
  "grade": 0,
  "desc": "修炼根基不稳，上限极低",
  "bonuses": {
  "atk": -0.05,
  "def": -0.05,
  "expRate": -0.04
  }
  },
  {
  "id": "u_bad_11",
  "name": "经脉逆转",
  "grade": 0,
  "desc": "经脉逆行，修炼事倍功半",
  "bonuses": {
  "expRate": -0.12,
  "mp": -0.08
  }
  },
  {
  "id": "u_bad_12",
  "name": "业力缠身",
  "grade": 0,
  "desc": "前世业障深重，此生难修",
  "bonuses": {
  "expRate": -0.07,
  "luck": -3,
  "goldRate": -0.05
  }
  },
  {
  "id": "asura_t1",
  "name": "残破的战意之力",
  "grade": 0,
  "desc": "阿修罗道之力凝聚的废弃级词条",
  "bonuses": {
  "mp": 0
  },
  "path": "asura"
  },
  {
  "id": "asura_t2",
  "name": "腐朽的杀伐之力",
  "grade": 0,
  "desc": "阿修罗道之力凝聚的废弃级词条",
  "bonuses": {
  "critRate": 0
  },
  "path": "asura"
  },
  {
  "id": "asura_t3",
  "name": "凋零的血战之力",
  "grade": 0,
  "desc": "阿修罗道之力凝聚的废弃级词条",
  "bonuses": {
  "atk": 0
  },
  "path": "asura"
  },
  {
  "id": "asura_t4",
  "name": "衰败的狂暴之力",
  "grade": 0,
  "desc": "阿修罗道之力凝聚的废弃级词条",
  "bonuses": {
  "mp": 0
  },
  "path": "asura"
  },
  {
  "id": "asura_t5",
  "name": "枯萎的不屈之力",
  "grade": 0,
  "desc": "阿修罗道之力凝聚的废弃级词条",
  "bonuses": {
  "critRate": 0
  },
  "path": "asura"
  },
  {
  "id": "u_waste_1",
  "name": "资质愚钝",
  "grade": 1,
  "desc": "天资愚钝，领悟力差",
  "bonuses": {
  "expRate": -0.03
  }
  },
  {
  "id": "u_waste_2",
  "name": "胆小如鼠",
  "grade": 1,
  "desc": "性格懦弱，不敢争先",
  "bonuses": {
  "atk": -0.03,
  "critRate": -0.02
  }
  },
  {
  "id": "u_waste_3",
  "name": "好吃懒做",
  "grade": 1,
  "desc": "天性懒惰，不思进取",
  "bonuses": {
  "expRate": -0.04,
  "goldRate": -0.03
  }
  },
  {
  "id": "u_waste_4",
  "name": "目不识丁",
  "grade": 1,
  "desc": "大字不识，功法难悟",
  "bonuses": {
  "expRate": -0.05
  }
  },
  {
  "id": "u_waste_5",
  "name": "五行偏枯",
  "grade": 1,
  "desc": "五行不全，修炼受限",
  "bonuses": {
  "mp": -0.05,
  "expRate": -0.02
  }
  },
  {
  "id": "u_waste_6",
  "name": "心浮气躁",
  "grade": 1,
  "desc": "性情急躁，难以静修",
  "bonuses": {
  "expRate": -0.04,
  "critRate": -0.01
  }
  },
  {
  "id": "u_waste_7",
  "name": "筋骨不佳",
  "grade": 1,
  "desc": "筋骨平庸，肉体凡胎",
  "bonuses": {
  "hp": -0.05,
  "atk": -0.02
  }
  },
  {
  "id": "u_waste_8",
  "name": "气运低迷",
  "grade": 1,
  "desc": "运气不好，喝水都塞牙",
  "bonuses": {
  "luck": -2,
  "goldRate": -0.03
  }
  },
  {
  "id": "u_waste_9",
  "name": "反应迟缓",
  "grade": 1,
  "desc": "反应慢半拍，战斗吃亏",
  "bonuses": {
  "dodgeRate": -0.03,
  "atk": -0.02
  }
  },
  {
  "id": "u_waste_10",
  "name": "贪生怕死",
  "grade": 1,
  "desc": "过于谨慎，错失良机",
  "bonuses": {
  "atk": -0.04,
  "luck": -1
  }
  },
  {
  "id": "u_waste_11",
  "name": "不善言辞",
  "grade": 1,
  "desc": "嘴笨舌拙，难交道友",
  "bonuses": {
  "goldRate": -0.05,
  "luck": -1
  }
  },
  {
  "id": "u_waste_12",
  "name": "嗅觉不灵",
  "grade": 1,
  "desc": "闻不到灵草的气味",
  "bonuses": {
  "goldRate": -0.04
  }
  },
  {
  "id": "u_waste_13",
  "name": "方向感差",
  "grade": 1,
  "desc": "经常迷路，浪费时间",
  "bonuses": {
  "expRate": -0.02,
  "luck": -1
  }
  },
  {
  "id": "u_waste_14",
  "name": "恐高症",
  "grade": 1,
  "desc": "无法御剑飞行",
  "bonuses": {
  "dodgeRate": -0.02,
  "expRate": -0.01
  }
  },
  {
  "id": "u_waste_15",
  "name": "社恐体质",
  "grade": 1,
  "desc": "害怕与人交流",
  "bonuses": {
  "goldRate": -0.03,
  "def": -0.01
  }
  },
  {
  "id": "asura_t6",
  "name": "微弱的战意之力",
  "grade": 1,
  "desc": "阿修罗道之力凝聚的垃圾级词条",
  "bonuses": {
  "def": 0.159
  },
  "path": "asura"
  },
  {
  "id": "asura_t7",
  "name": "黯淡的杀伐之力",
  "grade": 1,
  "desc": "阿修罗道之力凝聚的垃圾级词条",
  "bonuses": {
  "expRate": 0.146
  },
  "path": "asura"
  },
  {
  "id": "asura_t8",
  "name": "微光的血战之力",
  "grade": 1,
  "desc": "阿修罗道之力凝聚的垃圾级词条",
  "bonuses": {
  "dodgeRate": 0.135
  },
  "path": "asura"
  },
  {
  "id": "asura_t9",
  "name": "淡薄的狂暴之力",
  "grade": 1,
  "desc": "阿修罗道之力凝聚的垃圾级词条",
  "bonuses": {
  "def": 0.132
  },
  "path": "asura"
  },
  {
  "id": "asura_t10",
  "name": "稀薄的不屈之力",
  "grade": 1,
  "desc": "阿修罗道之力凝聚的垃圾级词条",
  "bonuses": {
  "expRate": 0.151
  },
  "path": "asura"
  },
  {
  "id": "asura_t11",
  "name": "微弱的怒火之力",
  "grade": 1,
  "desc": "阿修罗道之力凝聚的垃圾级词条",
  "bonuses": {
  "dodgeRate": 0.137
  },
  "path": "asura"
  },
  {
  "id": "asura_t12",
  "name": "黯淡的修罗之力",
  "grade": 1,
  "desc": "阿修罗道之力凝聚的垃圾级词条",
  "bonuses": {
  "def": 0.139
  },
  "path": "asura"
  },
  {
  "id": "u_fish_1",
  "name": "勉强及格",
  "grade": 2,
  "desc": "资质勉强够用，聊胜于无",
  "bonuses": {
  "expRate": 0.01
  }
  },
  {
  "id": "u_fish_2",
  "name": "小有慧根",
  "grade": 2,
  "desc": "有一丝修仙资质",
  "bonuses": {
  "expRate": 0.02,
  "mp": 0.02
  }
  },
  {
  "id": "u_fish_3",
  "name": "皮糙肉厚",
  "grade": 2,
  "desc": "比常人耐打一些",
  "bonuses": {
  "hp": 0.03,
  "def": 0.02
  }
  },
  {
  "id": "u_fish_4",
  "name": "手脚麻利",
  "grade": 2,
  "desc": "动作比常人快",
  "bonuses": {
  "atk": 0.02,
  "dodgeRate": 0.01
  }
  },
  {
  "id": "u_fish_5",
  "name": "嗅觉灵敏",
  "grade": 2,
  "desc": "能闻到灵草的气味",
  "bonuses": {
  "goldRate": 0.02,
  "luck": 1
  }
  },
  {
  "id": "u_fish_6",
  "name": "记性尚可",
  "grade": 2,
  "desc": "功法记得住",
  "bonuses": {
  "expRate": 0.015
  }
  },
  {
  "id": "u_fish_7",
  "name": "饭量惊人",
  "grade": 2,
  "desc": "吃得多力气大",
  "bonuses": {
  "hp": 0.02,
  "atk": 0.01
  }
  },
  {
  "id": "u_fish_8",
  "name": "睡眠充足",
  "grade": 2,
  "desc": "休息效率高",
  "bonuses": {
  "expRate": 0.02
  }
  },
  {
  "id": "u_fish_9",
  "name": "视力不错",
  "grade": 2,
  "desc": "看得远看得清",
  "bonuses": {
  "critRate": 0.01,
  "dodgeRate": 0.01
  }
  },
  {
  "id": "u_fish_10",
  "name": "运气普通",
  "grade": 2,
  "desc": "不好不坏的运气",
  "bonuses": {
  "luck": 0
  }
  },
  {
  "id": "u_fish_11",
  "name": "韧性十足",
  "grade": 2,
  "desc": "不容易放弃",
  "bonuses": {
  "hp": 0.02,
  "def": 0.01
  }
  },
  {
  "id": "u_fish_12",
  "name": "胆子够大",
  "grade": 2,
  "desc": "敢想敢做",
  "bonuses": {
  "atk": 0.02,
  "critRate": 0.01
  }
  },
  {
  "id": "u_fish_13",
  "name": "好奇心强",
  "grade": 2,
  "desc": "喜欢探索",
  "bonuses": {
  "luck": 1,
  "expRate": 0.01
  }
  },
  {
  "id": "u_fish_14",
  "name": "人缘不错",
  "grade": 2,
  "desc": "容易交到朋友",
  "bonuses": {
  "goldRate": 0.02,
  "luck": 1
  }
  },
  {
  "id": "u_fish_15",
  "name": "适应力强",
  "grade": 2,
  "desc": "到哪都能活",
  "bonuses": {
  "hp": 0.01,
  "def": 0.01,
  "expRate": 0.01
  }
  },
  {
  "id": "u_fish_16",
  "name": "直觉敏锐",
  "grade": 2,
  "desc": "偶尔能感觉到危险",
  "bonuses": {
  "dodgeRate": 0.02,
  "luck": 1
  }
  },
  {
  "id": "u_fish_17",
  "name": "手巧心灵",
  "grade": 2,
  "desc": "擅长手工",
  "bonuses": {
  "def": 0.02,
  "goldRate": 0.01
  }
  },
  {
  "id": "u_fish_18",
  "name": "耐力持久",
  "grade": 2,
  "desc": "能坚持更久",
  "bonuses": {
  "hp": 0.03,
  "expRate": 0.01
  }
  },
  {
  "id": "asura_t13",
  "name": "普通的战意之力",
  "grade": 2,
  "desc": "阿修罗道之力凝聚的杂鱼级词条",
  "bonuses": {
  "goldRate": 0.268,
  "critRate": 0.063
  },
  "path": "asura"
  },
  {
  "id": "asura_t14",
  "name": "寻常的杀伐之力",
  "grade": 2,
  "desc": "阿修罗道之力凝聚的杂鱼级词条",
  "bonuses": {
  "luck": 0.334,
  "expRate": 0.05
  },
  "path": "asura"
  },
  {
  "id": "asura_t15",
  "name": "平凡的血战之力",
  "grade": 2,
  "desc": "阿修罗道之力凝聚的杂鱼级词条",
  "bonuses": {
  "hp": 0.293
  },
  "path": "asura"
  },
  {
  "id": "asura_t16",
  "name": "一般的狂暴之力",
  "grade": 2,
  "desc": "阿修罗道之力凝聚的杂鱼级词条",
  "bonuses": {
  "goldRate": 0.254,
  "atk": 0.052
  },
  "path": "asura"
  },
  {
  "id": "asura_t17",
  "name": "基本的不屈之力",
  "grade": 2,
  "desc": "阿修罗道之力凝聚的杂鱼级词条",
  "bonuses": {
  "luck": 0.353,
  "dodgeRate": 0.081
  },
  "path": "asura"
  },
  {
  "id": "asura_t18",
  "name": "普通的怒火之力",
  "grade": 2,
  "desc": "阿修罗道之力凝聚的杂鱼级词条",
  "bonuses": {
  "hp": 0.279,
  "goldRate": 0.056
  },
  "path": "asura"
  },
  {
  "id": "asura_t19",
  "name": "寻常的修罗之力",
  "grade": 2,
  "desc": "阿修罗道之力凝聚的杂鱼级词条",
  "bonuses": {
  "goldRate": 0.281,
  "mp": 0.057
  },
  "path": "asura"
  },
  {
  "id": "asura_t20",
  "name": "平凡的斗气之力",
  "grade": 2,
  "desc": "阿修罗道之力凝聚的杂鱼级词条",
  "bonuses": {
  "luck": 0.323,
  "def": 0.084
  },
  "path": "asura"
  },
  {
  "id": "asura_t21",
  "name": "一般的煞气之力",
  "grade": 2,
  "desc": "阿修罗道之力凝聚的杂鱼级词条",
  "bonuses": {
  "hp": 0.307,
  "luck": 0.064
  },
  "path": "asura"
  },
  {
  "id": "u_unrank_1",
  "name": "小聪明",
  "grade": 3,
  "desc": "有点小聪明，但格局不大",
  "bonuses": {
  "expRate": 0.03,
  "luck": 1
  }
  },
  {
  "id": "u_unrank_2",
  "name": "铜皮铁骨",
  "grade": 3,
  "desc": "身体比常人结实",
  "bonuses": {
  "hp": 0.05,
  "def": 0.04
  }
  },
  {
  "id": "u_unrank_3",
  "name": "耳聪目明",
  "grade": 3,
  "desc": "五感灵敏",
  "bonuses": {
  "critRate": 0.02,
  "dodgeRate": 0.02
  }
  },
  {
  "id": "u_unrank_4",
  "name": "勤奋刻苦",
  "grade": 3,
  "desc": "比别人更努力",
  "bonuses": {
  "expRate": 0.04
  }
  },
  {
  "id": "u_unrank_5",
  "name": "福缘浅薄",
  "grade": 3,
  "desc": "有点小运气",
  "bonuses": {
  "luck": 2,
  "goldRate": 0.03
  }
  },
  {
  "id": "u_unrank_6",
  "name": "力气过人",
  "grade": 3,
  "desc": "比常人力气大",
  "bonuses": {
  "atk": 0.05
  }
  },
  {
  "id": "u_unrank_7",
  "name": "灵觉初醒",
  "grade": 3,
  "desc": "对灵气有微弱感应",
  "bonuses": {
  "mp": 0.04,
  "expRate": 0.02
  }
  },
  {
  "id": "u_unrank_8",
  "name": "战斗本能",
  "grade": 3,
  "desc": "天生的战斗直觉",
  "bonuses": {
  "atk": 0.03,
  "critRate": 0.02
  }
  },
  {
  "id": "u_unrank_9",
  "name": "心志坚定",
  "grade": 3,
  "desc": "不容易被迷惑",
  "bonuses": {
  "mp": 0.03,
  "def": 0.02
  }
  },
  {
  "id": "u_unrank_10",
  "name": "灵草亲和",
  "grade": 3,
  "desc": "种草有一手",
  "bonuses": {
  "goldRate": 0.04
  }
  },
  {
  "id": "u_unrank_11",
  "name": "速度见长",
  "grade": 3,
  "desc": "比常人快一些",
  "bonuses": {
  "dodgeRate": 0.03,
  "atk": 0.02
  }
  },
  {
  "id": "u_unrank_12",
  "name": "记忆力好",
  "grade": 3,
  "desc": "功法过目不忘",
  "bonuses": {
  "expRate": 0.03,
  "mp": 0.02
  }
  },
  {
  "id": "u_unrank_13",
  "name": "社交达人",
  "grade": 3,
  "desc": "人缘极好",
  "bonuses": {
  "goldRate": 0.03,
  "luck": 2
  }
  },
  {
  "id": "u_unrank_14",
  "name": "危机嗅觉",
  "grade": 3,
  "desc": "总能提前感知危险",
  "bonuses": {
  "dodgeRate": 0.03,
  "luck": 1
  }
  },
  {
  "id": "u_unrank_15",
  "name": "自学成才",
  "grade": 3,
  "desc": "自学能力强",
  "bonuses": {
  "expRate": 0.03
  }
  },
  {
  "id": "asura_t22",
  "name": "初生的战意之力",
  "grade": 3,
  "desc": "阿修罗道之力凝聚的不入流级词条",
  "bonuses": {
  "critRate": 0.532,
  "dodgeRate": 0.116
  },
  "path": "asura"
  },
  {
  "id": "asura_t23",
  "name": "萌芽的杀伐之力",
  "grade": 3,
  "desc": "阿修罗道之力凝聚的不入流级词条",
  "bonuses": {
  "atk": 0.474,
  "goldRate": 0.102
  },
  "path": "asura"
  },
  {
  "id": "asura_t24",
  "name": "初成的血战之力",
  "grade": 3,
  "desc": "阿修罗道之力凝聚的不入流级词条",
  "bonuses": {
  "mp": 0.471
  },
  "path": "asura"
  },
  {
  "id": "asura_t25",
  "name": "初现的狂暴之力",
  "grade": 3,
  "desc": "阿修罗道之力凝聚的不入流级词条",
  "bonuses": {
  "critRate": 0.428,
  "def": 0.114
  },
  "path": "asura"
  },
  {
  "id": "asura_t26",
  "name": "雏形的不屈之力",
  "grade": 3,
  "desc": "阿修罗道之力凝聚的不入流级词条",
  "bonuses": {
  "atk": 0.586,
  "luck": 0.123
  },
  "path": "asura"
  },
  {
  "id": "asura_t27",
  "name": "初生的怒火之力",
  "grade": 3,
  "desc": "阿修罗道之力凝聚的不入流级词条",
  "bonuses": {
  "mp": 0.451,
  "critRate": 0.115
  },
  "path": "asura"
  },
  {
  "id": "asura_t28",
  "name": "萌芽的修罗之力",
  "grade": 3,
  "desc": "阿修罗道之力凝聚的不入流级词条",
  "bonuses": {
  "critRate": 0.563,
  "expRate": 0.137
  },
  "path": "asura"
  },
  {
  "id": "u_rank_1",
  "name": "资质入流",
  "grade": 4,
  "desc": "修仙资质勉强入流",
  "bonuses": {
  "expRate": 0.05,
  "mp": 0.03
  }
  },
  {
  "id": "u_rank_2",
  "name": "铜墙铁壁",
  "grade": 4,
  "desc": "防御力不俗",
  "bonuses": {
  "def": 0.08,
  "hp": 0.05
  }
  },
  {
  "id": "u_rank_3",
  "name": "利刃锋芒",
  "grade": 4,
  "desc": "攻击力出色",
  "bonuses": {
  "atk": 0.08,
  "critRate": 0.03
  }
  },
  {
  "id": "u_rank_4",
  "name": "气运加身",
  "grade": 4,
  "desc": "有几分气运",
  "bonuses": {
  "luck": 3,
  "goldRate": 0.05
  }
  },
  {
  "id": "u_rank_5",
  "name": "悟性尚佳",
  "grade": 4,
  "desc": "领悟力不错",
  "bonuses": {
  "expRate": 0.06,
  "mp": 0.02
  }
  },
  {
  "id": "u_rank_6",
  "name": "体魄强健",
  "grade": 4,
  "desc": "身体素质优秀",
  "bonuses": {
  "hp": 0.08,
  "atk": 0.03
  }
  },
  {
  "id": "u_rank_7",
  "name": "身法灵活",
  "grade": 4,
  "desc": "闪避能力出众",
  "bonuses": {
  "dodgeRate": 0.05,
  "atk": 0.02
  }
  },
  {
  "id": "u_rank_8",
  "name": "灵力充沛",
  "grade": 4,
  "desc": "灵力储备丰厚",
  "bonuses": {
  "mp": 0.08,
  "expRate": 0.03
  }
  },
  {
  "id": "u_rank_9",
  "name": "感知敏锐",
  "grade": 4,
  "desc": "对危险有敏锐感知",
  "bonuses": {
  "dodgeRate": 0.04,
  "luck": 2
  }
  },
  {
  "id": "u_rank_10",
  "name": "经商天赋",
  "grade": 4,
  "desc": "做生意有头脑",
  "bonuses": {
  "goldRate": 0.08
  }
  },
  {
  "id": "u_rank_11",
  "name": "坚韧不拔",
  "grade": 4,
  "desc": "意志力坚定",
  "bonuses": {
  "hp": 0.05,
  "def": 0.04,
  "expRate": 0.02
  }
  },
  {
  "id": "u_rank_12",
  "name": "战斗天赋",
  "grade": 4,
  "desc": "天生战士",
  "bonuses": {
  "atk": 0.06,
  "critRate": 0.03,
  "dodgeRate": 0.02
  }
  },
  {
  "id": "asura_t29",
  "name": "凝聚的战意之力",
  "grade": 4,
  "desc": "阿修罗道之力凝聚的入流级词条",
  "bonuses": {
  "def": 0.635,
  "mp": 0.125
  },
  "path": "asura"
  },
  {
  "id": "asura_t30",
  "name": "成型的杀伐之力",
  "grade": 4,
  "desc": "阿修罗道之力凝聚的入流级词条",
  "bonuses": {
  "expRate": 0.823,
  "def": 0.183
  },
  "path": "asura"
  },
  {
  "id": "asura_t31",
  "name": "成熟的血战之力",
  "grade": 4,
  "desc": "阿修罗道之力凝聚的入流级词条",
  "bonuses": {
  "dodgeRate": 0.764,
  "luck": 0.185
  },
  "path": "asura"
  },
  {
  "id": "asura_t32",
  "name": "稳固的狂暴之力",
  "grade": 4,
  "desc": "阿修罗道之力凝聚的入流级词条",
  "bonuses": {
  "def": 0.808,
  "critRate": 0.154
  },
  "path": "asura"
  },
  {
  "id": "asura_t33",
  "name": "坚实的不屈之力",
  "grade": 4,
  "desc": "阿修罗道之力凝聚的入流级词条",
  "bonuses": {
  "expRate": 0.716
  },
  "path": "asura"
  },
  {
  "id": "asura_t34",
  "name": "凝聚的怒火之力",
  "grade": 4,
  "desc": "阿修罗道之力凝聚的入流级词条",
  "bonuses": {
  "dodgeRate": 0.656,
  "hp": 0.131
  },
  "path": "asura"
  },
  {
  "id": "u_yel_1",
  "name": "黄级慧根",
  "grade": 5,
  "desc": "黄级修仙资质",
  "bonuses": {
  "expRate": 0.08,
  "mp": 0.05
  }
  },
  {
  "id": "u_yel_2",
  "name": "铁壁之躯",
  "grade": 5,
  "desc": "防御力出色",
  "bonuses": {
  "def": 0.12,
  "hp": 0.08
  }
  },
  {
  "id": "u_yel_3",
  "name": "锋锐之体",
  "grade": 5,
  "desc": "攻击力超群",
  "bonuses": {
  "atk": 0.1,
  "critRate": 0.04
  }
  },
  {
  "id": "u_yel_4",
  "name": "气运亨通",
  "grade": 5,
  "desc": "运气不错",
  "bonuses": {
  "luck": 4,
  "goldRate": 0.06
  }
  },
  {
  "id": "u_yel_5",
  "name": "过目不忘",
  "grade": 5,
  "desc": "功法一看就会",
  "bonuses": {
  "expRate": 0.1
  }
  },
  {
  "id": "u_yel_6",
  "name": "百毒不侵",
  "grade": 5,
  "desc": "毒素免疫",
  "bonuses": {
  "hp": 0.06,
  "def": 0.05
  }
  },
  {
  "id": "u_yel_7",
  "name": "御风而行",
  "grade": 5,
  "desc": "速度极快",
  "bonuses": {
  "dodgeRate": 0.06,
  "atk": 0.04
  }
  },
  {
  "id": "u_yel_8",
  "name": "灵力如海",
  "grade": 5,
  "desc": "灵力储备惊人",
  "bonuses": {
  "mp": 0.1,
  "expRate": 0.05
  }
  },
  {
  "id": "u_yel_9",
  "name": "预知危险",
  "grade": 5,
  "desc": "总能提前躲避",
  "bonuses": {
  "dodgeRate": 0.08,
  "luck": 2
  }
  },
  {
  "id": "u_yel_10",
  "name": "招财进宝",
  "grade": 5,
  "desc": "财运亨通",
  "bonuses": {
  "goldRate": 0.1,
  "luck": 2
  }
  },
  {
  "id": "u_yel_11",
  "name": "铜皮铁骨",
  "grade": 5,
  "desc": "肉体极其强韧",
  "bonuses": {
  "hp": 0.1,
  "def": 0.06
  }
  },
  {
  "id": "u_yel_12",
  "name": "战斗狂人",
  "grade": 5,
  "desc": "越战越勇",
  "bonuses": {
  "atk": 0.08,
  "critRate": 0.05
  }
  },
  {
  "id": "u_yel_13",
  "name": "修炼达人",
  "grade": 5,
  "desc": "修炼效率极高",
  "bonuses": {
  "expRate": 0.09,
  "mp": 0.04
  }
  },
  {
  "id": "u_yel_14",
  "name": "全能选手",
  "grade": 5,
  "desc": "各方面均衡发展",
  "bonuses": {
  "atk": 0.04,
  "def": 0.04,
  "hp": 0.04,
  "mp": 0.04,
  "expRate": 0.04
  }
  },
  {
  "id": "asura_t35",
  "name": "闪耀的战意之力",
  "grade": 5,
  "desc": "阿修罗道之力凝聚的黄级词条",
  "bonuses": {
  "hp": 0.722,
  "def": 0.191
  },
  "path": "asura"
  },
  {
  "id": "asura_t36",
  "name": "明亮的杀伐之力",
  "grade": 5,
  "desc": "阿修罗道之力凝聚的黄级词条",
  "bonuses": {
  "goldRate": 0.739,
  "luck": 0.229
  },
  "path": "asura"
  },
  {
  "id": "asura_t37",
  "name": "光耀的血战之力",
  "grade": 5,
  "desc": "阿修罗道之力凝聚的黄级词条",
  "bonuses": {
  "luck": 1.064,
  "critRate": 0.244
  },
  "path": "asura"
  },
  {
  "id": "asura_t38",
  "name": "璀璨的狂暴之力",
  "grade": 5,
  "desc": "阿修罗道之力凝聚的黄级词条",
  "bonuses": {
  "hp": 0.767,
  "expRate": 0.154
  },
  "path": "asura"
  },
  {
  "id": "asura_t39",
  "name": "夺目的不屈之力",
  "grade": 5,
  "desc": "阿修罗道之力凝聚的黄级词条",
  "bonuses": {
  "goldRate": 0.962,
  "hp": 0.179
  },
  "path": "asura"
  },
  {
  "id": "asura_t40",
  "name": "闪耀的怒火之力",
  "grade": 5,
  "desc": "阿修罗道之力凝聚的黄级词条",
  "bonuses": {
  "luck": 1.003,
  "atk": 0.249
  },
  "path": "asura"
  },
  {
  "id": "asura_t41",
  "name": "明亮的修罗之力",
  "grade": 5,
  "desc": "阿修罗道之力凝聚的黄级词条",
  "bonuses": {
  "hp": 0.793,
  "dodgeRate": 0.142
  },
  "path": "asura"
  },
  {
  "id": "u_xuan_1",
  "name": "玄级天资",
  "grade": 6,
  "desc": "玄级修仙天赋",
  "bonuses": {
  "expRate": 0.12,
  "mp": 0.08
  }
  },
  {
  "id": "u_xuan_2",
  "name": "金刚不坏",
  "grade": 6,
  "desc": "防御力惊人",
  "bonuses": {
  "def": 0.15,
  "hp": 0.1
  }
  },
  {
  "id": "u_xuan_3",
  "name": "剑意凛然",
  "grade": 6,
  "desc": "攻击力极强",
  "bonuses": {
  "atk": 0.15,
  "critRate": 0.06
  }
  },
  {
  "id": "u_xuan_4",
  "name": "鸿运当头",
  "grade": 6,
  "desc": "好运连连",
  "bonuses": {
  "luck": 5,
  "goldRate": 0.08
  }
  },
  {
  "id": "u_xuan_5",
  "name": "天资聪颖",
  "grade": 6,
  "desc": "领悟力超群",
  "bonuses": {
  "expRate": 0.15
  }
  },
  {
  "id": "u_xuan_6",
  "name": "五行亲和",
  "grade": 6,
  "desc": "五行之力亲和",
  "bonuses": {
  "mp": 0.1,
  "expRate": 0.08,
  "atk": 0.03
  }
  },
  {
  "id": "u_xuan_7",
  "name": "雷霆之速",
  "grade": 6,
  "desc": "速度如闪电",
  "bonuses": {
  "dodgeRate": 0.1,
  "atk": 0.05
  }
  },
  {
  "id": "u_xuan_8",
  "name": "灵海深邃",
  "grade": 6,
  "desc": "灵力储备极深",
  "bonuses": {
  "mp": 0.15,
  "expRate": 0.06
  }
  },
  {
  "id": "u_xuan_9",
  "name": "天眼通",
  "grade": 6,
  "desc": "洞察万物",
  "bonuses": {
  "dodgeRate": 0.08,
  "critRate": 0.05,
  "luck": 2
  }
  },
  {
  "id": "u_xuan_10",
  "name": "富甲一方",
  "grade": 6,
  "desc": "灵石自动来",
  "bonuses": {
  "goldRate": 0.15,
  "luck": 3
  }
  },
  {
  "id": "u_xuan_11",
  "name": "龙象之力",
  "grade": 6,
  "desc": "力大无穷",
  "bonuses": {
  "atk": 0.12,
  "hp": 0.1,
  "def": 0.05
  }
  },
  {
  "id": "u_xuan_12",
  "name": "万法皆通",
  "grade": 6,
  "desc": "功法领悟极快",
  "bonuses": {
  "expRate": 0.12,
  "mp": 0.06,
  "atk": 0.04
  }
  },
  {
  "id": "u_xuan_13",
  "name": "九阳之体",
  "grade": 6,
  "desc": "阳气旺盛",
  "bonuses": {
  "atk": 0.1,
  "hp": 0.08,
  "expRate": 0.08
  }
  },
  {
  "id": "u_xuan_14",
  "name": "九阴之脉",
  "grade": 6,
  "desc": "阴气浓郁",
  "bonuses": {
  "mp": 0.12,
  "def": 0.06,
  "expRate": 0.08
  }
  },
  {
  "id": "asura_t42",
  "name": "玄妙的战意之力",
  "grade": 6,
  "desc": "阿修罗道之力凝聚的玄级词条",
  "bonuses": {
  "critRate": 1.309
  },
  "path": "asura"
  },
  {
  "id": "asura_t43",
  "name": "深奥的杀伐之力",
  "grade": 6,
  "desc": "阿修罗道之力凝聚的玄级词条",
  "bonuses": {
  "atk": 1.215,
  "expRate": 0.272
  },
  "path": "asura"
  },
  {
  "id": "asura_t44",
  "name": "精妙的血战之力",
  "grade": 6,
  "desc": "阿修罗道之力凝聚的玄级词条",
  "bonuses": {
  "mp": 1.332,
  "hp": 0.38
  },
  "path": "asura"
  },
  {
  "id": "asura_t45",
  "name": "通玄的狂暴之力",
  "grade": 6,
  "desc": "阿修罗道之力凝聚的玄级词条",
  "bonuses": {
  "critRate": 1.454,
  "atk": 0.298
  },
  "path": "asura"
  },
  {
  "id": "asura_t46",
  "name": "入微的不屈之力",
  "grade": 6,
  "desc": "阿修罗道之力凝聚的玄级词条",
  "bonuses": {
  "atk": 1.197,
  "dodgeRate": 0.274
  },
  "path": "asura"
  },
  {
  "id": "asura_t47",
  "name": "玄妙的怒火之力",
  "grade": 6,
  "desc": "阿修罗道之力凝聚的玄级词条",
  "bonuses": {
  "mp": 1.425,
  "goldRate": 0.361
  },
  "path": "asura"
  },
  {
  "id": "asura_t48",
  "name": "深奥的修罗之力",
  "grade": 6,
  "desc": "阿修罗道之力凝聚的玄级词条",
  "bonuses": {
  "critRate": 1.351,
  "mp": 0.284
  },
  "path": "asura"
  },
  {
  "id": "u_earth_1",
  "name": "地级天资",
  "grade": 7,
  "desc": "地级修仙天赋",
  "bonuses": {
  "expRate": 0.2,
  "mp": 0.12
  }
  },
  {
  "id": "u_earth_2",
  "name": "不灭金身",
  "grade": 7,
  "desc": "万法不侵",
  "bonuses": {
  "def": 0.2,
  "hp": 0.15
  }
  },
  {
  "id": "u_earth_3",
  "name": "剑道宗师",
  "grade": 7,
  "desc": "剑道天赋冠绝同辈",
  "bonuses": {
  "atk": 0.2,
  "critRate": 0.08
  }
  },
  {
  "id": "u_earth_4",
  "name": "天命之子",
  "grade": 7,
  "desc": "受天道眷顾",
  "bonuses": {
  "luck": 6,
  "goldRate": 0.1,
  "expRate": 0.05
  }
  },
  {
  "id": "u_earth_5",
  "name": "仙骨天成",
  "grade": 7,
  "desc": "天生仙骨",
  "bonuses": {
  "expRate": 0.22,
  "mp": 0.1
  }
  },
  {
  "id": "u_earth_6",
  "name": "五行均衡",
  "grade": 7,
  "desc": "五行完美均衡",
  "bonuses": {
  "atk": 0.08,
  "def": 0.08,
  "hp": 0.08,
  "mp": 0.08,
  "expRate": 0.08
  }
  },
  {
  "id": "u_earth_7",
  "name": "电光火石",
  "grade": 7,
  "desc": "速度无人能及",
  "bonuses": {
  "dodgeRate": 0.15,
  "atk": 0.08
  }
  },
  {
  "id": "u_earth_8",
  "name": "灵力无穷",
  "grade": 7,
  "desc": "灵力取之不尽",
  "bonuses": {
  "mp": 0.2,
  "expRate": 0.08
  }
  },
  {
  "id": "u_earth_9",
  "name": "预知未来",
  "grade": 7,
  "desc": "能预知片刻之后",
  "bonuses": {
  "dodgeRate": 0.12,
  "critRate": 0.08,
  "luck": 3
  }
  },
  {
  "id": "u_earth_10",
  "name": "聚宝盆",
  "grade": 7,
  "desc": "灵石如流水",
  "bonuses": {
  "goldRate": 0.2,
  "luck": 4
  }
  },
  {
  "id": "u_earth_11",
  "name": "神力盖世",
  "grade": 7,
  "desc": "力量超越极限",
  "bonuses": {
  "atk": 0.18,
  "hp": 0.12
  }
  },
  {
  "id": "u_earth_12",
  "name": "道心通明",
  "grade": 7,
  "desc": "道心澄澈无垢",
  "bonuses": {
  "expRate": 0.18,
  "mp": 0.1,
  "def": 0.05
  }
  },
  {
  "id": "asura_t49",
  "name": "大地的战意之力",
  "grade": 7,
  "desc": "阿修罗道之力凝聚的地级词条",
  "bonuses": {
  "def": 1.457,
  "hp": 0.345
  },
  "path": "asura"
  },
  {
  "id": "asura_t50",
  "name": "厚重的杀伐之力",
  "grade": 7,
  "desc": "阿修罗道之力凝聚的地级词条",
  "bonuses": {
  "expRate": 1.607,
  "atk": 0.35
  },
  "path": "asura"
  },
  {
  "id": "asura_t51",
  "name": "承载的血战之力",
  "grade": 7,
  "desc": "阿修罗道之力凝聚的地级词条",
  "bonuses": {
  "dodgeRate": 1.515
  },
  "path": "asura"
  },
  {
  "id": "asura_t52",
  "name": "深沉的狂暴之力",
  "grade": 7,
  "desc": "阿修罗道之力凝聚的地级词条",
  "bonuses": {
  "def": 1.949,
  "goldRate": 0.43
  },
  "path": "asura"
  },
  {
  "id": "asura_t53",
  "name": "沉稳的不屈之力",
  "grade": 7,
  "desc": "阿修罗道之力凝聚的地级词条",
  "bonuses": {
  "expRate": 1.518,
  "mp": 0.451
  },
  "path": "asura"
  },
  {
  "id": "asura_t54",
  "name": "大地的怒火之力",
  "grade": 7,
  "desc": "阿修罗道之力凝聚的地级词条",
  "bonuses": {
  "dodgeRate": 1.44,
  "def": 0.451
  },
  "path": "asura"
  },
  {
  "id": "u_heaven_1",
  "name": "天级天资",
  "grade": 8,
  "desc": "天级修仙天赋",
  "bonuses": {
  "expRate": 0.3,
  "mp": 0.15
  }
  },
  {
  "id": "u_heaven_2",
  "name": "不朽之躯",
  "grade": 8,
  "desc": "肉身近乎不朽",
  "bonuses": {
  "def": 0.25,
  "hp": 0.2
  }
  },
  {
  "id": "u_heaven_3",
  "name": "破灭之拳",
  "grade": 8,
  "desc": "一拳可破万物",
  "bonuses": {
  "atk": 0.25,
  "critRate": 0.1
  }
  },
  {
  "id": "u_heaven_4",
  "name": "天命所归",
  "grade": 8,
  "desc": "天命加身",
  "bonuses": {
  "luck": 8,
  "goldRate": 0.12,
  "expRate": 0.08
  }
  },
  {
  "id": "u_heaven_5",
  "name": "先天道体",
  "grade": 8,
  "desc": "先天大道之体",
  "bonuses": {
  "expRate": 0.3,
  "atk": 0.08,
  "def": 0.08,
  "hp": 0.08,
  "mp": 0.08
  }
  },
  {
  "id": "u_heaven_6",
  "name": "混沌亲和",
  "grade": 8,
  "desc": "对混沌之力有亲和",
  "bonuses": {
  "mp": 0.15,
  "expRate": 0.2,
  "atk": 0.05
  }
  },
  {
  "id": "u_heaven_7",
  "name": "时空感知",
  "grade": 8,
  "desc": "对时空有特殊感知",
  "bonuses": {
  "dodgeRate": 0.2,
  "critRate": 0.08,
  "luck": 4
  }
  },
  {
  "id": "u_heaven_8",
  "name": "造化之力",
  "grade": 8,
  "desc": "掌控造化之力",
  "bonuses": {
  "expRate": 0.25,
  "goldRate": 0.15,
  "mp": 0.1
  }
  },
  {
  "id": "u_heaven_9",
  "name": "因果之眼",
  "grade": 8,
  "desc": "能看透因果",
  "bonuses": {
  "luck": 6,
  "dodgeRate": 0.12,
  "expRate": 0.1
  }
  },
  {
  "id": "u_heaven_10",
  "name": "万法归一",
  "grade": 8,
  "desc": "所有功法融会贯通",
  "bonuses": {
  "expRate": 0.28,
  "atk": 0.1,
  "def": 0.1
  }
  },
  {
  "id": "asura_t55",
  "name": "天降的战意之力",
  "grade": 8,
  "desc": "阿修罗道之力凝聚的天级词条",
  "bonuses": {
  "hp": 2.425,
  "atk": 0.69
  },
  "path": "asura"
  },
  {
  "id": "asura_t56",
  "name": "苍穹的杀伐之力",
  "grade": 8,
  "desc": "阿修罗道之力凝聚的天级词条",
  "bonuses": {
  "goldRate": 2.458,
  "dodgeRate": 0.554
  },
  "path": "asura"
  },
  {
  "id": "asura_t57",
  "name": "穹顶的血战之力",
  "grade": 8,
  "desc": "阿修罗道之力凝聚的天级词条",
  "bonuses": {
  "luck": 2.974,
  "goldRate": 0.54
  },
  "path": "asura"
  },
  {
  "id": "asura_t58",
  "name": "高空的狂暴之力",
  "grade": 8,
  "desc": "阿修罗道之力凝聚的天级词条",
  "bonuses": {
  "hp": 2.605,
  "mp": 0.377
  },
  "path": "asura"
  },
  {
  "id": "asura_t59",
  "name": "凌空的不屈之力",
  "grade": 8,
  "desc": "阿修罗道之力凝聚的天级词条",
  "bonuses": {
  "goldRate": 2.662,
  "def": 0.379
  },
  "path": "asura"
  },
  {
  "id": "u_imm_1",
  "name": "仙级天资",
  "grade": 9,
  "desc": "仙级修仙天赋",
  "bonuses": {
  "expRate": 0.4,
  "mp": 0.2
  }
  },
  {
  "id": "u_imm_2",
  "name": "仙体初成",
  "grade": 9,
  "desc": "肉身初具仙体",
  "bonuses": {
  "def": 0.3,
  "hp": 0.25,
  "expRate": 0.1
  }
  },
  {
  "id": "u_imm_3",
  "name": "仙剑之魂",
  "grade": 9,
  "desc": "剑道已达仙人水准",
  "bonuses": {
  "atk": 0.3,
  "critRate": 0.12
  }
  },
  {
  "id": "u_imm_4",
  "name": "仙缘深厚",
  "grade": 9,
  "desc": "仙缘极深",
  "bonuses": {
  "luck": 10,
  "goldRate": 0.15,
  "expRate": 0.15
  }
  },
  {
  "id": "u_imm_5",
  "name": "太上忘情",
  "grade": 9,
  "desc": "心境已达太上之境",
  "bonuses": {
  "expRate": 0.45,
  "mp": 0.15,
  "def": 0.1
  }
  },
  {
  "id": "u_imm_6",
  "name": "天地为炉",
  "grade": 9,
  "desc": "以天地为炉鼎",
  "bonuses": {
  "atk": 0.15,
  "def": 0.15,
  "hp": 0.15,
  "mp": 0.15,
  "expRate": 0.15
  }
  },
  {
  "id": "u_imm_7",
  "name": "仙风道骨",
  "grade": 9,
  "desc": "仙风道骨，资质绝伦",
  "bonuses": {
  "expRate": 0.4,
  "atk": 0.12,
  "def": 0.12,
  "mp": 0.12
  }
  },
  {
  "id": "u_imm_8",
  "name": "命运编织者",
  "grade": 9,
  "desc": "能编织自身命运",
  "bonuses": {
  "luck": 8,
  "dodgeRate": 0.15,
  "goldRate": 0.12,
  "expRate": 0.1
  }
  },
  {
  "id": "asura_t60",
  "name": "仙灵的战意之力",
  "grade": 9,
  "desc": "阿修罗道之力凝聚的仙级词条",
  "bonuses": {
  "atk": 4.188
  },
  "path": "asura"
  },
  {
  "id": "asura_t61",
  "name": "仙韵的杀伐之力",
  "grade": 9,
  "desc": "阿修罗道之力凝聚的仙级词条",
  "bonuses": {
  "mp": 3.819,
  "dodgeRate": 0.677
  },
  "path": "asura"
  },
  {
  "id": "asura_t62",
  "name": "仙气的血战之力",
  "grade": 9,
  "desc": "阿修罗道之力凝聚的仙级词条",
  "bonuses": {
  "critRate": 3.721,
  "goldRate": 0.61
  },
  "path": "asura"
  },
  {
  "id": "asura_t63",
  "name": "仙华的狂暴之力",
  "grade": 9,
  "desc": "阿修罗道之力凝聚的仙级词条",
  "bonuses": {
  "atk": 3.282,
  "mp": 0.911
  },
  "path": "asura"
  },
  {
  "id": "u_div_1",
  "name": "神级天资",
  "grade": 10,
  "desc": "神级修仙天赋",
  "bonuses": {
  "expRate": 0.5,
  "mp": 0.25
  }
  },
  {
  "id": "u_div_2",
  "name": "神体初铸",
  "grade": 10,
  "desc": "肉身初铸神体",
  "bonuses": {
  "def": 0.35,
  "hp": 0.3,
  "expRate": 0.15
  }
  },
  {
  "id": "u_div_3",
  "name": "弑神之力",
  "grade": 10,
  "desc": "拥有弑神的力量",
  "bonuses": {
  "atk": 0.35,
  "critRate": 0.15
  }
  },
  {
  "id": "u_div_4",
  "name": "天命主宰",
  "grade": 10,
  "desc": "主宰自身天命",
  "bonuses": {
  "luck": 12,
  "goldRate": 0.2,
  "expRate": 0.2
  }
  },
  {
  "id": "u_div_5",
  "name": "大道亲和",
  "grade": 10,
  "desc": "对大道有极深亲和",
  "bonuses": {
  "expRate": 0.55,
  "mp": 0.2,
  "def": 0.12
  }
  },
  {
  "id": "u_div_6",
  "name": "万物归元",
  "grade": 10,
  "desc": "万物之力归于己身",
  "bonuses": {
  "atk": 0.2,
  "def": 0.2,
  "hp": 0.2,
  "mp": 0.2,
  "expRate": 0.2
  }
  },
  {
  "id": "u_div_7",
  "name": "时空主宰",
  "grade": 10,
  "desc": "对时空有掌控力",
  "bonuses": {
  "dodgeRate": 0.2,
  "critRate": 0.12,
  "luck": 8,
  "expRate": 0.15
  }
  },
  {
  "id": "asura_t64",
  "name": "神赐的战意之力",
  "grade": 10,
  "desc": "阿修罗道之力凝聚的神级词条",
  "bonuses": {
  "expRate": 5.75,
  "hp": 1.495
  },
  "path": "asura"
  },
  {
  "id": "asura_t65",
  "name": "神威的杀伐之力",
  "grade": 10,
  "desc": "阿修罗道之力凝聚的神级词条",
  "bonuses": {
  "dodgeRate": 4.415,
  "atk": 0.845
  },
  "path": "asura"
  },
  {
  "id": "asura_t66",
  "name": "神圣的血战之力",
  "grade": 10,
  "desc": "阿修罗道之力凝聚的神级词条",
  "bonuses": {
  "def": 4.184,
  "dodgeRate": 0.758
  },
  "path": "asura"
  },
  {
  "id": "u_saint_1",
  "name": "圣级天资",
  "grade": 11,
  "desc": "圣级修仙天赋",
  "bonuses": {
  "expRate": 0.65,
  "mp": 0.3
  }
  },
  {
  "id": "u_saint_2",
  "name": "圣体初现",
  "grade": 11,
  "desc": "肉身初具圣体",
  "bonuses": {
  "def": 0.4,
  "hp": 0.35,
  "expRate": 0.2
  }
  },
  {
  "id": "u_saint_3",
  "name": "斩圣之刃",
  "grade": 11,
  "desc": "攻击力可斩圣人",
  "bonuses": {
  "atk": 0.4,
  "critRate": 0.18
  }
  },
  {
  "id": "u_saint_4",
  "name": "圣人之姿",
  "grade": 11,
  "desc": "天生圣人之姿",
  "bonuses": {
  "expRate": 0.6,
  "atk": 0.15,
  "def": 0.15,
  "hp": 0.15,
  "mp": 0.15
  }
  },
  {
  "id": "u_saint_5",
  "name": "天道眷顾",
  "grade": 11,
  "desc": "天道亲自眷顾",
  "bonuses": {
  "luck": 15,
  "goldRate": 0.25,
  "expRate": 0.25
  }
  },
  {
  "id": "u_saint_6",
  "name": "轮回之主",
  "grade": 11,
  "desc": "对轮回有深刻理解",
  "bonuses": {
  "expRate": 0.6,
  "mp": 0.25,
  "dodgeRate": 0.15,
  "luck": 10
  }
  },
  {
  "id": "asura_t67",
  "name": "圣洁的战意之力",
  "grade": 11,
  "desc": "阿修罗道之力凝聚的圣级词条",
  "bonuses": {
  "goldRate": 8.396,
  "critRate": 1.656
  },
  "path": "asura"
  },
  {
  "id": "asura_t68",
  "name": "圣光的杀伐之力",
  "grade": 11,
  "desc": "阿修罗道之力凝聚的圣级词条",
  "bonuses": {
  "luck": 6.387,
  "expRate": 2.016
  },
  "path": "asura"
  },
  {
  "id": "u_chaos_1",
  "name": "混沌天资",
  "grade": 12,
  "desc": "混沌级修仙天赋",
  "bonuses": {
  "expRate": 0.8,
  "mp": 0.35,
  "atk": 0.15
  }
  },
  {
  "id": "u_chaos_2",
  "name": "混沌之体",
  "grade": 12,
  "desc": "混沌之力铸体",
  "bonuses": {
  "atk": 0.25,
  "def": 0.25,
  "hp": 0.25,
  "mp": 0.25,
  "expRate": 0.3
  }
  },
  {
  "id": "u_chaos_3",
  "name": "混沌之子",
  "grade": 12,
  "desc": "混沌之中的异数",
  "bonuses": {
  "luck": 20,
  "goldRate": 0.3,
  "expRate": 0.4,
  "atk": 0.15,
  "def": 0.15
  }
  },
  {
  "id": "u_chaos_4",
  "name": "万法归混沌",
  "grade": 12,
  "desc": "一切法归于混沌",
  "bonuses": {
  "expRate": 0.85,
  "atk": 0.2,
  "def": 0.2,
  "mp": 0.3
  }
  },
  {
  "id": "asura_t69",
  "name": "混沌的战意之力",
  "grade": 12,
  "desc": "阿修罗道之力凝聚的混沌级词条",
  "bonuses": {
  "mp": 9.452
  },
  "path": "asura"
  },
  {
  "id": "u_trans_1",
  "name": "超脱天资",
  "grade": 13,
  "desc": "超脱一切的天赋",
  "bonuses": {
  "expRate": 1,
  "mp": 0.4,
  "atk": 0.2
  }
  },
  {
  "id": "u_trans_2",
  "name": "超脱之体",
  "grade": 13,
  "desc": "超越一切的肉身",
  "bonuses": {
  "atk": 0.3,
  "def": 0.3,
  "hp": 0.3,
  "mp": 0.3,
  "expRate": 0.5
  }
  },
  {
  "id": "u_trans_3",
  "name": "天道化身",
  "grade": 13,
  "desc": "你就是天道的化身",
  "bonuses": {
  "luck": 25,
  "goldRate": 0.4,
  "expRate": 0.6,
  "atk": 0.2,
  "def": 0.2
  }
  },
  {
  "id": "u_trans_4",
  "name": "大道唯一",
  "grade": 13,
  "desc": "大道之中唯一的异数",
  "bonuses": {
  "expRate": 1.2,
  "atk": 0.25,
  "def": 0.25,
  "mp": 0.35,
  "luck": 15
  }
  },
  {
  "id": "asura_t70",
  "name": "超脱的战意之力",
  "grade": 13,
  "desc": "阿修罗道之力凝聚的超脱级词条",
  "bonuses": {
  "dodgeRate": 15.459,
  "hp": 2.523
  },
  "path": "asura"
  }

];

export const TRAITS_HELL: any = [
{
  "id": "u_bad_1",
  "name": "霉运缠身",
  "grade": 0,
  "desc": "天生命苦，事事不顺",
  "bonuses": {
  "expRate": -0.05,
  "luck": -2
  }
  },
  {
  "id": "u_bad_2",
  "name": "灵根堵塞",
  "grade": 0,
  "desc": "灵脉不通，修炼困难",
  "bonuses": {
  "expRate": -0.08
  }
  },
  {
  "id": "u_bad_3",
  "name": "体弱多病",
  "grade": 0,
  "desc": "身体羸弱，动辄生病",
  "bonuses": {
  "hp": -0.1,
  "def": -0.05
  }
  },
  {
  "id": "u_bad_4",
  "name": "心魔深种",
  "grade": 0,
  "desc": "心魔缠身，难以自拔",
  "bonuses": {
  "mp": -0.1,
  "expRate": -0.03
  }
  },
  {
  "id": "u_bad_5",
  "name": "天妒英才",
  "grade": 0,
  "desc": "天道不容，劫难不断",
  "bonuses": {
  "luck": -5,
  "expRate": -0.05
  }
  },
  {
  "id": "u_bad_6",
  "name": "五感迟钝",
  "grade": 0,
  "desc": "感知迟钝，修炼缓慢",
  "bonuses": {
  "expRate": -0.06,
  "dodgeRate": -0.03
  }
  },
  {
  "id": "u_bad_7",
  "name": "招灾体质",
  "grade": 0,
  "desc": "走到哪里灾祸跟到哪里",
  "bonuses": {
  "luck": -3,
  "hp": -0.05
  }
  },
  {
  "id": "u_bad_8",
  "name": "灵气排斥",
  "grade": 0,
  "desc": "天地灵气对你避而远之",
  "bonuses": {
  "expRate": -0.1,
  "mp": -0.05
  }
  },
  {
  "id": "u_bad_9",
  "name": "命犯孤星",
  "grade": 0,
  "desc": "天煞孤星，六亲无缘",
  "bonuses": {
  "luck": -4,
  "goldRate": -0.1
  }
  },
  {
  "id": "u_bad_10",
  "name": "根基虚浮",
  "grade": 0,
  "desc": "修炼根基不稳，上限极低",
  "bonuses": {
  "atk": -0.05,
  "def": -0.05,
  "expRate": -0.04
  }
  },
  {
  "id": "u_bad_11",
  "name": "经脉逆转",
  "grade": 0,
  "desc": "经脉逆行，修炼事倍功半",
  "bonuses": {
  "expRate": -0.12,
  "mp": -0.08
  }
  },
  {
  "id": "u_bad_12",
  "name": "业力缠身",
  "grade": 0,
  "desc": "前世业障深重，此生难修",
  "bonuses": {
  "expRate": -0.07,
  "luck": -3,
  "goldRate": -0.05
  }
  },
  {
  "id": "hell_t1",
  "name": "残破的魔气之力",
  "grade": 0,
  "desc": "地狱道之力凝聚的废弃级词条",
  "bonuses": {
  "mp": 0
  },
  "path": "hell"
  },
  {
  "id": "hell_t2",
  "name": "腐朽的魔焰之力",
  "grade": 0,
  "desc": "地狱道之力凝聚的废弃级词条",
  "bonuses": {
  "critRate": 0
  },
  "path": "hell"
  },
  {
  "id": "hell_t3",
  "name": "凋零的魔功之力",
  "grade": 0,
  "desc": "地狱道之力凝聚的废弃级词条",
  "bonuses": {
  "atk": 0
  },
  "path": "hell"
  },
  {
  "id": "hell_t4",
  "name": "衰败的魔体之力",
  "grade": 0,
  "desc": "地狱道之力凝聚的废弃级词条",
  "bonuses": {
  "mp": 0
  },
  "path": "hell"
  },
  {
  "id": "hell_t5",
  "name": "枯萎的魔魂之力",
  "grade": 0,
  "desc": "地狱道之力凝聚的废弃级词条",
  "bonuses": {
  "critRate": 0
  },
  "path": "hell"
  },
  {
  "id": "u_waste_1",
  "name": "资质愚钝",
  "grade": 1,
  "desc": "天资愚钝，领悟力差",
  "bonuses": {
  "expRate": -0.03
  }
  },
  {
  "id": "u_waste_2",
  "name": "胆小如鼠",
  "grade": 1,
  "desc": "性格懦弱，不敢争先",
  "bonuses": {
  "atk": -0.03,
  "critRate": -0.02
  }
  },
  {
  "id": "u_waste_3",
  "name": "好吃懒做",
  "grade": 1,
  "desc": "天性懒惰，不思进取",
  "bonuses": {
  "expRate": -0.04,
  "goldRate": -0.03
  }
  },
  {
  "id": "u_waste_4",
  "name": "目不识丁",
  "grade": 1,
  "desc": "大字不识，功法难悟",
  "bonuses": {
  "expRate": -0.05
  }
  },
  {
  "id": "u_waste_5",
  "name": "五行偏枯",
  "grade": 1,
  "desc": "五行不全，修炼受限",
  "bonuses": {
  "mp": -0.05,
  "expRate": -0.02
  }
  },
  {
  "id": "u_waste_6",
  "name": "心浮气躁",
  "grade": 1,
  "desc": "性情急躁，难以静修",
  "bonuses": {
  "expRate": -0.04,
  "critRate": -0.01
  }
  },
  {
  "id": "u_waste_7",
  "name": "筋骨不佳",
  "grade": 1,
  "desc": "筋骨平庸，肉体凡胎",
  "bonuses": {
  "hp": -0.05,
  "atk": -0.02
  }
  },
  {
  "id": "u_waste_8",
  "name": "气运低迷",
  "grade": 1,
  "desc": "运气不好，喝水都塞牙",
  "bonuses": {
  "luck": -2,
  "goldRate": -0.03
  }
  },
  {
  "id": "u_waste_9",
  "name": "反应迟缓",
  "grade": 1,
  "desc": "反应慢半拍，战斗吃亏",
  "bonuses": {
  "dodgeRate": -0.03,
  "atk": -0.02
  }
  },
  {
  "id": "u_waste_10",
  "name": "贪生怕死",
  "grade": 1,
  "desc": "过于谨慎，错失良机",
  "bonuses": {
  "atk": -0.04,
  "luck": -1
  }
  },
  {
  "id": "u_waste_11",
  "name": "不善言辞",
  "grade": 1,
  "desc": "嘴笨舌拙，难交道友",
  "bonuses": {
  "goldRate": -0.05,
  "luck": -1
  }
  },
  {
  "id": "u_waste_12",
  "name": "嗅觉不灵",
  "grade": 1,
  "desc": "闻不到灵草的气味",
  "bonuses": {
  "goldRate": -0.04
  }
  },
  {
  "id": "u_waste_13",
  "name": "方向感差",
  "grade": 1,
  "desc": "经常迷路，浪费时间",
  "bonuses": {
  "expRate": -0.02,
  "luck": -1
  }
  },
  {
  "id": "u_waste_14",
  "name": "恐高症",
  "grade": 1,
  "desc": "无法御剑飞行",
  "bonuses": {
  "dodgeRate": -0.02,
  "expRate": -0.01
  }
  },
  {
  "id": "u_waste_15",
  "name": "社恐体质",
  "grade": 1,
  "desc": "害怕与人交流",
  "bonuses": {
  "goldRate": -0.03,
  "def": -0.01
  }
  },
  {
  "id": "hell_t6",
  "name": "微弱的魔气之力",
  "grade": 1,
  "desc": "地狱道之力凝聚的垃圾级词条",
  "bonuses": {
  "def": 0.161
  },
  "path": "hell"
  },
  {
  "id": "hell_t7",
  "name": "黯淡的魔焰之力",
  "grade": 1,
  "desc": "地狱道之力凝聚的垃圾级词条",
  "bonuses": {
  "expRate": 0.162
  },
  "path": "hell"
  },
  {
  "id": "hell_t8",
  "name": "微光的魔功之力",
  "grade": 1,
  "desc": "地狱道之力凝聚的垃圾级词条",
  "bonuses": {
  "dodgeRate": 0.127
  },
  "path": "hell"
  },
  {
  "id": "hell_t9",
  "name": "淡薄的魔体之力",
  "grade": 1,
  "desc": "地狱道之力凝聚的垃圾级词条",
  "bonuses": {
  "def": 0.154
  },
  "path": "hell"
  },
  {
  "id": "hell_t10",
  "name": "稀薄的魔魂之力",
  "grade": 1,
  "desc": "地狱道之力凝聚的垃圾级词条",
  "bonuses": {
  "expRate": 0.137
  },
  "path": "hell"
  },
  {
  "id": "hell_t11",
  "name": "微弱的魔道之力",
  "grade": 1,
  "desc": "地狱道之力凝聚的垃圾级词条",
  "bonuses": {
  "dodgeRate": 0.149
  },
  "path": "hell"
  },
  {
  "id": "hell_t12",
  "name": "黯淡的魔祖之力",
  "grade": 1,
  "desc": "地狱道之力凝聚的垃圾级词条",
  "bonuses": {
  "def": 0.178
  },
  "path": "hell"
  },
  {
  "id": "u_fish_1",
  "name": "勉强及格",
  "grade": 2,
  "desc": "资质勉强够用，聊胜于无",
  "bonuses": {
  "expRate": 0.01
  }
  },
  {
  "id": "u_fish_2",
  "name": "小有慧根",
  "grade": 2,
  "desc": "有一丝修仙资质",
  "bonuses": {
  "expRate": 0.02,
  "mp": 0.02
  }
  },
  {
  "id": "u_fish_3",
  "name": "皮糙肉厚",
  "grade": 2,
  "desc": "比常人耐打一些",
  "bonuses": {
  "hp": 0.03,
  "def": 0.02
  }
  },
  {
  "id": "u_fish_4",
  "name": "手脚麻利",
  "grade": 2,
  "desc": "动作比常人快",
  "bonuses": {
  "atk": 0.02,
  "dodgeRate": 0.01
  }
  },
  {
  "id": "u_fish_5",
  "name": "嗅觉灵敏",
  "grade": 2,
  "desc": "能闻到灵草的气味",
  "bonuses": {
  "goldRate": 0.02,
  "luck": 1
  }
  },
  {
  "id": "u_fish_6",
  "name": "记性尚可",
  "grade": 2,
  "desc": "功法记得住",
  "bonuses": {
  "expRate": 0.015
  }
  },
  {
  "id": "u_fish_7",
  "name": "饭量惊人",
  "grade": 2,
  "desc": "吃得多力气大",
  "bonuses": {
  "hp": 0.02,
  "atk": 0.01
  }
  },
  {
  "id": "u_fish_8",
  "name": "睡眠充足",
  "grade": 2,
  "desc": "休息效率高",
  "bonuses": {
  "expRate": 0.02
  }
  },
  {
  "id": "u_fish_9",
  "name": "视力不错",
  "grade": 2,
  "desc": "看得远看得清",
  "bonuses": {
  "critRate": 0.01,
  "dodgeRate": 0.01
  }
  },
  {
  "id": "u_fish_10",
  "name": "运气普通",
  "grade": 2,
  "desc": "不好不坏的运气",
  "bonuses": {
  "luck": 0
  }
  },
  {
  "id": "u_fish_11",
  "name": "韧性十足",
  "grade": 2,
  "desc": "不容易放弃",
  "bonuses": {
  "hp": 0.02,
  "def": 0.01
  }
  },
  {
  "id": "u_fish_12",
  "name": "胆子够大",
  "grade": 2,
  "desc": "敢想敢做",
  "bonuses": {
  "atk": 0.02,
  "critRate": 0.01
  }
  },
  {
  "id": "u_fish_13",
  "name": "好奇心强",
  "grade": 2,
  "desc": "喜欢探索",
  "bonuses": {
  "luck": 1,
  "expRate": 0.01
  }
  },
  {
  "id": "u_fish_14",
  "name": "人缘不错",
  "grade": 2,
  "desc": "容易交到朋友",
  "bonuses": {
  "goldRate": 0.02,
  "luck": 1
  }
  },
  {
  "id": "u_fish_15",
  "name": "适应力强",
  "grade": 2,
  "desc": "到哪都能活",
  "bonuses": {
  "hp": 0.01,
  "def": 0.01,
  "expRate": 0.01
  }
  },
  {
  "id": "u_fish_16",
  "name": "直觉敏锐",
  "grade": 2,
  "desc": "偶尔能感觉到危险",
  "bonuses": {
  "dodgeRate": 0.02,
  "luck": 1
  }
  },
  {
  "id": "u_fish_17",
  "name": "手巧心灵",
  "grade": 2,
  "desc": "擅长手工",
  "bonuses": {
  "def": 0.02,
  "goldRate": 0.01
  }
  },
  {
  "id": "u_fish_18",
  "name": "耐力持久",
  "grade": 2,
  "desc": "能坚持更久",
  "bonuses": {
  "hp": 0.03,
  "expRate": 0.01
  }
  },
  {
  "id": "hell_t13",
  "name": "普通的魔气之力",
  "grade": 2,
  "desc": "地狱道之力凝聚的杂鱼级词条",
  "bonuses": {
  "goldRate": 0.248,
  "critRate": 0.085
  },
  "path": "hell"
  },
  {
  "id": "hell_t14",
  "name": "寻常的魔焰之力",
  "grade": 2,
  "desc": "地狱道之力凝聚的杂鱼级词条",
  "bonuses": {
  "luck": 0.333,
  "expRate": 0.067
  },
  "path": "hell"
  },
  {
  "id": "hell_t15",
  "name": "平凡的魔功之力",
  "grade": 2,
  "desc": "地狱道之力凝聚的杂鱼级词条",
  "bonuses": {
  "hp": 0.305
  },
  "path": "hell"
  },
  {
  "id": "hell_t16",
  "name": "一般的魔体之力",
  "grade": 2,
  "desc": "地狱道之力凝聚的杂鱼级词条",
  "bonuses": {
  "goldRate": 0.339,
  "atk": 0.084
  },
  "path": "hell"
  },
  {
  "id": "hell_t17",
  "name": "基本的魔魂之力",
  "grade": 2,
  "desc": "地狱道之力凝聚的杂鱼级词条",
  "bonuses": {
  "luck": 0.246,
  "dodgeRate": 0.089
  },
  "path": "hell"
  },
  {
  "id": "hell_t18",
  "name": "普通的魔道之力",
  "grade": 2,
  "desc": "地狱道之力凝聚的杂鱼级词条",
  "bonuses": {
  "hp": 0.344,
  "goldRate": 0.081
  },
  "path": "hell"
  },
  {
  "id": "hell_t19",
  "name": "寻常的魔祖之力",
  "grade": 2,
  "desc": "地狱道之力凝聚的杂鱼级词条",
  "bonuses": {
  "goldRate": 0.268,
  "mp": 0.072
  },
  "path": "hell"
  },
  {
  "id": "hell_t20",
  "name": "平凡的修罗之力",
  "grade": 2,
  "desc": "地狱道之力凝聚的杂鱼级词条",
  "bonuses": {
  "luck": 0.248,
  "def": 0.065
  },
  "path": "hell"
  },
  {
  "id": "hell_t21",
  "name": "一般的噬魂之力",
  "grade": 2,
  "desc": "地狱道之力凝聚的杂鱼级词条",
  "bonuses": {
  "hp": 0.253,
  "luck": 0.082
  },
  "path": "hell"
  },
  {
  "id": "u_unrank_1",
  "name": "小聪明",
  "grade": 3,
  "desc": "有点小聪明，但格局不大",
  "bonuses": {
  "expRate": 0.03,
  "luck": 1
  }
  },
  {
  "id": "u_unrank_2",
  "name": "铜皮铁骨",
  "grade": 3,
  "desc": "身体比常人结实",
  "bonuses": {
  "hp": 0.05,
  "def": 0.04
  }
  },
  {
  "id": "u_unrank_3",
  "name": "耳聪目明",
  "grade": 3,
  "desc": "五感灵敏",
  "bonuses": {
  "critRate": 0.02,
  "dodgeRate": 0.02
  }
  },
  {
  "id": "u_unrank_4",
  "name": "勤奋刻苦",
  "grade": 3,
  "desc": "比别人更努力",
  "bonuses": {
  "expRate": 0.04
  }
  },
  {
  "id": "u_unrank_5",
  "name": "福缘浅薄",
  "grade": 3,
  "desc": "有点小运气",
  "bonuses": {
  "luck": 2,
  "goldRate": 0.03
  }
  },
  {
  "id": "u_unrank_6",
  "name": "力气过人",
  "grade": 3,
  "desc": "比常人力气大",
  "bonuses": {
  "atk": 0.05
  }
  },
  {
  "id": "u_unrank_7",
  "name": "灵觉初醒",
  "grade": 3,
  "desc": "对灵气有微弱感应",
  "bonuses": {
  "mp": 0.04,
  "expRate": 0.02
  }
  },
  {
  "id": "u_unrank_8",
  "name": "战斗本能",
  "grade": 3,
  "desc": "天生的战斗直觉",
  "bonuses": {
  "atk": 0.03,
  "critRate": 0.02
  }
  },
  {
  "id": "u_unrank_9",
  "name": "心志坚定",
  "grade": 3,
  "desc": "不容易被迷惑",
  "bonuses": {
  "mp": 0.03,
  "def": 0.02
  }
  },
  {
  "id": "u_unrank_10",
  "name": "灵草亲和",
  "grade": 3,
  "desc": "种草有一手",
  "bonuses": {
  "goldRate": 0.04
  }
  },
  {
  "id": "u_unrank_11",
  "name": "速度见长",
  "grade": 3,
  "desc": "比常人快一些",
  "bonuses": {
  "dodgeRate": 0.03,
  "atk": 0.02
  }
  },
  {
  "id": "u_unrank_12",
  "name": "记忆力好",
  "grade": 3,
  "desc": "功法过目不忘",
  "bonuses": {
  "expRate": 0.03,
  "mp": 0.02
  }
  },
  {
  "id": "u_unrank_13",
  "name": "社交达人",
  "grade": 3,
  "desc": "人缘极好",
  "bonuses": {
  "goldRate": 0.03,
  "luck": 2
  }
  },
  {
  "id": "u_unrank_14",
  "name": "危机嗅觉",
  "grade": 3,
  "desc": "总能提前感知危险",
  "bonuses": {
  "dodgeRate": 0.03,
  "luck": 1
  }
  },
  {
  "id": "u_unrank_15",
  "name": "自学成才",
  "grade": 3,
  "desc": "自学能力强",
  "bonuses": {
  "expRate": 0.03
  }
  },
  {
  "id": "hell_t22",
  "name": "初生的魔气之力",
  "grade": 3,
  "desc": "地狱道之力凝聚的不入流级词条",
  "bonuses": {
  "critRate": 0.565,
  "dodgeRate": 0.08
  },
  "path": "hell"
  },
  {
  "id": "hell_t23",
  "name": "萌芽的魔焰之力",
  "grade": 3,
  "desc": "地狱道之力凝聚的不入流级词条",
  "bonuses": {
  "atk": 0.429,
  "goldRate": 0.124
  },
  "path": "hell"
  },
  {
  "id": "hell_t24",
  "name": "初成的魔功之力",
  "grade": 3,
  "desc": "地狱道之力凝聚的不入流级词条",
  "bonuses": {
  "mp": 0.584
  },
  "path": "hell"
  },
  {
  "id": "hell_t25",
  "name": "初现的魔体之力",
  "grade": 3,
  "desc": "地狱道之力凝聚的不入流级词条",
  "bonuses": {
  "critRate": 0.454,
  "def": 0.106
  },
  "path": "hell"
  },
  {
  "id": "hell_t26",
  "name": "雏形的魔魂之力",
  "grade": 3,
  "desc": "地狱道之力凝聚的不入流级词条",
  "bonuses": {
  "atk": 0.461,
  "luck": 0.148
  },
  "path": "hell"
  },
  {
  "id": "hell_t27",
  "name": "初生的魔道之力",
  "grade": 3,
  "desc": "地狱道之力凝聚的不入流级词条",
  "bonuses": {
  "mp": 0.486,
  "critRate": 0.099
  },
  "path": "hell"
  },
  {
  "id": "hell_t28",
  "name": "萌芽的魔祖之力",
  "grade": 3,
  "desc": "地狱道之力凝聚的不入流级词条",
  "bonuses": {
  "critRate": 0.547,
  "expRate": 0.108
  },
  "path": "hell"
  },
  {
  "id": "u_rank_1",
  "name": "资质入流",
  "grade": 4,
  "desc": "修仙资质勉强入流",
  "bonuses": {
  "expRate": 0.05,
  "mp": 0.03
  }
  },
  {
  "id": "u_rank_2",
  "name": "铜墙铁壁",
  "grade": 4,
  "desc": "防御力不俗",
  "bonuses": {
  "def": 0.08,
  "hp": 0.05
  }
  },
  {
  "id": "u_rank_3",
  "name": "利刃锋芒",
  "grade": 4,
  "desc": "攻击力出色",
  "bonuses": {
  "atk": 0.08,
  "critRate": 0.03
  }
  },
  {
  "id": "u_rank_4",
  "name": "气运加身",
  "grade": 4,
  "desc": "有几分气运",
  "bonuses": {
  "luck": 3,
  "goldRate": 0.05
  }
  },
  {
  "id": "u_rank_5",
  "name": "悟性尚佳",
  "grade": 4,
  "desc": "领悟力不错",
  "bonuses": {
  "expRate": 0.06,
  "mp": 0.02
  }
  },
  {
  "id": "u_rank_6",
  "name": "体魄强健",
  "grade": 4,
  "desc": "身体素质优秀",
  "bonuses": {
  "hp": 0.08,
  "atk": 0.03
  }
  },
  {
  "id": "u_rank_7",
  "name": "身法灵活",
  "grade": 4,
  "desc": "闪避能力出众",
  "bonuses": {
  "dodgeRate": 0.05,
  "atk": 0.02
  }
  },
  {
  "id": "u_rank_8",
  "name": "灵力充沛",
  "grade": 4,
  "desc": "灵力储备丰厚",
  "bonuses": {
  "mp": 0.08,
  "expRate": 0.03
  }
  },
  {
  "id": "u_rank_9",
  "name": "感知敏锐",
  "grade": 4,
  "desc": "对危险有敏锐感知",
  "bonuses": {
  "dodgeRate": 0.04,
  "luck": 2
  }
  },
  {
  "id": "u_rank_10",
  "name": "经商天赋",
  "grade": 4,
  "desc": "做生意有头脑",
  "bonuses": {
  "goldRate": 0.08
  }
  },
  {
  "id": "u_rank_11",
  "name": "坚韧不拔",
  "grade": 4,
  "desc": "意志力坚定",
  "bonuses": {
  "hp": 0.05,
  "def": 0.04,
  "expRate": 0.02
  }
  },
  {
  "id": "u_rank_12",
  "name": "战斗天赋",
  "grade": 4,
  "desc": "天生战士",
  "bonuses": {
  "atk": 0.06,
  "critRate": 0.03,
  "dodgeRate": 0.02
  }
  },
  {
  "id": "hell_t29",
  "name": "凝聚的魔气之力",
  "grade": 4,
  "desc": "地狱道之力凝聚的入流级词条",
  "bonuses": {
  "def": 0.685,
  "mp": 0.146
  },
  "path": "hell"
  },
  {
  "id": "hell_t30",
  "name": "成型的魔焰之力",
  "grade": 4,
  "desc": "地狱道之力凝聚的入流级词条",
  "bonuses": {
  "expRate": 0.699,
  "def": 0.159
  },
  "path": "hell"
  },
  {
  "id": "hell_t31",
  "name": "成熟的魔功之力",
  "grade": 4,
  "desc": "地狱道之力凝聚的入流级词条",
  "bonuses": {
  "dodgeRate": 0.795,
  "luck": 0.137
  },
  "path": "hell"
  },
  {
  "id": "hell_t32",
  "name": "稳固的魔体之力",
  "grade": 4,
  "desc": "地狱道之力凝聚的入流级词条",
  "bonuses": {
  "def": 0.773,
  "critRate": 0.168
  },
  "path": "hell"
  },
  {
  "id": "hell_t33",
  "name": "坚实的魔魂之力",
  "grade": 4,
  "desc": "地狱道之力凝聚的入流级词条",
  "bonuses": {
  "expRate": 0.567
  },
  "path": "hell"
  },
  {
  "id": "hell_t34",
  "name": "凝聚的魔道之力",
  "grade": 4,
  "desc": "地狱道之力凝聚的入流级词条",
  "bonuses": {
  "dodgeRate": 0.58,
  "hp": 0.19
  },
  "path": "hell"
  },
  {
  "id": "u_yel_1",
  "name": "黄级慧根",
  "grade": 5,
  "desc": "黄级修仙资质",
  "bonuses": {
  "expRate": 0.08,
  "mp": 0.05
  }
  },
  {
  "id": "u_yel_2",
  "name": "铁壁之躯",
  "grade": 5,
  "desc": "防御力出色",
  "bonuses": {
  "def": 0.12,
  "hp": 0.08
  }
  },
  {
  "id": "u_yel_3",
  "name": "锋锐之体",
  "grade": 5,
  "desc": "攻击力超群",
  "bonuses": {
  "atk": 0.1,
  "critRate": 0.04
  }
  },
  {
  "id": "u_yel_4",
  "name": "气运亨通",
  "grade": 5,
  "desc": "运气不错",
  "bonuses": {
  "luck": 4,
  "goldRate": 0.06
  }
  },
  {
  "id": "u_yel_5",
  "name": "过目不忘",
  "grade": 5,
  "desc": "功法一看就会",
  "bonuses": {
  "expRate": 0.1
  }
  },
  {
  "id": "u_yel_6",
  "name": "百毒不侵",
  "grade": 5,
  "desc": "毒素免疫",
  "bonuses": {
  "hp": 0.06,
  "def": 0.05
  }
  },
  {
  "id": "u_yel_7",
  "name": "御风而行",
  "grade": 5,
  "desc": "速度极快",
  "bonuses": {
  "dodgeRate": 0.06,
  "atk": 0.04
  }
  },
  {
  "id": "u_yel_8",
  "name": "灵力如海",
  "grade": 5,
  "desc": "灵力储备惊人",
  "bonuses": {
  "mp": 0.1,
  "expRate": 0.05
  }
  },
  {
  "id": "u_yel_9",
  "name": "预知危险",
  "grade": 5,
  "desc": "总能提前躲避",
  "bonuses": {
  "dodgeRate": 0.08,
  "luck": 2
  }
  },
  {
  "id": "u_yel_10",
  "name": "招财进宝",
  "grade": 5,
  "desc": "财运亨通",
  "bonuses": {
  "goldRate": 0.1,
  "luck": 2
  }
  },
  {
  "id": "u_yel_11",
  "name": "铜皮铁骨",
  "grade": 5,
  "desc": "肉体极其强韧",
  "bonuses": {
  "hp": 0.1,
  "def": 0.06
  }
  },
  {
  "id": "u_yel_12",
  "name": "战斗狂人",
  "grade": 5,
  "desc": "越战越勇",
  "bonuses": {
  "atk": 0.08,
  "critRate": 0.05
  }
  },
  {
  "id": "u_yel_13",
  "name": "修炼达人",
  "grade": 5,
  "desc": "修炼效率极高",
  "bonuses": {
  "expRate": 0.09,
  "mp": 0.04
  }
  },
  {
  "id": "u_yel_14",
  "name": "全能选手",
  "grade": 5,
  "desc": "各方面均衡发展",
  "bonuses": {
  "atk": 0.04,
  "def": 0.04,
  "hp": 0.04,
  "mp": 0.04,
  "expRate": 0.04
  }
  },
  {
  "id": "hell_t35",
  "name": "闪耀的魔气之力",
  "grade": 5,
  "desc": "地狱道之力凝聚的黄级词条",
  "bonuses": {
  "hp": 0.731,
  "def": 0.25
  },
  "path": "hell"
  },
  {
  "id": "hell_t36",
  "name": "明亮的魔焰之力",
  "grade": 5,
  "desc": "地狱道之力凝聚的黄级词条",
  "bonuses": {
  "goldRate": 0.925,
  "luck": 0.173
  },
  "path": "hell"
  },
  {
  "id": "hell_t37",
  "name": "光耀的魔功之力",
  "grade": 5,
  "desc": "地狱道之力凝聚的黄级词条",
  "bonuses": {
  "luck": 0.722,
  "critRate": 0.138
  },
  "path": "hell"
  },
  {
  "id": "hell_t38",
  "name": "璀璨的魔体之力",
  "grade": 5,
  "desc": "地狱道之力凝聚的黄级词条",
  "bonuses": {
  "hp": 0.738,
  "expRate": 0.25
  },
  "path": "hell"
  },
  {
  "id": "hell_t39",
  "name": "夺目的魔魂之力",
  "grade": 5,
  "desc": "地狱道之力凝聚的黄级词条",
  "bonuses": {
  "goldRate": 1.058,
  "hp": 0.142
  },
  "path": "hell"
  },
  {
  "id": "hell_t40",
  "name": "闪耀的魔道之力",
  "grade": 5,
  "desc": "地狱道之力凝聚的黄级词条",
  "bonuses": {
  "luck": 0.908,
  "atk": 0.136
  },
  "path": "hell"
  },
  {
  "id": "hell_t41",
  "name": "明亮的魔祖之力",
  "grade": 5,
  "desc": "地狱道之力凝聚的黄级词条",
  "bonuses": {
  "hp": 0.839,
  "dodgeRate": 0.254
  },
  "path": "hell"
  },
  {
  "id": "u_xuan_1",
  "name": "玄级天资",
  "grade": 6,
  "desc": "玄级修仙天赋",
  "bonuses": {
  "expRate": 0.12,
  "mp": 0.08
  }
  },
  {
  "id": "u_xuan_2",
  "name": "金刚不坏",
  "grade": 6,
  "desc": "防御力惊人",
  "bonuses": {
  "def": 0.15,
  "hp": 0.1
  }
  },
  {
  "id": "u_xuan_3",
  "name": "剑意凛然",
  "grade": 6,
  "desc": "攻击力极强",
  "bonuses": {
  "atk": 0.15,
  "critRate": 0.06
  }
  },
  {
  "id": "u_xuan_4",
  "name": "鸿运当头",
  "grade": 6,
  "desc": "好运连连",
  "bonuses": {
  "luck": 5,
  "goldRate": 0.08
  }
  },
  {
  "id": "u_xuan_5",
  "name": "天资聪颖",
  "grade": 6,
  "desc": "领悟力超群",
  "bonuses": {
  "expRate": 0.15
  }
  },
  {
  "id": "u_xuan_6",
  "name": "五行亲和",
  "grade": 6,
  "desc": "五行之力亲和",
  "bonuses": {
  "mp": 0.1,
  "expRate": 0.08,
  "atk": 0.03
  }
  },
  {
  "id": "u_xuan_7",
  "name": "雷霆之速",
  "grade": 6,
  "desc": "速度如闪电",
  "bonuses": {
  "dodgeRate": 0.1,
  "atk": 0.05
  }
  },
  {
  "id": "u_xuan_8",
  "name": "灵海深邃",
  "grade": 6,
  "desc": "灵力储备极深",
  "bonuses": {
  "mp": 0.15,
  "expRate": 0.06
  }
  },
  {
  "id": "u_xuan_9",
  "name": "天眼通",
  "grade": 6,
  "desc": "洞察万物",
  "bonuses": {
  "dodgeRate": 0.08,
  "critRate": 0.05,
  "luck": 2
  }
  },
  {
  "id": "u_xuan_10",
  "name": "富甲一方",
  "grade": 6,
  "desc": "灵石自动来",
  "bonuses": {
  "goldRate": 0.15,
  "luck": 3
  }
  },
  {
  "id": "u_xuan_11",
  "name": "龙象之力",
  "grade": 6,
  "desc": "力大无穷",
  "bonuses": {
  "atk": 0.12,
  "hp": 0.1,
  "def": 0.05
  }
  },
  {
  "id": "u_xuan_12",
  "name": "万法皆通",
  "grade": 6,
  "desc": "功法领悟极快",
  "bonuses": {
  "expRate": 0.12,
  "mp": 0.06,
  "atk": 0.04
  }
  },
  {
  "id": "u_xuan_13",
  "name": "九阳之体",
  "grade": 6,
  "desc": "阳气旺盛",
  "bonuses": {
  "atk": 0.1,
  "hp": 0.08,
  "expRate": 0.08
  }
  },
  {
  "id": "u_xuan_14",
  "name": "九阴之脉",
  "grade": 6,
  "desc": "阴气浓郁",
  "bonuses": {
  "mp": 0.12,
  "def": 0.06,
  "expRate": 0.08
  }
  },
  {
  "id": "hell_t42",
  "name": "玄妙的魔气之力",
  "grade": 6,
  "desc": "地狱道之力凝聚的玄级词条",
  "bonuses": {
  "critRate": 1.103
  },
  "path": "hell"
  },
  {
  "id": "hell_t43",
  "name": "深奥的魔焰之力",
  "grade": 6,
  "desc": "地狱道之力凝聚的玄级词条",
  "bonuses": {
  "atk": 1.193,
  "expRate": 0.375
  },
  "path": "hell"
  },
  {
  "id": "hell_t44",
  "name": "精妙的魔功之力",
  "grade": 6,
  "desc": "地狱道之力凝聚的玄级词条",
  "bonuses": {
  "mp": 1.075,
  "hp": 0.197
  },
  "path": "hell"
  },
  {
  "id": "hell_t45",
  "name": "通玄的魔体之力",
  "grade": 6,
  "desc": "地狱道之力凝聚的玄级词条",
  "bonuses": {
  "critRate": 1.506,
  "atk": 0.374
  },
  "path": "hell"
  },
  {
  "id": "hell_t46",
  "name": "入微的魔魂之力",
  "grade": 6,
  "desc": "地狱道之力凝聚的玄级词条",
  "bonuses": {
  "atk": 1.083,
  "dodgeRate": 0.357
  },
  "path": "hell"
  },
  {
  "id": "hell_t47",
  "name": "玄妙的魔道之力",
  "grade": 6,
  "desc": "地狱道之力凝聚的玄级词条",
  "bonuses": {
  "mp": 1.084,
  "goldRate": 0.357
  },
  "path": "hell"
  },
  {
  "id": "hell_t48",
  "name": "深奥的魔祖之力",
  "grade": 6,
  "desc": "地狱道之力凝聚的玄级词条",
  "bonuses": {
  "critRate": 1.342,
  "mp": 0.354
  },
  "path": "hell"
  },
  {
  "id": "u_earth_1",
  "name": "地级天资",
  "grade": 7,
  "desc": "地级修仙天赋",
  "bonuses": {
  "expRate": 0.2,
  "mp": 0.12
  }
  },
  {
  "id": "u_earth_2",
  "name": "不灭金身",
  "grade": 7,
  "desc": "万法不侵",
  "bonuses": {
  "def": 0.2,
  "hp": 0.15
  }
  },
  {
  "id": "u_earth_3",
  "name": "剑道宗师",
  "grade": 7,
  "desc": "剑道天赋冠绝同辈",
  "bonuses": {
  "atk": 0.2,
  "critRate": 0.08
  }
  },
  {
  "id": "u_earth_4",
  "name": "天命之子",
  "grade": 7,
  "desc": "受天道眷顾",
  "bonuses": {
  "luck": 6,
  "goldRate": 0.1,
  "expRate": 0.05
  }
  },
  {
  "id": "u_earth_5",
  "name": "仙骨天成",
  "grade": 7,
  "desc": "天生仙骨",
  "bonuses": {
  "expRate": 0.22,
  "mp": 0.1
  }
  },
  {
  "id": "u_earth_6",
  "name": "五行均衡",
  "grade": 7,
  "desc": "五行完美均衡",
  "bonuses": {
  "atk": 0.08,
  "def": 0.08,
  "hp": 0.08,
  "mp": 0.08,
  "expRate": 0.08
  }
  },
  {
  "id": "u_earth_7",
  "name": "电光火石",
  "grade": 7,
  "desc": "速度无人能及",
  "bonuses": {
  "dodgeRate": 0.15,
  "atk": 0.08
  }
  },
  {
  "id": "u_earth_8",
  "name": "灵力无穷",
  "grade": 7,
  "desc": "灵力取之不尽",
  "bonuses": {
  "mp": 0.2,
  "expRate": 0.08
  }
  },
  {
  "id": "u_earth_9",
  "name": "预知未来",
  "grade": 7,
  "desc": "能预知片刻之后",
  "bonuses": {
  "dodgeRate": 0.12,
  "critRate": 0.08,
  "luck": 3
  }
  },
  {
  "id": "u_earth_10",
  "name": "聚宝盆",
  "grade": 7,
  "desc": "灵石如流水",
  "bonuses": {
  "goldRate": 0.2,
  "luck": 4
  }
  },
  {
  "id": "u_earth_11",
  "name": "神力盖世",
  "grade": 7,
  "desc": "力量超越极限",
  "bonuses": {
  "atk": 0.18,
  "hp": 0.12
  }
  },
  {
  "id": "u_earth_12",
  "name": "道心通明",
  "grade": 7,
  "desc": "道心澄澈无垢",
  "bonuses": {
  "expRate": 0.18,
  "mp": 0.1,
  "def": 0.05
  }
  },
  {
  "id": "hell_t49",
  "name": "大地的魔气之力",
  "grade": 7,
  "desc": "地狱道之力凝聚的地级词条",
  "bonuses": {
  "def": 1.602,
  "hp": 0.366
  },
  "path": "hell"
  },
  {
  "id": "hell_t50",
  "name": "厚重的魔焰之力",
  "grade": 7,
  "desc": "地狱道之力凝聚的地级词条",
  "bonuses": {
  "expRate": 1.596,
  "atk": 0.538
  },
  "path": "hell"
  },
  {
  "id": "hell_t51",
  "name": "承载的魔功之力",
  "grade": 7,
  "desc": "地狱道之力凝聚的地级词条",
  "bonuses": {
  "dodgeRate": 1.54
  },
  "path": "hell"
  },
  {
  "id": "hell_t52",
  "name": "深沉的魔体之力",
  "grade": 7,
  "desc": "地狱道之力凝聚的地级词条",
  "bonuses": {
  "def": 1.54,
  "goldRate": 0.308
  },
  "path": "hell"
  },
  {
  "id": "hell_t53",
  "name": "沉稳的魔魂之力",
  "grade": 7,
  "desc": "地狱道之力凝聚的地级词条",
  "bonuses": {
  "expRate": 1.788,
  "mp": 0.379
  },
  "path": "hell"
  },
  {
  "id": "hell_t54",
  "name": "大地的魔道之力",
  "grade": 7,
  "desc": "地狱道之力凝聚的地级词条",
  "bonuses": {
  "dodgeRate": 1.592,
  "def": 0.34
  },
  "path": "hell"
  },
  {
  "id": "u_heaven_1",
  "name": "天级天资",
  "grade": 8,
  "desc": "天级修仙天赋",
  "bonuses": {
  "expRate": 0.3,
  "mp": 0.15
  }
  },
  {
  "id": "u_heaven_2",
  "name": "不朽之躯",
  "grade": 8,
  "desc": "肉身近乎不朽",
  "bonuses": {
  "def": 0.25,
  "hp": 0.2
  }
  },
  {
  "id": "u_heaven_3",
  "name": "破灭之拳",
  "grade": 8,
  "desc": "一拳可破万物",
  "bonuses": {
  "atk": 0.25,
  "critRate": 0.1
  }
  },
  {
  "id": "u_heaven_4",
  "name": "天命所归",
  "grade": 8,
  "desc": "天命加身",
  "bonuses": {
  "luck": 8,
  "goldRate": 0.12,
  "expRate": 0.08
  }
  },
  {
  "id": "u_heaven_5",
  "name": "先天道体",
  "grade": 8,
  "desc": "先天大道之体",
  "bonuses": {
  "expRate": 0.3,
  "atk": 0.08,
  "def": 0.08,
  "hp": 0.08,
  "mp": 0.08
  }
  },
  {
  "id": "u_heaven_6",
  "name": "混沌亲和",
  "grade": 8,
  "desc": "对混沌之力有亲和",
  "bonuses": {
  "mp": 0.15,
  "expRate": 0.2,
  "atk": 0.05
  }
  },
  {
  "id": "u_heaven_7",
  "name": "时空感知",
  "grade": 8,
  "desc": "对时空有特殊感知",
  "bonuses": {
  "dodgeRate": 0.2,
  "critRate": 0.08,
  "luck": 4
  }
  },
  {
  "id": "u_heaven_8",
  "name": "造化之力",
  "grade": 8,
  "desc": "掌控造化之力",
  "bonuses": {
  "expRate": 0.25,
  "goldRate": 0.15,
  "mp": 0.1
  }
  },
  {
  "id": "u_heaven_9",
  "name": "因果之眼",
  "grade": 8,
  "desc": "能看透因果",
  "bonuses": {
  "luck": 6,
  "dodgeRate": 0.12,
  "expRate": 0.1
  }
  },
  {
  "id": "u_heaven_10",
  "name": "万法归一",
  "grade": 8,
  "desc": "所有功法融会贯通",
  "bonuses": {
  "expRate": 0.28,
  "atk": 0.1,
  "def": 0.1
  }
  },
  {
  "id": "hell_t55",
  "name": "天降的魔气之力",
  "grade": 8,
  "desc": "地狱道之力凝聚的天级词条",
  "bonuses": {
  "hp": 2.75,
  "atk": 0.689
  },
  "path": "hell"
  },
  {
  "id": "hell_t56",
  "name": "苍穹的魔焰之力",
  "grade": 8,
  "desc": "地狱道之力凝聚的天级词条",
  "bonuses": {
  "goldRate": 2.56,
  "dodgeRate": 0.652
  },
  "path": "hell"
  },
  {
  "id": "hell_t57",
  "name": "穹顶的魔功之力",
  "grade": 8,
  "desc": "地狱道之力凝聚的天级词条",
  "bonuses": {
  "luck": 2.28,
  "goldRate": 0.493
  },
  "path": "hell"
  },
  {
  "id": "hell_t58",
  "name": "高空的魔体之力",
  "grade": 8,
  "desc": "地狱道之力凝聚的天级词条",
  "bonuses": {
  "hp": 2.696,
  "mp": 0.724
  },
  "path": "hell"
  },
  {
  "id": "hell_t59",
  "name": "凌空的魔魂之力",
  "grade": 8,
  "desc": "地狱道之力凝聚的天级词条",
  "bonuses": {
  "goldRate": 2.991,
  "def": 0.487
  },
  "path": "hell"
  },
  {
  "id": "u_imm_1",
  "name": "仙级天资",
  "grade": 9,
  "desc": "仙级修仙天赋",
  "bonuses": {
  "expRate": 0.4,
  "mp": 0.2
  }
  },
  {
  "id": "u_imm_2",
  "name": "仙体初成",
  "grade": 9,
  "desc": "肉身初具仙体",
  "bonuses": {
  "def": 0.3,
  "hp": 0.25,
  "expRate": 0.1
  }
  },
  {
  "id": "u_imm_3",
  "name": "仙剑之魂",
  "grade": 9,
  "desc": "剑道已达仙人水准",
  "bonuses": {
  "atk": 0.3,
  "critRate": 0.12
  }
  },
  {
  "id": "u_imm_4",
  "name": "仙缘深厚",
  "grade": 9,
  "desc": "仙缘极深",
  "bonuses": {
  "luck": 10,
  "goldRate": 0.15,
  "expRate": 0.15
  }
  },
  {
  "id": "u_imm_5",
  "name": "太上忘情",
  "grade": 9,
  "desc": "心境已达太上之境",
  "bonuses": {
  "expRate": 0.45,
  "mp": 0.15,
  "def": 0.1
  }
  },
  {
  "id": "u_imm_6",
  "name": "天地为炉",
  "grade": 9,
  "desc": "以天地为炉鼎",
  "bonuses": {
  "atk": 0.15,
  "def": 0.15,
  "hp": 0.15,
  "mp": 0.15,
  "expRate": 0.15
  }
  },
  {
  "id": "u_imm_7",
  "name": "仙风道骨",
  "grade": 9,
  "desc": "仙风道骨，资质绝伦",
  "bonuses": {
  "expRate": 0.4,
  "atk": 0.12,
  "def": 0.12,
  "mp": 0.12
  }
  },
  {
  "id": "u_imm_8",
  "name": "命运编织者",
  "grade": 9,
  "desc": "能编织自身命运",
  "bonuses": {
  "luck": 8,
  "dodgeRate": 0.15,
  "goldRate": 0.12,
  "expRate": 0.1
  }
  },
  {
  "id": "hell_t60",
  "name": "仙灵的魔气之力",
  "grade": 9,
  "desc": "地狱道之力凝聚的仙级词条",
  "bonuses": {
  "atk": 3.63
  },
  "path": "hell"
  },
  {
  "id": "hell_t61",
  "name": "仙韵的魔焰之力",
  "grade": 9,
  "desc": "地狱道之力凝聚的仙级词条",
  "bonuses": {
  "mp": 3.153,
  "dodgeRate": 0.865
  },
  "path": "hell"
  },
  {
  "id": "hell_t62",
  "name": "仙气的魔功之力",
  "grade": 9,
  "desc": "地狱道之力凝聚的仙级词条",
  "bonuses": {
  "critRate": 3.825,
  "goldRate": 0.778
  },
  "path": "hell"
  },
  {
  "id": "hell_t63",
  "name": "仙华的魔体之力",
  "grade": 9,
  "desc": "地狱道之力凝聚的仙级词条",
  "bonuses": {
  "atk": 3.306,
  "mp": 0.744
  },
  "path": "hell"
  },
  {
  "id": "u_div_1",
  "name": "神级天资",
  "grade": 10,
  "desc": "神级修仙天赋",
  "bonuses": {
  "expRate": 0.5,
  "mp": 0.25
  }
  },
  {
  "id": "u_div_2",
  "name": "神体初铸",
  "grade": 10,
  "desc": "肉身初铸神体",
  "bonuses": {
  "def": 0.35,
  "hp": 0.3,
  "expRate": 0.15
  }
  },
  {
  "id": "u_div_3",
  "name": "弑神之力",
  "grade": 10,
  "desc": "拥有弑神的力量",
  "bonuses": {
  "atk": 0.35,
  "critRate": 0.15
  }
  },
  {
  "id": "u_div_4",
  "name": "天命主宰",
  "grade": 10,
  "desc": "主宰自身天命",
  "bonuses": {
  "luck": 12,
  "goldRate": 0.2,
  "expRate": 0.2
  }
  },
  {
  "id": "u_div_5",
  "name": "大道亲和",
  "grade": 10,
  "desc": "对大道有极深亲和",
  "bonuses": {
  "expRate": 0.55,
  "mp": 0.2,
  "def": 0.12
  }
  },
  {
  "id": "u_div_6",
  "name": "万物归元",
  "grade": 10,
  "desc": "万物之力归于己身",
  "bonuses": {
  "atk": 0.2,
  "def": 0.2,
  "hp": 0.2,
  "mp": 0.2,
  "expRate": 0.2
  }
  },
  {
  "id": "u_div_7",
  "name": "时空主宰",
  "grade": 10,
  "desc": "对时空有掌控力",
  "bonuses": {
  "dodgeRate": 0.2,
  "critRate": 0.12,
  "luck": 8,
  "expRate": 0.15
  }
  },
  {
  "id": "hell_t64",
  "name": "神赐的魔气之力",
  "grade": 10,
  "desc": "地狱道之力凝聚的神级词条",
  "bonuses": {
  "expRate": 5.82,
  "hp": 1.464
  },
  "path": "hell"
  },
  {
  "id": "hell_t65",
  "name": "神威的魔焰之力",
  "grade": 10,
  "desc": "地狱道之力凝聚的神级词条",
  "bonuses": {
  "dodgeRate": 4.577,
  "atk": 1.095
  },
  "path": "hell"
  },
  {
  "id": "hell_t66",
  "name": "神圣的魔功之力",
  "grade": 10,
  "desc": "地狱道之力凝聚的神级词条",
  "bonuses": {
  "def": 4.143,
  "dodgeRate": 1.396
  },
  "path": "hell"
  },
  {
  "id": "u_saint_1",
  "name": "圣级天资",
  "grade": 11,
  "desc": "圣级修仙天赋",
  "bonuses": {
  "expRate": 0.65,
  "mp": 0.3
  }
  },
  {
  "id": "u_saint_2",
  "name": "圣体初现",
  "grade": 11,
  "desc": "肉身初具圣体",
  "bonuses": {
  "def": 0.4,
  "hp": 0.35,
  "expRate": 0.2
  }
  },
  {
  "id": "u_saint_3",
  "name": "斩圣之刃",
  "grade": 11,
  "desc": "攻击力可斩圣人",
  "bonuses": {
  "atk": 0.4,
  "critRate": 0.18
  }
  },
  {
  "id": "u_saint_4",
  "name": "圣人之姿",
  "grade": 11,
  "desc": "天生圣人之姿",
  "bonuses": {
  "expRate": 0.6,
  "atk": 0.15,
  "def": 0.15,
  "hp": 0.15,
  "mp": 0.15
  }
  },
  {
  "id": "u_saint_5",
  "name": "天道眷顾",
  "grade": 11,
  "desc": "天道亲自眷顾",
  "bonuses": {
  "luck": 15,
  "goldRate": 0.25,
  "expRate": 0.25
  }
  },
  {
  "id": "u_saint_6",
  "name": "轮回之主",
  "grade": 11,
  "desc": "对轮回有深刻理解",
  "bonuses": {
  "expRate": 0.6,
  "mp": 0.25,
  "dodgeRate": 0.15,
  "luck": 10
  }
  },
  {
  "id": "hell_t67",
  "name": "圣洁的魔气之力",
  "grade": 11,
  "desc": "地狱道之力凝聚的圣级词条",
  "bonuses": {
  "goldRate": 6.717,
  "critRate": 1.812
  },
  "path": "hell"
  },
  {
  "id": "hell_t68",
  "name": "圣光的魔焰之力",
  "grade": 11,
  "desc": "地狱道之力凝聚的圣级词条",
  "bonuses": {
  "luck": 6.259,
  "expRate": 1.892
  },
  "path": "hell"
  },
  {
  "id": "u_chaos_1",
  "name": "混沌天资",
  "grade": 12,
  "desc": "混沌级修仙天赋",
  "bonuses": {
  "expRate": 0.8,
  "mp": 0.35,
  "atk": 0.15
  }
  },
  {
  "id": "u_chaos_2",
  "name": "混沌之体",
  "grade": 12,
  "desc": "混沌之力铸体",
  "bonuses": {
  "atk": 0.25,
  "def": 0.25,
  "hp": 0.25,
  "mp": 0.25,
  "expRate": 0.3
  }
  },
  {
  "id": "u_chaos_3",
  "name": "混沌之子",
  "grade": 12,
  "desc": "混沌之中的异数",
  "bonuses": {
  "luck": 20,
  "goldRate": 0.3,
  "expRate": 0.4,
  "atk": 0.15,
  "def": 0.15
  }
  },
  {
  "id": "u_chaos_4",
  "name": "万法归混沌",
  "grade": 12,
  "desc": "一切法归于混沌",
  "bonuses": {
  "expRate": 0.85,
  "atk": 0.2,
  "def": 0.2,
  "mp": 0.3
  }
  },
  {
  "id": "hell_t69",
  "name": "混沌的魔气之力",
  "grade": 12,
  "desc": "地狱道之力凝聚的混沌级词条",
  "bonuses": {
  "mp": 8.663
  },
  "path": "hell"
  },
  {
  "id": "u_trans_1",
  "name": "超脱天资",
  "grade": 13,
  "desc": "超脱一切的天赋",
  "bonuses": {
  "expRate": 1,
  "mp": 0.4,
  "atk": 0.2
  }
  },
  {
  "id": "u_trans_2",
  "name": "超脱之体",
  "grade": 13,
  "desc": "超越一切的肉身",
  "bonuses": {
  "atk": 0.3,
  "def": 0.3,
  "hp": 0.3,
  "mp": 0.3,
  "expRate": 0.5
  }
  },
  {
  "id": "u_trans_3",
  "name": "天道化身",
  "grade": 13,
  "desc": "你就是天道的化身",
  "bonuses": {
  "luck": 25,
  "goldRate": 0.4,
  "expRate": 0.6,
  "atk": 0.2,
  "def": 0.2
  }
  },
  {
  "id": "u_trans_4",
  "name": "大道唯一",
  "grade": 13,
  "desc": "大道之中唯一的异数",
  "bonuses": {
  "expRate": 1.2,
  "atk": 0.25,
  "def": 0.25,
  "mp": 0.35,
  "luck": 15
  }
  },
  {
  "id": "hell_t70",
  "name": "超脱的魔气之力",
  "grade": 13,
  "desc": "地狱道之力凝聚的超脱级词条",
  "bonuses": {
  "dodgeRate": 13.78,
  "hp": 4.084
  },
  "path": "hell"
  }
];

export const TRAITS_HUNGRY_GHOST: any = [
{
  "id": "u_bad_1",
  "name": "霉运缠身",
  "grade": 0,
  "desc": "天生命苦，事事不顺",
  "bonuses": {
  "expRate": -0.05,
  "luck": -2
  }
  },
  {
  "id": "u_bad_2",
  "name": "灵根堵塞",
  "grade": 0,
  "desc": "灵脉不通，修炼困难",
  "bonuses": {
  "expRate": -0.08
  }
  },
  {
  "id": "u_bad_3",
  "name": "体弱多病",
  "grade": 0,
  "desc": "身体羸弱，动辄生病",
  "bonuses": {
  "hp": -0.1,
  "def": -0.05
  }
  },
  {
  "id": "u_bad_4",
  "name": "心魔深种",
  "grade": 0,
  "desc": "心魔缠身，难以自拔",
  "bonuses": {
  "mp": -0.1,
  "expRate": -0.03
  }
  },
  {
  "id": "u_bad_5",
  "name": "天妒英才",
  "grade": 0,
  "desc": "天道不容，劫难不断",
  "bonuses": {
  "luck": -5,
  "expRate": -0.05
  }
  },
  {
  "id": "u_bad_6",
  "name": "五感迟钝",
  "grade": 0,
  "desc": "感知迟钝，修炼缓慢",
  "bonuses": {
  "expRate": -0.06,
  "dodgeRate": -0.03
  }
  },
  {
  "id": "u_bad_7",
  "name": "招灾体质",
  "grade": 0,
  "desc": "走到哪里灾祸跟到哪里",
  "bonuses": {
  "luck": -3,
  "hp": -0.05
  }
  },
  {
  "id": "u_bad_8",
  "name": "灵气排斥",
  "grade": 0,
  "desc": "天地灵气对你避而远之",
  "bonuses": {
  "expRate": -0.1,
  "mp": -0.05
  }
  },
  {
  "id": "u_bad_9",
  "name": "命犯孤星",
  "grade": 0,
  "desc": "天煞孤星，六亲无缘",
  "bonuses": {
  "luck": -4,
  "goldRate": -0.1
  }
  },
  {
  "id": "u_bad_10",
  "name": "根基虚浮",
  "grade": 0,
  "desc": "修炼根基不稳，上限极低",
  "bonuses": {
  "atk": -0.05,
  "def": -0.05,
  "expRate": -0.04
  }
  },
  {
  "id": "u_bad_11",
  "name": "经脉逆转",
  "grade": 0,
  "desc": "经脉逆行，修炼事倍功半",
  "bonuses": {
  "expRate": -0.12,
  "mp": -0.08
  }
  },
  {
  "id": "u_bad_12",
  "name": "业力缠身",
  "grade": 0,
  "desc": "前世业障深重，此生难修",
  "bonuses": {
  "expRate": -0.07,
  "luck": -3,
  "goldRate": -0.05
  }
  },
  {
  "id": "hungry_ghost_t1",
  "name": "残破的幽冥之力",
  "grade": 0,
  "desc": "饿鬼道之力凝聚的废弃级词条",
  "bonuses": {
  "mp": 0
  },
  "path": "hungry_ghost"
  },
  {
  "id": "hungry_ghost_t2",
  "name": "腐朽的阴气之力",
  "grade": 0,
  "desc": "饿鬼道之力凝聚的废弃级词条",
  "bonuses": {
  "critRate": 0
  },
  "path": "hungry_ghost"
  },
  {
  "id": "hungry_ghost_t3",
  "name": "凋零的魂力之力",
  "grade": 0,
  "desc": "饿鬼道之力凝聚的废弃级词条",
  "bonuses": {
  "atk": 0
  },
  "path": "hungry_ghost"
  },
  {
  "id": "hungry_ghost_t4",
  "name": "衰败的鬼火之力",
  "grade": 0,
  "desc": "饿鬼道之力凝聚的废弃级词条",
  "bonuses": {
  "mp": 0
  },
  "path": "hungry_ghost"
  },
  {
  "id": "hungry_ghost_t5",
  "name": "枯萎的冥界之力",
  "grade": 0,
  "desc": "饿鬼道之力凝聚的废弃级词条",
  "bonuses": {
  "critRate": 0
  },
  "path": "hungry_ghost"
  },
  {
  "id": "u_waste_1",
  "name": "资质愚钝",
  "grade": 1,
  "desc": "天资愚钝，领悟力差",
  "bonuses": {
  "expRate": -0.03
  }
  },
  {
  "id": "u_waste_2",
  "name": "胆小如鼠",
  "grade": 1,
  "desc": "性格懦弱，不敢争先",
  "bonuses": {
  "atk": -0.03,
  "critRate": -0.02
  }
  },
  {
  "id": "u_waste_3",
  "name": "好吃懒做",
  "grade": 1,
  "desc": "天性懒惰，不思进取",
  "bonuses": {
  "expRate": -0.04,
  "goldRate": -0.03
  }
  },
  {
  "id": "u_waste_4",
  "name": "目不识丁",
  "grade": 1,
  "desc": "大字不识，功法难悟",
  "bonuses": {
  "expRate": -0.05
  }
  },
  {
  "id": "u_waste_5",
  "name": "五行偏枯",
  "grade": 1,
  "desc": "五行不全，修炼受限",
  "bonuses": {
  "mp": -0.05,
  "expRate": -0.02
  }
  },
  {
  "id": "u_waste_6",
  "name": "心浮气躁",
  "grade": 1,
  "desc": "性情急躁，难以静修",
  "bonuses": {
  "expRate": -0.04,
  "critRate": -0.01
  }
  },
  {
  "id": "u_waste_7",
  "name": "筋骨不佳",
  "grade": 1,
  "desc": "筋骨平庸，肉体凡胎",
  "bonuses": {
  "hp": -0.05,
  "atk": -0.02
  }
  },
  {
  "id": "u_waste_8",
  "name": "气运低迷",
  "grade": 1,
  "desc": "运气不好，喝水都塞牙",
  "bonuses": {
  "luck": -2,
  "goldRate": -0.03
  }
  },
  {
  "id": "u_waste_9",
  "name": "反应迟缓",
  "grade": 1,
  "desc": "反应慢半拍，战斗吃亏",
  "bonuses": {
  "dodgeRate": -0.03,
  "atk": -0.02
  }
  },
  {
  "id": "u_waste_10",
  "name": "贪生怕死",
  "grade": 1,
  "desc": "过于谨慎，错失良机",
  "bonuses": {
  "atk": -0.04,
  "luck": -1
  }
  },
  {
  "id": "u_waste_11",
  "name": "不善言辞",
  "grade": 1,
  "desc": "嘴笨舌拙，难交道友",
  "bonuses": {
  "goldRate": -0.05,
  "luck": -1
  }
  },
  {
  "id": "u_waste_12",
  "name": "嗅觉不灵",
  "grade": 1,
  "desc": "闻不到灵草的气味",
  "bonuses": {
  "goldRate": -0.04
  }
  },
  {
  "id": "u_waste_13",
  "name": "方向感差",
  "grade": 1,
  "desc": "经常迷路，浪费时间",
  "bonuses": {
  "expRate": -0.02,
  "luck": -1
  }
  },
  {
  "id": "u_waste_14",
  "name": "恐高症",
  "grade": 1,
  "desc": "无法御剑飞行",
  "bonuses": {
  "dodgeRate": -0.02,
  "expRate": -0.01
  }
  },
  {
  "id": "u_waste_15",
  "name": "社恐体质",
  "grade": 1,
  "desc": "害怕与人交流",
  "bonuses": {
  "goldRate": -0.03,
  "def": -0.01
  }
  },
  {
  "id": "hungry_ghost_t6",
  "name": "微弱的幽冥之力",
  "grade": 1,
  "desc": "饿鬼道之力凝聚的垃圾级词条",
  "bonuses": {
  "def": 0.151
  },
  "path": "hungry_ghost"
  },
  {
  "id": "hungry_ghost_t7",
  "name": "黯淡的阴气之力",
  "grade": 1,
  "desc": "饿鬼道之力凝聚的垃圾级词条",
  "bonuses": {
  "expRate": 0.152
  },
  "path": "hungry_ghost"
  },
  {
  "id": "hungry_ghost_t8",
  "name": "微光的魂力之力",
  "grade": 1,
  "desc": "饿鬼道之力凝聚的垃圾级词条",
  "bonuses": {
  "dodgeRate": 0.137
  },
  "path": "hungry_ghost"
  },
  {
  "id": "hungry_ghost_t9",
  "name": "淡薄的鬼火之力",
  "grade": 1,
  "desc": "饿鬼道之力凝聚的垃圾级词条",
  "bonuses": {
  "def": 0.156
  },
  "path": "hungry_ghost"
  },
  {
  "id": "hungry_ghost_t10",
  "name": "稀薄的冥界之力",
  "grade": 1,
  "desc": "饿鬼道之力凝聚的垃圾级词条",
  "bonuses": {
  "expRate": 0.156
  },
  "path": "hungry_ghost"
  },
  {
  "id": "hungry_ghost_t11",
  "name": "微弱的阴德之力",
  "grade": 1,
  "desc": "饿鬼道之力凝聚的垃圾级词条",
  "bonuses": {
  "dodgeRate": 0.13
  },
  "path": "hungry_ghost"
  },
  {
  "id": "hungry_ghost_t12",
  "name": "黯淡的鬼道之力",
  "grade": 1,
  "desc": "饿鬼道之力凝聚的垃圾级词条",
  "bonuses": {
  "def": 0.141
  },
  "path": "hungry_ghost"
  },
  {
  "id": "u_fish_1",
  "name": "勉强及格",
  "grade": 2,
  "desc": "资质勉强够用，聊胜于无",
  "bonuses": {
  "expRate": 0.01
  }
  },
  {
  "id": "u_fish_2",
  "name": "小有慧根",
  "grade": 2,
  "desc": "有一丝修仙资质",
  "bonuses": {
  "expRate": 0.02,
  "mp": 0.02
  }
  },
  {
  "id": "u_fish_3",
  "name": "皮糙肉厚",
  "grade": 2,
  "desc": "比常人耐打一些",
  "bonuses": {
  "hp": 0.03,
  "def": 0.02
  }
  },
  {
  "id": "u_fish_4",
  "name": "手脚麻利",
  "grade": 2,
  "desc": "动作比常人快",
  "bonuses": {
  "atk": 0.02,
  "dodgeRate": 0.01
  }
  },
  {
  "id": "u_fish_5",
  "name": "嗅觉灵敏",
  "grade": 2,
  "desc": "能闻到灵草的气味",
  "bonuses": {
  "goldRate": 0.02,
  "luck": 1
  }
  },
  {
  "id": "u_fish_6",
  "name": "记性尚可",
  "grade": 2,
  "desc": "功法记得住",
  "bonuses": {
  "expRate": 0.015
  }
  },
  {
  "id": "u_fish_7",
  "name": "饭量惊人",
  "grade": 2,
  "desc": "吃得多力气大",
  "bonuses": {
  "hp": 0.02,
  "atk": 0.01
  }
  },
  {
  "id": "u_fish_8",
  "name": "睡眠充足",
  "grade": 2,
  "desc": "休息效率高",
  "bonuses": {
  "expRate": 0.02
  }
  },
  {
  "id": "u_fish_9",
  "name": "视力不错",
  "grade": 2,
  "desc": "看得远看得清",
  "bonuses": {
  "critRate": 0.01,
  "dodgeRate": 0.01
  }
  },
  {
  "id": "u_fish_10",
  "name": "运气普通",
  "grade": 2,
  "desc": "不好不坏的运气",
  "bonuses": {
  "luck": 0
  }
  },
  {
  "id": "u_fish_11",
  "name": "韧性十足",
  "grade": 2,
  "desc": "不容易放弃",
  "bonuses": {
  "hp": 0.02,
  "def": 0.01
  }
  },
  {
  "id": "u_fish_12",
  "name": "胆子够大",
  "grade": 2,
  "desc": "敢想敢做",
  "bonuses": {
  "atk": 0.02,
  "critRate": 0.01
  }
  },
  {
  "id": "u_fish_13",
  "name": "好奇心强",
  "grade": 2,
  "desc": "喜欢探索",
  "bonuses": {
  "luck": 1,
  "expRate": 0.01
  }
  },
  {
  "id": "u_fish_14",
  "name": "人缘不错",
  "grade": 2,
  "desc": "容易交到朋友",
  "bonuses": {
  "goldRate": 0.02,
  "luck": 1
  }
  },
  {
  "id": "u_fish_15",
  "name": "适应力强",
  "grade": 2,
  "desc": "到哪都能活",
  "bonuses": {
  "hp": 0.01,
  "def": 0.01,
  "expRate": 0.01
  }
  },
  {
  "id": "u_fish_16",
  "name": "直觉敏锐",
  "grade": 2,
  "desc": "偶尔能感觉到危险",
  "bonuses": {
  "dodgeRate": 0.02,
  "luck": 1
  }
  },
  {
  "id": "u_fish_17",
  "name": "手巧心灵",
  "grade": 2,
  "desc": "擅长手工",
  "bonuses": {
  "def": 0.02,
  "goldRate": 0.01
  }
  },
  {
  "id": "u_fish_18",
  "name": "耐力持久",
  "grade": 2,
  "desc": "能坚持更久",
  "bonuses": {
  "hp": 0.03,
  "expRate": 0.01
  }
  },
  {
  "id": "hungry_ghost_t13",
  "name": "普通的幽冥之力",
  "grade": 2,
  "desc": "饿鬼道之力凝聚的杂鱼级词条",
  "bonuses": {
  "goldRate": 0.328,
  "critRate": 0.051
  },
  "path": "hungry_ghost"
  },
  {
  "id": "hungry_ghost_t14",
  "name": "寻常的阴气之力",
  "grade": 2,
  "desc": "饿鬼道之力凝聚的杂鱼级词条",
  "bonuses": {
  "luck": 0.345,
  "expRate": 0.055
  },
  "path": "hungry_ghost"
  },
  {
  "id": "hungry_ghost_t15",
  "name": "平凡的魂力之力",
  "grade": 2,
  "desc": "饿鬼道之力凝聚的杂鱼级词条",
  "bonuses": {
  "hp": 0.329
  },
  "path": "hungry_ghost"
  },
  {
  "id": "hungry_ghost_t16",
  "name": "一般的鬼火之力",
  "grade": 2,
  "desc": "饿鬼道之力凝聚的杂鱼级词条",
  "bonuses": {
  "goldRate": 0.338,
  "atk": 0.057
  },
  "path": "hungry_ghost"
  },
  {
  "id": "hungry_ghost_t17",
  "name": "基本的冥界之力",
  "grade": 2,
  "desc": "饿鬼道之力凝聚的杂鱼级词条",
  "bonuses": {
  "luck": 0.343,
  "dodgeRate": 0.061
  },
  "path": "hungry_ghost"
  },
  {
  "id": "hungry_ghost_t18",
  "name": "普通的阴德之力",
  "grade": 2,
  "desc": "饿鬼道之力凝聚的杂鱼级词条",
  "bonuses": {
  "hp": 0.278,
  "goldRate": 0.057
  },
  "path": "hungry_ghost"
  },
  {
  "id": "hungry_ghost_t19",
  "name": "寻常的鬼道之力",
  "grade": 2,
  "desc": "饿鬼道之力凝聚的杂鱼级词条",
  "bonuses": {
  "goldRate": 0.329,
  "mp": 0.087
  },
  "path": "hungry_ghost"
  },
  {
  "id": "hungry_ghost_t20",
  "name": "平凡的怨念之力",
  "grade": 2,
  "desc": "饿鬼道之力凝聚的杂鱼级词条",
  "bonuses": {
  "luck": 0.244,
  "def": 0.054
  },
  "path": "hungry_ghost"
  },
  {
  "id": "hungry_ghost_t21",
  "name": "一般的冥焰之力",
  "grade": 2,
  "desc": "饿鬼道之力凝聚的杂鱼级词条",
  "bonuses": {
  "hp": 0.325,
  "luck": 0.062
  },
  "path": "hungry_ghost"
  },
  {
  "id": "u_unrank_1",
  "name": "小聪明",
  "grade": 3,
  "desc": "有点小聪明，但格局不大",
  "bonuses": {
  "expRate": 0.03,
  "luck": 1
  }
  },
  {
  "id": "u_unrank_2",
  "name": "铜皮铁骨",
  "grade": 3,
  "desc": "身体比常人结实",
  "bonuses": {
  "hp": 0.05,
  "def": 0.04
  }
  },
  {
  "id": "u_unrank_3",
  "name": "耳聪目明",
  "grade": 3,
  "desc": "五感灵敏",
  "bonuses": {
  "critRate": 0.02,
  "dodgeRate": 0.02
  }
  },
  {
  "id": "u_unrank_4",
  "name": "勤奋刻苦",
  "grade": 3,
  "desc": "比别人更努力",
  "bonuses": {
  "expRate": 0.04
  }
  },
  {
  "id": "u_unrank_5",
  "name": "福缘浅薄",
  "grade": 3,
  "desc": "有点小运气",
  "bonuses": {
  "luck": 2,
  "goldRate": 0.03
  }
  },
  {
  "id": "u_unrank_6",
  "name": "力气过人",
  "grade": 3,
  "desc": "比常人力气大",
  "bonuses": {
  "atk": 0.05
  }
  },
  {
  "id": "u_unrank_7",
  "name": "灵觉初醒",
  "grade": 3,
  "desc": "对灵气有微弱感应",
  "bonuses": {
  "mp": 0.04,
  "expRate": 0.02
  }
  },
  {
  "id": "u_unrank_8",
  "name": "战斗本能",
  "grade": 3,
  "desc": "天生的战斗直觉",
  "bonuses": {
  "atk": 0.03,
  "critRate": 0.02
  }
  },
  {
  "id": "u_unrank_9",
  "name": "心志坚定",
  "grade": 3,
  "desc": "不容易被迷惑",
  "bonuses": {
  "mp": 0.03,
  "def": 0.02
  }
  },
  {
  "id": "u_unrank_10",
  "name": "灵草亲和",
  "grade": 3,
  "desc": "种草有一手",
  "bonuses": {
  "goldRate": 0.04
  }
  },
  {
  "id": "u_unrank_11",
  "name": "速度见长",
  "grade": 3,
  "desc": "比常人快一些",
  "bonuses": {
  "dodgeRate": 0.03,
  "atk": 0.02
  }
  },
  {
  "id": "u_unrank_12",
  "name": "记忆力好",
  "grade": 3,
  "desc": "功法过目不忘",
  "bonuses": {
  "expRate": 0.03,
  "mp": 0.02
  }
  },
  {
  "id": "u_unrank_13",
  "name": "社交达人",
  "grade": 3,
  "desc": "人缘极好",
  "bonuses": {
  "goldRate": 0.03,
  "luck": 2
  }
  },
  {
  "id": "u_unrank_14",
  "name": "危机嗅觉",
  "grade": 3,
  "desc": "总能提前感知危险",
  "bonuses": {
  "dodgeRate": 0.03,
  "luck": 1
  }
  },
  {
  "id": "u_unrank_15",
  "name": "自学成才",
  "grade": 3,
  "desc": "自学能力强",
  "bonuses": {
  "expRate": 0.03
  }
  },
  {
  "id": "hungry_ghost_t22",
  "name": "初生的幽冥之力",
  "grade": 3,
  "desc": "饿鬼道之力凝聚的不入流级词条",
  "bonuses": {
  "critRate": 0.598,
  "dodgeRate": 0.083
  },
  "path": "hungry_ghost"
  },
  {
  "id": "hungry_ghost_t23",
  "name": "萌芽的阴气之力",
  "grade": 3,
  "desc": "饿鬼道之力凝聚的不入流级词条",
  "bonuses": {
  "atk": 0.488,
  "goldRate": 0.112
  },
  "path": "hungry_ghost"
  },
  {
  "id": "hungry_ghost_t24",
  "name": "初成的魂力之力",
  "grade": 3,
  "desc": "饿鬼道之力凝聚的不入流级词条",
  "bonuses": {
  "mp": 0.58
  },
  "path": "hungry_ghost"
  },
  {
  "id": "hungry_ghost_t25",
  "name": "初现的鬼火之力",
  "grade": 3,
  "desc": "饿鬼道之力凝聚的不入流级词条",
  "bonuses": {
  "critRate": 0.525,
  "def": 0.131
  },
  "path": "hungry_ghost"
  },
  {
  "id": "hungry_ghost_t26",
  "name": "雏形的冥界之力",
  "grade": 3,
  "desc": "饿鬼道之力凝聚的不入流级词条",
  "bonuses": {
  "atk": 0.555,
  "luck": 0.132
  },
  "path": "hungry_ghost"
  },
  {
  "id": "hungry_ghost_t27",
  "name": "初生的阴德之力",
  "grade": 3,
  "desc": "饿鬼道之力凝聚的不入流级词条",
  "bonuses": {
  "mp": 0.5,
  "critRate": 0.114
  },
  "path": "hungry_ghost"
  },
  {
  "id": "hungry_ghost_t28",
  "name": "萌芽的鬼道之力",
  "grade": 3,
  "desc": "饿鬼道之力凝聚的不入流级词条",
  "bonuses": {
  "critRate": 0.539,
  "expRate": 0.144
  },
  "path": "hungry_ghost"
  },
  {
  "id": "u_rank_1",
  "name": "资质入流",
  "grade": 4,
  "desc": "修仙资质勉强入流",
  "bonuses": {
  "expRate": 0.05,
  "mp": 0.03
  }
  },
  {
  "id": "u_rank_2",
  "name": "铜墙铁壁",
  "grade": 4,
  "desc": "防御力不俗",
  "bonuses": {
  "def": 0.08,
  "hp": 0.05
  }
  },
  {
  "id": "u_rank_3",
  "name": "利刃锋芒",
  "grade": 4,
  "desc": "攻击力出色",
  "bonuses": {
  "atk": 0.08,
  "critRate": 0.03
  }
  },
  {
  "id": "u_rank_4",
  "name": "气运加身",
  "grade": 4,
  "desc": "有几分气运",
  "bonuses": {
  "luck": 3,
  "goldRate": 0.05
  }
  },
  {
  "id": "u_rank_5",
  "name": "悟性尚佳",
  "grade": 4,
  "desc": "领悟力不错",
  "bonuses": {
  "expRate": 0.06,
  "mp": 0.02
  }
  },
  {
  "id": "u_rank_6",
  "name": "体魄强健",
  "grade": 4,
  "desc": "身体素质优秀",
  "bonuses": {
  "hp": 0.08,
  "atk": 0.03
  }
  },
  {
  "id": "u_rank_7",
  "name": "身法灵活",
  "grade": 4,
  "desc": "闪避能力出众",
  "bonuses": {
  "dodgeRate": 0.05,
  "atk": 0.02
  }
  },
  {
  "id": "u_rank_8",
  "name": "灵力充沛",
  "grade": 4,
  "desc": "灵力储备丰厚",
  "bonuses": {
  "mp": 0.08,
  "expRate": 0.03
  }
  },
  {
  "id": "u_rank_9",
  "name": "感知敏锐",
  "grade": 4,
  "desc": "对危险有敏锐感知",
  "bonuses": {
  "dodgeRate": 0.04,
  "luck": 2
  }
  },
  {
  "id": "u_rank_10",
  "name": "经商天赋",
  "grade": 4,
  "desc": "做生意有头脑",
  "bonuses": {
  "goldRate": 0.08
  }
  },
  {
  "id": "u_rank_11",
  "name": "坚韧不拔",
  "grade": 4,
  "desc": "意志力坚定",
  "bonuses": {
  "hp": 0.05,
  "def": 0.04,
  "expRate": 0.02
  }
  },
  {
  "id": "u_rank_12",
  "name": "战斗天赋",
  "grade": 4,
  "desc": "天生战士",
  "bonuses": {
  "atk": 0.06,
  "critRate": 0.03,
  "dodgeRate": 0.02
  }
  },
  {
  "id": "hungry_ghost_t29",
  "name": "凝聚的幽冥之力",
  "grade": 4,
  "desc": "饿鬼道之力凝聚的入流级词条",
  "bonuses": {
  "def": 0.741,
  "mp": 0.108
  },
  "path": "hungry_ghost"
  },
  {
  "id": "hungry_ghost_t30",
  "name": "成型的阴气之力",
  "grade": 4,
  "desc": "饿鬼道之力凝聚的入流级词条",
  "bonuses": {
  "expRate": 0.641,
  "def": 0.187
  },
  "path": "hungry_ghost"
  },
  {
  "id": "hungry_ghost_t31",
  "name": "成熟的魂力之力",
  "grade": 4,
  "desc": "饿鬼道之力凝聚的入流级词条",
  "bonuses": {
  "dodgeRate": 0.656,
  "luck": 0.164
  },
  "path": "hungry_ghost"
  },
  {
  "id": "hungry_ghost_t32",
  "name": "稳固的鬼火之力",
  "grade": 4,
  "desc": "饿鬼道之力凝聚的入流级词条",
  "bonuses": {
  "def": 0.752,
  "critRate": 0.144
  },
  "path": "hungry_ghost"
  },
  {
  "id": "hungry_ghost_t33",
  "name": "坚实的冥界之力",
  "grade": 4,
  "desc": "饿鬼道之力凝聚的入流级词条",
  "bonuses": {
  "expRate": 0.62
  },
  "path": "hungry_ghost"
  },
  {
  "id": "hungry_ghost_t34",
  "name": "凝聚的阴德之力",
  "grade": 4,
  "desc": "饿鬼道之力凝聚的入流级词条",
  "bonuses": {
  "dodgeRate": 0.834,
  "hp": 0.188
  },
  "path": "hungry_ghost"
  },
  {
  "id": "u_yel_1",
  "name": "黄级慧根",
  "grade": 5,
  "desc": "黄级修仙资质",
  "bonuses": {
  "expRate": 0.08,
  "mp": 0.05
  }
  },
  {
  "id": "u_yel_2",
  "name": "铁壁之躯",
  "grade": 5,
  "desc": "防御力出色",
  "bonuses": {
  "def": 0.12,
  "hp": 0.08
  }
  },
  {
  "id": "u_yel_3",
  "name": "锋锐之体",
  "grade": 5,
  "desc": "攻击力超群",
  "bonuses": {
  "atk": 0.1,
  "critRate": 0.04
  }
  },
  {
  "id": "u_yel_4",
  "name": "气运亨通",
  "grade": 5,
  "desc": "运气不错",
  "bonuses": {
  "luck": 4,
  "goldRate": 0.06
  }
  },
  {
  "id": "u_yel_5",
  "name": "过目不忘",
  "grade": 5,
  "desc": "功法一看就会",
  "bonuses": {
  "expRate": 0.1
  }
  },
  {
  "id": "u_yel_6",
  "name": "百毒不侵",
  "grade": 5,
  "desc": "毒素免疫",
  "bonuses": {
  "hp": 0.06,
  "def": 0.05
  }
  },
  {
  "id": "u_yel_7",
  "name": "御风而行",
  "grade": 5,
  "desc": "速度极快",
  "bonuses": {
  "dodgeRate": 0.06,
  "atk": 0.04
  }
  },
  {
  "id": "u_yel_8",
  "name": "灵力如海",
  "grade": 5,
  "desc": "灵力储备惊人",
  "bonuses": {
  "mp": 0.1,
  "expRate": 0.05
  }
  },
  {
  "id": "u_yel_9",
  "name": "预知危险",
  "grade": 5,
  "desc": "总能提前躲避",
  "bonuses": {
  "dodgeRate": 0.08,
  "luck": 2
  }
  },
  {
  "id": "u_yel_10",
  "name": "招财进宝",
  "grade": 5,
  "desc": "财运亨通",
  "bonuses": {
  "goldRate": 0.1,
  "luck": 2
  }
  },
  {
  "id": "u_yel_11",
  "name": "铜皮铁骨",
  "grade": 5,
  "desc": "肉体极其强韧",
  "bonuses": {
  "hp": 0.1,
  "def": 0.06
  }
  },
  {
  "id": "u_yel_12",
  "name": "战斗狂人",
  "grade": 5,
  "desc": "越战越勇",
  "bonuses": {
  "atk": 0.08,
  "critRate": 0.05
  }
  },
  {
  "id": "u_yel_13",
  "name": "修炼达人",
  "grade": 5,
  "desc": "修炼效率极高",
  "bonuses": {
  "expRate": 0.09,
  "mp": 0.04
  }
  },
  {
  "id": "u_yel_14",
  "name": "全能选手",
  "grade": 5,
  "desc": "各方面均衡发展",
  "bonuses": {
  "atk": 0.04,
  "def": 0.04,
  "hp": 0.04,
  "mp": 0.04,
  "expRate": 0.04
  }
  },
  {
  "id": "hungry_ghost_t35",
  "name": "闪耀的幽冥之力",
  "grade": 5,
  "desc": "饿鬼道之力凝聚的黄级词条",
  "bonuses": {
  "hp": 0.736,
  "def": 0.157
  },
  "path": "hungry_ghost"
  },
  {
  "id": "hungry_ghost_t36",
  "name": "明亮的阴气之力",
  "grade": 5,
  "desc": "饿鬼道之力凝聚的黄级词条",
  "bonuses": {
  "goldRate": 0.829,
  "luck": 0.257
  },
  "path": "hungry_ghost"
  },
  {
  "id": "hungry_ghost_t37",
  "name": "光耀的魂力之力",
  "grade": 5,
  "desc": "饿鬼道之力凝聚的黄级词条",
  "bonuses": {
  "luck": 0.841,
  "critRate": 0.175
  },
  "path": "hungry_ghost"
  },
  {
  "id": "hungry_ghost_t38",
  "name": "璀璨的鬼火之力",
  "grade": 5,
  "desc": "饿鬼道之力凝聚的黄级词条",
  "bonuses": {
  "hp": 0.784,
  "expRate": 0.137
  },
  "path": "hungry_ghost"
  },
  {
  "id": "hungry_ghost_t39",
  "name": "夺目的冥界之力",
  "grade": 5,
  "desc": "饿鬼道之力凝聚的黄级词条",
  "bonuses": {
  "goldRate": 1.03,
  "hp": 0.212
  },
  "path": "hungry_ghost"
  },
  {
  "id": "hungry_ghost_t40",
  "name": "闪耀的阴德之力",
  "grade": 5,
  "desc": "饿鬼道之力凝聚的黄级词条",
  "bonuses": {
  "luck": 1.063,
  "atk": 0.257
  },
  "path": "hungry_ghost"
  },
  {
  "id": "hungry_ghost_t41",
  "name": "明亮的鬼道之力",
  "grade": 5,
  "desc": "饿鬼道之力凝聚的黄级词条",
  "bonuses": {
  "hp": 0.89,
  "dodgeRate": 0.211
  },
  "path": "hungry_ghost"
  },
  {
  "id": "u_xuan_1",
  "name": "玄级天资",
  "grade": 6,
  "desc": "玄级修仙天赋",
  "bonuses": {
  "expRate": 0.12,
  "mp": 0.08
  }
  },
  {
  "id": "u_xuan_2",
  "name": "金刚不坏",
  "grade": 6,
  "desc": "防御力惊人",
  "bonuses": {
  "def": 0.15,
  "hp": 0.1
  }
  },
  {
  "id": "u_xuan_3",
  "name": "剑意凛然",
  "grade": 6,
  "desc": "攻击力极强",
  "bonuses": {
  "atk": 0.15,
  "critRate": 0.06
  }
  },
  {
  "id": "u_xuan_4",
  "name": "鸿运当头",
  "grade": 6,
  "desc": "好运连连",
  "bonuses": {
  "luck": 5,
  "goldRate": 0.08
  }
  },
  {
  "id": "u_xuan_5",
  "name": "天资聪颖",
  "grade": 6,
  "desc": "领悟力超群",
  "bonuses": {
  "expRate": 0.15
  }
  },
  {
  "id": "u_xuan_6",
  "name": "五行亲和",
  "grade": 6,
  "desc": "五行之力亲和",
  "bonuses": {
  "mp": 0.1,
  "expRate": 0.08,
  "atk": 0.03
  }
  },
  {
  "id": "u_xuan_7",
  "name": "雷霆之速",
  "grade": 6,
  "desc": "速度如闪电",
  "bonuses": {
  "dodgeRate": 0.1,
  "atk": 0.05
  }
  },
  {
  "id": "u_xuan_8",
  "name": "灵海深邃",
  "grade": 6,
  "desc": "灵力储备极深",
  "bonuses": {
  "mp": 0.15,
  "expRate": 0.06
  }
  },
  {
  "id": "u_xuan_9",
  "name": "天眼通",
  "grade": 6,
  "desc": "洞察万物",
  "bonuses": {
  "dodgeRate": 0.08,
  "critRate": 0.05,
  "luck": 2
  }
  },
  {
  "id": "u_xuan_10",
  "name": "富甲一方",
  "grade": 6,
  "desc": "灵石自动来",
  "bonuses": {
  "goldRate": 0.15,
  "luck": 3
  }
  },
  {
  "id": "u_xuan_11",
  "name": "龙象之力",
  "grade": 6,
  "desc": "力大无穷",
  "bonuses": {
  "atk": 0.12,
  "hp": 0.1,
  "def": 0.05
  }
  },
  {
  "id": "u_xuan_12",
  "name": "万法皆通",
  "grade": 6,
  "desc": "功法领悟极快",
  "bonuses": {
  "expRate": 0.12,
  "mp": 0.06,
  "atk": 0.04
  }
  },
  {
  "id": "u_xuan_13",
  "name": "九阳之体",
  "grade": 6,
  "desc": "阳气旺盛",
  "bonuses": {
  "atk": 0.1,
  "hp": 0.08,
  "expRate": 0.08
  }
  },
  {
  "id": "u_xuan_14",
  "name": "九阴之脉",
  "grade": 6,
  "desc": "阴气浓郁",
  "bonuses": {
  "mp": 0.12,
  "def": 0.06,
  "expRate": 0.08
  }
  },
  {
  "id": "hungry_ghost_t42",
  "name": "玄妙的幽冥之力",
  "grade": 6,
  "desc": "饿鬼道之力凝聚的玄级词条",
  "bonuses": {
  "critRate": 1.292
  },
  "path": "hungry_ghost"
  },
  {
  "id": "hungry_ghost_t43",
  "name": "深奥的阴气之力",
  "grade": 6,
  "desc": "饿鬼道之力凝聚的玄级词条",
  "bonuses": {
  "atk": 1.283,
  "expRate": 0.389
  },
  "path": "hungry_ghost"
  },
  {
  "id": "hungry_ghost_t44",
  "name": "精妙的魂力之力",
  "grade": 6,
  "desc": "饿鬼道之力凝聚的玄级词条",
  "bonuses": {
  "mp": 1.205,
  "hp": 0.216
  },
  "path": "hungry_ghost"
  },
  {
  "id": "hungry_ghost_t45",
  "name": "通玄的鬼火之力",
  "grade": 6,
  "desc": "饿鬼道之力凝聚的玄级词条",
  "bonuses": {
  "critRate": 1.298,
  "atk": 0.216
  },
  "path": "hungry_ghost"
  },
  {
  "id": "hungry_ghost_t46",
  "name": "入微的冥界之力",
  "grade": 6,
  "desc": "饿鬼道之力凝聚的玄级词条",
  "bonuses": {
  "atk": 1.131,
  "dodgeRate": 0.219
  },
  "path": "hungry_ghost"
  },
  {
  "id": "hungry_ghost_t47",
  "name": "玄妙的阴德之力",
  "grade": 6,
  "desc": "饿鬼道之力凝聚的玄级词条",
  "bonuses": {
  "mp": 1.22,
  "goldRate": 0.292
  },
  "path": "hungry_ghost"
  },
  {
  "id": "hungry_ghost_t48",
  "name": "深奥的鬼道之力",
  "grade": 6,
  "desc": "饿鬼道之力凝聚的玄级词条",
  "bonuses": {
  "critRate": 1.142,
  "mp": 0.294
  },
  "path": "hungry_ghost"
  },
  {
  "id": "u_earth_1",
  "name": "地级天资",
  "grade": 7,
  "desc": "地级修仙天赋",
  "bonuses": {
  "expRate": 0.2,
  "mp": 0.12
  }
  },
  {
  "id": "u_earth_2",
  "name": "不灭金身",
  "grade": 7,
  "desc": "万法不侵",
  "bonuses": {
  "def": 0.2,
  "hp": 0.15
  }
  },
  {
  "id": "u_earth_3",
  "name": "剑道宗师",
  "grade": 7,
  "desc": "剑道天赋冠绝同辈",
  "bonuses": {
  "atk": 0.2,
  "critRate": 0.08
  }
  },
  {
  "id": "u_earth_4",
  "name": "天命之子",
  "grade": 7,
  "desc": "受天道眷顾",
  "bonuses": {
  "luck": 6,
  "goldRate": 0.1,
  "expRate": 0.05
  }
  },
  {
  "id": "u_earth_5",
  "name": "仙骨天成",
  "grade": 7,
  "desc": "天生仙骨",
  "bonuses": {
  "expRate": 0.22,
  "mp": 0.1
  }
  },
  {
  "id": "u_earth_6",
  "name": "五行均衡",
  "grade": 7,
  "desc": "五行完美均衡",
  "bonuses": {
  "atk": 0.08,
  "def": 0.08,
  "hp": 0.08,
  "mp": 0.08,
  "expRate": 0.08
  }
  },
  {
  "id": "u_earth_7",
  "name": "电光火石",
  "grade": 7,
  "desc": "速度无人能及",
  "bonuses": {
  "dodgeRate": 0.15,
  "atk": 0.08
  }
  },
  {
  "id": "u_earth_8",
  "name": "灵力无穷",
  "grade": 7,
  "desc": "灵力取之不尽",
  "bonuses": {
  "mp": 0.2,
  "expRate": 0.08
  }
  },
  {
  "id": "u_earth_9",
  "name": "预知未来",
  "grade": 7,
  "desc": "能预知片刻之后",
  "bonuses": {
  "dodgeRate": 0.12,
  "critRate": 0.08,
  "luck": 3
  }
  },
  {
  "id": "u_earth_10",
  "name": "聚宝盆",
  "grade": 7,
  "desc": "灵石如流水",
  "bonuses": {
  "goldRate": 0.2,
  "luck": 4
  }
  },
  {
  "id": "u_earth_11",
  "name": "神力盖世",
  "grade": 7,
  "desc": "力量超越极限",
  "bonuses": {
  "atk": 0.18,
  "hp": 0.12
  }
  },
  {
  "id": "u_earth_12",
  "name": "道心通明",
  "grade": 7,
  "desc": "道心澄澈无垢",
  "bonuses": {
  "expRate": 0.18,
  "mp": 0.1,
  "def": 0.05
  }
  },
  {
  "id": "hungry_ghost_t49",
  "name": "大地的幽冥之力",
  "grade": 7,
  "desc": "饿鬼道之力凝聚的地级词条",
  "bonuses": {
  "def": 1.723,
  "hp": 0.358
  },
  "path": "hungry_ghost"
  },
  {
  "id": "hungry_ghost_t50",
  "name": "厚重的阴气之力",
  "grade": 7,
  "desc": "饿鬼道之力凝聚的地级词条",
  "bonuses": {
  "expRate": 2.117,
  "atk": 0.431
  },
  "path": "hungry_ghost"
  },
  {
  "id": "hungry_ghost_t51",
  "name": "承载的魂力之力",
  "grade": 7,
  "desc": "饿鬼道之力凝聚的地级词条",
  "bonuses": {
  "dodgeRate": 2.076
  },
  "path": "hungry_ghost"
  },
  {
  "id": "hungry_ghost_t52",
  "name": "深沉的鬼火之力",
  "grade": 7,
  "desc": "饿鬼道之力凝聚的地级词条",
  "bonuses": {
  "def": 1.527,
  "goldRate": 0.496
  },
  "path": "hungry_ghost"
  },
  {
  "id": "hungry_ghost_t53",
  "name": "沉稳的冥界之力",
  "grade": 7,
  "desc": "饿鬼道之力凝聚的地级词条",
  "bonuses": {
  "expRate": 1.757,
  "mp": 0.326
  },
  "path": "hungry_ghost"
  },
  {
  "id": "hungry_ghost_t54",
  "name": "大地的阴德之力",
  "grade": 7,
  "desc": "饿鬼道之力凝聚的地级词条",
  "bonuses": {
  "dodgeRate": 1.548,
  "def": 0.459
  },
  "path": "hungry_ghost"
  },
  {
  "id": "u_heaven_1",
  "name": "天级天资",
  "grade": 8,
  "desc": "天级修仙天赋",
  "bonuses": {
  "expRate": 0.3,
  "mp": 0.15
  }
  },
  {
  "id": "u_heaven_2",
  "name": "不朽之躯",
  "grade": 8,
  "desc": "肉身近乎不朽",
  "bonuses": {
  "def": 0.25,
  "hp": 0.2
  }
  },
  {
  "id": "u_heaven_3",
  "name": "破灭之拳",
  "grade": 8,
  "desc": "一拳可破万物",
  "bonuses": {
  "atk": 0.25,
  "critRate": 0.1
  }
  },
  {
  "id": "u_heaven_4",
  "name": "天命所归",
  "grade": 8,
  "desc": "天命加身",
  "bonuses": {
  "luck": 8,
  "goldRate": 0.12,
  "expRate": 0.08
  }
  },
  {
  "id": "u_heaven_5",
  "name": "先天道体",
  "grade": 8,
  "desc": "先天大道之体",
  "bonuses": {
  "expRate": 0.3,
  "atk": 0.08,
  "def": 0.08,
  "hp": 0.08,
  "mp": 0.08
  }
  },
  {
  "id": "u_heaven_6",
  "name": "混沌亲和",
  "grade": 8,
  "desc": "对混沌之力有亲和",
  "bonuses": {
  "mp": 0.15,
  "expRate": 0.2,
  "atk": 0.05
  }
  },
  {
  "id": "u_heaven_7",
  "name": "时空感知",
  "grade": 8,
  "desc": "对时空有特殊感知",
  "bonuses": {
  "dodgeRate": 0.2,
  "critRate": 0.08,
  "luck": 4
  }
  },
  {
  "id": "u_heaven_8",
  "name": "造化之力",
  "grade": 8,
  "desc": "掌控造化之力",
  "bonuses": {
  "expRate": 0.25,
  "goldRate": 0.15,
  "mp": 0.1
  }
  },
  {
  "id": "u_heaven_9",
  "name": "因果之眼",
  "grade": 8,
  "desc": "能看透因果",
  "bonuses": {
  "luck": 6,
  "dodgeRate": 0.12,
  "expRate": 0.1
  }
  },
  {
  "id": "u_heaven_10",
  "name": "万法归一",
  "grade": 8,
  "desc": "所有功法融会贯通",
  "bonuses": {
  "expRate": 0.28,
  "atk": 0.1,
  "def": 0.1
  }
  },
  {
  "id": "hungry_ghost_t55",
  "name": "天降的幽冥之力",
  "grade": 8,
  "desc": "饿鬼道之力凝聚的天级词条",
  "bonuses": {
  "hp": 2.171,
  "atk": 0.478
  },
  "path": "hungry_ghost"
  },
  {
  "id": "hungry_ghost_t56",
  "name": "苍穹的阴气之力",
  "grade": 8,
  "desc": "饿鬼道之力凝聚的天级词条",
  "bonuses": {
  "goldRate": 2.613,
  "dodgeRate": 0.568
  },
  "path": "hungry_ghost"
  },
  {
  "id": "hungry_ghost_t57",
  "name": "穹顶的魂力之力",
  "grade": 8,
  "desc": "饿鬼道之力凝聚的天级词条",
  "bonuses": {
  "luck": 2.796,
  "goldRate": 0.709
  },
  "path": "hungry_ghost"
  },
  {
  "id": "hungry_ghost_t58",
  "name": "高空的鬼火之力",
  "grade": 8,
  "desc": "饿鬼道之力凝聚的天级词条",
  "bonuses": {
  "hp": 2.702,
  "mp": 0.653
  },
  "path": "hungry_ghost"
  },
  {
  "id": "hungry_ghost_t59",
  "name": "凌空的冥界之力",
  "grade": 8,
  "desc": "饿鬼道之力凝聚的天级词条",
  "bonuses": {
  "goldRate": 2.226,
  "def": 0.535
  },
  "path": "hungry_ghost"
  },
  {
  "id": "u_imm_1",
  "name": "仙级天资",
  "grade": 9,
  "desc": "仙级修仙天赋",
  "bonuses": {
  "expRate": 0.4,
  "mp": 0.2
  }
  },
  {
  "id": "u_imm_2",
  "name": "仙体初成",
  "grade": 9,
  "desc": "肉身初具仙体",
  "bonuses": {
  "def": 0.3,
  "hp": 0.25,
  "expRate": 0.1
  }
  },
  {
  "id": "u_imm_3",
  "name": "仙剑之魂",
  "grade": 9,
  "desc": "剑道已达仙人水准",
  "bonuses": {
  "atk": 0.3,
  "critRate": 0.12
  }
  },
  {
  "id": "u_imm_4",
  "name": "仙缘深厚",
  "grade": 9,
  "desc": "仙缘极深",
  "bonuses": {
  "luck": 10,
  "goldRate": 0.15,
  "expRate": 0.15
  }
  },
  {
  "id": "u_imm_5",
  "name": "太上忘情",
  "grade": 9,
  "desc": "心境已达太上之境",
  "bonuses": {
  "expRate": 0.45,
  "mp": 0.15,
  "def": 0.1
  }
  },
  {
  "id": "u_imm_6",
  "name": "天地为炉",
  "grade": 9,
  "desc": "以天地为炉鼎",
  "bonuses": {
  "atk": 0.15,
  "def": 0.15,
  "hp": 0.15,
  "mp": 0.15,
  "expRate": 0.15
  }
  },
  {
  "id": "u_imm_7",
  "name": "仙风道骨",
  "grade": 9,
  "desc": "仙风道骨，资质绝伦",
  "bonuses": {
  "expRate": 0.4,
  "atk": 0.12,
  "def": 0.12,
  "mp": 0.12
  }
  },
  {
  "id": "u_imm_8",
  "name": "命运编织者",
  "grade": 9,
  "desc": "能编织自身命运",
  "bonuses": {
  "luck": 8,
  "dodgeRate": 0.15,
  "goldRate": 0.12,
  "expRate": 0.1
  }
  },
  {
  "id": "hungry_ghost_t60",
  "name": "仙灵的幽冥之力",
  "grade": 9,
  "desc": "饿鬼道之力凝聚的仙级词条",
  "bonuses": {
  "atk": 4.185
  },
  "path": "hungry_ghost"
  },
  {
  "id": "hungry_ghost_t61",
  "name": "仙韵的阴气之力",
  "grade": 9,
  "desc": "饿鬼道之力凝聚的仙级词条",
  "bonuses": {
  "mp": 2.965,
  "dodgeRate": 0.713
  },
  "path": "hungry_ghost"
  },
  {
  "id": "hungry_ghost_t62",
  "name": "仙气的魂力之力",
  "grade": 9,
  "desc": "饿鬼道之力凝聚的仙级词条",
  "bonuses": {
  "critRate": 3.912,
  "goldRate": 0.682
  },
  "path": "hungry_ghost"
  },
  {
  "id": "hungry_ghost_t63",
  "name": "仙华的鬼火之力",
  "grade": 9,
  "desc": "饿鬼道之力凝聚的仙级词条",
  "bonuses": {
  "atk": 3.46,
  "mp": 0.828
  },
  "path": "hungry_ghost"
  },
  {
  "id": "u_div_1",
  "name": "神级天资",
  "grade": 10,
  "desc": "神级修仙天赋",
  "bonuses": {
  "expRate": 0.5,
  "mp": 0.25
  }
  },
  {
  "id": "u_div_2",
  "name": "神体初铸",
  "grade": 10,
  "desc": "肉身初铸神体",
  "bonuses": {
  "def": 0.35,
  "hp": 0.3,
  "expRate": 0.15
  }
  },
  {
  "id": "u_div_3",
  "name": "弑神之力",
  "grade": 10,
  "desc": "拥有弑神的力量",
  "bonuses": {
  "atk": 0.35,
  "critRate": 0.15
  }
  },
  {
  "id": "u_div_4",
  "name": "天命主宰",
  "grade": 10,
  "desc": "主宰自身天命",
  "bonuses": {
  "luck": 12,
  "goldRate": 0.2,
  "expRate": 0.2
  }
  },
  {
  "id": "u_div_5",
  "name": "大道亲和",
  "grade": 10,
  "desc": "对大道有极深亲和",
  "bonuses": {
  "expRate": 0.55,
  "mp": 0.2,
  "def": 0.12
  }
  },
  {
  "id": "u_div_6",
  "name": "万物归元",
  "grade": 10,
  "desc": "万物之力归于己身",
  "bonuses": {
  "atk": 0.2,
  "def": 0.2,
  "hp": 0.2,
  "mp": 0.2,
  "expRate": 0.2
  }
  },
  {
  "id": "u_div_7",
  "name": "时空主宰",
  "grade": 10,
  "desc": "对时空有掌控力",
  "bonuses": {
  "dodgeRate": 0.2,
  "critRate": 0.12,
  "luck": 8,
  "expRate": 0.15
  }
  },
  {
  "id": "hungry_ghost_t64",
  "name": "神赐的幽冥之力",
  "grade": 10,
  "desc": "饿鬼道之力凝聚的神级词条",
  "bonuses": {
  "expRate": 5.315,
  "hp": 1.383
  },
  "path": "hungry_ghost"
  },
  {
  "id": "hungry_ghost_t65",
  "name": "神威的阴气之力",
  "grade": 10,
  "desc": "饿鬼道之力凝聚的神级词条",
  "bonuses": {
  "dodgeRate": 4.948,
  "atk": 1.19
  },
  "path": "hungry_ghost"
  },
  {
  "id": "hungry_ghost_t66",
  "name": "神圣的魂力之力",
  "grade": 10,
  "desc": "饿鬼道之力凝聚的神级词条",
  "bonuses": {
  "def": 4.885,
  "dodgeRate": 1.175
  },
  "path": "hungry_ghost"
  },
  {
  "id": "u_saint_1",
  "name": "圣级天资",
  "grade": 11,
  "desc": "圣级修仙天赋",
  "bonuses": {
  "expRate": 0.65,
  "mp": 0.3
  }
  },
  {
  "id": "u_saint_2",
  "name": "圣体初现",
  "grade": 11,
  "desc": "肉身初具圣体",
  "bonuses": {
  "def": 0.4,
  "hp": 0.35,
  "expRate": 0.2
  }
  },
  {
  "id": "u_saint_3",
  "name": "斩圣之刃",
  "grade": 11,
  "desc": "攻击力可斩圣人",
  "bonuses": {
  "atk": 0.4,
  "critRate": 0.18
  }
  },
  {
  "id": "u_saint_4",
  "name": "圣人之姿",
  "grade": 11,
  "desc": "天生圣人之姿",
  "bonuses": {
  "expRate": 0.6,
  "atk": 0.15,
  "def": 0.15,
  "hp": 0.15,
  "mp": 0.15
  }
  },
  {
  "id": "u_saint_5",
  "name": "天道眷顾",
  "grade": 11,
  "desc": "天道亲自眷顾",
  "bonuses": {
  "luck": 15,
  "goldRate": 0.25,
  "expRate": 0.25
  }
  },
  {
  "id": "u_saint_6",
  "name": "轮回之主",
  "grade": 11,
  "desc": "对轮回有深刻理解",
  "bonuses": {
  "expRate": 0.6,
  "mp": 0.25,
  "dodgeRate": 0.15,
  "luck": 10
  }
  },
  {
  "id": "hungry_ghost_t67",
  "name": "圣洁的幽冥之力",
  "grade": 11,
  "desc": "饿鬼道之力凝聚的圣级词条",
  "bonuses": {
  "goldRate": 6.394,
  "critRate": 1.814
  },
  "path": "hungry_ghost"
  },
  {
  "id": "hungry_ghost_t68",
  "name": "圣光的阴气之力",
  "grade": 11,
  "desc": "饿鬼道之力凝聚的圣级词条",
  "bonuses": {
  "luck": 6.956,
  "expRate": 1.328
  },
  "path": "hungry_ghost"
  },
  {
  "id": "u_chaos_1",
  "name": "混沌天资",
  "grade": 12,
  "desc": "混沌级修仙天赋",
  "bonuses": {
  "expRate": 0.8,
  "mp": 0.35,
  "atk": 0.15
  }
  },
  {
  "id": "u_chaos_2",
  "name": "混沌之体",
  "grade": 12,
  "desc": "混沌之力铸体",
  "bonuses": {
  "atk": 0.25,
  "def": 0.25,
  "hp": 0.25,
  "mp": 0.25,
  "expRate": 0.3
  }
  },
  {
  "id": "u_chaos_3",
  "name": "混沌之子",
  "grade": 12,
  "desc": "混沌之中的异数",
  "bonuses": {
  "luck": 20,
  "goldRate": 0.3,
  "expRate": 0.4,
  "atk": 0.15,
  "def": 0.15
  }
  },
  {
  "id": "u_chaos_4",
  "name": "万法归混沌",
  "grade": 12,
  "desc": "一切法归于混沌",
  "bonuses": {
  "expRate": 0.85,
  "atk": 0.2,
  "def": 0.2,
  "mp": 0.3
  }
  },
  {
  "id": "hungry_ghost_t69",
  "name": "混沌的幽冥之力",
  "grade": 12,
  "desc": "饿鬼道之力凝聚的混沌级词条",
  "bonuses": {
  "mp": 11.298
  },
  "path": "hungry_ghost"
  },
  {
  "id": "u_trans_1",
  "name": "超脱天资",
  "grade": 13,
  "desc": "超脱一切的天赋",
  "bonuses": {
  "expRate": 1,
  "mp": 0.4,
  "atk": 0.2
  }
  },
  {
  "id": "u_trans_2",
  "name": "超脱之体",
  "grade": 13,
  "desc": "超越一切的肉身",
  "bonuses": {
  "atk": 0.3,
  "def": 0.3,
  "hp": 0.3,
  "mp": 0.3,
  "expRate": 0.5
  }
  },
  {
  "id": "u_trans_3",
  "name": "天道化身",
  "grade": 13,
  "desc": "你就是天道的化身",
  "bonuses": {
  "luck": 25,
  "goldRate": 0.4,
  "expRate": 0.6,
  "atk": 0.2,
  "def": 0.2
  }
  },
  {
  "id": "u_trans_4",
  "name": "大道唯一",
  "grade": 13,
  "desc": "大道之中唯一的异数",
  "bonuses": {
  "expRate": 1.2,
  "atk": 0.25,
  "def": 0.25,
  "mp": 0.35,
  "luck": 15
  }
  },
  {
  "id": "hungry_ghost_t70",
  "name": "超脱的幽冥之力",
  "grade": 13,
  "desc": "饿鬼道之力凝聚的超脱级词条",
  "bonuses": {
  "dodgeRate": 13.49,
  "hp": 3.454
  },
  "path": "hungry_ghost"
  }

];

export const TRAIT_LIBRARY: any = {};

export const TRAIT_GRADES: any = [
  {
  "id": "abandoned",
  "name": "废弃",
  "color": "#555",
  "icon": "⚫",
  "weight": 30,
  "meritCost": 0,
  "bonusMult": 0
  },
  {
  "id": "trash",
  "name": "垃圾",
  "color": "#777",
  "icon": "⚪",
  "weight": 25,
  "meritCost": 0,
  "bonusMult": 0.2
  },
  {
  "id": "fodder",
  "name": "杂鱼",
  "color": "#8a8a6a",
  "icon": "🟡",
  "weight": 20,
  "meritCost": 0,
  "bonusMult": 0.4
  },
  {
  "id": "unranked",
  "name": "不入流",
  "color": "#6a8a6a",
  "icon": "🟢",
  "weight": 15,
  "meritCost": 5,
  "bonusMult": 0.6
  },
  {
  "id": "ranked",
  "name": "入流",
  "color": "#5cb85c",
  "icon": "🟢",
  "weight": 12,
  "meritCost": 10,
  "bonusMult": 0.8
  },
  {
  "id": "yellow",
  "name": "黄",
  "color": "#c9a96e",
  "icon": "🟡",
  "weight": 8,
  "meritCost": 20,
  "bonusMult": 1
  },
  {
  "id": "xuan",
  "name": "玄",
  "color": "#5bc0de",
  "icon": "🔵",
  "weight": 5,
  "meritCost": 40,
  "bonusMult": 1.5
  },
  {
  "id": "earth",
  "name": "地",
  "color": "#9b59b6",
  "icon": "🟣",
  "weight": 3,
  "meritCost": 80,
  "bonusMult": 2
  },
  {
  "id": "heaven",
  "name": "天",
  "color": "#f0ad4e",
  "icon": "🟠",
  "weight": 1.5,
  "meritCost": 150,
  "bonusMult": 3
  },
  {
  "id": "immortal",
  "name": "仙",
  "color": "#f5dfa0",
  "icon": "✨",
  "weight": 0.8,
  "meritCost": 300,
  "bonusMult": 4.5
  },
  {
  "id": "divine",
  "name": "神",
  "color": "#ff6b6b",
  "icon": "💎",
  "weight": 0.4,
  "meritCost": 600,
  "bonusMult": 6.5
  },
  {
  "id": "saint",
  "name": "圣",
  "color": "#ffd700",
  "icon": "👑",
  "weight": 0.2,
  "meritCost": 1200,
  "bonusMult": 9
  },
  {
  "id": "chaos",
  "name": "混沌",
  "color": "#c061ff",
  "icon": "🌀",
  "weight": 0.1,
  "meritCost": 2500,
  "bonusMult": 13
  },
  {
  "id": "transcend",
  "name": "超脱",
  "color": "#fff",
  "icon": "💫",
  "weight": 0.05,
  "meritCost": 5000,
  "bonusMult": 20
  }
];

export const TRAIT_CHUNKS: any = {
  heaven: TRAITS_HEAVEN,
  human: TRAITS_HUMAN,
  asura: TRAITS_ASURA,
  beast: TRAITS_BEAST,
  hungry_ghost: TRAITS_HUNGRY_GHOST,
  hell: TRAITS_HELL,
};

export const GENE_TRAITS: any = {

  rootQuality:{name:'灵根品质',inheritance:'additive'},

  constitution:{name:'体质',inheritance:'codominant'},

  talent:{name:'修炼天赋',inheritance:'polygenic'},
};

export const CHARACTER_TEMPLATES: any = [
// === 无灵根（50%概率随机到） ===
{name:'凡人',icon:'🧑',desc:'没有灵根的普通人，无法引气入体修仙',rootIndex:0,constIndex:0,startGold:10,startHerbs:0,startHpBonus:0,startMpBonus:0,startAtkBonus:0,startDefBonus:0,startExpRate:0,technique:'basic',extraItems:[{name:'灵根丹',icon:'💊',count:1}],noRoot:true,flavor:'我只是个普通人，没有灵根，无法修仙。但我不信命，凡人亦可逆天！'},
// === 武道仙体（星空武道之路）===
{name:'武道仙体',icon:'⚔️',desc:'天生武道仙体，可走上星空武道修炼体系，不需灵根亦可证道',rootIndex:ROOT_TYPES.findIndex(r=>r.isNoRoot)||0,constIndex:CONSTITUTIONS.findIndex(c=>c.isMartialBody)||CONSTITUTIONS.length-1,startGold:50,startHerbs:5,startHpBonus:20,startMpBonus:0,startAtkBonus:10,startDefBonus:5,startExpRate:0.05,technique:'basic',extraItems:[{name:'淬体丹·蜕凡',icon:'💪',count:3}],noRoot:true,isMartialTemplate:true,flavor:'吾身具武道仙体，无需灵根亦可踏上星空武道！蜕凡之后，以武证道！'},
// === 门派弟子 ===
{name:'青云剑弟子',icon:'⚔️',desc:'青云门外门弟子，以剑入道，心性坚韧',rootIndex:8,constIndex:0,startGold:50,startHerbs:5,startHpBonus:0,startMpBonus:0,startAtkBonus:5,startDefBonus:0,startExpRate:0.02,technique:'basic',extraItems:[],flavor:'今日正式拜入青云门，虽为外门弟子，但吾必勤修苦练，以剑证道。'},
{name:'烈火峰法修',icon:'🔥',desc:'烈火峰内门弟子，火系功法出众',rootIndex:20,constIndex:8,startGold:80,startHerbs:8,startHpBonus:0,startMpBonus:10,startAtkBonus:8,startDefBonus:0,startExpRate:0.03,technique:'basic',extraItems:[{name:'火灵石',icon:'🔴',count:3}],flavor:'烈火峰上，火焰灵气浓郁。师尊说我有火灵根天资，当修火系功法。'},
{name:'丹鼎宗丹修',icon:'💊',desc:'丹鼎宗弟子，擅长炼丹，以丹入道',rootIndex:13,constIndex:5,startGold:100,startHerbs:20,startHpBonus:0,startMpBonus:5,startAtkBonus:0,startDefBonus:0,startExpRate:0.01,technique:'basic',extraItems:[{name:'回血丹',icon:'💊',count:5},{name:'炼丹炉',icon:'🔥',count:1}],flavor:'丹鼎宗以丹入道，吾虽资质平平，但炼丹天赋尚可。今日领了丹炉与灵草，开始修习丹道。'},
{name:'神兵阁器修',icon:'🔨',desc:'神兵阁弟子，善于锻造法器',rootIndex:9,constIndex:4,startGold:60,startHerbs:3,startHpBonus:0,startMpBonus:0,startAtkBonus:3,startDefBonus:5,startExpRate:0.01,technique:'basic',extraItems:[{name:'铁锤',icon:'🔨',count:1}],flavor:'入神兵阁学锻造，师尊说好器修先要学会打铁。千锤百炼，方成大器。'},
{name:'天符宗符修',icon:'📜',desc:'天符宗弟子，精于制符画箓',rootIndex:14,constIndex:6,startGold:70,startHerbs:5,startHpBonus:0,startMpBonus:8,startAtkBonus:2,startDefBonus:2,startExpRate:0.02,technique:'basic',extraItems:[{name:'符纸',icon:'📜',count:10}],flavor:'符箓之道，在于灵力灌注与笔法。吾日书百符，终有一日能画出天级符箓。'},
{name:'玄音阁琴修',icon:'🎵',desc:'玄音阁弟子，以音律入道',rootIndex:16,constIndex:10,startGold:90,startHerbs:5,startHpBonus:0,startMpBonus:12,startAtkBonus:0,startDefBonus:3,startExpRate:0.02,technique:'basic',extraItems:[{name:'古琴',icon:'🎵',count:1}],flavor:'琴声悠扬，灵力随音而动。玄音阁虽非大宗，但音修之道独辟蹊径。'},
{name:'兽王宗驯兽师',icon:'🐾',desc:'兽王宗弟子，擅长驯化妖兽',rootIndex:12,constIndex:15,startGold:55,startHerbs:5,startHpBonus:5,startMpBonus:0,startAtkBonus:3,startDefBonus:0,startExpRate:0.01,technique:'basic',extraItems:[{name:'兽粮',icon:'🍖',count:10}],flavor:'兽王宗弟子需与妖兽为伴，今日领了一袋兽粮，准备去山中寻一头灵兽。'},
{name:'御风谷风修',icon:'💨',desc:'御风谷弟子，风灵根资质，身法飘逸',rootIndex:24,constIndex:5,startGold:45,startHerbs:3,startHpBonus:0,startMpBonus:5,startAtkBonus:4,startDefBonus:0,startExpRate:0.03,technique:'basic',extraItems:[],flavor:'御风而行，来去自如。谷主说我有风灵根，当修风系功法，身法为先。'},
{name:'剑冢传人',icon:'🗡️',desc:'剑冢守护者后裔，天生剑心通明',rootIndex:17,constIndex:37,startGold:30,startHerbs:2,startHpBonus:0,startMpBonus:0,startAtkBonus:10,startDefBonus:0,startExpRate:0.02,technique:'basic',extraItems:[{name:'古剑残片',icon:'🗡️',count:1}],flavor:'剑冢之中万剑沉眠，吾为守护者后裔，当以剑道为毕生追求。'},
{name:'紫霄宫雷修',icon:'⚡',desc:'紫霄宫弟子，雷灵根天资',rootIndex:22,constIndex:16,startGold:60,startHerbs:3,startHpBonus:0,startMpBonus:5,startAtkBonus:8,startDefBonus:0,startExpRate:0.04,technique:'basic',extraItems:[{name:'雷击木',icon:'⚡',count:2}],flavor:'紫霄宫以雷法闻名，吾身具雷灵根，修行雷法事半功倍。'},
// === 散修 ===
{name:'农家少年',icon:'🌾',desc:'田间少年偶得仙缘，踏上修仙路',rootIndex:0,constIndex:2,startGold:10,startHerbs:2,startHpBonus:5,startMpBonus:0,startAtkBonus:0,startDefBonus:0,startExpRate:0,technique:'basic',extraItems:[],flavor:'在田间捡到一本破旧的修炼心得，试着按上面的法门吐纳，竟真能感应到灵气。'},
{name:'落魄书生',icon:'📚',desc:'屡试不中的书生转而修仙',rootIndex:1,constIndex:5,startGold:15,startHerbs:1,startHpBonus:0,startMpBonus:5,startAtkBonus:0,startDefBonus:0,startExpRate:0.01,technique:'basic',extraItems:[{name:'残破经书',icon:'📚',count:1}],flavor:'科举无望，偶然听闻修仙之道。书中自有颜如玉，书中自有长生法。'},
{name:'落魄商人',icon:'💰',desc:'破产商人携最后积蓄寻仙问道',rootIndex:0,constIndex:3,startGold:200,startHerbs:0,startHpBonus:0,startMpBonus:0,startAtkBonus:0,startDefBonus:0,startExpRate:0,technique:'basic',extraItems:[],flavor:'生意失败，散尽家财。听闻仙人可点石成金，携最后的灵石上路碰碰运气。'},
{name:'猎户之子',icon:'🏹',desc:'山中猎户之子，体魄强健',rootIndex:2,constIndex:3,startGold:20,startHerbs:3,startHpBonus:10,startMpBonus:0,startAtkBonus:3,startDefBonus:0,startExpRate:0,technique:'basic',extraItems:[{name:'猎弓',icon:'🏹',count:1}],flavor:'山中打猎时遇一老道，说吾有灵根，可入仙途。放下猎弓，踏上修行路。'},
{name:'铁匠之子',icon:'⚒️',desc:'铁匠铺学徒，力气过人',rootIndex:9,constIndex:3,startGold:25,startHerbs:1,startHpBonus:8,startMpBonus:0,startAtkBonus:5,startDefBonus:3,startExpRate:0,technique:'basic',extraItems:[],flavor:'打铁三年，练就一身蛮力。仙师说金灵根之人适合锻体，我便入了修仙之门。'},
{name:'渔家少年',icon:'🎣',desc:'江边渔家少年，水性极好',rootIndex:14,constIndex:9,startGold:10,startHerbs:2,startHpBonus:3,startMpBonus:5,startAtkBonus:0,startDefBonus:0,startExpRate:0.01,technique:'basic',extraItems:[],flavor:'在江中捕鱼时发现一枚灵珠，握在手中竟能感应水之灵气。莫非这就是仙缘？'},
{name:'乞丐奇遇',icon:'🏚️',desc:'乞丐偶得仙人遗物',rootIndex:0,constIndex:0,startGold:0,startHerbs:0,startHpBonus:0,startMpBonus:0,startAtkBonus:0,startDefBonus:0,startExpRate:0,technique:'basic',extraItems:[{name:'破碗',icon:'🥣',count:1}],flavor:'讨饭时在破庙中捡到一颗发光的珠子，吞下后腹中竟有暖流涌动。'},
{name:'盗墓贼',icon:'💀',desc:'古墓盗贼意外获得修仙功法',rootIndex:25,constIndex:3,startGold:50,startHerbs:2,startHpBonus:0,startMpBonus:3,startAtkBonus:2,startDefBonus:0,startExpRate:0.01,technique:'basic',extraItems:[{name:'摸金符',icon:'🔮',count:1}],flavor:'古墓中找到一卷修炼功法和一枚暗灵石。虽然阴森，但这功法似乎是真的。'},
{name:'退伍老兵',icon:'🛡️',desc:'沙场老兵，意志坚定',rootIndex:0,constIndex:3,startGold:30,startHerbs:1,startHpBonus:15,startMpBonus:0,startAtkBonus:3,startDefBonus:5,startExpRate:0,technique:'basic',extraItems:[],flavor:'征战半生，刀口舔血。退役后偶遇仙师，说我心志坚毅，适合修仙。'},
{name:'说书先生',icon:'📖',desc:'走南闯北的说书人，见多识广',rootIndex:1,constIndex:5,startGold:40,startHerbs:1,startHpBonus:0,startMpBonus:3,startAtkBonus:0,startDefBonus:0,startExpRate:0.01,technique:'basic',extraItems:[],flavor:'说了一辈子仙人的故事，如今真要踏上这条路了。但愿书中的奇遇也能降临我身。'},
{name:'采药人',icon:'🌿',desc:'深山采药人，与灵草为伴',rootIndex:12,constIndex:4,startGold:15,startHerbs:15,startHpBonus:3,startMpBonus:0,startAtkBonus:0,startDefBonus:0,startExpRate:0.01,technique:'basic',extraItems:[{name:'药篓',icon:'🧺',count:1}],flavor:'常年在深山采药，发现某些灵草附近灵气浓郁。试着按老药农说的方法吐纳，竟有效果。'},
{name:'和尚还俗',icon:'🙏',desc:'还俗僧人转修仙道',rootIndex:28,constIndex:17,startGold:20,startHerbs:3,startHpBonus:5,startMpBonus:8,startAtkBonus:0,startDefBonus:3,startExpRate:0.02,technique:'basic',extraItems:[{name:'佛珠',icon:'📿',count:1}],flavor:'寺中修行十年，终觉佛法非我所求。听闻修仙可长生，遂还俗寻道。'},
{name:'戏子登仙',icon:'🎭',desc:'名伶戏子机缘踏入仙途',rootIndex:16,constIndex:5,startGold:60,startHerbs:2,startHpBonus:0,startMpBonus:5,startAtkBonus:0,startDefBonus:0,startExpRate:0.01,technique:'basic',extraItems:[],flavor:'唱了一辈子别人的故事，如今要演一出属于自己的修仙大戏。'},
{name:'镖师之路',icon:'🚩',desc:'走镖武师，拳脚功夫了得',rootIndex:9,constIndex:3,startGold:45,startHerbs:1,startHpBonus:10,startMpBonus:0,startAtkBonus:5,startDefBonus:3,startExpRate:0,technique:'basic',extraItems:[],flavor:'走镖二十年，从未失手。偶遇仙人说我是金灵根，可修行仙道。'},
{name:'赌徒悟道',icon:'🎲',desc:'赌场常客，赌命修仙',rootIndex:0,constIndex:0,startGold:100,startHerbs:0,startHpBonus:0,startMpBonus:0,startAtkBonus:0,startDefBonus:0,startExpRate:0,technique:'basic',extraItems:[],flavor:'赌了半辈子，这次赌把大的——修仙！赢了长生，输了也不过一条烂命。'},
// === 妖修 ===
{name:'白狐妖修',icon:'🦊',desc:'修炼百年的白狐，化为人形',rootIndex:16,constIndex:9,startGold:20,startHerbs:5,startHpBonus:0,startMpBonus:8,startAtkBonus:0,startDefBonus:0,startExpRate:0.03,technique:'basic',extraItems:[{name:'狐尾草',icon:'🌿',count:3}],flavor:'百年修行终化人形，然妖修之路坎坷，人类修士见之必杀。吾当谨慎行事。'},
{name:'青蛇妖修',icon:'🐍',desc:'修炼五百年的青蛇精',rootIndex:14,constIndex:9,startGold:15,startHerbs:8,startHpBonus:5,startMpBonus:5,startAtkBonus:3,startDefBonus:0,startExpRate:0.02,technique:'basic',extraItems:[{name:'蛇蜕',icon:'🐍',count:3}],flavor:'五百年修行，历经三次蜕皮。如今化为人形，入世修行，寻那成仙之机。'},
{name:'千年树妖',icon:'🌳',desc:'千年古树通灵化妖',rootIndex:12,constIndex:11,startGold:5,startHerbs:20,startHpBonus:20,startMpBonus:10,startAtkBonus:0,startDefBonus:5,startExpRate:0.01,technique:'basic',extraItems:[{name:'树心精华',icon:'💚',count:1}],flavor:'扎根千年，一朝通灵。树不可移，但心可游天下。化形而出，踏入修仙路。'},
{name:'狼妖少年',icon:'🐺',desc:'化形不久的狼妖，野性未脱',rootIndex:22,constIndex:15,startGold:10,startHerbs:3,startHpBonus:8,startMpBonus:0,startAtkBonus:8,startDefBonus:0,startExpRate:0.02,technique:'basic',extraItems:[],flavor:'刚化形便被人类修士追杀，侥幸逃脱。这世道对妖修太不公，吾要变强！'},
{name:'鲤鱼精',icon:'🐟',desc:'跃龙门失败的锦鲤精',rootIndex:14,constIndex:9,startGold:10,startHerbs:5,startHpBonus:0,startMpBonus:10,startAtkBonus:0,startDefBonus:0,startExpRate:0.02,technique:'basic',extraItems:[{name:'龙鳞碎片',icon:'🐉',count:1}],flavor:'跃龙门失败，龙体未成反伤根基。但吾不悔，下次定能化龙！'},
{name:'蜘蛛精',icon:'🕷️',desc:'盘丝洞蜘蛛精，毒术精湛',rootIndex:26,constIndex:23,startGold:25,startHerbs:5,startHpBonus:0,startMpBonus:0,startAtkBonus:5,startDefBonus:0,startExpRate:0.02,technique:'basic',extraItems:[{name:'毒蛛丝',icon:'🕸️',count:5}],flavor:'姐妹们都在盘丝洞中修行，吾想出去闯闯。毒修一道，未必不如正道。'},
{name:'鹤妖仙使',icon:'🦢',desc:'仙人座下鹤妖，下凡历练',rootIndex:24,constIndex:26,startGold:80,startHerbs:5,startHpBonus:5,startMpBonus:8,startAtkBonus:3,startDefBonus:0,startExpRate:0.05,technique:'basic',extraItems:[{name:'仙鹤羽',icon:'🪶',count:3}],flavor:'仙人命我下凡历劫，体验人间百态。虽为妖身，但有仙缘加持。'},
{name:'石猴灵妖',icon:'🐵',desc:'天地灵石所化的猴妖',rootIndex:28,constIndex:15,startGold:0,startHerbs:0,startHpBonus:15,startMpBonus:5,startAtkBonus:10,startDefBonus:5,startExpRate:0.03,technique:'basic',extraItems:[],flavor:'灵石化猴，天地所生。不服天命，不敬鬼神。这修仙路，俺老孙来也！'},
// === 魔修 ===
{name:'血魔传人',icon:'🩸',desc:'血魔宗传人，以血入道',rootIndex:27,constIndex:20,startGold:30,startHerbs:0,startHpBonus:10,startMpBonus:0,startAtkBonus:8,startDefBonus:0,startExpRate:0.03,technique:'basic',extraItems:[{name:'血灵石',icon:'🩸',count:2}],flavor:'师尊被正道围杀，临终将功法传我。血魔道虽为邪道，但力量无穷。待吾大成之日，定为师尊报仇。'},
{name:'鬼修幽魂',icon:'👻',desc:'死后怨念不散，以鬼魂之体修仙',rootIndex:25,constIndex:21,startGold:0,startHerbs:0,startHpBonus:-10,startMpBonus:15,startAtkBonus:3,startDefBonus:0,startExpRate:0.02,technique:'basic',extraItems:[],flavor:'吾本已死，但怨念太深，魂魄不散。既然天不收我，那便修这鬼道，逆天而行！'},
{name:'魔道散修',icon:'😈',desc:'走投无路投入魔道的散修',rootIndex:0,constIndex:0,startGold:20,startHerbs:2,startHpBonus:0,startMpBonus:0,startAtkBonus:5,startDefBonus:0,startExpRate:0.01,technique:'basic',extraItems:[],flavor:'正道不容我，那便入魔！管他什么正邪之分，能变强就是好道路。'},
{name:'蛊修苗女',icon:'🐛',desc:'南疆蛊修，以蛊入道',rootIndex:26,constIndex:23,startGold:35,startHerbs:5,startHpBonus:0,startMpBonus:0,startAtkBonus:5,startDefBonus:0,startExpRate:0.02,technique:'basic',extraItems:[{name:'蛊虫',icon:'🐛',count:5}],flavor:'南疆蛊术源远流长，以蛊入道虽被中原修士不齿，但威力无穷。'},
{name:'天魔转世',icon:'👿',desc:'天魔残魂转世，宿慧未失',rootIndex:22,constIndex:27,startGold:50,startHerbs:3,startHpBonus:5,startMpBonus:10,startAtkBonus:10,startDefBonus:0,startExpRate:0.05,technique:'basic',extraItems:[{name:'天魔令',icon:'📿',count:1}],flavor:'前世记忆苏醒，吾乃天魔残魂转世。这一世，定要重登巅峰，超越前世！'},
{name:'炼尸道人',icon:'⚰️',desc:'操控尸傀的阴森道人',rootIndex:25,constIndex:21,startGold:40,startHerbs:0,startHpBonus:0,startMpBonus:5,startAtkBonus:5,startDefBonus:3,startExpRate:0.01,technique:'basic',extraItems:[{name:'控尸符',icon:'📜',count:3}],flavor:'尸修一道虽阴森可怖，但以尸为傀，战力倍增。待吾炼成铜尸，便可横行一方。'},
// === 特殊体质 ===
{name:'天选之人',icon:'🌟',desc:'天道眷顾之人，气运加身',rootIndex:33,constIndex:36,startGold:100,startHerbs:10,startHpBonus:10,startMpBonus:10,startAtkBonus:5,startDefBonus:5,startExpRate:0.1,technique:'basic',extraItems:[{name:'天命玉佩',icon:'🔮',count:1}],flavor:'出生之时天降异象，仙师断言吾乃天选之人。这条路，注定不凡。'},
{name:'废材少年',icon:'📉',desc:'灵根驳杂的废材，但意志坚定',rootIndex:0,constIndex:1,startGold:5,startHerbs:0,startHpBonus:0,startMpBonus:0,startAtkBonus:0,startDefBonus:0,startExpRate:-0.05,technique:'basic',extraItems:[],flavor:'所有人都说我是废材，五灵根驳杂不堪。但我不信命，勤能补拙！'},
{name:'天才陨落',icon:'💫',desc:'曾经的天才因意外跌落凡尘',rootIndex:17,constIndex:1,startGold:30,startHerbs:3,startHpBonus:-5,startMpBonus:-5,startAtkBonus:0,startDefBonus:0,startExpRate:0.02,technique:'basic',extraItems:[],flavor:'三年前我还是宗门天才，一场意外毁了根基。但残余的灵根仍在，我一定能东山再起！'},
{name:'重瞳者',icon:'👁️',desc:'天生重瞳，传说中的圣人之相',rootIndex:33,constIndex:36,startGold:50,startHerbs:5,startHpBonus:5,startMpBonus:10,startAtkBonus:3,startDefBonus:0,startExpRate:0.08,technique:'basic',extraItems:[],flavor:'天生重瞳，众人视为异类。但仙师说这是圣人之相，未来不可限量。'},
{name:'先天圣体',icon:'✨',desc:'万年难遇的先天圣体',rootIndex:35,constIndex:58,startGold:200,startHerbs:15,startHpBonus:20,startMpBonus:20,startAtkBonus:10,startDefBonus:10,startExpRate:0.15,technique:'basic',extraItems:[{name:'圣体觉醒丹',icon:'💎',count:1}],flavor:'先天圣体，传说中能与仙帝比肩的体质。但圣体需觉醒，前路漫漫。'},
{name:'荒废灵体',icon:'💫',desc:'灵体被封印的天才',rootIndex:17,constIndex:1,startGold:15,startHerbs:2,startHpBonus:0,startMpBonus:0,startAtkBonus:0,startDefBonus:0,startExpRate:0.05,technique:'basic',extraItems:[],flavor:'体内封印着强大的力量，每到月圆之夜便会泄出一丝。这封印终有一日会被打破。'},
// === 经典开局 ===
{name:'退婚少年',icon:'💔',desc:'被退婚的少年发誓变强',rootIndex:8,constIndex:0,startGold:20,startHerbs:2,startHpBonus:0,startMpBonus:0,startAtkBonus:3,startDefBonus:0,startExpRate:0.02,technique:'basic',extraItems:[{name:'退婚书',icon:'📄',count:1}],flavor:'今日被退婚，颜面尽失。她家嫌我修为低微，配不上她。三年！三年之后我定要让她后悔！'},
{name:'废柴觉醒',icon:'🔥',desc:'废柴体质突然觉醒隐藏力量',rootIndex:33,constIndex:36,startGold:10,startHerbs:5,startHpBonus:10,startMpBonus:10,startAtkBonus:5,startDefBonus:5,startExpRate:0.08,technique:'basic',extraItems:[],flavor:'体内封印突然破碎，无穷的力量涌出。原来我不是废柴，而是被封印的天才！'},
{name:'重生归来',icon:'🔄',desc:'大能重生回少年时代',rootIndex:35,constIndex:58,startGold:100,startHerbs:10,startHpBonus:15,startMpBonus:15,startAtkBonus:8,startDefBonus:8,startExpRate:0.1,technique:'basic',extraItems:[{name:'前世记忆碎片',icon:'🧩',count:1}],flavor:'吾乃仙帝重生，虽修为尽失但前世记忆犹在。这一世，定要避开所有陷阱，重登巅峰！'},
{name:'落魄少爷',icon:'👔',desc:'家族没落的少爷，立志重振家声',rootIndex:0,constIndex:2,startGold:50,startHerbs:3,startHpBonus:0,startMpBonus:0,startAtkBonus:0,startDefBonus:0,startExpRate:0.01,technique:'basic',extraItems:[{name:'家族令牌',icon:'🏷️',count:1}],flavor:'家族败落，昔日的少爷沦为普通人。但家族功法仍在，终有一日要恢复昔日荣光。'},
{name:'赘婿逆袭',icon:'💍',desc:'入赘豪门的废物女婿暗藏实力',rootIndex:0,constIndex:2,startGold:10,startHerbs:1,startHpBonus:0,startMpBonus:0,startAtkBonus:0,startDefBonus:0,startExpRate:0,technique:'basic',extraItems:[],flavor:'入赘三年，受尽白眼。他们不知道，我只是在等一个时机。'},
{name:'坠崖奇遇',icon:'⛰️',desc:'坠落悬崖却意外获得奇遇',rootIndex:28,constIndex:36,startGold:0,startHerbs:10,startHpBonus:-5,startMpBonus:10,startAtkBonus:3,startDefBonus:0,startExpRate:0.05,technique:'basic',extraItems:[{name:'山洞遗宝',icon:'💎',count:1}],flavor:'被人推下悬崖，大难不死。崖底竟有一处洞府，内有前辈遗留的功法和丹药！'},
{name:'杂役弟子',icon:'🧹',desc:'宗门最低等的杂役弟子',rootIndex:0,constIndex:0,startGold:5,startHerbs:1,startHpBonus:0,startMpBonus:0,startAtkBonus:0,startDefBonus:0,startExpRate:0,technique:'basic',extraItems:[],flavor:'在宗门做了三年杂役，每日扫地挑水。但我不甘心做一辈子杂役，偷偷修炼，终有一天会被发现。'},
{name:'流浪孤儿',icon:'👦',desc:'无父无母的流浪孤儿',rootIndex:0,constIndex:0,startGold:0,startHerbs:0,startHpBonus:0,startMpBonus:0,startAtkBonus:0,startDefBonus:0,startExpRate:0,technique:'basic',extraItems:[],flavor:'无父无母，流浪街头。偶遇仙师说我有灵根，愿收我为徒。从此不再流浪。'},
{name:'老者转世',icon:'👴',desc:'渡劫失败的大能转世重修',rootIndex:35,constIndex:58,startGold:150,startHerbs:10,startHpBonus:10,startMpBonus:10,startAtkBonus:5,startDefBonus:5,startExpRate:0.08,technique:'basic',extraItems:[{name:'转世印记',icon:'🔮',count:1}],flavor:'渡劫失败，元神逃脱转世。这一世根基更好，天劫之仇必报！'},
{name:'书生遇仙',icon:'📕',desc:'赶考书生偶遇仙缘',rootIndex:1,constIndex:5,startGold:30,startHerbs:2,startHpBonus:0,startMpBonus:5,startAtkBonus:0,startDefBonus:0,startExpRate:0.02,technique:'basic',extraItems:[{name:'仙人题诗',icon:'📜',count:1}],flavor:'进京赶考途中遇一仙人，赠我修炼法门。功名利禄皆浮云，长生大道才是真。'},
{name:'乞丐修仙',icon:'🥢',desc:'最低微的乞丐意外踏上仙途',rootIndex:0,constIndex:0,startGold:0,startHerbs:0,startHpBonus:0,startMpBonus:0,startAtkBonus:0,startDefBonus:0,startExpRate:0,technique:'basic',extraItems:[{name:'破碗',icon:'🥣',count:1}],flavor:'被人打了一顿，醒来后发现手里多了一枚珠子。握着它竟然能感受到天地灵气！'},
{name:'将军之子',icon:'⚔️',desc:'武将世家子弟弃武从仙',rootIndex:9,constIndex:3,startGold:80,startHerbs:3,startHpBonus:10,startMpBonus:0,startAtkBonus:5,startDefBonus:5,startExpRate:0.01,technique:'basic',extraItems:[{name:'家传宝剑',icon:'🗡️',count:1}],flavor:'将门之后，本应继承父业。但战场再大也不如仙路辽阔，吾要去追寻真正的力量。'},
{name:'皇子修仙',icon:'👑',desc:'放弃皇位追求长生的皇子',rootIndex:28,constIndex:36,startGold:500,startHerbs:10,startHpBonus:5,startMpBonus:10,startAtkBonus:0,startDefBonus:3,startExpRate:0.05,technique:'basic',extraItems:[{name:'皇室灵丹',icon:'💊',count:5}],flavor:'皇位于我如浮云，百年之后不过一抔黄土。唯有修仙，方能永恒。'},
{name:'盗圣传人',icon:'🗝️',desc:'盗圣关门弟子，身手敏捷',rootIndex:24,constIndex:5,startGold:100,startHerbs:2,startHpBonus:0,startMpBonus:3,startAtkBonus:3,startDefBonus:0,startExpRate:0.02,technique:'basic',extraItems:[{name:'盗圣手套',icon:'🧤',count:1}],flavor:'师父说，天下宝物有缘者得之。这修仙界的好东西，我都想"借"来看看。'},
// === 更多门派 ===
{name:'阵法师',icon:'📐',desc:'专精阵法的宗门弟子',rootIndex:14,constIndex:6,startGold:70,startHerbs:5,startHpBonus:0,startMpBonus:8,startAtkBonus:0,startDefBonus:5,startExpRate:0.02,technique:'basic',extraItems:[{name:'阵旗',icon:'🚩',count:4}],flavor:'阵法一道博大精深，以灵力构阵，可攻可守。吾对阵法痴迷，愿以此入道。'},
{name:'傀儡师',icon:'🤖',desc:'操控傀儡战斗的宗门弟子',rootIndex:9,constIndex:6,startGold:80,startHerbs:3,startHpBonus:0,startMpBonus:5,startAtkBonus:3,startDefBonus:3,startExpRate:0.01,technique:'basic',extraItems:[{name:'初级傀儡',icon:'🤖',count:1}],flavor:'傀儡之道，以一当百。吾虽修为不高，但傀儡可代吾战斗。'},
{name:'暗杀堂刺客',icon:'🗡️',desc:'暗杀堂培养的杀手',rootIndex:24,constIndex:16,startGold:40,startHerbs:2,startHpBonus:0,startMpBonus:0,startAtkBonus:8,startDefBonus:0,startExpRate:0.02,technique:'basic',extraItems:[{name:'淬毒匕首',icon:'🗡️',count:1}],flavor:'从小被培养为杀手，杀人如麻。但我不想一辈子做别人的刀，修仙或许能给我自由。'},
{name:'灵植夫',icon:'🌱',desc:'负责种植灵草的宗门弟子',rootIndex:12,constIndex:11,startGold:20,startHerbs:25,startHpBonus:3,startMpBonus:3,startAtkBonus:0,startDefBonus:0,startExpRate:0.01,technique:'basic',extraItems:[{name:'灵种',icon:'🌱',count:5}],flavor:'种植灵草虽不风光，但每日与灵气为伴，修为增长不慢。而且从不缺灵草用。'},
{name:'执法弟子',icon:'⚖️',desc:'宗门执法队的铁面弟子',rootIndex:9,constIndex:3,startGold:60,startHerbs:3,startHpBonus:8,startMpBonus:0,startAtkBonus:5,startDefBonus:5,startExpRate:0.01,technique:'basic',extraItems:[],flavor:'执法弟子铁面无私，宗门法规高于一切。修为虽非顶尖，但正义感爆棚。'},
// === 更多散修 ===
{name:'落难公主',icon:'👸',desc:'亡国公主，背负复国之志',rootIndex:16,constIndex:17,startGold:50,startHerbs:3,startHpBonus:0,startMpBonus:8,startAtkBonus:0,startDefBonus:0,startExpRate:0.03,technique:'basic',extraItems:[{name:'国玺碎片',icon:'👑',count:1}],flavor:'国破家亡，唯有修仙才能获得复国之力。公主之躯，亦可踏上仙途。'},
{name:'土匪头子',icon:'🏴',desc:'被招安的山贼头领',rootIndex:0,constIndex:3,startGold:80,startHerbs:1,startHpBonus:10,startMpBonus:0,startAtkBonus:5,startDefBonus:3,startExpRate:0,technique:'basic',extraItems:[],flavor:'做了一辈子山贼，被仙师收编。既然有灵根，那就试试修仙，说不定比抢劫有前途。'},
{name:'青楼花魁',icon:'💃',desc:'风尘女子偶得仙缘',rootIndex:16,constIndex:9,startGold:80,startHerbs:2,startHpBonus:0,startMpBonus:5,startAtkBonus:0,startDefBonus:0,startExpRate:0.02,technique:'basic',extraItems:[],flavor:'迎来送往十余载，心如死灰。仙师说我的体质特殊，适合修仙。终于能离开这烟花之地了。'},
{name:'铸剑师',icon:'🔥',desc:'痴迷铸造的匠人',rootIndex:9,constIndex:12,startGold:40,startHerbs:2,startHpBonus:5,startMpBonus:0,startAtkBonus:5,startDefBonus:3,startExpRate:0.01,technique:'basic',extraItems:[{name:'铸剑锤',icon:'🔨',count:1}],flavor:'铸了一辈子剑，今日方知剑可通灵。以铸入道，铸出绝世仙剑！'},
{name:'天桥算命',icon:'🔮',desc:'算命先生其实真有灵通',rootIndex:25,constIndex:5,startGold:30,startHerbs:1,startHpBonus:0,startMpBonus:5,startAtkBonus:0,startDefBonus:0,startExpRate:0.02,technique:'basic',extraItems:[{name:'龟甲',icon:'🐢',count:1}],flavor:'算了一辈子命给别人，今日给自己算了一卦——大吉！修仙去！'},
// === 更多妖修 ===
{name:'猫妖少女',icon:'🐱',desc:'刚化形的猫妖，好奇心旺盛',rootIndex:24,constIndex:5,startGold:15,startHerbs:3,startHpBonus:0,startMpBonus:5,startAtkBonus:3,startDefBonus:0,startExpRate:0.02,technique:'basic',extraItems:[],flavor:'刚化形就被人类世界的美食迷住了。修仙？好啊好啊，听说修仙能吃更多好吃的！'},
{name:'蛟龙后裔',icon:'🐉',desc:'体内有稀薄龙血的蛟妖',rootIndex:22,constIndex:39,startGold:30,startHerbs:5,startHpBonus:10,startMpBonus:5,startAtkBonus:8,startDefBonus:5,startExpRate:0.03,technique:'basic',extraItems:[{name:'蛟龙鳞',icon:'🐉',count:3}],flavor:'体内流淌着稀薄的龙血，虽然只是蛟龙后裔，但终有一日要化为真龙！'},
{name:'花妖精灵',icon:'🌸',desc:'牡丹花化成的精灵',rootIndex:12,constIndex:11,startGold:10,startHerbs:15,startHpBonus:5,startMpBonus:8,startAtkBonus:0,startDefBonus:0,startExpRate:0.02,technique:'basic',extraItems:[{name:'花蜜露',icon:'🍯',count:5}],flavor:'花开花落百年，一朝化形。世间的花都认识我，它们会帮我修行。'},
// === 更多魔修 ===
{name:'魔门圣女',icon:'🖤',desc:'魔门培养的圣女，内心矛盾',rootIndex:27,constIndex:20,startGold:100,startHerbs:5,startHpBonus:5,startMpBonus:10,startAtkBonus:8,startDefBonus:0,startExpRate:0.04,technique:'basic',extraItems:[{name:'魔门心法',icon:'📕',count:1}],flavor:'从小被魔门培养为圣女，但我心中一直有一丝善念。这条路，是对是错？'},
{name:'堕落佛修',icon:'🕯️',desc:'佛心崩溃堕入魔道的僧人',rootIndex:25,constIndex:21,startGold:30,startHerbs:2,startHpBonus:0,startMpBonus:10,startAtkBonus:5,startDefBonus:0,startExpRate:0.03,technique:'basic',extraItems:[{name:'断裂佛珠',icon:'📿',count:1}],flavor:'佛说众生平等，但为何妖魔就该被杀？既然佛不渡我，我便自渡成魔。'},
// === 更多特殊体质 ===
{name:'废材逆袭',icon:'📈',desc:'从废物到天才的逆袭之路',rootIndex:33,constIndex:58,startGold:10,startHerbs:5,startHpBonus:5,startMpBonus:5,startAtkBonus:3,startDefBonus:3,startExpRate:0.05,technique:'basic',extraItems:[{name:'神秘石珠',icon:'🔮',count:1}],flavor:'所有人都嘲笑我是废物，但我不服！今日开始，每一步都是逆袭！'},
{name:'天妒英才',icon:'⚡',desc:'天才之资却体弱多病',rootIndex:33,constIndex:1,startGold:50,startHerbs:10,startHpBonus:-10,startMpBonus:15,startAtkBonus:0,startDefBonus:0,startExpRate:0.08,technique:'basic',extraItems:[{name:'续命丹',icon:'💊',count:3}],flavor:'天资绝世却疾病缠身，医师说活不过三十。但修仙能续命，我要与天争命！'},
{name:'不死之身',icon:'♻️',desc:'怎么都死不了的怪人',rootIndex:0,constIndex:48,startGold:20,startHerbs:5,startHpBonus:30,startMpBonus:0,startAtkBonus:0,startDefBonus:5,startExpRate:0.02,technique:'basic',extraItems:[],flavor:'从小到大怎么作都死不了，被雷劈过、被水淹过、被毒蛇咬过——全都没事。仙师说这是不灭体雏形。'},
{name:'吞噬体质',icon:'🌀',desc:'能吞噬他人灵力的诡异体质',rootIndex:0,constIndex:42,startGold:30,startHerbs:3,startHpBonus:0,startMpBonus:10,startAtkBonus:3,startDefBonus:0,startExpRate:0.06,technique:'basic',extraItems:[],flavor:'总感觉饥饿，需要吞噬更多灵气。这体质是福是祸？师尊说修炼到极致可吞天噬地。'},
// === 更多经典开局 ===
{name:'丹田破碎',icon:'💔',desc:'丹田被毁却意外发现另类修炼法',rootIndex:0,constIndex:1,startGold:10,startHerbs:5,startHpBonus:-5,startMpBonus:-5,startAtkBonus:0,startDefBonus:0,startExpRate:-0.03,technique:null,extraItems:[{name:'残缺功法',icon:'📕',count:1}],flavor:'丹田被毁，修为尽废。但这本残缺功法说，丹田之外另有修行之路！'},
{name:'夺舍重生',icon:'👤',desc:'大能夺舍低阶修士重来',rootIndex:35,constIndex:58,startGold:200,startHerbs:15,startHpBonus:10,startMpBonus:15,startAtkBonus:8,startDefBonus:5,startExpRate:0.12,technique:'basic',extraItems:[{name:'前世法宝碎片',icon:'💎',count:1}],flavor:'元神逃脱，夺舍成功。这具身体资质虽差，但吾有前世经验，定能更快恢复实力！'},
{name:'宗门弃徒',icon:'🚪',desc:'被宗门驱逐的弟子',rootIndex:0,constIndex:0,startGold:20,startHerbs:2,startHpBonus:0,startMpBonus:0,startAtkBonus:0,startDefBonus:0,startExpRate:0,technique:'basic',extraItems:[],flavor:'被诬陷偷学禁术，逐出宗门。冤屈终有昭雪之日，但首先我要变强。'},
{name:'灭门遗孤',icon:'🔥',desc:'全家被灭只身逃出的孤儿',rootIndex:0,constIndex:0,startGold:10,startHerbs:0,startHpBonus:0,startMpBonus:0,startAtkBonus:3,startDefBonus:0,startExpRate:0.01,technique:'basic',extraItems:[{name:'家族残卷',icon:'📕',count:1}],flavor:'满门被灭，唯有我逃出。血海深仇，不死不休！待我修仙大成，定要手刃仇人！'},
{name:'幸运捡漏',icon:'🍀',desc:'总能意外捡到宝物的幸运儿',rootIndex:0,constIndex:36,startGold:150,startHerbs:10,startHpBonus:0,startMpBonus:0,startAtkBonus:0,startDefBonus:0,startExpRate:0.03,technique:'basic',extraItems:[{name:'神秘戒指',icon:'💍',count:1}],flavor:'运气一直很好，总能捡到好东西。今天在路边又捡到一枚戒指，里面竟然有空间！'},
{name:'穿越者',icon:'🌀',desc:'从现代穿越而来的青年',rootIndex:28,constIndex:36,startGold:50,startHerbs:5,startHpBonus:5,startMpBonus:5,startAtkBonus:3,startDefBonus:3,startExpRate:0.05,technique:'basic',extraItems:[{name:'手机（无信号）',icon:'📱',count:1}],flavor:'？？？这是哪？修仙？我穿越了？等等，这具身体的原主人好像也是个倒霉蛋……'},
{name:'大梦初醒',icon:'💭',desc:'修仙界底层小人物突然觉醒前世记忆',rootIndex:0,constIndex:0,startGold:10,startHerbs:2,startHpBonus:0,startMpBonus:0,startAtkBonus:0,startDefBonus:0,startExpRate:0.02,technique:'basic',extraItems:[],flavor:'一场大梦，醒来后记起了前世的一切。原来这世界是一本书，而我是里面的炮灰配角！'},
// === 更多角色 ===
{name:'散修联盟弟子',icon:'🤝',desc:'散修联盟培养的平民修士',rootIndex:0,constIndex:2,startGold:40,startHerbs:5,startHpBonus:0,startMpBonus:0,startAtkBonus:0,startDefBonus:0,startExpRate:0.01,technique:'basic',extraItems:[],flavor:'散修联盟虽不如大宗门资源丰富，但胜在自由。在这里，一切靠自己。'},
{name:'隐世家族子弟',icon:'🏛️',desc:'隐世修仙家族的嫡系传人',rootIndex:28,constIndex:36,startGold:300,startHerbs:15,startHpBonus:10,startMpBonus:10,startAtkBonus:5,startDefBonus:5,startExpRate:0.06,technique:'basic',extraItems:[{name:'族令',icon:'🏷️',count:1}],flavor:'家族隐世千年，资源丰厚。但家族规矩太多，我想出去闯闯。'},
{name:'通灵体',icon:'👻',desc:'能与鬼魂沟通的特殊体质',rootIndex:25,constIndex:21,startGold:20,startHerbs:3,startHpBonus:0,startMpBonus:10,startAtkBonus:0,startDefBonus:0,startExpRate:0.03,technique:'basic',extraItems:[],flavor:'从小就能看到别人看不到的东西，被当成怪物。现在才知道，这叫通灵体。'},
{name:'剑奴',icon:'⛓️',desc:'剑宗最低等的铸剑奴隶',rootIndex:0,constIndex:0,startGold:0,startHerbs:0,startHpBonus:0,startMpBonus:0,startAtkBonus:0,startDefBonus:0,startExpRate:0,technique:null,extraItems:[{name:'断剑',icon:'🗡️',count:1}],flavor:'做了一辈子铸剑奴隶，今日趁乱逃出。断剑在手，从此自由。'},
{name:'灵矿苦工',icon:'⛏️',desc:'在灵矿中做苦力的矿工',rootIndex:0,constIndex:2,startGold:5,startHerbs:0,startHpBonus:5,startMpBonus:0,startAtkBonus:0,startDefBonus:3,startExpRate:0,technique:'basic',extraItems:[{name:'矿镐',icon:'⛏️',count:1}],flavor:'挖了十年灵矿，体内竟也积攒了一些灵气。今日逃出矿洞，开始自己的修仙路。'},
{name:'灵兽园杂役',icon:'🐾',desc:'在灵兽园照顾灵兽的杂役',rootIndex:0,constIndex:2,startGold:10,startHerbs:3,startHpBonus:3,startMpBonus:0,startAtkBonus:0,startDefBonus:0,startExpRate:0.01,technique:'basic',extraItems:[{name:'灵兽粮',icon:'🍖',count:10}],flavor:'照顾灵兽多年，和一头小灵兽成了朋友。它偷偷带我修炼，总算有了气感。'},
{name:'守墓人',icon:'⚰️',desc:'看守宗门墓地的孤独守墓人',rootIndex:25,constIndex:21,startGold:10,startHerbs:1,startHpBonus:0,startMpBonus:5,startAtkBonus:0,startDefBonus:0,startExpRate:0.01,technique:'basic',extraItems:[],flavor:'守墓三十年，墓中的前辈们夜里会教我修炼。虽然阴森，但前辈们的指导弥足珍贵。'},
{name:'炼器学徒',icon:'🔥',desc:'炼器铺的小学徒',rootIndex:9,constIndex:4,startGold:25,startHerbs:1,startHpBonus:3,startMpBonus:0,startAtkBonus:3,startDefBonus:3,startExpRate:0.01,technique:'basic',extraItems:[{name:'炼器锤',icon:'🔨',count:1}],flavor:'在炼器铺打了三年下手，终于能独立炼制低阶法器了。以器入道，大有可为！'},
{name:'灵厨传人',icon:'🍳',desc:'以灵食入道的厨艺天才',rootIndex:12,constIndex:5,startGold:50,startHerbs:10,startHpBonus:5,startMpBonus:5,startAtkBonus:0,startDefBonus:0,startExpRate:0.02,technique:'basic',extraItems:[{name:'灵厨秘方',icon:'📜',count:1}],flavor:'做灵食也能修炼？师父说天下万物皆可入道，厨道亦是大道！'},
{name:'画道修士',icon:'🎨',desc:'以画入道的艺术家',rootIndex:16,constIndex:5,startGold:40,startHerbs:3,startHpBonus:0,startMpBonus:8,startAtkBonus:0,startDefBonus:0,startExpRate:0.02,technique:'basic',extraItems:[{name:'灵笔',icon:'🖌️',count:1}],flavor:'画中自有天地，笔下可生万物。以画入道，画出一片新天地。'},
{name:'棋道修士',icon:'♟️',desc:'以棋入道的棋痴',rootIndex:14,constIndex:6,startGold:35,startHerbs:2,startHpBonus:0,startMpBonus:5,startAtkBonus:0,startDefBonus:3,startExpRate:0.02,technique:'basic',extraItems:[{name:'灵棋盘',icon:'♟️',count:1}],flavor:'棋局如战场，落子如布阵。以棋入道，布天下大局！'},
{name:'锻体武夫',icon:'💪',desc:'以武入道的锻体狂人',rootIndex:0,constIndex:15,startGold:20,startHerbs:2,startHpBonus:15,startMpBonus:0,startAtkBonus:8,startDefBonus:5,startExpRate:0,technique:'basic',extraItems:[],flavor:'不修法力只锻肉身！拳头就是最好的法宝，身体就是最强的武器！'},
{name:'阵道天才',icon:'🔷',desc:'对阵法有天生直觉的天才',rootIndex:14,constIndex:36,startGold:60,startHerbs:5,startHpBonus:0,startMpBonus:10,startAtkBonus:0,startDefBonus:5,startExpRate:0.05,technique:'basic',extraItems:[{name:'阵法古卷',icon:'📜',count:1}],flavor:'看一眼阵法就能理解其原理，这天赋不修阵法太可惜了！'},
{name:'神算子',icon:'🔮',desc:'能掐会算的天机传人',rootIndex:25,constIndex:36,startGold:50,startHerbs:3,startHpBonus:0,startMpBonus:8,startAtkBonus:0,startDefBonus:0,startExpRate:0.03,technique:'basic',extraItems:[{name:'天机盘',icon:'🔮',count:1}],flavor:'天机不可泄露，但可以用来趋吉避凶。算天算地算人心，修仙路上占先机。'},
{name:'药王谷弟子',icon:'🌿',desc:'药王谷出身的灵草专家',rootIndex:12,constIndex:11,startGold:40,startHerbs:30,startHpBonus:5,startMpBonus:3,startAtkBonus:0,startDefBonus:0,startExpRate:0.02,technique:'basic',extraItems:[{name:'灵药种子',icon:'🌱',count:10}],flavor:'药王谷以灵草闻名天下，识得万种灵药。以药入道，丹道大成指日可待。'},
{name:'杀手转行',icon:'🔪',desc:'金盆洗手的杀手踏入仙途',rootIndex:24,constIndex:16,startGold:80,startHerbs:2,startHpBonus:0,startMpBonus:0,startAtkBonus:8,startDefBonus:0,startExpRate:0.01,technique:'basic',extraItems:[{name:'毒药',icon:'☠️',count:3}],flavor:'杀了半辈子人，够了。听说修仙可以长生，比杀人有意思多了。'},
{name:'商队护卫',icon:'🛡️',desc:'护送商队的武修',rootIndex:0,constIndex:3,startGold:100,startHerbs:2,startHpBonus:8,startMpBonus:0,startAtkBonus:3,startDefBonus:5,startExpRate:0,technique:'basic',extraItems:[],flavor:'走南闯北护商队，听说修仙界有更大的买卖。带了些积蓄，去碰碰运气。'},
{name:'占星师',icon:'⭐',desc:'观星知命的占星师',rootIndex:30,constIndex:30,startGold:45,startHerbs:3,startHpBonus:0,startMpBonus:10,startAtkBonus:0,startDefBonus:0,startExpRate:0.04,technique:'basic',extraItems:[{name:'观星镜',icon:'🔭',count:1}],flavor:'夜观天象，发现紫微星动。天象指引，东方有仙缘。遂东行求道。'},
{name:'傀儡戏班主',icon:'🎎',desc:'用傀儡表演的戏班主人',rootIndex:9,constIndex:6,startGold:60,startHerbs:2,startHpBonus:0,startMpBonus:5,startAtkBonus:2,startDefBonus:2,startExpRate:0.01,technique:'basic',extraItems:[{name:'木偶',icon:'🎎',count:3}],flavor:'操纵了一辈子木偶，今日方知可以操纵真正的傀儡！傀儡之道，大有可为！'},
{name:'赶尸人',icon:'🧟',desc:'湘西赶尸人的后代',rootIndex:25,constIndex:21,startGold:30,startHerbs:1,startHpBonus:0,startMpBonus:5,startAtkBonus:3,startDefBonus:0,startExpRate:0.02,technique:'basic',extraItems:[{name:'摄魂铃',icon:'🔔',count:1}],flavor:'祖传赶尸术，本以为是骗人的把戏。直到有一天真的唤醒了一具古尸……'},
{name:'沙漠行者',icon:'🏜️',desc:'在荒漠中求生的独行者',rootIndex:19,constIndex:13,startGold:15,startHerbs:2,startHpBonus:8,startMpBonus:0,startAtkBonus:3,startDefBonus:5,startExpRate:0.01,technique:'basic',extraItems:[],flavor:'在荒漠中独自求生十年，体魄磨练得如岩石般坚硬。土之灵气，与我亲近。'},
{name:'雪山剑客',icon:'🏔️',desc:'雪山上修行的独行剑客',rootIndex:23,constIndex:34,startGold:30,startHerbs:2,startHpBonus:0,startMpBonus:5,startAtkBonus:8,startDefBonus:0,startExpRate:0.03,technique:'basic',extraItems:[{name:'冰魄剑',icon:'🗡️',count:1}],flavor:'雪山之巅，冰魄之力充盈。以冰入剑，剑气如霜。'},
{name:'海商之子',icon:'⛵',desc:'海上商人的儿子，见过大世面',rootIndex:14,constIndex:9,startGold:200,startHerbs:5,startHpBonus:0,startMpBonus:5,startAtkBonus:0,startDefBonus:0,startExpRate:0.01,technique:'basic',extraItems:[{name:'避水珠',icon:'💧',count:1}],flavor:'随父亲的商船走遍四海，见多识广。在南海见过仙人施法，从此立志修仙。'},
{name:'盗墓世家',icon:'⚱️',desc:'世代盗墓的家族传人',rootIndex:25,constIndex:3,startGold:80,startHerbs:3,startHpBonus:0,startMpBonus:5,startAtkBonus:3,startDefBonus:0,startExpRate:0.02,technique:'basic',extraItems:[{name:'探穴铲',icon:'⛏️',count:1}],flavor:'祖传盗墓手艺，挖了无数古墓。在一座上古仙墓中发现的功法，比什么都值钱。'},
{name:'仙厨学徒',icon:'👨‍🍳',desc:'仙厨酒楼的小学徒',rootIndex:12,constIndex:5,startGold:30,startHerbs:8,startHpBonus:5,startMpBonus:3,startAtkBonus:0,startDefBonus:0,startExpRate:0.01,technique:'basic',extraItems:[{name:'灵厨刀',icon:'🔪',count:1}],flavor:'在仙厨酒楼做了五年学徒，学会了用灵材做菜。原来做菜也是一种修炼！'},
{name:'天机阁弟子',icon:'🏛️',desc:'情报组织天机阁的弟子',rootIndex:0,constIndex:5,startGold:100,startHerbs:3,startHpBonus:0,startMpBonus:5,startAtkBonus:0,startDefBonus:0,startExpRate:0.02,technique:'basic',extraItems:[{name:'情报册',icon:'📖',count:1}],flavor:'天机阁消息灵通，知晓天下事。以情报为筹码，换取修炼资源。'},
{name:'血衣卫',icon:'🩸',desc:'血衣楼杀手组织的精英',rootIndex:24,constIndex:20,startGold:60,startHerbs:2,startHpBonus:0,startMpBonus:0,startAtkBonus:10,startDefBonus:0,startExpRate:0.02,technique:'basic',extraItems:[{name:'血衣',icon:'🧥',count:1}],flavor:'血衣楼中排名前十的杀手，但厌倦了杀戮。退出组织，以修仙洗去一身血腥。'},
{name:'流浪剑客',icon:'🗡️',desc:'四处流浪的无名剑客',rootIndex:8,constIndex:0,startGold:20,startHerbs:1,startHpBonus:3,startMpBonus:0,startAtkBonus:5,startDefBonus:0,startExpRate:0.01,technique:'basic',extraItems:[{name:'无名剑',icon:'🗡️',count:1}],flavor:'剑在人在，剑亡人亡。流浪天涯，只为寻那至高剑道。'},
{name:'巫族后裔',icon:'🪬',desc:'远古巫族的最后血脉',rootIndex:28,constIndex:17,startGold:30,startHerbs:5,startHpBonus:10,startMpBonus:5,startAtkBonus:5,startDefBonus:3,startExpRate:0.03,technique:'basic',extraItems:[{name:'巫族图腾',icon:'🪬',count:1}],flavor:'体内流淌着远古巫族的血脉，虽然稀薄，但足以让我踏上巫修之路。'},
{name:'星辰体觉醒者',icon:'⭐',desc:'星辰之力觉醒的幸运儿',rootIndex:30,constIndex:30,startGold:50,startHerbs:5,startHpBonus:0,startMpBonus:12,startAtkBonus:0,startDefBonus:0,startExpRate:0.06,technique:'basic',extraItems:[{name:'星辉石',icon:'⭐',count:2}],flavor:'昨夜星辰入体，觉醒了星辰之力。这股力量浩瀚如海，前路光明！'},
{name:'末法时代遗民',icon:'🏚️',desc:'末法时代残留的修仙者后裔',rootIndex:0,constIndex:0,startGold:5,startHerbs:1,startHpBonus:0,startMpBonus:0,startAtkBonus:0,startDefBonus:0,startExpRate:0,technique:null,extraItems:[{name:'残破修炼笔记',icon:'📕',count:1}],flavor:'祖先曾是修仙者，末法时代灵气枯竭，修仙之路断绝。如今灵气复苏，我要重走祖先的路！'},
{name:'灵气复苏先行者',icon:'🌅',desc:'灵气复苏后第一批觉醒灵根的人',rootIndex:28,constIndex:36,startGold:30,startHerbs:5,startHpBonus:5,startMpBonus:5,startAtkBonus:3,startDefBonus:3,startExpRate:0.04,technique:'basic',extraItems:[],flavor:'天地灵气突然复苏，我是第一批感应到灵气的人。这是大世之争的开端！'},
];

export function getRoot(index: number): any {
  return ROOT_TYPES[index] || ROOT_TYPES[0];
}

export function randomRoot(): { index: number; root: any } {
  const total = ROOT_TYPES.reduce((s: number, r: any) => s + r.weight, 0);
  let r = Math.random() * total;
  for (let i = 0; i < ROOT_TYPES.length; i++) {
    r -= (ROOT_TYPES[i] as any).weight;
    if (r <= 0) return { index: i, root: ROOT_TYPES[i] };
  }
  return { index: 0, root: ROOT_TYPES[0] };
}
