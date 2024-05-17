/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{vue,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Teachers', ...defaultTheme.fontFamily.sans],
        heading: ['Fira Sans'],
      },
      colors: {
        'accent-primary': '#186f65'
      }
    },
  },
  plugins: [],
}

