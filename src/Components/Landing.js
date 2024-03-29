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
            return myStackAsArray.map((stackArea, index) => {
                return (
                    <div className={`col-span-3 ${index < 3 ? 'lg:col-span-2' : 'lg:col-span-3 2xl:col-span-2'}
                                    bg-gradient-to-br border-2 rounded-3xl transition-color duration-500
                                    from-secondary-light via-primary to-secondary-light border-secondary-dark
                                    dark:from-secondary-grey dark:via-secondary-dark dark:to-secondary-grey dark:border-primary
                                    hover:from-secondary-grey hover:via-primary hover:to-secondary-grey hover:cursor-default
                                    hover:dark:from-secondary-light hover:dark:via-secondary-dark hover:dark:to-secondary-light`}
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
                    <h2 className='text-7xl pt-16 md:pt-20 pb-3 lg:pb-6'>Who Am I?</h2>
                    <div className='flex flex-col-reverse md:flex-row items-center justify-center md:justify-start'>
                        <ul className='container flex flex-col pb-12 w-full md:w-1/2 gap-4 md:gap-2'>
                            {myDescriptions.map((description, index) => {
                                return (
                                    <li key={`description-${index}`} className={`text-xl`}>{description}</li>
                                )
                            })}
                        </ul>
                        <div className='w-full md:w-1/2 flex justify-center'>
                            <img className='h-96 lg:h-100 w-fit rounded-headshot my-12 dark:brightness-75' src={headshot} alt='Brooke Miller Headshot' />
                        </div>
                    </div>
                </section>
            </Element>
            <Element name="stack" >
                <section role="region" id="stack" className="bg-primary min-h-fit w-full px-10 flex flex-col items-center justify-center py-16
                dark:bg-secondary-dark
                md:py-20 md:pl-nav-width ">
                    <h2 className='text-5xl mb-10 md:mb-16'>My Stack</h2>
                    <div className="container grid grid-cols-2 gap-12 md:gap-16
                    lg:grid-cols-6
                    2xl:grid-cols-10">{stackLoop()}</div>
                </section>
            </Element>
            <Element name="projects" >
                <section role="region" id="projects" className="bg-light-waters bg-fixed bg-cover min-h-screen w-full md:pl-nav-width
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
                <section role="region" id="contact" className="bg-light-woods bg-right bg-fixed min-h-screen w-full
                                                               md:bg-light-wood md:bg-cover md:pl-nav-width
                                                               dark:bg-dark-wood dark:bg-left dark:md:bg-cover">
                    {Contact()}
                </section>
            </Element>
        </div>
    )
}

export default Landing