import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from '../components/Header';


const MainContent = ({children} : React.PropsWithChildren) => {

  return (
    <div className='flex min-h-[485px] h-[827px] overflow-y-auto'>
        <Routes>
            <Route path="/search" element={<></>} />
            <Route path="/home" element={<></>} />
        </Routes>
      {children}
    </div>
  )
}

export default MainContent