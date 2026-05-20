// ─── QuoteForm/QuoteForm.jsx ──────────────────────────────────────────────────
import { useState } from "react";
import { submitQuote } from "../../api/repairApi.js";
import Section from "../Section/Section.jsx";
import BackButton from "../BackButton/BackButton.jsx";
import DeviceSummaryCard from "../DeviceSummaryCard/DeviceSummaryCard.jsx";
import { colors, radius, fonts, transition } from "../../styles/theme.js";

export default function QuoteForm({ jobs, onAddDevice, onRemoveDevice, onRemoveIssue, onBack, onSuccess }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const valid = form.name.trim() && form.email.trim() && form.phone.trim();

  async function handleSubmit() {
    if (!valid) return;
    setLoading(true);
    setError(null);
    try {
      const result = await submitQuote({ customer: form, devices: jobs });
      onSuccess(result);
    } catch (e) {
      setError("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Section
      title="Review & Get a Quote"
      subtitle="Review your devices and issues below, then fill in your contact details."
    >
      <div style={s.deviceSection}>
        <div style={s.sectionLabel}>
          <span>📋 Repair Jobs</span>
          <span style={s.count}>{jobs.length} device{jobs.length !== 1 ? "s" : ""}</span>
        </div>

        <div style={s.jobList}>
          {jobs.map((job, i) => (
            <DeviceSummaryCard
              key={i}
              job={job}
              index={i}
              onRemove={() => onRemoveDevice(i)}
              onRemoveIssue={(issueId) => onRemoveIssue(i, issueId)}
            />
          ))}
        </div>

        <button
          style={s.addBtn}
          onClick={onAddDevice}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "var(--color-accent)";
            e.currentTarget.style.color = "var(--color-accent)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "var(--color-border)";
            e.currentTarget.style.color = "var(--color-text-sub)";
          }}
        >
          <span style={s.addIcon}>＋</span>
          Add Another Device
        </button>
      </div>

      <div style={s.formSection}>
        <div style={s.sectionLabel}>
          <span>👤 Your Details</span>
        </div>

        <div style={s.formGrid}>
          {[
            { key: "name",  label: "Full Name",     type: "text",  placeholder: "John Doe",         required: true },
            { key: "email", label: "Email Address", type: "email", placeholder: "john@example.com", required: true },
            { key: "phone", label: "Phone Number",  type: "tel",   placeholder: "+1 555 000 0000",  required: true },
          ].map(({ key, label, type, placeholder, required }) => (
            <div key={key} style={s.field}>
              <label style={s.fieldLabel}>
                {label}
                {required && <span style={s.req}>*</span>}
              </label>
              <input
                type={type}
                placeholder={placeholder}
                value={form[key]}
                onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                style={s.input}
                onFocus={(e) => {
                  e.target.style.borderColor = "var(--color-accent)";
                  e.target.style.boxShadow = "0 0 0 3px var(--color-accent-dim)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "var(--color-input-border)";
                  e.target.style.boxShadow = "none";
                }}
              />
            </div>
          ))}

          <div style={{ ...s.field, gridColumn: "1 / -1" }}>
            <label style={s.fieldLabel}>Additional Notes</label>
            <textarea
              placeholder="Describe any extra context about the repairs…"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={4}
              style={{ ...s.input, resize: "vertical" }}
              onFocus={(e) => {
                e.target.style.borderColor = "var(--color-accent)";
                e.target.style.boxShadow = "0 0 0 3px var(--color-accent-dim)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "var(--color-input-border)";
                e.target.style.boxShadow = "none";
              }}
            />
          </div>
        </div>
      </div>

      {error && <p style={{ color: colors.error, marginTop: 12 }}>{error}</p>}

      <div style={s.actions}>
        <BackButton onClick={onBack} />
        <button
          style={{
            ...s.submitBtn,
            opacity: (!valid || loading) ? 0.4 : 1,
            cursor: (!valid || loading) ? "not-allowed" : "pointer",
          }}
          disabled={!valid || loading}
          onClick={handleSubmit}
        >
          {loading
            ? "Submitting…"
            : `Submit ${jobs.length > 1 ? `${jobs.length} Repairs` : "Repair Request"} ✓`}
        </button>
      </div>
    </Section>
  );
}

const s = {
  deviceSection: { marginBottom: 32 },
  formSection: { marginBottom: 8 },
  sectionLabel: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: 12,
    fontWeight: 700,
    color: colors.textMuted,
    letterSpacing: "0.6px",
    textTransform: "uppercase",
    marginBottom: 14,
    paddingBottom: 10,
    borderBottom: "1px solid var(--color-border)",
  },
  count: {
    background: colors.accentDim,
    color: colors.accent,
    borderRadius: "6px",
    padding: "3px 9px",
    fontSize: 11,
  },
  jobList: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    marginBottom: 14,
  },
  addBtn: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    background: colors.card,
    border: "1.5px dashed var(--color-border)",
    borderRadius: radius.lg,
    padding: "14px 20px",
    color: colors.textSub,
    fontSize: 13,
    fontWeight: 600,
    cursor: "pointer",
    width: "100%",
    justifyContent: "center",
    transition,
  },
  addIcon: {
    fontSize: 18,
    fontWeight: 300,
    color: colors.accent,
  },
  formGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
    gap: 16,
  },
  field: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
  },
  fieldLabel: {
    fontSize: 11,
    fontWeight: 700,
    color: colors.textMuted,
    letterSpacing: "0.4px",
    textTransform: "uppercase",
  },
  req: { color: colors.error, marginLeft: 3 },
  input: {
    background: "var(--color-input-bg)",
    border: "1px solid var(--color-input-border)",
    borderRadius: radius.md,
    padding: "12px 14px",
    color: colors.text,
    fontSize: 14,
    outline: "none",
    transition,
    fontFamily: fonts.body,
    width: "100%",
  },
  actions: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 12,
    marginTop: 28,
    paddingBottom: 48,
  },
  submitBtn: {
    background: "linear-gradient(135deg, var(--color-accent), var(--color-border-active))",
    color: "var(--step-done-text, #000)",
    border: "none",
    borderRadius: radius.md,
    padding: "13px 32px",
    fontSize: 14,
    fontWeight: 800,
    fontFamily: fonts.display,
    transition,
    letterSpacing: "0.2px",
  },
};
