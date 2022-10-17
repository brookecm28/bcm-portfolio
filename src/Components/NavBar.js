import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import * as Scroll from 'react-scroll'
import moon from '../assets/icons/moon'
import sun from '../assets/icons/sun'
import home from '../assets/icons/home'
import about from '../assets/icons/about'
import projects from '../assets/icons/projects'
import contact from '../assets/icons/contact'
import stack from '../assets/icons/stack'
import hamburger from "../assets/icons/hamburger";

function NavBar() {
    const [theme, setTheme] = useState('dark')
    const storedTheme = localStorage.getItem('theme')
    const ScrollLink = Scroll.Link

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
                <ScrollLink className='nav-link' to='landing' smooth spy>
                    <div className='nav-item h-12 w-12 backdrop-brightness-110 dark:backdrop-brightness-60 rounded-full flex justify-center items-center'>
                        {home}
                    </div>
                </ScrollLink>
                <ScrollLink className='nav-link' to='stack' smooth spy>
                    <div className='nav-item h-12 w-12 backdrop-brightness-110 dark:backdrop-brightness-60 rounded-full flex justify-center items-center'>
                        {stack}
                    </div>
                </ScrollLink>
                <ScrollLink className='nav-link' to='about' smooth spy>
                    <div className='nav-item h-12 w-12 backdrop-brightness-110 dark:backdrop-brightness-60 rounded-full flex justify-center items-center'>
                        {about}
                    </div>
                </ScrollLink>
                <ScrollLink className='nav-link' to='projects' smooth spy>
                    <div className='nav-item h-12 w-12 backdrop-brightness-110 dark:backdrop-brightness-60 rounded-full flex justify-center items-center'>
                        {projects}
                    </div>
                </ScrollLink>
                <ScrollLink className='nav-link' to='contact' smooth spu>
                    <div className='nav-item h-12 w-12 backdrop-brightness-110 dark:backdrop-brightness-60 rounded-full flex justify-center items-center'>
                        {contact}
                    </div>
                </ScrollLink>
            </nav>
        </div>
    )
}

export default withRouter(NavBar)