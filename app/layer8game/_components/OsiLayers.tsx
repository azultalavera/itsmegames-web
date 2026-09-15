'use client';

import { Activity, Skull, Terminal as TerminalIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function OsiLayers() {
  const { t } = useLanguage();
  const layers = t.layer8.osiLayers.layers;

  return (
    <div className="w-full max-w-4xl mb-24">
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-3xl md:text-4xl font-orbitron font-black text-brand-dark text-center uppercase tracking-normal">
          {t.layer8.osiLayers.titlePre}
          <span className="text-brand-red">{t.layer8.osiLayers.titleHighlight}</span>
        </h2>
        <div className="flex items-center gap-1.5 text-gray-400 font-sharetech text-xs mt-2">
          <span className="animate-bounce">↓</span> {t.layer8.osiLayers.mapPrompt}{' '}
          <span className="animate-bounce">↓</span>
        </div>
      </div>

      <div className="relative border-l-2 border-brand-green/20 pl-8 ml-4 md:ml-12 space-y-12 py-4">
        {/* Layer 7 */}
        {layers[0] && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-[43px] top-1 w-6 h-6 rounded-full bg-brand-green border-4 border-white flex items-center justify-center shadow-md">
              <span className="w-1.5 h-1.5 bg-white rounded-full" />
            </div>
            <span className="font-vt323 text-2xl text-brand-green block mb-1">
              {layers[0].tag}
            </span>
            <h3 className="text-xl font-orbitron font-bold text-brand-dark mb-2 flex items-center gap-2">
              {layers[0].title} <Skull className="w-4 h-4 text-brand-red" />
            </h3>
            <p className="text-gray-600 font-satoshi text-sm leading-relaxed font-medium">
              {layers[0].desc}
            </p>
          </motion.div>
        )}

        {/* Layer 6 */}
        {layers[1] && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-[43px] top-1 w-6 h-6 rounded-full bg-brand-green border-4 border-white flex items-center justify-center shadow-md">
              <span className="w-1.5 h-1.5 bg-white rounded-full" />
            </div>
            <span className="font-vt323 text-2xl text-brand-green block mb-1">
              {layers[1].tag}
            </span>
            <h3 className="text-xl font-orbitron font-bold text-brand-dark mb-2 flex items-center gap-2">
              {layers[1].title} <Activity className="w-4 h-4 text-brand-tan" />
            </h3>
            <p className="text-gray-600 font-satoshi text-sm leading-relaxed font-medium">
              {layers[1].desc}
            </p>
          </motion.div>
        )}

        {/* Layer 5 */}
        {layers[2] && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-[43px] top-1 w-6 h-6 rounded-full bg-brand-green border-4 border-white flex items-center justify-center shadow-md">
              <span className="w-1.5 h-1.5 bg-white rounded-full" />
            </div>
            <span className="font-vt323 text-2xl text-brand-green block mb-1">
              {layers[2].tag}
            </span>
            <h3 className="text-xl font-orbitron font-bold text-brand-dark mb-2">
              {layers[2].title}
            </h3>
            <p className="text-gray-600 font-satoshi text-sm leading-relaxed font-medium">
              {layers[2].desc}
            </p>
          </motion.div>
        )}

        {/* Layer 4 */}
        {layers[3] && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-[43px] top-1 w-6 h-6 rounded-full bg-brand-green border-4 border-white flex items-center justify-center shadow-md">
              <span className="w-1.5 h-1.5 bg-white rounded-full" />
            </div>
            <span className="font-vt323 text-2xl text-brand-green block mb-1">
              {layers[3].tag}
            </span>
            <h3 className="text-xl font-orbitron font-bold text-brand-dark mb-2 flex items-center gap-2">
              {layers[3].title} <Activity className="w-4 h-4 text-brand-tan" />
            </h3>
            <p className="text-gray-600 font-satoshi text-sm leading-relaxed font-medium">
              {layers[3].desc}
            </p>
          </motion.div>
        )}

        {/* Layer 1 */}
        {layers[4] && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-[43px] top-1 w-6 h-6 rounded-full bg-brand-red border-4 border-white flex items-center justify-center shadow-md">
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
            </div>
            <span className="font-vt323 text-2xl text-brand-red block mb-1">
              {layers[4].tag}
            </span>
            <h3 className="text-xl font-orbitron font-bold text-brand-dark mb-2 flex items-center gap-2">
              {layers[4].title} <TerminalIcon className="w-4 h-4 text-brand-red animate-pulse" />
            </h3>
            <p className="text-gray-600 font-satoshi text-sm leading-relaxed font-medium">
              {layers[4].desc}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
