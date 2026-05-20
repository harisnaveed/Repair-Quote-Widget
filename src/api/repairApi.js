// ─── repairApi.js ────────────────────────────────────────────────────────────
// API service layer. Wraps data lookups in realistic async calls.
// In production: replace fetch() calls to point at your real backend endpoints.
// e.g. return fetch(`/api/brands?device=${deviceId}`).then(r => r.json())

import {
  devices,
  brands,
  categories,
  models,
  issues,
} from "../data/repairData.js";

/** Simulate network latency */
const delay = (ms = 350) =>
  new Promise((resolve) => setTimeout(resolve, ms));

// ── Devices ──────────────────────────────────────────────────────────────────
export async function fetchDevices() {
  await delay();
  return [...devices];
}

// ── Brands ───────────────────────────────────────────────────────────────────
export async function fetchBrands(deviceId) {
  await delay();
  const result = brands[deviceId];
  if (!result) throw new Error(`No brands found for device: ${deviceId}`);
  return [...result];
}

// ── Categories ───────────────────────────────────────────────────────────────
export async function fetchCategories(deviceId, brandId) {
  await delay();
  const key = `${deviceId}-${brandId}`;
  return [...(categories[key] ?? [])];
}

// ── Models ───────────────────────────────────────────────────────────────────
export async function fetchModels(deviceId, brandId, categoryId = null) {
  await delay();
  // Build lookup key: with category if present, without if brand has no categories
  const key = categoryId
    ? `${deviceId}-${brandId}-${categoryId}`
    : `${deviceId}-${brandId}`;
  return [...(models[key] ?? [])];
}

// ── Issues ───────────────────────────────────────────────────────────────────
export async function fetchIssues() {
  await delay(200);
  return [...issues];
}

// ── Submit Quote ─────────────────────────────────────────────────────────────
/**
 * @param {object} payload
 * @param {object} payload.customer  - { name, email, phone, message }
 * @param {Array}  payload.devices   - array of repair jobs
 */
export async function submitQuote(payload) {
  await delay(900); // simulate server processing
  // In production: return fetch('/api/quotes', { method:'POST', body: JSON.stringify(payload) })
  console.log("Quote submitted:", payload);
  return { success: true, referenceId: `RQ-${Date.now()}` };
}
