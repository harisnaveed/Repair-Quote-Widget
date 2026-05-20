// ─── SuccessScreen/SuccessScreen.jsx ─────────────────────────────────────────
import { colors, fonts, radius } from "../../styles/theme.js";

export default function SuccessScreen({ referenceId, jobCount, onReset }) {
  return (
    <div style={s.wrap}>
      <div style={s.glow} />
      <div style={s.iconWrap}>
        <span style={s.icon}>✅</span>
      </div>

      <h2 style={s.title}>Repair Request Submitted!</h2>
      <p style={s.sub}>
        Your request for <strong style={{ color: colors.accent }}>{jobCount} device{jobCount > 1 ? "s" : ""}</strong> has
        been received. Our team will review and contact you shortly with a detailed quote.
      </p>

      {referenceId && (
        <div style={s.refBox}>
          <span style={s.refLabel}>Reference ID</span>
          <span style={s.refId}>{referenceId}</span>
        </div>
      )}

      <div style={s.steps}>
        {["Request received", "Quote prepared", "Confirm & book", "Repair complete"].map((step, i) => (
          <div key={i} style={s.stepItem}>
            <div style={{ ...s.dot, background: i === 0 ? colors.accent : colors.border }} />
            <span style={{ ...s.stepLabel, color: i === 0 ? colors.text : colors.textMuted }}>{step}</span>
          </div>
        ))}
      </div>

      <button style={s.btn} onClick={onReset}>
        Start New Repair →
      </button>
    </div>
  );
}

const s = {
  wrap: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "60px 24px 80px",
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
    maxWidth: 520,
    margin: "0 auto",
    gap: 20,
  },
  glow: {
    position: "absolute",
    top: 60,
    left: "50%",
    transform: "translateX(-50%)",
    width: 280,
    height: 280,
    background: "radial-gradient(circle, var(--color-accent-dim) 0%, transparent 70%)",
    pointerEvents: "none",
  },
  iconWrap: {
    width: 80,
    height: 80,
    borderRadius: "50%",
    background: "var(--color-accent-dim)",
    border: "1px solid var(--color-accent-dim)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  icon:  { fontSize: 40 },
  title: {
    fontFamily: fonts.display,
    fontSize: 26,
    fontWeight: 800,
    color: colors.text,
    letterSpacing: "-0.4px",
  },
  sub: {
    fontSize: 15,
    color: colors.textMuted,
    lineHeight: 1.7,
    maxWidth: 400,
  },
  refBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 4,
    background: colors.accentDim,
    border: "1px solid var(--color-accent-dim)",
    borderRadius: radius.md,
    padding: "12px 32px",
  },
  refLabel: { fontSize: 10, fontWeight: 700, color: colors.accent, letterSpacing: "1px", textTransform: "uppercase" },
  refId:    { fontFamily: fonts.display, fontSize: 20, fontWeight: 800, color: colors.text, letterSpacing: "1px" },
  steps: {
    display: "flex",
    alignItems: "center",
    gap: 0,
    background: colors.card,
    border: "1px solid var(--color-border)",
    borderRadius: radius.lg,
    padding: "16px 20px",
    width: "100%",
    justifyContent: "space-between",
  },
  stepItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 6,
    flex: 1,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: "50%",
  },
  stepLabel: {
    fontSize: 10,
    fontWeight: 500,
    textAlign: "center",
    lineHeight: 1.3,
  },
  btn: {
    background: "linear-gradient(135deg, var(--color-accent), var(--color-border-active))",
    color: "var(--step-done-text, #000)",
    border: "none",
    borderRadius: radius.md,
    padding: "13px 32px",
    fontSize: 14,
    fontWeight: 800,
    fontFamily: fonts.display,
    cursor: "pointer",
    marginTop: 8,
  },
};
