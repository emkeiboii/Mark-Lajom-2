/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#ff2e00",
      secondary: "#ffd43f",
      dark: "#565254",
      white: "#fefff5",
      grey: "#d6d6d6",
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
