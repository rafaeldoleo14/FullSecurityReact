
import React from 'react'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'

export const ServiceCard = ({id, img, title, details}) => {

  const sweetAlert = ()=>{
    Swal.fire('En proceso...', 'vuelva pronto', 'info')
  }

  return (
    <>
    
        <div key={id} className='all-info' data-aos="fade-right">

            <img className='' src={img} alt="" />
            <div className='service-info'>
                <h3>{title}</h3>
                <p className='card-text'>{details}</p>
                <div className='s-line'></div>
                <button onClick={sweetAlert} className='btn btn-outline-dark'>Informacion</button>
            </div>

        </div>
    
    </>
  )
}
