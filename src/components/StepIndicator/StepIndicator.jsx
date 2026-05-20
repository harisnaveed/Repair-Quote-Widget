// ─── StepIndicator/StepIndicator.jsx ────────────────────────────────────────
import { colors, fonts, transition } from "../../styles/theme.js";

export default function StepIndicator({ steps, currentStep }) {
  return (
    <div style={s.wrapper}>
      <div style={s.inner}>
        {steps.map((label, i) => {
          const num    = i + 1;
          const active = num === currentStep;
          const done   = num < currentStep;
          return (
            <div key={num} style={s.item}>
              <div style={s.row}>
                <div style={{
                  ...s.circle,
                  background: done
                    ? colors.accent
                    : active
                    ? `linear-gradient(135deg, var(--color-accent), var(--color-border-active))`
                    : colors.card,
                  color:     done || active ? "var(--step-done-text, #000)" : colors.textMuted,
                  boxShadow: active ? `0 0 20px var(--color-accent-glow)` : "none",
                  fontWeight: active ? 800 : 600,
                  border: `1px solid ${done || active ? "transparent" : colors.border}`,
                  animation: active ? "pulse-glow 2s infinite" : "none",
                }}>
                  {done ? "✓" : num}
                </div>
                {i < steps.length - 1 && (
                  <div style={{
                    ...s.line,
                    background: done ? colors.accent : colors.border,
                  }} />
                )}
              </div>
              <span style={{
                ...s.label,
                color:      active ? colors.accent : done ? colors.textSub : colors.textMuted,
                fontWeight: active ? 700 : 400,
                fontFamily: active ? fonts.display : fonts.body,
              }}>
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const s = {
  wrapper: {
    background: colors.surface,
    borderBottom: `1px solid var(--color-border)`,
    padding: "18px 24px 10px",
    overflowX: "auto",
    transition: "background 0.3s ease",
  },
  inner: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: 0,
    minWidth: "fit-content",
    margin: "0 auto",
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 6,
  },
  row: { display: "flex", alignItems: "center" },
  circle: {
    width: 32,
    height: 32,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 12,
    flexShrink: 0,
    transition,
    zIndex: 1,
  },
  line: {
    width: 52,
    height: 2,
    borderRadius: 2,
    transition,
    flexShrink: 0,
  },
  label: {
    fontSize: 10,
    textAlign: "center",
    whiteSpace: "nowrap",
    letterSpacing: "0.2px",
    transition,
  },
};
