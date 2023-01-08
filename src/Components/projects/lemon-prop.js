import {projectsHeader, projectDescriptions, projectsButtons, projectsCredentials} from "./projects-mixin";

function LemonProp() {
    const key = 'lemonProp'

    return (
        <div
            className='flex flex-col items-center bg-primary min-h-screen min-w-full text-secondary-dark
            dark:bg-secondary-dark dark:text-primary'>
            {projectsHeader(key)}
            {projectsButtons(key)}
            {projectDescriptions(key)}
            {projectsCredentials(key, 'basicCredentials')}
            {projectsCredentials(key, 'adminCredentials')}
        </div>
    )
}

export default LemonProp