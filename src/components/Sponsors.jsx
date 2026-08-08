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
          className="absolute inset-0 backface-hidden rounded-2xl p-[2px] bg-gradient-to-b from-brand-green/40 to-brand-tan/20"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="bg-cardbg backdrop-blur-xl p-4 rounded-2xl h-full flex flex-col items-center text-center relative overflow-hidden border border-brand-green/10 shadow-sm">
            {/* Efecto de brillo al hacer hover */}
            <div className={`absolute inset-0 bg-brand-green/5 blur-[100px] transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>

            <div className="relative mb-4 rounded-full p-1 bg-gradient-to-br from-brand-green to-brand-tan mt-4 shadow-[0_4px_12px_rgba(24,122,52,0.15)]">
              <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-full bg-white border-4 border-brand-green/15 flex items-center justify-center overflow-hidden relative">
                <img
                  src={sponsor.image}
                  alt={sponsor.name}
                  className={`w-full h-full object-contain p-2 transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
                />
              </div>
            </div>

            <h3 className="text-lg lg:text-xl text-brand-dark font-bold mb-1 truncate w-full font-Fredoka">{sponsor.name}</h3>
            {sponsor.tier && <p className="text-[10px] text-brand-green font-Fredoka font-semibold uppercase tracking-[0.2em]">{sponsor.tier}</p>}

            <div className="absolute bottom-3 text-[10px] text-brand-green/80 uppercase tracking-[0.3em] animate-pulse font-Fredoka">Info del Socio</div>
          </div>
        </div>

        {/* --- CARA TRASERA (INFO) --- */}
        <div
          className="absolute inset-0 backface-hidden rounded-2xl p-[2px] bg-gradient-to-b from-brand-tan to-brand-green/40"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="bg-white border border-brand-green/10 backdrop-blur-2xl p-6 rounded-2xl h-full flex flex-col items-center justify-center text-center relative overflow-hidden shadow-sm">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-green to-brand-tan"></div>

            <h3 className="text-lg text-brand-green font-Fredoka font-bold mb-3 uppercase tracking-normal">{sponsor.name}</h3>
            <p className="text-gray-600 text-xs font-Satoshi leading-relaxed">
              {sponsor.description}
            </p>

            {/* Icono decorativo */}
            <div className="mt-4 opacity-50">
              <div className="w-8 h-8 rounded-full border border-brand-green/30 flex items-center justify-center">
                <div className="w-2 h-2 bg-brand-green rounded-full animate-ping"></div>
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
    <section id="sponsors" className="relative w-full py-8 md:py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="inline-block px-3 py-1 rounded-full border border-brand-green/20 bg-brand-green/10 mb-4">
          <span className="text-[10px] text-brand-green font-Fredoka font-semibold uppercase tracking-wider">Alianzas</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-Fredoka font-black text-brand-dark mb-4 tracking-normal uppercase">
          Socios <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-brand-tan text-glow">Estratégicos</span>
        </h2>
        <p className="text-gray-600 font-Satoshi text-sm max-w-2xl mx-auto">Colaborando con instituciones y empresas líderes para expandir los límites del entretenimiento digital.</p>
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