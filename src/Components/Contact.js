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
                <a href={`${item.url}`} key={`contact-item-${item.name}`} target='_blank' rel='noopener noreferrer'>
                    <div className="h-60 w-60 rounded-full backdrop-brightness-110 flex flex-col justify-center items-center
                    dark:backdrop-brightness-50
                    md:h-72 md:w-72">
                        <h3 className='fixed top-10 text-3xl'>{item.name}</h3>
                        {icon}
                    </div>

                </a>
            )
        })
    }

    function loopContactInfoWithoutIcons() {

        return contact.infoWithoutIcons.map(item => {
            let emailDisplay = ''
            if (item.display.includes('@')) {
                const display = item.display.split('@')
                emailDisplay = (
                    <p className='pt-10 text-lg md:text-xl'>{display[0]}<br className='md:hidden'/>@{display[1]}</p>
                )
            }
            return (
                <a href={`${item.url}`} key={`contact-item-${item.name}`}>
                    <div className="h-60 w-60 rounded-full backdrop-brightness-110 flex flex-col justify-center items-center
                    dark:backdrop-brightness-50
                    lg:h-64 lg:w-64
                    2xl:h-72 2xl:w-72">
                        <h3 className='fixed top-10 text-3xl'>{item.name}</h3>
                        {emailDisplay ? emailDisplay : <p className='pt-10 text-lg md:text-xl'>{item.display}</p>}
                    </div>

                </a>
            )
        })
    }

    return (
        <div className='pt-16 md:pt-16 pb-6'>
                <h2 className='text-5xl pb-6
                 lg:pb-12lg:text-6xl
                2xl:pt-20 2xl:pb-20'>
                    Contact Me
                </h2>
                <div className='flex flex-col-reverse md:flex-col'>
                    <div className='flex flex-col flex-col-reverse justify-center items-center gap-6
                                md:flex-row md:gap-8'>
                        {loopContactInfoWithIcons()}
                    </div>
                    <div className='flex flex-col justify-center items-center gap-6 mb-6
                                md:flex-row md:gap-12 md:mb-0'>
                        {loopContactInfoWithoutIcons()}
                    </div>
                </div>

        </div>
    )
}

export default Contact