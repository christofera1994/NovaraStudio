import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        accent: "var(--color-accent)",
        background: "var(--color-background)",
        "text-dark": "var(--color-text-dark)",
        ghost: "var(--color-ghost)",
        "deep-void": "var(--color-deep-void)",
        plasma: "var(--color-plasma)",
        graphite: "var(--color-graphite)",
      },
      fontFamily: {
        sans: "var(--font-sora), system-ui, sans-serif",
        drama: "var(--font-instrument-serif), Georgia, serif",
        mono: "var(--font-fira-code), monospace",
      },
      borderRadius: {
        "2xl": "2rem",
        "3xl": "3rem",
        "4xl": "4rem",
      },
      animation: {
        "pulse-dot": "pulse-dot 1.5s ease-in-out infinite",
      },
      keyframes: {
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.6", transform: "scale(1.1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
