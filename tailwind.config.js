const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      green: colors.green,
      red: colors.red,
      blue: colors.blue,
      orange: colors.orange,
      pink: colors.pink,
      purple: colors.purple,
      cyan: colors.cyan,
      themeYellow: "#ffa760",
      themePink: "#ff5d83",
    },
    extend: {
      fontFamily: {
        title: ["Staatliches", ...defaultTheme.fontFamily.sans],
        body: ["Jost", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
