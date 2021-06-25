const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // fill: (theme) => ({
    //   indigo: colors.indigo,
    // }),
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      trueGray: colors.trueGray,
      bluegray: colors.blueGray,
      coolGray: colors.coolGray,
      warmGray: colors.warmGray,
      indigo: colors.indigo,
      cyan: colors.cyan,
      sky: colors.sky,
      red: colors.rose,
      yellow: colors.amber,
      orange: colors.orange,
      blue: colors.blue,
      purple: colors.purple,
      pink: colors.pink,
      green: colors.green,
      teal: colors.teal,
      lightMediumPurple: "#9785f6",
      mediumPurple: "#9280f5",
      lightSteelBlue: "#aea2f7",
      thistle: "#cdc2f4",
      blueViolet: "#5939f8",
      gainsboro: "#d9d7e0",
      oldLace: "#fbf4e5",
      background: "c7cef8",
      closeButton: "#e96a65",
      closeButtonHover: "#cc340c",
      lightSlateGray: "#82879b",
      darkGray: "#9c8fa2",
      rosyBrown: "#c394a2",
      text: "#09151c",
    },
    extend: {
      height: (theme) => ({
        modal: "calc(100vh / 1.05)",
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      }),
      transformOrigin: ["hover", "group-hover", "focus"],
      screens: {
        "3xl": "1600px",
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ["hover", "focus"],
      transitionProperty: ["hover", "focus"],
      scale: ["active", "group-hover"],
      display: ["hover", "focus", "group-hover"],
    },
  },
  plugins: [],
};
