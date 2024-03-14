/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'hero-img': "url('/src/assets/wom.png')",
      }),
    },
    fontFamily: {
      // sans: ['Rubik', 'system-ui', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
      seriguela: ['seriguela', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
