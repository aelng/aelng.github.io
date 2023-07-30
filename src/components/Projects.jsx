import React from 'react'
import './Projects.scss'
import ProjectItem from './ProjectItem'

const data = [
    {
        link: 'https://www.rythmhacks.ca/',
        img: 'https://i.imgur.com/GBwJO91.png',
        title: 'RythmHacks',
        desc: 'RythmHacks is a high school hackathon based in Waterloo, Ontario. In person at the Accelerator Centre, with over 100 attendees in an amazing weekend filled with fun, innovation, and of course free food!'
    },

    {
        link: 'https://top.gg/bot/601205271578017813',
        img: 'https://i.imgur.com/PbgyjWA.png',
        title: 'BedStats',
        desc: 
        'If you need quick Bedwars stats and youre too lazy to go to plancke.io, this bot is for you. It will give you stats for all modes ranging from solos, duos, trios, quads and overall stats. Also, it can give you roles based on your in-game prestige.'
    },

    {
        link: 'https://devpost.com/software/looklock-fwemi2',
        img: 'https://i.imgur.com/4JYRxgi.png',
        title: 'Look Lock',
        desc: 
        'LookLock is a focusing tool that helps the user focus on the task in front of them for longer periods of time. The application tracks the persons eyes and reminds them with a beep if they are out of focus for over a minute.'
    },

    {
        link: 'https://github.com/aelng/aelng.github.io',
        img: 'https://i.imgur.com/jhSoMHE.png',
        title: 'My website',
        desc: 
        'The current website that you are on, check out the source code!'
    },
]

const Projects = () => {
  return (
    <div id='projects'>
        <div className='title'><h1 className='rounded-full text-[#F38B30] text-8xl'>Projects</h1></div>
        <div className='grid sm:grid-cols-2'>
        {data.map((item, idx)=> (
            <ProjectItem key={idx} title={item.title} img={item.img} desc={item.desc} link={item.link}/>
        ))}
        </div>
    </div>
  )
}

export default Projects