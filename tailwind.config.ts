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
        ink: "#16181a",
        "ink-2": "#202326",
        "ink-line": "#2c3033",
        body: "#3b3f42",
        muted: "#5b6064",
        line: "#e6e8e5",
        soft: "#f6f7f5",
        brand: {
          DEFAULT: "#0f7f2e",
          dark: "#0a5f22",
          tint: "#e8f5ec",
          line: "#cfe9d6",
          light: "#5fdc84",
          logo: "#15a53c",
        },
        accent: {
          DEFAULT: "#d42019",
          dark: "#b81c16",
          tint: "#fde8e7",
          light: "#ff6b63",
        },
        star: {
          DEFAULT: "#b07400",
          light: "#f5b83d",
        },
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        site: "1240px",
      },
      boxShadow: {
        card: "0 24px 50px rgba(22, 24, 26, 0.12)",
        photo: "0 24px 56px rgba(22, 24, 26, 0.14)",
        float: "0 18px 40px rgba(22, 24, 26, 0.16)",
      },
    },
  },
  plugins: [],
};
export default config;
