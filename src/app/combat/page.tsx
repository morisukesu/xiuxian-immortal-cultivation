"use client";
import { useState, useEffect, useCallback } from "react";

export default function CombatPage() {
  const [combat, setCombat] = useState<any>(null);
  const [vitals, setVitals] = useState<any>(null);
  const [log, setLog] = useState<string[]>([]);
  const [busy, setBusy] = useState(false);
  const [targetPart, setTargetPart] = useState<string>("");
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (m: string) => { setToast(m); setTimeout(() => setToast(null), 2500); };

  const fetchState = useCallback(async () => {
    try {
      const res = await fetch("/api/game/combat");
      if (res.ok) { const d = await res.json(); setVitals(d); if (d.combat) setCombat(d.combat); }
    } catch {}
  }, []);

  useEffect(() => { fetchState(); }, [fetchState]);

  const api = async (body: any) => {
    setBusy(true);
    try {
      const res = await fetch("/api/game/combat", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
      const d = await res.json();
      if (d.error) { showToast(d.error); return null; }
      setCombat(d.combat);
      if (d.log) setLog(d.log);
      if (d.victory) showToast(`🎉 胜利！+${d.expGain}经验 +${d.goldGain}灵石`);
      if (d.defeated) showToast("💀 战败...");
      if (d.fled) showToast("成功逃跑");
      fetchState();
      return d;
    } finally { setBusy(false); }
  };

  const startCombat = () => api({ action: "start" });
  const act = (move: string) => api({ action: "act", move, targetPart, damageType: "physical_blunt" });

  // 敌人器官列表
  const organs = combat?.enemy?.organs || {};
  const organList = Object.entries(organs).map(([k, v]: [string, any]) => ({
    key: k, name: v.name || k, icon: v.icon || "🎯", hp: v.hp, maxHp: v.maxHp, lethality: v.lethality || 0,
  })).sort((a, b) => b.lethality - a.lethality);

  return (
    <div className="min-h-screen pb-24" style={{ background: "var(--bg)", color: "var(--text)" }}>
      <header style={{ background: "rgba(10,14,22,0.92)", backdropFilter: "blur(16px)", borderBottom: "1px solid var(--ink4)", position: "sticky", top: 0, zIndex: 30, padding: "12px 16px" }}>
        <div className="max-w-game mx-auto flex items-center justify-between">
          <a href="/game" style={{ color: "var(--paper4)", fontSize: "0.85rem" }}>← 返回</a>
          <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--cinnabarG)" }}>⚔️ 战斗</div>
          <div style={{ width: 60 }} />
        </div>
      </header>

      <main className="max-w-game mx-auto px-4 pt-4 space-y-3">
        {/* 生命体征 */}
        {vitals?.vitalSigns && (
          <div className="panel">
            <div className="text-gold font-bold mb-2 text-sm">📊 生命体征</div>
            <div className="grid grid-cols-3 gap-2 text-xs">
              {[
                { label: "心率", val: vitals.vitalSigns.heartRate, unit: "bpm", normal: "60-100" },
                { label: "血压", val: `${vitals.vitalSigns.bloodPressureSys}/${vitals.vitalSigns.bloodPressureDia}`, unit: "", normal: "90-120" },
                { label: "体温", val: vitals.vitalSigns.temperature, unit: "°C", normal: "36-37" },
                { label: "呼吸", val: vitals.vitalSigns.respiratoryRate, unit: "次/分", normal: "12-20" },
                { label: "血氧", val: vitals.vitalSigns.spO2, unit: "%", normal: "≥95" },
                { label: "灵力", val: vitals.vitalSigns.spiritualSaturation, unit: "%", normal: "≥40" },
              ].map((v, i) => (
                <div key={i} className="text-center" style={{ padding: "4px 0", background: "var(--ink2)", borderRadius: 6 }}>
                  <div style={{ color: "var(--paper4)", fontSize: "0.65rem" }}>{v.label}</div>
                  <div style={{ color: "var(--paper)", fontWeight: 600 }}>{v.val}<span style={{ fontSize: "0.6rem", color: "var(--paper4)" }}>{v.unit}</span></div>
                  <div style={{ fontSize: "0.55rem", color: "var(--paper4)" }}>正常:{v.normal}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 无战斗状态 */}
        {!combat && (
          <div className="panel text-center py-12">
            <div className="text-4xl mb-3">⚔️</div>
            <div style={{ color: "var(--paper2)", marginBottom: 16 }}>寻妖历练，以战养战</div>
            <button onClick={startCombat} disabled={busy} className="btn btn-primary">🔍 寻找妖兽</button>
          </div>
        )}

        {/* 战斗中 */}
        {combat && (
          <>
            {/* 敌人信息 */}
            <div className="panel" style={{ borderColor: "var(--cinnabar)" }}>
              <div className="flex items-center justify-between mb-2">
                <div>
                  <span style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--cinnabarG)" }}>{combat.enemy.name}</span>
                  <span style={{ fontSize: "0.7rem", color: "var(--paper4)", marginLeft: 8 }}>{combat.enemy.desc}</span>
                </div>
                <span style={{ fontSize: "0.75rem", color: "var(--gold)" }}>第{combat.round}回合</span>
              </div>
              {/* 敌人HP */}
              <div className="stat-bar" style={{ height: 12, marginBottom: 8 }}>
                <div className="stat-bar-fill hp" style={{ width: `${Math.max(0, (combat.enemy.hp / combat.enemy.maxHp) * 100)}%` }} />
              </div>
              <div style={{ fontSize: "0.7rem", color: "var(--paper4)", textAlign: "right" }}>
                HP {combat.enemy.hp}/{combat.enemy.maxHp} · ATK {combat.enemy.atk} · DEF {combat.enemy.def}
              </div>
            </div>

            {/* 敌人器官图 - 可选择攻击部位 */}
            <div className="panel">
              <div className="text-gold font-bold mb-2 text-sm">🎯 部位瞄准</div>
              <div className="grid grid-cols-2 gap-2">
                {organList.map((o) => (
                  <button key={o.key} onClick={() => setTargetPart(o.key)}
                    className="text-left p-2 rounded transition-all"
                    style={{
                      background: targetPart === o.key ? "var(--cinnabar)" : "var(--ink2)",
                      border: `1px solid ${o.lethality >= 0.8 ? "var(--cinnabar)" : "var(--ink4)"}`,
                      opacity: o.hp <= 0 ? 0.4 : 1,
                    }}>
                    <div className="flex items-center justify-between">
                      <span style={{ fontSize: "0.8rem", color: "var(--paper2)" }}>
                        {o.icon} {o.name} {o.lethality >= 0.9 && "☠️"}
                      </span>
                    </div>
                    <div className="stat-bar" style={{ height: 4, marginTop: 4 }}>
                      <div className="stat-bar-fill hp" style={{ width: `${Math.max(0, (o.hp / o.maxHp) * 100)}%` }} />
                    </div>
                    <div style={{ fontSize: "0.55rem", color: "var(--paper4)" }}>{o.hp}/{o.maxHp}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 战斗操作 */}
            <div className="panel">
              <div className="grid grid-cols-2 gap-2">
                <button onClick={() => act("attack")} disabled={busy || !targetPart} className="btn btn-primary" style={{ opacity: !targetPart ? 0.5 : 1 }}>
                  ⚔️ 攻击{targetPart ? ` → ${organs[targetPart]?.name || targetPart}` : ""}
                </button>
                <button onClick={() => act("defend")} disabled={busy} className="btn" style={{ background: "var(--azure)" }}>🛡️ 防御</button>
                <button onClick={() => act("dodge")} disabled={busy} className="btn" style={{ background: "var(--jade)" }}>✨ 闪避</button>
                <button onClick={() => act("flee")} disabled={busy} className="btn" style={{ background: "var(--ink3)" }}>🏃 逃跑</button>
              </div>
            </div>

            {/* 战斗日志 */}
            {log.length > 0 && (
              <div className="panel">
                <div className="text-gold font-bold mb-2 text-sm">📜 战报</div>
                {log.map((l, i) => (
                  <div key={i} style={{ fontSize: "0.8rem", color: "var(--paper2)", padding: "4px 0", borderBottom: i < log.length - 1 ? "1px solid var(--ink4)" : "none" }}>
                    {l}
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </main>
      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}
