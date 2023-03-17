
import React from 'react';
import './ContactStyle.css';
import {AiFillContacts} from 'react-icons/ai'
import { useLoading } from '../../hooks/useLoading';
import { Loading } from '../Loading/Loading';

export const Contact = () => {

    const {loading} = useLoading();

  return (
    <>
    
        <Loading loading={loading}/>

        <div className='contactContainer'>

            <div className='contactImage'></div>

            <div className='formContainer'>

                <div className='contactTitle'>
                    <h1>Contacto</h1>
                    <AiFillContacts size={45}/>
                </div>

                <form action="">

                    <div className='formControl'>
                        <input type="text" placeholder='Nombre'/>
                        <input type="email" placeholder='Email'/>
                    </div>

                    <div>
                        <textarea placeholder='Escribenos...'></textarea>
                    </div>

                    <div className='btnContainer'>
                        <button>Enviar</button>
                    </div>

                </form>

            </div>
    
        </div>

    </>
  )
}
