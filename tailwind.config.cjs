/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    colors: {
      black: "#000",
      white: "#fff",
      transparent: "transparent",

      gray: {
        900: "#121214",
        700: "#202024",
        500: "#7c7c8a",
        400: "#c1c1cc",
        200: "#e1e1e6",
      },

      cyan: {
        900: "#81d8f7",
        500: "#9be1fb",
      },
    },
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      "2xl": 32,
    },
    extend: {
      fontFamily: {
        sans: "Inter , sans-serif",
      },
    },
  },
  plugins: [],
};
