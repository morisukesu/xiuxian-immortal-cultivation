"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ROOT_TYPES } from "@/lib/game-data/roots";

export default function CreatePage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [rootType, setRootType] = useState(0);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const create = async () => {
    if (!username || !password || !name) { setError("请填写完整信息"); return; }
    if (username.length < 3) { setError("用户名至少 3 个字符"); return; }
    if (password.length < 1) { setError("密码不能为空"); return; }
    if (name.length < 1) { setError("请输入道号"); return; }
    setBusy(true); setError("");
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, cultivatorName: name, spiritualRoot: rootType }),
      });
      const data = await res.json();
      if (data.error) { setError(data.error); return; }
      router.push("/game");
    } finally { setBusy(false); }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4" style={{ background: "var(--ink0)" }}>
      <div style={{ width: "100%", maxWidth: 400 }}>
        <div className="text-center mb-6">
          <div style={{ fontSize: "2rem", marginBottom: 6 }}>🌟</div>
          <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--gold)", letterSpacing: 2 }}>
            创建修仙角色
          </div>
          <div style={{ fontSize: "0.8rem", color: "var(--paper4)", marginTop: 4 }}>
            选择灵根，踏入仙途
          </div>
        </div>

        <div className="panel">
          <label className="label">登录用户名</label>
          <input className="input mb-3" placeholder="设置用户名" value={username}
            onChange={e => setUsername(e.target.value)} />

          <label className="label">登录密码 <span style={{fontSize:"0.7rem",color:"var(--paper4)"}}></span></label>
          <input className="input mb-3" type="password" placeholder="设置密码" value={password}
            onChange={e => setPassword(e.target.value)} />

          <label className="label">修仙道号</label>
          <input className="input mb-4" placeholder="取一个响亮的道号" value={name}
            onChange={e => setName(e.target.value)} />

          {/* 灵根选择 */}
          <label className="label">灵根选择</label>
          <div className="grid-3 mb-4">
            {(ROOT_TYPES as any[]).slice(0, 6).map((root: any, i: number) => (
              <button key={i} onClick={() => setRootType(i)}
                className="item-cell" style={{
                  borderColor: rootType === i ? "var(--gold)" : "var(--ink4)",
                  background: rootType === i ? "rgba(168,152,110,0.12)" : undefined,
                }}>
                <div style={{ fontSize: "1.4rem" }}>{root.icon || "🌿"}</div>
                <div style={{ fontSize: "0.8rem", color: rootType === i ? "var(--gold)" : "var(--paper3)", marginTop: 4 }}>
                  {root.name}
                </div>
                <div style={{ fontSize: "0.6rem", color: "var(--paper4)" }}>
                  x{root.speedBonus || 1}
                </div>
              </button>
            ))}
          </div>

          {error && (
            <div style={{ fontSize: "0.85rem", color: "var(--cinnabarG)", marginBottom: 12, textAlign: "center" }}>
              {error}
            </div>
          )}

          <button onClick={create} disabled={busy} className="btn btn-primary btn-block btn-lg">
            {busy ? "创建中..." : "踏入仙途"}
          </button>
        </div>
      </div>
    </div>
  );
}
