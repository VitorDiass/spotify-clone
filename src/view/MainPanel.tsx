import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../components/Header/Header'
import Home from '../pages/Home'
import Search from '../pages/Search'

const MainPanel = () => {
  return (
    <div className="bg-spotify-mainpanel-bg w-full max-h-screen h-[calc(100vh-106px)] overflow-y-scroll scrollbar text-white">
       <Routes>
            <Route path="/home" element={<><Home/></>} />
            <Route path="/search" element={<><Search/></>} />
        </Routes>
    </div>
  )
}

export default MainPanel