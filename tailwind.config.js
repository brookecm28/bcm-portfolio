/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/*.{html, js}",
    "./src/Components/*.js",
    "./public/index.html"
  ],
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
        'light-palms-1': "url('../assets/light-palms-1.jpg')",
        'light-palms-2': "url('../assets/light-palms-2.jpg')",
        'starry-palms': "url('../assets/starry-palms.jpg')",
        'dark-palms': "url('../assets/DarkPalms3.jpg')",
        'pink-palms': "url('../assets/pink-palms.jpg')",
        'tropical-leaves': "url('../assets/tropical-leaves.jpg')"
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
