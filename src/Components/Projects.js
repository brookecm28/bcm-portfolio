import React from 'react'
import lobster from '../assets/icons/richRecipes.png'
import lemon from '../assets/icons/lemonProp.png'
import imp from '../assets/icons/inventoryManager.png'
import portfolio from '../assets/icons/portfolio.png'
import { projects } from '../data.json'
import {Link} from "react-router-dom";

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
                <div key={`projects-card-${key}`} className='flex justify-center h-64 rounded-3xl overflow-hidden'>
                    <div className='px-12 w-7/12 flex flex-col justify-around items-center bg-secondary-grey text-primary'>
                        <h3 className='text-3xl'>{projects[key].displayName}</h3>
                        <p className='italic'>{projects[key].tagline}</p>
                        <img src={icon} alt={key} className="max-h-icon max-w-icon pb-4" />
                    </div>
                    <div className='w-5/12 flex flex-col justify-center gap-8 items-center bg-primary
                                    dark:bg-secondary-dark'>
                        <a href={projects[key].source} target='_blank' rel='noopener noreferrer'
                            className='border-2 border-secondary-dark h-12 w-48 flex items-center justify-center
                            dark:border-primary
                            hover:bg-secondary-dark hover:text-primary hover:border-0
                            hover:dark:bg-primary hover:dark:text-secondary-dark'>
                            Visit Site
                        </a>
                        <Link to={`/projects/${projects[key].slug}`}
                            className='border-2 border-secondary-dark h-12 w-48 flex items-center justify-center
                            dark:border-primary
                            hover:bg-secondary-dark hover:text-primary hover:border-0
                            hover:dark:bg-primary hover:dark:text-secondary-dark'>
                            More Details
                        </Link>
                    </div>
                </div>
            )
        }
        return htmlForReturn
    }

    return (
        <div className="pt-24 px-24">
            <div className='grid grid-cols-2 gap-12'>{loopProjects()}</div>
        </div>

    )
}

export default Projects