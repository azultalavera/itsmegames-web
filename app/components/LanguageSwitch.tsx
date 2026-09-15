'use client';

import { Globe } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

interface LanguageSwitchProps {
  className?: string;
  compact?: boolean;
}

export default function LanguageSwitch({ className = '', compact = false }: LanguageSwitchProps) {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.switch.ariaLabel}
      className={`inline-flex items-center p-1 rounded-full bg-slate-100/90 border border-brand-green/20 shadow-xs backdrop-blur-xs transition-all duration-300 hover:border-brand-green/40 ${className}`}
    >
      <div className="pl-1.5 pr-1 text-brand-green/70 flex items-center justify-center">
        <Globe className="w-3.5 h-3.5" />
      </div>

      <div className="relative flex items-center">
        {/* EN Button */}
        <button
          type="button"
          onClick={() => setLanguage('en')}
          aria-pressed={language === 'en'}
          title={t.switch.enTitle}
          className={`relative z-10 font-fredoka font-semibold uppercase tracking-wider transition-colors duration-200 cursor-pointer ${
            compact ? 'px-2 py-0.5 text-[11px]' : 'px-2.5 py-1 text-xs'
          } ${
            language === 'en'
              ? 'text-brand-dark font-bold'
              : 'text-gray-500 hover:text-brand-green'
          }`}
        >
          EN
          {language === 'en' && (
            <motion.div
              layoutId="lang-active-pill"
              className="absolute inset-0 bg-white rounded-full shadow-[0_2px_8px_rgba(24,122,52,0.15)] border border-brand-green/20 -z-10"
              transition={{ type: 'spring', stiffness: 450, damping: 30 }}
            />
          )}
        </button>

        {/* ES Button */}
        <button
          type="button"
          onClick={() => setLanguage('es')}
          aria-pressed={language === 'es'}
          title={t.switch.esTitle}
          className={`relative z-10 font-fredoka font-semibold uppercase tracking-wider transition-colors duration-200 cursor-pointer ${
            compact ? 'px-2 py-0.5 text-[11px]' : 'px-2.5 py-1 text-xs'
          } ${
            language === 'es'
              ? 'text-brand-dark font-bold'
              : 'text-gray-500 hover:text-brand-green'
          }`}
        >
          ES
          {language === 'es' && (
            <motion.div
              layoutId="lang-active-pill"
              className="absolute inset-0 bg-white rounded-full shadow-[0_2px_8px_rgba(24,122,52,0.15)] border border-brand-green/20 -z-10"
              transition={{ type: 'spring', stiffness: 450, damping: 30 }}
            />
          )}
        </button>
      </div>
    </div>
  );
}
