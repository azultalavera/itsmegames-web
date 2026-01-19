import { motion } from 'framer-motion';

// LISTA DE DATOS (Aquí pondrás tus logos e imágenes reales más adelante)
const sponsors = [
  { name: "Tito Barco", img: "https://unsplash.com/es/fotos/ITebWLQRxOI" },
  { name: "Franco Barco", img: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
];

const SponsorCard = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group h-40 w-full perspective-1000 cursor-pointer"
    >
      {/* Contenedor INTERNO que hace el giro */}
      <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        
        {/* --- CARA FRONTAL (Solo Imagen, sin texto) --- */}
        <div className="absolute inset-0 h-full w-full rounded-2xl bg-gradient-to-br from-neon/10 to-transparent border border-neon/30 p-4 [backface-visibility:hidden] flex items-center justify-center backdrop-blur-md shadow-[0_0_15px_rgba(0,255,0,0.1)]">
          {/* Brillo decorativo */}
          <div className="absolute inset-0 bg-neon/5 blur-xl rounded-full opacity-50"></div>
          
          {/* Logo / Imagen */}
          <img 
            src={item.img} 
            alt="logo" 
            className="relative w-16 h-16 object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
          />
        </div>

        {/* --- CARA TRASERA (El reverso con info) --- */}
        <div className="absolute inset-0 h-full w-full rounded-2xl bg-black/90 border border-neon flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden] p-2 text-center">
          <h3 className="text-neon font-bold text-lg">{item.name}</h3>
          <p className="text-gray-400 text-xs mt-1">Partner Oficial</p>
        </div>

      </div>
    </motion.div>
  );
};

const Sponsors = () => {
  return (
    <section className="relative w-full py-20">
      {/* Título de la sección */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow text-white">PATROCINADORES</h2>
        <p className="text-xl text-gray-400">El combustible de nuestra nave.</p>
      </motion.div>

      {/* Grid idéntica a Team.jsx */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 px-4 max-w-[1400px] mx-auto">
        {sponsors.map((sponsor, index) => (
          <SponsorCard key={index} item={sponsor} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Sponsors;