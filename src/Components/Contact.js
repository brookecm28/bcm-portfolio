import React from 'react'

function Contact() {
    return (
        <div className='contact'>
            <div>
                <div className='project-title contact-title'>Find me at the following:</div>
                <div className='info-links contact-title'>
                    <p><a className='project-link' href='https://www.linkedin.com/in/brooke-miller-95a08479' target='_blank' rel='noopener noreferrer'>LinkedIn</a></p>
                    <p className='project-link separator'>|</p>
                    <p><a className='project-link' href='https://github.com/brookecm28' target='_blank' rel='noopener noreferrer'>GitHub</a></p>
                    <p className='project-link separator'>|</p>
                    <p><a className='project-link' href='https://drive.google.com/file/d/1AmSyP1Mkzj3n6FjnzLiLLTWV9zuPI2Md/view?usp=sharing' target='_blank' rel='noopener noreferrer'>Resume</a></p>
                </div>
                <div className='contact-info project-title contact-title'>Email:</div>
                <div className='contact-links'>
                    <a className='project-link' href='mailto:brooke.miller.dev@gmail.com'>brooke.miller.dev@gmail.com</a>
                </div>
            </div>
        </div>
    )
}

export default Contact