// ─── useRepairFlow.js ─────────────────────────────────────────────────────────
// Manages all state for one repair-flow instance (single device journey).
// RepairWidget renders one of these per "Add another device" session.

import { useState, useCallback } from "react";

export const STEPS = {
  DEVICE:   1,
  BRAND:    2,
  CATEGORY: 3,
  MODEL:    4,
  ISSUES:   5,
  QUOTE:    6,
};

export const STEP_LABELS = ["Device", "Brand", "Category", "Model", "Issues", "Quote"];

/** Returns a fresh empty flow state */
export function freshFlow() {
  return {
    step:     STEPS.DEVICE,
    device:   null,   // { id, label, icon }
    brand:    null,   // { id, label, icon, hasCategories }
    category: null,   // { id, label, icon }
    model:    null,   // { id, label, icon }
    issues:   [],     // [{ id, label, icon }]
  };
}

export function useRepairFlow() {
  const [flow, setFlow] = useState(freshFlow());

  // ── Selectors ──────────────────────────────────────────────────────────────
  const selectDevice = useCallback((device) => {
    setFlow({
      step: STEPS.BRAND,
      device,
      brand: null, category: null, model: null, issues: [],
    });
  }, []);

  const selectBrand = useCallback((brand) => {
    setFlow((prev) => ({
      ...prev,
      step: brand.hasCategories ? STEPS.CATEGORY : STEPS.MODEL,
      brand,
      category: null, model: null, issues: [],
    }));
  }, []);

  const selectCategory = useCallback((category) => {
    setFlow((prev) => ({
      ...prev,
      step: STEPS.MODEL,
      category,
      model: null, issues: [],
    }));
  }, []);

  const selectModel = useCallback((model) => {
    setFlow((prev) => ({
      ...prev,
      step: STEPS.ISSUES,
      model,
      issues: [],
    }));
  }, []);

  const toggleIssue = useCallback((issue) => {
    setFlow((prev) => {
      const already = prev.issues.find((i) => i.id === issue.id);
      return {
        ...prev,
        issues: already
          ? prev.issues.filter((i) => i.id !== issue.id)
          : [...prev.issues, issue],
      };
    });
  }, []);

  const goToQuote = useCallback(() => {
    setFlow((prev) => ({ ...prev, step: STEPS.QUOTE }));
  }, []);

  // ── Navigation ─────────────────────────────────────────────────────────────
  const goBack = useCallback(() => {
    setFlow((prev) => {
      const { step, brand } = prev;
      if (step === STEPS.BRAND)    return { ...prev, step: STEPS.DEVICE,   device: null };
      if (step === STEPS.CATEGORY) return { ...prev, step: STEPS.BRAND,    brand: null, category: null };
      if (step === STEPS.MODEL) {
        if (brand?.hasCategories)  return { ...prev, step: STEPS.CATEGORY, category: null };
        return                            { ...prev, step: STEPS.BRAND,    brand: null };
      }
      if (step === STEPS.ISSUES)   return { ...prev, step: STEPS.MODEL,    model: null };
      if (step === STEPS.QUOTE)    return { ...prev, step: STEPS.ISSUES };
      return prev;
    });
  }, []);

  // ── Visual step helpers ────────────────────────────────────────────────────
  // When brand has no categories we collapse the step bar to 5 steps
  const skipCategory = flow.brand ? !flow.brand.hasCategories : false;
  const visibleLabels = skipCategory
    ? ["Device", "Brand", "Model", "Issues", "Quote"]
    : STEP_LABELS;

  const logicalToVisual = (logical) => {
    if (!skipCategory) return logical;
    // DEVICE=1→1, BRAND=2→2, MODEL=4→3, ISSUES=5→4, QUOTE=6→5
    const map = { 1: 1, 2: 2, 3: null, 4: 3, 5: 4, 6: 5 };
    return map[logical] ?? null;
  };

  const visualStep = logicalToVisual(flow.step);

  return {
    flow,
    visibleLabels,
    visualStep,
    skipCategory,
    selectDevice,
    selectBrand,
    selectCategory,
    selectModel,
    toggleIssue,
    goToQuote,
    goBack,
    reset: () => setFlow(freshFlow()),
  };
}
