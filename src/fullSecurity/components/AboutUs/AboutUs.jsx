
import React, { useEffect } from 'react';
import './aboutUsStyle.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import indexImage from '../../../../src/assets/img/seguridad1.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

export const AboutUs = () => {

  useEffect(()=>{
    Aos.init({duration: 2000});
  },[])

  return (

    <>
    
        <main id='about'>

            <img  src={indexImage}
            effect='blur' data-aos="flip-left"
            data-aos-easing="ease-out-cubic" data-aos-duration="2000"/>

            <article data-aos="fade-up"
              >

                <p>Servicio de Seguridad Privada</p>

                <h1>¿Quiénes Somos?</h1>

                <p className='info'>Full security es una empresa dedicada a ofrecer productos y servicios de seguridad. Nuestra intención es generar tranquilidad a los clientes por medio de la calidad y eficiencia de los productos y servicios que ofrecemos. Véase a continuación toda la información relacionada con Full Security.</p>

            </article>

        </main>

    </>
  )
}
