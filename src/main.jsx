import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Layer8Landing from './pages/Layer8/Layer8Landing.jsx'
import NotFound from './components/common/NotFound.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        {/* Ruta principal: Landing Page */}
        <Route path="/" element={<Home />} />
        
        {/* Ruta para Layer 8 Game */}
        <Route path="/layer8game" element={<Layer8Landing />} />
        
        {/* Ruta Comodín (*): Cualquier cosa que no sea las anteriores muestra el 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)