// ─── IssueSelector/IssueSelector.jsx ─────────────────────────────────────────
import { useState, useEffect } from "react";
import { fetchIssues } from "../../api/repairApi.js";
import Card from "../Card/Card.jsx";
import Section from "../Section/Section.jsx";
import BackButton from "../BackButton/BackButton.jsx";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner.jsx";
import { colors, radius, fonts } from "../../styles/theme.js";

export default function IssueSelector({ model, selectedIssues, onToggle, onContinue, onBack }) {
  const [allIssues, setAllIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchIssues()
      .then(setAllIssues)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const count = selectedIssues.length;

  return (
    <Section
      title="What's the Issue?"
      subtitle={`Select one or more problems with your ${model?.label ?? "device"}. You can pick multiple.`}
    >
      {loading && <LoadingSpinner message="Fetching issue types…" />}
      {error   && <p style={{ color: colors.error }}>{error}</p>}

      {!loading && !error && (
        <div style={grid}>
          {allIssues.map((issue) => (
            <Card
              key={issue.id}
              icon={issue.icon}
              label={issue.label}
              desc={issue.desc}
              selected={selectedIssues.some((i) => i.id === issue.id)}
              multi
              onClick={() => onToggle(issue)}
            />
          ))}
        </div>
      )}

      <div style={s.actions}>
        <BackButton onClick={onBack} />
        <button
          style={{
            ...s.continueBtn,
            opacity: count === 0 ? 0.35 : 1,
            cursor:  count === 0 ? "not-allowed" : "pointer",
          }}
          disabled={count === 0}
          onClick={onContinue}
        >
          Continue
          {count > 0 && (
            <span style={s.badge}>{count}</span>
          )}
          →
        </button>
      </div>
    </Section>
  );
}

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
  gap: 14,
};

const s = {
  actions: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 12,
    marginTop: 28,
  },
  continueBtn: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    background: "linear-gradient(135deg, var(--color-accent), var(--color-border-active))",
    color: "var(--step-done-text, #000)",
    border: "none",
    borderRadius: radius.md,
    padding: "12px 28px",
    fontSize: 14,
    fontWeight: 800,
    fontFamily: fonts.display,
    transition: "all 0.2s",
    letterSpacing: "0.2px",
  },
  badge: {
    background: "rgba(0,0,0,0.25)",
    borderRadius: "99px",
    padding: "2px 8px",
    fontSize: 12,
    fontWeight: 800,
  },
};
