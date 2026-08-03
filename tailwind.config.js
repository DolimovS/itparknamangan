/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0EA672",
          dark: "#0B7D57",
          light: "#3DDBA6",
          50: "#EAFBF4",
        },
        accent: {
          DEFAULT: "#22D3EE",
          soft: "#E0FBFF",
          dark: "#0E93AC",
        },
        spark: "#FFC94D",
        ink: "#0B1F17",
        muted: "#5C6B64",
        fog: "#F4F8F6",
        line: "#E3E9E6",
        paper: "#F6FBF8",
        void: {
          DEFAULT: "#071411",
          soft: "#0C1F1A",
          surface: "#102621",
          line: "#1B3A32",
        },
      },
      fontFamily: {
        display: ["Sora", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "growth-gradient": "linear-gradient(135deg, #0EA672 0%, #22D3EE 100%)",
        "growth-gradient-soft":
          "linear-gradient(135deg, rgba(14,166,114,0.14) 0%, rgba(34,211,238,0.14) 100%)",
      },
      boxShadow: {
        card: "0 1px 2px rgba(11,31,23,0.04), 0 8px 24px -8px rgba(11,31,23,0.10)",
        cardHover:
          "0 4px 10px rgba(11,31,23,0.06), 0 20px 40px -12px rgba(14,166,114,0.28)",
        glow: "0 0 0 1px rgba(14,166,114,0.25), 0 8px 30px -6px rgba(14,166,114,0.35)",
        glowDark:
          "0 0 0 1px rgba(61,219,166,0.18), 0 8px 34px -6px rgba(34,211,238,0.22)",
      },
      keyframes: {
        logoPop: {
          "0%": { opacity: 0, transform: "scale(.75) translateY(6px)" },
          "100%": { opacity: 1, transform: "scale(1) translateY(0)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: 1, transform: "scale(1)" },
          "50%": { opacity: 0.55, transform: "scale(0.92)" },
        },
        slideBar: {
          "0%": { transform: "translateX(-120%)" },
          "50%": { transform: "translateX(60%)" },
          "100%": { transform: "translateX(220%)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        dashMove: {
          to: { strokeDashoffset: -24 },
        },
        fadeIn: {
          from: { opacity: 0, transform: "translateY(8px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        logoPop: "logoPop .9s cubic-bezier(.2,.9,.25,1.2) both",
        pulseSoft: "pulseSoft 1.8s ease-in-out infinite",
        slideBar: "slideBar 1.1s ease-in-out infinite",
        floatSlow: "floatSlow 6s ease-in-out infinite",
        dash: "dashMove 1.4s linear infinite",
        fadeIn: "fadeIn .5s ease both",
      },
    },
  },
  plugins: [],
};
