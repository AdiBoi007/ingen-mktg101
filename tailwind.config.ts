import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1D161D",
        inkSoft: "rgba(29,22,29,0.6)",
        hairline: "rgba(29,22,29,0.15)",
        brand: {
          purple: "#EA7659",
          deep: "#000000",
          lavender: "#FFC97C",
          tint: "#FFF4DD",
          soft: "#FFE2B8",
          bg: "#FCF9F4",
          ink: "#000000",
          muted: "#3A3A3A",
          subtle: "#5A5A5A",
          mute: "#8A8A8A",
          good: "#2F8D6E",
          bad: "#EA7659",
          gold: "#FFC97C",
          azure: "#000000",
          magenta: "#EA7659",
          mid: "#EA7659",
        },
        forge: {
          cream: "#FCF9F4",
          cream2: "#F7F2E8",
          paper: "#FCF9F4",
          ink: "#000000",
          ink2: "#0A0A0A",
          mute: "#5A5A5A",
          line: "#EBE3D2",
          amber: "#FFC97C",
          amber2: "#FFB85C",
          amberSoft: "#FFE7BD",
          mint: "#FFC97C",
          mintSoft: "#FFF1D6",
          indigo: "#EA7659",
          indigo2: "#EA7659",
          indigoSoft: "#FBD8CD",
          peach: "#FFC97C",
          lavender: "#FFE2B8",
          salmon: "#EA7659",
          yellow: "#FFC97C",
          yellowSoft: "#FFF4DD",
          night: "#000000",
          surface: "#0A0A0A",
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
          "radial-gradient(circle at 1px 1px, rgba(255,201,124,0.55) 1px, transparent 0)",
        "halftone-light":
          "radial-gradient(circle at 1px 1px, rgba(234,118,89,0.18) 1px, transparent 0)",
        diag:
          "repeating-linear-gradient(135deg, rgba(0,0,0,0.04) 0 1px, transparent 1px 8px)",
      },
    },
  },
  plugins: [],
};

export default config;
