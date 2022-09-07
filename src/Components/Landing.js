import React from 'react'
import headshot from '../assets/Headshot2.jpg'
import {myStack, myDescriptions} from '../data.json'

function Landing() {

    function stackLoop() {
        if (myStack) {
            const myStackAsArray = Object.keys(myStack)
            return myStackAsArray.map(stackArea => {
                return (
                    <div className=' bg-gradient-to-br from-primary via-blue-900 to-primary border-primary border-2 rounded-3xl' key={`${stackArea}-stack`}>
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
        <section role="region" className="bg-dark-palms bg-cover container flex justify-center flex-col h-screen w-screen"
       >
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