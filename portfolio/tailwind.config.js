/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      navy: "#1A1D27",
      blue: "#53C7DA",
      lavender: "#AF98E6",
      white: "#DFDFDF",
      grey: "#99A6A8",
    },
    extend: {
      fontFamily: {
        body: ["Inter"],
      },
    },
  },
  plugins: [],
};
