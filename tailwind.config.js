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
        'light-palms-1': "url('https://images.unsplash.com/photo-1652954352097-29f2d0526f08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')",
        'light-palms-2': "url('https://images.unsplash.com/photo-1635265191732-ed470d961760?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80')",
        'light-palms-3': "url('https://images.unsplash.com/photo-1484108441031-34aaf2bb5001?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')",
        'dark-palms': "url('../assets/DarkPalms3.jpg')"
      },
      padding: {
        'nav-width': 'var(--nav-width)'
      }
    }
  },
  plugins: []
}
