import React from 'react'

export const NavResponsive = () => {
  return (
    <>

<nav class="navbar nav-responsive">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src="../../../src/assets/img/logoBlanco-removebg-preview.png" alt="" /></a>
    <button class="navbar-toggler bg-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Full Security</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">

          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">Inicio</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">Sobre Nosotros</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">Servicios</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">Contacto</a>
          </li>

        </ul>
      </div>
    </div>
  </div>
</nav>

    </>
  )
}
