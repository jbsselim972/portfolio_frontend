/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./src/styles/*"],
  theme: {
    extend: {
      fontFamily: {
        base: ["DM Sans", "sans-serif"],
        satoshi: ["Satoshi", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "primary-orange": "#FF5722",
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        black_color: "var(--black-color)",
        lightgray_color: "var(--lightgray-color)",
        gray_color: "var(--gray-color)",
        brown_color: "var(--brown-color)",
        white_color: "var(--white-color)",
      },
      backgroundImage: {
        bgImg: "url('/src/assets/bgbase.png')",
        bgwhite: "url('/src/assets/bgwhite.png')",
        skill_40: "conic-gradient(#ff8c42 40%, #ffcdae 0);",
        skill_60: "conic-gradient(#ff8c42 60%, #ffcdae 0);",
        skill_70: "conic-gradient(#ff8c42 70%, #ffcdae 0);",
        skill_80: "conic-gradient(#ff8c42 80%, #ffcdae 0);",
        skill_90: "conic-gradient(#ff8c42 90%, #ffcdae 0);",
        skill_100: "conic-gradient(#ff8c42 100%, #ffcdae 0);",
      },
    },
  },
  plugins: [],
};
