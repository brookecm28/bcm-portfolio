import React from 'react'
import lobster from '../assets/icons/blue-lobster-logo.png'
import lemon from '../assets/icons/lemon_prop.png'
import { projects } from '../data.json'

function Projects() {
    function loopProjects() {
        const htmlForReturn = []
        for (const key in projects) {
            console.log('key', key)
            htmlForReturn.push(
                <div className='flex justify-center border-2 dark:border-secondary-light w-2/3'>
                    <div className='w-1/2 border-r-2 dark:border-r-secondary-light'>
                        <h3>{projects[key].displayName}</h3>
                        <p className='italic'>{projects[key].tagline}</p>
                    </div>
                    <div className='w-1/2'>
                        <button href={projects[key].source} target='_blank' rel='noopener noreferrer'
                            className='border-2 border-secondary-dark dark:border-primary w-48 h-12 hover:dark:bg-primary hover:dark:text-secondary-dark'>
                            Visit Site
                        </button>
                        <button className='border-2 border-secondary-dark dark:border-primary w-48 h-12 hover:dark:bg-primary hover:dark:text-secondary-dark'>
                            More Details
                        </button>
                    </div>
                </div>
            )
        }
        return htmlForReturn
    }

    // still need to figure out how to display the logos, which are all in the icons folder
    return (
        <div>
            <div>
                <div className='flex flex-col gap-12 items-center justify-center'>{loopProjects()}</div>
                <div className='mt-12'>
                    <p>Rich Recipes</p>
                    <img className='logo' src={lobster} />
                </div>
            </div>
            <div>
                <div>
                    <p>LemonProp Management</p>
                    <img className='logo' src={lemon} />
                </div>
            </div>
            <p><a href='https://github.com/brookecm28/bcm-portfolio' target='_blank' rel='noopener noreferrer'>GitHub</a></p>

        </div>

    )
}

export default Projects