
import React from 'react'
import './footerStyle.css'

export const Footer = () => {
  return (
    <>
    
        <footer>

            <div class="footer-content">

                <div>
                    <h5>Horario</h5>
                    <p>24 horas al dia.</p>
                </div>
        
                <div class="direccion">
                    <h5>Dirección</h5>
                    <p>Estamos Ubicados en la Av. Máximo Gómez 72, Santo Domingo 10100  , Rep. Dominicana.</p>
                </div>
        
                <div>
                    <h5>Info</h5>
                    <p>(829) 731 0023</p>
                    <p>fullsecurity@gmail.com</p>
                </div>

            </div>

            <div className='copyright'>
                <p>© Todos los derechos reservados</p>
            </div>

    </footer>    
    
    </>
  )
}
