import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import Navigation from './Components/NavigationTemplate/Navigation'
import Main from './Main/Main'

function App() {
  

  return (
    <>
    <div className="App">
    <Navigation/>
     <Main/>
    </div>
    </>
  )
}

export default App
