import React from 'react'
import {projectsHeader, projectDescriptions, projectsButtons, projectsCredentials} from "./projects-mixin";

function BcmPortfolio()  {
    const key = 'bcmPortfolio'

    return (
        <div
            className='flex flex-col items-center bg-primary dark:bg-secondary-dark min-h-screen min-w-full text-secondary-dark dark:text-primary'>
            {projectsHeader(key)}
            {projectsButtons(key)}
            {projectDescriptions(key)}
        </div>
    )
}

export default BcmPortfolio