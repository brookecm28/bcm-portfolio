import React from 'react'
import {projectsHeader, projectDescriptions, projectsButtons, projectsCredentials} from "./projects-mixin";

function RichRecipes() {
    const key = 'richRecipes'

    return (
        <div>
            {projectsHeader(key)}
            {projectsButtons(key)}
            {projectDescriptions(key)}
            {projectsCredentials(key, 'basicCredentials')}
        </div>
    )
}

export default RichRecipes