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
                <div>
                    <h3>{projects[key].displayName}</h3>
                    <p className=''>{projects[key].tagline}</p>
                </div>
            )
        }
        return htmlForReturn
    }

    return (
        <div>
            <div>
                <div>{loopProjects()}</div>
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