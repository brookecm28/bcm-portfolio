import React from 'react'
import headshot from '../assets/Headshot2.jpg'
import { myStack, myDescriptions } from '../data.json'

function Landing() {
    return (
        <div>
            <div>
                <p>Who Am I?</p>
            </div>
            <div>
                <div>
                    {myDescriptions.map(description => {
                        return (
                            <li className="bg-stone-500">{description}</li>
                        )
                    })}
                </div>
                <img className='headshot' src={headshot} />
            </div>
            <div>
                <p>My Stack:</p>
            </div>
            <ul>
                {myStack.map(stackItem => {
                    return (
                        <li>{stackItem}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Landing