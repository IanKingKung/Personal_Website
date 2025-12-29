import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <text>Hi this is my personal website</text>
        <h3>Currently Under Construction</h3>
        <Navbar />
      </div>
    </>
  )
}

export default App
