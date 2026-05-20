// ─── BrandSelector/BrandSelector.jsx ─────────────────────────────────────────
import { useState, useEffect } from "react";
import { fetchBrands } from "../../api/repairApi.js";
import Card from "../Card/Card.jsx";
import Section from "../Section/Section.jsx";
import BackButton from "../BackButton/BackButton.jsx";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner.jsx";
import { colors } from "../../styles/theme.js";

export default function BrandSelector({ device, selected, onSelect, onBack }) {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  useEffect(() => {
    if (!device) return;
    setLoading(true);
    setError(null);
    fetchBrands(device.id)
      .then(setBrands)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [device]);

  return (
    <Section
      title="Select Brand"
      subtitle={`Choose the brand of your ${device?.label ?? "device"}.`}
    >
      {loading && <LoadingSpinner message="Fetching brands…" />}
      {error   && <p style={{ color: colors.error }}>{error}</p>}
      {!loading && !error && (
        <div style={grid}>
          {brands.map((b) => (
            <Card
              key={b.id}
              icon={b.icon}
              label={b.label}
              desc={b.hasCategories ? "Multiple series" : "Direct models"}
              selected={selected?.id === b.id}
              onClick={() => onSelect(b)}
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
