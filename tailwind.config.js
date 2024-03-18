/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7A6827',
          opacity: '#7A6827d4',
          ligth: '#9c8531',
          300: '#937d2f',
          400: '#706023',
        },
        secondary: {
          DEFAULT: '#020202',
          opacity: '#020202d4',
          ligth: '#353535',
          300: '#282828',
          400: '#151515',
        },
        tertiary: {
          DEFAULT: '#ed4f44',
          opacity: '#ed4f44d4',
        },
      },
    },
  },
  plugins: [require('daisyui')],
};
