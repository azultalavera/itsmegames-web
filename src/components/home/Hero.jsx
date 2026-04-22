import { motion } from 'framer-motion';

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
          FROM PLAYERS TO <span className="text-neon text-glow">CREATORS</span>
        </h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto"
        >
          Creando mundos que inspiran. Transformamos ideas en experiencias únicas.
        </motion.p>
        
        {/* Botón eliminado */}

      </motion.div>
      
      {/* Imagen de fondo sutil opcional */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neon/5 via-transparent to-transparent opacity-70 blur-3xl"></div>
    </section>
  );
};

export default Hero;