
import React, {  useEffect, useState } from 'react';
import './navbarStyle.css';
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import logo from '../../../../src/assets/img/logoBlanco-removebg-preview.png';
import { useHiddenNav } from '../../hooks/useHiddenNav';
import { useHadleScroll } from '../../hooks/useHadleScroll';

export const Navbar = () => {

  const {isNavOpen, hidden} = useHiddenNav();
  const {scrolled} = useHadleScroll();

  return (
    
    <>
    
        <nav style={{backgroundColor: `${scrolled ? 'rgba(30, 34, 72, 0.683)': ''}`}}
        className='px-5 animate__animated animate__bounceInDown'>

          <LazyLoadImage src={logo}
              effect='blur'/>

              <div className='nav'>
                  <a href="/">Inicio</a>
                  <a href="#about">Sobre Nosotros</a>
                  <a href="/services">Servicios</a>
                  <a href="/contact">Contacto</a>
              </div>

              <i 
                className={`bi  ${isNavOpen ? 'bi-x' : 'bi-list'} open-btn`} 
                onClick={hidden}
                style={{position: `${isNavOpen ? 'fixed' : 'absolute'}`}}
              ></i>

              <div className={`nav-responsive ${(isNavOpen ? 'active' : '')}`}>
                  <a href="/">Inicio</a>
                  <a href="#about">Sobre Nosotros</a>
                  <a href="/services">Servicios</a>
                  <a href="/contact">Contacto</a>
              </div>

          </nav>

    </>
    
  )
}
