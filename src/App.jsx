import { useEffect, useState } from 'react'
import './App.css'
import Headersection from './component/header'
import HeroSection from './component/hero'
import TradingSection from './component/tradingsection'
import ContactCard from './component/contact'
import Testimonial from './component/testimonial'
import Footer from './component/footer'
import SlideSection from './component/slidesection'
import BlockchainSection from './component/blockchain'
import WhyChooseUs from './component/whychooseus'
import BusinessGrowth from './component/bussinessgrowth'
import BlockchainService from './component/blockchainservice'

function App() {
  const [count, setCount] = useState(0)

  // 👇 Scroll to top on reload
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
    
      <Headersection />
      <HeroSection />
      <SlideSection />
      <TradingSection />
      <BlockchainSection />
      <WhyChooseUs />
      <BusinessGrowth />
      <BlockchainService />
      <ContactCard />
      <Testimonial />
      <Footer />

    </>
  )
}

export default App
