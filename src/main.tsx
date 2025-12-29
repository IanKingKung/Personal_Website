import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './pages_css/index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/Personal_Website">
    <App />
  </BrowserRouter>,
)
