import React from "react";
import {projects} from '../../data.json'

export function projectsHeader(key) {
    const data = projects[key]

    return (
        <div className='container mt-8'>
            <h1 className='text-5xl'> {data.displayName}</h1>
            <br/>
            <h3 className='text-2xl'>-{data.tagline}-</h3>
        </div>
    )
}

export function projectsButtons(key) {
    const data = projects[key]

    return (
        <div className='flex mt-16 gap-12'>
            <a href={data.source} target='_blank' rel='noopener noreferrer'
               className='bg-secondary-grey dark:bg-primary text-primary dark:text-secondary-dark h-12 w-48
                              hover:bg-secondary-dark hover:dark:text-secondary-dark text-xl flex items-center justify-center'>
                Visit Site
            </a>
            <a href={data.gitHub} target='_blank' rel='noopener noreferrer'
               className='bg-secondary-grey dark:bg-primary text-primary dark:text-secondary-dark h-12 w-48
               text-xl flex items-center justify-center
               hover:bg-secondary-dark hover:dark:text-secondary-dark'>
                 View Code
            </a>
        </div>
    )
}

export function projectDescriptions(key) {
    const data = projects[key]

    return (
    <div className='container'>
        <ul>
            {data.descriptions.map((description, index) => {
                return (
                    <li key={'rich-recipes-description-' + index}>
                        {description}
                    </li>
                )}
            )}
        </ul>
    </div>
)
}

export function projectsCredentials(key, type) {
    const data = projects[key]

    return (
        <div>
            <div>Demo login credentials</div>
            <p>Username: {data[type].username}</p>
            <p>Password: {data[type].password}</p>
        </div>
    )
}


