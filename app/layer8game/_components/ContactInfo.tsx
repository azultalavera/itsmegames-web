'use client';

import { Mail, Phone } from 'lucide-react';
import { motion } from 'motion/react';

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="text-center text-xs font-mono text-gray-400 mt-8 border-t border-brand-green/15 pt-8 w-full max-w-md space-y-1.5"
    >
      <p className="font-bold text-gray-500 uppercase tracking-wider">CONTACTO DE AUDITORÍA</p>
      <p className="text-brand-green font-bold">Bruno Aresu Barella - Director / Game Design</p>
      <p className="text-gray-500 flex items-center justify-center gap-1">
        <Phone className="w-3.5 h-3.5 text-brand-green" /> +54 9 3512 13-3660
      </p>
      <p className="text-gray-500 flex items-center justify-center gap-1">
        <Mail className="w-3.5 h-3.5 text-brand-green" /> bruno.aresubarella@gmail.com
      </p>
      <p className="text-gray-400 mt-2 text-[10px]">VERSIÓN GDD: 1.0 (Publicado: 12 Mayo 2026)</p>
    </motion.div>
  );
}
