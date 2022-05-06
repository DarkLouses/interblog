import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../Imagenes/me.jpg'
import Headersocials from './headersocials'

const header = () => {

  return (
    
    <header>

      <div className="container header__container">
        <h5>Hola soy</h5>
        <h1>Gabriel Vargas</h1>
        <h5 className="text-ligth">React es el mejor</h5>
        <CTA />
        <Headersocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>

  )

}

export default header