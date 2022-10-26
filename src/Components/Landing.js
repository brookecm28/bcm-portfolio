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
                    <div className=' bg-gradient-to-br border-2 rounded-3xl transition-color duration-500
                    from-secondary-grey via-primary to-secondary-grey border-secondary-dark
                    dark:from-secondary-grey dark:via-secondary-dark dark:to-secondary-grey dark:border-primary
                    hover:from-secondary-light hover:via-primary hover:to-secondary-light hover:cursor-default
                    hover:dark:from-secondary-light hover:dark:via-secondary-dark hover:dark:to-secondary-light
                   ' key={`${stackArea}-stack`}>
                        <h3 className='text-2xl underline'>{stackArea}</h3>
                        <div> {myStack[stackArea].map(stackItem => {
                            return (
                                <p key={`${stackArea}-${stackItem}`}>{stackItem}</p>
                            )
                        })}
                        </div>
                    </div>
                )
            })
        }
    }

    return (
        <div className='text-secondary-dark dark:text-primary'>
            <Element name="landing">
                <section role="region" id="landing" className="bg-light-landing dark:bg-dark-landing bg-fixed bg-center bg-no-repeat bg-cover flex justify-center flex-col min-h-screen w-full pl-nav-width">
                    <h2>Who Am I?</h2>
                    <div className='flex'>
                        <ul className='container flex flex-col'>
                            {myDescriptions.map((description, index) => {
                                return (
                                    <li key={`description-${index}`} className="">{description}</li>
                                )
                            })}
                        </ul>
                        <img className='headshot' src={headshot} alt='Brooke Miller Headshot' />
                    </div>
                </section>
            </Element>
            <Element name="stack" >
                <section role="region" id="stack" className="bg-primary dark:bg-secondary-dark bg-fixed bg-cover justify-center min-h-fit w-full pl-nav-width full flex-col items-center justify-center py-16">
                    <h2 className='text-4xl mb-16'>My Stack:</h2>
                    <div className="container grid grid-cols-5 gap-20">{stackLoop()}</div>
                </section>
            </Element>
            <Element name="projects" >
                <section role="region" id="projects" className="bg-baby-blue dark:bg-dark-waters bg-fixed bg-cover justify-center min-h-screen w-full pl-nav-width">
                    {Projects()}
                </section>
            </Element>
            <Element name="about" >
                <section role="region" id="about" className="bg-primary dark:bg-secondary-dark bg-fixed bg-cover justify-center min-h-fit w-full pl-nav-width">
                    {About()}
                </section>
            </Element>
            <Element name="contact" >
                <section role="region" id="contact" className="bg-light-wood dark:bg-dark-wood bg-cover bg-fixed justify-center min-h-screen w-full pl-nav-width">
                    {Contact()}
                </section>
            </Element>
        </div>
    )
}

export default Landing