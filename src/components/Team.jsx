import { motion } from 'framer-motion';

const teamMembers = [
  { name: "Brunito", role: "Main Streamer / Dev", image: "https://source.unsplash.com/random/200x200/?cyberpunk,gamer,man,1" },
  { name: "Maxi", role: "Co-Founder / Dev", image: "https://source.unsplash.com/random/200x200/?cyberpunk,tech,man,2" },
  { name: "Mamba", role: "Community Lead", image: "https://source.unsplash.com/random/200x200/?cyberpunk,neon,woman,1" },
  { name: "Azul", role: "Designer / Mod", image: "https://source.unsplash.com/random/200x200/?cyberpunk,art,woman,2" },
  { name: "Laucha", role: "Support / Gamer", image: "https://source.unsplash.com/random/200x200/?cyberpunk,headset,man,3" },
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
    <div className="bg-cardbg/90 backdrop-blur-xl p-6 rounded-2xl h-full flex flex-col items-center text-center relative overflow-hidden">
        
      {/* Efecto de resplandor en hover */}
      <div className="absolute inset-0 bg-neon/20 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative mb-6 rounded-full p-1 bg-gradient-to-br from-neon to-purple-500">
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-32 h-32 rounded-full object-cover border-4 border-darkbg"
        />
      </div>
      <h3 className="text-2xl text-white font-bold mb-2 group-hover:text-neon transition-colors">{member.name}</h3>
      <p className="text-gray-400 font-Inter">{member.role}</p>
    </div>
  </motion.div>
);

const Team = () => {
  return (
    <section className="relative">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">LA FAMILIA</h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">El equipo detrás de la magia. Y seguimos creciendo.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 px-4">
        {teamMembers.map((member, index) => (
          <TeamCard key={member.name} member={member} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Team;