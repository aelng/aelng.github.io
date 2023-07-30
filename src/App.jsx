import { useState } from 'react'
import Particle from './components/Particle'
import Topnav from './components/Topnav'
import About from './components/About'
import Projects from './components/Projects'

export default function App() {

  return (
    <>
      <Particle/>
      <Topnav/>
      <About/>
      <Projects/>
    </>
  )
}
