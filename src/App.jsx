import React from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import About from './component/About'
import Service from './component/Service'
import Tours from './component/Tours'
import Footer from './component/Footer'
import { serviceData } from './data'

const App = () => {
  return (
    <div className="">
      
    <Navbar />

    <Hero />

    <About />

    <Service  data={serviceData}/>

    <Tours />

    <Footer />
  
    </div>

  )
}

export default App
