// ─── contexts/ThemeContext.jsx ────────────────────────────────────────────────
// Provides { isDark, toggleTheme } to every component via useTheme().
// The actual theming works through CSS custom properties on <html data-theme>.

import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext({ isDark: true, toggleTheme: () => {} });

export function ThemeProvider({ children }) {
  // Default: dark. Persist choice to localStorage.
  const [isDark, setIsDark] = useState(() => {
    try {
      const saved = localStorage.getItem("rw-theme");
      return saved ? saved === "dark" : true;
    } catch {
      return true;
    }
  });

  // Sync to <html data-theme="..."> whenever isDark changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
    try { localStorage.setItem("rw-theme", isDark ? "dark" : "light"); } catch {}
  }, [isDark]);

  const toggleTheme = () => setIsDark((d) => !d);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

/** Use anywhere: const { isDark, toggleTheme } = useTheme() */
export function useTheme() {
  return useContext(ThemeContext);
}
