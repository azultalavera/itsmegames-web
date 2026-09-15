'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function Synergies() {
  const { t } = useLanguage();

  return (
    <div className="w-full max-w-4xl mb-20 p-8 rounded-2xl bg-slate-50 border border-brand-green/10">
      <h2 className="text-2xl md:text-3xl font-orbitron font-black text-brand-dark mb-8 text-center uppercase tracking-normal">
        {t.layer8.synergies.titlePre}
        <span className="text-brand-green">{t.layer8.synergies.titleHighlight}</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
        {t.layer8.synergies.items.map((item, index) => (
          <div key={index} className="p-4 bg-white rounded-lg border border-brand-green/10">
            <strong className="text-brand-green font-orbitron block mb-2">{item.title}</strong>
            <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
