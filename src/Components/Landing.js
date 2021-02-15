import React from 'react'
import headshot from '../assets/Headshot2.jpg'

function Landing() {
    return (
        <div className='landing'>
            <div className='titles'>
                <p>who am I?</p>
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
                <p>my stack:</p>
            </div>
            <div className='stack'>
                <p>HTML</p>
                <p>|</p>
                <p>CSS</p>
                <p>|</p>
                <p>JSS</p>
                <p>|</p>
                <p>SASS/SCSS</p>
                <p>|</p>
                <p>Javascript</p>
                <p>|</p>
                <p>React</p>
                <p>|</p>
                <p>Redux</p>
            </div>
            <div className='stack'>
                <p>Node.js</p>
                <p>|</p>
                <p>PostgreSQL</p>
                <p>|</p>
                <p>Typescript</p>
                <p>|</p>
                <p>Figma</p>
                <p>|</p>
                <p>Nodemailer.js</p>
            </div>              
            
        </div>
    )
}

export default Landing