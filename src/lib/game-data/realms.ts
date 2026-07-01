// 境界体系 - 14阶段+分支+瓶颈
// 从 v0.35 迁移 - 共 15 个常量

export const REALMS: any = [
{name:'外劲',tier:'凡武',level:1,expNeeded:50,hpBase:60,mpBase:20,atkBase:6,defBase:3,successRate:100,title:'武道初学',qiMult:0.5,goldRate:.05,stage:'凡界',isMortal:true,mortalStage:1},
{name:'暗劲',tier:'凡武',level:2,expNeeded:120,hpBase:80,mpBase:30,atkBase:9,defBase:5,successRate:100,title:'内力初成',qiMult:0.6,goldRate:.08,stage:'凡界',isMortal:true,mortalStage:1},
{name:'化劲',tier:'凡武',level:3,expNeeded:250,hpBase:105,mpBase:42,atkBase:13,defBase:7,successRate:100,title:'化劲通神',qiMult:0.7,goldRate:.12,stage:'凡界',isMortal:true,mortalStage:1},
{name:'宗师',tier:'凡武',level:4,expNeeded:500,hpBase:140,mpBase:58,atkBase:18,defBase:10,successRate:100,title:'一代宗师',qiMult:0.85,goldRate:.16,stage:'凡界',isMortal:true,mortalStage:2},
{name:'大宗师',tier:'凡武',level:5,expNeeded:900,hpBase:185,mpBase:78,atkBase:24,defBase:14,successRate:98,title:'武道巅峰',qiMult:1,goldRate:.22,stage:'凡界',isMortal:true,mortalStage:2},
{name:'蜕凡',tier:'凡武',level:6,expNeeded:1600,hpBase:245,mpBase:105,atkBase:32,defBase:19,successRate:95,title:'脱胎换骨',qiMult:1.2,goldRate:.3,stage:'凡界',isMortal:true,mortalStage:3},
{name:'先天',tier:'凡武',level:7,expNeeded:2800,hpBase:330,mpBase:145,atkBase:43,defBase:26,successRate:88,title:'先天之境',qiMult:1.5,goldRate:.4,stage:'凡界',isMortal:true,mortalStage:3},
{name:'炼气一层',tier:'炼气',level:1,expNeeded:100,hpBase:100,mpBase:50,atkBase:10,defBase:5,successRate:100,title:'初入仙途',qiMult:1,goldRate:.1,stage:'凡界'},
{name:'炼气二层',tier:'炼气',level:2,expNeeded:200,hpBase:120,mpBase:60,atkBase:13,defBase:7,successRate:100,title:'略窥门径',qiMult:1.1,goldRate:.15,stage:'凡界'},
{name:'炼气三层',tier:'炼气',level:3,expNeeded:350,hpBase:145,mpBase:72,atkBase:16,defBase:9,successRate:100,title:'渐入佳境',qiMult:1.2,goldRate:.2,stage:'凡界'},
{name:'炼气四层',tier:'炼气',level:4,expNeeded:550,hpBase:175,mpBase:86,atkBase:20,defBase:11,successRate:98,title:'灵气初凝',qiMult:1.35,goldRate:.25,stage:'凡界'},
{name:'炼气五层',tier:'炼气',level:5,expNeeded:800,hpBase:210,mpBase:102,atkBase:24,defBase:14,successRate:96,title:'灵觉渐开',qiMult:1.5,goldRate:.3,stage:'凡界'},
{name:'炼气六层',tier:'炼气',level:6,expNeeded:1100,hpBase:250,mpBase:120,atkBase:29,defBase:17,successRate:94,title:'气海渐深',qiMult:1.7,goldRate:.35,stage:'凡界'},
{name:'炼气七层',tier:'炼气',level:7,expNeeded:1500,hpBase:300,mpBase:140,atkBase:35,defBase:20,successRate:92,title:'灵脉初通',qiMult:1.9,goldRate:.4,stage:'凡界'},
{name:'炼气八层',tier:'炼气',level:8,expNeeded:2000,hpBase:360,mpBase:165,atkBase:42,defBase:24,successRate:88,title:'周天运转',qiMult:2.1,goldRate:.5,stage:'凡界'},
{name:'炼气九层',tier:'炼气',level:9,expNeeded:2600,hpBase:430,mpBase:195,atkBase:50,defBase:28,successRate:84,title:'气贯周身',qiMult:2.4,goldRate:.6,stage:'凡界'},
{name:'炼气大圆满',tier:'炼气',level:10,expNeeded:3500,hpBase:520,mpBase:230,atkBase:60,defBase:33,successRate:78,title:'半步筑基',qiMult:2.8,goldRate:.7,stage:'凡界'},
{name:'筑基初期',tier:'筑基',level:11,expNeeded:5000,hpBase:650,mpBase:280,atkBase:75,defBase:40,successRate:70,title:'道基初成',qiMult:3.2,goldRate:1,stage:'凡界'},
{name:'筑基中期',tier:'筑基',level:12,expNeeded:7000,hpBase:800,mpBase:340,atkBase:92,defBase:48,successRate:68,title:'根基渐固',qiMult:3.8,goldRate:1.3,stage:'凡界'},
{name:'筑基后期',tier:'筑基',level:13,expNeeded:10000,hpBase:1000,mpBase:420,atkBase:112,defBase:58,successRate:65,title:'道基稳固',qiMult:4.5,goldRate:1.6,stage:'凡界'},
{name:'筑基大圆满',tier:'筑基',level:14,expNeeded:14000,hpBase:1250,mpBase:520,atkBase:138,defBase:70,successRate:55,title:'半步结丹',qiMult:5.2,goldRate:2,stage:'凡界'},
{name:'金丹初期',tier:'金丹',level:15,expNeeded:20000,hpBase:1600,mpBase:650,atkBase:172,defBase:88,successRate:50,title:'金丹初凝',qiMult:6,goldRate:2.5,stage:'凡界'},
{name:'金丹中期',tier:'金丹',level:16,expNeeded:28000,hpBase:2000,mpBase:810,atkBase:215,defBase:108,successRate:48,title:'丹光渐盛',qiMult:7,goldRate:3,stage:'凡界'},
{name:'金丹后期',tier:'金丹',level:17,expNeeded:38000,hpBase:2500,mpBase:1000,atkBase:268,defBase:132,successRate:45,title:'丹火旺盛',qiMult:8.2,goldRate:3.6,stage:'凡界'},
{name:'金丹大圆满',tier:'金丹',level:18,expNeeded:52000,hpBase:3100,mpBase:1250,atkBase:332,defBase:162,successRate:38,title:'半步元婴',qiMult:9.5,goldRate:4.5,stage:'凡界'},
{name:'元婴初期',tier:'元婴',level:19,expNeeded:72000,hpBase:3900,mpBase:1550,atkBase:412,defBase:200,successRate:35,title:'元婴初成',qiMult:11,goldRate:5.5,stage:'凡界'},
{name:'元婴中期',tier:'元婴',level:20,expNeeded:100000,hpBase:4900,mpBase:1950,atkBase:515,defBase:248,successRate:32,title:'婴光四射',qiMult:13,goldRate:7,stage:'凡界'},
{name:'元婴后期',tier:'元婴',level:21,expNeeded:140000,hpBase:6100,mpBase:2450,atkBase:642,defBase:308,successRate:28,title:'婴体凝实',qiMult:15,goldRate:9,stage:'凡界'},
{name:'元婴大圆满',tier:'元婴',level:22,expNeeded:195000,hpBase:7700,mpBase:3050,atkBase:802,defBase:382,successRate:24,title:'半步化神',qiMult:18,goldRate:11,stage:'凡界'},
{name:'化神初期',tier:'化神',level:23,expNeeded:270000,hpBase:9600,mpBase:3800,atkBase:1000,defBase:475,successRate:22,title:'化凡入神',qiMult:21,goldRate:14,stage:'凡界'},
{name:'化神中期',tier:'化神',level:24,expNeeded:370000,hpBase:12000,mpBase:4750,atkBase:1250,defBase:592,successRate:20,title:'神念初成',qiMult:25,goldRate:18,stage:'凡界'},
{name:'化神后期',tier:'化神',level:25,expNeeded:500000,hpBase:15000,mpBase:5900,atkBase:1562,defBase:738,successRate:18,title:'神念大成',qiMult:30,goldRate:22,stage:'凡界'},
{name:'化神大圆满',tier:'化神',level:26,expNeeded:680000,hpBase:18800,mpBase:7400,atkBase:1952,defBase:920,successRate:15,title:'半步合体',qiMult:36,goldRate:28,stage:'凡界'},
{name:'合体初期',tier:'合体',level:27,expNeeded:920000,hpBase:23500,mpBase:9250,atkBase:2440,defBase:1150,successRate:13,title:'天人合一',qiMult:43,goldRate:35,stage:'凡界'},
{name:'合体中期',tier:'合体',level:28,expNeeded:1250000,hpBase:29400,mpBase:11550,atkBase:3050,defBase:1438,successRate:12,title:'合道渐深',qiMult:52,goldRate:44,stage:'凡界'},
{name:'合体后期',tier:'合体',level:29,expNeeded:1700000,hpBase:36700,mpBase:14450,atkBase:3812,defBase:1798,successRate:10,title:'合体圆满',qiMult:62,goldRate:55,stage:'凡界'},
{name:'合体大圆满',tier:'合体',level:30,expNeeded:2300000,hpBase:45900,mpBase:18050,atkBase:4765,defBase:2248,successRate:9,title:'半步渡劫',qiMult:75,goldRate:70,stage:'凡界'},
{name:'渡劫初期',tier:'渡劫',level:31,expNeeded:3100000,hpBase:57400,mpBase:22600,atkBase:5956,defBase:2810,successRate:8,title:'天劫降临',qiMult:90,goldRate:88,stage:'凡界'},
{name:'渡劫中期',tier:'渡劫',level:32,expNeeded:4200000,hpBase:71700,mpBase:28200,atkBase:7445,defBase:3512,successRate:7,title:'劫海沉浮',qiMult:108,goldRate:110,stage:'凡界'},
{name:'渡劫后期',tier:'渡劫',level:33,expNeeded:5700000,hpBase:89700,mpBase:35300,atkBase:9306,defBase:4390,successRate:6,title:'劫后余生',qiMult:130,goldRate:138,stage:'凡界'},
{name:'渡劫大圆满',tier:'大乘',level:34,expNeeded:7700000,hpBase:112000,mpBase:44100,atkBase:11632,defBase:5488,successRate:5,title:'半步大乘',qiMult:156,goldRate:172,stage:'凡界'},
{name:'大乘初期',tier:'大乘',level:35,expNeeded:10400000,hpBase:140000,mpBase:55100,atkBase:14540,defBase:6860,successRate:4,title:'大乘之境',qiMult:187,goldRate:215,stage:'凡界'},
{name:'大乘后期',tier:'大乘',level:36,expNeeded:14000000,hpBase:175000,mpBase:69000,atkBase:18175,defBase:8575,successRate:3,title:'通天彻地',qiMult:225,goldRate:270,stage:'凡界'},
{name:'散仙一转',tier:'散仙',level:37,expNeeded:20000000,hpBase:220000,mpBase:86000,atkBase:22719,defBase:10719,successRate:3,title:'散仙之躯',qiMult:270,goldRate:340,stage:'仙界'},
{name:'散仙三转',tier:'散仙',level:38,expNeeded:30000000,hpBase:275000,mpBase:108000,atkBase:28398,defBase:13398,successRate:2.5,title:'仙体初成',qiMult:324,goldRate:425,stage:'仙界'},
{name:'散仙六转',tier:'散仙',level:39,expNeeded:45000000,hpBase:344000,mpBase:135000,atkBase:35498,defBase:16748,successRate:2,title:'仙道渐明',qiMult:389,goldRate:530,stage:'仙界'},
{name:'散仙九转',tier:'散仙',level:40,expNeeded:68000000,hpBase:430000,mpBase:169000,atkBase:44372,defBase:20935,successRate:1.8,title:'半步真仙',qiMult:467,goldRate:665,stage:'仙界'},
{name:'真仙',tier:'真仙',level:41,expNeeded:100000000,hpBase:537000,mpBase:211000,atkBase:55465,defBase:26169,successRate:1.5,title:'真仙降世',qiMult:560,goldRate:830,stage:'仙界'},
{name:'金仙',tier:'金仙',level:42,expNeeded:150000000,hpBase:672000,mpBase:264000,atkBase:69331,defBase:32711,successRate:1.2,title:'金身不灭',qiMult:672,goldRate:1040,stage:'仙界'},
{name:'太乙金仙',tier:'太乙',level:43,expNeeded:225000000,hpBase:840000,mpBase:330000,atkBase:86664,defBase:40889,successRate:1,title:'太乙归元',qiMult:806,goldRate:1300,stage:'神界'},
{name:'大罗金仙',tier:'大罗',level:44,expNeeded:340000000,hpBase:1050000,mpBase:413000,atkBase:108330,defBase:51111,successRate:.8,title:'大罗不死',qiMult:967,goldRate:1625,stage:'神界'},
{name:'准圣',tier:'准圣',level:45,expNeeded:500000000,hpBase:1312000,mpBase:516000,atkBase:135413,defBase:63889,successRate:.6,title:'圣人门下',qiMult:1160,goldRate:2030,stage:'神界'},
{name:'混元大罗金仙',tier:'混元',level:46,expNeeded:750000000,hpBase:1640000,mpBase:645000,atkBase:169266,defBase:79861,successRate:.5,title:'混元一体',qiMult:1392,goldRate:2540,stage:'神界'},
{name:'天道圣人',tier:'圣人',level:47,expNeeded:1100000000,hpBase:2050000,mpBase:806000,atkBase:211583,defBase:99826,successRate:.4,title:'圣人之尊',qiMult:1670,goldRate:3175,stage:'神界'},
{name:'大道之主',tier:'大道',level:48,expNeeded:1650000000,hpBase:2563000,mpBase:1008000,atkBase:264478,defBase:124783,successRate:.3,title:'执掌大道',qiMult:2004,goldRate:3970,stage:'超脱'},
{name:'天道化身',tier:'天道',level:49,expNeeded:2500000000,hpBase:3203000,mpBase:1260000,atkBase:330598,defBase:155978,successRate:.2,title:'天道合一',qiMult:2405,goldRate:4960,stage:'超脱'},
{name:'虚无之境',tier:'虚无',level:50,expNeeded:9999999999,hpBase:4004000,mpBase:1575000,atkBase:413247,defBase:194973,successRate:.15,title:'超脱虚无',qiMult:2886,goldRate:6200,stage:'超脱'},
];

export const REALM_LIFESPAN: any = [
  // ===== 凡人八境（index 0-7）：凡人寿命，无额外加成 =====
  0,    // 外劲 0 — 凡人武者，总寿命 ~80年
  0,    // 暗劲 1
  0,    // 化劲 2
  0,    // 宗师 3
  0,    // 大宗师 4
  0,    // 蜕凡 5
  0,    // 先天 6
  0,    // 先天（凡武巅峰）7
  // ===== 修仙境界（index 8+）：参考凡人修仙传等修仙小说 =====
  0,    // 炼气一层 8 — 总寿命 ~80年
  10,   // 炼气二层 9
  20,   // 炼气三层 10
  30,   // 炼气四层 11
  40,   // 炼气五层 12
  50,   // 炼气六层 13
  60,   // 炼气七层 14
  70,   // 炼气八层 15
  80,   // 炼气九层 16
  100,  // 炼气大圆满 17 → 炼气总计+100年，总寿命~180年（参考：炼气~150-200年）
  140,  // 筑基初期 18
  190,  // 筑基中期 19
  250,  // 筑基后期 20
  320,  // 筑基大圆满 21 → 筑基总计+320年，总寿命~400年（参考：筑基~200-500年）
  420,  // 金丹初期 22
  550,  // 金丹中期 23
  700,  // 金丹后期 24
  900,  // 金丹大圆满 25 → 金丹总计+900年，总寿命~980年（参考：金丹~500-1000年）
  1100, // 元婴初期 26
  1400, // 元婴中期 27
  1800, // 元婴后期 28
  2200, // 元婴大圆满 29 → 元婴总计+2200年，总寿命~2280年（参考：元婴~800-3000年）
  2800, // 化神初期 30
  3500, // 化神中期 31
  4400, // 化神后期 32
  5500, // 化神大圆满 33 → 化神总计+5500年，总寿命~5580年（参考：化神~2000-5000年）
  7000, // 合体初期 34
  8800, // 合体中期 35
  11000,// 合体后期 36
  13500,// 合体大圆满 37 → 合体总计+13500年，总寿命~13580年（参考：合体~5000-10000年）
  17000,// 渡劫初期 38
  21000,// 渡劫中期 39
  26000,// 渡劫后期 40
  32000,// 渡劫大圆满 41 → 渡劫总计+32000年，总寿命~32080年（参考：渡劫~10000-30000年）
  40000,// 大乘初期 42
  50000,// 大乘后期 43 → 大乘总计+50000年，总寿命~50080年（参考：大乘~30000-50000年）
  65000,// 散仙一转 44
  80000,// 散仙三转 45
  100000,// 散仙六转 46
  130000,// 散仙九转 47
  180000,// 真仙 48
  250000,// 金仙 49
  350000,// 太乙金仙 50
  -1,   // 大罗金仙 51 → 不朽
  -1,   // 准圣 52 → 不朽
  -1,   // 混元大罗金仙 53 → 不朽
  -1,   // 天道圣人 54 → 不朽
  -1,   // 大道之主 55 → 不朽
  -1,   // 天道化身 56 → 不朽
  -1,   // 虚无之境 57 → 不朽
];

export const REALM_PHASES: any = {

  '炼气': { tier: 'qi',   label: '凡境', spiritColor: [80,200,120],  bgGrad: ['#060e08','#0a1a10','#081010'] },
  '凝气': { tier: 'qi',   label: '凡境', spiritColor: [80,200,120],  bgGrad: ['#060e08','#0a1a10','#081010'] },
  '筑基': { tier: 'qi',   label: '凡境', spiritColor: [90,210,130],  bgGrad: ['#060e08','#0a1a10','#081010'] },

  '结丹': { tier: 'jin',  label: '灵境', spiritColor: [201,169,110], bgGrad: ['#0e0c06','#1a1608','#100e08'] },
  '金丹': { tier: 'jin',  label: '灵境', spiritColor: [210,178,120], bgGrad: ['#0e0c06','#1a1608','#100e08'] },

  '元婴': { tier: 'yuan', label: '仙境', spiritColor: [155,89,182],  bgGrad: ['#0a0610','#140a20','#0c0818'] },
  '化神': { tier: 'yuan', label: '仙境', spiritColor: [165,99,192],  bgGrad: ['#0a0610','#140a20','#0c0818'] },

  '炼虚': { tier: 'da',   label: '圣境', spiritColor: [200,80,50],   bgGrad: ['#100606','#1a0a08','#140808'] },
  '合体': { tier: 'da',   label: '圣境', spiritColor: [210,90,60],   bgGrad: ['#100606','#1a0a08','#140808'] },
  '大乘': { tier: 'da',   label: '圣境', spiritColor: [220,100,70],  bgGrad: ['#100606','#1a0a08','#140808'] },

  '渡劫': { tier: 'du',   label: '神境', spiritColor: [180,180,255], bgGrad: ['#060610','#0a0a1a','#080814'] },
  '飞升': { tier: 'du',   label: '神境', spiritColor: [200,200,255], bgGrad: ['#060610','#0a0a1a','#080814'] },
  };

export const REALM_QUALITY_TIERS: any = {
  // 金丹品质 (突破index 14)
  14: { realmName:'金丹', tiers:[
    {name:'杂丹',icon:'⚫',color:'var(--text3)',desc:'五行杂灵根凝结的杂丹，修炼缓慢',bonus:{permAtk:5,permDef:3,maxHp:200,expRate:.03}},
    {name:'三品金丹',icon:'🟡',color:'var(--amber)',desc:'三灵根基凝聚的金丹，中规中矩',bonus:{permAtk:15,permDef:10,maxHp:500,expRate:.08}},
    {name:'二品金丹',icon:'🟠',color:'var(--gold)',desc:'双灵根凝聚的品质金丹，修炼较快',bonus:{permAtk:30,permDef:20,maxHp:1000,expRate:.15}},
    {name:'一品金丹',icon:'🔴',color:'var(--cinnabarG)',desc:'单灵根凝聚的极品金丹，丹光四射',bonus:{permAtk:55,permDef:35,maxHp:2000,expRate:.25}},
    {name:'九转金丹',icon:'💫',color:'var(--violet)',desc:'传说中的九转金丹，万年难遇，大道之基',bonus:{permAtk:100,permDef:60,maxHp:4000,expRate:.4}},
  ]},
  // 元婴品质 (突破index 18)
  18: { realmName:'元婴', tiers:[
    {name:'凡婴',icon:'👶',color:'var(--text3)',desc:'普通元婴，灵力稀薄',bonus:{permAtk:10,permDef:8,maxHp:500,permMp:300,expRate:.04}},
    {name:'赤婴',icon:'🔴',color:'var(--cinnabar)',desc:'火属性元婴，攻击力出众',bonus:{permAtk:30,permDef:15,maxHp:1200,permMp:600,expRate:.1}},
    {name:'金婴',icon:'💛',color:'var(--gold)',desc:'金光闪耀的元婴，全面增幅',bonus:{permAtk:50,permDef:35,maxHp:2500,permMp:1200,expRate:.18}},
    {name:'紫婴',icon:'💜',color:'var(--violet)',desc:'紫气东来的极品元婴，天赋异禀',bonus:{permAtk:80,permDef:55,maxHp:4500,permMp:2200,expRate:.28}},
    {name:'混沌元婴',icon:'🌀',color:'var(--cyan)',desc:'混沌之力凝聚的至高元婴，亘古罕见',bonus:{permAtk:140,permDef:90,maxHp:8000,permMp:4000,expRate:.45}},
  ]},
  // 化神品质 (突破index 22)
  22: { realmName:'化神', tiers:[
    {name:'伪神',icon:'🌫️',color:'var(--text3)',desc:'化神不彻底，神念微弱',bonus:{permAtk:15,permDef:12,maxHp:1000,permMp:500,expRate:.05}},
    {name:'小成神念',icon:'🔵',color:'var(--azure)',desc:'神念初成，可御物千里',bonus:{permAtk:40,permDef:25,maxHp:2500,permMp:1200,expRate:.12}},
    {name:'大成神念',icon:'💎',color:'var(--blue)',desc:'神念大成，一念千里',bonus:{permAtk:70,permDef:50,maxHp:5000,permMp:2500,expRate:.22}},
    {name:'圆满神念',icon:'✨',color:'var(--gold2)',desc:'神念圆满，可分神万千',bonus:{permAtk:110,permDef:80,maxHp:9000,permMp:4500,expRate:.32}},
    {name:'天道神念',icon:'👁️',color:'var(--rose)',desc:'天道赐予的至高神念，洞察万物',bonus:{permAtk:180,permDef:120,maxHp:15000,permMp:7500,expRate:.5}},
  ]},
  // 合体品质 (突破index 26)
  26: { realmName:'合体', tiers:[
    {name:'勉强合体',icon:'🔗',color:'var(--text3)',desc:'元婴与肉身勉强融合，实力有限',bonus:{permAtk:20,permDef:18,maxHp:2000,permMp:800,expRate:.05}},
    {name:'稳固合体',icon:'🟤',color:'var(--amber)',desc:'合体稳固，灵肉合一',bonus:{permAtk:55,permDef:40,maxHp:5000,permMp:2000,expRate:.14}},
    {name:'完美合体',icon:'🟣',color:'var(--violet)',desc:'完美合体，灵肉如一',bonus:{permAtk:95,permDef:70,maxHp:10000,permMp:4000,expRate:.25}},
    {name:'天人合一',icon:'☯️',color:'var(--gold)',desc:'天人合一，与天地共鸣',bonus:{permAtk:150,permDef:110,maxHp:18000,permMp:7000,expRate:.35}},
    {name:'万物归一',icon:'🌌',color:'var(--cyan)',desc:'万物归一，混沌初开之境',bonus:{permAtk:240,permDef:170,maxHp:30000,permMp:12000,expRate:.55}},
  ]},
  // 渡劫品质 (突破index 30)
  30: { realmName:'渡劫', tiers:[
    {name:'险渡',icon:'⚡',color:'var(--text3)',desc:'勉强渡过天劫，伤痕累累',bonus:{permAtk:25,permDef:20,maxHp:3000,permMp:1500,expRate:.06}},
    {name:'平稳渡劫',icon:'🌩️',color:'var(--azure)',desc:'平稳渡劫，根基未损',bonus:{permAtk:70,permDef:50,maxHp:8000,permMp:3500,expRate:.15}},
    {name:'完美渡劫',icon:'⛈️',color:'var(--blue)',desc:'完美渡劫，劫雷淬体',bonus:{permAtk:120,permDef:90,maxHp:16000,permMp:7000,expRate:.28}},
    {name:'九九天劫',icon:'🔥',color:'var(--cinnabarG)',desc:'传说中的九九天劫，渡过后实力暴涨',bonus:{permAtk:200,permDef:140,maxHp:28000,permMp:12000,expRate:.4}},
    {name:'混沌天劫',icon:'💫',color:'var(--rose)',desc:'混沌天劫，以劫证道',bonus:{permAtk:320,permDef:220,maxHp:45000,permMp:20000,expRate:.6}},
  ]},
  // 大乘品质 (突破index 34)
  34: { realmName:'大乘', tiers:[
    {name:'初入大乘',icon:'🏔️',color:'var(--text3)',desc:'初入大乘，尚需磨砺',bonus:{permAtk:35,permDef:28,maxHp:5000,permMp:2500,expRate:.07}},
    {name:'大乘小成',icon:'⛰️',color:'var(--jade)',desc:'大乘小成，神通初显',bonus:{permAtk:90,permDef:70,maxHp:14000,permMp:6000,expRate:.18}},
    {name:'大乘大成',icon:'🗻',color:'var(--azure)',desc:'大乘大成，通天彻地',bonus:{permAtk:160,permDef:120,maxHp:28000,permMp:12000,expRate:.3}},
    {name:'大乘圆满',icon:'🌅',color:'var(--gold)',desc:'大乘圆满，半步飞升',bonus:{permAtk:260,permDef:190,maxHp:50000,permMp:22000,expRate:.45}},
    {name:'无上大乘',icon:'☀️',color:'var(--gold2)',desc:'无上大乘，超越极限，亘古未有',bonus:{permAtk:400,permDef:290,maxHp:80000,permMp:35000,expRate:.65}},
  ]},
  // 仙躯品质 (突破index 36, 散仙)
  36: { realmName:'仙躯', tiers:[
    {name:'凡躯',icon:'🧍',color:'var(--text3)',desc:'仙躯未成，仍是凡胎',bonus:{permAtk:40,permDef:35,maxHp:8000,permMp:4000,expRate:.08}},
    {name:'灵躯',icon:'🧎',color:'var(--jade)',desc:'灵躯初成，脱胎换骨',bonus:{permAtk:120,permDef:90,maxHp:22000,permMp:10000,expRate:.2}},
    {name:'仙灵躯',icon:'🏃',color:'var(--azure)',desc:'仙灵之躯，刀枪不入',bonus:{permAtk:220,permDef:160,maxHp:45000,permMp:20000,expRate:.35}},
    {name:'不灭仙躯',icon:'🦸',color:'var(--gold)',desc:'不灭仙躯，万法不侵',bonus:{permAtk:360,permDef:260,maxHp:80000,permMp:36000,expRate:.5}},
    {name:'先天仙躯',icon:'✨',color:'var(--rose)',desc:'先天仙躯，天地所钟，超越轮回',bonus:{permAtk:550,permDef:400,maxHp:130000,permMp:58000,expRate:.7}},
  ]},
  // 仙魂品质 (特殊)
  'xianhun': { realmName:'仙魂', tiers:[
    {name:'残魂',icon:'👻',color:'var(--text3)',desc:'仙魂残缺，易受神魂攻击',bonus:{permAtk:20,permDef:15,maxHp:3000,permMp:5000,expRate:.05,soulAtk:5}},
    {name:'完整仙魂',icon:'🔮',color:'var(--violet)',desc:'仙魂完整，神念稳固',bonus:{permAtk:60,permDef:45,maxHp:10000,permMp:15000,expRate:.15,soulAtk:15}},
    {name:'纯净仙魂',icon:'💎',color:'var(--azure)',desc:'纯净无瑕的仙魂，神念强大',bonus:{permAtk:120,permDef:90,maxHp:25000,permMp:35000,expRate:.28,soulAtk:30}},
    {name:'不朽仙魂',icon:'🌟',color:'var(--gold)',desc:'不朽仙魂，万劫不灭',bonus:{permAtk:200,permDef:150,maxHp:45000,permMp:60000,expRate:.42,soulAtk:50}},
    {name:'天道仙魂',icon:'☀️',color:'var(--gold2)',desc:'天道仙魂，魂与天齐，至高无上',bonus:{permAtk:320,permDef:240,maxHp:75000,permMp:100000,expRate:.6,soulAtk:80}},
  ]},
};

export const REALM_THEME_MAP: any = { 0:0, 3:1, 6:2, 9:3, 12:4, 15:5, 18:6, 21:7, 24:8 };

export const SUB_BRANCHES: any = [
  {id:'wudao',name:'武道',icon:'👊',color:'var(--red)',
  desc:'以武入道，炼体强身。武道修至高深处，一拳碎星辰，一脚踏虚空。',
  realmNames:['武徒','武者','武师','大武师','武灵','武王','武皇','武帝','武圣','武神'],
  bonusPerLevel:{atkPct:0.025,defPct:0.01,hpPct:0.015},
  totalBonusDesc:'每级攻击+2.5%，防御+1%，气血+1.5%',
  questionBank:'wuDaoQ', // reference to question array
  trainCost:base=>({gold:Math.floor(200*Math.pow(1.8,base)),herbs:Math.floor(10*Math.pow(1.5,base))}),
  trainTime:base=>Math.max(5,15-base), // seconds
  },
  {id:'dandao',name:'丹道',icon:'🔥',color:'var(--orange)',
  desc:'炼丹之道，以丹养道。丹道大成者，可炼仙丹，逆转生死。',
  realmNames:['丹徒','丹者','丹师','大丹师','丹灵','丹王','丹皇','丹帝','丹圣','丹仙'],
  bonusPerLevel:{expRate:0.03,goldRate:0.02},
  totalBonusDesc:'每级修炼速度+3%，灵石获取+2%',
  questionBank:'danDaoQ',
  trainCost:base=>({gold:Math.floor(250*Math.pow(1.8,base)),herbs:Math.floor(20*Math.pow(1.5,base))}),
  trainTime:base=>Math.max(5,15-base),
  },
  {id:'fudao',name:'符道',icon:'📜',color:'var(--cyan)',
  desc:'符箓之道，以符御敌。一符出，天地变色，万法皆破。',
  realmNames:['符徒','符者','符师','大符师','符灵','符王','符皇','符帝','符圣','符仙'],
  bonusPerLevel:{atkPct:0.015,defPct:0.015,expRate:0.02},
  totalBonusDesc:'每级攻击+1.5%，防御+1.5%，修炼速度+2%',
  questionBank:'fuDaoQ',
  trainCost:base=>({gold:Math.floor(220*Math.pow(1.8,base)),herbs:Math.floor(15*Math.pow(1.5,base))}),
  trainTime:base=>Math.max(5,15-base),
  },
  {id:'qidao',name:'器道',icon:'⚒️',color:'var(--blue)',
  desc:'炼器之道，铸造神器。器道大成者，可炼先天灵宝，镇压万界。',
  realmNames:['器徒','器者','器师','大器师','器灵','器王','器皇','器帝','器圣','器仙'],
  bonusPerLevel:{atkPct:0.02,defPct:0.02},
  totalBonusDesc:'每级攻击+2%，防御+2%',
  questionBank:'qiDaoQ',
  trainCost:base=>({gold:Math.floor(280*Math.pow(1.8,base)),herbs:Math.floor(12*Math.pow(1.5,base))}),
  trainTime:base=>Math.max(5,15-base),
  },
  {id:'zhendao',name:'阵道',icon:'📐',color:'var(--purple)',
  desc:'阵法之道，天地为棋。阵道大成者，可布灭世大阵，困仙诛神。',
  realmNames:['阵徒','阵者','阵师','大阵师','阵灵','阵王','阵皇','阵帝','阵圣','阵仙'],
  bonusPerLevel:{defPct:0.03,expRate:0.015},
  totalBonusDesc:'每级防御+3%，修炼速度+1.5%',
  questionBank:'zhenDaoQ',
  trainCost:base=>({gold:Math.floor(230*Math.pow(1.8,base)),herbs:Math.floor(18*Math.pow(1.5,base))}),
  trainTime:base=>Math.max(5,15-base),
  },
  {id:'kuilei',name:'傀儡道',icon:'🤖',color:'var(--text2)',
  desc:'傀儡之道，操控万象。傀儡大成者，可炼仙傀，以一敌万。',
  realmNames:['傀徒','傀者','傀师','大傀师','傀灵','傀王','傀皇','傀帝','傀圣','傀仙'],
  bonusPerLevel:{atkPct:0.015,hpPct:0.02,defPct:0.01},
  totalBonusDesc:'每级攻击+1.5%，气血+2%，防御+1%',
  questionBank:'kuileiQ',
  trainCost:base=>({gold:Math.floor(300*Math.pow(1.8,base)),herbs:Math.floor(15*Math.pow(1.5,base))}),
  trainTime:base=>Math.max(5,15-base),
  },
  {id:'wuwu',name:'巫道',icon:'🩸',color:'#8b0000',
  desc:'巫道之道，沟通天地。巫道大成者，可请祖巫之力，撼天动地。',
  realmNames:['巫徒','巫者','巫师','大巫师','巫灵','巫王','巫皇','巫帝','巫圣','巫神'],
  bonusPerLevel:{hpPct:0.025,atkPct:0.015,expRate:0.01},
  totalBonusDesc:'每级气血+2.5%，攻击+1.5%，修炼速度+1%',
  questionBank:'wuwuQ',
  trainCost:base=>({gold:Math.floor(200*Math.pow(1.8,base)),herbs:Math.floor(25*Math.pow(1.5,base))}),
  trainTime:base=>Math.max(5,15-base),
  },
  {id:'xianghuo',name:'香火道',icon:'🕯️',color:'var(--gold)',
  desc:'香火之道，以信仰成神。香火大成者，凝聚亿万愿力，封神不朽。',
  realmNames:['信徒','祭司','大祭司','神使','神灵','神王','神皇','神帝','神圣','至高神'],
  bonusPerLevel:{expRate:0.025,goldRate:0.025,hpPct:0.01},
  totalBonusDesc:'每级修炼速度+2.5%，灵石+2.5%，气血+1%',
  questionBank:'xianghuoQ',
  trainCost:base=>({gold:Math.floor(180*Math.pow(1.8,base)),herbs:Math.floor(20*Math.pow(1.5,base))}),
  trainTime:base=>Math.max(5,15-base),
  },
  {id:'yushou',name:'御兽道',icon:'🐾',color:'var(--green)',
  desc:'御兽之道，万兽臣服。御兽大成者，可驱神兽，纵横天地。',
  realmNames:['兽徒','兽者','兽师','大兽师','兽灵','兽王','兽皇','兽帝','兽圣','兽神'],
  bonusPerLevel:{atkPct:0.01,defPct:0.01,hpPct:0.01,petBonus:0.03},
  totalBonusDesc:'每级攻击+1%，防御+1%，气血+1%，灵宠+3%',
  questionBank:'yushouQ',
  trainCost:base=>({gold:Math.floor(200*Math.pow(1.8,base)),herbs:Math.floor(15*Math.pow(1.5,base))}),
  trainTime:base=>Math.max(5,15-base),
  }
];

export const SUB_BRANCH_REALMS: any = [
  '初窥门径','小有所成','渐入佳境','融会贯通','炉火纯青',
  '登堂入室','出神入化','一代宗师','超凡入圣','大道圆满'
];

export const CHILD_REALMS: any = [
{name:'凡人',expNeeded:0,atk:0,def:0,hp:50},
{name:'炼体期',expNeeded:200,atk:5,def:3,hp:100},
{name:'凝气期',expNeeded:600,atk:12,def:8,hp:200},
{name:'筑基期',expNeeded:2000,atk:30,def:20,hp:500},
{name:'金丹期',expNeeded:8000,atk:80,def:50,hp:1500},
{name:'元婴期',expNeeded:30000,atk:200,def:130,hp:5000},
{name:'化神期',expNeeded:120000,atk:500,def:320,hp:15000},
{name:'合体期',expNeeded:500000,atk:1200,def:800,hp:50000},
];

export const BOTTLENECKS: any = [
  {realmIndex:10, name:'筑基瓶颈', desc:'从炼气到筑基，需凝聚道基',
  itemNeed:'break_pill', itemCount:1, itemIcon:'💊',
  qualityPenalty:{0:-25,1:-15,2:-8,3:-3,4:0,5:3,6:8,7:12,8:15}},
  {realmIndex:14, name:'结丹瓶颈', desc:'从筑基到金丹，丹田凝聚金丹',
  itemNeed:'break_pill', itemCount:2, itemIcon:'💊',
  qualityPenalty:{0:-30,1:-20,2:-12,3:-5,4:0,5:5,6:10,7:15,8:20}},
  {realmIndex:18, name:'元婴瓶颈', desc:'金丹化婴，元婴出窍',
  itemNeed:'break_pill', itemCount:3, itemIcon:'💊',
  qualityPenalty:{0:-35,1:-25,2:-15,3:-8,4:0,5:5,6:12,7:18,8:25}},
  {realmIndex:22, name:'化神瓶颈', desc:'凡体化神，神念初成',
  itemNeed:'soul_pill', itemCount:2, itemIcon:'🔮',
  qualityPenalty:{0:-40,1:-30,2:-18,3:-10,4:0,5:8,6:15,7:20,8:28}},
  {realmIndex:26, name:'合体瓶颈', desc:'天人合一，道体融合',
  itemNeed:'soul_pill', itemCount:3, itemIcon:'🔮',
  qualityPenalty:{0:-45,1:-35,2:-22,3:-12,4:0,5:8,6:18,7:25,8:32}},
  {realmIndex:30, name:'渡劫瓶颈', desc:'天劫降临，大道考验',
  itemNeed:'soul_pill', itemCount:5, itemIcon:'🔮',
  qualityPenalty:{0:-50,1:-40,2:-28,3:-15,4:0,5:10,6:20,7:28,8:38}},
  {realmIndex:35, name:'大乘瓶颈', desc:'大乘之境，半步飞升',
  itemNeed:'heaven_pill', itemCount:2, itemIcon:'✨',
  qualityPenalty:{0:-55,1:-45,2:-32,3:-18,4:0,5:12,6:22,7:32,8:42}},
  {realmIndex:40, name:'真仙瓶颈', desc:'超凡入圣，成就真仙',
  itemNeed:'heaven_pill', itemCount:3, itemIcon:'✨',
  qualityPenalty:{0:-60,1:-50,2:-35,3:-20,4:0,5:15,6:28,7:38,8:48}},
  {realmIndex:45, name:'准圣瓶颈', desc:'圣人门下，半步圣境',
  itemNeed:'heaven_pill', itemCount:5, itemIcon:'✨',
  qualityPenalty:{0:-65,1:-55,2:-40,3:-25,4:0,5:18,6:32,7:42,8:52}},
  {realmIndex:49, name:'天道瓶颈', desc:'天道合一，终极蜕变',
  itemNeed:'heaven_pill', itemCount:8, itemIcon:'✨',
  qualityPenalty:{0:-70,1:-60,2:-45,3:-30,4:0,5:20,6:38,7:50,8:60}},
];

export const CULTIVATION_BRANCHES: any = [
{id:'human_normal',name:'人族正道',icon:'☯️',desc:'正统人族修炼，均衡稳健',path:'human',
  realmNames:['外劲','暗劲','化劲','宗师','大宗师','蜕凡','先天','炼气一层','炼气九层','炼气大圆满','筑基初期','筑基中期','筑基后期','筑基大圆满','金丹初期','金丹中期','金丹后期','金丹大圆满','元婴初期','元婴中期','元婴后期','元婴大圆满','化神初期','化神中期','化神后期','化神大圆满','合体初期','合体中期','合体后期','合体大圆满','渡劫初期','渡劫中期','渡劫后期','大乘初期','大乘后期','散仙一转','散仙三转','散仙六转','散仙九转','真仙','金仙','太乙金仙','大罗金仙','准圣','混元大罗金仙','天道圣人','大道之主','天道化身','虚无之境','道之极境'],
  bonus:{expRate:.1},tribulationType:'normal',
  techniques:[
  {name:'吐纳术',grade:'凡级',desc:'最基础的修炼法门',bonus:.05,reqRealm:0,combatBonus:{}},
  {name:'青云诀',grade:'黄级',desc:'正道基础功法',bonus:.15,reqRealm:3,combatBonus:{def:.05}},
  {name:'太上清心诀',grade:'玄级',desc:'道家正统，清心寡欲',bonus:.25,reqRealm:10,combatBonus:{def:.1}},
  {name:'八荒六合功',grade:'地级',desc:'上古大能所创',bonus:.4,reqRealm:18,combatBonus:{atk:.15,def:.1}},
  {name:'鸿蒙造化功',grade:'至高',desc:'鸿蒙初开的无上功法',bonus:1.0,reqRealm:35,combatBonus:{atk:.3,def:.2}},
  ]},
{id:'yao_demon',name:'妖修',icon:'🦊',desc:'妖族修炼，化形渡劫，蜕变为更强形态',path:'beast',
  realmNames:['兽性本能','通灵启智','灵识初开','吞吐日精','妖气凝体','化形前兆','形体蜕变','妖丹凝聚','凝丹中期','凝丹后期','凝丹圆满','化形初期','化形中期','化形后期','化形圆满','妖婴初期','妖婴中期','妖婴后期','妖婴圆满','妖王初期','妖王中期','妖王后期','妖王圆满','妖皇初期','妖皇中期','妖皇后期','妖皇圆满','妖帝初期','妖帝中期','妖帝后期','妖帝圆满','妖圣初期','妖圣中期','妖圣后期','妖圣后期','妖圣后期','妖仙一转','妖仙三转','妖仙六转','妖仙九转','妖神','大妖','天妖','圣妖','妖祖','万妖之主','妖道','妖天道','妖天','妖无'],
  bonus:{atk:.15,hp:.1,petBonus:.25},tribulationType:'demon_heavenly',
  techniques:[
  {name:'吞吐日精月华',grade:'凡级',desc:'妖族基础修炼',bonus:.06,reqRealm:0,combatBonus:{}},
  {name:'妖元凝丹诀',grade:'黄级',desc:'凝聚妖丹',bonus:.18,reqRealm:3,combatBonus:{atk:.08}},
  {name:'化形天功',grade:'玄级',desc:'化形之法，脱胎换骨',bonus:.3,reqRealm:10,combatBonus:{atk:.12,hp:.08}},
  {name:'万妖噬天诀',grade:'地级',desc:'吞噬万妖精华',bonus:.45,reqRealm:18,combatBonus:{atk:.2,hp:.12}},
  {name:'妖祖真经',grade:'至高',desc:'妖族始祖功法',bonus:1.1,reqRealm:35,combatBonus:{atk:.35,hp:.2}},
  ]},
{id:'gui_ghost',name:'鬼修',icon:'👻',desc:'以魂入道，修炼阴神，掌控幽冥之力',path:'hungry_ghost',
  realmNames:['游魂飘荡','聚阴成形','鬼气森森','厉鬼凶煞','怨念凝聚','阴神初显','幽冥感应','鬼丹凝聚','聚魂八层','聚魂九层','聚魂圆满','凝魄初期','凝魄中期','凝魄后期','凝魄圆满','阴神初期','阴神中期','阴神后期','阴神圆满','鬼婴初期','鬼婴中期','鬼婴后期','鬼婴圆满','鬼王初期','鬼王中期','鬼王后期','鬼王圆满','鬼帝初期','鬼帝中期','鬼帝后期','鬼帝圆满','鬼仙初期','鬼仙中期','鬼仙后期','冥神初期','冥神后期','幽冥一转','幽冥三转','幽冥六转','幽冥九转','鬼圣','冥帝','幽冥之主','万鬼之祖','阴天道','冥天','幽冥大道','冥天道','冥天','幽无'],
  bonus:{mp:.2,expRate:.15,def:-.05},tribulationType:'yin_thunder',
  techniques:[
  {name:'聚魂诀',grade:'凡级',desc:'凝聚魂魄之力',bonus:.06,reqRealm:0,combatBonus:{}},
  {name:'阴神凝魄功',grade:'黄级',desc:'修炼阴神',bonus:.2,reqRealm:3,combatBonus:{mp:.1}},
  {name:'幽冥鬼诀',grade:'玄级',desc:'掌控幽冥之力',bonus:.32,reqRealm:10,combatBonus:{atk:.1,mp:.15}},
  {name:'万鬼朝宗功',grade:'地级',desc:'万鬼臣服，冥界至尊',bonus:.48,reqRealm:18,combatBonus:{atk:.18,mp:.2}},
  {name:'幽冥大道经',grade:'至高',desc:'幽冥大道，生死之主',bonus:1.15,reqRealm:35,combatBonus:{atk:.25,mp:.3}},
  ]},
{id:'hun_soul',name:'魂修',icon:'🌀',desc:'以神魂为核心，修炼元神，魂力无双',path:'hungry_ghost',
  realmNames:['凡魂初觉','凝魂聚魄','魂力增长','识海扩张','神念初成','魂火淬炼','元神雏形','魂丹凝聚','凝魂八层','凝魂九层','凝魂圆满','养魂初期','养魂中期','养魂后期','养魂圆满','壮魂初期','壮魂中期','壮魂后期','壮魂圆满','神魂初期','神魂中期','神魂后期','神魂圆满','元神初期','元神中期','元神后期','元神圆满','神王初期','神王中期','神王后期','神王圆满','神帝初期','神帝中期','神帝后期','神尊初期','神尊后期','神祖一转','神祖三转','神祖六转','神祖九转','神道','至神','超神','无上神','神天道','魂天','魂大道','魂天道','魂天','魂无'],
  bonus:{mp:.25,expRate:.2,atk:-.05},tribulationType:'soul_tribulation',
  techniques:[
  {name:'凝魂诀',grade:'凡级',desc:'凝聚神魂之力',bonus:.07,reqRealm:0,combatBonus:{}},
  {name:'养魂秘典',grade:'黄级',desc:'温养元神',bonus:.22,reqRealm:3,combatBonus:{mp:.12}},
  {name:'万魂归宗诀',grade:'玄级',desc:'万魂之力汇聚一身',bonus:.35,reqRealm:10,combatBonus:{atk:.08,mp:.18}},
  {name:'元神不灭功',grade:'地级',desc:'元神不灭，超越肉身',bonus:.52,reqRealm:18,combatBonus:{mp:.25,def:.1}},
  {name:'太虚神魂经',grade:'至高',desc:'太虚神魂，超越一切',bonus:1.2,reqRealm:35,combatBonus:{mp:.35,atk:.15}},
  ]},
{id:'fo_buddha',name:'佛修',icon:'🙏',desc:'修佛悟道，以慈悲度化，以金刚护体',path:'human',
  realmNames:['俗家弟子','持戒修身','禅定入门','般若初开','心经渐悟','佛光初现','慈悲入心','沙弥圆满','沙弥八层','沙弥九层','沙弥圆满','比丘初期','比丘中期','比丘后期','比丘圆满','罗汉初期','罗汉中期','罗汉后期','罗汉圆满','金刚初期','金刚中期','金刚后期','金刚圆满','菩萨初期','菩萨中期','菩萨后期','菩萨圆满','佛陀初期','佛陀中期','佛陀后期','佛陀圆满','佛祖初期','佛祖中期','佛祖后期','如来初期','如来后期','过去佛一转','过去佛三转','过去佛六转','过去佛九转','现在佛','未来佛','万佛之祖','佛道','佛天道','佛天','佛大道','佛天道','佛天','佛无'],
  bonus:{hp:.2,def:.15,expRate:.1,atk:-.05},tribulationType:'buddha_tribulation',
  techniques:[
  {name:'般若心经',grade:'凡级',desc:'佛门基础心法',bonus:.05,reqRealm:0,combatBonus:{def:.05}},
  {name:'金刚不坏体',grade:'黄级',desc:'金刚护体，万法不侵',bonus:.18,reqRealm:3,combatBonus:{def:.15,hp:.08}},
  {name:'大日如来经',grade:'玄级',desc:'如来神功，佛光普照',bonus:.3,reqRealm:10,combatBonus:{def:.2,hp:.12}},
  {name:'万佛朝宗功',grade:'地级',desc:'万佛之力汇聚',bonus:.45,reqRealm:18,combatBonus:{def:.25,hp:.18,atk:.1}},
  {name:'大乘佛法经',grade:'至高',desc:'大乘佛法，超脱轮回',bonus:1.0,reqRealm:35,combatBonus:{def:.35,hp:.25,atk:.15}},
  ]},
{id:'ru_confucian',name:'儒修',icon:'📚',desc:'以文入道，以理服人，浩然正气',path:'human',
  realmNames:['读书明理','格物致知','修身养性','正心诚意','齐家有道','知行合一','浩然初养','童生圆满','童生八层','童生九层','童生圆满','秀才初期','秀才中期','秀才后期','秀才圆满','举人初期','举人中期','举人后期','举人圆满','进士初期','进士中期','进士后期','进士圆满','翰林初期','翰林中期','翰林后期','翰林圆满','大儒初期','大儒中期','大儒后期','大儒圆满','圣儒初期','圣儒中期','圣儒后期','儒圣初期','儒圣中期','儒圣后期','文圣一转','文圣三转','文圣六转','文圣九转','儒道','儒天道','儒大道','儒天道','儒天一层','儒天二层','儒天三层','儒天四层','儒无'],
  bonus:{expRate:.25,mp:.1,def:.05,goldRate:.1},tribulationType:'literary_tribulation',
  techniques:[
  {name:'三字经',grade:'凡级',desc:'儒家入门经典',bonus:.06,reqRealm:0,combatBonus:{}},
  {name:'论语心法',grade:'黄级',desc:'以论语入道',bonus:.2,reqRealm:3,combatBonus:{mp:.08}},
  {name:'浩然正气诀',grade:'玄级',desc:'浩然正气，万邪不侵',bonus:.32,reqRealm:10,combatBonus:{def:.12,mp:.1}},
  {name:'春秋笔法',grade:'地级',desc:'笔伐天下，以文诛邪',bonus:.48,reqRealm:18,combatBonus:{atk:.2,mp:.15}},
  {name:'圣人之道',grade:'至高',desc:'圣人之言，天地法则',bonus:1.05,reqRealm:35,combatBonus:{atk:.25,def:.2,mp:.2}},
  ]},
{id:'xie_evil',name:'邪修',icon:'☠️',desc:'以邪入道，不择手段，吞噬天地',path:'hell',
  realmNames:['邪念萌生','阴气入体','邪功初成','蛊惑人心','吞噬灵气','邪气冲天','万邪归心','邪徒圆满','邪徒八层','邪徒九层','邪徒圆满','邪师初期','邪师中期','邪师后期','邪师圆满','邪王初期','邪王中期','邪王后期','邪王圆满','邪帝初期','邪帝中期','邪帝后期','邪帝圆满','邪圣初期','邪圣中期','邪圣后期','邪圣圆满','邪祖初期','邪祖中期','邪祖后期','邪祖圆满','邪道初期','邪道中期','邪道后期','邪天初期','邪天中期','邪天后期','邪无一转','邪无三转','邪无六转','邪无九转','邪道','邪天道','邪大道','邪天道','邪天一层','邪天二层','邪天三层','邪天四层','邪无'],
  bonus:{atk:.2,expRate:.15,hp:-.05},tribulationType:'evil_tribulation',
  techniques:[
  {name:'噬魂邪功',grade:'凡级',desc:'吞噬他人魂力修炼',bonus:.08,reqRealm:0,combatBonus:{atk:.05}},
  {name:'血祭大法',grade:'黄级',desc:'以血祭之力修炼',bonus:.22,reqRealm:3,combatBonus:{atk:.12}},
  {name:'万邪归宗诀',grade:'玄级',desc:'万邪之力汇聚',bonus:.38,reqRealm:10,combatBonus:{atk:.18,hp:-.03}},
  {name:'邪帝噬天功',grade:'地级',desc:'邪帝之法，吞噬天地',bonus:.55,reqRealm:18,combatBonus:{atk:.28}},
  {name:'大自在邪经',grade:'至高',desc:'大自在邪道，无法无天',bonus:1.25,reqRealm:35,combatBonus:{atk:.4}},
  ]},
{id:'mo_demon',name:'魔修',icon:'😈',desc:'以魔入道，魔威盖世，焚天灭地',path:'hell',
  realmNames:['魔念初生','魔气入体','魔功小成','噬心入魔','魔焰焚身','魔威初显','万魔涌动','魔徒圆满','魔徒八层','魔徒九层','魔徒圆满','魔兵初期','魔兵中期','魔兵后期','魔兵圆满','魔将初期','魔将中期','魔将后期','魔将圆满','魔王初期','魔王中期','魔王后期','魔王圆满','魔皇初期','魔皇中期','魔皇后期','魔皇圆满','魔帝初期','魔帝中期','魔帝后期','魔帝圆满','魔圣初期','魔圣中期','魔圣后期','魔祖初期','魔祖中期','魔祖后期','天魔一转','天魔三转','天魔六转','天魔九转','大自在天魔','魔道','魔天道','魔大道','魔天道','魔天一层','魔天二层','魔天三层','魔无'],
  bonus:{atk:.25,expRate:.1,def:-.08},tribulationType:'demon_tribulation',
  techniques:[
  {name:'魔心诀',grade:'凡级',desc:'魔道入门心法',bonus:.07,reqRealm:0,combatBonus:{atk:.05}},
  {name:'天魔功',grade:'黄级',desc:'天魔之力',bonus:.22,reqRealm:3,combatBonus:{atk:.15}},
  {name:'大自在天魔功',grade:'玄级',desc:'大自在天魔',bonus:.4,reqRealm:10,combatBonus:{atk:.22}},
  {name:'万魔噬天诀',grade:'地级',desc:'万魔之力吞噬天地',bonus:.58,reqRealm:18,combatBonus:{atk:.32}},
  {name:'魔祖真经',grade:'至高',desc:'魔族始祖功法',bonus:1.3,reqRealm:35,combatBonus:{atk:.45}},
  ]},
];

export const MARTIAL_REALMS: any = [
// 凡人阶段：弃仙修武后的起点，需蜕凡后才能晋升一品武者
{name:'凡人武者',tier:'凡武',level:0,expNeeded:500,hpBase:100,mpBase:50,atkBase:10,defBase:5,successRate:100,title:'弃仙入凡',qiMult:1,goldRate:.3,stage:'凡界',isMartial:true,isMortal:true,martialStage:0},
// 一品~九品：凡界武道
{name:'一品武者',tier:'武道',level:1,expNeeded:5000,hpBase:500,mpBase:180,atkBase:65,defBase:38,successRate:90,title:'武道入门',qiMult:2,goldRate:.8,stage:'凡界',isMartial:true,martialStage:1},
{name:'二品武士',tier:'武道',level:2,expNeeded:15000,hpBase:1200,mpBase:420,atkBase:155,defBase:90,successRate:85,title:'武道精进',qiMult:4,goldRate:2,stage:'凡界',isMartial:true,martialStage:1},
{name:'三品武师',tier:'武道',level:3,expNeeded:45000,hpBase:3000,mpBase:1050,atkBase:390,defBase:225,successRate:78,title:'武道有成',qiMult:8,goldRate:5,stage:'凡界',isMartial:true,martialStage:2},
{name:'四品武将',tier:'武道',level:4,expNeeded:130000,hpBase:7500,mpBase:2650,atkBase:975,defBase:565,successRate:70,title:'武道将领',qiMult:16,goldRate:12,stage:'凡界',isMartial:true,martialStage:2},
{name:'五品武王',tier:'武道',level:5,expNeeded:380000,hpBase:19000,mpBase:6700,atkBase:2450,defBase:1420,successRate:60,title:'武道之王',qiMult:32,goldRate:30,stage:'凡界',isMartial:true,martialStage:3},
{name:'六品武宗',tier:'武道',level:6,expNeeded:1100000,hpBase:48000,mpBase:17000,atkBase:6200,defBase:3600,successRate:50,title:'开宗立派',qiMult:64,goldRate:75,stage:'凡界',isMartial:true,martialStage:3},
{name:'七品密宗',tier:'武道',level:7,expNeeded:3200000,hpBase:120000,mpBase:42500,atkBase:15500,defBase:9000,successRate:42,title:'密宗传承',qiMult:128,goldRate:190,stage:'凡界',isMartial:true,martialStage:4},
{name:'八品武圣',tier:'武道',level:8,expNeeded:9500000,hpBase:300000,mpBase:106000,atkBase:39000,defBase:22500,successRate:35,title:'武道圣者',qiMult:256,goldRate:475,stage:'仙界',isMartial:true,martialStage:4},
{name:'九品武圣',tier:'武道',level:9,expNeeded:28000000,hpBase:750000,mpBase:265000,atkBase:97500,defBase:56500,successRate:28,title:'圣者巅峰',qiMult:512,goldRate:1200,stage:'仙界',isMartial:true,martialStage:5},
// 十品~十四品：仙界武道
{name:'十品天人',tier:'武道',level:10,expNeeded:82000000,hpBase:1900000,mpBase:670000,atkBase:247000,defBase:143000,successRate:22,title:'天人合一',qiMult:1024,goldRate:3000,stage:'仙界',isMartial:true,martialStage:5},
{name:'十一品星云',tier:'武道',level:11,expNeeded:240000000,hpBase:4800000,mpBase:1700000,atkBase:624000,defBase:361000,successRate:16,title:'星云之力',qiMult:2048,goldRate:7500,stage:'神界',isMartial:true,martialStage:6},
{name:'十二品神主',tier:'武道',level:12,expNeeded:700000000,hpBase:12000000,mpBase:4250000,atkBase:1560000,defBase:903000,successRate:12,title:'武道神主',qiMult:4096,goldRate:19000,stage:'神界',isMartial:true,martialStage:6},
{name:'十三品道恒',tier:'武道',level:13,expNeeded:2100000000,hpBase:30000000,mpBase:10600000,atkBase:3900000,defBase:2258000,successRate:8,title:'道之恒久',qiMult:8192,goldRate:48000,stage:'神界',isMartial:true,martialStage:7},
{name:'十四品天穹',tier:'武道',level:14,expNeeded:6200000000,hpBase:75000000,mpBase:26500000,atkBase:9750000,defBase:5645000,successRate:5,title:'天穹至尊',qiMult:16384,goldRate:120000,stage:'超脱',isMartial:true,martialStage:7},
// 十五品~十八品：超脱武道
{name:'十五品永存',tier:'武道',level:15,expNeeded:18000000000,hpBase:190000000,mpBase:67000000,atkBase:24700000,defBase:14300000,successRate:3.5,title:'永恒不灭',qiMult:32768,goldRate:300000,stage:'超脱',isMartial:true,martialStage:8},
{name:'十六品至尊',tier:'武道',level:16,expNeeded:55000000000,hpBase:480000000,mpBase:170000000,atkBase:62400000,defBase:36100000,successRate:2.5,title:'武道至尊',qiMult:65536,goldRate:750000,stage:'超脱',isMartial:true,martialStage:8},
{name:'十七品封号至尊',tier:'武道',level:17,expNeeded:165000000000,hpBase:1200000000,mpBase:425000000,atkBase:156000000,defBase:90300000,successRate:1.8,title:'封号至尊',qiMult:131072,goldRate:1900000,stage:'超脱',isMartial:true,martialStage:9,isSeventeen:true},
{name:'十八品宇宙大帝',tier:'武道',level:18,expNeeded:999999999999,hpBase:5000000000,mpBase:1750000000,atkBase:650000000,defBase:375000000,successRate:1,title:'宇宙大帝',qiMult:262144,goldRate:5000000,stage:'超脱',isMartial:true,martialStage:9,isEighteen:true},
];

export const MAJOR_TRANSITIONS: any = {
  10:{fromTier:'炼气',toTier:'筑基',name:'凝气化基',game:'balatro',icon:'🃏'},
  14:{fromTier:'筑基',toTier:'金丹',name:'结丹天象',game:'balatro',icon:'🃏'},
  18:{fromTier:'金丹',toTier:'元婴',name:'碎丹成婴',game:'balatro',icon:'🃏'},
  22:{fromTier:'元婴',toTier:'化神',name:'化凡入神',game:'balatro',icon:'🃏'},
  26:{fromTier:'化神',toTier:'合体',name:'天人合一',game:'balatro',icon:'🃏'},
  30:{fromTier:'合体',toTier:'渡劫',name:'渡劫飞升',game:'balatro',icon:'🃏'},
  34:{fromTier:'渡劫',toTier:'大乘',name:'证道大乘',game:'balatro',icon:'🃏'},
  36:{fromTier:'大乘',toTier:'散仙',name:'散仙劫起',game:'balatro',icon:'🃏'},
};

export const BASE_LIFESPAN: any = 80;

export const CONSTITUTION_LIFESPAN: any = {
  '凡体':0, '虚弱体':-0.2, '后天体':0.05,
  '强壮体':0.1, '灵觉体':0.08, '疾风体':0.05, '厚土体':0.15,
  '寒冰体':0.1, '烈阳体':0.05, '玄阴体':0.15, '金刚体':0.2,
  '灵木体':0.3, '锐金体':0.05, '重土体':0.2, '雷霆体':0.08, '龙象体':0.15,
  '五行体':0.25, '天雷体':0.1, '九阴体':0.3, '九阳体':0.25,
  '幽冥体':0.2, '圣光体':0.2, '毒体':0.15, '风灵体':0.12,
  '地灵体':0.3, '火灵体':0.1, '水灵体':0.25, '木灵体':0.4, '金灵体':0.1, '土灵体':0.3,
  '冰魄体':0.2, '赤炎体':0.1,
  '先天道体':0.5, '混元体':0.4, '星辰体':0.5, '日月体':0.6,
  '万毒不侵体':0.3, '天魔体':0.2, '真龙体':5, '真凤体':4,
  '天罡体':0.3, '地煞体':0.2, '不灭体':1, '噬灵体':0.3, '天命体':0.4,
  '轮回体':2, '无垢体':0.5, '剑体':0.15, '万兽体':0.3,
  '混沌体':3, '鸿蒙体':5, '太虚体':3, '荒体':2, '苍天霸体':1.5,
  '荒古圣体':3, '太阳体':2, '太阴体':3, '虚空体':3, '因果体':4,
  '命运体':5, '时间体':10, '空间体':3, '不朽体':-1, '万法体':3,
  '先天圣体道胎':8, '至尊体':5, '大帝体':5, '仙王体':6,
  '无上体':8, '禁忌体':3, '归墟体':5, '创世体':-1, '虚无体':-1, '大道体':-1,
};

export const TECHNIQUE_LIFESPAN: any = {'凡级':5,'黄级':15,'玄级':40,'地级':100,'天级':300,'仙级':1000,'神级':3000,'至高':10000};

export function getRealm(index: number): any {
  return REALMS[Math.min(index, REALMS.length - 1)] || REALMS[0];
}

export function getNextRealm(index: number): any | null {
  return index + 1 < REALMS.length ? REALMS[index + 1] : null;
}

export function formatRealm(index: number): string {
  const r = getRealm(index);
  return `${r.tier}·${r.name}`;
}
