import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import moon from '../assets/icons/moon'
import sun from '../assets/icons/sun'
import home from '../assets/icons/home'
import about from '../assets/icons/about'
import projects from '../assets/icons/projects'
import contact from '../assets/icons/contact'
import hamburger from "../assets/icons/hamburger";

function NavBar() {
    function toggleColorMode() {
        const [app] = document.getElementsByClassName('App')
        const [moon] = document.getElementsByClassName('moon-icon')
        const [sun] = document.getElementsByClassName('sun-icon')

        if (app.classList && app.classList.contains('dark')) {
            app.classList.remove('dark')
            moon.classList.add('hidden-color-mode-icon')
            sun.classList.remove('hidden-color-mode-icon')

            return
        }

        app.classList.add('dark')
        moon.classList.remove('hidden-color-mode-icon')
        sun.classList.add('hidden-color-mode-icon')
    }
    return (
        <div className='nav text-secondary-dark dark:text-primary'>
            <div className='nav-top'>
                <h2>Brooke Miller</h2>
                <h3>Web Developer</h3>
            </div>
            <div onClick={toggleColorMode}>
                {moon}{sun}
            </div>
            {hamburger}
            <nav className='bar'>
                <Link className='nav-link' to='/'>
                    <div className='nav-item h-12 w-12 backdrop-brightness-60 rounded-full flex justify-center items-center'>
                        {home}
                    </div>
                </Link>   
                <Link className='nav-link' to='/about'>
                    <div className='nav-item h-12 w-12 backdrop-brightness-60 rounded-full flex justify-center items-center'>
                        {about}
                    </div>
                </Link>              
                <Link className='nav-link' to='/projects'>
                    <div className='nav-item h-12 w-12 backdrop-brightness-60 rounded-full flex justify-center items-center'>
                        {projects}
                    </div>
                </Link>
                <Link className='nav-link' to='/contact'>
                    <div className='nav-item h-12 w-12 backdrop-brightness-60 rounded-full flex justify-center items-center'>
                        {contact}
                    </div>
                </Link>
            </nav>
        </div>
    )
}

export default withRouter(NavBar)