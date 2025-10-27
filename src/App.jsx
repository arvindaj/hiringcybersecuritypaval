import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/hero'
import Footer from './components/Footer'
import Faq from './components/Faq'
import Schedule from './components/Schedule'
import Cta from './components/Cta'


function App() {
  const [count, setCount] = useState(0)

  // 👇 Scroll to top on reload
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
    <Navbar/>
    <HeroSection/>

    <Cta/>
    <Faq/>
    <Schedule/>
    <Footer/>

    </>
  )
}

export default App
