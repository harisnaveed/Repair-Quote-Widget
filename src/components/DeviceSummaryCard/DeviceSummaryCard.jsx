// ─── DeviceSummaryCard/DeviceSummaryCard.jsx ─────────────────────────────────
// Displayed on the QuoteForm screen for each completed repair job.
// Supports removing individual issues via onRemoveIssue(issueId).

import { colors, radius, fonts, transition } from "../../styles/theme.js";

export default function DeviceSummaryCard({ job, index, onRemove, onRemoveIssue }) {
  const { device, brand, category, model, issues } = job;

  return (
    <div style={s.card}>
      {/* ── Header row ─────────────────────────────────────────────── */}
      <div style={s.header}>
        <div style={s.titleRow}>
          <span style={s.num}>#{index + 1}</span>
          <span style={s.deviceIcon}>{device?.icon}</span>
          <span style={s.deviceName}>{device?.label}</span>
        </div>
        <button
          style={s.removeDeviceBtn}
          onClick={onRemove}
          title="Remove this device"
          onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(224,48,80,0.2)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(224,48,80,0.08)"; }}
        >
          🗑 Remove Device
        </button>
      </div>

      {/* ── Breadcrumb tags ─────────────────────────────────────────── */}
      <div style={s.tags}>
        {brand    && <InfoTag label={`${brand.icon} ${brand.label}`} />}
        {category && <InfoTag label={`${category.icon} ${category.label}`} accent />}
        {model    && <InfoTag label={`${model.icon} ${model.label}`} accent />}
      </div>

      {/* ── Issues with removable × chips ───────────────────────────── */}
      {issues.length > 0 && (
        <div style={s.issueSection}>
          <div style={s.issueHeader}>
            <span style={s.issueTitle}>🔩 Issues</span>
            <span style={s.issueCount}>{issues.length} selected</span>
          </div>
          <div style={s.issueTags}>
            {issues.map((issue) => (
              <IssueChip
                key={issue.id}
                issue={issue}
                onRemove={() => onRemoveIssue(issue.id)}
              />
            ))}
          </div>
          {issues.length === 0 && (
            <p style={s.noIssues}>No issues selected — please go back to add at least one.</p>
          )}
        </div>
      )}
    </div>
  );
}

// ── IssueChip — individual removable issue tag ────────────────────────────
function IssueChip({ issue, onRemove }) {
  return (
    <span style={s.chip}>
      <span style={s.chipIcon}>{issue.icon}</span>
      <span style={s.chipLabel}>{issue.label}</span>
      <button
        onClick={onRemove}
        title={`Remove "${issue.label}"`}
        style={s.chipRemove}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "var(--color-error)";
          e.currentTarget.style.color = "#fff";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "var(--color-border)";
          e.currentTarget.style.color = "var(--color-text-muted)";
        }}
      >
        ×
      </button>
    </span>
  );
}

// ── Simple info tag (brand / category / model) ────────────────────────────
function InfoTag({ label, accent }) {
  return (
    <span style={{
      ...s.infoTag,
      background: accent ? colors.accentDim : colors.tag,
      color:      accent ? colors.accent    : colors.textSub,
      borderColor: accent ? "var(--color-accent-dim)" : "var(--color-border)",
    }}>
      {label}
    </span>
  );
}

const s = {
  card: {
    background: colors.card,
    border: `1px solid var(--color-border)`,
    borderRadius: radius.lg,
    padding: "16px 18px",
    display: "flex",
    flexDirection: "column",
    gap: 12,
    transition: "background 0.3s ease",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 8,
  },
  titleRow: {
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
  num: {
    fontFamily: fonts.display,
    fontSize: 11,
    fontWeight: 700,
    color: colors.accent,
    background: colors.accentDim,
    borderRadius: "4px",
    padding: "2px 7px",
  },
  deviceIcon: { fontSize: 20 },
  deviceName: {
    fontFamily: fonts.display,
    fontSize: 15,
    fontWeight: 700,
    color: colors.text,
  },
  removeDeviceBtn: {
    display: "flex",
    alignItems: "center",
    gap: 5,
    background: "rgba(224,48,80,0.08)",
    border: "1px solid rgba(224,48,80,0.2)",
    color: "var(--color-error)",
    borderRadius: "7px",
    padding: "5px 12px",
    fontSize: 11,
    fontWeight: 700,
    cursor: "pointer",
    transition,
  },
  tags: {
    display: "flex",
    flexWrap: "wrap",
    gap: 6,
  },
  infoTag: {
    fontSize: 11,
    fontWeight: 500,
    border: "1px solid",
    borderRadius: "6px",
    padding: "3px 9px",
  },
  issueSection: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
    borderTop: `1px solid var(--color-border)`,
    paddingTop: 10,
  },
  issueHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  issueTitle: {
    fontSize: 11,
    fontWeight: 700,
    color: colors.textMuted,
    letterSpacing: "0.5px",
    textTransform: "uppercase",
  },
  issueCount: {
    fontSize: 10,
    color: colors.accent,
    background: colors.accentDim,
    borderRadius: "4px",
    padding: "2px 7px",
    fontWeight: 700,
  },
  issueTags: {
    display: "flex",
    flexWrap: "wrap",
    gap: 6,
  },
  chip: {
    display: "inline-flex",
    alignItems: "center",
    gap: 5,
    background: colors.tag,
    border: `1px solid var(--color-border)`,
    borderRadius: "7px",
    padding: "4px 4px 4px 9px",
    fontSize: 11,
    color: colors.textSub,
    lineHeight: 1,
  },
  chipIcon: { fontSize: 12 },
  chipLabel: { fontWeight: 500 },
  chipRemove: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: 18,
    height: 18,
    borderRadius: "4px",
    background: "var(--color-border)",
    color: "var(--color-text-muted)",
    border: "none",
    cursor: "pointer",
    fontSize: 14,
    fontWeight: 700,
    lineHeight: 1,
    padding: 0,
    transition,
    flexShrink: 0,
  },
  noIssues: {
    fontSize: 12,
    color: "var(--color-error)",
    fontStyle: "italic",
  },
};
