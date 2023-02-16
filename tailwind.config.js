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
          900: '#112647',
          lighter: '#f3f7f9',
          light: '#addcec',
          medium: '#14216c',
          dark: '#101a56'
        },
        orange: {
          medium: '#e7755f'
        },
        grey: {
          medium: '#636e8e'
        }
      },
      fontFamily: {
        chap: ['Chap', 'sans-serif'],
        graphik: ['Graphik', 'sans-serif']
      }
      // fontSize: {
      //   'xs-responsive-title': 'calc(20px+0.75vw)',
      //   'sm-responsive-title': 'calc(22px+3vw)',
      //   'md-responsive-title': 'calc(24px+4vw)',
      //   'lg-responsive-title': 'calc(28px+4vw)',
      //   'xl-responsive-title': 'calc(32px+4vw)'
      // }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ]
}
