import React from 'react'
import './about.css'
import ME from '../../Imagenes/me-about.jpg'
import {BsAward} from 'react-icons/bs'
import {BiUserPlus} from 'react-icons/bi'
import {BsFillFolderSymlinkFill} from 'react-icons/bs'

const about = () => {

  return (

    <section id="about">

      <h5>Conoceme</h5>
      <h2>Sobre mi</h2>

      <div className="container about__container">
        <div className="about__me">
            <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>
     

        <div className="about__content">
          <div className="about__cards">

            <artice className="about__card">
              <BsAward className='about__icon' />
              <h5>Experiencia</h5>
              <small>7 Meses</small>
            </artice>

            <artice className="about__card">
              <BiUserPlus className='about__icon' />
              <h5>Clients</h5>
              <small>200+ worldwide</small>
            </artice>

            <artice className="about__card">
              <BsFillFolderSymlinkFill className='about__icon' />
              <h5>Proyects</h5>
              <small>2 completed</small>
            </artice>

          </div> 

          <p>
              Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Consequuntur sunt harum 
              soluta est quo animi nobis similique in, 
              repellat doloribus aliquid perferendis corporis vel totam explicabo excepturi minima saepe quisquam.
            </p>

          <a href="#contact" className='btn btn-primary'>Contacta Conmigo</a>
          
        </div>
      </div>
    </section>
  )
}

export default about