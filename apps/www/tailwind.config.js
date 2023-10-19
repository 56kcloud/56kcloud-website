const colors = require('tailwindcss/colors')
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './node_modules/notion-to-tailwind/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f3f7f9',
          100: '#CEEAF4',
          200: '#addcec',
          300: '#7FC9E1',
          400: '#6582b2',
          500: '#1f2c73',
          600: '#204583',
          700: '#1a3a6d',
          800: '#152e57',
          900: '#101a56',
          lighter: '#f3f7f9',
          light: '#addcec',
          medium: '#1f2c73',
          dark: '#101a56'
        },
        secondary: {
          50: '#FCEFED',
          100: '#F7A758',
          200: '#F89673',
          300: '#F2B2A6',
          400: '#EC9482',
          500: '#E7755F',
          600: '#E04B2E',
          700: '#BA351C',
          800: '#892715',
          900: '#58190D',
          950: '#40120A',
          lighter: '#f7a758',
          light: '#f89673',
          medium: '#e7755f'
        },
        grey: {
          50: '#CDD1DC',
          100: '#6A6E7A',
          200: '#A9AFC3',
          300: '#9199B2',
          400: '#7983A1',
          500: '#636E8E',
          600: '#4C546D',
          700: '#353B4C',
          800: '#1E212B',
          900: '#07080A',
          950: '#1D1E22',
          light: '#6a6e7a',
          medium: '#636e8e',
          dark: '#1d1e22'
        },
        error: colors.red
      },
      fontFamily: {
        chap: ['Chap', 'sans-serif'],
        graphik: ['Graphik', 'sans-serif']
      },
      backgroundImage: {
        'medium-title': 'url(\'/images/backgrounds/cloud.webp\')',
        'footer': 'url(\'/images/backgrounds/landscape.webp\')'
      },
      typography: () => ({
        DEFAULT: {
          css: [
            {
              h1: {
                fontFamily: 'Chap',
                fontWeight: '500'
              },
              h2: {
                fontFamily: 'Chap',
                fontWeight: '500'
              },
              h3: {
                fontFamily: 'Chap',
                fontWeight: '500'
              },
              h4: {
                fontFamily: 'Chap',
                fontWeight: '500'
              }
            }
          ]
        }
      })
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-animate')
  ]
}
