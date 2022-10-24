import React, { useState, useEffect } from 'react'
import {withRouter, useLocation, Link} from 'react-router-dom'
import { Route } from 'react-router'
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

    function linkNav(icon, to) {
        return (
            <Link to={to}>
            <div className='nav-item h-12 w-12 backdrop-brightness-110 dark:backdrop-brightness-60 rounded-full flex justify-center items-center hover:cursor-pointer'>
                {icon}
            </div>
        </Link>
        )
    }

    return (
        <div className='nav text-secondary-dark dark:text-primary flex flex-col items-center'>
            <div className='flex flex-col items-center'>
                <h2 className='text-4xl pt-2'>Brooke Miller</h2>
                <br/>
                <h3>Web Developer</h3>
                <hr className='border-secondary-dark dark:border-primary w-5/6'/>
                <h3>Software Engineer</h3>
                <br/>
            </div>
            <div onClick={props.toggleColorMode} className="hover:cursor-pointer h-12 w-12 backdrop-brightness-110 dark:backdrop-brightness-60 rounded-full flex justify-center items-center">
                {moon}{sun}
            </div>
            {/* {hamburger} */}

            <nav className='mt-36 h-1/2 flex flex-col items-center gap-2'>
                {landingPage ? scrollNav(home, 'landing') : linkNav(home, '/')}
                {landingPage ? scrollNav(stack, 'stack') : linkNav(stack, '/#stack')}
                {landingPage ? scrollNav(projects, 'projects') : linkNav(projects, '/#projects')}
                {landingPage ? scrollNav(about, 'about') : linkNav(about, '/#about')}
                {landingPage ? scrollNav(contact, 'contact') : linkNav(contact, '/#contact')}
            </nav>
        </div>
    )
}

export default withRouter(NavBar)