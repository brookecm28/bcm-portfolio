import React from 'react'
import { contact } from '../data.json'
import github from '../assets/icons/github'
import linkedin from '../assets/icons/linkedin'
import resume from '../assets/icons/resume'
import { Switch } from 'react-router'
import { Link } from 'react-router-dom'

function Contact() {
    function loopContactInfoWithIcons() {
        return contact.infoWithIcons.map(item => {
            let icon
            switch (item.name) {
                case "LinkedIn":
                    icon = linkedin
                    break
                case "GitHub":
                    icon = github
                    break
                case "Resume":
                    icon = resume
                    break
                default:
                    icon = ""
            }

            return (
                <a href={`${item.url}`} key={`contact-item-${item.name}`}>
                    <div className="h-48 w-48 rounded-full backdrop-brightness-50 flex flex-col justify-center items-center">
                        <h3 className='fixed top-4'>{item.name}</h3>
                        {icon}
                    </div>

                </a>
            )
        })
    }

    function loopContactInfoWithoutIcons() {
        return contact.infoWithoutIcons.map(item => {
            return (
                <a href={`${item.url}`} key={`contact-item-${item.name}`}>
                    <div className="h-48 w-48 rounded-full backdrop-brightness-50 flex flex-col justify-center items-center">
                        <h3 className='fixed top-4'>{item.name}</h3>
                        {item.display}
                    </div>

                </a>
            )
        })
    }

    return (
        <div>
            <div>
                <h2>Find Me at the Following:</h2>
                <div className='flex justify-center items-center gap-8'>{loopContactInfoWithIcons()}</div>
                <div className='flex justify-center items-center gap-12'>{loopContactInfoWithoutIcons()}</div>
            </div>
        </div>
    )
}

export default Contact