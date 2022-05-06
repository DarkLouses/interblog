import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {SiMessenger} from 'react-icons/si'
import {IoLogoWhatsapp} from 'react-icons/io'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
 
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nm1vtmc' , 'template_271yv9e' , form.current , 'H2kl3fMeGGq62oV1z')

    e.target.reset()
  };
  return (
    
    <section id="contact">
    
      <h5>bueno</h5>
      <h2>Contacta Conmigo</h2>
    
    <div className="container contact__container">

      <div className="contact__options">
        <article className="contact__option">
          <AiOutlineMail className='contact__option-icon' />
          <h4>Email</h4>
          <h5>gabrielenriquevargas2001@gmail.com</h5>
          <a href="mailto:gabrielenriquevargas2001@gmail.com" target="_blank" > Send a message</a>
        </article>

        <article className="contact__option">
          <SiMessenger className='contact__option-icon' />
          <h4>Messenger</h4>
          <h5>Gabriel enrique vargas</h5>
          <a href="https://www.facebook.com/Gabrielevp/" target="_blank" > Send a message</a>
        </article>

        <article className="contact__option">
          <IoLogoWhatsapp className='contact__option-icon' />
          <h4>Whatsapp</h4>
          <h5>+ 36 688889951</h5>
          <a href="https://api.whatsapp.com/send?phone=688889951"target="_blank" > Send a message</a>
        </article> 
      </div>

      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='nombre' placeholder='nombre completo' required />
        <input type="email" name='email' placeholder='Email' required />
        <textarea name="message" rows="7" placeholder='tu mensaje' required ></textarea>
        <button type='submit' className='btn btn-primary'>enviar</button>
      </form>

    </div>
    
    </section>
  )
}

export default Contact