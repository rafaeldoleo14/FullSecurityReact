import React, { useEffect, useState } from 'react'
import '../../../../public/style/header/headerStyle.css';

export const Header = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const image = new Image();
    image.onload = () => setLoading(false);
    image.src = "../../../src/assets/img/carrusel1.jpg";
  }, []);

  console.log(loading)

  return (
    <>
      {loading && <div>Cargando...</div>}
      <header>
        <div className="eslogan animate__animated animate__bounceInLeft">
          <h1>Seguridad al alcance de tus manos</h1>
          <button>Más info</button>
        </div>
      </header>
    </>
  )
}
