import React from 'react'
import Hero from './components/Hero'
import Suppliers from './components/Suppliers'
import SecondSec from './components/SecondSec'
import ThiredSec from './components/ThiredSec'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Cards from './components/Cards'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <SecondSec/>
      <ThiredSec/>
      <Suppliers/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App