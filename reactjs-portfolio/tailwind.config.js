/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#565254",
        white: "#FFFFFF",
        grey: "#546A78",
      },
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
