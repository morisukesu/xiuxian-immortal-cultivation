// 家族系统
// 从 v0.35 迁移 - 共 5 个常量

export const FAMILY_BUILDINGS: any = [
  {id:'main_hall',name:'家族大殿',icon:'🏛️',desc:'家族核心，提升成员上限',baseCost:500,maxLv:10,effect:'memberCap',perLv:2},
  {id:'spirit_field',name:'灵田',icon:'🌾',desc:'种植灵草，自动产出',baseCost:300,maxLv:10,effect:'herbGen',perLv:0.5},
  {id:'training',name:'修炼场',icon:'🏋️',desc:'提升成员修炼速度',baseCost:400,maxLv:10,effect:'trainSpeed',perLv:0.05},
  {id:'alchemy_hall',name:'炼丹阁',icon:'🔥',desc:'家族炼丹，自动产丹',baseCost:600,maxLv:8,effect:'pillGen',perLv:0.1},
  {id:'library_fam',name:'藏书楼',icon:'📚',desc:'存储功法，后代可继承',baseCost:800,maxLv:5,effect:'inheritance',perLv:0.1},
  {id:'blood_pool',name:'血脉池',icon:'🩸',desc:'提升后代资质',baseCost:1000,maxLv:5,effect:'bloodQuality',perLv:0.08},
];

export const CHILD_TRAINING: any = [
{id:'meditation',name:'冥想修炼',icon:'🧘',desc:'基础修炼，提升修为',cost:{gold:50},duration:300000,effect:{exp:500},minAge:5},
{id:'body_training',name:'体术锻炼',icon:'💪',desc:'锻炼体魄，提升气血',cost:{gold:80},duration:600000,effect:{hp:100},minAge:8},
{id:'art_learning',name:'研习功法',icon:'📖',desc:'学习功法，提升天赋',cost:{gold:150,herbs:5},duration:900000,effect:{talent:2},minAge:12},
{id:'combat',name:'实战训练',icon:'⚔️',desc:'对战训练，提升攻击',cost:{gold:100},duration:600000,effect:{atk:10},minAge:10},
{id:'alchemy_study',name:'炼丹启蒙',icon:'🔥',desc:'学习炼丹之术',cost:{gold:200,herbs:10},duration:1200000,effect:{alchemy:1},minAge:15},
{id:'sword_training',name:'剑道修炼',icon:'🗡️',desc:'以剑入道，提升攻击力',cost:{gold:250},duration:900000,effect:{atk:20,talent:1},minAge:15},
{id:'insight',name:'顿悟参悟',icon:'💡',desc:'天人感应，大幅提升天赋',cost:{gold:500,herbs:20},duration:1800000,effect:{talent:5,exp:1000},minAge:18},
{id:'travel',name:'外出历练',icon:'🗺️',desc:'游历天下，全面提升',cost:{gold:300},duration:1200000,effect:{exp:800,atk:15,talent:1},minAge:16},
{id:'blood_fusion',name:'血脉融合',icon:'🩸',desc:'融合家族血脉之力',cost:{gold:1000,herbs:30},duration:3600000,effect:{rootUpgrade:1,talent:3},minAge:20},
];

export const FERTILITY_BASE: any = {
  0:0.25,5:0.22,10:0.18,15:0.15,20:0.12,25:0.09,30:0.06,35:0.04,40:0.02,45:0.01,50:0.005
};

export const PREGNANCY_DURATION_BASE: any = 30; // 30 minutes base, reduced by cultivation;

export const INVEST_VOLUME_BASE: any = {qingyun_herb:8000,tianmo_mineral:5000,wanjian_forge:6500,yaowang_pill:12000,taixu_spirit:3500,yunmeng_silk:4200,canglang_spirit:9500,fenglei_charm:5800};
