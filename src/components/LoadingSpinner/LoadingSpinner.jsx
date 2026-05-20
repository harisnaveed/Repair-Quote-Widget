// ─── LoadingSpinner/LoadingSpinner.jsx ───────────────────────────────────────
import { colors } from "../../styles/theme.js";

export default function LoadingSpinner({ message = "Loading…" }) {
  return (
    <div style={s.wrap}>
      <div style={s.ring} />
      <span style={s.msg}>{message}</span>
    </div>
  );
}

const s = {
  wrap: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "60px 20px",
    gap: 16,
  },
  ring: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    border: `3px solid var(--color-border)`,
    borderTopColor: colors.accent,
    animation: "spin 0.75s linear infinite",
  },
  msg: {
    fontSize: 13,
    color: colors.textMuted,
  },
};
