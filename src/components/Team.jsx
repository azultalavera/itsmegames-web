import { useState } from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  // --- FILA 1 (2 Personas) ---
  { 
    name: "Brunito", 
    role: "Founder & Game Director", 
    emoji: "🎮", 
    image: "/team/brunito.png",
    description: "El cerebro detrás de todo. Fanático de los RPGs y de romper el código hasta que funcione."
  },
  { 
    name: "Maxi", 
    role: "Legal & Community Manager", 
    emoji: "⚖️",
    image: "/team/maxi.png",
    description: "Cuida nuestras espaldas legales y mantiene viva la llama de la comunidad."
  },
  // --- FILA 2 (3 Personas) ---
  { 
    name: "Azul", 
    role: "UX Lead & Game Developer", 
    emoji: "🎨", 
    image: "/team/azul.png",
    description: "Arquitecta de interfaces. Fusiona los requisitos del sistema con un diseño visual impactante."
  },
  { 
    name: "Fran", 
    role: "Tech Lead", 
    emoji: "💻", 
    image: "/team/fran.png",
    description: "El arquitecto del código. Lidera la tecnología para llevar el rendimiento al siguiente nivel."
  },
  { 
    name: "Lucas", 
    role: "Lead Artist", 
    emoji: "🖌️", 
    image: "/team/lucas.png",
    description: "Fanático de los videojuegos. Dibuja con el corazón; su pasión es jugar y divertirse."
  }
];

const TeamCard = ({ member, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative h-[280px] w-full max-w-[300px] perspective-1000 cursor-pointer group mx-auto"
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
        {/* --- CARA FRONTAL --- */}
        <div 
          className="absolute inset-0 backface-hidden rounded-2xl p-[2px] bg-gradient-to-b from-neon/50 to-transparent"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="bg-cardbg/90 backdrop-blur-xl p-4 rounded-2xl h-full flex flex-col items-center text-center relative overflow-hidden">
            <div className={`absolute inset-0 bg-neon/20 blur-[100px] transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
            
            <div className="relative mb-4 rounded-full p-1 bg-gradient-to-br from-neon to-purple-500 mt-4">
              <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-full bg-darkbg border-4 border-darkbg flex items-center justify-center overflow-hidden relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
                />
              </div>
            </div>
            
            <h3 className="text-lg lg:text-xl text-white font-bold mb-1 truncate w-full">{member.name}</h3>
            {member.role && <p className="text-xs lg:text-sm text-gray-400 font-Inter">{member.role}</p>}
            
            <div className="absolute bottom-3 text-[10px] text-neon/50 uppercase tracking-widest animate-pulse">Click info</div>
          </div>
        </div>

        {/* --- CARA TRASERA --- */}
        <div 
          className="absolute inset-0 backface-hidden rounded-2xl p-[2px] bg-gradient-to-b from-purple-500 to-neon/50"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }} 
        >
          <div className="bg-black/90 backdrop-blur-xl p-6 rounded-2xl h-full flex flex-col items-center justify-center text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon to-purple-500"></div>
            <h3 className="text-xl text-neon font-Orbitron font-bold mb-3">{member.name}</h3>
            <p className="text-gray-300 text-sm font-Inter leading-relaxed">"{member.description}"</p>
            <div className="mt-4 text-purple-400 text-2xl">{member.emoji}</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Team = () => {
  // Dividimos el array: los primeros 2 para la fila de arriba, el resto para abajo
  const topRow = teamMembers.slice(0, 2);
  const bottomRow = teamMembers.slice(2);

  return (
    <section className="relative w-full">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">LA FAMILIA</h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">El equipo detrás de la magia.</p>
      </motion.div>

      <div className="max-w-[1200px] mx-auto px-4 flex flex-col gap-8">
        
        {/* --- FILA 1: 2 Personas (Centrado) --- */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {topRow.map((member, index) => (
            <div key={member.name} className="w-full sm:w-[300px]">
              <TeamCard member={member} index={index} />
            </div>
          ))}
        </div>

        {/* --- FILA 2: 3 Personas (Centrado) --- */}
        <div className="flex flex-wrap justify-center gap-8">
          {bottomRow.map((member, index) => (
            <div key={member.name} className="w-full sm:w-[300px]">
              {/* Sumamos el index para que el delay de animación sea progresivo (2, 3, 4...) */}
              <TeamCard member={member} index={index + 2} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Team;