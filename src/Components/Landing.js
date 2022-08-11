import React from 'react'
import headshot from '../assets/Headshot2.jpg'
import { myStack } from '../data.json'

function Landing() {
    return (
        <div className='landing'>
            <div className='titles top-title'>
                <p className='line-title '>Who Am I?</p>
            </div>
            <div className='who'>
                <div className='list'>
                    <li>Full Stack Software Engineer</li>
                    <li>Budding UI/UX Enthusiast</li>
                    <li>DevMountain Graduate</li>
                    <li>Agile Learner</li>
                    <li>Detail-Oriented Organizer</li>
                    <li>Thunderstorm Lover</li>
                </div>
                <img className='headshot' src={headshot} />
            </div>
            <div className='titles'>
                <p className='line-title'>My Stack:</p>
            </div>

            <div>{myStack.join(', ')}</div>

        </div>
    )
}

export default Landing