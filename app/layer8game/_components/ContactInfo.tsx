'use client';

import { Mail, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function ContactInfo() {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="text-center text-xs font-mono text-gray-400 mt-8 border-t border-brand-green/15 pt-8 w-full max-w-md space-y-1.5"
    >
      <p className="font-bold text-gray-500 uppercase tracking-wider">{t.layer8.contact.title}</p>
      <p className="text-brand-green font-bold">
        Bruno Aresu Barella - {t.layer8.contact.role}
      </p>
      <p className="text-gray-500 flex items-center justify-center gap-1">
        <Phone className="w-3.5 h-3.5 text-brand-green" /> +54 9 3512 13-3660
      </p>
      <p className="text-gray-500 flex items-center justify-center gap-1">
        <Mail className="w-3.5 h-3.5 text-brand-green" /> bruno.aresubarella@gmail.com
      </p>
      <p className="text-gray-400 mt-2 text-[10px]">{t.layer8.contact.gdd}</p>
    </motion.div>
  );
}
