/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      dark: "#565254",
      white: "#fefff5",
      grey: "#d6d6d6",
      darkRed: "#9D0620", // Add darkRed color
      brightRed: "#FA2223", // Add brightRed color
      darkGreen: "#152514", // Add darkGreen color
      brightGreen: "#029220", // Add brightGreen color
      darkBlue: "#153149", // Add darkBlue color
      brightBlue: "#00A3E0", // Add brightBlue color
      yellow: "#F8CD02", // Add yellow color
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
