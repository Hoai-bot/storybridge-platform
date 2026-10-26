/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Be Vietnam Pro"', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', '"Be Vietnam Pro"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}