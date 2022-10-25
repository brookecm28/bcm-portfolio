/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/*.{html, js}",
    "./src/Components/*.js",
      "./src/Components/projects/*.js",
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
        'secondary-dark': 'var(--secondary-dark)',
        'secondary-grey': 'var(--secondary-grey)'
      },
      backgroundImage: {
        'dark-waters': "url('../assets/dark-waters.jpg')",
        'light-waters': "url('../assets/light-waters.jpg')",
        'dark-blues': "url('../assets/dark-blue.jpg')",
        'pink-palms': "url('../assets/pink-palms.jpg')",
        'tropical-leaves': "url('../assets/tropical-leaves.jpg')",
        'light-wood': "url('../assets/light-woods.jpg')",
        'dark-wood': "url('../assets/dark-wood.jpg')",
        'mint-green': "url('../assets/mint-green.jpg')",
        'dark-landing': "url('../assets/dark-landing.jpg')",
        'light-landing': "url('../assets/light-landing.jpg')",
        'baby-blue': "url('../assets/baby-blue.jpg')"
      },
      padding: {
        'nav-width': 'var(--nav-width)'
      },
      backdropBrightness: {
        '60': '.6'
      },
      maxWidth: {
        'icon': '4rem',
      },
      maxHeight: {
        'icon': '5rem',
      }
    }
  },
  plugins: []
}
