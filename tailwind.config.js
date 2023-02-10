module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#f4f6fa',
          100: '#e9edf4',
          200: '#c8d3e4',
          300: '#a7b8d3',
          400: '#6582b2',
          500: '#234d91',
          600: '#204583',
          700: '#1a3a6d',
          800: '#152e57',
          900: '#112647'
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        workSans: ['Work Sans', 'sans-serif']
      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ]
}
