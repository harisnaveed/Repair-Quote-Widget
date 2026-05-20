// ─── DeviceSelector/DeviceSelector.jsx ───────────────────────────────────────
import { useState, useEffect } from "react";
import { fetchDevices } from "../../api/repairApi.js";
import Card from "../Card/Card.jsx";
import Section from "../Section/Section.jsx";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner.jsx";
import { colors } from "../../styles/theme.js";

export default function DeviceSelector({ selected, onSelect }) {
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchDevices()
      .then(setDevices)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Section
      title="What device needs repair?"
      subtitle="Select the type of device you want to repair."
    >
      {loading && <LoadingSpinner message="Fetching devices…" />}
      {error   && <p style={{ color: colors.error }}>{error}</p>}
      {!loading && !error && (
        <div style={grid}>
          {devices.map((d) => (
            <Card
              key={d.id}
              icon={d.icon}
              label={d.label}
              desc={d.desc}
              selected={selected?.id === d.id}
              onClick={() => onSelect(d)}
            />
          ))}
        </div>
      )}
    </Section>
  );
}

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(148px, 1fr))",
  gap: 14,
};
