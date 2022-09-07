import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import moon from '../assets/icons/moon'
import sun from '../assets/icons/sun'
import home from '../assets/icons/home'
import about from '../assets/icons/about'
import projects from '../assets/icons/projects'
import contact from '../assets/icons/contact'

function NavBar() {
    return (
        <div className='nav'>
            <div className='nav-top'>
                <h2>Brooke Miller</h2>
                <h3>Web Developer</h3>
            </div>
            {moon}{sun}
            <nav className='bar'>
                <Link className='nav-link' to='/'>
                    <div className='nav-item'>
                        {home}
                    </div>
                </Link>   
                <Link className='nav-link' to='/about'>
                    <div className='nav-item'>{about}</div>
                </Link>              
                <Link className='nav-link' to='/projects'>
                    <div className='nav-item'>{projects}</div>
                </Link>
                <Link className='nav-link' to='/contact'>
                    <div className='nav-item'>{contact}</div>
                </Link>
            </nav>
        </div>
    )
}

export default withRouter(NavBar)