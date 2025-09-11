export const theme = {
  colors: {
    bg: "#f8fafc",
    surface: "#ffffff",
    text: "#0f172a",
    subtext: "#475569",
    border: "#e2e8f0",
    primary: "#4f46e5",
    primaryText: "#ffffff",
    accent: "#0ea5e9",
    muted: "#94a3b8"
  },
  radius: { md: "12px", lg: "16px", xl: "24px" },
  shadow: {
    sm: "0 2px 8px rgba(2,6,23,0.06)",
    md: "0 8px 24px rgba(2,6,23,0.08)"
  },
  spacing: n => `${n * 4}px`,

  // breakpoints (mobile-first)
  bp: { xs: 360, sm: 480, md: 768, lg: 1024, xl: 1280 }
};
