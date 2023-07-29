import React from 'react'
import {TypeAnimation} from 'react-type-animation'
import './About.scss'


const About = () => {
  return (
    <div>
      <div className="container">
        <div className='about'>
          <h1 className='rounded-full text-[#F38B30] text-4xl'>I'm</h1>
          <h2 className='rounded-full text-[#F38B30] text-7xl mt-8'>ALI 
                <TypeAnimation
                sequence={[
                // Same substring at the start will only be typed out once, initially
                ' ELNAGMI',
                1000, // wait 1s before replacing "Mice" with "Hamsters" test
                ' ELN',
                1000,
                ' ELNAGMI :D',
                1000,
                ]}
                wrapper="span"
                speed={25}
                style={{ fontSize: '1em'}}
                repeat={Infinity}
            /></h2>
        </div>
        <div className='about-right'>
        <h1 className='rounded-full text-[#F38B30] text-4xl mb-4'>Where you can find me</h1>
          <h1>
          <i className='rounded-full text-[#F38B30] text-2xl'>Github: </i>
          <a href = 'https://github.com/aelng' rel = 'noreferrer' target = '_blank' className='a'>aelng</a>
          </h1>
          
          <h1>
          <i className='rounded-full text-[#F38B30] text-2xl'>LinkedIn: </i>
          <a href = 'https://www.linkedin.com/in/ali-elnagmi/' rel = 'noreferrer' target = '_blank' className='a'>Ali Elnagmi</a></h1>
          <h1>
          <i className='rounded-full text-[#F38B30] text-2xl'>Email: </i>
          <a href = 'mailto:elnagmiali@gmail.com' rel = 'noreferrer' target = '_blank' className='a'>elnagmiali@gmail.com</a></h1> 
        </div>
      </div>
    </div>
  )
}

export default About