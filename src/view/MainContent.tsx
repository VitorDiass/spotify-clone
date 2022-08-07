import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from '../components/Header/Header';


const MainContent = ({children} : React.PropsWithChildren) => {

  return (
    <div className="flex w-full min-h-full">
       {/* min-h-[485px] */}
      {children}
    </div>
  )
}

export default MainContent