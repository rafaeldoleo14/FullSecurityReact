
import React from 'react'
import { Footer } from '../../fullSecurity/components/Footer/Footer'
import { Header } from '../../fullSecurity/components/Header/Header'
import { MVV } from '../../fullSecurity/components/MVV/MVV'
import { Navbar } from '../../fullSecurity/components/NavBar/Navbar'
import { AboutUs } from '../../fullSecurity/components/AboutUs/AboutUs'

export const MainPage = () => {
  return (
    <>
    
        <Navbar/>
        <Header/>
        <AboutUs/>
        <MVV/>
        <Footer/>
    
    </>
  )
}
