/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dmsan: ["DM Sans", "sans-serif"],
      },
      colors: {
        black: "#000000",
        white: "#EBEBEB",
        blue: "#53B7FF",
      },
    },
  },
  plugins: [],
};
