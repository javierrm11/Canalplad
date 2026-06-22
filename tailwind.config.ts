import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 2026 redesign (Inicio.dc.html / Nav.dc.html / Footer.dc.html)
        ink: "#0e0e0e",
        "ink-soft": "#141414",
        "ink-card": "#181818",
        "ink-muted": "#33332f",
        "ink-faint": "#5c5c58",
        "ink-line": "#e7e7e3",
        "surface-soft": "#f5f6f4",
        "surface-pill": "#f0f1ee",
        brand: "#15a53c",
        "brand-hover": "#18bf45",
        "brand-bright": "#22c24a",
        "brand-red": "#e2231a",
        whatsapp: "#25d366",
        star: "#f5a623",
      },
      fontFamily: {
        anton: ["var(--font-anton)", "sans-serif"],
        barlow: ["var(--font-barlow)", "sans-serif"],
        "barlow-condensed": ["var(--font-barlow-condensed)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
