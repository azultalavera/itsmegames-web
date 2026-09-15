'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { games, type Game } from '@/lib/data/games';
import { useLanguage } from '@/lib/i18n/LanguageContext';

interface GameCardProps {
  game: Game;
  index: number;
}

function GameCard({ game, index }: GameCardProps) {
  const { t } = useLanguage();
  const isLayer8 = game.id === 1;
  const gameTitle = isLayer8 ? t.games.layer8.title : game.title;
  const gameStatus = isLayer8 ? t.games.layer8.status : game.status;
  const gameDesc = isLayer8 ? t.games.layer8.description : game.description;
  const gameTags = isLayer8 ? t.games.layer8.tags : game.tags;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -10 }}
      className="relative group cursor-pointer"
    >
      <Link href={game.url} className="block h-full">
        <div
          className={`absolute -inset-0.5 bg-gradient-to-r ${game.color} opacity-10 group-hover:opacity-60 transition duration-500 blur-sm group-hover:blur-md`}
        ></div>

        <div className="relative p-8 bg-white border border-brand-green/10 rounded-2xl h-full flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-300">
          <div>
            <div className="flex flex-col mb-8 relative">
              <div className="absolute top-4 right-4 z-20">
                <div className="flex flex-col items-end">
                  <span className="text-[10px] font-mono text-gray-500 tracking-tighter mb-1 uppercase bg-brand-light/80 px-2 py-0.5 rounded">
                    {t.games.statusLabel}
                  </span>
                  <span className="text-[10px] font-mono text-brand-green bg-brand-green/10 px-3 py-1 rounded border border-brand-green/20 animate-pulse backdrop-blur-md">
                    {gameStatus}
                  </span>
                </div>
              </div>
              <div className="w-full h-80 rounded-2xl bg-slate-50 text-brand-dark shadow-sm flex items-center justify-center border border-brand-green/10 overflow-hidden group-hover:border-brand-green/30 transition-colors relative">
                <div className="w-full h-full p-8 transform group-hover:scale-110 transition-transform duration-700">
                  <Image
                    src={game.image}
                    alt={gameTitle}
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* Hover overlay with CTA */}
                <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <span className="bg-white/95 text-brand-dark text-xs font-fredoka font-bold py-2.5 px-5 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 tracking-wider">
                    {t.games.clickToEnter}
                  </span>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-fredoka font-bold text-brand-dark mb-3 tracking-wide group-hover:text-glow transition-all">
              {gameTitle}
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed mb-6 font-medium font-satoshi">
              {gameDesc}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {gameTags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-mono text-brand-green border border-brand-green/10 bg-brand-green/5 px-2 py-0.5 rounded font-semibold"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                  {t.games.compiling}
                </span>
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

            <div className="flex justify-center items-center gap-2 py-3 px-4 rounded-xl border border-brand-green/20 bg-brand-green/5 text-brand-green group-hover:bg-brand-green group-hover:text-white group-hover:border-brand-green group-hover:shadow-[0_0_15px_rgba(24,122,52,0.2)] transition-all duration-300 font-fredoka font-bold text-xs tracking-wider">
              <span>{t.games.clickToView}</span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
              >
                →
              </motion.span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function GamesInDev() {
  const { t } = useLanguage();

  return (
    <section id="games" className="relative w-full py-8 md:py-12 px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-20 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-green/5 rounded-full blur-[120px] animate-pulse"></div>
        <div
          className="absolute bottom-1/4 left-0 w-96 h-96 bg-brand-tan/5 rounded-full blur-[120px] animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-2 mb-4"
          >
            <Sparkles className="w-4 h-4 text-brand-green animate-spin-slow" />
            <span className="text-brand-green font-fredoka text-xs tracking-wider uppercase">
              {t.games.badge}
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-fredoka font-black text-brand-dark text-center mb-4 tracking-normal uppercase">
            {t.games.titlePre}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-brand-tan text-glow">
              {t.games.titleHighlight}
            </span>
          </h2>
          <p className="text-gray-600 font-satoshi text-center max-w-2xl text-sm md:text-base leading-relaxed">
            {t.games.subtitle}
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
}
