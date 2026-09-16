'use client';

import { useState } from 'react';
import { Cpu, Laptop, Terminal as TerminalIcon, UserCheck } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

type SectionId = 'concept' | 'upgrades' | 'npcs' | 'specs';

export default function ControlPanel() {
  const [activeSection, setActiveSection] = useState<SectionId>('concept');
  const { t } = useLanguage();

  const tabs: Array<{ id: SectionId; label: string; icon: typeof TerminalIcon }> = [
    { id: 'concept', label: t.layer8.controlPanel.tabs.concept, icon: TerminalIcon },
    { id: 'upgrades', label: t.layer8.controlPanel.tabs.upgrades, icon: Cpu },
    { id: 'npcs', label: t.layer8.controlPanel.tabs.npcs, icon: UserCheck },
    { id: 'specs', label: t.layer8.controlPanel.tabs.specs, icon: Laptop },
  ];

  return (
    <div className="w-full max-w-4xl mb-16">
      <div className="flex flex-wrap justify-center gap-2 mb-6 border-b border-brand-green/10 pb-4">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveSection(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-orbitron text-xs font-bold transition-all cursor-pointer ${
                activeSection === tab.id
                  ? 'bg-brand-green text-white shadow-sm'
                  : 'bg-slate-50 border border-brand-green/10 text-gray-500 hover:text-brand-green hover:bg-brand-green/5'
              }`}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="p-6 md:p-8 rounded-2xl bg-slate-50 border border-brand-green/10 shadow-[0_8px_30px_rgba(24,122,52,0.04)] relative overflow-hidden min-h-[300px]"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-green via-brand-tan to-brand-red"></div>

          {/* CONCEPTO Y LORE */}
          {activeSection === 'concept' && (
            <div>
              <h3 className="text-xl font-orbitron font-bold text-brand-dark mb-4 flex items-center gap-2">
                <TerminalIcon className="w-5 h-5 text-brand-green" />{' '}
                {t.layer8.controlPanel.concept.title}
              </h3>

              <div className="space-y-6 text-gray-600 font-satoshi text-sm md:text-base leading-relaxed">
                <p className="font-medium">{t.layer8.controlPanel.concept.p1}</p>
                <div className="border-t border-brand-green/10 pt-4 space-y-4">
                  <p>
                    <strong className="text-brand-dark font-bold">
                      {t.layer8.controlPanel.concept.beginningTitle}{' '}
                    </strong>
                    {t.layer8.controlPanel.concept.beginningText}
                  </p>
                  <p>
                    <strong className="text-brand-dark font-bold">
                      {t.layer8.controlPanel.concept.progressionTitle}{' '}
                    </strong>
                    {t.layer8.controlPanel.concept.progressionText}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* MEJORAS Y GLITCHES */}
          {activeSection === 'upgrades' && (
            <div className="space-y-6">
              <h3 className="text-xl font-orbitron font-bold text-brand-dark mb-4 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-brand-green" /> {t.layer8.controlPanel.upgrades.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t.layer8.controlPanel.upgrades.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-white border border-brand-green/10">
                  <span className="font-vt323 text-lg text-brand-green block mb-1">
                    {t.layer8.controlPanel.upgrades.permanentTitle}
                  </span>
                  <ul className="text-xs text-gray-600 space-y-2 list-disc pl-4 font-medium">
                    {t.layer8.controlPanel.upgrades.permanentList.map((item, index) => (
                      <li key={index}>
                        <strong>{item.title} </strong>
                        {item.desc}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 rounded-lg bg-white border border-brand-red/10">
                  <span className="font-vt323 text-lg text-brand-red block mb-1">
                    {t.layer8.controlPanel.upgrades.glitchesTitle}
                  </span>
                  <ul className="text-xs text-gray-600 space-y-2 list-disc pl-4 font-medium">
                    {t.layer8.controlPanel.upgrades.glitchesList.map((item, index) => (
                      <li key={index}>
                        <strong>{item.title} </strong>
                        {item.desc}{' '}
                        <em>
                          {t.layer8.controlPanel.upgrades.penaltyLabel} {item.penalty}
                        </em>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* NPCs */}
          {activeSection === 'npcs' && (
            <div>
              <h3 className="text-xl font-orbitron font-bold text-brand-dark mb-4 flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-brand-green" /> {t.layer8.controlPanel.npcs.title}
              </h3>
              <div className="space-y-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t.layer8.controlPanel.npcs.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  {t.layer8.controlPanel.npcs.list.map((npc, index) => (
                    <div key={index} className="p-3 bg-white rounded-lg border border-brand-green/10">
                      <strong
                        className={`block mb-1 ${
                          npc.isRed ? 'text-brand-red' : 'text-brand-green'
                        }`}
                      >
                        {npc.name}
                      </strong>
                      <span className="text-gray-500">{npc.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* REQUISITOS PC */}
          {activeSection === 'specs' && (
            <div>
              <h3 className="text-xl font-orbitron font-bold text-brand-dark mb-4 flex items-center gap-2">
                <Laptop className="w-5 h-5 text-brand-green" /> {t.layer8.controlPanel.specs.title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm font-mono mt-4">
                <div className="p-4 bg-white rounded-xl border border-brand-green/10">
                  <span className="text-brand-green font-bold block mb-2">
                    {t.layer8.controlPanel.specs.minTitle}
                  </span>
                  <ul className="space-y-1 text-xs text-gray-600">
                    <li>OS: Windows 10/11 (64-bit)</li>
                    <li>CPU: Dual Core 2.0 GHz</li>
                    <li>RAM: 4 GB RAM</li>
                    <li>{t.layer8.controlPanel.specs.minGpu}</li>
                    <li>{t.layer8.controlPanel.specs.minStorage}</li>
                  </ul>
                </div>
                <div className="p-4 bg-white rounded-xl border border-brand-green/20">
                  <span className="text-brand-green font-bold block mb-2">
                    {t.layer8.controlPanel.specs.recTitle}
                  </span>
                  <ul className="space-y-1 text-xs text-gray-600">
                    <li>OS: Windows 10/11 (64-bit)</li>
                    <li>{t.layer8.controlPanel.specs.recCpu}</li>
                    <li>RAM: 8 GB RAM</li>
                    <li>{t.layer8.controlPanel.specs.recGpu}</li>
                    <li>{t.layer8.controlPanel.specs.recStorage}</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
