import React from 'react'

import Header from '../pages/Header'
import Navbar from '../components/Navbar'
import About from '../pages/About'
import Experience from '../pages/Experience'
import Projects from '../pages/Projects'
import NavbarMobile from '../components/NavbarMobile'
import Footer from '../pages/Footer'

const Home: React.FC = () => {
  return (
    <>
      <NavbarMobile />
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </>
  )
}

export default Home
