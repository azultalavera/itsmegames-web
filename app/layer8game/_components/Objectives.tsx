'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function Objectives() {
  const { t } = useLanguage();

  return (
    <div className="w-full max-w-5xl mb-24">
      <h2 className="text-3xl md:text-4xl font-orbitron font-black text-brand-dark mb-10 text-center uppercase tracking-normal">
        {t.layer8.objectives.titlePre}
        <span className="text-brand-green font-extrabold">{t.layer8.objectives.titleHighlight}</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {t.layer8.objectives.items.map((item, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl bg-white border border-brand-green/10 shadow-sm hover:shadow-md transition-shadow"
          >
            <span
              className={`font-vt323 text-2xl block mb-2 ${
                item.isRed ? 'text-brand-red' : 'text-brand-green'
              }`}
            >
              {item.title}
            </span>
            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
