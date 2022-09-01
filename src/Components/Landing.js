import React from 'react'
import headshot from '../assets/Headshot2.jpg'
import {myStack, myDescriptions} from '../data.json'


function Landing() {

    function stackLoop() {
        if (myStack) {
            const myStackAsArray = Object.keys(myStack)
            return myStackAsArray.map(stackArea => {
                return (
                    <div className='bg-gray-500 border-[color:var(--primary)] border-2 rounded-3xl' key={`${stackArea}-stack`}>
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
            <div className="container grid grid-cols-5 gap-20">{stackLoop()}</div>
        </section>
    )
}

export default Landing