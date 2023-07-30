import { useState } from 'react'
import Particle from './components/Particle'
import Topnav from './components/Topnav'
import About from './components/About'
import Projects from './components/Projects'
import './components/About.scss'

export default function App() {

  return (
    <>
      <Particle/>
      <Topnav/>
      <About/>
      <Projects/>
      <footer className='foot'>
        <p>Copyright @ 2023: Ali Elnagmi</p>

        <p>
          <p>Made with React and Tailwind</p>
        </p>
      </footer>
    </>
  )
}
