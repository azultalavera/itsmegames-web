'use client';

import { Activity, Skull, Terminal as TerminalIcon } from 'lucide-react';
import { motion } from 'motion/react';

export default function OsiLayers() {
  return (
    <div className="w-full max-w-4xl mb-24">
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-3xl md:text-4xl font-orbitron font-black text-brand-dark text-center uppercase tracking-normal">
          EL CONFLICTO: <span className="text-brand-red">LAS CAPAS OSI</span>
        </h2>
        <div className="flex items-center gap-1.5 text-gray-400 font-sharetech text-xs mt-2">
          <span className="animate-bounce">↓</span> MAPA DEL MODELO OSI (V verticale descent){' '}
          <span className="animate-bounce">↓</span>
        </div>
      </div>

      <div className="relative border-l-2 border-brand-green/20 pl-8 ml-4 md:ml-12 space-y-12 py-4">
        {/* Capa 7 */}
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
            CAPA 7 (APLICACIÓN) • JEFATURA DIGITAL
          </span>
          <h3 className="text-xl font-orbitron font-bold text-brand-dark mb-2 flex items-center gap-2">
            THE HYDRA BROWSER <Skull className="w-4 h-4 text-brand-red" />
          </h3>
          <p className="text-gray-600 font-satoshi text-sm leading-relaxed font-medium">
            Un navegador monstruoso e invasivo. Si le cerrás una pestaña (cabeza), abre
            automáticamente dos más. Aquí consigues la escopeta pesada{' '}
            <strong className="text-brand-green">FAT32 Scattergun</strong> en la carpeta de
            descargas del sistema.
          </p>
        </motion.div>

        {/* Capa 6 */}
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
            CAPA 6 (PRESENTACIÓN) • LABERINTOS DE ENCRIPTACIÓN
          </span>
          <h3 className="text-xl font-orbitron font-bold text-brand-dark mb-2 flex items-center gap-2">
            RSA-PIERCER GUN <Activity className="w-4 h-4 text-brand-tan" />
          </h3>
          <p className="text-gray-600 font-satoshi text-sm leading-relaxed font-medium">
            Lugar de laberintos de encriptación de datos. Utiliza el emisor{' '}
            <strong className="text-brand-green">Perforador RSA</strong> para proyectar un haz de
            energía continua capaz de atravesar múltiples protecciones enemigas (reduce tu movilidad
            en un 40% durante la carga).
          </p>
        </motion.div>

        {/* Capa 5 */}
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
            CAPA 5 (SESIÓN) • ACCESO DIAL-UP
          </span>
          <h3 className="text-xl font-orbitron font-bold text-brand-dark mb-2">
            CAÑÓN DIAL-UP 56K
          </h3>
          <p className="text-gray-600 font-satoshi text-sm leading-relaxed font-medium">
            Zona de sincronización de transmisiones. El cañón de 56k dispara orbes de datos con
            inestabilidad de lag. El proyectil fluctúa erráticamente y genera un efecto de Stun
            masivo por {'"'}pérdida de paquetes{'"'} durante 2 segundos en el malware.
          </p>
        </motion.div>

        {/* Capa 4 */}
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
            CAPA 4 (TRANSPORTE) • FLUJO DE FIBRA
          </span>
          <h3 className="text-xl font-orbitron font-bold text-brand-dark mb-2 flex items-center gap-2">
            THE PACKET WYRM <Activity className="w-4 h-4 text-brand-tan" />
          </h3>
          <p className="text-gray-600 font-satoshi text-sm leading-relaxed font-medium">
            Un gusano gigante de fibra óptica que {'"'}nada{'"'} debajo de la pila de paquetes. Aquí
            disparas el <strong className="text-brand-green">Lanzador MTU</strong>, artillería
            pesada que rebota en los muros y genera una onda de choque devastadora que altera tu
            propia posición.
          </p>
        </motion.div>

        {/* Capa 1 */}
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
            CAPA 1 (FÍSICA) • EL HOGAR DE SILICIO
          </span>
          <h3 className="text-xl font-orbitron font-bold text-brand-dark mb-2 flex items-center gap-2">
            KERNEL PANIC <TerminalIcon className="w-4 h-4 text-brand-red animate-pulse" />
          </h3>
          <p className="text-gray-600 font-satoshi text-sm leading-relaxed font-medium">
            El núcleo y el hardware ardiendo. Enfrentarás a Kernel Panic, la anomalía final que
            simula pantallas azules y crasheos reales de hardware en tu interfaz. Debes usar el{' '}
            <strong className="text-brand-red">Cañón de Flujo Térmico</strong> para purgarlo antes
            de que el procesador se funda.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
