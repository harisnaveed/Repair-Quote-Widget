// ─── CategorySelector/CategorySelector.jsx ───────────────────────────────────
import { useState, useEffect } from "react";
import { fetchCategories } from "../../api/repairApi.js";
import Card from "../Card/Card.jsx";
import Section from "../Section/Section.jsx";
import BackButton from "../BackButton/BackButton.jsx";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner.jsx";
import { colors } from "../../styles/theme.js";

export default function CategorySelector({ device, brand, selected, onSelect, onBack }) {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  useEffect(() => {
    if (!device || !brand) return;
    setLoading(true);
    setError(null);
    fetchCategories(device.id, brand.id)
      .then(setCats)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [device, brand]);

  return (
    <Section
      title={`${brand?.label ?? ""} Series`}
      subtitle={`Choose the product series for your ${brand?.label} ${device?.label}.`}
    >
      {loading && <LoadingSpinner message="Fetching series…" />}
      {error   && <p style={{ color: colors.error }}>{error}</p>}
      {!loading && !error && cats.length === 0 && (
        <p style={{ color: colors.textMuted, padding: "40px 0" }}>
          No series found — please go back.
        </p>
      )}
      {!loading && !error && cats.length > 0 && (
        <div style={grid}>
          {cats.map((c) => (
            <Card
              key={c.id}
              icon={c.icon}
              label={c.label}
              desc={c.desc}
              selected={selected?.id === c.id}
              onClick={() => onSelect(c)}
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
  gridTemplateColumns: "repeat(auto-fill, minmax(148px, 1fr))",
  gap: 14,
};
const actions = { marginTop: 28 };
