'use client';

import { Flame } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function Layer8Hero() {
  const { t } = useLanguage();

  return (
    <div className="text-center mb-16 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-red/20 bg-brand-red/5 text-brand-red font-fredoka text-xs sm:text-sm font-medium mb-6"
      >
        <Flame className="w-4 h-4 text-brand-red animate-pulse" />
        {t.layer8.hero.alert}
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-7xl md:text-9xl font-orbitron font-black text-brand-dark mb-4 tracking-tight uppercase"
      >
        LAYER <span className="text-brand-green text-glow">8</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-lg md:text-xl font-sharetech uppercase text-brand-red tracking-wider mb-8 bg-brand-red/5 py-2 px-4 rounded border border-brand-red/10 max-w-3xl mx-auto font-bold leading-relaxed"
      >
        {t.layer8.hero.tagline}
      </motion.p>

      {/* Badges de Información Rápida */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex flex-wrap justify-center gap-2 font-sharetech text-xs"
      >
        <span className="px-3 py-1.5 bg-slate-50 border border-brand-green/20 rounded-md text-brand-green font-semibold">
          {t.layer8.hero.genre}
        </span>
        <span className="px-3 py-1.5 bg-slate-50 border border-brand-green/20 rounded-md text-brand-green font-semibold">
          {t.layer8.hero.platform}
        </span>
        <span className="px-3 py-1.5 bg-slate-50 border border-brand-green/20 rounded-md text-brand-green font-semibold">
          {t.layer8.hero.target}
        </span>
        <span className="px-3 py-1.5 bg-slate-50 border border-brand-green/20 rounded-md text-brand-green font-semibold animate-pulse">
          {t.layer8.hero.releaseDate}
        </span>
      </motion.div>
    </div>
  );
}
