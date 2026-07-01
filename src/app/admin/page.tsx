"use client";

import { useState, useEffect } from "react";

export default function AdminPage() {
  const [stats, setStats] = useState<any>(null);
  const [users, setUsers] = useState<any[]>([]);
  const [config, setConfig] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState("stats");
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (m: string) => { setToast(m); setTimeout(() => setToast(null), 2500); };

  const loadData = async (tab: string) => {
    try {
      if (tab === "stats") {
        const r = await fetch("/api/admin/stats");
        setStats(await r.json());
      }
      if (tab === "users") {
        const r = await fetch("/api/admin/users");
        setUsers(await r.json());
      }
      if (tab === "config") {
        const r = await fetch("/api/admin/config");
        const d = await r.json();
        setConfig(d.config || []);
      }
    } catch {}
  };

  useEffect(() => { loadData(activeTab); }, [activeTab]);

  const updateConfig = async (key: string, value: string) => {
    const r = await fetch("/api/admin/config", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ key, value }),
    });
    const d = await r.json();
    showToast(d.success ? "配置已更新" : (d.error || "更新失败"));
    loadData("config");
  };

  return (
    <div className="min-h-screen pb-20" style={{ background: "var(--ink0)" }}>
      {/* Header */}
      <header style={{
        background: "rgba(10,14,22,0.94)", backdropFilter: "blur(16px)",
        borderBottom: "1px solid var(--ink4)", padding: "12px 16px",
        position: "sticky", top: 0, zIndex: 30,
      }}>
        <div className="max-w-game mx-auto flex items-center justify-between">
          <div>
            <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--gold)" }}>管理后台</div>
            <div style={{ fontSize: "0.7rem", color: "var(--paper4)" }}>凡人修仙传 · 世界管理</div>
          </div>
          <a href="/game" style={{ fontSize: "0.8rem", color: "var(--azure)", textDecoration: "none" }}>
            返回游戏 →
          </a>
        </div>
      </header>

      <main className="max-w-game mx-auto px-4 pt-4 space-y-3">
        {/* Tab 切换 */}
        <div className="flex gap-2">
          {[
            ["stats", "📊", "统计"],
            ["users", "👥", "用户"],
            ["config", "⚙️", "配置"],
          ].map(([id, icon, label]) => (
            <button key={id} onClick={() => setActiveTab(id)}
              className="btn btn-sm" style={{
                background: activeTab === id ? "var(--goldD)" : "var(--ink3)",
                color: activeTab === id ? "var(--paper)" : "var(--paper3)",
              }}>
              {icon} {label}
            </button>
          ))}
        </div>

        {/* 统计 */}
        {activeTab === "stats" && stats && (
          <div className="panel">
            <div className="text-gold font-bold mb-3">📊 世界概况</div>
            <div className="grid-2" style={{ fontSize: "0.85rem" }}>
              {[
                ["👤 用户", stats.totalUsers],
                ["🧘 修仙者", stats.totalCultivators],
                ["📝 事件", stats.totalEvents],
                ["📅 今日活跃", stats.activeToday],
              ].map(([label, val], i) => (
                <div key={i} className="flex justify-between" style={{ padding: "6px 0", borderBottom: "1px solid var(--ink4)" }}>
                  <span style={{ color: "var(--paper3)" }}>{label}</span>
                  <span style={{ color: "var(--gold)" }}>{val}</span>
                </div>
              ))}
            </div>
            {stats.recentEvents?.length > 0 && (
              <div className="mt-4">
                <div style={{ fontSize: "0.85rem", color: "var(--paper3)", marginBottom: 8 }}>最近事件</div>
                {stats.recentEvents.slice(0, 10).map((e: any, i: number) => (
                  <div key={i} style={{ padding: "6px 0", borderBottom: "1px solid var(--ink4)", fontSize: "0.8rem", color: "var(--paper2)" }}>
                    {e.type} · {e.title || "事件"} · {e.triggeredBy || "系统"}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* 用户 */}
        {activeTab === "users" && (
          <div className="panel">
            <div className="text-gold font-bold mb-3">👥 用户管理</div>
            {users.map((u: any) => (
              <div key={u.id} className="flex justify-between items-center"
                style={{ padding: "10px 0", borderBottom: "1px solid var(--ink4)" }}>
                <div>
                  <div style={{ fontSize: "0.9rem", color: "var(--paper2)" }}>
                    {u.username}
                    <span style={{ fontSize: "0.7rem", color: u.role === "admin" ? "var(--gold)" : "var(--paper4)", marginLeft: 8 }}>
                      {u.role}
                    </span>
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "var(--paper4)" }}>
                    {u.cultivator?.name || "未创建角色"}
                    {u.cultivator?.spiritualRoot && ` · ${u.cultivator.spiritualRoot}`}
                  </div>
                </div>
                <div style={{ fontSize: "0.8rem", color: "var(--paper3)" }}>
                  ID: {u.id?.slice(0, 8)}...
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 配置 */}
        {activeTab === "config" && (
          <div className="panel">
            <div className="text-gold font-bold mb-3">⚙️ 世界配置</div>
            {config.map((c: any, i: number) => (
              <div key={i} className="flex items-center gap-3"
                style={{ padding: "8px 0", borderBottom: "1px solid var(--ink4)" }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: "0.85rem", color: "var(--paper2)" }}>{c.key}</div>
                  <div style={{ fontSize: "0.7rem", color: "var(--paper4)" }}>{c.description}</div>
                </div>
                <input className="input" style={{ width: 100, padding: "6px 10px" }} value={c.value}
                  onChange={(e) => {
                    const newConfig = [...config];
                    newConfig[i] = { ...c, value: e.target.value };
                    setConfig(newConfig);
                  }} />
                <button onClick={() => updateConfig(c.key, c.value)} className="btn btn-primary btn-sm">保存</button>
              </div>
            ))}
          </div>
        )}
      </main>

      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}
