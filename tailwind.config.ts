import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#F7F2EA",
          50: "#FBF8F2",
          100: "#F7F2EA",
          200: "#EFE7D8",
          300: "#E4D8C2",
        },
        ink: {
          DEFAULT: "#1A1814",
          muted: "#4A453E",
          soft: "#6B655C",
          faint: "#9B948A",
        },
        accent: {
          DEFAULT: "#B5532A",
          hover: "#9D4622",
          soft: "#E6C7B5",
          tint: "#F2DDD0",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        jetbrains: ["var(--font-jetbrains)", "monospace"],
        poppins: ["var(--font-poppins)", "system-ui", "sans-serif"],
        roboto: ["var(--font-roboto)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        "tightest": "-0.04em",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "grain": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-5%, -10%)" },
          "20%": { transform: "translate(-15%, 5%)" },
          "30%": { transform: "translate(7%, -25%)" },
          "40%": { transform: "translate(-5%, 25%)" },
          "50%": { transform: "translate(-15%, 10%)" },
          "60%": { transform: "translate(15%, 0%)" },
          "70%": { transform: "translate(0%, 15%)" },
          "80%": { transform: "translate(3%, 35%)" },
          "90%": { transform: "translate(-10%, 10%)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.8s ease-out forwards",
        "grain": "grain 8s steps(10) infinite",
      },
      boxShadow: {
        soft: "0 10px 40px -15px rgba(26, 24, 20, 0.15)",
        card: "0 20px 60px -25px rgba(26, 24, 20, 0.25)",
        lift: "0 30px 80px -30px rgba(26, 24, 20, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
