import React from 'react'
import {Link, withRouter} from 'react-router-dom'

function NavBar() {
    return (
        <div className='nav'>
            <div className='nav-top'>
                <h2>Brooke Miller</h2>
                <h3>Web Developer</h3>
            </div>
            <nav className='bar'>
                <Link className='nav-link' to='/'>
                    <p className='nav-item'>Home</p>
                </Link>   
                <Link className='nav-link' to='/about'>
                    <p className='nav-item'>About</p>
                </Link>              
                <Link className='nav-link' to='projects'>
                    <p className='nav-item'>Projects</p>
                </Link>
                <Link className='nav-link' to='/contact'>
                    <p className='nav-item'>Contact</p>
                </Link>
            </nav>
        </div>
    )
}

export default withRouter(NavBar)