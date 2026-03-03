import { useEffect, useState } from "react";

// Read theme from localStorage before React hydrates — same key ThemeProvider uses
const getStoredTheme = (): "dark" | "light" => {
  try {
    const stored = localStorage.getItem("vite-ui-theme");
    if (stored === "light") return "light";
  } catch {
    // ignore
  }
  return "dark";
};

const SmokeLoader = () => {
  const [theme] = useState<"dark" | "light">(getStoredTheme);
  const [phase, setPhase] = useState<"intro" | "hold" | "fading" | "gone">("intro");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("hold"), 600);
    const t2 = setTimeout(() => setPhase("fading"), 2600);
    const t3 = setTimeout(() => setPhase("gone"), 4000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  // Lock body scroll while loader is visible
  useEffect(() => {
    if (phase === "gone") {
      document.body.style.overflow = "";
    } else {
      document.body.style.overflow = "hidden";
    }
    return () => { document.body.style.overflow = ""; };
  }, [phase]);

  if (phase === "gone") return null;

  const isDark = theme === "dark";

  // Colour tokens
  const bg = isDark ? "#080806" : "#f5f0e8";
  const gold = isDark ? "#c9a96e" : "#a07840";
  const goldDim = isDark ? "rgba(201,169,110,0.13)" : "rgba(160,120,60,0.12)";
  const goldMid = isDark ? "rgba(201,169,110,0.22)" : "rgba(160,120,60,0.20)";
  const goldSoft = isDark ? "rgba(201,169,110,0.08)" : "rgba(160,120,60,0.07)";
  const lineGlow = isDark
    ? "0 0 80px rgba(201,169,110,0.55), 0 0 160px rgba(201,169,110,0.18)"
    : "0 0 60px rgba(160,120,60,0.40), 0 0 120px rgba(160,120,60,0.12)";
  const subtitleColor = isDark ? "rgba(201,169,110,0.6)" : "rgba(130,90,40,0.65)";
  const mountainFill = isDark ? "rgba(201,169,110,0.04)" : "rgba(130,90,40,0.05)";
  const mountainStroke = isDark ? "rgba(201,169,110,0.18)" : "rgba(130,90,40,0.22)";

  return (
    <>
      <style>{`
        /* ── Smoke particle rise variants ───────────────────────────────── */
        @keyframes sr1 {
          0%   { transform:translateY(0)   translateX(0)    scale(1);   opacity:0; }
          12%  { opacity:0.55; }
          55%  { opacity:0.42; }
          100% { transform:translateY(-180px) translateX(38px)  scale(2.8); opacity:0; }
        }
        @keyframes sr2 {
          0%   { transform:translateY(0)   translateX(0)    scale(1);   opacity:0; }
          18%  { opacity:0.48; }
          60%  { opacity:0.30; }
          100% { transform:translateY(-150px) translateX(-48px) scale(2.4); opacity:0; }
        }
        @keyframes sr3 {
          0%   { transform:translateY(0)   translateX(0)    scale(1);   opacity:0; }
          20%  { opacity:0.38; }
          65%  { opacity:0.22; }
          100% { transform:translateY(-210px) translateX(14px)  scale(3.2); opacity:0; }
        }
        @keyframes sr4 {
          0%   { transform:translateY(0)   scale(1);   opacity:0; }
          16%  { opacity:0.52; }
          55%  { opacity:0.28; }
          100% { transform:translateY(-120px) scale(3.6);               opacity:0; }
        }
        @keyframes sr5 {
          0%   { transform:translateY(0)   translateX(0)    scale(1);   opacity:0; }
          22%  { opacity:0.35; }
          65%  { opacity:0.18; }
          100% { transform:translateY(-240px) translateX(-25px) scale(2.9); opacity:0; }
        }
        @keyframes sr6 {
          0%   { transform:translateY(0)   translateX(0)    scale(1);   opacity:0; }
          10%  { opacity:0.28; }
          60%  { opacity:0.15; }
          100% { transform:translateY(-100px) translateX(55px)  scale(2.2); opacity:0; }
        }
        @keyframes sr7 {
          0%   { transform:translateY(0)   translateX(0)    scale(1);   opacity:0; }
          18%  { opacity:0.32; }
          65%  { opacity:0.16; }
          100% { transform:translateY(-130px) translateX(-60px) scale(2.6); opacity:0; }
        }

        /* ── Wide ambient base drift ─────────────────────────────────────── */
        @keyframes ambientDrift {
          0%   { transform:scaleX(1) scaleY(1) translateY(0);  opacity:0; }
          30%  { opacity:0.18; }
          100% { transform:scaleX(1.3) scaleY(1.5) translateY(-60px); opacity:0; }
        }

        /* ── Title entrance ──────────────────────────────────────────────── */
        @keyframes titleIn {
          0%   { opacity:0; letter-spacing:0.6em; filter:blur(16px); transform:translateY(8px); }
          35%  { opacity:1; letter-spacing:0.35em; filter:blur(0);   transform:translateY(0); }
          75%  { opacity:1; }
          100% { opacity:0; filter:blur(8px); transform:translateY(-4px); }
        }
        @keyframes dividerIn {
          0%   { opacity:0; width:0px; }
          30%  { opacity:0; }
          55%  { opacity:1; width:70px; }
          80%  { opacity:1; }
          100% { opacity:0; }
        }
        @keyframes subtitleIn {
          0%   { opacity:0; letter-spacing:0.6em; }
          40%  { opacity:0; }
          65%  { opacity:1; letter-spacing:0.45em; }
          80%  { opacity:1; }
          100% { opacity:0; }
        }
        @keyframes taglineIn {
          0%   { opacity:0; }
          55%  { opacity:0; }
          75%  { opacity:0.55; }
          85%  { opacity:0.55; }
          100% { opacity:0; }
        }

        /* ── Mountain silhouette slow drift ──────────────────────────────── */
        @keyframes mountainFade {
          0%   { opacity:0; transform:translateY(20px); }
          30%  { opacity:1; transform:translateY(0); }
          75%  { opacity:1; }
          100% { opacity:0; }
        }

        /* ── Vignette pulse ──────────────────────────────────────────────── */
        @keyframes vignettePulse {
          0%   { opacity:0.7; }
          50%  { opacity:1; }
          100% { opacity:0.7; }
        }

        /* ── Overlay fade ────────────────────────────────────────────────── */
        .sml-overlay {
          transition: opacity 1.4s cubic-bezier(0.45, 0, 0.15, 1);
        }
        .sml-smoke { position:absolute; border-radius:50%; pointer-events:none; }
      `}</style>

      {/* ── Root overlay ───────────────────────────────────────────────── */}
      <div
        className="sml-overlay"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          background: isDark
            ? `radial-gradient(ellipse 80% 80% at 50% 80%, #12100a 0%, ${bg} 100%)`
            : `radial-gradient(ellipse 80% 80% at 50% 80%, #e8ddc8 0%, ${bg} 100%)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          opacity: phase === "fading" ? 0 : 1,
        }}
      >

        {/* ── Vignette border ────────────────────────────────────────────── */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: isDark
            ? "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 45%, rgba(0,0,0,0.85) 100%)"
            : "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 45%, rgba(220,200,170,0.7) 100%)",
          animation: "vignettePulse 2.5s ease-in-out infinite",
        }} />

        {/* ── Mountain silhouette (SVG) ───────────────────────────────────── */}
        <svg
          viewBox="0 0 1000 300"
          preserveAspectRatio="xMidYMax meet"
          style={{
            position: "absolute", bottom: 0, left: 0, right: 0, width: "100%",
            height: "45%", animation: `mountainFade 4s cubic-bezier(0.4,0,0.2,1) forwards`,
          }}
        >
          {/* Back ranges — faint */}
          <polygon points="0,300 80,180 160,240 280,140 400,210 520,120 660,190 800,100 920,170 1000,130 1000,300"
            fill={mountainFill} stroke="none" />
          {/* Mid ranges */}
          <polyline points="0,300 60,220 180,160 280,200 400,130 500,80 600,140 720,90 840,150 950,110 1000,140 1000,300"
            fill="none" stroke={mountainStroke} strokeWidth="1.2" opacity="0.8" />
          {/* Front ridge — more opaque */}
          <polyline points="0,300 100,250 220,200 340,240 450,180 540,210 660,170 760,220 880,180 1000,230 1000,300"
            fill="none" stroke={mountainStroke} strokeWidth="0.7" opacity="0.5" />
          {/* Snow caps hints */}
          <polygon points="395,130 420,100 445,130" fill={isDark ? "rgba(255,250,240,0.08)" : "rgba(200,180,150,0.18)"} />
          <polygon points="495,80  520,48  545,80" fill={isDark ? "rgba(255,250,240,0.10)" : "rgba(200,180,150,0.20)"} />
          <polygon points="715,90  740,58  765,90" fill={isDark ? "rgba(255,250,240,0.07)" : "rgba(200,180,150,0.15)"} />
        </svg>

        {/* ── Ambient base smoke ──────────────────────────────────────────── */}
        <div className="sml-smoke" style={{ width: 700, height: 220, background: `radial-gradient(ellipse, ${goldSoft}, transparent 70%)`, bottom: "28%", left: "15%", filter: "blur(55px)", animation: "ambientDrift 3.8s ease-out 0.2s forwards" }} />
        <div className="sml-smoke" style={{ width: 600, height: 180, background: `radial-gradient(ellipse, ${goldSoft}, transparent 70%)`, bottom: "22%", left: "40%", filter: "blur(50px)", animation: "ambientDrift 4.2s ease-out 0.5s forwards" }} />

        {/* ── Mid smoke particles ─────────────────────────────────────────── */}
        <div className="sml-smoke" style={{ width: 240, height: 240, background: `radial-gradient(circle, ${goldMid}, transparent 70%)`, bottom: "32%", left: "36%", filter: "blur(38px)", animation: "sr1 3.0s cubic-bezier(0.4,0,0.2,1) 0.1s infinite" }} />
        <div className="sml-smoke" style={{ width: 190, height: 190, background: `radial-gradient(circle, ${goldMid}, transparent 70%)`, bottom: "30%", left: "51%", filter: "blur(32px)", animation: "sr2 3.4s cubic-bezier(0.4,0,0.2,1) 0.3s infinite" }} />
        <div className="sml-smoke" style={{ width: 280, height: 280, background: `radial-gradient(circle, ${goldDim}, transparent 70%)`, bottom: "27%", left: "43%", filter: "blur(44px)", animation: "sr3 3.8s cubic-bezier(0.4,0,0.2,1) 0.15s infinite" }} />
        <div className="sml-smoke" style={{ width: 170, height: 170, background: `radial-gradient(circle, ${goldMid}, transparent 70%)`, bottom: "35%", left: "27%", filter: "blur(28px)", animation: "sr4 3.1s cubic-bezier(0.4,0,0.2,1) 0.5s infinite" }} />
        <div className="sml-smoke" style={{ width: 220, height: 220, background: `radial-gradient(circle, ${goldDim}, transparent 70%)`, bottom: "29%", left: "56%", filter: "blur(40px)", animation: "sr5 4.0s cubic-bezier(0.4,0,0.2,1) 0.25s infinite" }} />

        {/* ── Fine wisp particles ──────────────────────────────────────────── */}
        <div className="sml-smoke" style={{ width: 120, height: 120, background: `radial-gradient(circle, ${goldMid}, transparent 70%)`, bottom: "38%", left: "61%", filter: "blur(22px)", animation: "sr6 2.6s cubic-bezier(0.4,0,0.2,1) 0.4s infinite" }} />
        <div className="sml-smoke" style={{ width: 140, height: 140, background: `radial-gradient(circle, ${goldDim}, transparent 70%)`, bottom: "36%", left: "30%", filter: "blur(24px)", animation: "sr7 2.9s cubic-bezier(0.4,0,0.2,1) 0.6s infinite" }} />
        <div className="sml-smoke" style={{ width: 100, height: 100, background: `radial-gradient(circle, ${goldMid}, transparent 70%)`, bottom: "40%", left: "47%", filter: "blur(18px)", animation: "sr1 2.3s cubic-bezier(0.4,0,0.2,1) 0.7s infinite" }} />

        {/* ── Brand copy ──────────────────────────────────────────────────── */}
        <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>

          {/* Ornament above */}
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(0.55rem, 1.2vw, 0.7rem)",
            color: subtitleColor,
            letterSpacing: "0.55em",
            margin: 0, fontStyle: "italic",
            animation: "taglineIn 4s ease-out forwards",
          }}>
            EST. 1720
          </p>

          {/* Thin rule */}
          <div style={{ height: "1px", background: `linear-gradient(90deg, transparent, ${gold}, transparent)`, animation: "dividerIn 4s ease-out forwards", width: 0, opacity: 0 }} />

          {/* Main title */}
          <p style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.8rem, 8vw, 5.5rem)",
            color: gold,
            fontWeight: 400,
            margin: 0,
            letterSpacing: "0.35em",
            textShadow: lineGlow,
            animation: "titleIn 4s cubic-bezier(0.4,0,0.2,1) forwards",
          }}>
            KOTI BANAL
          </p>

          {/* Subtitle */}
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(0.6rem, 1.4vw, 0.75rem)",
            color: subtitleColor,
            letterSpacing: "0.5em",
            margin: 0, fontStyle: "italic",
            animation: "subtitleIn 4s ease-out forwards",
          }}>
            HIMALAYAN LUXURY RETREAT
          </p>

          {/* Rule below */}
          <div style={{ height: "1px", background: `linear-gradient(90deg, transparent, ${gold}, transparent)`, animation: "dividerIn 4s ease-out 0.1s forwards", width: 0, opacity: 0 }} />
        </div>
      </div>
    </>
  );
};

export default SmokeLoader;
