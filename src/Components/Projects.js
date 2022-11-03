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
                <div key={`projects-card-${key}`} className='flex flex-col justify-center max-h-mobile-project-card rounded-3xl overflow-hidden
                                                            md:flex-row md:h-64'>
                    <div className='px-12 pt-4 w-full md:w-7/12 flex flex-col justify-around items-center bg-secondary-grey text-primary'>
                        <h3 className='text-3xl'>{projects[key].displayName}</h3>
                        <p className='italic pb-4 md:pb-0'>{projects[key].tagline}</p>
                        <img src={icon} alt={key} className="max-h-icon max-w-icon pb-4" />
                    </div>
                    <div className='w-full flex flex-col justify-center gap-8 items-center bg-primary py-8
                                    dark:bg-secondary-dark md:w-5/12 '>
                        <a href={projects[key].source} target='_blank' rel='noopener noreferrer'
                            className='border-2 border-secondary-dark h-12 w-48 flex items-center justify-center
                            dark:border-primary
                            hover:bg-secondary-dark hover:text-primary hover:border-0
                            hover:dark:bg-primary hover:dark:text-secondary-dark'> m
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
        <div className="pt-16 px-10
                        md:pt-20 md:px-24">
            <h2 className='text-5xl mb-12'>Projects</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 pb-12'>{loopProjects()}</div>
        </div>

    )
}

export default Projects