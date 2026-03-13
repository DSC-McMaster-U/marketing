import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
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
        'yellow-500': '#FBBC04',
        'yellow-200': '#FDE293',
        'red-600': '#D93025',
        'red-500': '#EA4335',
        'red-400': '#EE675C',
        'red-300': '#F28B82',
        'purple-600': '#A142F4',
        'purple-500': '#AF5CF7',
        'purple-400': '#C58BF9',
        'blue-600': '#1A73E8',
        'green-600': '#1E8E3E',
        'green-400': '#5BB974',
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
  safelist: [
    {
      pattern:
        /^(bg|text|border|shadow)-(blue|red|green|yellow|purple)-(400|500|600)$/,
    },
    {
      pattern:
        /^(bg|text|border|shadow)-(blue|red|green|yellow|purple)-(400|500|600)\/(10|20|30|40|50)$/,
    },
    {
      pattern:
        /^(bg|text|border|shadow)-(blue|red|green|yellow|purple)-(400|500|600)$/,
      variants: ['hover', 'focus', 'active', 'dark', 'dark:hover'],
    },
    {
      pattern:
        /^(bg|text|border|shadow)-(blue|red|green|yellow|purple)-(400|500|600)\/(10|20|30|40|50)$/,
      variants: ['hover', 'focus', 'active', 'dark', 'dark:hover'],
    },
  ],
  darkMode: 'media',
  plugins: [],
} satisfies Config
