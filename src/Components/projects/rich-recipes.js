import React, {useEffect, useState} from 'react'
import {projectsHeader, projectDescriptions, projectsButtons, projectsCredentials} from "./projects-mixin";

function RichRecipes() {
    const key = 'richRecipes'
    const storedTheme = localStorage.getItem('theme')

    const [theme, setTheme] = useState(storedTheme)

    useEffect(() => {
        setTheme(storedTheme)
        console.log('stored', storedTheme)
    }, [storedTheme])


    return (
        <div className='flex flex-col items-center bg-primary dark:bg-secondary-dark min-h-screen min-w-full text-secondary-dark dark:text-primary'>
            {projectsHeader(key)}
            {projectsButtons(key, theme)}
            {projectDescriptions(key)}
            {projectsCredentials(key, 'basicCredentials')}
        </div>
    )
}

export default RichRecipes