import React from 'react'
import lobster from '../assets/icons/richRecipes.png'
import lemon from '../assets/icons/lemonProp.png'
import imp from '../assets/icons/inventoryManager.png'
import portfolio from '../assets/icons/portfolio.png'
import { projects } from '../data.json'

function Projects() {
    function loopProjects() {
        const htmlForReturn = []
        for (const key in projects) {
            let icon
            switch (key) {
                case "richRecipes":
                    icon = lobster
                    break
                case "lemonProp":
                    icon = lemon
                    break
                case "bcmPortfolio":
                    icon = portfolio
                    break
                case "inventoryManagerPro":
                    icon = imp
                    break
                default:
                    icon = ""
            }

            htmlForReturn.push(
                <div className='flex justify-center h-64 rounded-3xl overflow-hidden'>
                    <div className='px-12 w-7/12 flex flex-col justify-around items-center bg-secondary-grey text-primary'>
                        <h3 className='text-3xl'>{projects[key].displayName}</h3>
                        <p className='italic'>{projects[key].tagline}</p>
                        <img src={icon} alt={key} className="max-h-icon max-w-icon pb-4" />
                    </div>
                    <div className='w-5/12 flex flex-col justify-center gap-8 items-center bg-primary dark:bg-secondary-dark'>
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
        <div className="pt-24 px-24">
                <div className='grid grid-cols-2 gap-12'>{loopProjects()}</div>

        </div>

    )
}

export default Projects