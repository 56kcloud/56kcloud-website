module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            blockquote: { color: '000000' },
            code: { color: '000000' },
            h1: { color: '000000' },
            h2: { color: '000000' },
            h3: { color: '000000' },
            h4: { color: '000000' }
          }
        }
      }),
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
      height: {
        128: '32.68rem',
        150: '40rem'
      },
      width: {
        98: '25.68rem'
      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ]
}
