// 转生系统 - 六道轮回
// 从 v0.35 迁移 - 共 3 个常量

export const REBIRTH_PATHS: any = [
{id:'sword',name:'剑道之路',icon:'🗡️',desc:'以剑入道，攻伐无双',color:'var(--red)',bonus:{atkPct:.2,expRate:.05},startBonus:{permAtk:15},skills:[{name:'剑意',desc:'攻击+5%',effect:{atkPct:.05}},{name:'剑罡',desc:'攻击+8%',effect:{atkPct:.08}},{name:'万剑归宗',desc:'攻击+15%',effect:{atkPct:.15}}]},
{id:'alchemy',name:'丹道之路',icon:'🔥',desc:'丹道至尊，以丹养道',color:'var(--orange)',bonus:{expRate:.15,goldRate:.1},startBonus:{rebirthExpBonus:10},skills:[{name:'丹心',desc:'修为速度+5%',effect:{expRate:.05}},{name:'丹火',desc:'灵石+10%',effect:{goldRate:.1}},{name:'仙丹之主',desc:'修为速度+15%',effect:{expRate:.15}}]},
{id:'body',name:'体修之路',icon:'💪',desc:'肉身成圣，万法不侵',color:'var(--blue)',bonus:{hpPct:.3,defPct:.15},startBonus:{permDef:20,maxHp:200},skills:[{name:'铁骨',desc:'防御+5%',effect:{defPct:.05}},{name:'铜皮',desc:'气血+10%',effect:{hpPct:.1}},{name:'不灭金身',desc:'气血+20%',effect:{hpPct:.2}}]},
{id:'formation',name:'阵道之路',icon:'📐',desc:'以阵御敌，妙算天机',color:'var(--purple)',bonus:{defPct:.12,expRate:.12},startBonus:{permDef:10,rebirthExpBonus:8},skills:[{name:'阵眼',desc:'防御+8%',effect:{defPct:.08}},{name:'困仙阵',desc:'修为+8%',effect:{expRate:.08}},{name:'天地大阵',desc:'全属性+10%',effect:{allPct:.1}}]},
{id:'talisman',name:'符道之路',icon:'📜',desc:'符箓天下，以符证道',color:'var(--cyan)',bonus:{expRate:.1,goldRate:.12,atkPct:.05},startBonus:{rebirthExpBonus:5},skills:[{name:'画符',desc:'灵石+5%',effect:{goldRate:.05}},{name:'灵符',desc:'攻击+5%',effect:{atkPct:.05}},{name:'天符大道',desc:'全属性+8%',effect:{allPct:.08}}]},
{id:'demon',name:'魔道之路',icon:'😈',desc:'魔道纵横，以杀入道',color:'var(--red)',bonus:{atkPct:.25,expRate:.08},startBonus:{permAtk:25},skills:[{name:'魔气',desc:'攻击+10%',effect:{atkPct:.1}},{name:'天魔功',desc:'攻击+12%',effect:{atkPct:.12}},{name:'大自在天魔',desc:'攻击+20%',effect:{atkPct:.2}}]},
{id:'buddha',name:'佛道之路',icon:'🙏',desc:'佛光普照，度化众生',color:'var(--gold)',bonus:{hpPct:.2,defPct:.1,expRate:.1},startBonus:{maxHp:300,permDef:15},skills:[{name:'佛光',desc:'气血+8%',effect:{hpPct:.08}},{name:'金刚体',desc:'防御+10%',effect:{defPct:.1}},{name:'如来神掌',desc:'全属性+12%',effect:{allPct:.12}}]},
{id:'heaven',name:'天道之路',icon:'☁️',desc:'天道无情，以道制道',color:'var(--gold)',bonus:{expRate:.2,goldRate:.15},startBonus:{rebirthExpBonus:15},skills:[{name:'天眼',desc:'修为+8%',effect:{expRate:.08}},{name:'天机',desc:'灵石+12%',effect:{goldRate:.12}},{name:'天道之主',desc:'全属性+15%',effect:{allPct:.15}}]},
{id:'beast',name:'驭兽之路',icon:'🐾',desc:'万兽臣服，以兽为道',color:'var(--green)',bonus:{atkPct:.1,expRate:.12,petBonus:.3},startBonus:{permAtk:10,rebirthExpBonus:5},skills:[{name:'兽语',desc:'灵宠+15%',effect:{petBonus:.15}},{name:'万兽诀',desc:'灵宠+20%',effect:{petBonus:.2}},{name:'兽神',desc:'灵宠+30%',effect:{petBonus:.3}}]},
{id:'void',name:'虚空之路',icon:'🌌',desc:'虚空之力，超越天地',color:'var(--purple)',bonus:{expRate:.25,mpPct:.2},startBonus:{rebirthExpBonus:20},skills:[{name:'虚空步',desc:'修为+10%',effect:{expRate:.1}},{name:'空间法则',desc:'灵力+15%',effect:{mpPct:.15}},{name:'虚空大帝',desc:'全属性+20%',effect:{allPct:.2}}]},
{id:'karma',name:'因果之路',icon:'🔄',desc:'因果循环，以因导果',color:'var(--cyan)',bonus:{goldRate:.2,expRate:.15},startBonus:{rebirthExpBonus:10},skills:[{name:'因',desc:'灵石+10%',effect:{goldRate:.1}},{name:'果',desc:'修为+10%',effect:{expRate:.1}},{name:'因果大道',desc:'全属性+15%',effect:{allPct:.15}}]},
];

export const REBIRTH_STATS: any = [
{id:'atk',name:'攻击强化',icon:'⚔️',desc:'每点+2%攻击',effect:{atkPct:.02},maxPoints:20},
{id:'def',name:'防御强化',icon:'🛡️',desc:'每点+2%防御',effect:{defPct:.02},maxPoints:20},
{id:'hp',name:'气血强化',icon:'❤️',desc:'每点+3%气血',effect:{hpPct:.03},maxPoints:20},
{id:'mp',name:'灵力强化',icon:'💧',desc:'每点+2%灵力',effect:{mpPct:.02},maxPoints:20},
{id:'exp',name:'修炼加速',icon:'✨',desc:'每点+2%修为速度',effect:{expRate:.02},maxPoints:20},
{id:'gold',name:'灵石增益',icon:'💰',desc:'每点+3%灵石获取',effect:{goldRate:.03},maxPoints:15},
{id:'crit',name:'暴击强化',icon:'💥',desc:'每点+1%暴击率',effect:{critRate:.01},maxPoints:10},
{id:'luck',name:'气运加成',icon:'🍀',desc:'每点+2%好运概率',effect:{luckRate:.02},maxPoints:10},
];

export const SIX_PATHS: any = [
{id:'heaven',name:'天道',icon:'☁️',desc:'天道至公，投生天人之体',color:'#f5dfa0',weight:3,
  races:[
  {name:'天人',icon:'👼',desc:'天生灵体，修炼极快',startBonus:{expRate:.25,mp:.2,permDef:10},rootBonus:2},
  {name:'金翅大鹏鸟',icon:'🦅',desc:'天道飞禽，速度无双',startBonus:{expRate:.2,atk:.15},rootBonus:1},
  ]},
{id:'human',name:'人道',icon:'👤',desc:'人乃万物之灵，修炼均衡',color:'var(--text)',weight:25,
  races:[
  {name:'人族',icon:'🧑',desc:'均衡发展，大道之基',startBonus:{expRate:.1},rootBonus:0},
  {name:'先天人族',icon:'🧝',desc:'先天之体，天资卓越',startBonus:{expRate:.15,hp:.1,mp:.1},rootBonus:1},
  ]},
{id:'asura',name:'阿修罗道',icon:'⚔️',desc:'好战之族，以战养道',color:'var(--red)',weight:15,
  races:[
  {name:'阿修罗',icon:'👹',desc:'战意滔天，攻伐无双',startBonus:{atk:.25,expRate:.05},rootBonus:0},
  {name:'夜叉',icon:'😈',desc:'嗜血好战，越战越强',startBonus:{atk:.2,hp:.1},rootBonus:0},
  {name:'罗刹',icon:'🦹',desc:'暗影杀戮，致命一击',startBonus:{atk:.22,expRate:.08},rootBonus:1},
  ]},
{id:'beast',name:'畜生道',icon:'🐾',desc:'妖兽之道，化形修炼',color:'var(--green)',weight:20,
  races:[
  {name:'妖族·狐',icon:'🦊',desc:'九尾天狐血脉，魅惑众生',startBonus:{expRate:.12,mp:.15},rootBonus:1},
  {name:'妖族·龙',icon:'🐲',desc:'真龙后裔，威压四方',startBonus:{atk:.15,def:.1,hp:.15},rootBonus:2},
  {name:'妖族·蛇',icon:'🐍',desc:'万年蛇妖，剧毒无比',startBonus:{atk:.12,expRate:.1},rootBonus:0},
  {name:'妖族·虎',icon:'🐅',desc:'虎妖之力，震慑群妖',startBonus:{atk:.18,hp:.12},rootBonus:0},
  {name:'妖族·鹤',icon:'🦢',desc:'仙鹤化形，长寿善修',startBonus:{expRate:.18,mp:.1},rootBonus:1},
  {name:'妖族·龟',icon:'🐢',desc:'玄武后裔，防御至强',startBonus:{def:.25,hp:.2},rootBonus:0},
  {name:'妖族·树',icon:'🌳',desc:'万年古树化形，生机无限',startBonus:{hp:.25,expRate:.12},rootBonus:0},
  {name:'妖族·石',icon:'🪨',desc:'灵石化形，万法不侵',startBonus:{def:.2,expRate:.08},rootBonus:0},
  ]},
{id:'hungry_ghost',name:'饿鬼道',icon:'👻',desc:'幽冥之族，魂魄修炼',color:'var(--purple)',weight:18,
  races:[
  {name:'鬼族·幽魂',icon:'👻',desc:'幽魂化形，无形无质',startBonus:{mp:.25,expRate:.15},rootBonus:1},
  {name:'鬼族·厉鬼',icon:'💀',desc:'怨念凝聚，攻击诡异',startBonus:{atk:.15,mp:.15},rootBonus:0},
  {name:'鬼族·冥王',icon:'👑',desc:'冥界之主，统御万鬼',startBonus:{atk:.12,def:.12,mp:.2},rootBonus:2},
  {name:'魂族',icon:'🌀',desc:'纯魂之体，魂修始祖',startBonus:{expRate:.2,mp:.25},rootBonus:2},
  ]},
{id:'hell',name:'地狱道',icon:'🔥',desc:'地狱深渊，魔道之源',color:'#d9534f',weight:12,
  races:[
  {name:'魔族·天魔',icon:'😈',desc:'天魔降世，魔威盖世',startBonus:{atk:.25,expRate:.12},rootBonus:1},
  {name:'魔族·心魔',icon:'🧠',desc:'心魔无形，直攻识海',startBonus:{atk:.18,mp:.18},rootBonus:1},
  {name:'魔族·血魔',icon:'🩸',desc:'血海魔功，吞噬生机',startBonus:{atk:.2,hp:.15},rootBonus:0},
  {name:'邪族',icon:'☠️',desc:'邪道之祖，以邪入道',startBonus:{atk:.22,expRate:.1},rootBonus:0},
  ]},
];
