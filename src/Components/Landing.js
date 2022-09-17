import React from 'react'
import headshot from '../assets/Headshot2.jpg'
import { myStack, myDescriptions } from '../data.json'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'

function Landing() {

    function stackLoop() {
        if (myStack) {
            const myStackAsArray = Object.keys(myStack)
            return myStackAsArray.map(stackArea => {
                return (
                    <div className=' bg-gradient-to-br from-secondary-light via-secondary-dark to-secondary-light
                    hover:from-secondary-dark hover:via-secondary-light hover:to-secondary-dark
                    border-primary border-2 rounded-3xl transition-color duration-500' key={`${stackArea}-stack`}>
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
            <section role="region" id="home" className="bg-light-landing dark:bg-dark-landing bg-fixed bg-center bg-no-repeat
        bg-cover flex justify-center flex-col min-h-screen w-full pl-nav-width">
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
            <section role="region" id="about" className="bg-primary dark:bg-secondary-dark bg-fixed bg-cover justify-center h-screen w-full pl-nav-width">
                <h2>My Stack:</h2>
                <div className="container grid grid-cols-5 gap-20">{stackLoop()}</div>
            </section>
            <section role="region" id="about" className="bg-light-waters dark:bg-dark-waters bg-fixed bg-cover justify-center min-h-screen w-full pl-nav-width">
                {Projects()}
            </section>
            <section role="region" id="about" className="bg-primary dark:bg-secondary-dark bg-fixed bg-cover justify-center min-h-screen w-full pl-nav-width">
                {About()}
            </section>
     
            <section role="region" id="about" className="bg-light-wood dark:bg-dark-wood bg-cover bg-fixed justify-center min-h-screen w-full pl-nav-width">
                {Contact()}
            </section>
        </div>

    )
}

export default Landing