// ─── Section/Section.jsx ─────────────────────────────────────────────────────
import { colors, fonts } from "../../styles/theme.js";

export default function Section({ title, subtitle, children }) {
  return (
    <div style={s.root} className="fade-up">
      <h2 style={s.title}>{title}</h2>
      {subtitle && <p style={s.sub}>{subtitle}</p>}
      <div style={s.body}>{children}</div>
    </div>
  );
}

const s = {
  root: {
    maxWidth: 900,
    margin: "0 auto",
    padding: "28px 24px 0",
  },
  title: {
    fontFamily: fonts.display,
    fontSize: 24,
    fontWeight: 800,
    letterSpacing: "-0.4px",
    color: colors.text,
    marginBottom: 6,
  },
  sub: {
    fontSize: 14,
    color: colors.textMuted,
    marginBottom: 24,
  },
  body: {},
};
