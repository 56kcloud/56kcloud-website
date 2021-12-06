module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          50: "#EAF3FA",
          100: "#D6E7F5",
          200: "#ADCEEB",
          300: "#84B6E1",
          400: "#5B9DD7",
          500: "#3285CD",
          600: "#286AA4",
          700: "#1E507B",
          800: "#143552",
          900: "#0A1B29",
        },
      },
    },
  },
  variants: {},
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
