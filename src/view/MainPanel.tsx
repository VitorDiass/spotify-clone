import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../components/Header'

const MainPanel = () => {
  return (
    <div className="bg-spotify-mainpanel-bg w-full min-h-full text-white p-6">
      <Header/>
      
    </div>
  )
}

export default MainPanel