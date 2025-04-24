import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import AboutMe from './Components/AboutMe/AboutMe'
import Skills from './Components/Skills/Skills'
import MyWorks from './Components/MyWorks/MyWorks'
import Contact from './Components/ContactSection/Contact'
import Footer from './Components/Footer/Footer'
import './App.css'

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        <Skills />
        <MyWorks />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App