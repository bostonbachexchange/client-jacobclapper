// neutral light theme: tweak colors to taste
export const theme = {
  colors: {
    bg: "#f8fafc",          // page background
    surface: "#ffffff",     // cards / panels
    text: "#0f172a",        // slate-900
    subtext: "#475569",     // slate-600
    border: "#e2e8f0",      // slate-200
    primary: "#4f46e5",     // indigo-600
    primaryText: "#ffffff",
    accent: "#0ea5e9",      // sky-500
    muted: "#94a3b8"        // slate-400
  },
  radius: {
    md: "12px",
    lg: "16px",
    xl: "24px"
  },
  shadow: {
    sm: "0 2px 8px rgba(2,6,23,0.06)",
    md: "0 8px 24px rgba(2,6,23,0.08)"
  },
  spacing: (n) => `${n * 4}px`
};
