import React from 'react'
import headshot from '../assets/Headshot2.jpg'
import {myStack, myDescriptions} from '../data.json'

function Landing() {

    function stackLoop() {
        if (myStack) {
            for (const stackArea in myStack) {
                console.log('area', stackArea)
                return (
                    <div key={`${stackArea}-stack`}>
                        <h3>{stackArea}</h3>
                        <div> {myStack[stackArea].map(stackItem => {
                            return (
                                <li key={`${stackArea}-${stackItem}`}>{stackItem}</li>
                            )
                        })}
                        </div>
                    </div>
                )
            }
        }
    }

    return (
        <section role="region" className='landing-top-section container flex justify-center flex-col'>
            <h2>Who Am I?</h2>
            <div className='flex'>
                <ul className='container flex flex-col'>
                    {myDescriptions.map((description, index) => {
                        return (
                            <li key={`description-${index}`} className="">{description}</li>
                        )
                    })}
                </ul>
                <img className='headshot' src={headshot} alt='Brooke Miller Headshot'/>
            </div>
            <h2>My Stack:</h2>
            {stackLoop()}

        </section>
    )
}

export default Landing