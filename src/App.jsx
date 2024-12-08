import './App.css'
import AOS from 'aos/'
import 'aos/dist/aos.css'
import Hero from './Components/Hero/Hero'
import { useEffect } from 'react'
import Skills from './Components/skills/Skills'
import Experience from './Components/experience/experience'
import Language from './Components/Language/Language'
import Projects from './Components/Projects/Projects'
import Contact from './Contact/Contact'
import Footer from './Components/footer/Footer'
import SocialLinks from './Components/SocialLinks/SocialLinks'

function App() {
  useEffect(()=> {
    AOS.init({
      duration: 1000, 
    });
  },[]);


  return (
  <main className='bg-[#0d182e]'>
    <Hero></Hero>
    <SocialLinks />
    <Skills />
    <Experience />
    <Language />
    <Projects />
    <Contact />
    <Footer />
    
  </main>
  )

}

export default App
