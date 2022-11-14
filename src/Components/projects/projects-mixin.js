import React from "react";
import { projects } from '../../data.json'

export function projectsHeader(key) {
    const data = projects[key]

    return (
        <div className='container mt-16 md:mt-8'>
            <h1 className='text-6xl px-8'> {data.displayName}</h1>
            <br />
            <h3 className='text-2xl px-5'>{data.tagline}</h3>
        </div>
    )
}

export function projectsButtons(key, theme) {
    const data = projects[key]

    let disabled = false

    if (key === 'bcmPortfolio') {
        disabled = true
    }

    return (
        <div className='flex flex-col
                        md:flex-row mt-12 md:mt-16 gap-8 md:gap-12'>
            <a href={data.source} target='_blank' rel='noopener noreferrer'
                className={`${disabled && 'pointer-events-none'} bg-secondary-light text-secondary-dark h-12 w-48 text-xl flex items-center justify-center
               dark:bg-secondary-grey dark:text-primary
               hover:bg-secondary-grey hover:text-primary
               hover:dark:bg-secondary-light hover:dark:text-secondary-dark`}>
                Visit Site
            </a>
            <a href={data.gitHub} target='_blank' rel='noopener noreferrer'
                className='bg-secondary-light text-secondary-dark h-12 w-48 text-xl flex items-center justify-center
               dark:bg-secondary-grey dark:text-primary
               hover:bg-secondary-grey hover:text-primary
               hover:dark:bg-secondary-light hover:dark:text-secondary-dark'>
                View Code
            </a>
        </div>
    )
}

export function projectDescriptions(key) {
    const data = projects[key]

    return (
        <div className='container flex items-center flex-col mb-4 md:mb-12'>
            <h2 className='text-4xl mt-12 mb-6'>Details</h2>
            <div className='px-6 md:p-6 bg-primary w-7/12 border-2 border-secondary-dark
          dark:bg-secondary-dark dark:border-primary'>
                <div className='grid grid-cols-1 gap-0.5 bg-secondary-dark
                            md:grid-rows-2 md:grid-cols-2 md:grid-flow-col
                            dark:bg-primary'>
                    {data.descriptions.map((description, index) => {
                        return (
                            <div key={'rich-recipes-description-' + index}
                                className='p-4 flex justify-center items-center w-full h-full align-middle bg-primary
                             dark:bg-secondary-dark'>
                                {description}
                            </div>
                        )
                    }
                    )}
                </div>

            </div>

        </div>
    )
}

export function projectsCredentials(key, type) {
    const data = projects[key]
    let credentialType = 'User'

    if (type === 'adminCredentials') {
        credentialType = 'Admin'
    }

    return (
        <div className='container my-4 px-8
                        md:px-0 w-11/12 md:w-1/3'>
            <h3 className='text-3xl bg-secondary-light text-secondary-dark
            dark:bg-secondary-grey dark:text-primary p-2
            md:text-2xl md:p-0'>
                Demo {credentialType} Login Credentials
            </h3>
            <div className='text-xl py-4 border-x border-b border-secondary-grey'>
                <p className='pb-2'>Username: {data[type].username}</p>
                <p>Password: {data[type].password}</p>
            </div>
        </div>
    )
}


