/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a",
      },
      fontFamily:{
        roboto:["Roboto", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
