import { projectsHeader, projectDescriptions, projectsButtons, projectsCredentials } from "./projects-mixin";

function BcmPortfolio() {
    const key = 'bcmPortfolio'

    return (
        <div
            className='flex flex-col items-center bg-primary min-h-screen min-w-full text-secondary-dark
            dark:bg-secondary-dark dark:text-primary'>
            {projectsHeader(key)}
            {projectsButtons(key)}
            {projectDescriptions(key)}
            {projectsCredentials(key, "basicCredentials")}
        </div>
    )
}

export default BcmPortfolio