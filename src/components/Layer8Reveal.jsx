import { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Unlock, FileWarning } from 'lucide-react';

const clues = [
  {
    id: 1,
    label: "GÉNERO",
    secret: "Action Roguelite",
    fake: "CORRUPTED SECTOR",
  },
  {
    id: 2,
    label: "OBJETIVO",
    secret: "Proteger al Capitán",
    fake: "PROTOCOL 00-KILL",
  },
  {
    id: 3,
    label: "ENEMIGO",
    secret: "UNKNOWN", // <--- CAMBIO AQUÍ
    fake: "UNKNOWN ENTITY",
  },
];

const ClueCard = ({ clue, index }) => {
  const [isDecrypted, setIsDecrypted] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.2 }}
      onMouseEnter={() => setIsDecrypted(true)}
      onMouseLeave={() => setIsDecrypted(false)}
      className="relative group cursor-crosshair"
    >
      <div className={`p-6 rounded-xl border ${isDecrypted ? 'border-neon bg-neon/5' : 'border-gray-700 bg-darkbg/80'} transition-all duration-300 h-full backdrop-blur-sm`}>
        <div className="flex justify-between items-start mb-4">
          <span className="text-xs font-Orbitron text-gray-500 uppercase tracking-widest">
            Archivo 00{clue.id} // {clue.label}
          </span>
          {isDecrypted ? (
            <Unlock className="w-4 h-4 text-neon" />
          ) : (
            <Lock className="w-4 h-4 text-gray-500" />
          )}
        </div>

        <div className="relative overflow-hidden">
          <p className={`font-Orbitron text-xl md:text-2xl font-bold ${isDecrypted ? 'text-white text-glow' : 'text-gray-600 blur-[2px]'} transition-all duration-300`}>
            {isDecrypted ? clue.secret : clue.fake}
          </p>
          
          {!isDecrypted && (
            <div className="absolute inset-0 bg-transparent flex items-center justify-center pointer-events-none">
              <span className="text-xs text-neon/30 font-mono animate-pulse">HOVER TO DECRYPT</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Layer8Reveal = () => {
  const [isTitleHovered, setIsTitleHovered] = useState(false);
  const [isTextHovered, setIsTextHovered] = useState(false);

  return (
    <section className="relative w-full py-32 overflow-hidden bg-black border-y border-neon/20">
      
      {/* --- FONDO ANIMADO --- */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>
      
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0,50 L100,50 M50,0 L50,100" stroke="currentColor" strokeWidth="0.5" fill="none"/>
              <circle cx="50" cy="50" r="2" fill="currentColor"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" className="text-neon"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
            {/* Cabecera centrada, el resto alineado a la izquierda */}
            <div className="flex items-center justify-center gap-2 mb-6">
                <FileWarning className="text-neon animate-pulse w-5 h-5" />
                <span className="text-neon font-mono text-sm tracking-widest">SYSTEM ALERT: ANOMALY DETECTED</span>
            </div>

          <div className="text-center mb-12">
            <motion.h2
                onMouseEnter={() => setIsTitleHovered(true)}
                onMouseLeave={() => setIsTitleHovered(false)}
                className="text-5xl sm:text-6xl md:text-8xl font-Orbitron font-bold uppercase text-white cursor-default relative inline-block"
            >
                <span className="relative z-10 text-glow transition-all duration-300">
                    LAYER 8: ERROR
                </span>
                
                {isTitleHovered && (
                    <>
                    <span className="absolute top-0 left-0 -ml-1 text-neon opacity-70 animate-pulse z-0">LAYER 8: ERROR</span>
                    <span className="absolute top-0 left-0 ml-1 text-purple-500 opacity-70 animate-pulse z-0" style={{animationDelay: '0.1s'}}>LAYER 8: ERROR</span>
                    </>
                )}
            </motion.h2>
          </div>

          {/* --- TEXTO QUE SE REVELA (ALINEADO A LA IZQUIERDA Y CONSOLAS) --- */}
          <motion.div
            onMouseEnter={() => setIsTextHovered(true)}
            onMouseLeave={() => setIsTextHovered(false)}
            className="relative cursor-default mb-20 max-w-3xl mx-auto p-8 rounded-2xl transition-colors duration-500 hover:bg-white/5 border border-transparent hover:border-white/10"
          >
            {/* CAMBIOS AQUI: font-['Consolas'] y text-left */}
            <div className={`font-['Consolas',_'monospace'] text-left text-base sm:text-lg md:text-xl leading-relaxed space-y-6 transition-all duration-500 ${
              isTextHovered ? 'text-gray-200 blur-0' : 'text-gray-500 blur-[3px]'
            }`}>
              <p>{">"} Creíamos que conocíamos al enemigo.</p>
              <p>{">"} Luchamos contra malware, troyanos y corrupción de datos durante ciclos enteros.</p>
              <p className={isTextHovered ? "text-neon" : ""}>{">"} Estábamos equivocados.</p>
              <p>{">"} La verdadera amenaza no está hecha de código. No sigue nuestras reglas.</p>
              <p>{">"} Está ahí fuera, observando.</p>
              <p className="font-bold text-white mt-4 blink-cursor">{">"} _</p>
            </div>
            
            {!isTextHovered && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-xs font-mono text-neon/50 uppercase tracking-widest bg-black/80 px-4 py-2 rounded border border-neon/20">
                  HOVER TO DECRYPT MESSAGE
                </span>
              </div>
            )}
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {clues.map((clue, index) => (
                <ClueCard key={clue.id} clue={clue} index={index} />
            ))}
        </div>

        <div className="mt-16 max-w-lg mx-auto">
          <div className="flex justify-between text-xs font-mono text-gray-500 mb-2">
            <span>LOADING ASSETS...</span>
            <span className="text-neon animate-pulse">35%</span>
          </div>
          <div className="h-1 w-full bg-gray-900 rounded-full overflow-hidden border border-white/5">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "35%" }}
              transition={{ duration: 1.5, ease: "circOut", delay: 0.2 }}
              className="h-full bg-neon shadow-[0_0_10px_#00FFFF]"
            ></motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Layer8Reveal;