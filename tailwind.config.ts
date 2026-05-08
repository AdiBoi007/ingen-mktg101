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
        forge: {
          cream: "#F5EFE6",
          cream2: "#F2EBDD",
          paper: "#FBF7EF",
          ink: "#0E0E10",
          ink2: "#1A1A1F",
          mute: "#6E6960",
          line: "#E5DDCC",
          amber: "#F5A623",
          amber2: "#FFB347",
          amberSoft: "#FCE4B5",
          mint: "#7DD3C0",
          mintSoft: "#D8F1E9",
          indigo: "#6366F1",
          indigo2: "#7C5CFC",
          indigoSoft: "#E0E0FB",
          peach: "#F5C6A5",
          lavender: "#D6C9F4",
          salmon: "#F0A39A",
          yellow: "#F4E2A1",
          yellowSoft: "#FBF1D1",
          night: "#0B0B0F",
          surface: "#16161C",
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
