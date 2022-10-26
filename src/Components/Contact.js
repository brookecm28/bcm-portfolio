import React from 'react'
import { contact } from '../data.json'
import github from '../assets/icons/github'
import linkedin from '../assets/icons/linkedin'
import resume from '../assets/icons/resume'

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
                    <div className="h-72 w-72 rounded-full backdrop-brightness-110 flex flex-col justify-center items-center
                    dark:backdrop-brightness-50">
                        <h3 className='fixed top-10 text-3xl'>{item.name}</h3>
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
                    <div className="h-72 w-72 rounded-full backdrop-brightness-110 flex flex-col justify-center items-center
                    dark:backdrop-brightness-50">
                        <h3 className='fixed top-10 text-3xl'>{item.name}</h3>
                        <p className='text-xl'>{item.display}</p>
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