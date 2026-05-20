// ─── Card/Card.jsx ───────────────────────────────────────────────────────────
import { colors, radius, shadow, transition } from "../../styles/theme.js";

export default function Card({ icon, label, desc, selected, multi = false, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-pressed={selected}
      style={{
        ...s.base,
        borderColor:  selected ? colors.borderActive : colors.border,
        background:   selected ? colors.cardSelected  : colors.card,
        boxShadow:    selected ? shadow.selected       : shadow.card,
        transform:    selected ? "translateY(-3px)"    : "translateY(0)",
      }}
      onMouseEnter={(e) => {
        if (!selected) {
          e.currentTarget.style.borderColor = "var(--color-border-active)";
          e.currentTarget.style.opacity = "0.85";
          e.currentTarget.style.transform = "translateY(-2px)";
        }
      }}
      onMouseLeave={(e) => {
        if (!selected) {
          e.currentTarget.style.borderColor = colors.border;
          e.currentTarget.style.opacity = "1";
          e.currentTarget.style.transform = "translateY(0)";
        }
      }}
    >
      {multi && (
        <div style={{
          ...s.badge,
          background: selected ? colors.accent        : colors.tag,
          color:      selected ? "var(--step-done-text, #000)" : colors.textMuted,
          border:     selected ? "none" : `1px solid var(--color-border)`,
        }}>
          {selected ? "✓" : ""}
        </div>
      )}

      <div style={s.icon}>{icon}</div>
      <div style={s.label}>{label}</div>
      {desc && <div style={s.desc}>{desc}</div>}
    </button>
  );
}

const s = {
  base: {
    position: "relative",
    border: `1px solid var(--color-border)`,
    borderRadius: radius.lg,
    padding: "22px 14px 18px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
    cursor: "pointer",
    transition,
    textAlign: "center",
    outline: "none",
    background: colors.card,
    minHeight: 110,
  },
  badge: {
    position: "absolute",
    top: 10, right: 10,
    width: 22, height: 22,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 11,
    fontWeight: 800,
    transition,
  },
  icon:  { fontSize: 34, lineHeight: 1 },
  label: { fontSize: 13, fontWeight: 700, color: colors.text, lineHeight: 1.3 },
  desc:  { fontSize: 11, color: colors.textMuted, lineHeight: 1.4 },
};
