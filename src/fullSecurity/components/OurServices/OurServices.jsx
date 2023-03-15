
import React from 'react'
import './ourServices.css';
import { serviceData } from '../../data/serviceData';
import { useLoading } from '../../hooks/useLoading';
import { Loading } from '../Loading/Loading';
import { ServiceCard } from './ServiceCard';

export const OurServices = () => {

  const {loading} = useLoading();

  return (
    <>

        <Loading loading={loading}/>
    
        <div className='service-container'>

            <div className='service-title' data-aos="fade-right"d>
                <h2 className='text-white'>PRINCIPALES SERVICIOS QUE OFRECEMOS</h2>
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
