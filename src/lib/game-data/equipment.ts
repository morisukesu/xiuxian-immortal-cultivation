// 装备系统 - 6槽位+武器/防具/饰品+品质
// 从 v0.35 迁移 - 共 22 个常量

export const EQUIPMENT_SLOTS: any = ['head','body','hands','feet','weapon','accessory'];

export const EQUIPMENT_POOL: any = [

  { id:'cloth_hat',name:'粗布帽',slot:'head',tier:'huang',def:2,icon:'🎩',desc:'普通布帽'},
  { id:'cloth_robe',name:'粗布衣',slot:'body',tier:'huang',def:3,icon:'👕',desc:'普通布衣'},
  { id:'cloth_gloves',name:'粗布手套',slot:'hands',tier:'huang',def:1,atk:1,icon:'🧤',desc:'普通手套'},
  { id:'straw_shoes',name:'草鞋',slot:'feet',tier:'huang',def:1,speed:0.3,icon:'👢',desc:'轻便草鞋'},
  { id:'wood_sword',name:'木剑',slot:'weapon',tier:'huang',atk:5,icon:'⚔️',desc:'练习用木剑'},
  { id:'stone_pendant',name:'石佩',slot:'accessory',tier:'huang',hp:10,icon:'💍',desc:'粗糙石佩'},

  { id:'iron_helm',name:'铁盔',slot:'head',tier:'xuan',def:5,icon:'🪖',desc:'精铁头盔'},
  { id:'iron_armor',name:'铁甲',slot:'body',tier:'xuan',def:8,icon:'🦺',desc:'铁制护甲'},
  { id:'iron_gauntlets',name:'铁手套',slot:'hands',tier:'xuan',def:3,atk:3,icon:'🧤',desc:'铁制手套'},
  { id:'iron_boots',name:'铁靴',slot:'feet',tier:'xuan',def:3,speed:0.2,icon:'👢',desc:'铁制战靴'},
  { id:'steel_blade',name:'钢刀',slot:'weapon',tier:'xuan',atk:12,icon:'🗡️',desc:'锋利钢刀'},
  { id:'jade_ring',name:'玉环',slot:'accessory',tier:'xuan',hp:25,mp:10,icon:'💍',desc:'温润玉环'},

  { id:'sect_robe',name:'宗门法袍',slot:'body',tier:'di',def:15,mp:20,icon:'🥋',desc:'宗门弟子法袍'},
  { id:'spirit_blade',name:'灵刃',slot:'weapon',tier:'di',atk:25,icon:'🗡️',desc:'蕴含灵力的利刃'},
  { id:'earth_belt',name:'地脉腰带',slot:'accessory',tier:'di',hp:50,def:5,icon:'📿',desc:'地脉之力凝聚'},

  { id:'heaven_crown',name:'天冠',slot:'head',tier:'tian',def:12,mp:30,icon:'👑',desc:'天级法冠'},
  { id:'heaven_robe',name:'天蚕衣',slot:'body',tier:'tian',def:25,speed:0.5,icon:'👘',desc:'天蚕丝编织'},
  { id:'thunder_sword',name:'雷鸣剑',slot:'weapon',tier:'tian',atk:45,icon:'⚡',desc:'雷电附着'},

  { id:'xian_helm',name:'仙灵冠',slot:'head',tier:'xian',def:20,hp:80,icon:'👑',desc:'仙灵之力守护'},
  { id:'xian_robe',name:'仙羽衣',slot:'body',tier:'xian',def:40,mp:50,icon:'👘',desc:'仙羽编织的法衣'},
  { id:'xian_sword',name:'仙剑',slot:'weapon',tier:'xian',atk:80,icon:'🗡️',desc:'仙人佩剑'},

  { id:'shen_crown',name:'神冠',slot:'head',tier:'shen',def:35,hp:150,icon:'👑',desc:'神器之冠'},
  { id:'shen_armor',name:'神铠',slot:'body',tier:'shen',def:60,hp:100,icon:'🛡️',desc:'神器铠甲'},
  { id:'shen_sword',name:'神剑',slot:'weapon',tier:'shen',atk:150,icon:'🗡️',desc:'上古神剑'},
];

export const EQUIP_GRADES: any = ['凡品','良品','上品','极品','传说','神话','太古'];

export const EQUIP_SLOTS: any = ['weapon','armor','accessory','talisman'];

export const EQUIPMENT_SLOT_ICONS: any = { head:'🎩',body:'👕',hands:'🧤',feet:'👢',weapon:'⚔️',accessory:'💍' };

export const EQUIPMENT_SLOT_NAMES: any = { head:'头部',body:'躯干',hands:'手部',feet:'足部',weapon:'武器',accessory:'饰品' };

export const WEAPON_DATA: any = {
  sword: { name: '飞剑', icon: '⚔️', attackType: 'physical_sharp', desc: '锋锐飞剑，切割为主',
  penetration: 0.15, bleedRate: 1.2, reachRange: 'medium',
  canPenetrate: false, damageShape: 'slash', areaEffect: 'linear' },
  spear: { name: '灵枪', icon: '🔱', attackType: 'physical_pierce', desc: '穿刺攻击，可深入体内',
  penetration: 0.45, bleedRate: 1.0, reachRange: 'long',
  canPenetrate: true, damageShape: 'pierce_line', areaEffect: 'deep_linear' },
  fist: { name: '拳罡', icon: '👊', attackType: 'physical_blunt', desc: '以拳入道，震荡之力',
  penetration: 0.05, bleedRate: 0.3, reachRange: 'melee',
  canPenetrate: false, damageShape: 'impact', areaEffect: 'radial' },
  bow: { name: '灵弓', icon: '🏹', attackType: 'physical_pierce', desc: '远程穿刺，精准打击',
  penetration: 0.55, bleedRate: 1.1, reachRange: 'ranged',
  canPenetrate: true, damageShape: 'pierce_point', areaEffect: 'point' },
  staff: { name: '灵杖', icon: '🪄', attackType: 'physical_blunt', desc: '灵气附着，震荡攻击',
  penetration: 0.10, bleedRate: 0.4, reachRange: 'medium',
  canPenetrate: false, damageShape: 'impact', areaEffect: 'cone' },
  axe: { name: '战斧', icon: '🪓', attackType: 'physical_sharp', desc: '重劈型利器',
  penetration: 0.25, bleedRate: 1.5, reachRange: 'medium',
  canPenetrate: false, damageShape: 'chop', areaEffect: 'wedge' },
  needle: { name: '灵针', icon: '📍', attackType: 'physical_pierce', desc: '精准穿刺武器，可穿透护体',
  penetration: 0.80, bleedRate: 0.5, reachRange: 'short',
  canPenetrate: true, damageShape: 'pierce_point', areaEffect: 'point' },
  claw: { name: '利爪', icon: '🐾', attackType: 'physical_sharp', desc: '撕裂型攻击',
  penetration: 0.20, bleedRate: 1.3, reachRange: 'melee',
  canPenetrate: false, damageShape: 'tear', areaEffect: 'linear' },
  whip: { name: '灵鞭', icon: '🪢', attackType: 'physical_sharp', desc: '鞭型攻击，缠绕切割',
  penetration: 0.12, bleedRate: 0.8, reachRange: 'medium',
  canPenetrate: false, damageShape: 'whip', areaEffect: 'linear' },
  hammer: { name: '破天锤', icon: '🔨', attackType: 'physical_blunt', desc: '重型钝器，震荡穿透',
  penetration: 0.30, bleedRate: 0.2, reachRange: 'medium',
  canPenetrate: true, damageShape: 'impact', areaEffect: 'radial' },
};

export const WEAPON_PREFIXES: any = ['青锋','寒铁','赤炎','紫雷','玄冰','天罡','碎星','破天','太虚','混沌'];

export const WEAPON_TYPES: any = ['剑','刀','枪','鞭','锏','戟','扇','笔','琴','印'];

export const ARMOR_PREFIXES: any = ['玄铁','金丝','天蚕','龙鳞','凤羽','星芒','月华','日曜','太初','混沌'];

export const ARMOR_TYPES: any = ['铠甲','道袍','战衣','护心镜','披风','内甲'];

export const ACC_PREFIXES: any = ['灵犀','破妄','洞察','天眼','紫微','太清','玄黄'];

export const ACC_TYPES: any = ['戒指','项链','手镯','腰带','玉佩','发簪'];

export const TAL_PREFIX: any = ['镇魂','封魔','御雷','唤风','驭火','控水','驱邪','伏魔'];

export const TAL_TYPES: any = ['符箓','阵盘','宝塔','铜镜','宝瓶','钟鼎'];

export const SLOT_ICONS: any = {weapon:'⚔️',armor:'🛡️',accessory:'💍',talisman:'📜'};

export const SLOT_NAMES: any = {weapon:'武器',armor:'防具',accessory:'饰品',talisman:'法宝'};

export const GRADE_COLORS: any = ['var(--text2)','var(--green)','var(--blue)','var(--purple)','var(--gold)','var(--red)','var(--cyan)'];

export const GRADE_INDEX_MAP: any = {'凡级':0,'黄级':1,'玄级':2,'地级':3,'天级':4,'仙级':5,'神级':6,'至高':7};

export const QUALITY_TIERS: any = [
  {name:'人道道基',color:'var(--text2)',icon:'🌱',bonus:{permAtk:5,permDef:3,permHp:100,expRate:.05},desc:'根基平庸，修炼之路漫漫'},
  {name:'地道道基',color:'var(--green)',icon:'🌿',bonus:{permAtk:15,permDef:10,permHp:300,expRate:.1},desc:'根基稳固，前途可期'},
  {name:'天道道基',color:'var(--blue)',icon:'💎',bonus:{permAtk:30,permDef:20,permHp:600,expRate:.2},desc:'天道眷顾，气运非凡'},
  {name:'混沌道基',color:'var(--purple)',icon:'🔮',bonus:{permAtk:60,permDef:40,permHp:1200,expRate:.35},desc:'混沌之力，万古无双'},
];

export const TIER_COLORS: any = {
  huang: { name: '黄级', color: '#d4a840', bg: 'rgba(212,168,64,.12)', border: 'rgba(212,168,64,.3)' },
  xuan:  { name: '玄级', color: '#7c6bc4', bg: 'rgba(124,107,196,.12)', border: 'rgba(124,107,196,.3)' },
  di:    { name: '地级', color: '#4a9c6e', bg: 'rgba(74,156,110,.12)', border: 'rgba(74,156,110,.3)' },
  tian:  { name: '天级', color: '#5ca8d4', bg: 'rgba(92,168,212,.12)', border: 'rgba(92,168,212,.3)' },
  xian:  { name: '仙级', color: '#d45ca8', bg: 'rgba(212,92,168,.12)', border: 'rgba(212,92,168,.3)' },
  shen:  { name: '神级', color: '#ff6b35', bg: 'rgba(255,107,53,.15)', border: 'rgba(255,107,53,.4)' },
};

export const TIER_ORDER: any = ['huang','xuan','di','tian','xian','shen'];
