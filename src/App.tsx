import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import './styles/App.css'
import LeftPanel from './view/LeftPanel'
import MainPanel from './view/MainPanel'

const App = () => {

  return (
    <div className='w-100 h-screen'>
      <BrowserRouter>
        <LeftPanel/>
      {/*   <MainPanel/> */}
      </BrowserRouter>
     {/*  <PlayPanel/> */}
    </div>
  )
}

export default App
