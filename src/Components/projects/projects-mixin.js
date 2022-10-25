import React from "react";
import {projects} from '../../data.json'

export function projectsHeader(key) {
    const data = projects[key]

    return (
        <div className='container mt-8'>
            <h1 className='text-6xl'> {data.displayName}</h1>
            <br/>
            <h3 className='text-2xl'>-{data.tagline}-</h3>
        </div>
    )
}

export function projectsButtons(key, theme) {
    const data = projects[key]

    return (
        <div className='flex mt-16 gap-12'>
            <a href={data.source} target='_blank' rel='noopener noreferrer'
               className='bg-secondary-grey dark:bg-primary h-12 w-48 text-xl flex items-center justify-center dark:text-secondary-dark
               hover:bg-secondary-dark hover:text-primary
               hover:dark:bg-secondary-grey hover:dark:text-primary text-primary'>
                Visit Site
            </a>
            <a href={data.gitHub} target='_blank' rel='noopener noreferrer'
               className='bg-secondary-grey dark:bg-primary h-12 w-48 text-xl flex items-center justify-center dark:text-secondary-dark
               hover:bg-secondary-dark hover:text-primary
               hover:dark:bg-secondary-grey hover:dark:text-primary text-primary'>
                 View Code
            </a>
        </div>
    )
}

export function projectDescriptions(key) {
    const data = projects[key]

    return (
    <div className='container'>
        <h2 className='text-4xl align-middle mt-12 mb-6'>Details</h2>
        <div className=''>
            <div className={'grid grid-rows-2 grid-flow-col gap-0.5 bg-secondary-dark dark:bg-primary'}>
                {data.descriptions.map((description, index) => {
                    return (
                        <div key={'rich-recipes-description-' + index} className='w-full h-full align-middle p-6 bg-primary dark:bg-secondary-dark'>
                            {description}
                        </div>
                    )}
                )}
            </div>

        </div>

    </div>
)
}

export function projectsCredentials(key, type) {
    const data = projects[key]
    let credentialType = 'User'

    if (type === 'adminCredentials'){
        credentialType = 'Admin'
    }

    return (
        <div className='container my-4'>
            <h3 className='text-2xl bg-secondary-grey text-primary'>Demo {credentialType} Login Credentials</h3>
            <div className='border-x border-b border-secondary-grey '>
                <p>Username: {data[type].username}</p>
                <p>Password: {data[type].password}</p>
            </div>
        </div>
    )
}


