// ─── ModelSelector/ModelSelector.jsx ─────────────────────────────────────────
import { useState, useEffect } from "react";
import { fetchModels } from "../../api/repairApi.js";
import Card from "../Card/Card.jsx";
import Section from "../Section/Section.jsx";
import BackButton from "../BackButton/BackButton.jsx";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner.jsx";
import { colors } from "../../styles/theme.js";

export default function ModelSelector({ device, brand, category, selected, onSelect, onBack }) {
  const [modelList, setModelList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  useEffect(() => {
    if (!device || !brand) return;
    setLoading(true);
    setError(null);
    fetchModels(device.id, brand.id, category?.id ?? null)
      .then(setModelList)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [device, brand, category]);

  const subtitle = [brand?.label, category?.label, device?.label]
    .filter(Boolean)
    .join(" · ");

  return (
    <Section
      title="Select Your Model"
      subtitle={`Showing models for: ${subtitle}`}
    >
      {loading && <LoadingSpinner message="Fetching models…" />}
      {error   && <p style={{ color: colors.error }}>{error}</p>}
      {!loading && !error && modelList.length === 0 && (
        <p style={{ color: colors.textMuted, padding: "40px 0" }}>
          No models found. Please go back and verify your selection.
        </p>
      )}
      {!loading && !error && modelList.length > 0 && (
        <div style={grid}>
          {modelList.map((m) => (
            <Card
              key={m.id}
              icon={m.icon}
              label={m.label}
              desc={m.desc}
              selected={selected?.id === m.id}
              onClick={() => onSelect(m)}
            />
          ))}
        </div>
      )}
      <div style={actions}>
        <BackButton onClick={onBack} />
      </div>
    </Section>
  );
}

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
  gap: 14,
};
const actions = { marginTop: 28 };
