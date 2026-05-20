# 🔧 Repair Widget

A multi-step device repair booking widget built with React + Vite.

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server (opens http://localhost:3000)
npm run dev

# 3. Build for production
npm run build
```

## Project Structure

```
repair-widget/
├── index.html                          # HTML entry point
├── vite.config.js                      # Vite config
├── package.json
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx                        # React entry point
    ├── App.jsx                         # Root component
    │
    ├── api/
    │   └── repairApi.js                # ← API layer (swap for real endpoints here)
    │
    ├── data/
    │   └── repairData.js               # All devices/brands/models data
    │
    ├── hooks/
    │   └── useRepairFlow.js            # Custom hook: single-device flow state
    │
    ├── styles/
    │   ├── theme.js                    # Design tokens (colors, fonts, radius…)
    │   └── global.css                  # Global resets + animations
    │
    └── components/
        ├── Header/                     # Top sticky header
        ├── StepIndicator/              # Progress bar (steps 1–6)
        ├── Card/                       # Reusable icon+label card
        ├── BackButton/                 # ← Back navigation button
        ├── Section/                    # Screen wrapper with title/subtitle
        ├── LoadingSpinner/             # API loading state
        ├── DeviceSelector/             # Step 1 — pick device type
        ├── BrandSelector/              # Step 2 — pick brand
        ├── CategorySelector/           # Step 3 — pick series (skipped for some brands)
        ├── ModelSelector/              # Step 4 — pick exact model
        ├── IssueSelector/              # Step 5 — multi-select issues
        ├── DeviceSummaryCard/          # Summary card shown in QuoteForm
        ├── QuoteForm/                  # Step 6 — contact form + device list
        ├── SuccessScreen/              # Post-submit confirmation
        └── RepairWidget/               # ← Main orchestrator
```

## Features

- **6-step guided repair flow**: Device → Brand → Category → Model → Issues → Quote
- **Smart category skip**: Brands like Apple & Google skip the series step automatically
- **Multi-select issues**: Customer can pick multiple problems per device
- **Multi-device support**: After adding one device, add another from scratch; all appear on quote screen
- **API layer**: All data fetches go through `src/api/repairApi.js` — drop in real endpoints easily
- **Loading states**: Every screen shows a spinner while data loads
- **Progress indicator**: Top step bar highlights current step, collapses when category is skipped

## Connecting to a Real Backend

Open `src/api/repairApi.js` and replace each function body, e.g.:

```js
export async function fetchBrands(deviceId) {
  const res = await fetch(`/api/brands?device=${deviceId}`);
  if (!res.ok) throw new Error("Failed to fetch brands");
  return res.json();
}
```

## Tech Stack

- React 18
- Vite 5
- Pure inline styles + CSS variables (no CSS framework needed)
- Google Fonts: Syne (display) + DM Sans (body)
