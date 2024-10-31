const colors = require('tailwindcss/colors');
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        iranyekan: ['IRANYekanX', 'sans-serif'],
      },
      fontWeight: {
        light: '300',
        normal: '400',
        bold: '700',
      },
      boxShadow: {
        sidebar: '-1px 0px 2px 0px rgba(0, 0, 0, 0.12)',
        header: '0px 1px 2px 0px rgba(0, 0, 0, 0.12)',
      }
    },
  },
  plugins: [],
}

