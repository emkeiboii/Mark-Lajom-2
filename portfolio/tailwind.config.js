/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      navy: "#0B1325",
      blue: "#5EDAE9",
      lavender: "#AF98E6",
      white: "#DFDFDF",
      grey: "#99A6A8",
    },
    extend: {
      fontFamily: {
        body: ["Inter"],
      },
      gridTemplateColumns: {
        2: "repeat(2, minmax(140px, 200px))",
      },
      margin: {
        "-half-screen": "45vh",
      },
    },
  },
  plugins: [],
};
