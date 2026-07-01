// 拍卖系统
// 从 v0.35 迁移 - 共 2 个常量

export const AUCTION_HOUSES: any = [
  { name:'凡俗拍卖场', icon:'🏠', minRealm:0, maxRealm:14, grades:['凡级','黄级'], color:'#8B7355', desc:'炼气~筑基修士的交易之所', npcWealth:[500,5000] },
  { name:'灵宝拍卖场', icon:'💎', minRealm:15, maxRealm:22, grades:['黄级','玄级'], color:'#4169E1', desc:'金丹~元婴修士的灵宝交流', npcWealth:[5000,50000] },
  { name:'天材拍卖场', icon:'🌟', minRealm:23, maxRealm:30, grades:['玄级','地级'], color:'#9932CC', desc:'化神~合体修士的天材地宝', npcWealth:[50000,500000] },
  { name:'仙缘拍卖场', icon:'✨', minRealm:31, maxRealm:36, grades:['地级','天级'], color:'#FFD700', desc:'渡劫~大乘修士的仙缘盛会', npcWealth:[500000,5000000] },
  { name:'至高拍卖场', icon:'👑', minRealm:37, maxRealm:99, grades:['天级','仙级'], color:'#FF4500', desc:'散仙以上的至高拍卖，无上机缘', npcWealth:[5000000,50000000] },
];

export const AUCTION_NPC_NAMES: any = [
  '玄音子','天机阁主','隐世散修','灵鉴司长老','虚空商人','九幽老祖','紫霞仙姑','赤炎真人',
  '玄冰道人','清风居士','碧落仙子','黄泉鬼王','青莲剑仙','白云居士','玄天教主','灵宝天尊',
  '太虚道人','无极老祖','逍遥散人','紫阳真人','天外飞仙','混沌魔尊','太上长老','轮回使者',
  '幽冥鬼帝','金光上人','碧海潮生','苍穹剑圣','星河老祖','万宝阁主'
];
