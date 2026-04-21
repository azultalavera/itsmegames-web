import { motion } from 'framer-motion';
import { Gamepad2, Cpu, Layers, Sparkles } from 'lucide-react';
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
    url: "https://itsmegames.com/layer8game"
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
      <a href={game.url} target="_blank" rel="noopener noreferrer" className="block h-full">
        <div className={`absolute -inset-0.5 bg-gradient-to-r ${game.color} opacity-20 group-hover:opacity-100 transition duration-500 blur-sm group-hover:blur-md`}></div>

        <div className="relative p-8 bg-darkbg border border-white/10 rounded-2xl h-full flex flex-col justify-between backdrop-blur-xl">
          <div>
            <div className="flex flex-col mb-8 relative">
              <div className="absolute top-4 right-4 z-20">
                <div className="flex flex-col items-end">
                  <span className="text-[10px] font-mono text-gray-400 tracking-tighter mb-1 uppercase bg-darkbg/60 backdrop-blur-md px-2 py-0.5 rounded">ESTADO</span>
                  <span className="text-[10px] font-mono text-neon bg-neon/10 px-3 py-1 rounded border border-neon/30 animate-pulse backdrop-blur-md">
                    {game.status}
                  </span>
                </div>
              </div>
              <div className={`w-full h-80 rounded-2xl bg-gradient-to-br ${game.color} bg-opacity-10 text-white shadow-2xl shadow-black/50 flex items-center justify-center border border-white/10 overflow-hidden group-hover:border-neon/30 transition-colors`}>
                <div className="w-full h-full p-8 transform group-hover:scale-110 transition-transform duration-700">
                  {game.icon}
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-Orbitron font-bold text-white mb-3 tracking-tight group-hover:text-glow transition-all">
              {game.title}
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed mb-6 font-medium">
              {game.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {game.tags.map(tag => (
                <span key={tag} className="text-[10px] font-mono text-gray-500 border border-white/5 bg-white/5 px-2 py-0.5 rounded">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Compilando...</span>
              <span className="text-[10px] font-mono text-white">{game.progress}%</span>
            </div>
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${game.progress}%` }}
                transition={{ duration: 1, delay: 0.5 }}
                className={`h-full bg-gradient-to-r ${game.color} shadow-[0_0_15px_rgba(0,0,0,0.5)]`}
              />
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  );
};

const GamesInDev = () => {
  return (
    <section id="games" className="relative w-full py-24 px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-30 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-neon/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-2 mb-4"
          >
            <Sparkles className="w-4 h-4 text-neon animate-spin-slow" />
            <span className="text-neon font-mono text-xs tracking-[0.4em] uppercase">Laboratorio de Ideas</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-Orbitron font-black text-white text-center mb-4 tracking-tighter">
            JUEGOS EN <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-purple-500">DESARROLLO</span>
          </h2>
          <p className="text-gray-500 font-mono text-center max-w-2xl text-sm md:text-base leading-relaxed">
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
            <div className="absolute -inset-0.5 bg-gradient-to-r from-neon to-purple-600 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-300"></div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GamesInDev;
