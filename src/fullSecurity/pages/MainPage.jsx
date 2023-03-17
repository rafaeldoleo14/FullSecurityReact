
import React from 'react'
import { Header } from '../../fullSecurity/components/Header/Header'
import { MVV } from '../../fullSecurity/components/MVV/MVV'
import { AboutUs } from '../../fullSecurity/components/AboutUs/AboutUs'
import { MainLayout } from '../layout/MainLayout'

export const MainPage = () => {
  return (
    <>
    
        <MainLayout>

          <Header/>
          <AboutUs/>
          <MVV/>

        </MainLayout>
    
    </>
  )
}
