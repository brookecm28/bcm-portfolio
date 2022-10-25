import React, {useEffect, useState} from 'react'
import {projectsHeader, projectDescriptions, projectsButtons, projectsCredentials} from "./projects-mixin";

class BcmPortfolio extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        const key = 'bcmPortfolio'

        return (
            <div
                className='flex flex-col items-center bg-primary dark:bg-secondary-dark min-h-screen min-w-full text-secondary-dark dark:text-primary'>
                {projectsHeader(key)}
                {projectsButtons(key, this.props.theme)}
                {projectDescriptions(key)}
            </div>
        )
    }
}
export default BcmPortfolio