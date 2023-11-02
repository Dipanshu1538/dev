/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        white: "#fff",
        forestgreen: "#49b649",
        darkgray: "#9d9d9d",
      },
      spacing: {},
      fontFamily: {
        "nunito-sans": "'Nunito Sans'",
        "playfair-display": "'Playfair Display'",
      },
      borderRadius: {
        "3xs": "10px",
        "31xl": "50px",
      },
    },
    fontSize: {
      "3xl": "22px",
      "5xl": "24px",
      lg: "18px",
      "9xl": "28px",
      "35xl": "54px",
      "17xl": "36px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
