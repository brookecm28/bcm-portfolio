import React, { useState, useEffect } from 'react'
import {withRouter, useLocation, Link} from 'react-router-dom'
import * as Scroll from 'react-scroll'
import moon from '../assets/icons/moon'
import sun from '../assets/icons/sun'
import home from '../assets/icons/home'
import about from '../assets/icons/about'
import projects from '../assets/icons/projects'
import contact from '../assets/icons/contact'
import stack from '../assets/icons/stack'
import hamburger from "../assets/icons/hamburger";

function NavBar(props) {
    const page = useLocation().pathname

    // const [hamburgerOpen, setHamburgerOpen] = useState(false)
    const [landingPage, setLandingPage] = useState( true)
    const ScrollLink = Scroll.Link

    useEffect(() => {
        if (page === '/') {
            setLandingPage(true)
            return
        }

        setLandingPage(false)
    }, [page])

    function scrollNav(icon, to) {
        return (
            <ScrollLink className='nav-link' to={to} smooth spy>
                <div className='nav-item h-12 w-12 backdrop-brightness-110 dark:backdrop-brightness-60 rounded-full flex justify-center items-center hover:cursor-pointer'>
                    {icon}
                </div>
            </ScrollLink>
        )
    }

    function linkNav(icon, section) {
        return (
            <Link to={{pathname: '/', state: section}}>
                    <div className='nav-item h-12 w-12 backdrop-brightness-110 dark:backdrop-brightness-60 rounded-full flex justify-center items-center hover:cursor-pointer'>
                        {icon}
                    </div>
            </Link>
        )
    }

    const desktopNav = (
            <div>
                <div className='hidden md:flex flex-col items-center'>
                    <h2 className='text-4xl pt-2'>Brooke Miller</h2>
                    <br/>
                    <h3>Web Developer</h3>
                    <hr className='border-secondary-dark dark:border-primary w-5/6'/>
                    <h3>Software Engineer</h3>
                    <br/>
                </div>
                <div onClick={props.toggleColorMode}
                     className="hidden h-12 w-12 backdrop-brightness-110 rounded-full
                 md:flex justify-center items-center
                 dark:backdrop-brightness-60
                 hover:cursor-pointer ">
                    {moon}{sun}
                </div>

                {/*Make this dynamic: */}
                <nav className='mt-36 h-1/2 hidden md:flex flex-col items-center gap-2'>
                    {landingPage ? scrollNav(home, 'landing') : linkNav(home, 'landing')}
                    {landingPage ? scrollNav(stack, 'stack') : linkNav(stack, 'stack')}
                    {landingPage ? scrollNav(projects, 'projects') : linkNav(projects, 'projects')}
                    {landingPage ? scrollNav(about, 'about') : linkNav(about, 'about')}
                    {landingPage ? scrollNav(contact, 'contact') : linkNav(contact, 'contact')}
                </nav>
            </div>
        )

//         const hamburgerDropDown = (
//             <nav>
// <div>hi</div>
//             </nav>


    // onClick={setHamburgerOpen(!hamburgerOpen)
//         )

    return (
        <div >
            <div
                 className='nav mt-6 md:hidden text-secondary-dark
                            dark:text-primary'>
                {hamburger}
            </div>
            {/*{hamburgerOpen && hamburgerDropDown}*/}
            <div className='nav hidden text-secondary-dark
                            dark:text-primary items-center
                            md:flex md:flex-col'>
                {desktopNav}
            </div>
        </div>
    )
}

export default withRouter(NavBar)