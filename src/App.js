import routes from './routes'
import './App.css';
import NavBar from './Components/NavBar'


console.log('hi')
const darkTheme = localStorage.getItem('darkTheme')

console.log('from localStorage:', darkTheme)

if (darkTheme) {
  toggleColorMode(true, 'dark')
} else {
  toggleColorMode(true, 'light')
}


export function toggleColorMode(onRender, theme) {
  console.log('toggling')

  if (onRender) {
    if (theme === 'dark') {
      console.log('set render dark')
      setDarkMode()
    }
    console.log('set render light')
    setLightMode()

    return
  }
  const app = document.getElementsByClassName('App')

  if (app.classList && app.classList.contains('dark')) {
    setLightMode()
  }

  setDarkMode()
}

function setDarkMode() {
  const [app] = document.getElementsByClassName('App')
  const [moon] = document.getElementsByClassName('moon-icon')
  const [sun] = document.getElementsByClassName('sun-icon')
  console.log('setting dark mode', app)

  app.classList.add('dark')
  moon.classList.add('hidden-color-mode-icon')
  sun.classList.remove('hidden-color-mode-icon')

  localStorage.setItem('darkTheme', true)
}

function setLightMode() {
  const [app] = document.getElementsByClassName('App')
  const [moon] = document.getElementsByClassName('moon-icon')
  const [sun] = document.getElementsByClassName('sun-icon')

  app.classList.remove('dark')
  moon.classList.remove('hidden-color-mode-icon')
  sun.classList.add('hidden-color-mode-icon')

  localStorage.setItem('darkTheme', false)
}



function App() {
  return (
    <div className="App scroll-smooth dark">
      <NavBar />
      {routes}
    </div>
  );
}

export default App;
