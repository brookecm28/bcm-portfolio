import React from 'react'
import headshot from '../assets/Headshot2.jpg'
import { myStack, myDescriptions } from '../data.json'

function Landing() {
    return (
        <section role="region" className='landing-top-section container flex justify-center flex-col'>
            <h2>Who Am I?</h2>
            <div className='flex'>
                <ul className='container flex flex-col'>
                    {myDescriptions.map(description => {
                        return (
                            <li className="">{description}</li>
                        )
                    })}
                </ul>
                <img className='headshot' src={headshot} />
            </div>
            <h2>My Stack:</h2>
            <ul>
                {myStack.map(stackItem => {
                    return (
                        <li>{stackItem}</li>
                    )
                })}
            </ul>
        </section>
    )
}

export default Landing