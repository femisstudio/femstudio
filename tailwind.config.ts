import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'forest-green': '#0f2d24',
        'dark-green': '#0a1f19',
        'light-green': '#1a4336',
        'gold': '#c9a227',
        'cream': '#fcfbf7',
        'cream-dark': '#f0ede4',
      },
      fontFamily: {
        cormorant: ['Cormorant Garamond', 'Georgia', 'serif'],
        syncopate: ['Syncopate', 'Arial', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}

export default config

// Design Token Exports for Component Use
export const designTokens = {
  colors: {
    forestGreen: '#0f2d24',
    darkGreen: '#0a1f19',
    lightGreen: '#1a4336',
    gold: '#c9a227',
    cream: '#fcfbf7',
    creamDark: '#f0ede4',
  },
  fonts: {
    cormorant: ['Cormorant Garamond', 'Georgia', 'serif'],
    syncopate: ['Syncopate', 'Arial', 'sans-serif'],
  },
}
