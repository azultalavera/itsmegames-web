import React from 'react'
import ReactDOM from 'react-dom/client'
<<<<<<< HEAD
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Layer8Landing from './pages/Layer8/Layer8Landing.jsx'
import NotFound from './components/common/NotFound.jsx'
=======
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import NotFound from './components/NotFound.jsx' // <--- Importamos la nueva página
>>>>>>> parent of 75003fc (landing layer 8 y mail)
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        {/* Ruta principal: Tu Landing Page */}
        <Route path="/" element={<App />} />
        
        {/* Ruta Comodín (*): Cualquier cosa que no sea "/" muestra el 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)