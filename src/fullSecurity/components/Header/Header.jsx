import React, { useEffect, useState } from 'react'
import '../../../../public/style/header/headerStyle.css';
import { useLoading } from '../../hooks/useLoading';
import { Loading } from '../Loading/Loading';

export const Header = () => {

  const {loading} = useLoading();
  
  return (
    <>
        <Loading loading={loading}/>

        <header>

            <div className='eslogan animate__animated animate__bounceInLeft'>

                <h1>Seguridad al alcance de tus manos</h1>

                <button>Más info</button>

            </div>

        </header>
    
    </>
  )
}
