export const ADVENTURES: any = [
{name:'采药奇遇',desc:'你在山中发现了一片灵药园。',choices:[{text:'小心翼翼采集',result:'herbs',value:5,risk:0},{text:'全部搜刮',result:'herbs',value:15,risk:.3,badResult:'被守护妖兽发现',badEffect:{hpLoss:.2}}]},
{name:'神秘洞府',desc:'你发现一座被藤蔓覆盖的古老洞府。',choices:[{text:'谨慎探查',result:'gold',value:50,risk:.1,badResult:'触发禁制',badEffect:{mpLoss:.3}},{text:'全力破阵',result:'technique',value:1,risk:.4,badResult:'阵法反噬',badEffect:{hpLoss:.4}}]},
{name:'高人指路',desc:'一位白发老者在路边打坐。',choices:[{text:'恭敬请教',result:'exp',value:300,risk:0},{text:'赠送灵草求指点',result:'exp',value:800,risk:.1,cost:{herbs:5},badResult:'老者不屑一顾',badEffect:{}}]},
{name:'妖兽拦路',desc:'一只凶恶的妖兽挡住了去路。',choices:[{text:'绕路而行',result:'safe',value:0,risk:0},{text:'斩杀妖兽',result:'gold',value:30,risk:.3,badResult:'被妖兽重伤',badEffect:{hpLoss:.5}}]},
{name:'上古遗迹',desc:'你发现了上古遗迹的入口。',choices:[{text:'进入探索',result:'relic',value:1,risk:.2,badResult:'遗迹崩塌',badEffect:{hpLoss:.3}},{text:'门口搜索',result:'gold',value:20,risk:0}]},
{name:'仙人传承',desc:'一块石碑上刻着玄奥文字。',choices:[{text:'参悟石碑',result:'technique',value:1,risk:.15,badResult:'心神受损',badEffect:{expLoss:.1}},{text:'拓印带走',result:'safe',value:0,risk:0}]},
{name:'夺舍危机',desc:'一道残魂侵入识海！',choices:[{text:'全力抵抗',result:'exp',value:500,risk:.3,badResult:'识海受损',badEffect:{hpLoss:.4,mpLoss:.3}},{text:'灵力驱散',result:'safe',value:0,risk:.1,cost:{mp:.3},badResult:'灵力大损',badEffect:{mpLoss:.5}}]},
{name:'灵矿发现',desc:'你发现了灵石矿脉露头。',choices:[{text:'小心开采',result:'gold',value:80,risk:0},{text:'爆破开采',result:'gold',value:200,risk:.3,badResult:'矿洞坍塌',badEffect:{hpLoss:.3}}]},
{name:'宗门招揽',desc:'一个修仙宗门正在招收弟子。',choices:[{text:'加入宗门',result:'sect',value:1,risk:0},{text:'婉言谢绝',result:'exp',value:100,risk:0}]},
{name:'渡劫感悟',desc:'天雷轰鸣，你感悟到天地法则。',choices:[{text:'闭关参悟',result:'exp',value:1000,risk:.1,badResult:'心魔入侵',badEffect:{hpLoss:.2,expLoss:.05}},{text:'记录感悟',result:'gold',value:50,risk:0}]},
{name:'秘境开启',desc:'天降异象，秘境入口出现。',choices:[{text:'闯入秘境',result:'relic',value:2,risk:.25,badResult:'禁制击伤',badEffect:{hpLoss:.5}},{text:'入口等待',result:'herbs',value:8,risk:0}]},
{name:'渡劫者遗物',desc:'你发现渡劫失败者的遗物。',choices:[{text:'收取遗物',result:'gold',value:100,risk:.1,badResult:'怨念侵蚀',badEffect:{hpLoss:.2}},{text:'超度亡魂',result:'exp',value:400,risk:0}]},
];

export const ALL_DEBUFFS: any = [

  {id:'meridian_block',name:'经脉阻塞',icon:'🌀',desc:'灵气运转不畅，无法正常攻击和防御',affectedPart:'meridians',duration:30,damagePerTick:0,damageType:'stat',statPenalty:{expRate:-30,atk:-50,def:-50},source:'灵气冲撞经脉',triggerDesc:'连续高强度修炼超过30秒',healDesc:'静养30秒或服用通脉丹'},
  {id:'meridian_break',name:'经脉断裂',icon:'💥',desc:'灵气外泄，经脉断裂无法攻击防御修炼',affectedPart:'meridians',duration:60,damagePerTick:1,damageType:'mp_pct',statPenalty:{mp:-20,atk:-80,def:-80,expRate:-60},source:'突破时灵气暴走',triggerDesc:'突破失败',healDesc:'闭关疗伤60秒或服用续脉丹'},
  {id:'qi_deviation',name:'走火入魔',icon:'😵',desc:'随机属性波动±20%',affectedPart:'meridians',duration:45,damagePerTick:0,damageType:'stat',statPenalty:{atk:-10,def:-10,expRate:-15},source:'功法与灵根不匹配',triggerDesc:'使用不匹配功法修炼',healDesc:'服用清心丹或静修45秒'},
  {id:'qi_backlash',name:'灵气反噬',icon:'🔥',desc:'每秒受到灵气上限2%的真实伤害',affectedPart:'meridians',duration:20,damagePerTick:2,damageType:'mp_pct_true',statPenalty:{},source:'修炼速度超过身体承受极限',triggerDesc:'修炼速度>身体耐受度2倍',healDesc:'立即停止修炼20秒'},
  {id:'meridian_reverse',name:'经脉逆行',icon:'↩️',desc:'经脉逆转导致攻击力大幅下降',affectedPart:'meridians',duration:40,damagePerTick:0,damageType:'stat',statPenalty:{atk:-50},source:'被外力逆转经脉',triggerDesc:'受到高强度内力攻击',healDesc:'服用顺气丹或静养40秒'},
  {id:'meridian_mp_drain',name:'灵力外泄',icon:'🌀',desc:'经脉受损导致灵力持续流失',affectedPart:'meridians',duration:60,damagePerTick:1.5,damageType:'mp_pct',statPenalty:{mpRegen:-30},source:'经脉遭受冲击受损',triggerDesc:'经脉HP下降',healDesc:'等待60秒经脉自行修复或服用续脉丹'},

  {id:'muscle_strain',name:'肌肉拉伤',icon:'😣',desc:'肌肉组织撕裂，发力疼痛',affectedPart:'muscles',duration:25,damagePerTick:0.3,damageType:'hp_pct',statPenalty:{atk:-25},source:'过度发力',triggerDesc:'短时间内连续战斗超过20秒',healDesc:'休息25秒或服用活血丹'},
  {id:'muscle_fatigue',name:'肌肉劳损',icon:'😫',desc:'长期重复动作导致劳损',affectedPart:'muscles',duration:60,damagePerTick:0,damageType:'stat',statPenalty:{atk:-15,hpRegen:-50},source:'长期重复动作',triggerDesc:'连续战斗超过60秒',healDesc:'停止战斗60秒或服用舒筋丹'},
  {id:'tendon_snap',name:'肌腱断裂',icon:'🩸',desc:'肌腱断裂导致肢体功能丧失',affectedPart:'muscles',duration:90,damagePerTick:0.5,damageType:'hp_pct',statPenalty:{atk:-40,def:-10},source:'极限负荷',triggerDesc:'肢体HP<10%时仍战斗',healDesc:'服用接骨丹并闭关90秒'},
  {id:'muscle_atrophy',name:'肌肉萎缩',icon:'🦴',desc:'长期不运动导致肌肉萎缩',affectedPart:'muscles',duration:120,damagePerTick:0,damageType:'stat',statPenalty:{atk:-20,def:-10},source:'长期不运动',triggerDesc:'连续挂机超过24小时不战斗',healDesc:'进行战斗或服用强体丹'},

  {id:'bone_crack',name:'骨裂',icon:'🦴',desc:'骨骼出现裂纹',affectedPart:'bones',duration:30,damagePerTick:0,damageType:'stat',statPenalty:{def:-20},source:'高强度冲击',triggerDesc:'受到超过防御力150%的单次伤害',healDesc:'休息30秒或服用壮骨丹'},
  {id:'bone_fracture',name:'骨折',icon:'🦴',desc:'骨骼完全断裂',affectedPart:'bones',duration:60,damagePerTick:0.3,damageType:'hp_pct',statPenalty:{def:-40,maxHp:-30},source:'巨大外力撞击',triggerDesc:'单次受到超过300%防御力伤害',healDesc:'服用续骨丹并闭关60秒'},
  {id:'bone_shatter',name:'粉碎性骨折',icon:'💀',desc:'骨骼粉碎，肢体完全丧失功能',affectedPart:'bones',duration:120,damagePerTick:0.8,damageType:'hp_pct',statPenalty:{def:-60,atk:-30},source:'极致暴力',triggerDesc:'部位HP归零',healDesc:'服用神骨丹并闭关120秒'},
  {id:'osteoporosis',name:'骨质疏松',icon:'🦴',desc:'骨骼脆弱，受伤加重',affectedPart:'bones',duration:180,damagePerTick:0,damageType:'stat',statPenalty:{def:-15,incomingDmgPct:10},source:'长期缺乏灵药滋养',triggerDesc:'灵药为0超过48小时',healDesc:'服用大量壮骨丹药'},
  {id:'osteomyelitis',name:'骨髓炎',icon:'🦠',desc:'骨骼感染发炎',affectedPart:'boneMarrow',duration:90,damagePerTick:0.5,damageType:'hp_pct',statPenalty:{def:-10,maxHp:-20},source:'伤口感染',triggerDesc:'多部位同时低于30%HP',healDesc:'服用清毒丹+壮骨丹'},

  {id:'skin_burn',name:'皮肤灼伤',icon:'🔥',desc:'皮肤被火焰灼伤',affectedPart:'skin',duration:20,damagePerTick:0.3,damageType:'hp_pct',statPenalty:{def:-10},source:'火焰/雷电攻击',triggerDesc:'遭遇火/雷属性敌人',healDesc:'涂抹伤药或等待20秒'},
  {id:'frostbite',name:'冻伤',icon:'❄️',desc:'寒冷导致皮肤冻伤',affectedPart:'skin',duration:30,damagePerTick:0.2,damageType:'hp_pct',statPenalty:{expRate:-15,atk:-15},source:'寒冰攻击',triggerDesc:'遭遇冰属性敌人',healDesc:'温暖环境休养或服用暖阳丹'},
  {id:'skin_rot',name:'皮肤溃烂',icon:'🤢',desc:'皮肤溃烂可传染至其他部位',affectedPart:'skin',duration:45,damagePerTick:0.8,damageType:'hp_pct',statPenalty:{def:-20},source:'毒物侵蚀',triggerDesc:'中毒状态持续超过10秒',healDesc:'服用解毒丹+外敷灵药'},

  {id:'palpitation',name:'心悸',icon:'💓',desc:'心脏功能不稳',affectedPart:'heart',duration:20,damagePerTick:0,damageType:'stat',statPenalty:{hpRegen:-50},source:'魂力冲击心脏',triggerDesc:'魂力使用超过上限80%',healDesc:'静修20秒或服用养心丹'},
  {id:'heart_damaged',name:'心脉受损',icon:'💔',desc:'心脏经脉受损',affectedPart:'heart',duration:40,damagePerTick:1,damageType:'hp_pct',statPenalty:{atk:-20},source:'致命一击',triggerDesc:'HP低于5%后恢复',healDesc:'服用养心丹并闭关40秒'},
  {id:'liver_stagnation',name:'肝气郁结',icon:'😤',desc:'肝气不畅，暴击下降',affectedPart:'liver',duration:30,damagePerTick:0,damageType:'stat',statPenalty:{critRate:-30},source:'情绪波动（战斗失利）',triggerDesc:'连续死亡3次',healDesc:'服用疏肝丹或静修30秒'},
  {id:'liver_failure',name:'肝功能衰竭',icon:'🫁',desc:'毒素清除能力归零',affectedPart:'liver',duration:90,damagePerTick:0.5,damageType:'hp_pct',statPenalty:{poisonResist:-100},source:'长期服毒丹',triggerDesc:'连续服用5颗以上毒丹',healDesc:'服用解毒圣丹+长期休养'},
  {id:'spleen_deficiency',name:'脾虚',icon:'虚弱',desc:'脾脏功能下降',affectedPart:'spleen',duration:60,damagePerTick:0,damageType:'stat',statPenalty:{expRate:-25,pillEfficiency:-40},source:'饮食不调',triggerDesc:'长时间不服用任何丹药',healDesc:'服用健脾丹+适当服用丹药'},
  {id:'spleen_yang_deficiency',name:'脾阳虚',icon:'🧊',desc:'脾阳不足',affectedPart:'spleen',duration:45,damagePerTick:0,damageType:'stat',statPenalty:{goldRate:-20,dropRate:-15},source:'寒气入脾',triggerDesc:'在寒冷环境修炼',healDesc:'温暖环境+服用温阳丹'},
  {id:'lung_qi_deficiency',name:'肺气虚',icon:'😤',desc:'呼吸功能下降',affectedPart:'lung',duration:40,damagePerTick:0,damageType:'stat',statPenalty:{expRate:-35},source:'长期闭气修炼',triggerDesc:'在无灵气区域停留',healDesc:'到灵气充裕处休养'},
  {id:'pneumonia',name:'肺炎',icon:'🫁',desc:'肺部感染发炎',affectedPart:'lung',duration:50,damagePerTick:0.6,damageType:'hp_pct',statPenalty:{expRate:-40},source:'外邪入侵',triggerDesc:'在污染环境中战斗',healDesc:'服用清肺丹+脱离污染环境'},
  {id:'kidney_deficiency',name:'肾精亏虚',icon:'🫘',desc:'精气亏损',affectedPart:'kidney',duration:90,damagePerTick:0,damageType:'stat',statPenalty:{maxHp:-15,offspringQuality:-20},source:'过度消耗精气',triggerDesc:'双修频率过高',healDesc:'服用补肾丹+节制双修'},
  {id:'kidney_yang_deficiency',name:'肾阳虚',icon:'🥶',desc:'肾阳不足',affectedPart:'kidney',duration:60,damagePerTick:0,damageType:'stat',statPenalty:{atk:-10,def:-10,expRate:-20},source:'寒邪入肾',triggerDesc:'在极寒之地修炼超过1小时',healDesc:'服用温肾丹+温暖环境'},

  {id:'gallstone',name:'胆结石',icon:'🪨',desc:'胆汁淤积成石',affectedPart:'gallbladder',duration:60,damagePerTick:0,damageType:'stat',statPenalty:{critDmg:-20},source:'毒素沉积',triggerDesc:'体内毒素累积超过阈值',healDesc:'服用化石丹'},
  {id:'stomach_spasm',name:'胃痉挛',icon:'🤢',desc:'胃部剧烈痉挛',affectedPart:'stomach',duration:15,damagePerTick:0,damageType:'stat',statPenalty:{pillEfficiency:-30,pillFailRate:10},source:'服药过量',triggerDesc:'10秒内服用3颗以上丹药',healDesc:'停止服药15秒或服用和胃丹'},
  {id:'intestinal_block',name:'小肠梗阻',icon:'🚫',desc:'肠道堵塞',affectedPart:'smallIntestine',duration:40,damagePerTick:0,damageType:'stat',statPenalty:{absorptionRate:-50},source:'误食异物',triggerDesc:'服用低品质丹药',healDesc:'服用通肠丹或等待40秒'},
  {id:'constipation',name:'大肠燥结',icon:'😣',desc:'体内浊气未排',affectedPart:'largeIntestine',duration:30,damagePerTick:0,damageType:'stat',statPenalty:{expRate:-10},source:'体内浊气未排',triggerDesc:'连续修炼超过2小时',healDesc:'服用润肠丹或暂停修炼'},
  {id:'bladder_heat',name:'膀胱湿热',icon:'🌡️',desc:'膀胱湿热蕴结',affectedPart:'bladder',duration:45,damagePerTick:0,damageType:'stat',statPenalty:{poisonClearRate:-60},source:'湿热环境修炼',triggerDesc:'在热带/温泉修炼',healDesc:'服用清热利湿丹'},
  {id:'sanjiao_block',name:'三焦不通',icon:'🔴',desc:'三焦气机不畅',affectedPart:'sanjiao',duration:35,damagePerTick:0,damageType:'stat',statPenalty:{atk:-15,def:-15,expRate:-10},source:'情绪郁结',triggerDesc:'连续战斗失败',healDesc:'服用理气丹或静修'},

  {id:'concussion',name:'脑震荡',icon:'💫',desc:'头部受到重击',affectedPart:'brain',duration:5,damagePerTick:0,damageType:'stat',statPenalty:{atk:-20,def:-20,expRate:-20},source:'头部受到重击',triggerDesc:'头部HP<20%',healDesc:'静卧5秒或服用醒脑丹'},
  {id:'brain_damage',name:'脑损伤',icon:'🧠',desc:'大脑实质受损',affectedPart:'brain',duration:120,damagePerTick:0.3,damageType:'hp_pct',statPenalty:{expRate:-30},source:'极致精神冲击',triggerDesc:'魂力耗尽后继续使用魂技',healDesc:'服用养神丹并长期休养'},
  {id:'neurasthenia',name:'神经衰弱',icon:'😰',desc:'神经系统疲劳',affectedPart:'brain',duration:60,damagePerTick:0,damageType:'stat',statPenalty:{critRate:-40,dodgeRate:-30},source:'过度用脑',triggerDesc:'连续答题/悟道超过30分钟',healDesc:'休息60秒或服用安神丹'},
  {id:'memory_loss',name:'记忆丧失',icon:'❓',desc:'部分记忆丢失',affectedPart:'brain',duration:90,damagePerTick:0,damageType:'stat',statPenalty:{expRate:-50},source:'魂魄受损',triggerDesc:'死亡后复活',healDesc:'服用醒神丹+温习功法'},
  {id:'brain_edema',name:'脑水肿',icon:'🧠',desc:'脑组织水肿',affectedPart:'brain',duration:80,damagePerTick:0.4,damageType:'hp_pct',statPenalty:{atk:-10,def:-10,maxHp:-10},source:'头部持续受压',triggerDesc:'头部HP长时间低于50%',healDesc:'服用消肿丹+降低头部压力'},

  {id:'marrow_infection',name:'骨髓炎',icon:'🦠',desc:'骨髓感染发炎',affectedPart:'boneMarrow',duration:100,damagePerTick:0.5,damageType:'hp_pct',statPenalty:{maxHp:-25},source:'骨骼深度感染',triggerDesc:'骨折未治疗超过1天',healDesc:'服用清髓丹+消炎丹'},
  {id:'marrow_depletion',name:'髓海空虚',icon:'🩸',desc:'骨髓精气耗尽',affectedPart:'boneMarrow',duration:80,damagePerTick:0,damageType:'stat',statPenalty:{hpRegen:-80,incomingDmgPct:20},source:'精气过度抽取',triggerDesc:'连续战斗不休息超过2小时',healDesc:'服用补髓丹+长期休养'},

  {id:'internal_injury',name:'内伤',icon:'🩸',desc:'内部器官受损',affectedPart:'torso',duration:30,damagePerTick:0.5,damageType:'hp_pct',statPenalty:{atk:-10,def:-10},source:'受到穿透性伤害',triggerDesc:'受到无视防御的攻击',healDesc:'服用内伤丹或静养30秒'},
  {id:'shock_injury',name:'震伤',icon:'💫',desc:'震荡波冲击内脏',affectedPart:'torso',duration:10,damagePerTick:0.3,damageType:'hp_pct',statPenalty:{def:-15},source:'爆炸/震荡波',triggerDesc:'受到范围伤害',healDesc:'休息10秒或服用镇痛丹'},
  {id:'limb_sever',name:'断肢',icon:'🩸',desc:'肢体被斩断',affectedPart:'leftArm',duration:300,damagePerTick:1,damageType:'hp_pct',statPenalty:{atk:-15,def:-15},source:'肢体HP归零且有流血状态',triggerDesc:'肢体在流血状态下归零',healDesc:'服用续肢丹+长期闭关'},
  {id:'excessive_bleeding',name:'失血过多',icon:'🩸',desc:'大量失血导致虚弱',affectedPart:'torso',duration:20,damagePerTick:1.5,damageType:'hp_pct',statPenalty:{critRate:-50,atk:-20},source:'多个伤口同时流血',triggerDesc:'同时有3个以上部位受伤',healDesc:'服用止血丹+立即治疗'},
  {id:'poisoned',name:'中毒',icon:'☠️',desc:'毒素侵蚀身体',affectedPart:'liver',duration:25,damagePerTick:1,damageType:'hp_pct',statPenalty:{atk:-10},source:'毒系攻击或毒丹',triggerDesc:'被毒属性攻击命中',healDesc:'服用解毒丹'},
  {id:'severe_poison',name:'剧毒入体',icon:'☠️',desc:'剧毒深入骨髓',affectedPart:'liver',duration:40,damagePerTick:2,damageType:'hp_pct',statPenalty:{atk:-15,def:-15},source:'剧毒累积',triggerDesc:'中毒未解超过30秒',healDesc:'服用顶级解毒圣丹'},
  {id:'meridian_seal',name:'封脉',icon:'🔒',desc:'经脉被封印，攻击防御修炼全部受限',affectedPart:'meridians',duration:30,damagePerTick:0,damageType:'stat',statPenalty:{mp:-100,atk:-60,def:-60,expRate:-50},source:'被封印法术命中',triggerDesc:'遭遇封印系敌人',healDesc:'服用破封丹或等待30秒'},

{id:'meridian_destroyed',name:'经脉损毁',icon:'💥',desc:'经脉完全损毁，灵气通道断绝！无法攻击、无法防御、无法修炼，仅余肉身之力。',affectedPart:'meridians',duration:-1,damagePerTick:0.3,damageType:'mp_pct',statPenalty:{atk:-95,def:-95,expRate:-100,mp:-100,mpRegen:-100,breakthroughRate:-100},source:'经脉遭受毁灭性打击',triggerDesc:'经脉HP归零',healDesc:'⚠️不可逆！唯有成仙凝聚仙体可修复。经脉全毁后无法攻击防御修炼。',irreversible:true,cultivationBlocked:true},
  {id:'golden_core_shatter',name:'碎丹',icon:'💔',desc:'金丹破碎',affectedPart:'torso',duration:200,damagePerTick:0,damageType:'stat',statPenalty:{expRate:-50,maxHp:-30},source:'金丹受损',triggerDesc:'金丹期受到致命攻击',healDesc:'服用凝丹丹+长期闭关'},
  {id:'dao_injury',name:'道伤',icon:'⚡',desc:'天劫留下的道伤',affectedPart:'brain',duration:300,damagePerTick:0.3,damageType:'hp_pct',statPenalty:{expRate:-80,atk:-20,def:-20},source:'天劫余波',triggerDesc:'天劫失败',healDesc:'服用渡劫丹+长期悟道修复'},
  {id:'heart_demon',name:'心魔侵扰',icon:'😈',desc:'心魔作祟',affectedPart:'brain',duration:60,damagePerTick:0,damageType:'stat',statPenalty:{badEventRate:50},source:'心魔作祟',triggerDesc:'心境不稳',healDesc:'服用清心丹或通过心魔考验'},
  {id:'qi_reversal',name:'血气逆行',icon:'↩️',desc:'气血运行方向错误',affectedPart:'heart',duration:35,damagePerTick:0.5,damageType:'hp_pct',statPenalty:{healReverse:1},source:'功法出错',triggerDesc:'修炼与体质不匹配功法',healDesc:'服用顺气丹+停止修炼'},
  {id:'sea_turbulence',name:'识海动荡',icon:'🌊',desc:'精神之海不稳定',affectedPart:'brain',duration:25,damagePerTick:2,damageType:'soul_pct',statPenalty:{},source:'精神攻击',triggerDesc:'被魂力系攻击命中',healDesc:'服用安神丹静修'},
  {id:'vitality_loss',name:'元气大伤',icon:'💨',desc:'元气严重亏损',affectedPart:'torso',duration:120,damagePerTick:0,damageType:'stat',statPenalty:{atk:-30,def:-30,hpRegen:-80},source:'过度使用禁术',triggerDesc:'使用禁术',healDesc:'服用大还丹+长期休养'},
  {id:'lifespan_drain',name:'寿元损耗',icon:'⏳',desc:'寿命减少',affectedPart:'brain',duration:-1,damagePerTick:0,damageType:'stat',statPenalty:{lifespanReduction:5},source:'使用消耗寿命的秘法',triggerDesc:'以寿命换力量',healDesc:'服用延寿丹'},
  {id:'dao_foundation_damage',name:'道基受损',icon:'🏚️',desc:'修炼根基受损',affectedPart:'meridians',duration:200,damagePerTick:0,damageType:'stat',statPenalty:{breakthroughRate:-50},source:'强行突破失败',triggerDesc:'突破成功率<30%时强行突破',healDesc:'服用筑基丹+长期悟道'},

  {id:'dantian_crack',name:'丹田裂纹',icon:'🌀',desc:'丹田出现裂纹，灵力外泄',affectedPart:'dantian',duration:-1,damagePerTick:0.2,damageType:'mp_pct',statPenalty:{maxMp:-30,mpRegen:-50},source:'灵气暴走或强行突破',triggerDesc:'突破失败或被废功',healDesc:'⚠️不可逆！凝聚仙体后方可修复',irreversible:true},
  {id:'dantian_shatter',name:'丹田破碎',icon:'🕳️',desc:'丹田完全碎裂，灵力无法储存，修为散尽！寿命骤减！终生无法修炼，仅余炼体之路。',affectedPart:'dantian',duration:-1,damagePerTick:0.5,damageType:'mp_pct',statPenalty:{maxMp:-99,mpRegen:-100,expRate:-100,goldRate:-80,lifespanReduction:95,breakthroughRate:-100},source:'遭受致命灵力攻击',triggerDesc:'丹田HP归零',healDesc:'⚠️不可逆！唯有成仙凝聚仙体可修复。终生无法修炼，仅余炼体。',irreversible:true,cultivationBlocked:true},
  {id:'foundation_crack',name:'根基开裂',icon:'🏗️',desc:'修炼根基出现裂缝',affectedPart:'foundation',duration:-1,damagePerTick:0,damageType:'stat',statPenalty:{breakthroughRate:-30,expRate:-20},source:'走火入魔或天劫反噬',triggerDesc:'走火入魔或渡劫失败',healDesc:'⚠️不可逆！凝聚仙体后方可修复',irreversible:true},
  {id:'foundation_collapse',name:'根基崩塌',icon:'🏚️',desc:'修炼根基完全崩塌，突破之路断绝！终生无法修炼，仅余炼体之路。',affectedPart:'foundation',duration:-1,damagePerTick:0,damageType:'stat',statPenalty:{breakthroughRate:-100,expRate:-100,goldRate:-60,lifespanReduction:30},source:'连续突破失败累积',triggerDesc:'根基HP归零',healDesc:'⚠️不可逆！唯有成仙凝聚仙体可修复。终生无法修炼，仅余炼体。',irreversible:true,cultivationBlocked:true},
  {id:'spiritual_root_fracture',name:'灵根断裂',icon:'🌿',desc:'灵根出现断裂，天地感应减弱',affectedPart:'spiritualRoot',duration:-1,damagePerTick:0,damageType:'stat',statPenalty:{expRate:-40,goldRate:-20},source:'吸收异属性灵气冲突',triggerDesc:'灵根冲突或被挖根',healDesc:'⚠️不可逆！凝聚仙体后方可修复',irreversible:true},
  {id:'spiritual_root_wither',name:'灵根枯萎',icon:'🥀',desc:'灵根完全枯萎，天地感应归零！终生无法修炼，仅余炼体之路。',affectedPart:'spiritualRoot',duration:-1,damagePerTick:0,damageType:'stat',statPenalty:{expRate:-100,goldRate:-80,breakthroughRate:-100,lifespanReduction:20},source:'灵根被剥夺',triggerDesc:'灵根HP归零',healDesc:'⚠️不可逆！唯有成仙凝聚仙体可修复。终生无法修炼，仅余炼体。',irreversible:true,cultivationBlocked:true},

  {id:'force_trauma',name:'力道内伤',icon:'👊',desc:'钝击导致深层组织挫伤',affectedPart:'torso',duration:30,damagePerTick:0.4,damageType:'hp_pct',statPenalty:{def:-15,atk:-10},source:'受到重力打击',triggerDesc:'受到力道类伤害超过防御力200%',healDesc:'服用活血丹或静养30秒'},
  {id:'tear_wound',name:'撕裂伤口',icon:'🩸',desc:'开放性创伤大量失血',affectedPart:'skin',duration:25,damagePerTick:0.8,damageType:'hp_pct',statPenalty:{atk:-20},source:'利器切割',triggerDesc:'受到撕裂类伤害',healDesc:'服用止血丹+生肌丹'},
  {id:'pierce_wound',name:'穿刺伤口',icon:'🗡️',desc:'深层穿刺伤及内脏',affectedPart:'torso',duration:35,damagePerTick:0.6,damageType:'hp_pct',statPenalty:{hpRegen:-60,def:-10},source:'尖锐武器穿刺',triggerDesc:'受到穿刺类伤害',healDesc:'服用内伤丹+手术治疗'},
  {id:'elemental_burn',name:'元素灼伤',icon:'🔥',desc:'五行元素之力灼烧经脉',affectedPart:'meridians',duration:20,damagePerTick:0.5,damageType:'hp_pct',statPenalty:{expRate:-25},source:'五行元素攻击',triggerDesc:'受到属性类伤害',healDesc:'服用清心丹或等待元素消散'},
  {id:'origin_damage',name:'本源受损',icon:'💫',desc:'生命本源受到侵蚀',affectedPart:'dantian',duration:-1,damagePerTick:0.3,damageType:'hp_pct',statPenalty:{maxHp:-20,expRate:-30},source:'虚空之力攻击',triggerDesc:'受到本源类伤害超过最大HP的15%',healDesc:'⚠️部分不可逆！服用造化丹可缓解'},
];

export const BALATRO_HANDS: any = {
  highCard:       { name:'高牌',       baseChips:5,   baseMult:1,  desc:'不成任何牌型' },
  pair:           { name:'对子',       baseChips:10,  baseMult:2,  desc:'两张同点数' },
  twoPair:        { name:'两对',       baseChips:20,  baseMult:2,  desc:'两个对子' },
  threeOfAKind:   { name:'三条',       baseChips:30,  baseMult:3,  desc:'三张同点数' },
  straight:       { name:'顺子',       baseChips:30,  baseMult:4,  desc:'五张连续点数' },
  flush:          { name:'同花',       baseChips:35,  baseMult:4,  desc:'五张同花色' },
  fullHouse:      { name:'葫芦',       baseChips:40,  baseMult:4,  desc:'三条+一对' },
  fourOfAKind:    { name:'四条',       baseChips:60,  baseMult:7,  desc:'四张同点数' },
  straightFlush:  { name:'同花顺',     baseChips:100, baseMult:8,  desc:'同花+顺子' },
  royalFlush:     { name:'皇家同花顺', baseChips:100, baseMult:8,  desc:'A-K-Q-J-10同花' },
};

export const BALATRO_HAND_LEVELS: any = {};

export const BALATRO_JOKERS: any = [

  { id:'spirit_stone',   name:'灵石矿',   rarity:'common',   cost:3,  icon:'💎',
  desc:'打出含人头牌的牌型时 +30 筹码',
  fn:(ctx)=>{ if(ctx.played.some((c:any)=>c.rank>=11)) ctx.totalChips+=30; }},
  { id:'sword_qi',       name:'剑气',     rarity:'common',   cost:4,  icon:'⚔️',
  desc:'打出顺子时 +15 倍数',
  fn:(ctx)=>{ if(ctx.handType==='straight') ctx.totalMult+=15; }},
  { id:'pill_stove',     name:'丹炉',     rarity:'common',   cost:4,  icon:'🏮',
  desc:'打出的每张牌 +4 筹码',
  fn:(ctx)=>{ ctx.totalChips+=ctx.played.length*4; }},
  { id:'cultivation',    name:'修仙入门', rarity:'common',   cost:3,  icon:'📖',
  desc:'每出一手牌 +1 倍数（累计）',
  fn:(ctx,gs)=>{ ctx.totalMult+=(gs._balatro.handsPlayed||0)*1; }},
  { id:'paper_talisman', name:'符箓',     rarity:'common',   cost:3,  icon:'📜',
  desc:'对子 +20 筹码',
  fn:(ctx)=>{ if(ctx.handType==='pair') ctx.totalChips+=20; }},
  { id:'spirit_spring',  name:'灵泉',     rarity:'common',   cost:3,  icon:'💧',
  desc:'每局首次出牌 +100 筹码',
  fn:(ctx,gs)=>{ if(gs._balatro.handsPlayed===0) ctx.totalChips+=100; }},
  { id:'compass',        name:'寻灵罗盘', rarity:'common',   cost:3,  icon:'🧭',
  desc:'出牌中最小点数×3作为额外筹码',
  fn:(ctx)=>{ const m=Math.min(...ctx.played.map((c:any)=>c.rank)); ctx.totalChips+=m*3; }},
  { id:'iron_core',      name:'铁精',     rarity:'common',   cost:3,  icon:'🔩',
  desc:'手中持有黑桃花色 +20 筹码',
  fn:(ctx,gs)=>{ if(gs._balatro.hand.some((c:any)=>c.suit==='spade')) ctx.totalChips+=20; }},
  { id:'wood_spirit',    name:'木灵',     rarity:'common',   cost:3,  icon:'🌿',
  desc:'同花 +12 倍数',
  fn:(ctx)=>{ if(ctx.handType==='flush') ctx.totalMult+=12; }},
  { id:'flame_orb',      name:'火灵珠',   rarity:'common',   cost:3,  icon:'🔴',
  desc:'出牌中最大点数×3作为额外筹码',
  fn:(ctx)=>{ const m=Math.max(...ctx.played.map((c:any)=>c.rank)); ctx.totalChips+=m*3; }},
  { id:'jade_pendant',   name:'玉佩',     rarity:'common',   cost:3,  icon:'🟢',
  desc:'两对 +25 筹码',
  fn:(ctx)=>{ if(ctx.handType==='twoPair') ctx.totalChips+=25; }},
  { id:'wine_gourd',     name:'酒葫芦',   rarity:'common',   cost:3,  icon:'🍶',
  desc:'高牌 +20 筹码 +3 倍数',
  fn:(ctx)=>{ if(ctx.handType==='highCard'){ctx.totalChips+=20;ctx.totalMult+=3;}}},

  { id:'nine_turn',      name:'九转金丹', rarity:'rare',     cost:6,  icon:'💛',
  desc:'葫芦 ×3 倍数',
  fn:(ctx)=>{ if(ctx.handType==='fullHouse') ctx.totalMult*=3; }},
  { id:'heaven_eye',     name:'天机镜',   rarity:'rare',     cost:7,  icon:'👁️',
  desc:'高牌以外牌型 ×1.5 倍数',
  fn:(ctx)=>{ if(ctx.handType!=='highCard') ctx.totalMult*=1.5; }},
  { id:'exorcism',       name:'遁甲符',   rarity:'rare',     cost:6,  icon:'🛡️',
  desc:'首次出牌倍数翻倍',
  fn:(ctx,gs)=>{ if(gs._balatro.handsPlayed===0) ctx.totalMult*=2; }},
  { id:'cloud_sword',    name:'青云剑',   rarity:'rare',     cost:7,  icon:'🗡️',
  desc:'顺子 +50 筹码 +10 倍数',
  fn:(ctx)=>{ if(ctx.handType==='straight'){ctx.totalChips+=50;ctx.totalMult+=10;}}},
  { id:'liver_meridian', name:'经脉贯通', rarity:'rare',     cost:5,  icon:'🫀',
  desc:'手中每持一张牌 +5 筹码',
  fn:(ctx,gs)=>{ ctx.totalChips+=gs._balatro.hand.length*5; }},
  { id:'pagoda',         name:'玲珑宝塔', rarity:'rare',     cost:8,  icon:'🏯',
  desc:'最后一手牌 ×2 倍数',
  fn:(ctx,gs)=>{ if(gs._balatro.handsLeft<=1) ctx.totalMult*=2; }},
  { id:'blue_lotus',     name:'何仙姑莲', rarity:'rare',     cost:7,  icon:'🪷',
  desc:'三条 +35 筹码 +5 倍数',
  fn:(ctx)=>{ if(ctx.handType==='threeOfAKind'){ctx.totalChips+=35;ctx.totalMult+=5;}}},
  { id:'gourd',          name:'紫金红葫芦',rarity:'rare',    cost:6,  icon:'🫙',
  desc:'高牌 +50 筹码',
  fn:(ctx)=>{ if(ctx.handType==='highCard') ctx.totalChips+=50; }},
  { id:'formation',      name:'五行阵法', rarity:'rare',     cost:6,  icon:'⭕',
  desc:'每张A +10倍数',
  fn:(ctx)=>{ const aces=ctx.played.filter((c:any)=>c.rank===14).length; ctx.totalMult+=aces*10; }},
  { id:'immortal_peach', name:'蟠桃',     rarity:'rare',     cost:6,  icon:'🍑',
  desc:'出牌中无花色重复时 +40 筹码',
  fn:(ctx)=>{ const suits=new Set(ctx.played.map((c:any)=>c.suit)); if(suits.size===ctx.played.length) ctx.totalChips+=40; }},

  { id:'samsara',        name:'轮回盘',   rarity:'legendary', cost:10, icon:'☸️',
  desc:'×4 倍数（传说级）',
  fn:(ctx)=>{ ctx.totalMult*=4; }},
  { id:'emperor_seal',   name:'帝印',     rarity:'legendary', cost:10, icon:'👑',
  desc:'皇家同花顺 ×10 倍数',
  fn:(ctx)=>{ if(ctx.handType==='royalFlush') ctx.totalMult*=10; }},
  { id:'hongmeng',       name:'鸿蒙之气', rarity:'legendary', cost:12, icon:'🌀',
  desc:'每次出牌 +50 筹码 +10 倍数',
  fn:(ctx)=>{ ctx.totalChips+=50; ctx.totalMult+=10; }},
  { id:'chaos_stone',    name:'混沌石',   rarity:'legendary', cost:10, icon:'🪨',
  desc:'四条 ×4 倍数',
  fn:(ctx)=>{ if(ctx.handType==='fourOfAKind') ctx.totalMult*=4; }},
  { id:'heavenly_dao',   name:'天道意志', rarity:'legendary', cost:12, icon:'✨',
  desc:'同花顺/皇家同花顺 ×5 倍数',
  fn:(ctx)=>{ if(ctx.handType==='straightFlush'||ctx.handType==='royalFlush') ctx.totalMult*=5; }},
  { id:'primordial',     name:'盘古斧',   rarity:'legendary', cost:12, icon:'🪓',
  desc:'出牌点数之和×2 作为额外筹码',
  fn:(ctx)=>{ const sum=ctx.played.reduce((a,c)=>a+c.rank,0); ctx.totalChips+=sum*2; }},
];

export const BALATRO_PLANETS: any = [
  { id:'mercury',  handType:'pair',          name:'水星', icon:'☿️', desc:'对子 +15筹码 +1倍数' },
  { id:'venus',    handType:'twoPair',       name:'金星', icon:'♀️', desc:'两对 +20筹码 +1倍数' },
  { id:'earth',    handType:'fullHouse',     name:'地球', icon:'🌍', desc:'葫芦 +25筹码 +2倍数' },
  { id:'mars',     handType:'threeOfAKind',  name:'火星', icon:'♂️', desc:'三条 +20筹码 +1倍数' },
  { id:'jupiter',  handType:'straight',      name:'木星', icon:'♃',  desc:'顺子 +30筹码 +2倍数' },
  { id:'saturn',   handType:'flush',         name:'土星', icon:'♄',  desc:'同花 +25筹码 +2倍数' },
  { id:'neptune',  handType:'fourOfAKind',   name:'海王星',icon:'♆',  desc:'四条 +30筹码 +3倍数' },
  { id:'pluto',    handType:'straightFlush', name:'冥王星',icon:'♇',  desc:'同花顺 +40筹码 +3倍数' },
  { id:'sun',      handType:'highCard',      name:'太阳', icon:'☀️', desc:'高牌 +10筹码 +1倍数' },
  { id:'moon',     handType:'royalFlush',    name:'月亮', icon:'🌙', desc:'皇家同花顺 +50筹码 +5倍数' },
];

export const BALATRO_RANKS: any = {2:'2',3:'3',4:'4',5:'5',6:'6',7:'7',8:'8',9:'9',10:'10',11:'J',12:'Q',13:'K',14:'A'};

export const BALATRO_REALM_TARGETS: any = {
  10: { target:300,    hands:4, discards:3, jokerSlots:3, shopGold:4, name:'凝气化基' },
  14: { target:1200,   hands:4, discards:3, jokerSlots:4, shopGold:5, name:'结丹天象' },
  18: { target:5000,   hands:4, discards:3, jokerSlots:4, shopGold:5, name:'碎丹成婴' },
  22: { target:15000,  hands:4, discards:3, jokerSlots:5, shopGold:6, name:'化凡入神' },
  26: { target:50000,  hands:4, discards:3, jokerSlots:5, shopGold:7, name:'天人合一' },
  30: { target:120000, hands:4, discards:3, jokerSlots:5, shopGold:8, name:'渡劫飞升' },
  34: { target:250000, hands:4, discards:3, jokerSlots:5, shopGold:9, name:'证道大乘' },
  36: { target:400000, hands:4, discards:3, jokerSlots:5, shopGold:10,name:'散仙劫起' },
};

export const BALATRO_SUITS: any = {
  heart:   { symbol:'♥', color:'#e74c3c', name:'火' },
  diamond: { symbol:'♦', color:'#e67e22', name:'金' },
  club:    { symbol:'♣', color:'#27ae60', name:'木' },
  spade:   { symbol:'♠', color:'#2c3e50', name:'水' },
};

export const BALATRO_TAROTS: any = [
  { id:'magician',  name:'灵力灌注', icon:'🧙', desc:'2张牌变为灵气牌(+30筹码)', count:2, type:'enh', enh:'spirit', bonus:{chips:30} },
  { id:'empress',   name:'道法加持', icon:'👸', desc:'3张牌变为道法牌(+4倍数)', count:3, type:'enh', enh:'dao', bonus:{mult:4} },
  { id:'emperor',   name:'天劫淬体', icon:'🤴', desc:'2张牌变为天劫牌(×1.5倍)', count:2, type:'enh', enh:'tribulation', bonus:{xMult:1.5} },
  { id:'tower',     name:'禁法封印', icon:'🗼', desc:'1张牌变为封印牌(+100筹码)', count:1, type:'enh', enh:'seal', bonus:{chips:100} },
  { id:'hierophant',name:'化凡去华', icon:'⛪', desc:'移除牌库中2张随机牌', count:2, type:'remove' },
];

export const CACHE_TTL: any = 5 * 60 * 1000;

export const CANVAS_H: any = 360;

export const CANVAS_W: any = 480;

export const CHEAT_FUNCTIONS: any = [

  {id:'setHp',name:'回血术',desc:'将气血恢复至满',icon:'❤️',minRank:0,cost:50,uses:'unlimited'},
  {id:'setMp',name:'聚灵术',desc:'将灵力恢复至满',icon:'💙',minRank:0,cost:50,uses:'unlimited'},
  {id:'addExpSmall',name:'小悟道',desc:'获得当前境界1%修为',icon:'📗',minRank:0,cost:30,uses:'unlimited'},

  {id:'addGold',name:'点石成金',desc:'获得1000灵石',icon:'💰',minRank:1,cost:100,uses:'unlimited'},
  {id:'addHerbs',name:'灵草速生',desc:'获得50灵草',icon:'🌿',minRank:1,cost:80,uses:'unlimited'},
  {id:'healBody',name:'肉身修复',desc:'恢复所有身体部位',icon:'🩹',minRank:1,cost:120,uses:'unlimited'},

  {id:'addExp',name:'悟道丹',desc:'获得当前境界10%修为',icon:'✨',minRank:2,cost:200,uses:'unlimited'},
  {id:'permAtkUp',name:'铸剑术',desc:'永久攻击+20',icon:'⚔️',minRank:2,cost:300,uses:'unlimited'},
  {id:'permDefUp',name:'锻甲术',desc:'永久防御+15',icon:'🛡️',minRank:2,cost:300,uses:'unlimited'},
  {id:'addBreakPill',name:'虚空破境',desc:'获得破境丹×3',icon:'💊',minRank:2,cost:250,uses:'daily'},

  {id:'maxHpUp',name:'血脉觉醒',desc:'气血上限+500',icon:'❤️‍🔥',minRank:3,cost:500,uses:'unlimited'},
  {id:'maxMpUp',name:'灵脉拓张',desc:'灵力上限+200',icon:'💜',minRank:3,cost:500,uses:'unlimited'},
  {id:'addPill',name:'虚空造丹',desc:'获得所有丹药各3颗',icon:'💊',minRank:3,cost:400,uses:'daily'},
  {id:'addPetExp',name:'灵宠滋养',desc:'出战灵宠经验+2000',icon:'🐾',minRank:3,cost:350,uses:'daily'},

  {id:'forceBreak',name:'强行破境',desc:'无视成功率直接突破',icon:'💥',minRank:4,cost:1000,uses:'unlimited'},
  {id:'skipTrib',name:'天劫屏蔽',desc:'跳过下一次渡劫',icon:'⚡',minRank:4,cost:800,uses:'unlimited'},
  {id:'addGold5k',name:'财源广进',desc:'获得5000灵石',icon:'💰',minRank:4,cost:500,uses:'daily'},
  {id:'resetBodyDebuff',name:'祛病消灾',desc:'清除所有身体伤病',icon:'🩺',minRank:4,cost:600,uses:'daily'},

  {id:'upgradeRoot',name:'灵根改造',desc:'灵根品质提升一级',icon:'🔮',minRank:5,cost:2000,uses:'unlimited'},
  {id:'upgradeConst',name:'洗髓伐毛',desc:'体质品质提升一级',icon:'🧬',minRank:5,cost:2000,uses:'unlimited'},
  {id:'allTechs',name:'万法归一',desc:'解锁所有功法',icon:'📖',minRank:5,cost:3000,uses:'once'},
  {id:'addAffixSlot',name:'词条开孔',desc:'词条槽位+1',icon:'💎',minRank:5,cost:1500,uses:'unlimited'},

  {id:'expMult',name:'时间加速',desc:'修炼速度×5（持续10分钟）',icon:'⏩',minRank:6,cost:1500,uses:'daily'},
  {id:'goldMult',name:'财神附体',desc:'灵石获取×5（持续10分钟）',icon:'🪙',minRank:6,cost:1500,uses:'daily'},
  {id:'godEquip',name:'仙器锻造',desc:'生成一套仙级装备',icon:'🗡️',minRank:6,cost:5000,uses:'once'},
  {id:'addMerit',name:'功德灌注',desc:'获得100功德点',icon:'🙏',minRank:6,cost:1200,uses:'daily'},

  {id:'breakSuccess',name:'天命加持',desc:'下次突破100%成功',icon:'🎯',minRank:7,cost:3000,uses:'unlimited'},
  {id:'qiMult',name:'灵气充裕',desc:'灵气倍率+50%',icon:'🌀',minRank:7,cost:2500,uses:'daily'},
  {id:'maxRealm',name:'一步登天',desc:'直接跳至下一大境界',icon:'🚀',minRank:7,cost:10000,uses:'once'},
  {id:'autoTrainSub',name:'副修速成',desc:'所有副修等级+1',icon:'📚',minRank:7,cost:4000,uses:'once'},

  {id:'infiniteHp',name:'不死之身',desc:'气血不会低于1（持续5分钟）',icon:'☠️',minRank:8,cost:4000,uses:'daily'},
  {id:'spawnPet',name:'神兽召唤',desc:'获得一只仙级灵宠',icon:'🐉',minRank:8,cost:6000,uses:'once'},
  {id:'compBoost',name:'仙缘天赐',desc:'道侣好感+50',icon:'💕',minRank:8,cost:3000,uses:'once'},
  {id:'addGoldBig',name:'圣石降临',desc:'获得10万灵石',icon:'💎',minRank:8,cost:3500,uses:'daily'},

  {id:'customStat',name:'造化弄人',desc:'自定义修改任意属性',icon:'🌑',minRank:9,cost:8000,uses:'unlimited'},
  {id:'infiniteGold',name:'混沌之源',desc:'灵石+100万',icon:'♾️',minRank:9,cost:5000,uses:'daily'},
  {id:'rebirthSkip',name:'轮回超脱',desc:'转世保留所有数据',icon:'☯️',minRank:9,cost:15000,uses:'once'},
  {id:'godMode',name:'造物主',desc:'所有属性翻倍',icon:'👁️',minRank:9,cost:20000,uses:'once'},

  {id:'addGold2k',name:'聚宝盆',desc:'获得2000灵石',icon:'🏺',minRank:0,cost:80,uses:'unlimited'},
  {id:'addAllPills10',name:'百丹盛宴',desc:'所有丹药各+10',icon:'🍬',minRank:2,cost:350,uses:'daily'},
  {id:'addHerbs200',name:'药园丰收',desc:'获得200灵草',icon:'🌾',minRank:1,cost:150,uses:'daily'},
  {id:'healFull',name:'神医降世',desc:'HP/MP/身体/魂力全满',icon:'💉',minRank:3,cost:600,uses:'unlimited'},
  {id:'skipTime10',name:'时光飞逝',desc:'跳过10年+获得大量修为',icon:'⏳',minRank:2,cost:200,uses:'daily'},
  {id:'unlockSubBranch',name:'万法皆通',desc:'解锁所有副修分支',icon:'🔀',minRank:4,cost:2000,uses:'once'},
  {id:'addGold50k',name:'财神降临',desc:'获得5万灵石',icon:'💰',minRank:5,cost:2000,uses:'daily'},
  {id:'resetToxicity',name:'净毒仙丹',desc:'丹毒清零',icon:'🧪',minRank:3,cost:800,uses:'daily'},
  {id:'addPetAllMax',name:'万兽臣服',desc:'所有灵宠满级',icon:'🦁',minRank:6,cost:5000,uses:'once'},
  {id:'addGold200k',name:'神石天降',desc:'获得20万灵石',icon:'💠',minRank:7,cost:4000,uses:'daily'},
  {id:'addLawLevel',name:'法则顿悟',desc:'任选法则+1层',icon:'🌌',minRank:4,cost:800,uses:'daily'},
  {id:'addDaoLevel',name:'大道感悟',desc:'任选大道+1级',icon:'✨',minRank:6,cost:2000,uses:'daily'},
  {id:'maxAllLaws',name:'万法归一',desc:'所有法则直接圆满',icon:'🌈',minRank:8,cost:8000,uses:'once'},
];

export const CHEAT_RANKS: any = [
  {id:'trash',name:'不入流',icon:'🔧',color:'#888',fragDropRate:{shop:0.08,explore:0.06,trib:0.10},desc:'粗制滥造的作弊工具'},
  {id:'entry',name:'入流',icon:'🔩',color:'var(--green)',fragDropRate:{shop:0.04,explore:0.03,trib:0.06},desc:'勉强能用的作弊装置'},
  {id:'common',name:'普通',icon:'⚙️',color:'var(--blue)',fragDropRate:{shop:0.02,explore:0.015,trib:0.035},desc:'有一定效果的作弊器'},
  {id:'rare',name:'稀有',icon:'🔩',color:'var(--purple)',fragDropRate:{shop:0.01,explore:0.008,trib:0.02},desc:'效果显著的高级作弊器'},
  {id:'epic',name:'史诗',icon:'💎',color:'var(--gold)',fragDropRate:{shop:0.005,explore:0.004,trib:0.012},desc:'威力惊人的极品作弊器'},
  {id:'legend',name:'传说',icon:'🏆',color:'var(--gold2)',fragDropRate:{shop:0.002,explore:0.002,trib:0.006},desc:'传说中改变规则的神器'},
  {id:'immortal',name:'仙级',icon:'☁️',color:'var(--cyan)',fragDropRate:{shop:0.001,explore:0.001,trib:0.003},desc:'仙人遗落的禁忌之物'},
  {id:'divine',name:'神级',icon:'⭐',color:'var(--orange)',fragDropRate:{shop:0.0005,explore:0.0005,trib:0.0015},desc:'神界流传的造化神物'},
  {id:'saint',name:'圣级',icon:'🌟',color:'#ff6b6b',fragDropRate:{shop:0.0002,explore:0.0002,trib:0.0008},desc:'圣尊留下的天道遗宝'},
  {id:'chaos',name:'混沌级',icon:'🌀',color:'#e040fb',fragDropRate:{shop:0.0001,explore:0.0001,trib:0.0004},desc:'混沌初开时的本源之力'},
];

export const CS: any = 16;

export const ECG_CONFIG: any = {

  canvasWidth: 400,
  canvasHeight: 150,

  gridColor: 'rgba(0, 100, 0, 0.15)',
  gridColorMajor: 'rgba(0, 100, 0, 0.3)',
  gridSize: 10, // 每格像素
  gridSizeMajor: 50, // 大格像素（5小格=1大格）

  traceColor: '#00ff41',
  traceWidth: 2,

  scanSpeed: 2.5, // 标准25mm/s，缩小为像素

  rhythms: {
  NSR: { bpm: 72, label: '正常窦性心律', color: '#00ff41' },
  SINUS_TACHY: { bpm: 110, label: '窦性心动过速', color: '#ffeb3b' },
  SINUS_BRADY: { bpm: 48, label: '窦性心动过缓', color: '#ffeb3b' },
  AF: { bpm: 130, label: '心房颤动', color: '#ff9800' },
  VT: { bpm: 170, label: '室性心动过速', color: '#ff5722' },
  VF: { bpm: 0, label: '心室颤动', color: '#f44336' },
  ASYSTOLE: { bpm: 0, label: '心脏停搏', color: '#b71c1c' },
  ST_ELEVATION: { bpm: 80, label: 'ST段抬高（心肌梗死）', color: '#e91e63' },
  AFIB_TACHY: { bpm: 140, label: '快速型房颤', color: '#ff9800' },
  V_FIB_COARSE: { bpm: 0, label: '粗波型室颤', color: '#f44336' },
  V_FIB_FINE: { bpm: 0, label: '细波型室颤', color: '#d32f2f' },
  AGONAL: { bpm: 15, label: '濒死心律（濒危）', color: '#b71c1c' },
  PEA: { bpm: 20, label: '无脉性电活动', color: '#c62828' },
  TORSADES: { bpm: 220, label: '尖端扭转型室速', color: '#e53935' },
  }
};

export const ENERGY_EVOLUTION: any = {
  human_normal: [
  {minRealm:0,  name:'真气',   desc:'凡人武者体内真气，修炼之基', color:'var(--amber)'},
  {minRealm:7,  name:'先天真气',desc:'先天之境，真气蜕变为先天真气', color:'var(--gold2)'},
  {minRealm:8,  name:'灵气',   desc:'引气入体，踏入修仙之路', color:'var(--blue)'},
  {minRealm:36, name:'仙元',   desc:'灵气蜕变为仙元，超凡入圣', color:'var(--gold)'},
  {minRealm:41, name:'圣元',   desc:'仙元升华，圣人之源', color:'var(--gold3)'},
  {minRealm:47, name:'道元',   desc:'大道之元，天道之力', color:'#fff'},
  ],
  yao_demon: [
  {minRealm:0,  name:'妖气',   desc:'妖族天生之气，可修炼成妖力', color:'var(--green)'},
  {minRealm:15, name:'妖力',   desc:'化形成功！妖气蜕变为妖力', color:'var(--orange)'},
  {minRealm:36, name:'妖元',   desc:'妖力凝练为妖元，妖仙之源', color:'var(--red)'},
  {minRealm:41, name:'妖神力', desc:'妖神之力，万妖臣服', color:'var(--gold)'},
  ],
  gui_ghost: [
  {minRealm:0,  name:'阴气',   desc:'至阴之气，幽冥之力', color:'var(--purple)'},
  {minRealm:15, name:'阴力',   desc:'阴气凝练，阴神初成', color:'#9b59b6'},
  {minRealm:36, name:'冥元',   desc:'冥界之力凝聚', color:'#6c3483'},
  {minRealm:41, name:'幽冥力', desc:'幽冥大道之力', color:'#4a235a'},
  ],
  hun_soul: [
  {minRealm:0,  name:'魂力',   desc:'神魂本源之力', color:'var(--cyan)'},
  {minRealm:15, name:'神魂力', desc:'神魂凝聚，威力大增', color:'#17a2b8'},
  {minRealm:36, name:'神元',   desc:'神之元力，超越凡魂', color:'#5bc0de'},
  {minRealm:41, name:'太虚力', desc:'太虚神魂之力', color:'#d1ecf1'},
  ],
  fo_buddha: [
  {minRealm:0,  name:'佛力',   desc:'佛门之力，慈悲为怀', color:'var(--gold)'},
  {minRealm:15, name:'金刚力', desc:'金刚不坏之力', color:'var(--gold2)'},
  {minRealm:36, name:'佛元',   desc:'佛陀之元，万法归一', color:'var(--gold3)'},
  {minRealm:41, name:'菩提力', desc:'菩提大道之力', color:'#fff'},
  ],
  ru_confucian: [
  {minRealm:0,  name:'文气',   desc:'文以载道之气', color:'var(--text2)'},
  {minRealm:15, name:'浩然气', desc:'浩然正气，万邪不侵', color:'var(--cyan)'},
  {minRealm:36, name:'圣元',   desc:'圣人之元，言出法随', color:'var(--gold)'},
  {minRealm:41, name:'文道力', desc:'文道天力，一文定乾坤', color:'#fff'},
  ],
  xie_evil: [
  {minRealm:0,  name:'邪气',   desc:'至邪之气，吞噬天地', color:'var(--red)'},
  {minRealm:15, name:'邪力',   desc:'邪气凝练，威力倍增', color:'#c0392b'},
  {minRealm:36, name:'邪元',   desc:'邪道元力，无法无天', color:'#922b21'},
  {minRealm:41, name:'大邪力', desc:'大自在邪力', color:'#641e16'},
  ],
  mo_demon: [
  {minRealm:0,  name:'魔气',   desc:'魔道之气，焚天灭地', color:'var(--red)'},
  {minRealm:15, name:'魔力',   desc:'魔气凝练，魔威盖世', color:'#e74c3c'},
  {minRealm:36, name:'魔元',   desc:'魔族元力，天魔降世', color:'#c0392b'},
  {minRealm:41, name:'天魔力', desc:'大自在天魔之力', color:'var(--gold)'},
  ],
};

export const EXTRACT_TIME: any = 5;

export const HEAVENLY_TEXTS: any = {
  '炼气': '天地初开，灵气如雾。你静坐于茅屋之中，感应到丹田中一丝微弱的气流。\n那是灵气——这个世界最本源的力量。',
  '筑基': '气沉丹田，经脉渐通。凡胎肉体开始蜕变，根基初成。\n从此，你不再是凡人。',
  '结丹': '灵气凝实，如液如汞。一颗金丹在丹田中缓缓成型。\n金光内敛，大道之基已固。',
  '金丹': '金丹大成，光华内敛。你已站在灵境巅峰，\n只差一步，便能元神出窍。',
  '元婴': '神识外放，元神出窍。你看见了自己的灵魂——\n一个缩小的自己，盘坐在金丹之上。',
  '化神': '天道无常，法则如链。你触碰到了这个世界运行的底层规则。\n万物皆有道，而你已初窥门径。',
  '炼虚': '虚实相生，法则入微。你已能操控天地间最细微的力量。\n一念之间，虚实转换。',
  '合体': '元婴与肉身合一，天地为炉，造化为工。\n你已成为这个世界的一部分，世界也成为你的一部分。',
  '大乘': '大道将成，只差一步。你已站在了这个世界的巅峰。\n九天之上，劫云已至。',
  '渡劫': '九重天劫，毁天灭地。雷光中，你看到了另一个世界。\n渡过，则超凡入圣；不过，则灰飞烟灭。',
  };

export const LOCAL_STORY_TEMPLATES: any = {
  breakthrough: [
  '你盘膝而坐，灵力在经脉中奔涌。{realm}的瓶颈在你面前如同薄纸，稍加用力便豁然贯通。',
  '冥冥之中，你感受到天地灵气的召唤。{realm}的门槛在你脚下化为虚无，一股新生的力量在体内觉醒。',
  '历经千辛万苦，你的道心终于圆满。突破{realm}的瞬间，仿佛整个世界都为你让路。',
  ],
  adventure: [
  '你踏入{location}，四周灵气浓郁得几乎凝成实质。隐约间，你感知到前方有{reward}的气息……',
  '{location}中危机四伏，但你的直觉告诉你，这里藏着{reward}。你决定深入探索。',
  '在{location}的深处，你发现了一处古老的遗迹。{reward}的光芒从裂缝中透出。',
  ],
  death: [
  '你的肉身在{cause}中消散，但灵魂不灭。六道轮回的指引之光将你引向新生……',
  '死亡并非终结。你的灵魂穿越轮回，带着前世的记忆与修为，准备迎接新的开始。',
  ],
  companion: [
  '在一次历练中，你邂逅了{name}。她/他的修为深不可测，却对你另眼相看。',
  '{name}从远处走来，对你微微一笑。"道友，可愿同行一段？"',
  ],
  tribulation: [
  '天际乌云翻滚，{count}道天雷从天而降。每一道都蕴含着毁天灭地的力量。',
  '你抬头望天，{count}道雷霆如神龙般盘旋而下。这是天道对你修行的考验。',
  ],
  };

export const MAX_CACHE_SIZE: any = 200;

export const MISSION_TIME: any = 25 * 60;

export const MYRIAD_WORLDS: any = [
  {
  id: 'xiyou',
  name: '西游世界',
  icon: '🐒',
  desc: '"贪淫乐祸，是非恶海"——三界四洲，须弥山为中心，天庭、佛界、人间、地府并存',
  detail: '东胜神洲·西牛贺洲·南赡部洲·北俱芦洲',
  color1: 'rgba(30,60,20,.5)', color2: 'rgba(42,90,26,.3)',
  startHp: 80, startAtk: 12, startSpeed: 4.5,
  skillIds: ['attack','thunder','sword','wind','heal'], // 使用修仙技能
  continents: null, // null = 使用默认CONTINENT_LIST
  enemyScale: 1.0,
  extractTime: 5,    // 撤离时间秒
  missionTime: 25 * 60, // 总时间秒
  cleared: false,
  clearCount: 0,
  },
];

export const NARRATIVES: any = {
  combat: [
  '前方传来打斗之声，灵气波动剧烈。一个黑影从暗处扑来！',
  '你感知到一股杀气，前方林间有异兽出没，正朝你逼近。',
  '山道狭窄处，一头妖兽挡住了去路，眼中凶光毕露。',
  '一声咆哮震碎了四周的寂静，地面上出现了妖兽的爪痕。',
  ],
  treasure: [
  '你发现一处隐蔽的洞府，石门半掩，隐约有宝光透出。',
  '在一棵千年古树根部，感应到了微弱的灵气波动——下面埋着什么。',
  '一块奇石吸引了你的注意，敲开后发现里面有宝物。',
  '溪水冲刷出一块闪着微光的石头，你伸手捡起。',
  ],
  event: [
  '一位白发老者坐在路边，似乎在等什么人。',
  '前方出现一个分岔路口，两条路都弥漫着神秘的气息。',
  '远处传来悠扬琴声，似在引你前去。',
  '一阵奇异的风吹过，你隐约听到了低语声。',
  ],
  heal: [
  '你发现一处灵泉，泉水散发出温润的灵气。',
  '一棵灵果树上结满了果实，散发出沁人心脾的香气。',
  '废弃药园中，残存的灵药仍在静静生长。',
  '一缕阳光穿透云层，洒在你身上，疲惫顿消。',
  ],
  };

export const PLANET_BONUSES: any = {
  pair:{c:15,m:1}, twoPair:{c:20,m:1}, threeOfAKind:{c:20,m:1},
  straight:{c:30,m:2}, flush:{c:25,m:2}, fullHouse:{c:25,m:2},
  fourOfAKind:{c:30,m:3}, straightFlush:{c:40,m:3},
  highCard:{c:10,m:1}, royalFlush:{c:50,m:5}
};

export const SKILLS: any = [
  { id: 'attack',  name: '普攻',   icon: '⚔️', cost: 0,  cd: 0.4,  range: 1.5, dmgMult: 1.0, type: 'melee',  desc: '基础近战攻击' },
  { id: 'thunder', name: '掌心雷', icon: '⚡', cost: 8,  cd: 1.0,  range: 3.0, dmgMult: 1.6, type: 'ranged', desc: '远程雷电伤害', element: 'thunder' },
  { id: 'sword',   name: '剑气斩', icon: '🗡️', cost: 12, cd: 1.2,  range: 3.5, dmgMult: 2.0, type: 'ranged', desc: '远程剑气，高伤害', element: 'metal' },
  { id: 'wind',    name: '风刃',   icon: '🌪️', cost: 6,  cd: 0.6,  range: 2.5, dmgMult: 0.9, type: 'ranged', desc: '快速风刃，低消耗', element: 'wind' },
  { id: 'heal',    name: '回春术', icon: '💚', cost: 20, cd: 3.0,  range: 0,   dmgMult: 0,   type: 'heal',   desc: '回复自身气血', healAmt: 0.25 },
];

export const TUTORIAL_DATA: any = {

  version: 1,
  startNarrative: '灵气复苏，天地动荡。一介凡人，偶得仙缘，踏入修仙之路。前路漫漫，且行且看……',
  startTitle: '仙缘初现',

  chapters: [

  {
  id: 'ch1',
  title: '第一章·初入仙途',
  icon: '🌱',
  narrative: '你觉醒了灵根，感受到天地间游荡的灵气。虽是散修，但仙缘已至。',
  unlockCondition: null, // 始终可用
  tasks: [
  {
  id: 't1_1',
  title: '灵根觉醒',
  desc: '灵根乃是修仙根基，你已觉醒灵根。感受天地灵气，开始修炼吧。',
  hint: '灵根已自动觉醒，无需操作。',
  type: 'auto',
  checkCondition: (state) => state.rootType > 0,
  reward: { gold: 50, exp: 10 },
  rewardDesc: '灵根觉醒之礼：50灵石 + 10修为',
  narrative: '灵根既出，仙路初开。以这微薄灵石换取些许修炼资粮。',
  autoDelay: 3, // 3秒后自动完成
  },
  {
  id: 't1_2',
  title: '感受灵气',
  desc: '灵气乃修炼之源。静静感受灵气的流动，积累修为。',
  hint: '等待修为自然增长即可。',
  type: 'track',
  checkCondition: (state) => state.totalExp >= 50,
  reward: { gold: 30, herbs: 10, exp: 20 },
  rewardDesc: '30灵石 + 10灵草 + 20修为',
  narrative: '天地灵气缓缓流入体内，虽微弱却真实。这便是修仙的起点。',
  },
  {
  id: 't1_3',
  title: '选择功法',
  desc: '功法决定了修炼速度。进入【功法】页面，选择一门适合的功法。',
  hint: '点击底部导航栏的⚔️功法，选择修炼功法。',
  type: 'action',
  action: 'select_technique',
  checkCondition: (state) => state.technique !== 'basic',
  reward: { gold: 80, exp: 50 },
  rewardDesc: '80灵石 + 50修为',
  narrative: '选定功法，修炼之路有了方向。功法品质越高，修炼速度越快。',
  navigateTo: 'cultivate',
  },
  {
  id: 't1_4',
  title: '初聚灵气',
  desc: '持续修炼，积累1000点修为。',
  hint: '修为会自动增长，耐心等待即可。更好的功法和灵根品质会加速增长。',
  type: 'track',
  checkCondition: (state) => state.totalExp >= 1000,
  reward: { gold: 100, herbs: 30, exp: 100 },
  rewardDesc: '100灵石 + 30灵草 + 100修为',
  narrative: '千点修为入体，丹田渐渐充实。灵气在经脉中流转，修为初成。',
  },
  {
  id: 't1_5',
  title: '灵草初种',
  desc: '灵草是炼丹的材料。升级灵田等级到2级，增加灵草产量。',
  hint: '进入【洞府🏔️】页面，升级灵田。',
  type: 'action',
  action: 'upgrade_garden',
  checkCondition: (state) => state.herbGarden >= 2,
  reward: { gold: 60, herbs: 50 },
  rewardDesc: '60灵石 + 50灵草',
  narrative: '灵田开辟，灵草开始生长。日后炼丹全靠这些灵草了。',
  navigateTo: 'cave',
  },
  ]
  },

  {
  id: 'ch2',
  title: '第二章·初窥门径',
  icon: '⚔️',
  narrative: '修炼入门，便要面对突破与战斗的考验。',
  unlockCondition: (state) => state.totalExp >= 500,
  tasks: [
  {
  id: 't2_1',
  title: '初试突破',
  desc: '修为充足时，尝试突破境界！点击屏幕上的⚡突破按钮。',
  hint: '当修为满足时，点击右上角的突破胶囊按钮。突破有成功率，失败也正常。',
  type: 'track',
  checkCondition: (state) => state.totalBreakthroughs >= 1,
  reward: { gold: 200, exp: 200 },
  rewardDesc: '200灵石 + 200修为',
  narrative: '突破境界！灵气冲刷经脉，修为大增。修仙之路正式开启。',
  },
  {
  id: 't2_2',
  title: '炼制丹药',
  desc: '丹药可在战斗中恢复状态。进入洞府，使用灵草炼制第一颗丹药。',
  hint: '进入【洞府🏔️】页面，点击丹炉炼丹。',
  type: 'track',
  checkCondition: (state) => state.totalPills >= 1,
  reward: { gold: 150, herbs: 20 },
  rewardDesc: '150灵石 + 20灵草',
  narrative: '丹药在手，心中不慌。日后历险，丹药是保命之物。',
  navigateTo: 'cave',
  },
  {
  id: 't2_3',
  title: '初入险境',
  desc: '历练是获取装备和资源的途径。进入秘境，开始第一次历险。',
  hint: '点击🗺️游历按钮，选择进入秘境。',
  type: 'track',
  checkCondition: (state) => state.totalAdventures >= 1,
  reward: { gold: 300, exp: 300 },
  rewardDesc: '300灵石 + 300修为',
  narrative: '秘境之中危机四伏，但也蕴含机缘。勇敢面对吧！',
  },
  {
  id: 't2_4',
  title: '收获灵石',
  desc: '灵石是修仙界的通用货币。积累到500灵石。',
  hint: '灵石会随时间自动增长。境界越高，灵石获取速度越快。',
  type: 'track',
  checkCondition: (state) => state.totalGold >= 500,
  reward: { herbs: 100, exp: 150 },
  rewardDesc: '100灵草 + 150修为',
  narrative: '五百灵石到手，总算有了些修仙资本。可以考虑置办装备了。',
  },
  {
  id: 't2_5',
  title: '二次突破',
  desc: '继续修炼，尝试突破到第三个境界。',
  hint: '积累足够修为后，再次点击⚡突破。',
  type: 'track',
  checkCondition: (state) => state.totalBreakthroughs >= 2,
  reward: { gold: 500, herbs: 80, exp: 500 },
  rewardDesc: '500灵石 + 80灵草 + 500修为',
  narrative: '连破二境，你已非昨日凡人。修仙之路渐入佳境。',
  },
  ]
  },

  {
  id: 'ch3',
  title: '第三章·灵宠奇缘',
  icon: '🐾',
  narrative: '灵宠可辅助战斗和修炼，是修仙路上忠实的伙伴。',
  unlockCondition: (state) => state.totalBreakthroughs >= 2,
  tasks: [
  {
  id: 't3_1',
  title: '探索灵宠',
  desc: '进入灵宠页面，了解灵宠系统。',
  hint: '点击底部导航栏的🐾灵宠，浏览灵宠功能。',
  type: 'action',
  action: 'visit_pet_page',
  checkCondition: (state) => state.pets && state.pets.length >= 0, // 只要访问过即可
  reward: { gold: 100 },
  rewardDesc: '100灵石',
  narrative: '灵宠有灵性，能感应主人心意。快去寻一只灵宠吧！',
  navigateTo: 'pet',
  autoAfterVisit: 'pet',
  },
  {
  id: 't3_2',
  title: '猎获灵宠',
  desc: '在灵宠页面狩猎，获得你的第一只灵宠。',
  hint: '在灵宠页面点击狩猎按钮，有机会获得灵宠。',
  type: 'track',
  checkCondition: (state) => state.pets && state.pets.length >= 1,
  reward: { gold: 300, herbs: 50, exp: 200 },
  rewardDesc: '300灵石 + 50灵草 + 200修为',
  narrative: '灵宠到手！它将伴你征战四方。记得出战激活灵宠的被动效果。',
  navigateTo: 'pet',
  },
  {
  id: 't3_3',
  title: '出战灵宠',
  desc: '获得灵宠后，将其设为出战状态，享受灵宠的属性加成。',
  hint: '在灵宠页面，点击灵宠的出战按钮。',
  type: 'track',
  checkCondition: (state) => !!state.activePet,
  reward: { gold: 200, exp: 300 },
  rewardDesc: '200灵石 + 300修为',
  narrative: '灵宠出战，被动效果生效！修炼和战斗都将得到助力。',
  navigateTo: 'pet',
  },
  {
  id: 't3_4',
  title: '采集灵草',
  desc: '持续积累灵草，收集到200株灵草。',
  hint: '灵草通过灵田自动产出，升级灵田可增加产量。',
  type: 'track',
  checkCondition: (state) => state.totalHerbs >= 200,
  reward: { gold: 250, exp: 250 },
  rewardDesc: '250灵石 + 250修为',
  narrative: '灵草盈门，日后炼丹无忧。积少成多，厚积薄发。',
  },
  ]
  },

  {
  id: 'ch4',
  title: '第四章·装备锻造',
  icon: '🛡️',
  narrative: '灵力虽好，装备亦不可少。武器、防具、法宝，皆是战力之源。',
  unlockCondition: (state) => state.totalBreakthroughs >= 2,
  tasks: [
  {
  id: 't4_1',
  title: '初窥装备',
  desc: '进入装备页面，了解装备系统。',
  hint: '点击底部导航栏🛡️装备。',
  type: 'action',
  action: 'visit_equip_page',
  checkCondition: (state) => true, // 通过autoAfterVisit触发
  reward: { gold: 100 },
  rewardDesc: '100灵石',
  narrative: '装备可提升攻防属性。先看看有什么可用的吧。',
  navigateTo: 'equip',
  autoAfterVisit: 'equip',
  },
  {
  id: 't4_2',
  title: '首次锻造',
  desc: '使用锻造炉锻造一件装备。',
  hint: '在装备页面选择锻造，消耗灵石获得装备。',
  type: 'track',
  checkCondition: (state) => {
  const eq = state.equipment;
  return (state.equipBag && state.equipBag.length >= 1) ||
   !!(eq.weapon || eq.armor || eq.accessory || eq.talisman);
  },
  reward: { gold: 200, herbs: 30, exp: 200 },
  rewardDesc: '200灵石 + 30灵草 + 200修为',
  narrative: '锻造成功！装备提供的属性加成将大幅提升你的实力。',
  navigateTo: 'equip',
  },
  {
  id: 't4_3',
  title: '穿戴装备',
  desc: '将锻造的装备穿戴到身上。',
  hint: '在装备页面，将背包中的装备穿戴到对应栏位。',
  type: 'track',
  checkCondition: (state) => {
  const eq = state.equipment;
  return !!(eq.weapon || eq.armor || eq.accessory || eq.talisman);
  },
  reward: { gold: 300, exp: 300 },
  rewardDesc: '300灵石 + 300修为',
  narrative: '装备入体，攻防大增！修仙不只是苦修，资源同样重要。',
  navigateTo: 'equip',
  },
  ]
  },

  {
  id: 'ch5',
  title: '第五章·渐入佳境',
  icon: '✨',
  narrative: '基础已成，是时候探索更广阔的修仙世界了。',
  unlockCondition: (state) => state.totalBreakthroughs >= 3,
  tasks: [
  {
  id: 't5_1',
  title: '进入市集',
  desc: '市集可购买灵草、丹药和特殊道具。去逛逛吧！',
  hint: '点击🗺️游历按钮，选择市集。',
  type: 'action',
  action: 'visit_commerce',
  checkCondition: (state) => state.shopBuyCount >= 1,
  reward: { gold: 200, herbs: 50 },
  rewardDesc: '200灵石 + 50灵草',
  narrative: '市集中琳琅满目，不愧是修仙界的贸易中心。物尽其用！',
  navigateTo: 'commerce',
  },
  {
  id: 't5_2',
  title: '三次突破',
  desc: '继续修炼，累计突破三次。',
  hint: '修炼积累修为，满足条件后突破。',
  type: 'track',
  checkCondition: (state) => state.totalBreakthroughs >= 3,
  reward: { gold: 500, herbs: 100, exp: 500 },
  rewardDesc: '500灵石 + 100灵草 + 500修为',
  narrative: '三境既破，根基渐稳。前方还有更广阔的天地等着你。',
  },
  {
  id: 't5_3',
  title: '副修分支',
  desc: '了解副修系统，为修炼增加额外的属性加成。',
  hint: '点击底部🔀副修，了解各种副修分支。',
  type: 'action',
  action: 'visit_subbranch',
  checkCondition: (state) => true,
  reward: { gold: 200, exp: 200 },
  rewardDesc: '200灵石 + 200修为',
  narrative: '武道、丹道、器道……每一条副修之路都能带来不同的收益。',
  navigateTo: 'subbranch',
  autoAfterVisit: 'subbranch',
  },
  {
  id: 't5_4',
  title: '收集灵草',
  desc: '灵草是炼丹之本，持续积累到500株。',
  hint: '升级灵田增加灵草产量。',
  type: 'track',
  checkCondition: (state) => state.totalHerbs >= 500,
  reward: { gold: 400, exp: 400 },
  rewardDesc: '400灵石 + 400修为',
  narrative: '灵草五百，足以支撑一段时期的炼丹需求了。',
  },
  ]
  },

  {
  id: 'ch6',
  title: '第六章·道途漫漫',
  icon: '🌟',
  narrative: '修仙之路愈行愈深，更多系统等待你的探索。',
  unlockCondition: (state) => state.totalBreakthroughs >= 4,
  tasks: [
  {
  id: 't6_1',
  title: '五次突破',
  desc: '累计突破五次，实力大增。',
  hint: '继续修炼突破。',
  type: 'track',
  checkCondition: (state) => state.totalBreakthroughs >= 5,
  reward: { gold: 1000, herbs: 200, exp: 1000 },
  rewardDesc: '1000灵石 + 200灵草 + 1000修为',
  narrative: '五境连破！你已不是当初那个懵懂散修了。仙路之上，你已走出一段不短的距离。',
  },
  {
  id: 't6_2',
  title: '灵宠出战',
  desc: '至少猎获3只灵宠，丰富你的灵宠阵容。',
  hint: '在灵宠页面多次狩猎。',
  type: 'track',
  checkCondition: (state) => state.pets && state.pets.length >= 3,
  reward: { gold: 500, herbs: 100 },
  rewardDesc: '500灵石 + 100灵草',
  narrative: '三宠齐出，阵容渐成。灵宠协同作战，威力倍增。',
  },
  {
  id: 't6_3',
  title: '装备齐全',
  desc: '穿戴武器、防具、饰品、法宝四件装备。',
  hint: '通过锻造和秘境获取装备，填满四个装备栏位。',
  type: 'track',
  checkCondition: (state) => {
  const eq = state.equipment;
  return !!(eq.weapon && eq.armor && eq.accessory && eq.talisman);
  },
  reward: { gold: 800, exp: 600 },
  rewardDesc: '800灵石 + 600修为',
  narrative: '四件装备齐全，攻防兼备。完整的装备体系将是你闯荡的保障。',
  navigateTo: 'equip',
  },
  {
  id: 't6_4',
  title: '千灵之资',
  desc: '累计获得10000灵石，证明你的商业头脑。',
  hint: '灵石随境界增长自动累积。',
  type: 'track',
  checkCondition: (state) => state.totalGold >= 10000,
  reward: { herbs: 500, exp: 800 },
  rewardDesc: '500灵草 + 800修为',
  narrative: '万灵石已入囊中！在修仙界，灵石就是硬通货。你已是小有资财的修士了。',
  },
  ]
  },

  {
  id: 'ch7',
  title: '第七章·仙路无极',
  icon: '🌈',
  narrative: '家族、道侣、宗门……修仙世界的社交系统等你探索。教程至此，后续之路自行探索！',
  unlockCondition: (state) => state.totalBreakthroughs >= 6,
  tasks: [
  {
  id: 't7_1',
  title: '了解家族',
  desc: '家族系统可提供额外加成和后代培养。去了解一下吧！',
  hint: '点击底部👨👩👧家族按钮。',
  type: 'action',
  action: 'visit_family',
  checkCondition: (state) => true,
  reward: { gold: 300, herbs: 100 },
  rewardDesc: '300灵石 + 100灵草',
  narrative: '家族是传承的根基。建立家族，培养后代，仙道延续。',
  navigateTo: 'family',
  autoAfterVisit: 'family',
  },
  {
  id: 't7_2',
  title: '了解道侣',
  desc: '道侣可提供修炼加成。去看看道侣系统！',
  hint: '点击底部💕道侣按钮。',
  type: 'action',
  action: 'visit_companion',
  checkCondition: (state) => true,
  reward: { gold: 300, herbs: 100 },
  rewardDesc: '300灵草 + 100灵石',
  narrative: '修仙之路漫漫，有个道侣同行不孤单。道侣加成可是实打实的！',
  navigateTo: 'companion',
  autoAfterVisit: 'companion',
  },
  {
  id: 't7_3',
  title: '八次突破',
  desc: '累计突破八次，正式踏入修仙之路的中期。',
  hint: '继续修炼突破，注意突破成功率。',
  type: 'track',
  checkCondition: (state) => state.totalBreakthroughs >= 8,
  reward: { gold: 2000, herbs: 300, exp: 2000 },
  rewardDesc: '2000灵石 + 300灵草 + 2000修为',
  narrative: '八境已破！你已是一位有经验的修士了。后续的道路需要你自己探索——炼体、词条、天劫、转世……凡人修仙的旅途，才刚刚开始。',
  },
  ]
  },
  ],

  milestones: [
  { id: 'm_first_break', title: '初破境界', desc: '完成第一次境界突破', icon: '⚡', condition: (s) => s.totalBreakthroughs >= 1 },
  { id: 'm_first_pet', title: '灵宠之友', desc: '获得第一只灵宠', icon: '🐾', condition: (s) => s.pets && s.pets.length >= 1 },
  { id: 'm_first_equip', title: '装备初成', desc: '穿戴第一件装备', icon: '🛡️', condition: (s) => { const e = s.equipment; return !!(e.weapon || e.armor || e.accessory || e.talisman); } },
  { id: 'm_1k_exp', title: '千修之才', desc: '累计获得1000修为', icon: '📚', condition: (s) => s.totalExp >= 1000 },
  { id: 'm_1k_gold', title: '千灵之资', desc: '累计获得1000灵石', icon: '💰', condition: (s) => s.totalGold >= 1000 },
  { id: 'm_5_break', title: '五破仙关', desc: '累计突破五次', icon: '🌟', condition: (s) => s.totalBreakthroughs >= 5 },
  { id: 'm_3_pets', title: '灵宠三杰', desc: '拥有3只灵宠', icon: '🐲', condition: (s) => s.pets && s.pets.length >= 3 },
  { id: 'm_full_equip', title: '四件齐全', desc: '穿戴全部四个装备栏位', icon: '⚔️', condition: (s) => { const e = s.equipment; return !!(e.weapon && e.armor && e.accessory && e.talisman); } },
  ],
};

export const TS: any = 32;
