// 物品系统 - 物品信息+商店+背包
// 从 v0.35 迁移 - 共 9 个常量

export const ITEM_INFO: any = {
  spirit_stone:   { name: '灵石',   icon: '💎', color: '#6bc', gridW: 1, gridH: 1 },
  spirit_stone_m: { name: '中品灵石', icon: '💠', color: '#9df', gridW: 1, gridH: 1 },
  spirit_stone_l: { name: '上品灵石', icon: '🔷', color: '#b9f', gridW: 1, gridH: 1 },
  hp_pill_s:      { name: '小回血丹', icon: '🔴', color: '#e66', gridW: 1, gridH: 1 },
  hp_pill_m:      { name: '回血丹',   icon: '🔴', color: '#f44', gridW: 1, gridH: 1 },
  mp_pill_s:      { name: '小回灵丹', icon: '🔵', color: '#66e', gridW: 1, gridH: 1 },
  mp_pill_m:      { name: '回灵丹',   icon: '🔵', color: '#44f', gridW: 1, gridH: 1 },
  herb:           { name: '灵草',   icon: '🌿', color: '#6c6', gridW: 1, gridH: 1 },
  exp_pill:       { name: '经验丹', icon: '✨', color: '#fc0', gridW: 1, gridH: 1 },
  beast_skin:     { name: '兽皮',   icon: '🧶', color: '#a86', gridW: 2, gridH: 2 },
  poison_sac:     { name: '毒囊',   icon: '☠️', color: '#6a4', gridW: 1, gridH: 1 },
  demon_core:     { name: '妖丹',   icon: '🔮', color: '#a4e', gridW: 1, gridH: 1 },
  ore:            { name: '矿石',   icon: '🪨', color: '#888', gridW: 2, gridH: 1 },
  dragon_core:    { name: '蛟龙丹', icon: '🐲', color: '#fa0', gridW: 1, gridH: 1 },

  bag_huang: { name:'黄级储物袋',icon:'👝',color:'#d4a840',type:'bag',tier:'huang',slots:4,gridW:2,gridH:2 },
  bag_xuan:  { name:'玄级储物袋',icon:'👝',color:'#7c6bc4',type:'bag',tier:'xuan',slots:8,gridW:2,gridH:2 },
  bag_di:    { name:'地级储物袋',icon:'👝',color:'#4a9c6e',type:'bag',tier:'di',slots:12,gridW:2,gridH:3 },
  bag_tian:  { name:'天级储物袋',icon:'👝',color:'#5ca8d4',type:'bag',tier:'tian',slots:18,gridW:3,gridH:2 },
  bag_xian:  { name:'仙级储物袋',icon:'👝',color:'#d45ca8',type:'bag',tier:'xian',slots:26,gridW:3,gridH:3 },
  bag_shen:  { name:'神级储物袋',icon:'👝',color:'#ff6b35',type:'bag',tier:'shen',slots:40,gridW:3,gridH:3 },

  jade_huang: { name:'黄级禁制玉佩',icon:'🟢',color:'#d4a840',type:'jade',tier:'huang',protect:3,gridW:1,gridH:1 },
  jade_xuan:  { name:'玄级禁制玉佩',icon:'🔵',color:'#7c6bc4',type:'jade',tier:'xuan',protect:6,gridW:1,gridH:1 },
  jade_di:    { name:'地级禁制玉佩',icon:'🟣',color:'#4a9c6e',type:'jade',tier:'di',protect:10,gridW:1,gridH:1 },
  jade_tian:  { name:'天级禁制玉佩',icon:'💎',color:'#5ca8d4',type:'jade',tier:'tian',protect:15,gridW:1,gridH:1 },
  jade_xian:  { name:'仙级禁制玉佩',icon:'🔮',color:'#d45ca8',type:'jade',tier:'xian',protect:22,gridW:1,gridH:1 },
  jade_shen:  { name:'神级禁制玉佩',icon:'🔴',color:'#ff6b35',type:'jade',tier:'shen',protect:30,gridW:1,gridH:1 },

  hp_pill_l:  { name:'大回血丹', icon:'❤️', color:'#f22', gridW: 1, gridH: 1 },
  mp_pill_l:  { name:'大回灵丹', icon:'💙', color:'#22f', gridW: 1, gridH: 1 },
  herb_lingzhi: { name:'灵芝', icon:'🍄', color:'#6c6', gridW: 1, gridH: 2 },
  herb_huolong: { name:'火龙果', icon:'🔥', color:'#f80', gridW: 1, gridH: 1 },
  herb_xuelian: { name:'雪莲', icon:'❄️', color:'#adf', gridW: 1, gridH: 2 },
  herb_longgu:  { name:'龙骨', icon:'🦴', color:'#cba', gridW: 2, gridH: 1 },

  cheat_frag_common: { name:'普通作弊器碎片', icon:'⚙️', color:'#6bc', gridW: 1, gridH: 1 },
  cheat_frag_rare:   { name:'稀有作弊器碎片', icon:'🔩', color:'#a6f', gridW: 1, gridH: 1 },
  cheat_frag_epic:   { name:'史诗作弊器碎片', icon:'💎', color:'#fd0', gridW: 1, gridH: 1 },

  bijie_pill_low:  { name:'下等避劫丹', icon:'⚡', color:'#ff0', gridW: 1, gridH: 1 },
  bijie_pill_mid:  { name:'中等避劫丹', icon:'🌩️', color:'#f80', gridW: 1, gridH: 1 },
  bijie_pill_high: { name:'高等避劫丹', icon:'⛈️', color:'#f44', gridW: 1, gridH: 1 },
};

export const DYNAMIC_ITEMS: any = {
  hp_pill_l: { name: '大回血丹', icon: '❤️', color: '#f22' },
  mp_pill_l: { name: '大回灵丹', icon: '💙', color: '#22f' },
  herb_lingzhi: { name: '灵芝', icon: '🍄', color: '#6c6' },
  herb_huolong: { name: '火龙果', icon: '🔥', color: '#f80' },
  herb_xuelian: { name: '雪莲', icon: '❄️', color: '#adf' },
  herb_longgu: { name: '龙骨', icon: '🦴', color: '#cba' },
  cheat_frag_common: { name: '普通作弊器碎片', icon: '⚙️', color: '#6bc' },
  cheat_frag_rare: { name: '稀有作弊器碎片', icon: '🔩', color: '#a6f' },
  cheat_frag_epic: { name: '史诗作弊器碎片', icon: '💎', color: '#fd0' },
  bijie_pill_low: { name: '下等避劫丹', icon: '⚡', color: '#ff0' },
  bijie_pill_mid: { name: '中等避劫丹', icon: '🌩️', color: '#f80' },
  };

export const SHOP_POOL: any = [
  {id:'linggengdan',name:'灵根丹',icon:'💊',basePrice:114514,cat:'pill',rare:true},{id:'tizhidan',name:'体质丹',icon:'💊',basePrice:114514,cat:'pill',rare:true},
  {id:'hp_pill',name:'回血丹',icon:'💊',basePrice:20,cat:'pill'},
  {id:'mp_pill',name:'回灵丹',icon:'💧',basePrice:20,cat:'pill'},
  {id:'exp_pill',name:'聚灵丹',icon:'✨',basePrice:80,cat:'pill'},
  {id:'atk_pill',name:'破甲丹',icon:'⚔️',basePrice:120,cat:'pill'},
  {id:'def_pill',name:'铁骨丹',icon:'🛡️',basePrice:120,cat:'pill'},
  {id:'break_pill',name:'破境丹',icon:'💥',basePrice:300,cat:'pill'},
  {id:'soul_pill',name:'凝魄丹',icon:'🔮',basePrice:1200,cat:'pill'},
  {id:'heaven_pill',name:'天元丹',icon:'✨',basePrice:5000,cat:'pill'},
  {id:'qi_pill',name:'大还丹',icon:'🌟',basePrice:500,cat:'pill'},
  {id:'herb_pack',name:'灵草包',icon:'🌿',basePrice:50,cat:'material',desc:'获得20灵草'},
  {id:'spirit_stone',name:'灵石袋',icon:'💰',basePrice:100,cat:'material',desc:'获得100灵石'},
  {id:'fertility_pill',name:'助灵丹',icon:'🍼',basePrice:400,cat:'special',desc:'下次生育成功率+30%'},
  {id:'blood_pill',name:'血脉丹',icon:'🩸',basePrice:600,cat:'special',desc:'提升后代灵根品质'},
  {id:'talent_stone',name:'悟道石',icon:'💎',basePrice:800,cat:'special',desc:'后代天赋+20%'},
  {id:'beauty_pill',name:'驻颜丹',icon:'✨',basePrice:200,cat:'special',desc:'道侣好感+10'},
  {id:'dual_pill',name:'双修丹',icon:'💑',baseCost:350,cat:'special',desc:'下次双修效果×2'},
  {id:'gui_mian_ling',name:'鬼面令',icon:'🎭',basePrice:500,cat:'special',desc:'进入黑市的凭证'},
  {id:'tianji_jade',name:'天机玉简',icon:'🔮',basePrice:800,cat:'special',desc:'隐匿身份寄拍物品'},
{id:'stellar_martial_scroll',name:'星空武道残卷',icon:'⭐',basePrice:5000,cat:'special',desc:'传说中的0级功法残卷，参悟后可选择弃仙修武',rare:true},

{id:'bijie_pill_low',name:'下等避劫丹',icon:'⚡',basePrice:5000,cat:'pill',desc:'渡劫减伤15%',rare:true},
{id:'bijie_pill_mid',name:'中等避劫丹',icon:'🌩️',basePrice:15000,cat:'pill',desc:'渡劫减伤35%',rare:true},
{id:'bijie_pill_high',name:'高等避劫丹',icon:'⛈️',basePrice:50000,cat:'pill',desc:'渡劫减伤65%',rare:true},
];

export const BACKPACK_SIZE: any = 20;

export const STORAGE_BAG_SLOTS: any = { huang: 4, xuan: 8, di: 12, tian: 18, xian: 26, shen: 40 };

export const TOTAL_SLOTS: any = 9;

export const FRAG_ICONS: any = ['🔹','🔷','💠','🔮','💎','☁️','⭐'];

export const FRAG_NAMES: any = ['残片','碎片','精片','灵片','玄片','仙片','神片'];

export const RESOURCE_TYPES: any = [
  { name: '灵草丛',   icon: '🌿', gatherTime: 2000, loot: ['herb'],          count: [1, 3] },
  { name: '灵石矿脉', icon: '💎', gatherTime: 3000, loot: ['spirit_stone'],  count: [1, 3] },
  { name: '宝箱',     icon: '📦', gatherTime: 1000, loot: ['hp_pill_s','spirit_stone','mp_pill_s'], count: [1, 2] },
  { name: '古籍残页', icon: '📜', gatherTime: 1000, loot: ['exp_pill'],      count: [1, 1] },
  { name: '丹炉遗迹', icon: '🏺', gatherTime: 2000, loot: ['hp_pill_s','mp_pill_s'], count: [1, 2] },
];
