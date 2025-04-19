/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f6ff',
          100: '#e0edff',
          200: '#c0daff',
          300: '#91bfff',
          400: '#609aff',
          500: '#3b74fc',
          600: '#1c4ff3',
          700: '#1e3a8a',
          800: '#162c68',
          900: '#16295a',
        },
        secondary: {
          50: '#fff9eb',
          100: '#ffefc6',
          200: '#ffdd8d',
          300: '#ffc651',
          400: '#f59e0b',
          500: '#e68a00',
          600: '#ca6900',
          700: '#a44c02',
          800: '#873e08',
          900: '#73340d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};