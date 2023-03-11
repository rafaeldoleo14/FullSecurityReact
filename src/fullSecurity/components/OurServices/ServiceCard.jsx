
import React from 'react'

export const ServiceCard = ({id, img, title, details}) => {
  return (
    <>
    
        <div key={id} className='all-info' data-aos="fade-right">

            <img className='' src={img} alt="" />
            <div className='service-info'>
                <h3>{title}</h3>
                <p className='card-text'>{details}</p>
                <div className='s-line'></div>
                <button className='btn btn-outline-dark'>Informacion</button>
            </div>

        </div>
    
    </>
  )
}
