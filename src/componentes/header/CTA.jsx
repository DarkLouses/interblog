import React from 'react'
import CV from '../../Imagenes/cv.pdf'

const CTA = () => {
  return (

        <div className='cta'>
            <a href={CV} className="btn">Mi Cv</a>
            <a href="#contact" className='btn btn-primary'>Lets task</a>
        </div>
  
  )
}

export default CTA