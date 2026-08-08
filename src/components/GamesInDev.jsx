import { motion } from 'framer-motion';
import { Gamepad2, Cpu, Layers, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import layer8Logo from '../assets/img/layer8.png';

const games = [
  {
    id: 1,
    title: "LAYER 8",
    status: "EN DESARROLLO",
    progress: 35,
    description: "Un Twin-Stick RogueLite donde debes purgar el sistema de una amenaza desconocida.",
    color: "from-cyan-500 to-blue-600",
    icon: <img src={layer8Logo} alt="Layer 8 Logo" className="w-full h-full object-contain" />,
    tags: ["Action", "RogueLite", "Cyberpunk"],
    url: "/layer8game"
  }
];

const GameCard = ({ game, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -10 }}
      className="relative group cursor-pointer"
    >
      <Link to={game.url} className="block h-full">
        <div className={`absolute -inset-0.5 bg-gradient-to-r ${game.color} opacity-10 group-hover:opacity-60 transition duration-500 blur-sm group-hover:blur-md`}></div>

        <div className="relative p-8 bg-white border border-brand-green/10 rounded-2xl h-full flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-300">
          <div>
            <div className="flex flex-col mb-8 relative">
              <div className="absolute top-4 right-4 z-20">
                <div className="flex flex-col items-end">
                  <span className="text-[10px] font-mono text-gray-500 tracking-tighter mb-1 uppercase bg-brand-light/80 px-2 py-0.5 rounded">ESTADO</span>
                  <span className="text-[10px] font-mono text-brand-green bg-brand-green/10 px-3 py-1 rounded border border-brand-green/20 animate-pulse backdrop-blur-md">
                    {game.status}
                  </span>
                </div>
              </div>
              <div className="w-full h-80 rounded-2xl bg-slate-50 text-brand-dark shadow-sm flex items-center justify-center border border-brand-green/10 overflow-hidden group-hover:border-brand-green/30 transition-colors relative">
                <div className="w-full h-full p-8 transform group-hover:scale-110 transition-transform duration-700">
                  {game.icon}
                </div>
                {/* Hover overlay with CTA */}
                <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <span className="bg-white/95 text-brand-dark text-xs font-Fredoka font-bold py-2.5 px-5 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 tracking-wider">
                    CLICK PARA ENTRAR
                  </span>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-Fredoka font-bold text-brand-dark mb-3 tracking-wide group-hover:text-glow transition-all">
              {game.title}
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed mb-6 font-medium font-Satoshi">
              {game.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {game.tags.map(tag => (
                <span key={tag} className="text-[10px] font-mono text-brand-green border border-brand-green/10 bg-brand-green/5 px-2 py-0.5 rounded font-semibold">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Compilando...</span>
                <span className="text-[10px] font-mono text-brand-dark">{game.progress}%</span>
              </div>
              <div className="h-1.5 w-full bg-brand-green/5 rounded-full overflow-hidden border border-brand-green/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${game.progress}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className={`h-full bg-gradient-to-r ${game.color} shadow-[0_0_15px_rgba(24,122,52,0.2)]`}
                />
              </div>
            </div>

            <div className="flex justify-center items-center gap-2 py-3 px-4 rounded-xl border border-brand-green/20 bg-brand-green/5 text-brand-green group-hover:bg-brand-green group-hover:text-white group-hover:border-brand-green group-hover:shadow-[0_0_15px_rgba(24,122,52,0.2)] transition-all duration-300 font-Fredoka font-bold text-xs tracking-wider">
              <span>CLICK AQUÍ PARA VER</span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
              >
                →
              </motion.span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const GamesInDev = () => {
  return (
    <section id="games" className="relative w-full py-8 md:py-12 px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-20 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-green/5 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-brand-tan/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-2 mb-4"
          >
            <Sparkles className="w-4 h-4 text-brand-green animate-spin-slow" />
            <span className="text-brand-green font-Fredoka text-xs tracking-wider uppercase">Laboratorio de Ideas</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-Fredoka font-black text-brand-dark text-center mb-4 tracking-normal uppercase">
            Juegos en <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-brand-tan text-glow">Desarrollo</span>
          </h2>
          <p className="text-gray-600 font-Satoshi text-center max-w-2xl text-sm md:text-base leading-relaxed">
            Explora los proyectos que están tomando forma en el núcleo de ItsMeGames.
            Donde el código se encuentra con la creatividad pura.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          {games.map((game, index) => (
            <div key={game.id} className="w-full max-w-[450px]">
              <GameCard game={game} index={index} />
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-green to-brand-tan rounded-full blur opacity-40 group-hover:opacity-100 transition duration-300"></div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GamesInDev;
