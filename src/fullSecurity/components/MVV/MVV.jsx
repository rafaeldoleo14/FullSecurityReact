
import Aos from 'aos';
import React, { useEffect } from 'react';
import '../../../../public/style/MVV/MvvStyle.css';

export const MVV = () => {

    useEffect(()=>{
        Aos.init({duration: 2000});
    },[])

  return (
    <>
    
        <article className='article-2'>

            <div data-aos="zoom-in-up">
                <h2>Misión</h2>
                <p>Proporcionar seguridad física e integral a nuestros clientes mediante personal altamente calificado, garantizando así satisfacción, comodidad y confianza.</p>
            </div>

            <div data-aos="zoom-in-up">
                <h2>Visión</h2>
                <p>Posicionarnos como empresa líder en seguridad privada gracias a nuestro alto desempeño en el área, teniendo presencia a nivel nacional e internacional.</p>
            </div>

            <div data-aos="zoom-in-up">
                <h2>Valores</h2>
                <ul>
                    <li>Confianza</li>
                    <li>Integridad</li>
                    <li>Calidad</li>
                    <li>Responsabilidad social</li>
                    <li>Competitividad</li>
                    <li>Transparencia</li>
                </ul>
            </div>

        </article>

    </>
  )
}
