import React from 'react'
import './footer.css'
import {FaFacebook} from 'react-icons/fa'

import {AiFillInstagram} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'

const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'> Gabriel Vargas </a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">Sobre mi</a></li>
        <li><a href="#experience">Experiencia</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>

      <div className="footer__social">

        <a href="https://www.facebook.com/"><FaFacebook/></a>
        <a href="https://www.instragram.com/"><AiFillInstagram/></a>
        <a href="https://www.twiter.com/"><AiOutlineTwitter/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Gabriel Vargas</small>
      </div>

    </footer>
  )
}

export default footer