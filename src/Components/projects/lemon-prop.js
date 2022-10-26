import React, {useEffect, useState} from 'react'
import {projectsHeader, projectDescriptions, projectsButtons, projectsCredentials} from "./projects-mixin";

function LemonProp() {
    const key = 'lemonProp'

    return (
        <div
            className='flex flex-col items-center bg-primary dark:bg-secondary-dark min-h-screen min-w-full text-secondary-dark dark:text-primary'>
            {projectsHeader(key)}
            {projectsButtons(key)}
            {projectDescriptions(key)}
            {projectsCredentials(key, 'basicCredentials')}
            {projectsCredentials(key, 'adminCredentials')}
        </div>
    )
}

export default LemonProp