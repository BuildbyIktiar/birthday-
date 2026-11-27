/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { script: ['"Great Vibes"', "cursive"], sans: ["Poppins", "system-ui", "sans-serif"], hand: ['"Caveat"', "cursive"] },
      colors: { night: "#0b0820", plum: "#2a1255", rose: "#ff9ecb", gold: "#ffd98a" },
    },
  },
  plugins: [],
};
