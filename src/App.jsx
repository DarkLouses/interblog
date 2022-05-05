import React from 'react'
import Header from './componentes/header/header'
import Nav from './componentes/nav/nav'
import About from './componentes/about/about'
import Experience from './componentes/experience/experience'
import Contact from './componentes/contact/contact'
import Footer from './componentes/footer/footer'
import Services from './componentes/services/services'
import Portfolio from './componentes/portfolio/portfolio'
import Testimonios from './componentes/testimonios/testimonios'


const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonios />
      <Contact />
      <Footer />
    </>
  )
}

export default App