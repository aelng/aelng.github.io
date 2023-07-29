import React, {useState} from 'react'
import './About.scss'

const Topnav = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
      setNav(!nav);
    }
  return ( // FIX TOP LEFT IMAGE PADDING WHEN YOU FIGURE OUT HOW
    <div>
      <a href="#main"> 
          <div className="mt-2.5 ml-2.5 bg-[url('https://i.imgur.com/YfYIYG7.png')] bg-cover w-10 h-10 z-[99] hover:bg-[url('https://i.imgur.com/xjEy4BQ.png')]"/>
      </a>
      <div className='md:block hidden fixed top-0 right-0 z-10'>
        <div className='flex flex-row'>
          <a href="#projects" className='rounded-full text-[#F38B30] bg-[#960000] shadow-lg m-2 p-4 cursor-pointer hover:scale-110 ease-in duartion-300'>
            <p>projects</p>
          </a>
          <a href="https://drive.google.com/file/d/1z4_abk_BFcHcqMV6y_90gepq3XknTGzk/view?usp=sharing" rel = 'noreferrer' target = '_blank' className='rounded-full text-[#F38B30] bg-[#960000] shadow-lg m-2 p-4 cursor-pointer hover:scale-110 ease-in duartion-300'>
            <p>resume</p>
          </a>
          <a href="https://github.com/aelng" rel = 'noreferrer' target = '_blank' className='rounded-full text-[#F38B30] bg-[#960000] shadow-lg m-2 p-4 cursor-pointer hover:scale-110 ease-in duartion-300'>
            <p>github</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Topnav