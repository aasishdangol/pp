import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FAF8F3",
        ink: {
          DEFAULT: "#1B2A4A",
          900: "#0E1830",
          800: "#16223D",
          700: "#1B2A4A",
        },
        amber: {
          DEFAULT: "#E8A33D",
          light: "#F2C374",
          dark: "#C2811F",
        },
        charcoal: "#21242B",
        slate: {
          muted: "#6E7686",
        },
        line: "#D9D3C3",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      backgroundImage: {
        "grid-light":
          "linear-gradient(to right, rgba(27,42,74,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(27,42,74,0.06) 1px, transparent 1px)",
        "grid-dark":
          "linear-gradient(to right, rgba(232,163,61,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(232,163,61,0.08) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "28px 28px",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        fadeUp: "fadeUp 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
