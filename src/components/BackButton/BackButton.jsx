// ─── BackButton/BackButton.jsx ───────────────────────────────────────────────
import { colors, radius, transition } from "../../styles/theme.js";

export default function BackButton({ onClick, label = "← Back" }) {
  return (
    <button
      onClick={onClick}
      style={s.btn}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
        e.currentTarget.style.color = "#ccc";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
        e.currentTarget.style.color = colors.textSub;
      }}
    >
      {label}
    </button>
  );
}

const s = {
  btn: {
    background: "transparent",
    border: `1px solid rgba(255,255,255,0.1)`,
    color: colors.textSub,
    borderRadius: radius.md,
    padding: "10px 22px",
    cursor: "pointer",
    fontSize: 13,
    fontWeight: 600,
    transition,
  },
};
