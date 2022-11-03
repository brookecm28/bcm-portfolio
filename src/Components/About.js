import React from 'react'
import data from '../data.json'

function About() {
    return (
        <div className="w-full flex pt-16 pb-14 flex-col items-center justify-center text-secondary-dark
                        dark:text-primary md:pt-20">
            <h2 className='text-5xl mb-0 md:mb-6'>About Me</h2>
            <div className='container w-2/3'>
                {data.about.map(paragraph => <p className='mt-12 md:mt-0 md:mb-4'>{paragraph}</p>)}
            </div>
        </div>
    )
}

export default About