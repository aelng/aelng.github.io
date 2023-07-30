import React from 'react'
import './Projects.scss'

const ProjectItem = ({img, title, desc, link}) => {
  return (
    <a href={link}  rel = 'noreferrer' target = '_blank' className='item'>
    <div className='w-auto h-auto relative flex items-center justify-center shadow-xl shadow-[#ad0202] rounded-xl group hover:bg-gradient-to-r from-[#ad0202] to-[#960000]'>
        <img src={img} alt="/" className='w-80 h-80 rounded-xl group-hover:opacity-10'/>
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h3 className='text-2xl font-bold text-white tracking-wider text-center'>
                <h1 className='text-[#F38B30] text-5xl'>{title}</h1>
                <p>{desc}</p>
            </h3>
            
        </div>
    </div>
    </a>
  )
}

export default ProjectItem