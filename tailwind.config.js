/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/*.{html, js}",
    "./src/Components/*.js",
    "./public/index.html"
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'sans': "'Raleway', sans-serif",
    },
    extend: {
      colors: {
        'primary': 'var(--primary)',
        'secondary-light': 'var(--secondary-light)',
        'secondary-dark': 'var(--secondary-dark)'
      },
      backgroundImage: {
        'dark-waters': "url('../assets/dark-waters.jpg')",
        'light-waters': "url('../assets/light-waters.jpg')",
        'dark-blues': "url('../assets/dark-blue.jpg')",
        'pink-palms': "url('../assets/pink-palms.jpg')",
        'tropical-leaves': "url('../assets/tropical-leaves.jpg')",
        'light-wood': "url('../assets/light-wood.jpg')",
        'dark-wood': "url('../assets/dark-wood.jpg')",
        'mint-green': "url('../assets/mint-green.jpg')",
        'dark-landing': "url('../assets/dark-landing.jpg')",
        'light-landing': "url('../assets/light-landing.jpg')"
      },
      padding: {
        'nav-width': 'var(--nav-width)'
      },
      backdropBrightness: {
        '60': '.6'
      }
    }
  },
  plugins: []
}
