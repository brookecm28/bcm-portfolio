import React from 'react'
import lobster from '../assets/icons/richRecipes.png'
import lemon from '../assets/icons/lemonProp.png'
import { projects } from '../data.json'

function Projects() {
    function loopProjects() {
        const htmlForReturn = []
        for (const key in projects) {
            const logo = projects[key].logo || `../assets/icons/${key}`
            htmlForReturn.push(
                <div className='flex justify-center border-2 dark:border-secondary-light w-2/3 h-64'>
                    <div className='w-1/2 flex flex-col justify-around border-r-2 dark:border-r-secondary-light bg-secondary-light text-primary'>
                        <h3 className='text-2xl'>{projects[key].displayName}</h3>
                        <p className='italic'>{projects[key].tagline}</p>
                        <img src={logo} alt={key} />
                    </div>
                    <div className='w-1/2 flex flex-col justify-center gap-8 items-center bg-primary dark:bg-secondary-dark'>
                        <button role="button" href={projects[key].source} target='_blank' rel='noopener noreferrer'
                            className='border-2 border-secondary-dark dark:border-primary h-12 w-48 hover:dark:bg-primary hover:dark:text-secondary-dark'>
                            Visit Site
                        </button>
                        <button role="button" className='border-2 border-secondary-dark dark:border-primary h-12 w-48 hover:dark:bg-primary hover:dark:text-secondary-dark'>
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