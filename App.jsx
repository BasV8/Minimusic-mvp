mport { useState } from "react";

const activities = [
  {
    id: 1,
    emoji: "🌅",
    name: "Morning Hum",
    description: "Start the day with a soft, slow hum that wakes up little ears.",
    color: "from-yellow-100 to-amber-50",
    border: "border-amber-200",
    btn: "bg-amber-300 hover:bg-amber-400 text-amber-900",
    accent: "#F6C343",
  },
  {
    id: 2,
    emoji: "🫧",
    name: "Bubble Bath Song",
    description: "Gentle splashing rhythms and silly sounds for bath time bliss.",
    color: "from-sky-100 to-blue-50",
    border: "border-sky-200",
    btn: "bg-sky-300 hover:bg-sky-400 text-sky-900",
    accent: "#7DD3FC",
  },
  {
    id: 3,
    emoji: "🌙",
    name: "Sleepy Lullaby",
    description: "Slow your breath and settle into a quiet, cosy wind-down.",
    color: "from-violet-100 to-purple-50",
    border: "border-violet-200",
    btn: "bg-violet-300 hover:bg-violet-400 text-violet-900",
    accent: "#C4B5FD",
  },
];

// SVG decorations
const WigglyLine = ({ color = "#F6C343", width = 120, style = {} }) => (
  <svg width={width} height="18" viewBox={`0 0 ${width} 18`} style={style} aria-hidden>
    <path
      d={`M0,9 Q15,2 30,9 Q45,16 60,9 Q75,2 90,9 Q105,16 ${width},9`}
      fill="none"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

const Sparkle = ({ x, y, size = 16, color = "#F6C343", rotate = 0 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={{ position: "absolute", top: y, left: x, transform: `rotate(${rotate}deg)` }}
    aria-hidden
  >
    <path
      d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z"
      fill={color}
      opacity="0.7"
    />
  </svg>
);

const Cloud = ({ style = {} }) => (
  <svg width="64" height="36" viewBox="0 0 64 36" style={style} aria-hidden>
    <ellipse cx="32" cy="26" rx="28" ry="10" fill="white" opacity="0.6" />
    <ellipse cx="22" cy="22" rx="14" ry="12" fill="white" opacity="0.55" />
    <ellipse cx="42" cy="22" rx="12" ry="10" fill="white" opacity="0.55" />
    <ellipse cx="32" cy="18" rx="16" ry="12" fill="white" opacity="0.6" />
  </svg>
);

const HeartNote = ({ style = {} }) => (
  <svg width="28" height="28" viewBox="0 0 28 28" style={style} aria-hidden>
    <path
      d="M14 22 C14 22 4 15 4 9 C4 6 6 4 9 4 C11 4 13 5.5 14 7 C15 5.5 17 4 19 4 C22 4 24 6 24 9 C24 15 14 22 14 22Z"
      fill="#FDA4AF"
      opacity="0.7"
    />
    <line x1="20" y1="6" x2="20" y2="14" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
    <ellipse cx="22" cy="14" rx="2" ry="1.5" fill="#94A3B8" opacity="0.7" />
  </svg>
);

function ActivityCard({ activity, index }) {
  const [tapped, setTapped] = useState(false);

  const handleTap = () => {
    setTapped(true);
    setTimeout(() => setTapped(false), 1200);
  };

  return (
    <div
      className={`relative rounded-3xl border-2 ${activity.border} bg-gradient-to-br ${activity.color} p-5 shadow-sm`}
      style={{
        fontFamily: "'Patrick Hand', cursive",
        transform: tapped ? "scale(0.97)" : "scale(1)",
        transition: "transform 0.2s ease",
      }}
    >
      {/* Subtle wobbly border effect via box shadow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "1.5rem",
          boxShadow: `0 0 0 3px ${activity.accent}33`,
          pointerEvents: "none",
        }}
      />

      {/* Emoji */}
      <div
        style={{
          fontSize: "2.4rem",
          marginBottom: "0.5rem",
          display: "inline-block",
          animation: tapped ? "none" : `sway${activity.id} 4s ease-in-out infinite`,
          animationDelay: `${index * 0.4}s`,
        }}
      >
        {activity.emoji}
      </div>

      {/* Name */}
      <h3
        style={{
          fontSize: "1.2rem",
          fontWeight: "700",
          color: "#3C3229",
          marginBottom: "0.25rem",
          letterSpacing: "0.01em",
        }}
      >
        {activity.name}
      </h3>

      {/* Wiggly underline */}
      <WigglyLine color={activity.accent} width={100} style={{ marginBottom: "0.5rem" }} />

      {/* Description */}
      <p
        style={{
          fontSize: "0.92rem",
          color: "#5C4E3A",
          lineHeight: "1.55",
          marginBottom: "1rem",
          minHeight: "2.6rem",
        }}
      >
        {activity.description}
      </p>

      {/* CTA Button */}
      <button
        onClick={handleTap}
        className={`${activity.btn} rounded-full px-5 py-2 text-sm font-bold shadow-sm transition-all duration-150 active:scale-95`}
        style={{
          fontFamily: "'Patrick Hand', cursive",
          fontSize: "0.95rem",
          letterSpacing: "0.02em",
          cursor: "pointer",
          border: "none",
          outline: "none",
        }}
        aria-label={`Start ${activity.name}`}
      >
        {tapped ? "✨ Starting…" : "Let's try →"}
      </button>

      {/* Sparkle on tap */}
      {tapped && (
        <Sparkle x="78%" y="10%" size={20} color={activity.accent} rotate={15} />
      )}
    </div>
  );
}

export default function MiniMusicApp() {
  return (
    <>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Patrick+Hand&family=Baloo+2:wght@700;800&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          background: #FFFBF2;
          min-height: 100vh;
        }

        .app-bg {
          background: 
            radial-gradient(ellipse at 10% 0%, #FEF3C755 0%, transparent 50%),
            radial-gradient(ellipse at 90% 10%, #E0F2FE55 0%, transparent 45%),
            radial-gradient(ellipse at 50% 100%, #EDE9FE44 0%, transparent 50%),
            #FFFBF2;
          min-height: 100vh;
        }

        /* Parchment watercolour texture overlay */
        .app-bg::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
        }

        .content { position: relative; z-index: 1; }

        @keyframes floatUp {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }

        @keyframes sway1 {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
        }
        @keyframes sway2 {
          0%, 100% { transform: rotate(2deg); }
          50% { transform: rotate(-4deg); }
        }
        @keyframes sway3 {
          0%, 100% { transform: rotate(-2deg); }
          50% { transform: rotate(5deg); }
        }

        @keyframes shimmer {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.15); }
        }

        .logo-text {
          animation: floatUp 3.5s ease-in-out infinite;
        }

        .deco-sparkle {
          animation: shimmer 2.5s ease-in-out infinite;
        }

        .card-enter {
          animation: cardSlideIn 0.5s ease forwards;
          opacity: 0;
        }

        @keyframes cardSlideIn {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="app-bg">
        <div
          className="content"
          style={{
            maxWidth: "420px",
            margin: "0 auto",
            padding: "2rem 1.25rem 3rem",
            fontFamily: "'Patrick Hand', cursive",
          }}
        >
          {/* === HEADER === */}
          <header style={{ textAlign: "center", marginBottom: "2.5rem", position: "relative" }}>
            {/* Floating cloud decorations */}
            <Cloud style={{ position: "absolute", top: "-8px", left: "-10px", opacity: 0.9 }} />
            <Cloud style={{ position: "absolute", top: "4px", right: "-14px", opacity: 0.7, transform: "scale(0.75)" }} />

            {/* Sparkle decorations */}
            <span
              className="deco-sparkle"
              style={{ position: "absolute", top: "0", left: "38%", fontSize: "1.1rem" }}
              aria-hidden
            >
              ✨
            </span>
            <span
              className="deco-sparkle"
              style={{ position: "absolute", top: "10px", right: "30%", fontSize: "0.85rem", animationDelay: "0.7s" }}
              aria-hidden
            >
              ⭐
            </span>

            {/* App name */}
            <div className="logo-text" style={{ display: "inline-block" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.4rem" }}>
                <HeartNote style={{ marginTop: "-4px" }} />
                <span
                  style={{
                    fontFamily: "'Baloo 2', cursive",
                    fontWeight: "800",
                    fontSize: "2.4rem",
                    background: "linear-gradient(135deg, #F59E0B, #A78BFA)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.1,
                  }}
                >
                  MiniMusic
                </span>
                <HeartNote style={{ marginTop: "-4px", transform: "scaleX(-1)" }} />
              </div>
            </div>

            {/* Tagline */}
            <WigglyLine color="#A78BFA" width={160} style={{ margin: "0.4rem auto 0.6rem" }} />
            <p
              style={{
                fontSize: "1.05rem",
                color: "#7C6F5B",
                lineHeight: 1.5,
              }}
            >
              Tiny songs for tiny humans 🌿
              <br />
              <span style={{ fontSize: "0.88rem", color: "#A89880" }}>
                Pick a moment. Let the music begin.
              </span>
            </p>
          </header>

          {/* === ACTIVITY CARDS === */}
          <section aria-label="Activity cards">
            <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
              {activities.map((activity, i) => (
                <div
                  key={activity.id}
                  className="card-enter"
                  style={{ animationDelay: `${i * 0.12}s` }}
                >
                  <ActivityCard activity={activity} index={i} />
                </div>
              ))}
            </div>
          </section>

          {/* === FOOTER === */}
          <footer style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <WigglyLine color="#86EFAC" width={80} style={{ margin: "0 auto 0.6rem" }} />
            <p style={{ fontSize: "0.82rem", color: "#A89880" }}>
              Made with 💛 for little ears & big hearts
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}
