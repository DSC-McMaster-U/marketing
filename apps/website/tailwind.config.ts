import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'hover-none': { raw: '(hover: none)' }, // custom media query for devices that don't have hover
      },
      fontFamily: {
        accent: ['Roboto', 'sans-serif'],
        default: ['Open Sans', 'sans-serif'],
      },
      colors: {
        'black-00': '#0F0F0F',
        'black-01': '#1A1A1B',
        'black-02': '#252527',
        'black-03': '#303032',
        'white-00': '#F8F8FA',
        'white-01': '#EBEBED',
        'white-02': '#E0E0E2',
        'white-03': '#D5D5D7',
        'grey-700': '#5F6368',
        'grey-100': '#F1F3F4',
        black: '#000000',
        'blue-500': '#4285F4',
        'blue-300': '#8AB4F8',
        'green-500': '#34A853',
        'green-300': '#81C995',
        'yellow-600': '#FA9B00',
        'yellow-200': '#FDE293',
        'red-500': '#EA4335',
        'red-300': '#F28B82',
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
      backgroundImage: {
        'newsletter-card-gradient': '',
      },
    },
  },
  variants: {
    extend: {
      translate: ['group-hover', 'hover-none'], // Extend translate variant to support hover-none
    },
  },
  darkMode: 'media',
  plugins: [],
} satisfies Config
