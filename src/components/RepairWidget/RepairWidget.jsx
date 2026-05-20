// ─── RepairWidget/RepairWidget.jsx ───────────────────────────────────────────
// Root widget. Manages a list of completed jobs + one active flow at a time.

import { useState } from "react";
import { useRepairFlow, freshFlow, STEPS } from "../../hooks/useRepairFlow.js";
import Header          from "../Header/Header.jsx";
import StepIndicator   from "../StepIndicator/StepIndicator.jsx";
import DeviceSelector  from "../DeviceSelector/DeviceSelector.jsx";
import BrandSelector   from "../BrandSelector/BrandSelector.jsx";
import CategorySelector from "../CategorySelector/CategorySelector.jsx";
import ModelSelector   from "../ModelSelector/ModelSelector.jsx";
import IssueSelector   from "../IssueSelector/IssueSelector.jsx";
import QuoteForm       from "../QuoteForm/QuoteForm.jsx";
import SuccessScreen   from "../SuccessScreen/SuccessScreen.jsx";
import { colors }      from "../../styles/theme.js";

export default function RepairWidget() {
  // All fully completed repair jobs (device+brand+category+model+issues)
  const [completedJobs, setCompletedJobs] = useState([]);

  // Are we in "quote mode" (user has finished ≥1 device and hit Continue)?
  const [quoteMode, setQuoteMode] = useState(false);

  // Submission result
  const [submitResult, setSubmitResult] = useState(null);

  // The active single-device flow
  const flowHook = useRepairFlow();
  const { flow, visibleLabels, visualStep, skipCategory,
          selectDevice, selectBrand, selectCategory,
          selectModel, toggleIssue, goToQuote, goBack, reset } = flowHook;

  // ── When user finishes issues, push job to completedJobs + enter quote ────
  function handleIssuesContinue() {
    const job = {
      device:   flow.device,
      brand:    flow.brand,
      category: flow.category,
      model:    flow.model,
      issues:   flow.issues,
    };
    setCompletedJobs((prev) => [...prev, job]);
    setQuoteMode(true);
  }

  // ── "Add another device" from QuoteForm ──────────────────────────────────
  function handleAddDevice() {
    setQuoteMode(false);
    reset(); // fresh flow
  }

  // ── Remove a single issue from a completed job ───────────────────────────
  function handleRemoveIssue(jobIndex, issueId) {
    setCompletedJobs((prev) =>
      prev.map((job, i) => {
        if (i !== jobIndex) return job;
        return { ...job, issues: job.issues.filter((issue) => issue.id !== issueId) };
      })
    );
  }

  // ── Remove a completed job from quote list ────────────────────────────────
  function handleRemoveJob(index) {
    setCompletedJobs((prev) => {
      const next = prev.filter((_, i) => i !== index);
      if (next.length === 0) {
        // No jobs left: drop back into flow
        setQuoteMode(false);
        reset();
      }
      return next;
    });
  }

  // ── Go back from QuoteForm ────────────────────────────────────────────────
  function handleQuoteBack() {
    // Re-open the last job's issue step for editing
    const last = completedJobs[completedJobs.length - 1];
    if (last) {
      // Restore flow from last job
      flowHook.flow.device   = last.device;
      flowHook.flow.brand    = last.brand;
      flowHook.flow.category = last.category;
      flowHook.flow.model    = last.model;
      flowHook.flow.issues   = last.issues;
      // Just go back to issues step by adjusting quoteMode
      // Simpler: pop the last job and go back to quote-less mode
      setCompletedJobs((prev) => prev.slice(0, -1));
    }
    setQuoteMode(false);
    goToQuote(); // flow.step = QUOTE which maps to ISSUES-continue state
    // Actually best to just reset flow to issue step:
    reset();
  }

  // ── Total reset ───────────────────────────────────────────────────────────
  function handleReset() {
    setCompletedJobs([]);
    setQuoteMode(false);
    setSubmitResult(null);
    reset();
  }

  // ─────────────────────────────────────────────────────────────────────────
  // RENDER
  // ─────────────────────────────────────────────────────────────────────────

  // Step indicator: show QUOTE as highlighted when in quoteMode
  const displayLabels = quoteMode ? ["Device","Brand","Category","Model","Issues","Quote"] : visibleLabels;
  const displayStep   = quoteMode ? 6 : visualStep;

  return (
    <div style={s.root}>
      <Header />

      {/* ── Success ──────────────────────────────────────────────────────── */}
      {submitResult && (
        <SuccessScreen
          referenceId={submitResult.referenceId}
          jobCount={completedJobs.length}
          onReset={handleReset}
        />
      )}

      {/* ── Active repair flow + quote ──────────────────────────────────── */}
      {!submitResult && (
        <>
          <StepIndicator steps={displayLabels} currentStep={displayStep} />

          {/* ── Quote form (after ≥1 device completed) ─────────────────── */}
          {quoteMode && (
            <QuoteForm
              jobs={completedJobs}
              onAddDevice={handleAddDevice}
              onRemoveDevice={handleRemoveJob}
              onRemoveIssue={handleRemoveIssue}
              onBack={handleQuoteBack}
              onSuccess={(result) => {
                setSubmitResult(result);
              }}
            />
          )}

          {/* ── Single-device flow ─────────────────────────────────────── */}
          {!quoteMode && (
            <>
              {flow.step === STEPS.DEVICE && (
                <DeviceSelector
                  selected={flow.device}
                  onSelect={selectDevice}
                />
              )}

              {flow.step === STEPS.BRAND && (
                <BrandSelector
                  device={flow.device}
                  selected={flow.brand}
                  onSelect={selectBrand}
                  onBack={goBack}
                />
              )}

              {flow.step === STEPS.CATEGORY && !skipCategory && (
                <CategorySelector
                  device={flow.device}
                  brand={flow.brand}
                  selected={flow.category}
                  onSelect={selectCategory}
                  onBack={goBack}
                />
              )}

              {flow.step === STEPS.MODEL && (
                <ModelSelector
                  device={flow.device}
                  brand={flow.brand}
                  category={flow.category}
                  selected={flow.model}
                  onSelect={selectModel}
                  onBack={goBack}
                />
              )}

              {flow.step === STEPS.ISSUES && (
                <IssueSelector
                  model={flow.model}
                  selectedIssues={flow.issues}
                  onToggle={toggleIssue}
                  onContinue={handleIssuesContinue}
                  onBack={goBack}
                />
              )}

              {/* QUOTE step reached within flow = also handled by quoteMode above,
                  this is a safety fallback */}
              {flow.step === STEPS.QUOTE && !quoteMode && (
                <QuoteForm
                  jobs={completedJobs}
                  onAddDevice={handleAddDevice}
                  onRemoveDevice={handleRemoveJob}
                  onRemoveIssue={handleRemoveIssue}
                  onBack={handleQuoteBack}
                  onSuccess={(result) => setSubmitResult(result)}
                />
              )}
            </>
          )}

          {/* ── Multi-device hint banner ──────────────────────────────── */}
          {completedJobs.length > 0 && !quoteMode && (
            <div style={s.banner}>
              <span>
                🛒 <strong style={{ color: colors.accent }}>{completedJobs.length} device{completedJobs.length > 1 ? "s" : ""}</strong> added — complete this one or{" "}
              </span>
              <button style={s.bannerBtn} onClick={() => setQuoteMode(true)}>
                go to quote →
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

const s = {
  root: {
    minHeight: "100vh",
    background: "var(--color-bg)",
    color: "var(--color-text)",
    transition: "background 0.3s ease",
  },
  banner: {
    margin: "24px auto 0",
    maxWidth: 900,
    padding: "0 24px",
    fontSize: 13,
    color: "var(--color-text-sub)",
    display: "flex",
    alignItems: "center",
    gap: 4,
    flexWrap: "wrap",
  },
  bannerBtn: {
    background: "transparent",
    border: "none",
    color: "var(--color-accent)",
    fontWeight: 700,
    fontSize: 13,
    cursor: "pointer",
    padding: 0,
    textDecoration: "underline",
    textUnderlineOffset: "3px",
  },
};
