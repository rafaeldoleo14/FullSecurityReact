
import React from 'react';
import './navbarStyle.css';
import logo from '../../../../src/assets/img/logoBlanco-removebg-preview.png';
import { useHiddenNav } from '../../hooks/useHiddenNav';
import { useHadleScroll } from '../../hooks/useHadleScroll';
import { useLocation } from 'react-router-dom';

export const Navbar = () => {

  const {isNavOpen, hidden} = useHiddenNav();
  const {scrolled} = useHadleScroll();
  const {pathname, hash} = useLocation();

  return (
    
    <>
    
        <nav style={{backgroundColor: `${scrolled || isNavOpen ? 'black': ''}`}}
        className='px-5 animate__animated animate__bounceInDown'>

              <div className='img-content'>
                <img src={logo}/>
              </div>

              <div className='nav'>

                  <a href={`${pathname === '/' ? '#inicio' : '/'}`} 
                    className={`${pathname === '/' && hash === '' || hash === '#inicio' ? 'active' : ''}`}>
                    Inicio
                  </a>

                  <a href="#about" 
                    style={{display: `${pathname !== '/' ? 'none' : ''}`}}
                    className={`${hash === '#about' ? 'active' : ''}`}>
                    Sobre Nosotros
                  </a>

                  <a href="/services" 
                    className={`${pathname === '/services' ? 'active' : ''}`}>
                    Servicios
                  </a>

                  <a href="/contact" 
                    className={`${pathname === '/contact' ? 'active' : ''}`}>
                    Contacto
                  </a>

              </div>

              <i 
                className={`bi  ${isNavOpen ? 'bi-x' : 'bi-list'} open-btn`} 
                onClick={hidden}
                style={{position: `${isNavOpen ? '' : 'absolute'}`, 
                        display: `${isNavOpen ? 'none' : ''}`}}
              ></i>

              <div className={`nav-responsive ${(isNavOpen ? 'active' : '')}`}>

                  <button onClick={hidden}>
                    
                    <i className='bi-x'></i>
                  </button>
                  
                  <a href={`${pathname === '/' ? '#inicio' : '/'}`}>
                    Inicio
                  </a>

                  <a href="#about" 
                    style={{display: `${pathname !== '/' ? 'none' : ''}`}}>
                    Sobre Nosotros
                  </a>

                  <a href="/services">Servicios</a>
                  <a href="/contact">Contacto</a>
              </div>

          </nav>

    </>
    
  )
}
