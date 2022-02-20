const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat"],
      },
    },
    screens: {
      xs: "465px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
