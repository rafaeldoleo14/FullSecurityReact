import React from 'react'
import { Footer } from '../components/Footer/Footer'
import { Navbar } from '../components/NavBar/Navbar'

export const MainLayout = ({children}) => {
  return (
    <>
    
        <Navbar/>

            {children}

        <Footer/>
    
    </>
  )
}
