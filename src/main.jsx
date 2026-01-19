import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import NotFound from './components/NotFound.jsx' // <--- Importamos la nueva página
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Ruta principal: Tu Landing Page */}
        <Route path="/" element={<App />} />
        
        {/* Ruta Comodín (*): Cualquier cosa que no sea "/" muestra el 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)