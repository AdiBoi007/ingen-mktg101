import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: "#6B2F8E",
          deep: "#2A232A",
          lavender: "#B054E7",
          tint: "#EEE8FD",
          soft: "#D5C4E0",
          bg: "#F8F6F8",
          ink: "#1D161D",
          muted: "#564E56",
          subtle: "#786C78",
          mute: "#A89EA8",
          good: "#2F8D6E",
          bad: "#E05254",
          gold: "#DDC73C",
          azure: "#186AD8",
          magenta: "#DA60D4",
          mid: "#9B51E0",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui"],
        sans: ["var(--font-body)", "Helvetica", "Arial", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.03em",
      },
      animation: {
        marquee: "marquee 40s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      backgroundImage: {
        halftone:
          "radial-gradient(circle at 1px 1px, rgba(176,84,231,0.55) 1px, transparent 0)",
        "halftone-light":
          "radial-gradient(circle at 1px 1px, rgba(107,47,142,0.18) 1px, transparent 0)",
        diag:
          "repeating-linear-gradient(135deg, rgba(0,0,0,0.04) 0 1px, transparent 1px 8px)",
      },
    },
  },
  plugins: [],
};

export default config;
