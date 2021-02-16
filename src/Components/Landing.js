import React from 'react'
import headshot from '../assets/Headshot2.jpg'

function Landing() {
    return (
        <div className='landing'>
            <div className='titles'>
                <p className='line-title'>who am I?</p>
            </div>
            <div className='who'>
                <div className='list'>
                    <li>full stack engineer</li>
                    <li>budding UI/UX enthusiast</li>
                    <li>DevMountain graduate</li>
                    <li>thunderstorm lover</li>
                    <li>ready to tackle life's challenges</li>
                </div>
                <img className='headshot' src={headshot} />
            </div>
            <div className='titles'>
                <p className='line-title'>my stack:</p>
            </div>
            
            <div className='stack-container'>
                <div className='stack'>
                    <p className='stack-list'>HTML</p>
                    <p className='stack-list'>|</p>
                    <p className='stack-list'>CSS</p>
                    <p className='stack-list'>|</p>
                    <p className='stack-list'>JSS</p>
                    <p className='stack-list'>|</p>
                    <p className='stack-list'>SASS/SCSS</p>
                    <p className='stack-list'>|</p>
                    <p className='stack-list'>Javascript</p>
                    <p className='stack-list'>|</p>
                    <p className='stack-list'>React</p>
                    <p className='stack-list'>|</p>
                    <p className='stack-list'>Redux</p>
                </div>
                <div className='stack'>
                    <p className='stack-list'>Node.js</p>
                    <p className='stack-list'>|</p>
                    <p className='stack-list'>PostgreSQL</p>
                    <p className='stack-list'>|</p>
                    <p className='stack-list'>Typescript</p>
                    <p className='stack-list'>|</p>
                    <p className='stack-list'>Figma</p>
                    <p className='stack-list'>|</p>
                    <p className='stack-list'>Nodemailer.js</p>
                </div>
        </div>
                   
            
        </div>
    )
}

export default Landing