import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Layer8Landing from './components/Layer8Landing.jsx'
import NotFound from './components/NotFound.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Ruta principal: Landing Page General */}
        <Route path="/" element={<App />} />
        
        {/* Ruta para Layer 8 Game */}
        <Route path="/layer8game" element={<Layer8Landing />} />
        
        {/* Ruta Comodín (*): 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)