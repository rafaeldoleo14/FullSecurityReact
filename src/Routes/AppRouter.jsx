
import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { MainPage } from '../fullSecurity/pages/MainPage'
import { ServicePage } from '../fullSecurity/pages/ServicePage'

export const AppRouter = () => {
  return (
    <>
    
    <Routes>

      <Route path="/" element={<MainPage />} />

      <Route path="/services" element={<ServicePage />} />

      <Route path="/*" element={<Navigate to="/" />} />
      
    </Routes>
    
    </>
  )
}
