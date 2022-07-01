/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    fontFamily: {
      sans: ["Epilogue", "sans"],
    },
    extend: {
      colors: {
        almostWhite: "hsl(0, 0%, 98%)",
        mediumGray: "hsl(0, 0%, 41%)",
        almostBlack: "hsl(0, 0%, 8%)",
      },
      fontSize: {
        base: "1.125rem",
      },
      backgroundImage: {
        "arrow-down": "url('/images/icon-arrow-down.svg')",
        "arrow-up": "url('/images/icon-arrow-up.svg')",
      },
    },
  },
  plugins: [],
};
