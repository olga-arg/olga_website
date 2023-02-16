/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Rubik', 'system-ui', 'sans-serif'],
    },
    colors: {
      white: '#FFFFFF',
      pink: '#DE848B',
      blue: '#1C2E3D',
      green: '#62948F',
      gray: '#ECEBED',
      gray_hover: '#848484',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
