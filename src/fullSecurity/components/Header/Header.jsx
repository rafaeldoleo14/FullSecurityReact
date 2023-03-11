import React, { useState } from 'react'
import '../../../../public/style/header/headerStyle.css';

export const Header = () => {

  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <>
      {loading && <div>Cargando...</div>}
      <header>
        <div className="eslogan animate__animated animate__bounceInLeft">
          <h1>Seguridad al alcance de tus manos</h1>
          <button>Más info</button>
        </div>
      </header>
      <img
        src="../../../src/assets/img/carrusel1.jpg"
        onLoad={handleImageLoad}
        style={{ display: "none" }}
      />
    </>
  )
}
