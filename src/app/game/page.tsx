"use client";

import { useState, useEffect, useCallback } from "react";

export default function GamePage() {
  const [cultivator, setCultivator] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("home");
  const [event, setEvent] = useState<any>(null);
  const [eventResult, setEventResult] = useState<any>(null);
  const [toast, setToast] = useState<string | null>(null);
  const [subData, setSubData] = useState<any>(null);
  const [isBusy, setIsBusy] = useState(false);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2800);
  };

  const fetchState = useCallback(async () => {
    try {
      const res = await fetch("/api/game/state");
      if (res.ok) {
        const data = await res.json();
        setCultivator(data.cultivator);
      }
    } catch {
      // network error - ignore
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchState(); }, [fetchState]);

  const api = async (path: string, body?: any) => {
    if (isBusy) return null;
    setIsBusy(true);
    try {
      const opts: any = { method: body != null ? "POST" : "GET" };
      if (body != null) {
        opts.headers = { "Content-Type": "application/json" };
        opts.body = JSON.stringify(body);
      }
      const res = await fetch(path, opts);
      const data = await res.json();
      if (data.error) showToast(data.error);
      return data;
    } finally {
      setIsBusy(false);
    }
  };

  // 修炼
  const cultivate = async () => {
    const d = await api("/api/game/cultivate", {});
    if (d?.expGain) { showToast(`修炼获得 ${d.expGain} 经验 +${d.goldGain} 灵石`); fetchState(); }
  };

  // 突破
  const breakthrough = async () => {
    const d = await api("/api/game/breakthrough", {});
    if (d?.success) { showToast(`突破成功！${d.newRealm}`); }
    else if (d) showToast("突破失败，继续修炼吧");
    fetchState();
  };

  // 触发事件
  const triggerEvent = async () => {
    const d = await api("/api/ai/event/trigger", {});
    if (d?.event) { setEvent(d.event); setEventResult(null); }
  };

  // 解决事件
  const resolveEvent = async (idx: number) => {
    const d = await api("/api/ai/event/resolve", { eventId: event?.id, choiceIdx: idx });
    if (d?.result) { setEventResult(d.result); setEvent(null); fetchState(); }
  };

  // 探索
  const explore = async () => {
    const d = await api("/api/game/explore", {});
    if (d) { setSubData(d); showToast(d.log || "探索完成"); if (d.expGain) fetchState(); }
  };

  // 炼丹
  const brew = async (idx: number) => {
    const d = await api("/api/game/alchemy", { recipeIdx: idx });
    if (d) { showToast(d.log || "炼制完成"); fetchState(); loadTabData("alchemy"); }
  };

  // 购买
  const buy = async (idx: number) => {
    const d = await api("/api/game/shop", { itemIdx: idx });
    if (d?.success) { showToast(`购买了 ${d.item}`); fetchState(); loadTabData("shop"); }
  };

  // 渡劫
  const tribulate = async (strategy: string) => {
    const d = await api("/api/game/tribulation", { strategy });
    if (d) { showToast(d.log || "渡劫结束"); fetchState(); loadTabData("tribulation"); }
  };

  const loadTabData = useCallback(async (tab: string) => {
    const routes: Record<string, string> = {
      inventory: "/api/game/inventory",
      alchemy: "/api/game/alchemy",
      techniques: "/api/game/techniques",
      pets: "/api/game/pets",
      tribulation: "/api/game/tribulation",
      shop: "/api/game/shop",
    };
    const path = routes[tab];
    if (!path) return;
    const d = await api(path);
    if (d) setSubData(d);
  }, [isBusy]);

  const switchTab = (tab: string) => {
    setActiveTab(tab);
    setSubData(null);
    setEvent(null);
    setEventResult(null);
    loadTabData(tab);
  };

  if (loading) return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="text-3xl mb-4">🌀</div>
        <div className="text-paper3">灵气汇聚中...</div>
      </div>
    </div>
  );

  if (!cultivator) return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="panel text-center">
        <div className="text-3xl mb-4">📜</div>
        <div className="text-paper2 mb-4">尚无修仙角色</div>
        <a href="/create" className="btn btn-primary">踏入仙途</a>
      </div>
    </div>
  );

  const st = cultivator.state || {};
  const hp = st.hp || 0, maxHp = st.maxHp || 100;
  const mp = st.mp || 0, maxMp = st.maxMp || 50;
  const exp = st.exp || 0, expNeeded = st.expNeeded || 100;
  const realmName = st.realmName || "炼气期";

  return (
    <div className="min-h-screen pb-24">
      {/* ====== Header ====== */}
      <header style={{ background: "rgba(10,14,22,0.92)", backdropFilter: "blur(16px)", borderBottom: "1px solid var(--ink4)", position: "sticky", top: 0, zIndex: 30, padding: "12px 16px" }}>
        <div className="max-w-game mx-auto">
          {/* 道号 + 境界 */}
          <div className="flex items-center justify-between mb-3">
            <div>
              <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--gold)" }}>
                {cultivator.daoName || cultivator.name}
              </div>
              <div style={{ fontSize: "0.75rem", color: "var(--paper4)" }}>
                {cultivator.spiritualRoot} · {realmName}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <div style={{ fontSize: "0.8rem", color: "var(--gold)" }}>💎 {st.gold || 0}</div>
                <div style={{ fontSize: "0.7rem", color: "var(--paper4)" }}>
                  🕐 寿元 {st.lifespan || 100}
                </div>
              </div>
            </div>
          </div>

          {/* 状态条 */}
          <div style={{ fontSize: "0.7rem" }}>
            {[
              { label: "气血", pct: hp / maxHp, cls: "hp", val: `${hp}/${maxHp}` },
              { label: "灵力", pct: mp / maxMp, cls: "mp", val: `${mp}/${maxMp}` },
              { label: "修为", pct: exp / expNeeded, cls: "exp", val: `${exp}/${expNeeded}` },
            ].map((bar, i) => (
              <div key={i} className="flex items-center gap-2" style={{ marginBottom: 2 }}>
                <span style={{ width: 32, color: "var(--paper4)" }}>{bar.label}</span>
                <div className="stat-bar" style={{ flex: 1 }}>
                  <div className={`stat-bar-fill ${bar.cls}`} style={{ width: `${Math.min(100, bar.pct * 100)}%` }} />
                </div>
                <span style={{ width: 48, textAlign: "right", color: "var(--paper3)", fontSize: "0.65rem" }}>{bar.val}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ====== Main Content ====== */}
      <main className="max-w-game mx-auto px-4 pt-4 space-y-3">

        {/* ====== 主页 ====== */}
        {activeTab === "home" && (
          <>
            {/* 属性面板 */}
            <div className="panel">
              <div className="flex items-center justify-between mb-3">
                <div className="text-gold font-bold">修仙面板</div>
                <div className="text-xs" style={{ color: "var(--paper4)" }}>
                  {cultivator.constitution || "凡体"} · {st.subBranch || ""}
                </div>
              </div>
              <div className="grid-2" style={{ fontSize: "0.85rem" }}>
                {[
                  ["⚔️ 攻击", st.atk || 5, "var(--cinnabarG)"],
                  ["🛡️ 防御", st.def || 3, "var(--azure)"],
                  ["💨 速度", st.spd || 10, "var(--jadeG)"],
                  ["🍀 幸运", st.luck || 0, "var(--gold)"],
                  ["📈 修炼速度", `x${st.expRate || 1}`, "var(--violet)"],
                  ["☠️ 丹毒", st.pillToxicity || 0, "var(--amber)"],
                ].map(([label, val, color], i) => (
                  <div key={i} className="flex justify-between" style={{ padding: "6px 0", borderBottom: "1px solid var(--ink4)" }}>
                    <span style={{ color: "var(--paper3)" }}>{label}</span>
                    <span style={{ color }}>{val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 修炼操作 */}
            <div className="grid-3">
              <button onClick={cultivate} disabled={isBusy} className="btn btn-jade btn-block">
                🧘 修炼
              </button>
              <button onClick={breakthrough} disabled={isBusy} className="btn btn-primary btn-block">
                ⚡ 突破
              </button>
              <button onClick={triggerEvent} disabled={isBusy} className="btn btn-violet btn-block">
                🎲 奇遇
              </button>
            </div>

            {/* 快捷入口 */}
            <div className="grid-3">
              {[
                ["/body", "🧬", "身体"],
                ["/combat", "⚔️", "战斗"],
                ["/equipment", "🗡️", "装备"],
                ["/game?tab=explore", "🗺️", "探索"],
                ["/game?tab=alchemy", "⚗️", "炼丹"],
                ["/admin", "👑", "管理"],
              ].map(([href, icon, label]) => (
                <a key={href} href={href} className="item-cell" style={{ textDecoration: "none" }}>
                  <div className="item-icon">{icon}</div>
                  <div style={{ fontSize: "0.65rem", color: "var(--paper3)", marginTop: 4 }}>{label}</div>
                </a>
              ))}
            </div>

            {/* AI 事件 */}
            {event && (
              <div className="event-card">
                <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--violet)", marginBottom: 8 }}>
                  {event.title}
                </div>
                <div style={{ fontSize: "0.9rem", color: "var(--paper2)", marginBottom: 12, lineHeight: 1.6 }}>
                  {event.narrative}
                </div>
                {event.choices?.map((c: any, i: number) => (
                  <button key={i} onClick={() => resolveEvent(i)} className="choice-btn">
                    <div className="flex justify-between items-center">
                      <span>{c.text}</span>
                      <span style={{ fontSize: "0.75rem", color: "var(--paper4)" }}>
                        {Math.round((c.successRate || 0.5) * 100)}%
                      </span>
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "var(--paper3)", marginTop: 4 }}>{c.hint}</div>
                  </button>
                ))}
              </div>
            )}

            {/* 事件结果 */}
            {eventResult && (
              <div className="event-result">
                <div style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: 8, color: eventResult.success ? "var(--jadeG)" : "var(--cinnabarG)" }}>
                  {eventResult.success ? "✨ 顺利" : "💀 不测"}
                </div>
                <div style={{ fontSize: "0.9rem", color: "var(--paper2)", lineHeight: 1.6, marginBottom: 8 }}>
                  {eventResult.narrative}
                </div>
                {eventResult.rewards?.length > 0 && (
                  <div style={{ fontSize: "0.85rem", color: "var(--gold)" }}>
                    获得：{eventResult.rewards.map((r: any) => `${r.type} +${r.amount}`).join(" · ")}
                  </div>
                )}
              </div>
            )}
          </>
        )}

        {/* ====== 探索 ====== */}
        {activeTab === "explore" && (
          <div className="panel">
            <div className="text-gold font-bold mb-3">🗺️ 探索秘境</div>
            <button onClick={explore} disabled={isBusy} className="btn btn-azure btn-block mb-4">踏入秘境</button>
            {subData && (
              <div style={{ fontSize: "0.85rem", lineHeight: 1.7 }}>
                {subData.biome && (
                  <div style={{ color: "var(--jadeG)", marginBottom: 8 }}>
                    📍 {subData.biome.name || subData.biome}
                  </div>
                )}
                {subData.log && <div style={{ color: "var(--paper2)" }}>{subData.log}</div>}
                {subData.expGain && <div style={{ color: "var(--gold)", marginTop: 4 }}>经验 +{subData.expGain}</div>}
              </div>
            )}
          </div>
        )}

        {/* ====== 背包 ====== */}
        {activeTab === "inventory" && (
          <div className="panel">
            <div className="text-gold font-bold mb-3">
              🎒 背包 · <span style={{ color: "var(--gold)", fontSize: "0.8rem" }}>💎{subData?.gold || st.gold || 0}</span>
            </div>
            {subData?.inventory?.length > 0 ? (
              <div className="grid-4">
                {subData.inventory.map((item: any, i: number) => (
                  <div key={i} className="item-cell">
                    <div className="item-icon">{item.icon || "📦"}</div>
                    <div style={{ fontSize: "0.65rem", color: "var(--paper3)", marginTop: 4, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                      {item.name}
                    </div>
                    {item.count > 1 && <div style={{ fontSize: "0.6rem", color: "var(--gold)" }}>x{item.count}</div>}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8" style={{ color: "var(--paper4)" }}>
                <div className="text-3xl mb-2">🎒</div>
                空空如也
              </div>
            )}
          </div>
        )}

        {/* ====== 炼丹 ====== */}
        {activeTab === "alchemy" && (
          <div className="panel">
            <div className="text-gold font-bold mb-3">
              ⚗️ 炼丹 · <span style={{ fontSize: "0.8rem", color: "var(--amber)" }}>丹毒: {subData?.currentToxicity || 0}</span>
            </div>
            {subData?.recipes?.map((r: any, i: number) => (
              <div key={i} className="flex justify-between items-center"
                style={{ padding: "10px 0", borderBottom: "1px solid var(--ink4)" }}>
                <div>
                  <div style={{ fontSize: "0.9rem", color: "var(--paper2)" }}>{r.name || `丹方${i + 1}`}</div>
                  <div style={{ fontSize: "0.7rem", color: "var(--paper4)" }}>
                    成功率 {Math.round((r.successRate || 0.7) * 100)}%
                  </div>
                </div>
                <button onClick={() => brew(i)} disabled={isBusy} className="btn btn-amber btn-sm">炼制</button>
              </div>
            )) || <div className="text-paper4 text-center py-4">暂无丹方</div>}
          </div>
        )}

        {/* ====== 功法 ====== */}
        {activeTab === "techniques" && (
          <div className="panel">
            <div className="text-gold font-bold mb-3">📜 功法</div>
            <div style={{ fontSize: "0.9rem", color: "var(--azure)", marginBottom: 12 }}>
              当前功法：{st.technique || "凡武·外劲"}
            </div>
            {subData?.learned?.length > 0 ? subData.learned.map((t: any, i: number) => (
              <div key={i} style={{
                padding: "10px 0", borderBottom: "1px solid var(--ink4)",
                fontSize: "0.85rem", color: "var(--paper2)"
              }}>
                {typeof t === "string" ? t : t.name || JSON.stringify(t)}
              </div>
            )) : <div className="text-paper4 text-center py-4">尚未修习其他功法</div>}
          </div>
        )}

        {/* ====== 灵宠 ====== */}
        {activeTab === "pets" && (
          <div className="panel">
            <div className="text-gold font-bold mb-3">🐉 灵宠</div>
            {subData?.pets?.length > 0 ? subData.pets.map((p: any, i: number) => (
              <div key={i} className="flex justify-between items-center"
                style={{ padding: "10px 0", borderBottom: "1px solid var(--ink4)" }}>
                <span style={{ fontSize: "0.9rem", color: "var(--paper2)" }}>
                  {p.icon || "🐉"} {p.name || "未知灵宠"}
                </span>
                <span style={{ fontSize: "0.75rem", color: "var(--gold)" }}>{p.grade || "凡级"}</span>
              </div>
            )) : (
              <div className="text-center py-8" style={{ color: "var(--paper4)" }}>
                <div className="text-3xl mb-2">🥚</div>
                尚无灵宠
              </div>
            )}
          </div>
        )}

        {/* ====== 天劫 ====== */}
        {activeTab === "tribulation" && (
          <div className="panel">
            <div className="text-gold font-bold mb-3">⚡ 天劫</div>
            {subData?.next ? (
              <>
                <div style={{ fontSize: "0.95rem", color: "var(--cinnabarG)", marginBottom: 4 }}>
                  {subData.next.name || "天劫将至"}
                </div>
                <div style={{ fontSize: "0.8rem", color: "var(--paper4)", marginBottom: 12 }}>
                  成功率：{Math.round((subData.next.successRate || 0.5) * 100)}%
                  {" · "}已渡 {subData.history?.length || 0}/{subData.total || 0} 劫
                </div>
                <div className="grid-2">
                  {[
                    ["face", "正面硬抗", "var(--cinnabar)"],
                    ["defend", "防御渡劫", "var(--azure)"],
                    ["dodge", "闪避渡劫", "var(--jade)"],
                    ["use_item", "使用法宝", "var(--violet)"],
                  ].map(([s, label, color], i) => (
                    <button key={i} onClick={() => tribulate(s)} disabled={isBusy}
                      className="btn btn-sm" style={{ background: color, color: "var(--paper)", width: "100%" }}>
                      {label}
                    </button>
                  ))}
                </div>
              </>
            ) : <div className="text-paper4 text-center py-4">暂无天劫信息</div>}
          </div>
        )}

        {/* ====== 商店 ====== */}
        {activeTab === "shop" && (
          <div className="panel">
            <div className="text-gold font-bold mb-3">
              🏪 坊市 · <span style={{ fontSize: "0.8rem" }}>💎{subData?.gold || st.gold || 0}</span>
            </div>
            {subData?.shop?.map((item: any, i: number) => (
              <div key={i} className="flex justify-between items-center"
                style={{ padding: "8px 0", borderBottom: "1px solid var(--ink4)" }}>
                <div className="flex items-center gap-2">
                  <span style={{ fontSize: "1.2rem" }}>{item.icon}</span>
                  <span style={{ fontSize: "0.85rem", color: "var(--paper2)" }}>{item.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span style={{ fontSize: "0.8rem", color: "var(--gold)" }}>💎{item.basePrice}</span>
                  <button onClick={() => buy(i)} disabled={isBusy} className="btn btn-primary btn-sm">购买</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ====== 战斗入口 ====== */}
        {activeTab === "combat" && (
          <div className="panel text-center py-8">
            <div className="text-3xl mb-3">⚔️</div>
            <div style={{ color: "var(--paper2)", marginBottom: 12 }}>寻妖历练，以战养战</div>
            <a href="/combat" className="btn btn-primary">进入战斗</a>
          </div>
        )}

        {/* ====== 装备入口 ====== */}
        {activeTab === "equipment" && (
          <div className="panel text-center py-8">
            <div className="text-3xl mb-3">🗡️</div>
            <div style={{ color: "var(--paper2)", marginBottom: 12 }}>装备管理与强化</div>
            <a href="/equipment" className="btn btn-primary">进入装备</a>
          </div>
        )}

      </main>

      {/* ====== 底部导航 ====== */}
      <nav className="bottom-nav">
        <div className="bottom-nav-inner">
          {[
            ["home", "🏠", "主页"],
            ["combat", "⚔️", "战斗"],
            ["equipment", "🗡️", "装备"],
            ["explore", "🗺️", "探索"],
            ["inventory", "🎒", "背包"],
            ["alchemy", "⚗️", "炼丹"],
            ["techniques", "📜", "功法"],
            ["pets", "🐉", "灵宠"],
            ["tribulation", "⚡", "天劫"],
            ["shop", "🏪", "坊市"],
          ].map(([id, icon, label]) => (
            <button key={id} onClick={() => switchTab(id)} className={`nav-item ${activeTab === id ? "active" : ""}`}>
              <span className="nav-icon">{icon}</span>
              {label}
            </button>
          ))}
        </div>
      </nav>

      {/* ====== Toast ====== */}
      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}
