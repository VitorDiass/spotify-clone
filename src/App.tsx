import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import './styles/App.css'
import LeftPanel from './view/LeftPanel'
import MainContent from './view/MainContent'
import MainPanel from './view/MainPanel'
import PlayPanel from './view/PlayPanel'

const App = () => {

  return (
    <div className='w-100 max-h-screen'>
      <BrowserRouter>
        <MainContent>
          <LeftPanel/>
          <MainPanel/>
        </MainContent>
      </BrowserRouter>
      <PlayPanel/>
    </div>
  )
}

export default App
