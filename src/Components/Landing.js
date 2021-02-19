import React from 'react'
import headshot from '../assets/Headshot2.jpg'

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
            
            <div className='stack-container'>
                <div className='stack'>
                    <div className='stack-sub'>
                        <p className='stack-list'>HTML</p>
                        <p className='stack-list line'>|</p>
                        <p className='stack-list'>CSS</p>
                        <p className='stack-list line'>|</p>
                        <p className='stack-list'>JSS</p>
                        <p className='stack-list line'>|</p>
                        <p className='stack-list'>SASS/SCSS</p>
                        <p className='stack-list line last'>|</p>
                    </div>
                    <div className='stack-sub'>
                        <p className='stack-list'>Javascript</p>
                        <p className='stack-list line'>|</p>
                        <p className='stack-list'>React</p>
                        <p className='stack-list line'>|</p>
                        <p className='stack-list'>Redux</p>
                        <p className='stack-list line'>|</p>
                        <p className='stack-list'>Node.js</p>
                    </div>
                </div>
                <div className='stack'>
                    <div className='stack-sub'>
                        <p className='stack-list'>PostgreSQL</p>
                        <p className='stack-list line'>|</p>
                        <p className='stack-list'>Typescript</p>
                        <p className='stack-list line'>|</p>
                        <p className='stack-list'>Nodemailer.js</p>
                        <p className='stack-list line last'>|</p>
                    </div>
                    <div className='stack-sub'>
                        <p className='stack-list'>Figma</p>
                        <p className='stack-list line'>|</p>
                        <p className='stack-list'>Excalidraw</p>
                        <p className='stack-list line'>|</p>
                        <p className='stack-list'>Visual Studio Code</p>
                    </div>
                </div>
        </div>
                   
            
        </div>
    )
}

export default Landing