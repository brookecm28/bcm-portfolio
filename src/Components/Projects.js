import React from 'react'

function Projects() {
    return (
        <div className='projects'>
            <div>
                <p className='project-title'>Rich Recipes</p>
                <p ><a className='project-link'href='https://rich-recipes.com' target='_blank' rel='noopener noreferrer'>https://rich-recipes.com</a></p>
                <p>description paragraph description paragraph description paragraph description paragraph description paragraph description paragraph description paragraph </p>
            </div>
            <div>
                <p className='project-title'>LemonProp Management</p>
                <p ><a className='project-link' href='https://lemonprop.com' target='_blank' rel='noopener noreferrer'>https://lemonprop.com</a></p>
                <p>description paragraph description paragraph description paragraph description paragraph description paragraph description paragraph description paragraph </p>
            </div>
            <div>
                <p className='project-title'>Portfolio Website</p>
                <p className='project-link'>https://brookemillerdev.com</p>
                <p>description paragraph description paragraph description paragraph description paragraph description paragraph description paragraph description paragraph </p>
            </div>
        </div>
    )
}

export default Projects