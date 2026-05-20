// ─── App.jsx ─────────────────────────────────────────────────────────────────
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import RepairWidget from "./components/RepairWidget/RepairWidget.jsx";

export default function App() {
  return (
    <ThemeProvider>
      <RepairWidget />
    </ThemeProvider>
  );
}
