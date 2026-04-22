import { motion } from 'framer-motion';
import { AlertTriangle, Home, RefreshCcw } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden font-Inter text-white">
      {/* Fondo con ruido estático */}
      <div className="absolute inset-0 opacity-10 pointer-events-none"
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      <div className="max-w-2xl w-full text-center relative z-10">
        
        {/* Ícono animado */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-red-500 blur-xl opacity-20 animate-pulse"></div>
            <AlertTriangle className="w-24 h-24 text-red-500 relative z-10" />
          </div>
        </motion.div>

        {/* Título Glitch */}
        <h1 className="text-8xl md:text-9xl font-Orbitron font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 mb-4 relative inline-block">
          404
          <span className="absolute top-0 left-1 text-red-500 opacity-50 mix-blend-screen animate-pulse" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 30%, 0 30%)' }}>404</span>
          <span className="absolute top-0 -left-1 text-neon opacity-50 mix-blend-screen animate-pulse" style={{ clipPath: 'polygon(0 60%, 100% 60%, 100% 100%, 0 100%)' }}>404</span>
        </h1>

        <h2 className="text-2xl md:text-4xl font-Orbitron text-red-500 uppercase tracking-widest mb-6">
          SYSTEM FAILURE
        </h2>

        <p className="text-gray-400 text-lg mb-10 max-w-lg mx-auto">
          Te has salido del mapa. El archivo que buscas ha sido eliminado o nunca existió en este sector.
        </p>

        {/* Botón Respawn */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-3 px-8 py-4 bg-neon/10 border border-neon text-neon font-Orbitron font-bold uppercase tracking-wider hover:bg-neon hover:text-black transition-all duration-300 group shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:shadow-[0_0_40px_rgba(0,255,255,0.6)]"
        >
          <RefreshCcw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
          Respawn (Volver al Inicio)
        </Link>
      </div>

      {/* Decoración tipo terminal */}
      <div className="absolute bottom-8 left-8 text-xs font-mono text-gray-600">
        ERROR_CODE: 0xDEADBEEF <br/>
        LOCATION: UNKNOWN_SECTOR
      </div>
    </div>
  );
};

export default NotFound;