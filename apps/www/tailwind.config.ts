import colors from 'tailwindcss/colors'
import type {Config} from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
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
        error: colors.red,
        background: '#0F172A'
      },
      keyframes: {
        'accordion-down': {
          from: {height: '0'},
          to: {height: 'var(--radix-accordion-content-height)'}
        },
        'accordion-up': {
          from: {height: 'var(--radix-accordion-content-height)'},
          to: {height: '0'}
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      },
      backgroundImage: {
        'text-gradient-gray':
          'linear-gradient(to left, rgba(248, 250, 252, 0.7) 10%, rgba(248, 250, 252, 1), rgba(248, 250, 252, 0.7) 90%)',
        'text-gradient-blue': 'linear-gradient(to left, #F0F9FF 0%, #0EA5E9 80%)',
        'radial-gradient':
          'radial-gradient(40% 90% at 50% 0%, rgba(14, 165, 233, 0.64) 0%, rgba(15, 23, 42, 0.00) 180%)'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-animate')
  ]
} satisfies Config

export default config
