import React from 'react'
import HeroSection from '../components/home/HeroSection'
import IntroSection from '../components/home/IntroSection'
import ServicesSection from '../components/home/Service'
import Banner from '../components/Banner'
import WhyChoose from '../components/home/WhyChoose'
import Gallery from '../components/home/Gallery'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <IntroSection />
      <ServicesSection />
      <Banner />
      <WhyChoose />
      <Gallery />
    </div>
  )
}

export default Home
