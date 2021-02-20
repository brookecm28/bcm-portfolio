import React from 'react'
import lobster from '../assets/blue-lobster-logo.png'
import lemon from '../assets/lemon_prop.png'

function Projects() {
    return (
        <div className='projects'>
            <div className='project-group'>
                <div className='title-group'>
                    <p className='project-title'>Rich Recipes</p>
                    <img className='logo' src={lobster}/>
                </div>
                <div className='info-links'>
                    <p ><a className='project-link'href='https://rich-recipes.com' target='_blank' rel='noopener noreferrer'>https://rich-recipes.com</a></p>
                    <p className='project-link'> | </p>
                    <p><a className='project-link' href='https://github.com/brookecm28/rich-recipes' target='_blank' rel='noopener noreferrer'>GitHub</a></p>
                </div>
                <div className='project-list'>
                	<li>Electronic storage and management system for recipes</li>
                	<li>Built for anyone, the user can navigate through their recipes in a list, view individual recipes, and edit their recipes</li>
                	<li>Anyone can register for an account and will receive a welcome email upon doing so</li>
                    <li>Dummy account login</li>
                    <li className='indent'>U: lulu@lol.com</li>
                    <li className='indent'>P: purple</li>
                </div>
            </div>
            <div className='project-group'>
                <div className='title-group'>
                    <p className='project-title'>LemonProp Management</p>
                    <img className='logo' src={lemon} />
                </div>
                <div className='info-links'>
                    <p ><a className='project-link' href='https://lemonprop.com' target='_blank' rel='noopener noreferrer'>https://lemonprop.com</a></p>
                    <p className='project-link'> | </p>
                    <p><a className='project-link' href='https://github.com/Lemon-Prop-Management/lemon-prop' target='_blank' rel='noopener noreferrer'>GitHub</a></p>
                </div>
                <div className='project-list'>
                	<li>Property management website for making payments and submitting maintenance requests as a tenant</li>
                	<li>Utilized for tracking tenant activity as a manager</li>
                	<li>Conditional rendering determines what gets displayed and is dependent upon whether the user is a tenant or manager</li>
                    <div className='dummy-acct'>
                        <div className='dummy-sub'>
                            <li>Dummy tenant account login</li>
                            <li className='indent'>U: pika@pika.com</li>
                            <li className='indent'>P: Michael</li>
                        </div>
                        <div className='dummy-sub dummy-right'>
                            <li>Dummy manager account login</li>
                            <li className='indent'>U: manager@manager.com</li>
                            <li className='indent'>P: manager</li>
                        </div>
                    </div>
                </div>
            </div>
            <div className='project-group'>
                <p className='project-title'>Portfolio Website</p>
                <div className='info-links larger-link'>
                    <p className='project-link'>https://brookemillerdev.com</p>
                    <p className='project-link'> | </p>
                    <p><a className='project-link' href='https://github.com/brookecm28/bcm-portfolio' target='_blank' rel='noopener noreferrer'>GitHub</a></p>
                </div>
                <div className='project-list'>
                	<li>Portfolio website built from the ground up with an emphasis on design and no template</li>
                	<li>Responsive design built for both mobile and desktop viewing</li>
                	<li className='bottom-sub'>Continued education of new features while building</li>
                </div>
            </div>
        </div>
    )
}

export default Projects