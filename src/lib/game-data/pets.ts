// 灵宠系统
// 从 v0.35 迁移 - 共 2 个常量

export const PET_TEMPLATES: any = [

{name:'灵鼠',icon:'🐀',grade:'凡级',baseAtk:3,baseDef:2,passive:'灵气感知',passiveEffect:{goldRate:.05},catchRate:.8,minRealm:0,skills:['咬噬'],evolveTo:'噬金鼠',evolveLv:10,evolveCost:{gold:200,herbs:10}},
{name:'土狗',icon:'🐕',grade:'凡级',baseAtk:2,baseDef:3,passive:'忠诚',passiveEffect:{def:.03},catchRate:.8,minRealm:0,skills:['撕咬'],evolveTo:'啸天犬',evolveLv:15,evolveCost:{gold:300,herbs:15}},
{name:'灵兔',icon:'🐇',grade:'凡级',baseAtk:1,baseDef:1,passive:'敏捷',passiveEffect:{expRate:.03},catchRate:.85,minRealm:0,skills:['闪避'],evolveTo:'月华玉兔',evolveLv:12,evolveCost:{gold:250,herbs:12}},
{name:'青蛇',icon:'🐍',grade:'凡级',baseAtk:4,baseDef:1,passive:'毒牙',passiveEffect:{atk:.03},catchRate:.75,minRealm:0,skills:['毒咬'],evolveTo:'碧鳞蟒',evolveLv:10,evolveCost:{gold:200,herbs:10}},

{name:'青狐',icon:'🦊',grade:'黄级',baseAtk:8,baseDef:5,passive:'魅惑',passiveEffect:{expRate:.08},catchRate:.5,minRealm:3,skills:['狐火','幻术'],evolveTo:'九尾天狐',evolveLv:20,evolveCost:{gold:800,herbs:30}},
{name:'火鸦',icon:'🐦',grade:'黄级',baseAtk:12,baseDef:3,passive:'烈焰',passiveEffect:{atk:.05},catchRate:.45,minRealm:5,skills:['火羽','烈焰喷射'],evolveTo:'三足金乌',evolveLv:25,evolveCost:{gold:1000,herbs:40}},
{name:'雪貂',icon:'🦦',grade:'黄级',baseAtk:6,baseDef:6,passive:'寒气',passiveEffect:{def:.05},catchRate:.48,minRealm:4,skills:['冰爪','寒气护体'],evolveTo:'冰晶雪貂',evolveLv:18,evolveCost:{gold:600,herbs:25}},
{name:'灵猿',icon:'🐒',grade:'黄级',baseAtk:10,baseDef:4,passive:'悟性',passiveEffect:{expRate:.06},catchRate:.42,minRealm:5,skills:['拳击','通臂拳'],evolveTo:'通灵神猿',evolveLv:20,evolveCost:{gold:700,herbs:28}},
{name:'石龟',icon:'🐢',grade:'黄级',baseAtk:3,baseDef:15,passive:'石甲',passiveEffect:{def:.08},catchRate:.5,minRealm:3,skills:['龟壳防御','石弹'],evolveTo:'玄武幼崽',evolveLv:30,evolveCost:{gold:1200,herbs:50}},
{name:'风鹰',icon:'🦅',grade:'黄级',baseAtk:9,baseDef:4,passive:'疾风',passiveEffect:{atk:.04,expRate:.03},catchRate:.4,minRealm:5,skills:['风刃','俯冲'],evolveTo:'大风鹏',evolveLv:22,evolveCost:{gold:900,herbs:35}},

{name:'铁甲龟',icon:'🐢',grade:'玄级',baseAtk:5,baseDef:20,passive:'铁壁',passiveEffect:{def:.1},catchRate:.3,minRealm:10,skills:['铁壁','大地震击','龟息功'],evolveTo:'玄武',evolveLv:35,evolveCost:{gold:3000,herbs:80}},
{name:'雷豹',icon:'🐆',grade:'玄级',baseAtk:25,baseDef:10,passive:'雷击',passiveEffect:{atk:.08},catchRate:.25,minRealm:12,skills:['雷爪','闪电突袭','雷暴'],evolveTo:'雷麒麟',evolveLv:30,evolveCost:{gold:2500,herbs:70}},
{name:'青蛟',icon:'🐲',grade:'玄级',baseAtk:22,baseDef:18,passive:'龙威',passiveEffect:{atk:.06,def:.06},catchRate:.2,minRealm:14,skills:['龙息','翻江倒海','蛟龙摆尾'],evolveTo:'青龙',evolveLv:35,evolveCost:{gold:5000,herbs:100}},
{name:'噬金鼠',icon:'🐀',grade:'玄级',baseAtk:15,baseDef:12,passive:'噬金',passiveEffect:{goldRate:.12},catchRate:.28,minRealm:10,skills:['金牙','吞噬','金遁'],evolveTo:'吞天鼠',evolveLv:28,evolveCost:{gold:2000,herbs:60}},
{name:'暗影狼',icon:'🐺',grade:'玄级',baseAtk:20,baseDef:8,passive:'暗袭',passiveEffect:{atk:.1},catchRate:.22,minRealm:12,skills:['暗影爪','潜行','暗月杀'],evolveTo:'天狼',evolveLv:28,evolveCost:{gold:2200,herbs:65}},
{name:'碧玉螳螂',icon:'🦗',grade:'玄级',baseAtk:28,baseDef:5,passive:'双刀',passiveEffect:{atk:.12},catchRate:.2,minRealm:15,skills:['双刀斩','飞叶快刀','碧影斩'],evolveTo:'刀锋螳螂王',evolveLv:30,evolveCost:{gold:2800,herbs:75}},
{name:'烈焰狮',icon:'🦁',grade:'玄级',baseAtk:24,baseDef:14,passive:'狮吼',passiveEffect:{atk:.08,def:.04},catchRate:.22,minRealm:13,skills:['火焰吐息','狮吼功','烈焰护体'],evolveTo:'火麒麟',evolveLv:32,evolveCost:{gold:3500,herbs:85}},

{name:'冰凤',icon:'🦅',grade:'地级',baseAtk:40,baseDef:25,passive:'冰霜',passiveEffect:{expRate:.15,def:.05},catchRate:.15,minRealm:18,skills:['冰封万里','凤凰涅槃','冰晶风暴','凤鸣九天'],evolveTo:'冰凰',evolveLv:40,evolveCost:{gold:10000,herbs:200}},
{name:'赤炎虎',icon:'🐅',grade:'地级',baseAtk:45,baseDef:20,passive:'炎魂',passiveEffect:{atk:.12},catchRate:.12,minRealm:20,skills:['虎啸','赤炎爪','烈焰领域','猛虎下山'],evolveTo:'白虎',evolveLv:38,evolveCost:{gold:8000,herbs:180}},
{name:'玄水蛟',icon:'🐉',grade:'地级',baseAtk:38,baseDef:30,passive:'水灵',passiveEffect:{hp:.1,expRate:.1},catchRate:.1,minRealm:22,skills:['水龙卷','深渊之力','蛟龙出海','玄水护盾'],evolveTo:'应龙',evolveLv:42,evolveCost:{gold:12000,herbs:250}},
{name:'紫雷鹰',icon:'🦅',grade:'地级',baseAtk:50,baseDef:15,passive:'雷霆',passiveEffect:{atk:.15},catchRate:.08,minRealm:24,skills:['雷暴天降','闪电领域','紫雷灭世','雷鹰展翅'],evolveTo:'雷鹏',evolveLv:40,evolveCost:{gold:10000,herbs:220}},
{name:'金翅大鹏',icon:'🦅',grade:'地级',baseAtk:48,baseDef:22,passive:'极速',passiveEffect:{atk:.1,expRate:.12},catchRate:.08,minRealm:25,skills:['金翅斩','大鹏展翅','极速俯冲','金光护体'],evolveTo:'鲲鹏幼崽',evolveLv:45,evolveCost:{gold:15000,herbs:300}},
{name:'大地之熊',icon:'🐻',grade:'地级',baseAtk:35,baseDef:40,passive:'大地之力',passiveEffect:{def:.15,hp:.1},catchRate:.1,minRealm:20,skills:['大地震击','石壁','熊抱','厚土领域'],evolveTo:'山岳巨熊',evolveLv:38,evolveCost:{gold:9000,herbs:190}},
{name:'幽冥狼',icon:'🐺',grade:'地级',baseAtk:42,baseDef:18,passive:'冥界之力',passiveEffect:{atk:.12,expRate:.08},catchRate:.1,minRealm:22,skills:['冥界召唤','灵魂撕咬','暗影分身','幽冥领域'],evolveTo:'啸月天狼',evolveLv:40,evolveCost:{gold:11000,herbs:230}},
{name:'九尾灵猫',icon:'🐱',grade:'地级',baseAtk:30,baseDef:28,passive:'九命',passiveEffect:{hp:.12,expRate:.1},catchRate:.12,minRealm:20,skills:['九命幻影','猫爪','魅惑之术','灵猫闪避'],evolveTo:'九尾天狐',evolveLv:42,evolveCost:{gold:12000,herbs:240}},

{name:'麒麟',icon:'🐲',grade:'天级',baseAtk:80,baseDef:50,passive:'祥瑞',passiveEffect:{expRate:.2,goldRate:.15,atk:.1},catchRate:.08,minRealm:25,skills:['麒麟踏云','祥瑞之光','五行之力','麒麟圣火','天地同寿'],evolveTo:'圣麒麟',evolveLv:50,evolveCost:{gold:50000,herbs:500}},
{name:'朱雀',icon:'🔥',grade:'天级',baseAtk:90,baseDef:35,passive:'涅槃',passiveEffect:{atk:.15,expRate:.18},catchRate:.06,minRealm:28,skills:['南明离火','朱雀涅槃','焚天之翼','火之领域','浴火重生'],evolveTo:'不死凤凰',evolveLv:50,evolveCost:{gold:60000,herbs:600}},
{name:'玄武',icon:'🐢',grade:'天级',baseAtk:50,baseDef:100,passive:'不动',passiveEffect:{def:.25,hp:.2},catchRate:.05,minRealm:30,skills:['玄武之盾','龟蛇合击','水之领域','绝对防御','天地同寿'],evolveTo:'太古玄武',evolveLv:55,evolveCost:{gold:70000,herbs:700}},
{name:'白虎',icon:'🐅',grade:'天级',baseAtk:95,baseDef:45,passive:'杀伐',passiveEffect:{atk:.2},catchRate:.06,minRealm:28,skills:['白虎啸天','庚金之爪','万剑归宗','杀伐领域','虎啸山河'],evolveTo:'太古白虎',evolveLv:50,evolveCost:{gold:55000,herbs:550}},
{name:'青龙',icon:'🐉',grade:'天级',baseAtk:85,baseDef:55,passive:'龙威',passiveEffect:{expRate:.2,atk:.12,def:.1},catchRate:.05,minRealm:30,skills:['龙息','翻江倒海','龙威领域','青龙出水','天龙八部'],evolveTo:'太古青龙',evolveLv:55,evolveCost:{gold:65000,herbs:650}},
{name:'混沌兽',icon:'🌀',grade:'天级',baseAtk:75,baseDef:60,passive:'混沌之力',passiveEffect:{expRate:.25,atk:.1,def:.1},catchRate:.04,minRealm:32,skills:['混沌之击','五行吞噬','混沌护盾','虚无之触','万象归一'],evolveTo:'混沌巨兽',evolveLv:55,evolveCost:{gold:80000,herbs:800}},
{name:'虚空兽',icon:'🌌',grade:'天级',baseAtk:70,baseDef:55,passive:'虚空之力',passiveEffect:{expRate:.22,mp:.15},catchRate:.04,minRealm:30,skills:['空间裂缝','虚空遁','次元斩','空间封锁','虚空风暴'],evolveTo:'太虚神兽',evolveLv:52,evolveCost:{gold:70000,herbs:700}},

{name:'真龙',icon:'🐲',grade:'仙级',baseAtk:200,baseDef:120,passive:'真龙之威',passiveEffect:{expRate:.3,atk:.15,def:.1},catchRate:.03,minRealm:35,skills:['真龙吐息','天地龙吟','万龙朝宗','龙之领域','龙神附体','因果之龙'],evolveTo:'祖龙',evolveLv:60,evolveCost:{gold:200000,herbs:2000}},
{name:'凤凰',icon:'🔥',grade:'仙级',baseAtk:180,baseDef:100,passive:'不死',passiveEffect:{expRate:.28,hp:.2},catchRate:.03,minRealm:36,skills:['凤凰真火','涅槃重生','百鸟朝凤','火之大道','不死之身','浴火成圣'],evolveTo:'元凤',evolveLv:60,evolveCost:{gold:180000,herbs:1800}},
{name:'鲲鹏',icon:'🐋',grade:'仙级',baseAtk:220,baseDef:130,passive:'扶摇九万里',passiveEffect:{expRate:.35,goldRate:.2,atk:.12},catchRate:.02,minRealm:38,skills:['鲲鹏展翅','北冥吞噬','扶摇直上','速度领域','天地之大','化鹏为鲲'],evolveTo:'太古鲲鹏',evolveLv:65,evolveCost:{gold:250000,herbs:2500}},
{name:'饕餮',icon:'👹',grade:'仙级',baseAtk:250,baseDef:80,passive:'吞噬',passiveEffect:{atk:.2,goldRate:.15},catchRate:.02,minRealm:38,skills:['吞噬天地','饕餮之口','万物皆食','贪婪之力','噬灵','吞天'],evolveTo:'太古饕餮',evolveLv:60,evolveCost:{gold:220000,herbs:2200}},
{name:'穷奇',icon:'🐅',grade:'仙级',baseAtk:240,baseDef:90,passive:'凶威',passiveEffect:{atk:.22,expRate:.15},catchRate:.02,minRealm:38,skills:['穷奇之爪','凶兽之威','虎啸震天','杀戮领域','不详之力'],evolveTo:'太古穷奇',evolveLv:60,evolveCost:{gold:200000,herbs:2000}},
{name:'梼杌',icon:'🦁',grade:'仙级',baseAtk:230,baseDef:100,passive:'顽固',passiveEffect:{def:.18,atk:.15},catchRate:.02,minRealm:38,skills:['梼杌之力','不动如山','顽固之体','大地之怒','万钧之力'],evolveTo:'太古梼杌',evolveLv:60,evolveCost:{gold:200000,herbs:2000}},

{name:'圣麒麟',icon:'🐲',grade:'神级',baseAtk:500,baseDef:300,passive:'圣兽之王',passiveEffect:{expRate:.5,goldRate:.3,atk:.2,def:.15},catchRate:.01,minRealm:43,skills:['圣光审判','天地同寿','五行归一','圣兽领域','大道之印','万法不侵','圣麒麟之怒'],evolveTo:null},
{name:'祖龙',icon:'🐉',grade:'神级',baseAtk:600,baseDef:250,passive:'龙族始祖',passiveEffect:{expRate:.5,atk:.25,def:.12,hp:.15},catchRate:.008,minRealm:45,skills:['祖龙吐息','天地龙吟','万龙之祖','龙之大道','龙族庇护','祖龙之怒','开天龙息'],evolveTo:null},
{name:'元凤',icon:'🔥',grade:'神级',baseAtk:550,baseDef:220,passive:'凤族始祖',passiveEffect:{expRate:.5,hp:.25,atk:.2},catchRate:.008,minRealm:45,skills:['元凤真火','不死之祖','百鸟始祖','凤之大道','涅槃成圣','元凤之怒','焚天之火'],evolveTo:null},
{name:'始麒麟',icon:'🦄',grade:'神级',baseAtk:450,baseDef:350,passive:'始兽之威',passiveEffect:{expRate:.55,def:.25,goldRate:.35},catchRate:.006,minRealm:46,skills:['始兽领域','五行始源','祥瑞天下','始兽之怒','天地庇护','大道之主','始麒麟圣光'],evolveTo:null},
{name:'混沌神兽',icon:'🌀',grade:'神级',baseAtk:580,baseDef:280,passive:'混沌始源',passiveEffect:{expRate:.6,atk:.2,def:.2,hp:.2,mp:.2},catchRate:.005,minRealm:47,skills:['混沌始源','万法归寂','混沌之主','大道崩塌','混沌领域','虚无之力','超脱之击'],evolveTo:null},
];

export const PET_YAOXIU_REALMS: any = [
  '启灵期','开智期','通脉期','凝元期','化形期',
  '妖兵','妖将','妖帅','妖王','妖皇',
  '妖帝','妖尊','妖圣','妖神','妖祖',
  '大妖','天妖','仙妖','圣妖','混沌妖祖'
];
