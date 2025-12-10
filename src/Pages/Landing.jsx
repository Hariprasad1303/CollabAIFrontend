import React from 'react'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import Footer from '../Components/Footer'
import Feature from '../Components/Feature'
import Contact from '../Components/Contact'
import Pricing from '../Components/Pricing'
import Testimonials from '../Components/Testimonials'



const Landing = () => {
  return (
    <>
      <Header/>
      <Hero id="home"/>
      <Feature id="feature"/>
      <Testimonials  id="testimonials"/>
      <Contact id="contact"/>
      <Pricing id="pricing"/>
      <Footer/>
    </>
  )
}

export default Landing
