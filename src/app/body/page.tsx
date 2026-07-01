"use client";

import { useState, useEffect, useCallback } from "react";

// v0.35 精确坐标 - viewBox 260x310
const BODY_PARTS = [
  { id: "head",     label: "头部", cx: 130, cy: 55,  rx: 30, ry: 30, icon: "🧠" },
  { id: "torso",    label: "躯干", cx: 130, cy: 135, rx: 42, ry: 50, icon: "💪" },
  { id: "leftArm",  label: "左臂", cx: 52,  cy: 120, rx: 22, ry: 45, icon: "🦾" },
  { id: "rightArm", label: "右臂", cx: 208, cy: 120, rx: 22, ry: 45, icon: "🦿" },
  { id: "leftLeg",  label: "左腿", cx: 100, cy: 230, rx: 22, ry: 50, icon: "🦶" },
  { id: "rightLeg", label: "右腿", cx: 160, cy: 230, rx: 22, ry: 50, icon: "🦵" },
];

// v0.35 穴位坐标 (基于160x160网格，映射到260x310)
// 左侧穴位 x<80 映射到左侧，右侧 x>80 映射到右侧
const ACUPOINTS = [
  // 手太阴肺经 左
  { id: "fei_L_1", name: "中府", x: 72, y: 38, m: "fei_L" },
  { id: "fei_L_2", name: "尺泽", x: 62, y: 62, m: "fei_L" },
  { id: "fei_L_3", name: "列缺", x: 58, y: 78, m: "fei_L" },
  { id: "fei_L_4", name: "少商", x: 52, y: 96, m: "fei_L" },
  // 手太阴肺经 右
  { id: "fei_R_1", name: "中府", x: 128, y: 38, m: "fei_R" },
  { id: "fei_R_2", name: "尺泽", x: 138, y: 62, m: "fei_R" },
  { id: "fei_R_3", name: "列缺", x: 142, y: 78, m: "fei_R" },
  { id: "fei_R_4", name: "少商", x: 148, y: 96, m: "fei_R" },
  // 手阳明大肠经
  { id: "dachang_L_1", name: "商阳", x: 50, y: 98, m: "dachang_L" },
  { id: "dachang_L_2", name: "合谷", x: 55, y: 82, m: "dachang_L" },
  { id: "dachang_L_3", name: "曲池", x: 58, y: 60, m: "dachang_L" },
  { id: "dachang_L_4", name: "迎香", x: 82, y: 15, m: "dachang_L" },
  { id: "dachang_R_1", name: "商阳", x: 150, y: 98, m: "dachang_R" },
  { id: "dachang_R_2", name: "合谷", x: 145, y: 82, m: "dachang_R" },
  { id: "dachang_R_3", name: "曲池", x: 142, y: 60, m: "dachang_R" },
  { id: "dachang_R_4", name: "迎香", x: 118, y: 15, m: "dachang_R" },
  // 足阳明胃经
  { id: "wei_L_1", name: "承泣", x: 86, y: 13, m: "wei_L" },
  { id: "wei_L_2", name: "天枢", x: 80, y: 48, m: "wei_L" },
  { id: "wei_L_3", name: "足三里", x: 82, y: 72, m: "wei_L" },
  { id: "wei_L_4", name: "厉兑", x: 84, y: 98, m: "wei_L" },
  { id: "wei_R_1", name: "承泣", x: 114, y: 13, m: "wei_R" },
  { id: "wei_R_2", name: "天枢", x: 120, y: 48, m: "wei_R" },
  { id: "wei_R_3", name: "足三里", x: 118, y: 72, m: "wei_R" },
  { id: "wei_R_4", name: "厉兑", x: 116, y: 98, m: "wei_R" },
  // 足太阴脾经
  { id: "pi_L_1", name: "隐白", x: 80, y: 98, m: "pi_L" },
  { id: "pi_L_2", name: "三阴交", x: 80, y: 75, m: "pi_L" },
  { id: "pi_L_3", name: "血海", x: 78, y: 62, m: "pi_L" },
  { id: "pi_L_4", name: "大包", x: 72, y: 40, m: "pi_L" },
  // 任脉
  { id: "ren_1", name: "膻中", x: 80, y: 30, m: "ren" },
  { id: "ren_2", name: "中脘", x: 80, y: 40, m: "ren" },
  { id: "ren_3", name: "气海", x: 80, y: 48, m: "ren" },
  { id: "ren_4", name: "关元", x: 80, y: 56, m: "ren" },
  // 督脉
  { id: "du_1", name: "风府", x: 80, y: 12, m: "du" },
  { id: "du_2", name: "大椎", x: 80, y: 22, m: "du" },
  { id: "du_3", name: "灵台", x: 80, y: 36, m: "du" },
  { id: "du_4", name: "命门", x: 80, y: 50, m: "du" },
];

// 脏腑位置 (基于260x310的viewBox)
const ORGANS = [
  { id: "brain",    name: "脑",   cx: 130, cy: 50,  r: 10, color: "#e8c8a0", critical: true,  icon: "🧠" },
  { id: "heart",    name: "心",   cx: 118, cy: 110, r: 9,  color: "#d46060", critical: true,  icon: "❤️" },
  { id: "lung_L",   name: "左肺", cx: 105, cy: 100, r: 8,  color: "#a0d0d0", critical: true,  icon: "🫁" },
  { id: "lung_R",   name: "右肺", cx: 142, cy: 100, r: 8,  color: "#a0d0d0", critical: true,  icon: "🫁" },
  { id: "liver",    name: "肝",   cx: 145, cy: 125, r: 8,  color: "#c0a060", critical: true,  icon: "🟫" },
  { id: "spleen",   name: "脾",   cx: 112, cy: 125, r: 7,  color: "#c8a880", critical: false, icon: "🟧" },
  { id: "stomach",  name: "胃",   cx: 130, cy: 140, r: 8,  color: "#d8c0a0", critical: false, icon: "🫘" },
  { id: "kidney_L", name: "左肾", cx: 112, cy: 155, r: 7,  color: "#a088c0", critical: true,  icon: "🫘" },
  { id: "kidney_R", name: "右肾", cx: 148, cy: 155, r: 7,  color: "#a088c0", critical: true,  icon: "🫘" },
  { id: "intestines", name: "肠", cx: 130, cy: 175, r: 10, color: "#d0b898", critical: false, icon: "🌀" },
];

// 坐标映射: v0.35的160x160网格 → 260x310 viewBox
function mapX(x: number) { return 80 + (x - 80) * 1.3; }
function mapY(y: number) { return y * 1.94; }

export default function BodyPage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState("body");
  const [hovered, setHovered] = useState<string | null>(null);
  const [selected, setSelected] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const showToast = (m: string) => { setToast(m); setTimeout(() => setToast(null), 2800); };

  const fetchData = useCallback(async () => {
    try { const r = await fetch("/api/game/body"); const d = await r.json(); if (!d.error) setData(d); } catch {}
    setLoading(false);
  }, []);

  useEffect(() => { fetchData(); }, [fetchData]);

  const api = async (body: any) => {
    if (busy) return;
    setBusy(true);
    try {
      const r = await fetch("/api/game/body", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const d = await r.json();
      if (d.error) showToast(d.error);
      else showToast(
        body.action === "refine" ? `🔥 ${d.stage} Lv.${d.level}` :
        body.action === "train_soul" ? `✨ ${d.soul?.name} Lv.${d.soul?.level}` :
        body.action === "train_spirit" ? `💫 ${d.spirit?.name} Lv.${d.spirit?.level}` :
        body.action === "activate_meridian" ? `🌀 ${d.meridian?.name} 已激活` :
        body.action === "heal_part" ? "💊 治疗成功" : "操作成功"
      );
      fetchData();
    } finally { setBusy(false); }
  };

  if (loading) return <div className="flex items-center justify-center min-h-screen"><div className="text-center"><div className="text-3xl mb-3">🌀</div><div className="text-paper3">灵气汇聚中...</div></div></div>;
  if (!data) return <div className="flex items-center justify-center min-h-screen"><a href="/create" className="btn btn-primary">请先创建角色</a></div>;

  const stage = (data.refineStages || []).find((s: any) => (data.bodyRefineLevel || 0) >= s.minLevel && (data.bodyRefineLevel || 0) <= s.maxLevel);

  return (
    <div className="min-h-screen pb-24" style={{ background: "var(--ink0)" }}>
      {/* Header */}
      <header style={{
        background: "rgba(10,14,22,0.94)", backdropFilter: "blur(16px)", borderBottom: "1px solid var(--ink4)",
        padding: "10px 16px", position: "sticky", top: 0, zIndex: 30,
      }}>
        <div className="max-w-game mx-auto flex items-center justify-between">
          <div>
            <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--jadeG)" }}>🧬 身体系统</div>
            <div style={{ fontSize: "0.7rem", color: "var(--paper4)" }}>
              {stage?.name || "凡体"} Lv.{data.bodyRefineLevel || 0} {stage?.icon || "🏋️"}
            </div>
          </div>
          <a href="/game" className="btn btn-dark btn-sm">← 返回</a>
        </div>
      </header>

      {/* Tab切换 */}
      <div className="max-w-game mx-auto px-4 pt-3 pb-2 flex gap-1">
        {[["body","🫀","身躯"],["organs","🫁","脏腑"],["meridian","🌀","经脉"],["nervous","⚡","神经"],["soul","✨","魂魄"]].map(([id,icon,label]) => (
          <button key={id} onClick={() => { setView(id); setSelected(null); }}
            className="btn btn-sm" style={{
              fontSize: "0.75rem", padding: "5px 10px",
              background: view === id ? "var(--jade)" : "var(--ink3)",
              color: view === id ? "var(--paper)" : "var(--paper3)",
            }}>{icon} {label}</button>
        ))}
      </div>

      <main className="max-w-game mx-auto px-4 space-y-3">

        {/* ====== 身躯视图 ====== */}
        {view === "body" && (
          <>
            <div className="panel flex items-center justify-between">
              <div>
                <div style={{ fontSize: "0.9rem", color: "var(--jadeG)", fontWeight: 600 }}>淬炼身体</div>
                <div style={{ fontSize: "0.72rem", color: "var(--paper3)" }}>{stage?.desc || "以凡俗之法锤炼肉身"}</div>
              </div>
              <button onClick={() => api({ action: "refine" })} disabled={busy} className="btn btn-jade btn-sm">🔥 淬炼</button>
            </div>

            {/* v0.35风格 SVG 人体图 */}
            <div className="panel flex justify-center">
              <svg viewBox="0 0 260 310" width="300" height="358" style={{ display: "block" }}>
                <defs>
                  <radialGradient id="bodyGlow" cx="50%" cy="40%">
                    <stop offset="0%" stopColor="rgba(46,104,72,0.10)" />
                    <stop offset="100%" stopColor="rgba(46,104,72,0)" />
                  </radialGradient>
                  <filter id="bodyShadow"><feGaussianBlur stdDeviation="1.5" /></filter>
                </defs>
                <rect width="260" height="310" fill="url(#bodyGlow)" />

                {/* 颈部连接 */}
                <line x1="130" y1="85" x2="130" y2="90" stroke="var(--ink4)" strokeWidth="1" />

                {/* 身体部位 - v0.35精确坐标 */}
                {BODY_PARTS.map(part => {
                  const status = (data.bodyStatus || {})[part.id];
                  const hpPct = status ? (status.hp / status.maxHp) * 100 : 100;
                  const injured = status?.injured;
                  const isSel = selected === part.id;
                  const isHov = hovered === part.id;
                  const isIrr = Array.isArray(data.irreversibleParts) ? data.irreversibleParts.includes(part.id) : Object.keys(data.irreversibleParts || {}).includes(part.id);

                  return (
                    <g key={part.id}>
                      {/* 主体 */}
                      <ellipse cx={part.cx} cy={part.cy} rx={part.rx} ry={part.ry}
                        fill={injured ? "rgba(180,50,50,0.30)" : "rgba(138,122,90,0.12)"}
                        stroke={isSel ? "var(--gold)" : isHov ? "var(--paper3)" : isIrr ? "rgba(180,50,50,0.4)" : "rgba(168,152,110,0.4)"}
                        strokeWidth={isSel ? 2.5 : 1.5}
                        style={{ cursor: "pointer", transition: "all 0.2s" }}
                        onMouseEnter={() => setHovered(part.id)} onMouseLeave={() => setHovered(null)}
                        onClick={() => setSelected(isSel ? null : part.id)} />

                      {/* 图标 */}
                      <text x={part.cx} y={part.cy - 4} textAnchor="middle" fontSize="14"
                        style={{ pointerEvents: "none" }}>{part.icon}</text>

                      {/* 部位名 */}
                      <text x={part.cx} y={part.cy + 12} textAnchor="middle"
                        fontSize="9" fontWeight="700"
                        fill={injured ? "var(--cinnabarG)" : "var(--paper2)"}
                        style={{ pointerEvents: "none" }}>
                        {part.label}
                      </text>

                      {/* HP 数值 */}
                      <text x={part.cx} y={part.cy + 24} textAnchor="middle"
                        fontSize="7"
                        fill={hpPct < 30 ? "var(--cinnabarG)" : hpPct < 60 ? "var(--amber)" : "var(--paper3)"}
                        style={{ pointerEvents: "none" }}>
                        {status?.hp || "?"}/{status?.maxHp || "?"}
                      </text>

                      {/* HP条 */}
                      <rect x={part.cx - part.rx + 4} y={part.cy + part.ry - 6}
                        width={part.rx * 2 - 8} height={3} rx={1.5}
                        fill="rgba(0,0,0,0.4)" style={{ pointerEvents: "none" }} />
                      <rect x={part.cx - part.rx + 4} y={part.cy + part.ry - 6}
                        width={(part.rx * 2 - 8) * (hpPct / 100)} height={3} rx={1.5}
                        fill={hpPct < 30 ? "var(--cinnabarG)" : hpPct < 60 ? "var(--amber)" : "var(--jadeG)"}
                        style={{ pointerEvents: "none", transition: "width 0.3s" }} />

                      {/* 受伤标记 */}
                      {injured && (
                        <text x={part.cx + part.rx - 4} y={part.cy - part.ry + 8}
                          textAnchor="middle" fontSize="8" style={{ pointerEvents: "none" }}>🔴</text>
                      )}
                    </g>
                  );
                })}

                {/* 选中部位高亮 */}
                {selected && (() => {
                  const part = BODY_PARTS.find(p => p.id === selected);
                  if (!part) return null;
                  return (
                    <ellipse cx={part.cx} cy={part.cy} rx={part.rx + 4} ry={part.ry + 4}
                      fill="none" stroke="var(--gold)" strokeWidth="1" strokeDasharray="3,2"
                      style={{ pointerEvents: "none", animation: "pulse 2s infinite" }} />
                  );
                })()}
              </svg>
            </div>

            {/* 选中部位详情 */}
            {selected && (() => {
              const status = (data.bodyStatus || {})[selected];
              const medical = (data.bodyPartMedical || {})[selected];
              const partName = BODY_PARTS.find(p => p.id === selected)?.label;
              return (
                <div className="panel-gold">
                  <div className="text-gold font-bold mb-2">{partName}</div>
                  <div className="stat-bar mb-2">
                    <div className="stat-bar-fill hp" style={{ width: status ? (status.hp / status.maxHp) * 100 : 100 + "%" }} />
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "var(--paper3)", marginBottom: 8 }}>
                    HP {status?.hp || 0} / {status?.maxHp || 0}
                    {status?.injured && <span style={{ color: "var(--cinnabarG)", marginLeft: 8 }}>⚠ 已受伤</span>}
                  </div>
                  {medical && (
                    <div style={{ fontSize: "0.72rem", color: "var(--paper4)", lineHeight: 1.6, paddingTop: 6, borderTop: "1px solid var(--ink4)" }}>
                      {medical.desc}
                      {medical.criticalZones && <div className="mt-1">关键区：{medical.criticalZones.join("、")}</div>}
                    </div>
                  )}
                  {status?.injured && (
                    <button onClick={() => api({ action: "heal_part", partId: selected })} disabled={busy}
                      className="btn btn-jade btn-sm mt-3 btn-block">💊 治疗 (50灵石)</button>
                  )}
                </div>
              );
            })()}
          </>
        )}

        {/* ====== 脏腑视图 ====== */}
        {view === "organs" && (
          <>
            <div className="panel flex justify-center">
              <svg viewBox="0 0 260 220" width="300" height="254" style={{ display: "block" }}>
                {/* 躯干轮廓 */}
                <ellipse cx="130" cy="110" rx="60" ry="90" fill="rgba(138,122,90,0.06)" stroke="var(--ink4)" strokeWidth="1" />

                {/* 脏腑 */}
                {ORGANS.map(org => {
                  const status = (data.organs || {})[org.id] || { hp: 100, maxHp: 100, status: "normal" };
                  const hpPct = (status.hp / status.maxHp) * 100;
                  const isSel = selected === org.id;
                  const isHov = hovered === org.id;
                  return (
                    <g key={org.id}>
                      <circle cx={org.cx} cy={org.cy} r={org.r}
                        fill={org.color} opacity={hpPct < 30 ? 0.3 : 0.75}
                        stroke={isSel ? "var(--gold)" : hpPct < 30 ? "var(--cinnabarG)" : "rgba(0,0,0,0.3)"}
                        strokeWidth={isSel ? 2.5 : 1}
                        style={{ cursor: "pointer", transition: "all 0.2s" }}
                        onMouseEnter={() => setHovered(org.id)} onMouseLeave={() => setHovered(null)}
                        onClick={() => setSelected(isSel ? null : org.id)} />
                      <text x={org.cx} y={org.cy + 2} textAnchor="middle"
                        fontSize="8" fontWeight="700"
                        fill={hpPct < 30 ? "var(--cinnabarG)" : "rgba(0,0,0,0.6)"}
                        style={{ pointerEvents: "none" }}>{org.name}</text>
                      {/* HP指示 */}
                      <text x={org.cx} y={org.cy + org.r + 8} textAnchor="middle"
                        fontSize="5.5" fill={hpPct < 30 ? "var(--cinnabarG)" : "var(--paper4)"}
                        style={{ pointerEvents: "none" }}>
                        {status.hp}/{status.maxHp}
                      </text>
                      {org.critical && (
                        <text x={org.cx + org.r - 2} y={org.cy - org.r + 2}
                          textAnchor="middle" fontSize="6" style={{ pointerEvents: "none" }}>⚠</text>
                      )}
                    </g>
                  );
                })}

                {/* 选中高亮 */}
                {selected && (() => {
                  const org = ORGANS.find(o => o.id === selected);
                  if (!org) return null;
                  return <circle cx={org.cx} cy={org.cy} r={org.r + 4}
                    fill="none" stroke="var(--gold)" strokeWidth="1" strokeDasharray="2,2" />;
                })()}
              </svg>
            </div>

            {/* 选中器官详情 */}
            {selected && (() => {
              const status = (data.organs || {})[selected];
              const effect = (data.organEffects || {})[selected];
              const organ = ORGANS.find(o => o.id === selected);
              return (
                <div className="panel-gold">
                  <div className="text-gold font-bold mb-2">
                    {organ?.icon} {organ?.name} {organ?.critical && <span style={{ color: "var(--cinnabarG)" }}>⚠致命器官</span>}
                  </div>
                  <div className="stat-bar mb-2">
                    <div className="stat-bar-fill hp" style={{ width: (status?.hp / status?.maxHp) * 100 || 100 + "%" }} />
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "var(--paper3)" }}>HP: {status?.hp || 100}/{status?.maxHp || 100}</div>
                  {effect && (
                    <div style={{ fontSize: "0.72rem", color: "var(--paper4)", lineHeight: 1.6, marginTop: 8, paddingTop: 8, borderTop: "1px solid var(--ink4)" }}>
                      {effect.medicalNote}
                      {effect.deathCause && <div className="mt-1" style={{ color: "var(--cinnabarG)" }}>致命：{effect.deathCause}</div>}
                    </div>
                  )}
                </div>
              );
            })()}

            {/* 全部脏腑状态 */}
            <div className="panel">
              <div className="text-paper3 font-bold mb-3 text-sm">脏腑总览</div>
              <div className="grid-2">
                {ORGANS.map(org => {
                  const status = (data.organs || {})[org.id];
                  const hpPct = status ? (status.hp / status.maxHp) * 100 : 100;
                  return (
                    <div key={org.id} style={{ fontSize: "0.78rem", padding: "4px 0", display: "flex", justifyContent: "space-between", cursor: "pointer" }}
                      onClick={() => setSelected(selected === org.id ? null : org.id)}>
                      <span style={{ color: hpPct < 30 ? "var(--cinnabarG)" : "var(--paper3)" }}>
                        {org.icon} {org.name}
                      </span>
                      <span style={{ color: hpPct < 30 ? "var(--cinnabarG)" : "var(--paper4)" }}>
                        {status?.hp || 100}/{status?.maxHp || 100}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}

        {/* ====== 经脉视图 ====== */}
        {view === "meridian" && (
          <>
            <div className="panel">
              <div className="text-jade font-bold mb-3 text-sm">🌀 经脉系统 · 12正经 + 任督二脉</div>
              {(data.meridians || []).map((m: any) => (
                <div key={m.id} style={{
                  padding: "7px 0", borderBottom: "1px solid var(--ink4)",
                  opacity: m.active ? 1 : 0.5, display: "flex", justifyContent: "space-between", alignItems: "center"
                }}>
                  <div>
                    <div style={{ fontSize: "0.82rem", color: m.active ? "var(--jadeG)" : "var(--paper3)" }}>
                      {m.icon || "🌀"} {m.name}
                      <span style={{ fontSize: "0.65rem", color: "var(--paper4)", marginLeft: 4 }}>
                        {m.side === "left" ? "左" : m.side === "right" ? "右" : "中"}
                      </span>
                    </div>
                    <div style={{ fontSize: "0.68rem", color: "var(--paper4)" }}>需境界{m.realm} · Lv.{m.level}</div>
                  </div>
                  {!m.active ? (
                    <button onClick={() => api({ action: "activate_meridian", meridianId: m.id })} disabled={busy}
                      className="btn btn-jade btn-sm">激活</button>
                  ) : (
                    <span style={{ fontSize: "0.72rem", color: "var(--jadeG)" }}>✅ 已通</span>
                  )}
                </div>
              ))}
            </div>

            {/* 经络SVG - v0.35精确穴位坐标 */}
            <div className="panel flex justify-center">
              <svg viewBox="0 0 260 200" width="300" height="231" style={{ display: "block" }}>
                {/* 人体轮廓 */}
                <ellipse cx="130" cy="30" rx="20" ry="22" fill="none" stroke="var(--ink4)" strokeWidth="0.5" />
                <ellipse cx="130" cy="100" rx="40" ry="55" fill="none" stroke="var(--ink4)" strokeWidth="0.5" />
                <ellipse cx="75" cy="90" rx="15" ry="40" fill="none" stroke="var(--ink4)" strokeWidth="0.5" />
                <ellipse cx="185" cy="90" rx="15" ry="40" fill="none" stroke="var(--ink4)" strokeWidth="0.5" />

                {/* 任脉线 (前正中线) */}
                <line x1={mapX(80)} y1={mapY(10)} x2={mapX(80)} y2={mapY(60)}
                  stroke="var(--jadeG)" strokeWidth="1.5" opacity="0.5" />

                {/* 督脉线 (后正中线 - 虚线) */}
                <line x1={mapX(80)} y1={mapY(10)} x2={mapX(80)} y2={mapY(60)}
                  stroke="var(--azure)" strokeWidth="1.5" opacity="0.35" strokeDasharray="3,2" />

                {/* 穴位 */}
                {ACUPOINTS.map(ac => {
                  const mx = mapX(ac.x), my = mapY(ac.y);
                  const meridian = (data.meridians || []).find((m: any) => m.id === ac.m || m.id?.startsWith(ac.m + "_"));
                  const isActive = meridian?.active;
                  const isLeft = ac.x < 80;
                  return (
                    <g key={ac.id}>
                      <circle cx={mx} cy={my} r={isActive ? 3 : 2}
                        fill={isActive ? "var(--jadeG)" : "rgba(168,152,110,0.3)"}
                        stroke={isActive ? "var(--jadeG)" : "var(--ink4)"}
                        strokeWidth="0.5" style={{ transition: "all 0.2s" }} />
                      <text x={mx + (isLeft ? -5 : 5)} y={my + 1}
                        fontSize="5" fill={isActive ? "var(--jadeG)" : "var(--paper4)"}
                        textAnchor={isLeft ? "end" : "start"}
                        style={{ pointerEvents: "none" }}>{ac.name}</text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* 经脉统计 */}
            <div className="panel">
              <div className="grid-3" style={{ fontSize: "0.8rem", textAlign: "center" }}>
                <div>
                  <div style={{ color: "var(--paper4)" }}>总经脉</div>
                  <div style={{ color: "var(--gold)", fontSize: "1.1rem", fontWeight: 700 }}>{(data.meridians || []).length}</div>
                </div>
                <div>
                  <div style={{ color: "var(--paper4)" }}>已激活</div>
                  <div style={{ color: "var(--jadeG)", fontSize: "1.1rem", fontWeight: 700 }}>{(data.meridians || []).filter((m:any)=>m.active).length}</div>
                </div>
                <div>
                  <div style={{ color: "var(--paper4)" }}>总穴位</div>
                  <div style={{ color: "var(--azure)", fontSize: "1.1rem", fontWeight: 700 }}>{ACUPOINTS.length}</div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* ====== 神经视图 ====== */}
        {view === "nervous" && (
          <div className="panel">
            <div className="text-azure font-bold mb-3 text-sm">⚡ 神经系统</div>
            <div className="grid-2 mb-4">
              {[["传导速度", ((data.nervous?.conductionSpeedPct || 1) * 100).toFixed(0) + "%"],
                ["损伤等级", data.nervous?.damageLevel || 0],
                ["异常效果", (data.nervous?.effects || []).length || 0],
              ].map(([label, val], i) => (
                <div key={i} style={{ fontSize: "0.8rem", padding: "6px 0" }}>
                  <div style={{ color: "var(--paper4)" }}>{label}</div>
                  <div style={{ color: "var(--azure)", fontWeight: 600 }}>{val}</div>
                </div>
              ))}
            </div>
            {/* 传导速度可视化 */}
            <div style={{ marginBottom: 16 }}>
              <div style={{ fontSize: "0.75rem", color: "var(--paper3)", marginBottom: 4 }}>神经传导速度</div>
              <div className="stat-bar" style={{ height: 12 }}>
                <div className="stat-bar-fill" style={{
                  width: ((data.nervous?.conductionSpeedPct || 1) * 100) + "%",
                  background: "linear-gradient(90deg,#3a7aaa,#4a9898)",
                }} />
              </div>
            </div>
            {data.nerveDamageEffects && (
              <div style={{ fontSize: "0.72rem", color: "var(--paper3)", paddingTop: 8, borderTop: "1px solid var(--ink4)" }}>
                <div className="text-paper4 mb-2">损伤等级参考：</div>
                {["mild","moderate","severe"].map((level, idx) => {
                  const effects = (data.nerveDamageEffects as any)[level];
                  if (!effects || !Array.isArray(effects)) return null;
                  const colors = ["var(--amber)","var(--cinnabarG)","#cc4040"];
                  const labels = ["轻度","中度","重度"];
                  return (
                    <div key={level} style={{ marginBottom: 6 }}>
                      <div style={{ color: colors[idx], fontWeight: 600 }}>{labels[idx]}</div>
                      {effects.slice(0, 2).map((e: any, i: number) => (
                        <div key={i} style={{ color: "var(--paper4)", paddingLeft: 8 }}>
                          {e.icon} {e.name}: {e.desc}
                        </div>
                      ))}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* ====== 魂魄视图 ====== */}
        {view === "soul" && (
          <>
            <div className="panel-gold">
              <div className="text-gold font-bold mb-2 text-sm">✨ 三魂</div>
              <div style={{ fontSize: "0.68rem", color: "var(--paper4)", marginBottom: 10 }}>
                胎光（天魂）· 爽灵（地魂）· 幽精（命魂）
              </div>
              {(data.souls || []).map((soul: any, i: number) => (
                <div key={soul.id} style={{
                  padding: "10px 0", borderBottom: "1px solid rgba(168,152,110,0.15)",
                  display: "flex", justifyContent: "space-between", alignItems: "center"
                }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: "0.88rem", color: "var(--gold)" }}>
                      {soul.name} <span style={{ fontSize: "0.65rem", color: "var(--paper4)" }}>{soul.title}</span>
                    </div>
                    <div style={{ fontSize: "0.68rem", color: "var(--paper3)", marginTop: 2 }}>{soul.desc}</div>
                    <div className="stat-bar" style={{ marginTop: 4, width: 100 }}>
                      <div className="stat-bar-fill mp" style={{ width: Math.min(100, (soul.hp || 1) * 3) + "%" }} />
                    </div>
                    <div style={{ fontSize: "0.62rem", color: "var(--paper4)", marginTop: 2 }}>Lv.{soul.level || 0}</div>
                  </div>
                  <button onClick={() => api({ action: "train_soul", soulIdx: i })} disabled={busy}
                    className="btn btn-sm" style={{ background: "var(--goldD)", color: "var(--paper)" }}>修炼</button>
                </div>
              ))}
            </div>

            <div className="panel">
              <div className="text-violet font-bold mb-2 text-sm">💫 七魄</div>
              <div style={{ fontSize: "0.68rem", color: "var(--paper4)", marginBottom: 10 }}>
                尸狗 · 伏矢 · 雀阴 · 吞贼 · 非毒 · 除秽 · 臭肺
              </div>
              {(data.spirits || []).map((sp: any, i: number) => (
                <div key={sp.id} style={{
                  padding: "10px 0", borderBottom: "1px solid var(--ink4)",
                  display: "flex", justifyContent: "space-between", alignItems: "center"
                }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: "0.85rem", color: "var(--violet)" }}>{sp.name}</div>
                    <div style={{ fontSize: "0.68rem", color: "var(--paper4)", marginTop: 1 }}>{sp.dominion}</div>
                    <div className="stat-bar" style={{ marginTop: 3, width: 100 }}>
                      <div className="stat-bar-fill exp" style={{ width: Math.min(100, (sp.hp || 1) * 3) + "%" }} />
                    </div>
                    <div style={{ fontSize: "0.62rem", color: "var(--paper4)", marginTop: 2 }}>Lv.{sp.level || 0}</div>
                  </div>
                  <button onClick={() => api({ action: "train_spirit", spiritIdx: i })} disabled={busy}
                    className="btn btn-sm" style={{ background: "var(--violet)", color: "var(--paper)" }}>修炼</button>
                </div>
              ))}
            </div>
          </>
        )}
      </main>

      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}
