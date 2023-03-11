import React, { useState } from 'react'
import '../../../../public/style/header/headerStyle.css';

export const Header = () => {

  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  console.log(loading)

  return (
    <>

      {loading && <div>Cargando...</div>}

      <img
          className="background-image"
          src="../../../src/assets/img/carrusel1.jpg"
          onLoad={handleImageLoad}
          style={{display: 'none'}}
        />
    
        <header>

            <div className='eslogan animate__animated animate__bounceInLeft'>

                <h1>Seguridad al alcance de tus manos</h1>

                <button>Más info</button>

            </div>

        </header>
    
    </>
  )
}
