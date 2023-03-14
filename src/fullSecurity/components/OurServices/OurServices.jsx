
import Aos from 'aos';
import React, { useEffect } from 'react'
import './ourServices.css';
import { serviceData } from '../../data/serviceData';
import { useLoading } from '../../hooks/useLoading';
import { Loading } from '../Loading/Loading';
import { ServiceCard } from './ServiceCard';

export const OurServices = () => {

  const {loading} = useLoading();

    useEffect(()=>{
        Aos.init({duration: 2000});
    },[])

  return (
    <>

        <Loading loading={loading}/>
    
        <div className='service-container'>

            <div className='service-title' data-aos="fade-right"d>
                <h1 className='text-white'>PRINCIPALES SERVICIOS QUE OFRECEMOS</h1>
            </div>

            <div className='types-services'>


                {
                    serviceData.map((service)=>(
                        <ServiceCard key={service.id} {...service}/>
                    ))
                }

            </div>
            
        </div>
    
    </>
  )
}
