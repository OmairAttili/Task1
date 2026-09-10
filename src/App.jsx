import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Portfolio from './components/portfolio/Portfolio'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import UpperFooter from './components/footer/UpperFooter'
import LowerFooter from './components/footer/LowerFooter'

export default function App() {
  return <>
    <Navbar/>
    <Hero/>
    {/* <Portfolio/> */}
    <About/>
    <Contact/>
    <UpperFooter/>
    <LowerFooter/>
  </>
}
