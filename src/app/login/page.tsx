"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const login = async () => {
    if (!username || !password) { setError("请输入用户名和密码"); return; }
    setBusy(true); setError("");
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (data.error) { setError(data.error); return; }
      router.push("/game");
    } finally { setBusy(false); }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4" style={{ background: "var(--ink0)" }}>
      <div style={{ width: "100%", maxWidth: 360 }}>
        {/* 标题 */}
        <div className="text-center mb-8">
          <div style={{ fontSize: "2.5rem", marginBottom: 8 }}>⚔️</div>
          <div style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--gold)", letterSpacing: 2 }}>
            凡人修仙传
          </div>
          <div style={{ fontSize: "0.8rem", color: "var(--paper4)", marginTop: 4 }}>
            AI 驱动的修仙世界
          </div>
        </div>

        {/* 登录表单 */}
        <div className="panel">
          <label className="label">用户名</label>
          <input className="input mb-4" placeholder="请输入用户名" value={username}
            onChange={e => setUsername(e.target.value)} onKeyDown={e => e.key === "Enter" && login()} />

          <label className="label">密码</label>
          <input className="input mb-4" type="password" placeholder="请输入密码" value={password}
            onChange={e => setPassword(e.target.value)} onKeyDown={e => e.key === "Enter" && login()} />

          {error && (
            <div style={{ fontSize: "0.85rem", color: "var(--cinnabarG)", marginBottom: 12, textAlign: "center" }}>
              {error}
            </div>
          )}

          <button onClick={login} disabled={busy} className="btn btn-primary btn-block btn-lg mb-3">
            {busy ? "登录中..." : "踏入修仙之路"}
          </button>

          <div className="text-center">
            <a href="/create" style={{ fontSize: "0.85rem", color: "var(--azure)", textDecoration: "none" }}>
              尚无账号？注册 →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
