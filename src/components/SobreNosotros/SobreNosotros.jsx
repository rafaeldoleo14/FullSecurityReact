
import React from 'react';
import '../../../public/style/sobreNosotros/sobreNosotrosStyle.css';
import { LazyLoadImage} from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

import indexImage from '../../../src/assets/img/seguridad1.png';

export const SobreNosotros = () => {
  return (

    <>
    
        <main id='about'>

            <LazyLoadImage src={indexImage}
            effect='blur'/>

            <article>

                <p>Servicio de Seguridad Privada</p>

                <h1>¿Quiénes Somos?</h1>

                <p className='info'>Full security es una empresa dedicada a ofrecer productos y servicios de seguridad. Nuestra intención es generar tranquilidad a los clientes por medio de la calidad y eficiencia de los productos y servicios que ofrecemos. Véase a continuación toda la información relacionada con Full Security.</p>

            </article>

        </main>

    </>
  )
}
