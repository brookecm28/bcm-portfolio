/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/*.{html, js}",
    "./src/Components/*.js",
    "./public/index.html"
  ],
  theme: {
    fontFamily: {
      'sans': 'Raleway',
    },
    extend: {
      colors: {
        'primary': '#94dabd',
      },
      backgroundImage: {
        'light-palms': "url('')",
        'dark-palms': "url('../assets/DarkPalms3.jpg')"
      }
    }
  },
  plugins: []
}
