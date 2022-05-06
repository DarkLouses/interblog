import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs';

const experience = () => { 

  return (

    <section id="experience"> 
      <h5>que habiliades tengo</h5>
      <h2>Mis habilidades</h2>

      <div className="container experience__container">

        <div className="experience__frontend">

          <h3>Frontend Development</h3>
          <div className="experience__content">

            <article className="experience_details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className='text-ligth'>Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className='text-ligth'>Experienced</small>
              </div>
            </article>
            
            <article className="experience_details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className='text-ligth'>Experienced</small>
              </div>
            </article>
            
            <article className="experience_details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>React</h4>
                <small className='text-ligth'>Experienced</small>
              </div>
            </article>
            
            <article className="experience_details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>bootstrap</h4>
                <small className='text-ligth'>Experienced</small>
              </div>
            </article>
            
            <article className="experience_details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Sass</h4>
                <small className='text-ligth'>Experienced</small>
              </div>
            </article>

          </div>
        </div>

        <div className="experience__backend">
          <h3>backend Development</h3>

          <div className="experience__content">

            <article className="experience_details">
              <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>SQL</h4>
                  <small className='text-ligth'>Experienced</small>
                </div>
              </article>

              <article className="experience_details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Node.js</h4>
                  <small className='text-ligth'>Experienced</small>
                </div>
              </article>
              
              <article className="experience_details">
                <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>Git</h4>
                    <small className='text-ligth'>Experienced</small>
                  </div>
              </article>
              
              <article className="experience_details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Java</h4>
                  <small className='text-ligth'>Experienced</small>
                </div>
              </article>
              
              <article className="experience_details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Php</h4>
                  <small className='text-ligth'>Experienced</small>
                </div>
              </article>
              
              <article className="experience_details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Json</h4>
                  <small className='text-ligth'>Experienced</small>
                </div>
              </article>
            </div>

        </div>

      </div>
    </section>
  )
}

export default experience