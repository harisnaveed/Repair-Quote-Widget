// ─── theme.js ────────────────────────────────────────────────────────────────
// Design tokens using CSS custom properties so dark/light themes work
// automatically. All values must match the variables in global.css.

export const colors = {
  bg:           "var(--color-bg)",
  surface:      "var(--color-surface)",
  surfaceHover: "var(--color-surface-hover)",
  border:       "var(--color-border)",
  borderActive: "var(--color-border-active)",
  accent:       "var(--color-accent)",
  accentDim:    "var(--color-accent-dim)",
  accentGlow:   "var(--color-accent-glow)",
  text:         "var(--color-text)",
  textMuted:    "var(--color-text-muted)",
  textSub:      "var(--color-text-sub)",
  success:      "var(--color-success)",
  error:        "var(--color-error)",
  card:         "var(--color-card)",
  cardSelected: "var(--color-card-selected)",
  tag:          "var(--color-tag)",
  inputBg:      "var(--color-input-bg)",
  inputBorder:  "var(--color-input-border)",
};

export const fonts = {
  display: "var(--font-display)",
  body:    "var(--font-body)",
};

export const radius = {
  sm:   "8px",
  md:   "12px",
  lg:   "16px",
  xl:   "20px",
  full: "9999px",
};

export const shadow = {
  card:     "var(--shadow-card)",
  selected: "var(--shadow-selected)",
  glow:     "0 0 24px var(--color-accent-glow)",
};

export const transition = "all 0.2s ease";

