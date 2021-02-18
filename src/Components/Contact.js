import React from 'react'

function Contact() {
    return (
        <div className='contact'>
            <div>
                <div className='project-title'>Find me at the following:</div>
                <div className='info-links'>
                    <p><a className='project-link' href='https://www.linkedin.com/in/brooke-miller-95a08479' target='_blank' rel='noopener noreferrer'>LinkedIn</a></p>
                    <p className='project-link'>|</p>
                    <p><a className='project-link' href='https://github.com/brookecm28' target='_blank' rel='noopener noreferrer'>GitHub</a></p>
                    <p className='project-link'>|</p>
                    <p><a className='project-link' href='https://drive.google.com/file/d/1AmSyP1Mkzj3n6FjnzLiLLTWV9zuPI2Md/view?usp=sharing' target='_blank' rel='noopener noreferrer'>Resume</a></p>
                </div>
                <div className='contact-info project-title'>Email:</div>
                <div className='contact-links'>
                    <p className='project-link'>brooke.miller.dev@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default Contact