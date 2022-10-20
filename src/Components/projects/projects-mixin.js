import React from "react";
import {projects} from '../../data.json'

export function projectsHeader(key) {
    const data = projects[key]

    return (
        <div>
            <h1> {data.displayName}</h1>
            <h3>{data.tagline}</h3>
        </div>
    )
}

export function projectsButtons(key) {
    const data = projects[key]

    return (
        <div>
            <a href={data.source} target='_blank' rel='noopener noreferrer'
               className='border-2 border-secondary-dark dark:border-primary h-12 w-48 p-2 hover:dark:bg-primary hover:dark:text-secondary-dark'>
                Visit Site
            </a>
            <a href={data.gitHub} target='_blank' rel='noopener noreferrer'
               className='border-2 border-secondary-dark align-middle dark:border-primary h-12 w-48 p-2 hover:dark:bg-primary hover:dark:text-secondary-dark'>
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


