import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Main from './Components/Main'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  function toggleDarkMode() {
    setDarkMode(prevState => !prevState)
  }

  return (
    <div className="container">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Main darkMode={darkMode} />
    </div>
  )
}

export default App
