import React, { useState, useEffect } from 'react'
import { withRouter, useLocation, Link } from 'react-router-dom'
import * as Scroll from 'react-scroll'
import ReactTooltip from 'react-tooltip';
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

    const [hamburgerOpen, setHamburgerOpen] = useState(false)
    const [landingPage, setLandingPage] = useState(true)
    const ScrollLink = Scroll.Link

    useEffect(() => {
        if (page === '/') {
            setLandingPage(true)
            return
        }

        setLandingPage(false)
    }, [page])

    function scrollNav(name, icon, to) {
        return (
            <ScrollLink className='nav-link' to={to} smooth spy>
            <ReactTooltip place='right' effect='solid' textColor='var(--secondary-dark)' backgroundColor='var(--secondary-light)'
                    className='tooltip font-bold font-sans text-xl'/>
                    <div data-tip={name} className='nav-item h-12 w-12 backdrop-brightness-110 dark:backdrop-brightness-60 rounded-full flex justify-center items-center hover:cursor-pointer'>
                    {icon}
                </div>

            </ScrollLink>
        )
    }

    function linkNav(name, icon, section) {
        return (
            <Link to={{ pathname: '/', state: section }}>
                <ReactTooltip place='right' effect='solid' textColor='var(--secondary-dark)' backgroundColor='var(--secondary-light)'
                              className='tooltip font-bold font-sans text-xl'/>
                <div data-tip={name} className='nav-item h-12 w-12 backdrop-brightness-110 dark:backdrop-brightness-60 rounded-full flex justify-center items-center hover:cursor-pointer'>
                    {icon}
                </div>
            </Link>
        )
    }

    const desktopNav = (
        <div className='flex flex-col items-center'>
            <div className='hidden md:flex flex-col items-center'>
                <h2 className='text-4xl pt-2'>Brooke Miller</h2>
                <br />
                <h3>Web Developer</h3>
                <hr className='border-secondary-dark dark:border-primary w-5/6' />
                <h3>Software Engineer</h3>
                <br />
            </div>
            <div onClick={props.toggleColorMode}
                className="hidden h-14 w-12 backdrop-brightness-110 rounded-full
                 md:flex md:items-center md:justify-center
                 dark:backdrop-brightness-60
                 hover:cursor-pointer ">
                {moon}{sun}
            </div>

            {/*Make this dynamic (possible to do without another switch stmt bc of icons?): */}
            <nav className='mt-24 xl:mt-36 h-1/2 hidden md:flex flex-col items-center gap-2'>
                {landingPage ? scrollNav('Home', home, 'landing') : linkNav("Home", home, 'landing')}
                {landingPage ? scrollNav('Stack', stack, 'stack') : linkNav("Stack", stack, 'stack')}
                {landingPage ? scrollNav('Projects', projects, 'projects') : linkNav("Projects", projects, 'projects')}
                {landingPage ? scrollNav('About', about, 'about') : linkNav("About", about, 'about')}
                {landingPage ? scrollNav('Contact', contact, 'contact') : linkNav("Contact", contact, 'contact')}
            </nav>
        </div>
    )

    function mobileScrollNav(name, icon, to) {
     return (
         <ScrollLink className='flex items-center justify-end p-4' to={to} smooth spy onClick={() => setHamburgerOpen(!hamburgerOpen)}>
            <div className='pr-12'>
                {name}
            </div>
            {icon}
         </ScrollLink>
     )
}

    function mobileLinkNav(name, icon, section) {
        return (
            <Link to={{ pathname: '/', state: section }} className='flex items-center justify-end p-4' onClick={() => setHamburgerOpen(!hamburgerOpen)}>
                <div className='pr-12'>
                    {name}
                </div>
                {icon}
            </Link>
        )
    }

    const hamburgerDropDown = (
        <nav className='fixed z-9 bg-secondary-light text-secondary-dark h-fit w-full text-4xl divide-y-2 divide-primary
                        dark:bg-secondary-grey dark:text-primary dark:divide-primary'>
                {landingPage ? mobileScrollNav('Home', home, 'landing') : mobileLinkNav('Home', home, 'landing')}
                {landingPage ? mobileScrollNav('Stack', stack, 'stack') : mobileLinkNav('Stack', home, 'stack')}
                {landingPage ? mobileScrollNav('Projects', projects, 'projects') : mobileLinkNav('Projects', home, 'projects')}
                {landingPage ? mobileScrollNav('About', about, 'about') : mobileLinkNav('About', home, 'about')}
                {landingPage ? mobileScrollNav('Contact', contact, 'contact') : mobileLinkNav('Contact', home, 'contact')}
                <div onClick={props.toggleColorMode}
                     className="flex items-center justify-end p-4">
                    <div className='pr-12'>Theme</div>
                    {moon}{sun}
                </div>
        </nav>
    )

    return (
        <div>
            <div onClick={() => setHamburgerOpen(!hamburgerOpen)}
                className='nav z-10 inset-6 text-secondary-dark h-12 w-mobile-nav-width
                            dark:text-primary
                            md:w-nav-width md:hidden'>
                {hamburger}
            </div>
            {hamburgerOpen && hamburgerDropDown}
            <div className='nav z-3 hidden text-secondary-dark h-screen w-mobile-nav-width items-center
                            dark:text-primary
                            md:flex md:flex-col md:w-nav-width'>
                {desktopNav}
            </div>
        </div>
    )
}

export default withRouter(NavBar)