import './App.css'
import AOS from 'aos/'
import 'aos/dist/aos.css'
import Hero from './Components/Hero/Hero'
import { useEffect } from 'react'
import Skills from './Components/skills/Skills'
import Experience from './Components/experience/experience'
import Language from './Components/Language/Language'

function App() {
  useEffect(()=> {
    AOS.init({
      duration: 1000, 
    });
  },[]);


  return (
  <main className='bg-[#0d182e]'>
    <Hero></Hero>
    <Skills />
    <Experience />
    <Language />
    
  </main>
  )

}

export default App
