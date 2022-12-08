
import React from 'react';
import '../../../public/style/navbar/navbarStyle.css';
import { NavResponsive } from './NavResponsive';
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import logo from '../../../src/assets/img/logoBlanco-removebg-preview.png';

export const Navbar = () => {
  return (
    
    <header>

        <nav className='nav-1'>

        <LazyLoadImage src={logo}
            effect='blur'/>

            <div className='navegacion'>
                <a href="">Inicio</a>
                <a href="#about">Sobre Nosotros</a>
                <a href="">Servicios</a>
                <a href="">Contacto</a>
            </div>

        </nav>

        <NavResponsive/>


        <div className='eslogan'>

            <h1>Seguridad al alcance de tus manos</h1>

            <button>más info</button>

        </div>


    </header>
    
  )
}
