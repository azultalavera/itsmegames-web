import { useState } from 'react';
import { motion } from 'framer-motion';
import utnLogo from '../assets/img/utn.png';
import lanasLogo from '../assets/img/Logo Lanas.png';

// --- DATOS DE SOCIOS ESTRATÉGICOS ---
const sponsorsList = [
  {
    name: "UTN FRC",
    tier: "Socio Académico",
    image: utnLogo,
    description: "Universidad Tecnológica Nacional - Facultad Regional Córdoba. Impulsando la innovación técnica y formación profesional."
  },
  {
    name: "Lanas Córdoba",
    tier: "Socio Estratégico",
    image: lanasLogo,
    description: "Referente en la industria textil. Colaborando en el crecimiento de proyectos con impacto local."
  },
];

const SponsorCard = ({ sponsor, index }) => {
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
        {/* --- CARA FRONTAL (LOGO) --- */}
        <div
          className="absolute inset-0 backface-hidden rounded-2xl p-[2px] bg-gradient-to-b from-neon/50 to-transparent"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="bg-darkbg/90 backdrop-blur-xl p-4 rounded-2xl h-full flex flex-col items-center text-center relative overflow-hidden border border-white/5">
            {/* Efecto de brillo al hacer hover */}
            <div className={`absolute inset-0 bg-neon/10 blur-[100px] transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>

            <div className="relative mb-4 rounded-full p-1 bg-gradient-to-br from-neon to-purple-500 mt-4 shadow-[0_0_20px_rgba(0,255,255,0.2)]">
              <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-full bg-white border-4 border-white/10 flex items-center justify-center overflow-hidden relative">
                <img
                  src={sponsor.image}
                  alt={sponsor.name}
                  className={`w-full h-full object-contain p-2 transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
                />
              </div>
            </div>

            <h3 className="text-lg lg:text-xl text-white font-bold mb-1 truncate w-full font-Orbitron">{sponsor.name}</h3>
            {sponsor.tier && <p className="text-[10px] text-neon font-mono uppercase tracking-[0.2em]">{sponsor.tier}</p>}

            <div className="absolute bottom-3 text-[10px] text-neon/30 uppercase tracking-[0.3em] animate-pulse font-mono">Info del Socio</div>
          </div>
        </div>

        {/* --- CARA TRASERA (INFO) --- */}
        <div
          className="absolute inset-0 backface-hidden rounded-2xl p-[2px] bg-gradient-to-b from-purple-500 to-neon/50"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="bg-black/95 backdrop-blur-2xl p-6 rounded-2xl h-full flex flex-col items-center justify-center text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon to-purple-500"></div>

            <h3 className="text-lg text-neon font-Orbitron font-bold mb-3 uppercase tracking-tighter">{sponsor.name}</h3>
            <p className="text-gray-400 text-xs font-Inter leading-relaxed">
              {sponsor.description}
            </p>

            {/* Icono decorativo */}
            <div className="mt-4 opacity-50">
              <div className="w-8 h-8 rounded-full border border-neon/30 flex items-center justify-center">
                <div className="w-2 h-2 bg-neon rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Sponsors = () => {
  return (
    <section id="sponsors" className="relative w-full py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="inline-block px-3 py-1 rounded-full border border-neon/30 bg-neon/5 mb-4">
          <span className="text-[10px] text-neon font-mono uppercase tracking-[0.5em]">Alianzas</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-Orbitron font-black text-white mb-4 tracking-tighter">
          SOCIOS <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-purple-500">ESTRATÉGICOS</span>
        </h2>
        <p className="text-gray-500 font-mono text-sm max-w-2xl mx-auto">Colaborando con instituciones y empresas líderes para expandir los límites del entretenimiento digital.</p>
      </motion.div>

      {/* Grid de Socios */}
      <div className="flex flex-wrap justify-center gap-10 max-w-5xl mx-auto">
        {sponsorsList.map((sponsor, index) => (
          <div key={sponsor.name} className="w-full sm:w-[300px]">
            <SponsorCard sponsor={sponsor} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sponsors;