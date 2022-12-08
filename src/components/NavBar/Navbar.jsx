
import React from 'react';
import '../../../public/style/navbar/navbarStyle.css';
import { NavResponsive } from './NavResponsive';

import logo from '../../../src/assets/img/logoBlanco-removebg-preview.png';

export const Navbar = () => {
  return (
    
    <header>

        <nav className='nav-1'>

            <img src={logo} alt="" />

            <div className='navegacion'>
                <a href="">Inicio</a>
                <a href="">Sobre Nosotros</a>
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
