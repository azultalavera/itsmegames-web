import { useState } from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  { 
    name: "Brunito", 
    role: "Founder & Game Director", 
    emoji: "🎮", 
    image: "/team/brunito.png",
    description: "El cerebro detrás de todo. Fanático de los RPGs y de romper el código hasta que funcione."
  },
  { 
    name: "Maxi", 
    role: "CEO & Legal", 
    emoji: "⚖️",
    image: "/team/maxi.png",
    description: "La estratega de la operación. Asegura que el estudio cumpla con todos los protocolos del sistema."
  },
  { 
    name: "Azul", 
    role: "Lider de Diseño UI/UX", 
    emoji: "🎨", 
    image: "/team/azul.png",
    description: "Arquitecta de interfaces. Fusiona los requerimientos puros del sistema con un diseño visual impactante."
  },
  { 
    name: "Mamba", 
    role: "Community Lead", 
    emoji: "💼", 
    image: "/team/mamba.png",
    description: "Mantiene al equipo enfocado. Experta en apagar incendios y gestionar el caos."
  },
  
  { 
    name: "Timoteo", 
    role: "Security Chief", 
    emoji: "🐶", 
    image: "/team/timoteo.png",
    description: "Ladra a los bugs y protege el servidor de intrusos."
  },
  
  { 
    name: "Tomi", 
    role: "Private Beta Tester", 
    emoji: "💻", 
    image: "/team/tomi.png",
    description: "Nacido con un teclado en la mano. Testea la jugabilidad hasta el límite."
  },
  { 
    name: "Laucha", 
    role: "Architect & Lead Developer", 
    emoji: "🛠️", 
    image: "/team/laucha.png",
    description: "El arquitecto del código. Convierte café en software robusto y escalable."
  },
  { 
    name: "Pedro", 
    role: "Emotional Support", 
    emoji: "🐱", 
    image: "/team/pedro.png",
    description: "Experto en control de calidad (siestas sobre el teclado). Juzga tu código con la mirada."
  },
  // --- NUEVO INTEGRANTE: TIMOTEO ---
  
];

const TeamCard = ({ member, index }) => {
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

      {/* AJUSTE DE GRILLA: lg:grid-cols-4 crea 2 filas de 4 personas. Queda perfecto y simétrico. */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 max-w-[1400px] mx-auto">
        {teamMembers.map((member, index) => (
          <TeamCard key={member.name} member={member} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Team;