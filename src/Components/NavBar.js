import React, {useState, useEffect} from 'react'
import { Link, withRouter } from 'react-router-dom'
import moon from '../assets/icons/moon'
import sun from '../assets/icons/sun'
import home from '../assets/icons/home'
import about from '../assets/icons/about'
import projects from '../assets/icons/projects'
import contact from '../assets/icons/contact'
import hamburger from "../assets/icons/hamburger";

const [theme, setTheme] = useState('light')
const storedTheme = localStorage.getItem('theme')

useEffect(() => {
    if (storedTheme === 'light' && theme === 'light') {
        setLightMode()

        return
    }

    if (storedTheme === 'dark' && theme === 'dark') {
        setDarkMode()

        return
    }

    console.log('problem; storedTheme:', storedTheme, 'theme:', theme)
}, [theme])

function fetchElements() {
    const [app] = document.getElementsByClassName('App')
    const [moon] = document.getElementsByClassName('moon-icon')
    const [sun] = document.getElementsByClassName('sun-icon')

    return {app, moon, sun}
}
function setLightMode() {
    const {app, moon, sun} = fetchElements()

    app && app.classList.remove('dark')
    moon && moon.classList.remove('hidden-color-mode-icon')
    sun && sun.classList.add('hidden-color-mode-icon')

    localStorage.setItem('theme', 'light')
}

function setDarkMode() {
    const {app, moon, sun} = fetchElements()

    console.log('setting dark mode', app)

    app && app.classList.add('dark')
    moon && moon.classList.add('hidden-color-mode-icon')
    sun && sun.classList.remove('hidden-color-mode-icon')

    localStorage.setItem('theme', 'dark')
}

export function toggleColorMode() {
    if (theme === 'dark') {
        setTheme('light')
        storedTheme.setItem(theme)
        return
    }
    setTheme('dark')
    storedTheme.setItem(theme)
}

class NavBar extends React.Component {

    render() {

        return (
            <div className='nav text-secondary-dark dark:text-primary flex flex-col items-center'>
                <div className='nav-top'>
                    <h2>Brooke Miller</h2>
                    <h3>Web Developer</h3>
                </div>
                <div onClick={toggleColorMode} className="hover:cursor-pointer h-12 w-12 backdrop-brightness-110 dark:backdrop-brightness-60 rounded-full flex justify-center items-center">
                    {moon}{sun}
                </div>
                {/* {hamburger} */}
                <nav className='bar'>
                    <Link className='nav-link' to='/'>
                        <div className='nav-item h-12 w-12 backdrop-brightness-110 dark:backdrop-brightness-60 rounded-full flex justify-center items-center'>
                            {home}
                        </div>
                    </Link>
                    <Link className='nav-link' to='/about'>
                        <div className='nav-item h-12 w-12 backdrop-brightness-110 dark:backdrop-brightness-60 rounded-full flex justify-center items-center'>
                            {about}
                        </div>
                    </Link>
                    <Link className='nav-link' to='/projects'>
                        <div className='nav-item h-12 w-12 backdrop-brightness-110 dark:backdrop-brightness-60 rounded-full flex justify-center items-center'>
                            {projects}
                        </div>
                    </Link>
                    <Link className='nav-link' to='/contact'>
                        <div className='nav-item h-12 w-12 backdrop-brightness-110 dark:backdrop-brightness-60 rounded-full flex justify-center items-center'>
                            {contact}
                        </div>
                    </Link>
                </nav>
            </div>
        )
    }
}


export default withRouter(NavBar)