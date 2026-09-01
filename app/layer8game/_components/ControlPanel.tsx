'use client';

import { useState } from 'react';
import { Cpu, Laptop, Terminal as TerminalIcon, UserCheck } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

type SectionId = 'concept' | 'upgrades' | 'npcs' | 'specs';

interface ControlTab {
  id: SectionId;
  label: string;
  icon: typeof TerminalIcon;
}

const tabs: ControlTab[] = [
  { id: 'concept', label: 'CONCEPTO Y LORE', icon: TerminalIcon },
  { id: 'upgrades', label: 'MEJORAS Y GLITCHES', icon: Cpu },
  { id: 'npcs', label: 'SISTEMA DE NPCs', icon: UserCheck },
  { id: 'specs', label: 'REQUISITOS PC', icon: Laptop },
];

export default function ControlPanel() {
  const [activeSection, setActiveSection] = useState<SectionId>('concept');

  return (
    <div className="w-full max-w-4xl mb-16">
      <div className="flex flex-wrap justify-center gap-2 mb-6 border-b border-brand-green/10 pb-4">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveSection(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-orbitron text-xs font-bold transition-all ${
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
                <TerminalIcon className="w-5 h-5 text-brand-green" /> PROTOCOLO HIGH CONCEPT &
                HISTORIA
              </h3>

              <div className="space-y-6 text-gray-600 font-satoshi text-sm md:text-base leading-relaxed">
                <p className="font-medium">
                  Una supercomputadora corporativa ha entrado en crisis global. Vos sos{' '}
                  <strong className="text-brand-green">
                    {'"'}THE KERNEL KEEPER{'"'}
                  </strong>
                  , un protocolo de defensa brutal de última instancia. Tu misión no es limpiar
                  virus, es ejecutar todo lo que se mueva. Debes descender físicamente a través de
                  las{' '}
                  <strong className="text-brand-dark font-semibold">7 Capas del Modelo OSI</strong>,
                  desde la Interfaz Gráfica hasta el Hardware puro, para forzar un reinicio manual
                  antes de que el sistema se funda.
                </p>
                <div className="border-t border-brand-green/10 pt-4 space-y-4">
                  <p>
                    <strong className="text-brand-dark font-bold">El Comienzo:</strong> Empezamos en
                    el mundo físico. Una cinemática corta muestra una sala de servidores de Vanguard
                    Mainframes en alerta roja. Un técnico desesperado rompe un cristal de emergencia
                    y conecta el pendrive del KERNEL Keeper. La cámara hace zoom hacia los píxeles
                    del monitor CRT y somos transportados al software.
                  </p>
                  <p>
                    <strong className="text-brand-dark font-bold">El Progreso y Revelación:</strong>{' '}
                    El jugador avanza limpiando las distintas capas del Modelo OSI. Al llegar al
                    núcleo absoluto, se revela la verdad: la infección masiva no fue un ataque
                    externo, sino una negligencia directa del Usuario/Técnico (
                    <strong className="text-brand-red font-bold">La Capa 8</strong>). El jugador
                    debe tomar una decisión final que cerrará la run y afectará el meta-juego:
                    formatear y morir o aceptar su corrupción.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* MEJORAS Y GLITCHES */}
          {activeSection === 'upgrades' && (
            <div className="space-y-6">
              <h3 className="text-xl font-orbitron font-bold text-brand-dark mb-4 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-brand-green" /> SISTEMA DE CORRUPCIÓN (GLITCHES) Y
                MEJORAS DE NÚCLEO
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                El juego equilibra mejoras permanentes del núcleo de meta-progreso con glitches
                temporales que otorgan un poder devastador a cambio de un costo mecánico o visual
                severo.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-white border border-brand-green/10">
                  <span className="font-vt323 text-lg text-brand-green block mb-1">
                    PROGRESIÓN PERMANENTE (NÚCLEO)
                  </span>
                  <ul className="text-xs text-gray-600 space-y-2 list-disc pl-4 font-medium">
                    <li>
                      <strong>Ampliación de RAM:</strong> Añade un bloque de memoria verde extra
                      permanentemente.
                    </li>
                    <li>
                      <strong>Enrutamiento óptimo:</strong> Incrementa la velocidad de movimiento de
                      forma pasiva.
                    </li>
                    <li>
                      <strong>Protocolo Firewall:</strong> Escudo temporal de 1 impacto gratuito.
                    </li>
                    <li>
                      <strong>Refrigeración:</strong> Reduce tiempos de recarga del Dash evasivo.
                    </li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg bg-white border border-brand-red/10">
                  <span className="font-vt323 text-lg text-brand-red block mb-1">
                    GLITCHES TEMPORALES (CORRUPCIÓN)
                  </span>
                  <ul className="text-xs text-gray-600 space-y-2 list-disc pl-4 font-medium">
                    <li>
                      <strong>Overclock:</strong> Cadencia extrema. <em>Penalización:</em> Pantalla
                      parpadea.
                    </li>
                    <li>
                      <strong>Fuga de Memoria:</strong> Daño duplicado. <em>Penalización:</em> Dash
                      sin frames de invulnerabilidad.
                    </li>
                    <li>
                      <strong>Protocolo Vampiro:</strong> Curación por Dash físico.{' '}
                      <em>Penalización:</em> Vida máxima reducida a 3 bloques.
                    </li>
                    <li>
                      <strong>Fragmentación:</strong> Dispersión masiva. <em>Penalización:</em> -20%
                      velocidad de movimiento.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* NPCs */}
          {activeSection === 'npcs' && (
            <div>
              <h3 className="text-xl font-orbitron font-bold text-brand-dark mb-4 flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-brand-green" /> SOCIOS Y ENEMIGOS DEL SISTEMA
              </h3>
              <div className="space-y-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                  La historia se cuenta mediante lore diegético e interacciones rápidas con
                  utilidades y asistentes del sistema operativo que sobrevivieron a la infección.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-3 bg-white rounded-lg border border-brand-green/10">
                    <strong className="text-brand-green block mb-1">
                      Diag.exe (Asistente de Diagnóstico)
                    </strong>
                    <span className="text-gray-500">
                      Un archivo nativo y limpio que te provee reconocimiento e información del
                      lore. Diag.exe teme a los métodos implacables del Keeper.
                    </span>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-brand-green/10">
                    <strong className="text-brand-green block mb-1">
                      Merchant.bat (Buhonero Digital)
                    </strong>
                    <span className="text-gray-500">
                      Un procesador por lotes que trafica con fragmentos de código, vendiendo
                      parches de reparación a cambio de Cripto-Datos.
                    </span>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-brand-green/10">
                    <strong className="text-brand-red block mb-1">
                      Clip.exe (El Asistente Rencoroso)
                    </strong>
                    <span className="text-gray-500">
                      Una parodia de asistente clásico de oficina, resentido por haber sido
                      archivado, que te pondrá pruebas y trabas lógicas.
                    </span>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-brand-green/10">
                    <strong className="text-brand-green block mb-1">
                      Archive.rar (El Archivo Eterno)
                    </strong>
                    <span className="text-gray-500">
                      Almacenador de logs y bases de datos que te permite revisar el meta-progreso
                      de tus Runs.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* REQUISITOS PC */}
          {activeSection === 'specs' && (
            <div>
              <h3 className="text-xl font-orbitron font-bold text-brand-dark mb-4 flex items-center gap-2">
                <Laptop className="w-5 h-5 text-brand-green" /> REQUISITOS TÉCNICOS DE HARDWARE (PC)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm font-mono mt-4">
                <div className="p-4 bg-white rounded-xl border border-brand-green/10">
                  <span className="text-brand-green font-bold block mb-2">
                    [REQUISITOS MÍNIMOS]
                  </span>
                  <ul className="space-y-1 text-xs text-gray-600">
                    <li>OS: Windows 10/11 (64-bit)</li>
                    <li>CPU: Dual Core 2.0 GHz</li>
                    <li>RAM: 4 GB RAM</li>
                    <li>GPU: Gráficos integrados (DX11)</li>
                    <li>Almacenamiento: 2 GB Libres</li>
                  </ul>
                </div>
                <div className="p-4 bg-white rounded-xl border border-brand-green/20">
                  <span className="text-brand-green font-bold block mb-2">
                    [REQUISITOS RECOMENDADOS]
                  </span>
                  <ul className="space-y-1 text-xs text-gray-600">
                    <li>OS: Windows 10/11 (64-bit)</li>
                    <li>CPU: AMD Ryzen 5 5600GT o similar</li>
                    <li>RAM: 8 GB RAM</li>
                    <li>GPU: NVIDIA RTX 5060 o similar</li>
                    <li>Almacenamiento: 2 GB Libres (SSD)</li>
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
