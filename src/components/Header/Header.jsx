// ─── Header/Header.jsx ───────────────────────────────────────────────────────
import { useTheme } from "../../contexts/ThemeContext.jsx";
import { colors, fonts, transition } from "../../styles/theme.js";

export default function Header() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header style={s.root}>
      <div style={s.left}>
        <div style={s.iconWrap}>🔧</div>
        <div>
          <div style={s.title}>Repair Center</div>
          <div style={s.sub}>Fast · Reliable · Affordable</div>
        </div>
      </div>

      <div style={s.right}>
        <div style={s.badge}>Book a Repair</div>

        {/* ── Theme toggle ──────────────────────────────────────────── */}
        <button
          onClick={toggleTheme}
          title={isDark ? "Switch to light mode" : "Switch to dark mode"}
          style={s.themeBtn}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "var(--color-accent-dim)";
            e.currentTarget.style.borderColor = "var(--color-accent)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "var(--color-card)";
            e.currentTarget.style.borderColor = "var(--color-border)";
          }}
        >
          <span style={s.toggleTrack} aria-hidden="true">
            <span style={{
              ...s.toggleThumb,
              transform: isDark ? "translateX(0)" : "translateX(20px)",
              background: isDark ? "#444466" : "#ffcc44",
            }} />
          </span>
          <span style={s.toggleIcon}>
            {isDark ? "🌙" : "☀️"}
          </span>
          <span style={s.toggleLabel}>
            {isDark ? "Dark" : "Light"}
          </span>
        </button>
      </div>
    </header>
  );
}

const s = {
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "16px 28px",
    borderBottom: "1px solid var(--color-border)",
    background: "var(--color-surface)",
    position: "sticky",
    top: 0,
    zIndex: 100,
    backdropFilter: "blur(12px)",
    transition: "background 0.3s ease, border-color 0.3s ease",
  },
  left:  { display: "flex", alignItems: "center", gap: 14 },
  right: { display: "flex", alignItems: "center", gap: 12 },
  iconWrap: { fontSize: 32 },
  title: {
    fontFamily: fonts.display,
    fontSize: 20,
    fontWeight: 800,
    letterSpacing: "-0.4px",
    background: "linear-gradient(135deg, var(--color-text) 40%, var(--color-accent))",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  sub: {
    fontSize: 11,
    color: "var(--color-text-muted)",
    marginTop: 2,
    letterSpacing: "0.4px",
  },
  badge: {
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "0.8px",
    textTransform: "uppercase",
    color: "var(--color-accent)",
    background: "var(--color-accent-dim)",
    border: "1px solid var(--color-accent-dim)",
    borderRadius: "6px",
    padding: "5px 12px",
  },
  themeBtn: {
    display: "flex",
    alignItems: "center",
    gap: 7,
    background: "var(--color-card)",
    border: "1px solid var(--color-border)",
    borderRadius: "10px",
    padding: "7px 13px",
    cursor: "pointer",
    transition,
    color: "var(--color-text-sub)",
    fontSize: 12,
    fontWeight: 600,
    fontFamily: fonts.body,
  },
  toggleTrack: {
    display: "inline-flex",
    alignItems: "center",
    width: 36,
    height: 18,
    borderRadius: "999px",
    background: "var(--color-border)",
    position: "relative",
    padding: "2px",
    flexShrink: 0,
    border: "1px solid var(--color-border)",
  },
  toggleThumb: {
    width: 14,
    height: 14,
    borderRadius: "50%",
    transition: "transform 0.25s ease, background 0.25s ease",
    flexShrink: 0,
  },
  toggleIcon: { fontSize: 14 },
  toggleLabel: {
    fontSize: 12,
    fontWeight: 600,
    color: "var(--color-text-sub)",
    minWidth: 34,
  },
};
