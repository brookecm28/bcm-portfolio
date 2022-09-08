import React from 'react'
import {contact} from '../data.json'

function Contact() {
    function loopContactInfo() {
        let iconPath
        return contact.map(item => {
            if (item.iconPath) {
                iconPath = item.iconPath
            }
            return (
                <div className="h-48 w-48 rounded-full backdrop-brightness-50">
                    <frame src={iconPath}/>
                    <a href={`${item.url}`}>{item.name}</a>
                </div>
            )
        })
    }

    return (
        <div>
            <div>
                <h2>Find Me at the Following:</h2>
                <div>
                    <p><a href='https://www.linkedin.com/in/brooke-miller-95a08479' target='_blank' rel='noopener noreferrer'>LinkedIn</a></p>

                    <p><a href='https://github.com/brookecm28' target='_blank' rel='noopener noreferrer'>GitHub</a></p>

                    <p><a href='https://drive.google.com/file/d/1AmSyP1Mkzj3n6FjnzLiLLTWV9zuPI2Md/view?usp=sharing' target='_blank' rel='noopener noreferrer'>Resume</a></p>
                </div>
                <div>Email:</div>
                <div>
                    <a href='mailto:brooke.miller.dev@gmail.com'>brooke.miller.dev@gmail.com</a>
                </div>
                {loopContactInfo()}
            </div>
        </div>
    )
}

export default Contact