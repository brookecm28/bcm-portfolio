import './App.css';
import NavBar from './Components/NavBar'
import {useEffect, useState} from "react";
import {Route, Switch, useLocation} from "react-router-dom";
import Landing from "./Components/Landing";
import RichRecipes from "./Components/projects/rich-recipes";
import LemonProp from "./Components/projects/lemon-prop";
import BcmPortfolio from "./Components/projects/bcm-portfolio";
import InventoryManager from "./Components/projects/inventory-manager";

function App() {
    const location = useLocation()
    const [theme, setTheme] = useState('dark')
    const storedTheme = localStorage.getItem('theme')

    useEffect(() => {
        if (theme === 'light') {
            if (storedTheme === ('dark')) {
                setDarkMode()

                return
            }

            setLightMode()
        }

        if (theme === 'dark') {
            if (storedTheme === 'light') {
                setLightMode()

                return
            }

            setDarkMode()
        }
    }, [theme])

    function fetchElements() {
        const [app] = document.getElementsByClassName('App')
        const [moon] = document.getElementsByClassName('moon-icon')
        const [sun] = document.getElementsByClassName('sun-icon')

        return { app, moon, sun }
    }

    function setLightMode() {
        const { app, moon, sun } = fetchElements()

        app && app.classList.remove('dark')
        moon && moon.classList.remove('hidden-color-mode-icon')
        sun && sun.classList.add('hidden-color-mode-icon')

        localStorage.setItem('theme', 'light')
        setTheme('light')
    }

    function setDarkMode() {
        const { app, moon, sun } = fetchElements()

        app && app.classList.add('dark')
        moon && moon.classList.add('hidden-color-mode-icon')
        sun && sun.classList.remove('hidden-color-mode-icon')

        localStorage.setItem('theme', 'dark')
        setTheme('dark')
    }

    function toggleColorMode() {
        if (theme === 'dark') {
            setTheme('light')
            localStorage.setItem('theme', 'light')
            return
        }

        setTheme('dark')
        localStorage.setItem('theme', 'dark')
    }

  return (
    <div className="App scroll-smooth dark">
      <NavBar toggleColorMode={() => toggleColorMode()} />
      <Switch>
          <Route exact path='/'>
                <Landing section={location.state}/>
          </Route>
          <Route exact path='/projects/rich-recipes'>
              <RichRecipes theme={theme}/>
          </Route>
          <Route >
            <LemonProp exact path='/projects/lemon-prop' />
          </Route>
          <Route>
              <BcmPortfolio exact path='/projects/bcm-portfolio'/>
          </Route>
          <Route>
              <InventoryManager exact path='/projects/inventory-manager-pro' />
          </Route>
      </Switch>
    </div>
  );
}

export default App;
