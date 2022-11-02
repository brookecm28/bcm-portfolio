import React, {useEffect} from 'react'
import Scroller, {Element} from 'react-scroll'
import headshot from '../assets/Headshot2.jpg'
import { myStack, myDescriptions } from '../data.json'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'

function Landing(props) {
    useEffect(() => {
        if (props.section) {
            Scroller.scroller.scrollTo(props.section)
        }
    }, [props])

    function stackLoop() {
        if (myStack) {
            const myStackAsArray = Object.keys(myStack)
            return myStackAsArray.map(stackArea => {
                return (
                    <div className='bg-gradient-to-br border-2 rounded-3xl transition-color duration-500
                                    from-secondary-grey via-primary to-secondary-grey border-secondary-dark
                                    dark:from-secondary-grey dark:via-secondary-dark dark:to-secondary-grey dark:border-primary
                                    hover:from-secondary-light hover:via-primary hover:to-secondary-light hover:cursor-default
                                    hover:dark:from-secondary-light hover:dark:via-secondary-dark hover:dark:to-secondary-light'
                         key={`${stackArea}-stack`}>
                        <h3 className='text-2xl underline'>{stackArea}</h3>
                        <div>
                            {myStack[stackArea].map(stackItem => <p key={`${stackArea}-${stackItem}`}>{stackItem}</p>)}
                        </div>
                    </div>
                )
            })
        }
    }

    return (
        <div className='text-secondary-dark dark:text-primary w-full'>
            <Element name="landing">
                <section role="region" id="landing" className="bg-light-landing bg-fixed bg-center bg-no-repeat bg-cover flex justify-center flex-col min-h-screen w-full
                            dark:bg-dark-landing
                            md:pl-nav-width">
                    <h2 className='text-7xl pt-16 md:pt-20'>Who Am I?</h2>
                    <div className='flex flex-col-reverse md:flex-row items-center justify-center'>
                        <ul className='container flex flex-col'>
                            {myDescriptions.map((description, index) => {
                                return (
                                    <li key={`description-${index}`} className="">{description}</li>
                                )
                            })}
                        </ul>
                        <img className='headshot w-fit my-12' src={headshot} alt='Brooke Miller Headshot' />
                    </div>
                </section>
            </Element>
            <Element name="stack" >
                <section role="region" id="stack" className="bg-primary min-h-fit w-full md:pl-nav-width px-10 flex flex-col items-center justify-center
                dark:bg-secondary-dark pt-16 md:pt-20 pb-16">
                    <h2 className='text-5xl mb-10 md:mb-16'>My Stack</h2>
                    <div className="container grid grid-cols-1 gap-12 md:gap-16
                    lg:grid-cols-3 lg:grow
                    2xl:grid-cols-5 2xl:grow-0 ">{stackLoop()}</div>
                </section>
            </Element>
            <Element name="projects" >
                <section role="region" id="projects" className="bg-baby-blue bg-fixed bg-cover min-h-screen w-full md:pl-nav-width
                dark:bg-dark-waters ">
                    {Projects()}
                </section>
            </Element>
            <Element name="about" >
                <section role="region" id="about" className="bg-primary min-h-[67%] w-full md:pl-nav-width
                dark:bg-secondary-dark ">
                    {About()}
                </section>
            </Element>
            <Element name="contact" >
                <section role="region" id="contact" className="bg-light-wood
                dark:bg-dark-wood bg-cover bg-fixed min-h-screen w-full md:pl-nav-width">
                    {Contact()}
                </section>
            </Element>
        </div>
    )
}

export default Landing