/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{html, js}",
    "./src/Components/*.js",
    ".public/index.html"
  ],
  theme: {
    fontFamily: {
      'sans': 'Raleway',
    },
    colors: {
      'primary': '#94dabd',
    },
    extend: {},
  },
  plugins: [],
}
