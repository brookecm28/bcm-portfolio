import React from 'react'
import data from '../data.json'

function About() {
    return (
        <div className="w-full flex pb-14 flex-col items-center justify-center">
            <h2 className='text-4xl pt-16 mb-6'>About Me</h2>
            <div className='container  w-2/3'>
                {data.about.map(paragraph => <p className='text-secondary-dark mb-4'>{paragraph}</p>)}
            </div>
        </div>
    )
}

export default About