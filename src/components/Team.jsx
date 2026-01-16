import { motion } from 'framer-motion';

const teamMembers = [
  { name: "Brunito", role: "Fundador", emoji: "🎮", image: "https://source.unsplash.com/random/200x200/?cyberpunk,gamer,man,1" },
  { name: "Maxi", role: "Co-Fundadora", emoji: "👑", image: "https://source.unsplash.com/random/200x200/?cyberpunk,tech,man,2" },
  { name: "Mamba", role: "Jefe de Equipo", emoji: "💼", image: "https://source.unsplash.com/random/200x200/?cyberpunk,neon,woman,1" },
  { name: "Azul", role: "Lider Funcional", emoji: "🎯", image: "https://source.unsplash.com/random/200x200/?cyberpunk,art,woman,2" },
  { name: "Tomi", role: "Gamer", emoji: "💻", image: "https://source.unsplash.com/random/200x200/?cyberpunk,tech,man,4" },
  { name: "Laucha", role: "Lider Técnico", emoji: "🛠️", image: "https://source.unsplash.com/random/200x200/?cyberpunk,headset,man,3" },
];

const TeamCard = ({ member, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ y: -10 }}
    className="group relative p-[2px] rounded-2xl bg-gradient-to-b from-neon/50 to-transparent hover:from-neon hover:to-neon/30 transition-all duration-500"
  >
    <div className="bg-cardbg/90 backdrop-blur-xl p-4 rounded-2xl h-full flex flex-col items-center text-center relative overflow-hidden">
        
      {/* Efecto de resplandor en hover */}
      <div className="absolute inset-0 bg-neon/20 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative mb-4 rounded-full p-1 bg-gradient-to-br from-neon to-purple-500">
        <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-full bg-gradient-to-br from-neon/20 to-purple-500/20 border-4 border-darkbg flex items-center justify-center">
          <span className="text-4xl lg:text-5xl leading-none flex items-center justify-center filter drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">
            {member.emoji}
          </span>
        </div>
      </div>
      <h3 className="text-lg lg:text-xl text-white font-bold mb-1 group-hover:text-neon transition-colors truncate w-full">{member.name}</h3>
      {member.role && <p className="text-xs lg:text-sm text-gray-400 font-Inter">{member.role}</p>}
    </div>
  </motion.div>
);

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

      {/* CAMBIO CLAVE AQUÍ: xl:grid-cols-6 para que entren los 6 en una fila */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 px-4 max-w-[1400px] mx-auto">
        {teamMembers.map((member, index) => (
          <TeamCard key={member.name} member={member} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Team;