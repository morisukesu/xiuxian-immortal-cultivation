"use client";
import { useState, useEffect, useCallback } from "react";

export default function EquipmentPage() {
  const [data, setData] = useState<any>(null);
  const [busy, setBusy] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (m: string) => { setToast(m); setTimeout(() => setToast(null), 2500); };

  const fetchState = useCallback(async () => {
    try {
      const res = await fetch("/api/game/equipment");
      if (res.ok) setData(await res.json());
    } catch {}
  }, []);

  useEffect(() => { fetchState(); }, [fetchState]);

  const api = async (body: any) => {
    setBusy(true);
    try {
      const res = await fetch("/api/game/equipment", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
      const d = await res.json();
      if (d.error) { showToast(d.error); return; }
      showToast(d.success ? "操作成功" : "操作完成");
      fetchState();
    } finally { setBusy(false); }
  };

  if (!data) return <div className="min-h-screen flex items-center justify-center"><div className="text-paper4">加载中...</div></div>;

  const equipped = data.equipped || {};
  const inventory = data.inventory || [];
  const slotNames = data.slotNames || {};
  const slotIcons = data.slotIcons || {};
  const slots = data.slots || [];

  // 计算总属性
  let totalAtk = 0, totalDef = 0, totalHp = 0, totalMp = 0;
  for (const slot of slots) { const e = equipped[slot]; if (e) { totalAtk += e.atk||0; totalDef += e.def||0; totalHp += e.hp||0; totalMp += e.mp||0; } }

  return (
    <div className="min-h-screen pb-24" style={{ background: "var(--bg)", color: "var(--text)" }}>
      <header style={{ background: "rgba(10,14,22,0.92)", backdropFilter: "blur(16px)", borderBottom: "1px solid var(--ink4)", position: "sticky", top: 0, zIndex: 30, padding: "12px 16px" }}>
        <div className="max-w-game mx-auto flex items-center justify-between">
          <a href="/game" style={{ color: "var(--paper4)", fontSize: "0.85rem" }}>← 返回</a>
          <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--gold)" }}>⚔️ 装备</div>
          <div style={{ width: 60 }} />
        </div>
      </header>

      <main className="max-w-game mx-auto px-4 pt-4 space-y-3">
        {/* 总属性面板 */}
        <div className="panel">
          <div className="text-gold font-bold mb-2 text-sm">📊 装备总属性</div>
          <div className="grid grid-cols-4 gap-2 text-center text-xs">
            <div style={{ padding: "8px 0", background: "var(--ink2)", borderRadius: 6 }}>
              <div style={{ color: "var(--paper4)", fontSize: "0.65rem" }}>攻击</div>
              <div style={{ color: "var(--cinnabarG)", fontWeight: 700, fontSize: "1rem" }}>+{totalAtk}</div>
            </div>
            <div style={{ padding: "8px 0", background: "var(--ink2)", borderRadius: 6 }}>
              <div style={{ color: "var(--paper4)", fontSize: "0.65rem" }}>防御</div>
              <div style={{ color: "var(--azure)", fontWeight: 700, fontSize: "1rem" }}>+{totalDef}</div>
            </div>
            <div style={{ padding: "8px 0", background: "var(--ink2)", borderRadius: 6 }}>
              <div style={{ color: "var(--paper4)", fontSize: "0.65rem" }}>气血</div>
              <div style={{ color: "var(--jade)", fontWeight: 700, fontSize: "1rem" }}>+{totalHp}</div>
            </div>
            <div style={{ padding: "8px 0", background: "var(--ink2)", borderRadius: 6 }}>
              <div style={{ color: "var(--paper4)", fontSize: "0.65rem" }}>灵力</div>
              <div style={{ color: "var(--violet)", fontWeight: 700, fontSize: "1rem" }}>+{totalMp}</div>
            </div>
          </div>
        </div>

        {/* 装备槽位 */}
        <div className="panel">
          <div className="text-gold font-bold mb-2 text-sm">📋 装备槽位</div>
          {slots.map((slot: string) => {
            const e = equipped[slot];
            return (
              <div key={slot} className="flex items-center justify-between" style={{ padding: "8px 0", borderBottom: "1px solid var(--ink4)" }}>
                <div className="flex items-center gap-2">
                  <span style={{ fontSize: "1.2rem" }}>{slotIcons[slot]}</span>
                  <div>
                    <div style={{ fontSize: "0.8rem", color: "var(--paper4)" }}>{slotNames[slot]}</div>
                    {e ? (
                      <div style={{ fontSize: "0.85rem", color: "var(--paper)" }}>
                        {e.icon} {e.name} <span style={{ fontSize: "0.65rem", color: "var(--gold)" }}>{e.grade || ""}</span>
                      </div>
                    ) : (
                      <div style={{ fontSize: "0.75rem", color: "var(--paper4)" }}>空</div>
                    )}
                  </div>
                </div>
                {e && (
                  <button onClick={() => api({ action: "unequip", slot })} disabled={busy} className="btn btn-sm" style={{ background: "var(--ink3)" }}>卸下</button>
                )}
              </div>
            );
          })}
        </div>

        {/* 装备抽取 */}
        <div className="panel text-center">
          <div className="text-gold font-bold mb-2 text-sm">🎰 抽取装备 (50💎)</div>
          <button onClick={() => api({ action: "draw" })} disabled={busy} className="btn btn-primary">🎰 抽取一件</button>
        </div>

        {/* 装备背包 */}
        <div className="panel">
          <div className="text-gold font-bold mb-2 text-sm">🎒 装备背包 ({inventory.length})</div>
          {inventory.length === 0 ? (
            <div className="text-center py-6" style={{ color: "var(--paper4)" }}>暂无装备</div>
          ) : (
            inventory.map((item: any) => (
              <div key={item.uid} className="flex items-center justify-between" style={{ padding: "8px 0", borderBottom: "1px solid var(--ink4)" }}>
                <div className="flex items-center gap-2">
                  <span style={{ fontSize: "1.2rem" }}>{item.icon}</span>
                  <div>
                    <div style={{ fontSize: "0.85rem", color: "var(--paper)" }}>
                      {item.name} <span style={{ fontSize: "0.65rem", color: "var(--gold)" }}>{item.grade || ""}</span>
                    </div>
                    <div style={{ fontSize: "0.65rem", color: "var(--paper4)" }}>
                      {item.atk ? `攻+${item.atk} ` : ""}{item.def ? `防+${item.def} ` : ""}{item.hp ? `血+${item.hp} ` : ""}{item.mp ? `灵+${item.mp}` : ""}
                      {item.enhanceLevel ? ` +${item.enhanceLevel}` : ""}
                    </div>
                  </div>
                </div>
                <div className="flex gap-1">
                  <button onClick={() => api({ action: "equip", uid: item.uid })} disabled={busy} className="btn btn-primary btn-sm">穿戴</button>
                  <button onClick={() => api({ action: "enhance", uid: item.uid })} disabled={busy} className="btn btn-sm" style={{ background: "var(--violet)" }}>强化</button>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}
