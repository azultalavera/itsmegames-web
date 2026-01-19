import { useState } from 'react';
import { motion } from 'framer-motion';

// --- DATOS DE EJEMPLO (Reemplaza con tus imágenes reales) ---
const sponsorsList = [
  { 
    name: "Tito Barco", 
    tier: "Patrocinador Amigo", 
    image: "/sponsors/tito.png", // Asegúrate de tener estas imágenes
    description: "Mejor afuera que adentro."
  },
  { 
    name: "Franco Barco", 
    tier: "Patrocinador Amigo", 
    image: "/sponsors/franco.png",
    description: "Tenes que ser bueno en el mano a mano."
  },
];

const SponsorCard = ({ sponsor, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative h-[280px] w-full perspective-1000 cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        className="w-full h-full relative preserve-3d transition-transform duration-700"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* --- CARA FRONTAL (LOGO) --- */}
        <div 
          className="absolute inset-0 backface-hidden rounded-2xl p-[2px] bg-gradient-to-b from-neon/50 to-transparent"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="bg-cardbg/90 backdrop-blur-xl p-4 rounded-2xl h-full flex flex-col items-center text-center relative overflow-hidden">
            {/* Efecto de brillo al hacer hover */}
            <div className={`absolute inset-0 bg-neon/10 blur-[80px] transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
            
            <div className="relative mb-4 rounded-full p-1 bg-gradient-to-br from-neon to-purple-500 mt-6">
              <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-full bg-black border-4 border-darkbg flex items-center justify-center overflow-hidden relative p-2">
                {/* NOTA: Usamos object-contain para que el logo se vea entero y no recortado */}
                <img 
                  src={sponsor.image} 
                  alt={sponsor.name} 
                  className={`w-full h-full object-contain filter drop-shadow-[0_0_5px_rgba(255,255,255,0.5)] transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
                />
              </div>
            </div>
            
            <h3 className="text-lg lg:text-xl text-white font-bold mb-1 truncate w-full">{sponsor.name}</h3>
            {sponsor.tier && <p className="text-xs lg:text-sm text-neon font-Inter uppercase tracking-wider">{sponsor.tier}</p>}
            
            <div className="absolute bottom-3 text-[10px] text-gray-500 uppercase tracking-widest group-hover:text-neon transition-colors">Click para info</div>
          </div>
        </div>

        {/* --- CARA TRASERA (INFO) --- */}
        <div 
          className="absolute inset-0 backface-hidden rounded-2xl p-[2px] bg-gradient-to-b from-purple-500 to-neon/50"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }} 
        >
          <div className="bg-black/95 backdrop-blur-xl p-6 rounded-2xl h-full flex flex-col items-center justify-center text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon to-purple-500"></div>
            
            <h3 className="text-xl text-neon font-Orbitron font-bold mb-3">{sponsor.name}</h3>
            <p className="text-gray-300 text-sm font-Inter leading-relaxed">
              "{sponsor.description}"
            </p>
            
            {/* Icono decorativo o botón simulado */}
            <div className="mt-4 text-purple-400 text-2xl animate-pulse">
              🤝
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Sponsors = () => {
  return (
    <section className="relative w-full py-10">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">ALIADOS</h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">Marcas que potencian nuestro desarrollo.</p>
      </motion.div>

      {/* Grid responsiva igual al Team */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 max-w-[1400px] mx-auto">
        {sponsorsList.map((sponsor, index) => (
          <SponsorCard key={sponsor.name} sponsor={sponsor} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Sponsors;