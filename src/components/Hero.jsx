import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-[70vh]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          FROM HOBBY TO <span className="text-neon text-glow">CREATORS</span>
        </h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto"
        >
          Creando sistemas y mundos que inspiran. Transformamos ideas en experiencias digitales únicas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <a href="#stream" className="inline-flex items-center px-8 py-4 bg-neon/10 text-neon border-2 border-neon rounded-full font-Orbitron font-bold text-lg tracking-wider hover:bg-neon/20 hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] transition-all duration-300 group">
            Ver Stream en Vivo
            <ChevronRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </motion.div>
      
      {/* Imagen de fondo sutil opcional */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neon/5 via-transparent to-transparent opacity-70 blur-3xl"></div>
    </section>
  );
};

export default Hero;