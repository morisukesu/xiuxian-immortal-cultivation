// NPC+宗门+道侣
// 从 v0.35 迁移 - 共 7 个常量

export const COMPANION_NAMES_M: any = ['子轩','浩然','天宇','逸尘','墨白','清玄','景行','云深','无涯','长歌','九霄','凌风','逸仙','子墨','星辰'];

export const COMPANION_NAMES_W: any = ['若曦','清月','紫萱','梦瑶','语嫣','婉清','雪见','灵儿','晓梦','映月','霜华','冰凝','素心','青鸾','月婵'];

export const COMPANION_PERSONALITY: any = [
  {name:'温婉',bonus:{expRate:.08,harmony:.15},desc:'温柔体贴，双修效率高'},
  {name:'清冷',bonus:{expRate:.12,harmony:.05},desc:'高冷独立，修炼天赋强'},
  {name:'活泼',bonus:{goldRate:.1,harmony:.1},desc:'开朗乐观，带来好运'},
  {name:'坚韧',bonus:{def:.05,harmony:.08},desc:'意志坚定，防御加成'},
  {name:'聪慧',bonus:{expRate:.15,harmony:.06},desc:'天资聪颖，修炼神速'},
  {name:'霸道',bonus:{atk:.08,harmony:.03},desc:'强势性格，攻击加成'},
];

export const COMPANION_SURNAMES: any = ['慕容','上官','欧阳','司马','东方','南宫','西门','北冥','轩辕','独孤','公孙','端木','百里','风','云','月','霜','雪','冰','凌'];

export const SECTS: any = [
{name:'青云门',bonus:{expRate:.1,def:.05},desc:'正道大宗，根基深厚'},
{name:'天魔宗',bonus:{atk:.12,expRate:.08},desc:'魔道宗门，攻伐凌厉'},
{name:'万剑阁',bonus:{atk:.15},desc:'剑修圣地'},
{name:'药王谷',bonus:{herbRate:.2,expRate:.05},desc:'炼丹圣地'},
{name:'太虚观',bonus:{expRate:.15},desc:'道家正宗'},
];

export const SECT_INVESTMENTS: any = [
{id:'qingyun_herb',name:'青云灵草堂',sect:'青云门',type:'herb',icon:'🌿',desc:'灵草种植与贸易，受季节影响较大',basePrice:50,volatility:0.025,trend:0.0008,minPrice:8},
{id:'tianmo_mineral',name:'天魔矿脉',sect:'天魔宗',type:'mineral',icon:'⛏️',desc:'灵石矿脉开发，高风险高回报',basePrice:120,volatility:0.04,trend:0.0012,minPrice:15},
{id:'wanjian_forge',name:'万剑铸器坊',sect:'万剑阁',type:'forge',icon:'⚔️',desc:'法宝铸造产业，需求稳定',basePrice:85,volatility:0.02,trend:0.001,minPrice:12},
{id:'yaowang_pill',name:'药王丹阁',sect:'药王谷',type:'pill',icon:'💊',desc:'丹药炼制与销售，利润丰厚',basePrice:200,volatility:0.03,trend:0.0015,minPrice:25},
{id:'taixu_spirit',name:'太虚灵矿',sect:'太虚观',type:'spirit',icon:'💎',desc:'稀有灵矿开采，周期性强',basePrice:150,volatility:0.035,trend:0.0005,minPrice:20},
{id:'yunmeng_silk',name:'云梦天蚕丝',sect:'云梦泽',type:'silk',icon:'🧵',desc:'天蚕丝织造，奢侈品产业',basePrice:65,volatility:0.028,trend:0.0009,minPrice:10},
{id:'canglang_spirit',name:'沧浪灵酒坊',sect:'沧浪剑派',type:'wine',icon:'🍷',desc:'灵酒酿造，修士社交必备',basePrice:35,volatility:0.022,trend:0.0007,minPrice:5},
{id:'fenglei_charm',name:'风雷符箓铺',sect:'风雷谷',type:'charm',icon:'📜',desc:'符箓制作，战时需求激增',basePrice:95,volatility:0.032,trend:0.0011,minPrice:15},
];

export const BUILDING_TYPES: any = [

  { id: 'camp',   name: '废弃营地', icon: '⛺', w: 3, h: 3, continent: -1, loot: 2, guards: 1, spawnRate: 0.15, category: 'wild', explorable: true },
  { id: 'hut',    name: '猎人小屋', icon: '🏚️', w: 4, h: 3, continent: -1, loot: 3, guards: 1, spawnRate: 0.10, category: 'wild', explorable: true },
  { id: 'cave',   name: '灵石矿洞', icon: '🕳️', w: 5, h: 5, continent: -1, loot: 4, guards: 3, spawnRate: 0.08, category: 'wild', explorable: true },
  { id: 'house',  name: '古城民房', icon: '🏠', w: 4, h: 4, continent: -1, loot: 3, guards: 1, spawnRate: 0.06, category: 'ruin', explorable: true },
  { id: 'shop',   name: '古城商铺', icon: '🏪', w: 6, h: 4, continent: -1, loot: 5, guards: 2, spawnRate: 0.04, category: 'ruin', explorable: true },
  { id: 'temple', name: '远古殿宇', icon: '🏛️', w: 8, h: 6, continent: -1, loot: 8, guards: 5, spawnRate: 0.02, category: 'ruin', explorable: true },
  { id: 'lair',   name: '魔修巢穴', icon: '💀', w: 6, h: 6, continent: -1, loot: 6, guards: 6, spawnRate: 0.05, category: 'evil', explorable: true },
  { id: 'secret', name: '天材秘境', icon: '✨', w: 5, h: 5, continent: -1, loot: 10, guards: 4, spawnRate: 0.03, category: 'rare', explorable: true },

  { id: 'village', name: '凡人村庄', icon: '🏘️', w: 5, h: 5, continent: 2, loot: 3, guards: 0, spawnRate: 0.12, category: 'mortal', explorable: true, desc: '普通凡人聚居的小村庄' },
  { id: 'town',    name: '凡人城镇', icon: '🏯', w: 8, h: 6, continent: 2, loot: 6, guards: 2, spawnRate: 0.06, category: 'mortal', explorable: true, desc: '繁华的凡人城镇，商铺众多' },
  { id: 'nation',  name: '凡人国度', icon: '🏰', w: 12, h: 10, continent: 2, loot: 12, guards: 8, spawnRate: 0.01, category: 'mortal', explorable: true, desc: '凡人帝国的都城，守卫森严' },

  { id: 'sect',       name: '修仙宗门', icon: '⛩️', w: 10, h: 8, continent: 0, loot: 10, guards: 6, spawnRate: 0.04, category: 'cultivation', explorable: true, desc: '修仙大宗的山门' },
  { id: 'wild_cave',  name: '修士洞府', icon: '🏔️', w: 5, h: 5, continent: 1, loot: 8, guards: 3, spawnRate: 0.06, category: 'cultivation', explorable: true, desc: '野生修士闭关修炼之所' },
  { id: 'inheritance',name: '修士传承', icon: '📿', w: 4, h: 4, continent: -1, loot: 15, guards: 4, spawnRate: 0.008, category: 'legendary', explorable: true, desc: '上古大能留下的传承之地' },

  { id: 'ruins_wall',  name: '残垣断壁', icon: '🧱', w: 5, h: 3, continent: -1, loot: 0, guards: 0, spawnRate: 0.08, category: 'terrain', explorable: false },
  { id: 'old_tower',   name: '古旧塔楼', icon: '🗼', w: 3, h: 3, continent: -1, loot: 0, guards: 0, spawnRate: 0.06, category: 'terrain', explorable: false },
  { id: 'stone_altar', name: '石台祭坛', icon: '⛩️', w: 4, h: 4, continent: -1, loot: 0, guards: 0, spawnRate: 0.05, category: 'terrain', explorable: false },
  { id: 'fallen_hall', name: '坍塌殿堂', icon: '🏚️', w: 6, h: 5, continent: -1, loot: 0, guards: 0, spawnRate: 0.04, category: 'terrain', explorable: false },

  { id: 'hua_guo_shan',  name: '花果山',   icon: '🍑', w: 12, h: 10, continent: 0, loot: 20, guards: 8, spawnRate: 0.008, category: 'landmark', explorable: true, desc: '孙悟空诞生之地，"十洲之祖脉，三岛之来龙"，满山灵猴仙果' },
  { id: 'ao_lai_guo',    name: '傲来国',   icon: '🏯', w: 10, h: 8,  continent: 0, loot: 12, guards: 4, spawnRate: 0.010, category: 'landmark', explorable: true, desc: '东胜神洲凡人国度，临近花果山，民风淳朴' },
  { id: 'shui_lian_dong',name: '水帘洞',   icon: '🌊', w: 6, h: 5,  continent: 0, loot: 15, guards: 3, spawnRate: 0.006, category: 'landmark', explorable: true, desc: '花果山福地，水帘洞洞天，瀑布后的世外桃源' },

  { id: 'ling_shan',     name: '灵山',     icon: '🏔️', w: 14, h: 12, continent: 1, loot: 25, guards: 10, spawnRate: 0.005, category: 'landmark', explorable: true, desc: '如来佛祖道场，大雷音寺所在，"不贪不杀，养气潜灵"' },
  { id: 'ling_tai_fang', name: '灵台方寸山',icon: '⛰️', w: 10, h: 8, continent: 1, loot: 18, guards: 5,  spawnRate: 0.006, category: 'landmark', explorable: true, desc: '菩提祖师道场斜月三星洞所在，传授孙悟空神通之地' },
  { id: 'xi_yue_san_xing',name:'斜月三星洞',icon: '🌀', w: 6, h: 5, continent: 1, loot: 20, guards: 2, spawnRate: 0.004, category: 'landmark', explorable: true, desc: '菩提祖师修行之所，蕴含无上道法' },

  { id: 'da_tang',       name: '东土大唐', icon: '🏰', w: 16, h: 12, continent: 2, loot: 15, guards: 12, spawnRate: 0.006, category: 'landmark', explorable: true, desc: '唐僧取经起点，"贪淫乐祸，是非恶海"中的人间盛世' },
  { id: 'chang_an',      name: '长安城',   icon: '🏛️', w: 14, h: 10, continent: 2, loot: 18, guards: 15, spawnRate: 0.004, category: 'landmark', explorable: true, desc: '大唐帝都，人间最繁华之城，取经之旅的起点与终点' },
  { id: 'wu_xing_shan',  name: '五行山',   icon: '🪨', w: 8, h: 6,  continent: 2, loot: 10, guards: 3, spawnRate: 0.005, category: 'landmark', explorable: true, desc: '如来佛祖镇压孙悟空五百年之地，五行之力封印' },

  { id: 'zhen_wu_dian',  name: '真武殿',   icon: '⛩️', w: 10, h: 8,  continent: 3, loot: 22, guards: 8,  spawnRate: 0.005, category: 'landmark', explorable: true, desc: '真武大帝镇守之地，降妖伏魔的北方圣地' },
  { id: 'bei_ji_tian',   name: '北极天柱', icon: '🗼', w: 6, h: 6,  continent: 3, loot: 16, guards: 6,  spawnRate: 0.004, category: 'landmark', explorable: true, desc: '支撑天地的极北之柱，蕴含天地法则' },
  { id: 'bing_yuan',     name: '冰渊裂谷', icon: '❄️', w: 8, h: 5,  continent: 3, loot: 12, guards: 10, spawnRate: 0.006, category: 'landmark', explorable: true, desc: '万年冰川裂开的深渊，上古妖兽蛰伏之地' },
];
