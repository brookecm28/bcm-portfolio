import React from 'react'
import {Link, withRouter} from 'react-router-dom'

function NavBar() {
    return (
        <div className='nav'>
            <div className='nav-top'>
                <h2>brooke miller</h2>
                <h3>web developer</h3>
            </div>
            <nav className='bar'>
                <Link className='nav-link' to='/about'>
                    <p className='nav-item'>about</p>
                </Link>              
                <Link className='nav-link' to='projects'>
                    <p className='nav-item'>projects</p>
                </Link>
                <Link className='nav-link' to='/contact'>
                    <p className='nav-item'>contact</p>
                </Link>
            </nav>
        </div>
    )
}

export default withRouter(NavBar)