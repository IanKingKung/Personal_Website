import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Navbar from './Navbar'
import { Routes, Route } from "react-router-dom"; 
import './pages_css/App.css'
import About from './pages/about.tsx';
import Projects from './pages/projects.jsx';
import More from './pages/more.tsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} /> 
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/more" element={<More />} />
        </Routes>
      </div>
    </>
  )
}

export default App
