import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, 
  CheckCircle, 
  AlertCircle, 
  ShieldCheck, 
  Terminal as TerminalIcon, 
  RefreshCcw,
  Gamepad2,
  Cpu,
  Layers,
  Sparkles,
  Play,
  Monitor,
  Flame,
  ArrowDownCircle,
  Skull,
  Activity,
  UserCheck,
  Compass,
  Zap,
  Hammer,
  HelpCircle,
  Mail,
  Phone,
  Laptop
} from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layer8Landing = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');
  const [activeSection, setActiveSection] = useState('concept'); // concept, upgrades, npcs, specs

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email) return;

    setStatus('loading');

    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby4O5G-7UV4qWvlexNHH-hPW9n1PRMtrnxhZYt4sgClrKrQhOKPtBtd4i4g57HHk2Jnmw/exec';

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          timestamp: new Date().toLocaleString()
        }),
      });

      setStatus('success');
      setMessage('ACCESO CONCEDIDO. Has sido incluido en la lista de interesados.');
      setName('');
      setEmail('');

    } catch (err) {
      setStatus('error');
      setMessage('ERROR DE SISTEMA. Inténtalo de nuevo más tarde.');
    }
  };

  return (
    <div className="min-h-screen relative bg-white overflow-x-hidden font-Satoshi text-brand-dark">
      {/* Fondos y Efectos de Grilla */}
      <div className="absolute inset-0 bg-[url('/grid.jpg')] bg-repeat opacity-[0.015] pointer-events-none mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" style={{ opacity: 0.04, pointerEvents: 'none', backgroundSize: '30px 30px' }}></div>

      <Navbar />

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 flex flex-col items-center">
        
        {/* Cabecera / Hero */}
        <div className="text-center mb-16 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-red/20 bg-brand-red/5 text-brand-red font-Fredoka text-xs sm:text-sm font-medium mb-6"
          >
            <Flame className="w-4 h-4 text-brand-red animate-pulse" />
            [ALERTA: REINICIO MANUAL REQUERIDO]
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-7xl md:text-9xl font-Orbitron font-black text-brand-dark mb-4 tracking-tight uppercase"
          >
            LAYER <span className="text-brand-green text-glow">8</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl font-ShareTech uppercase text-brand-red tracking-wider mb-8 bg-brand-red/5 py-2 px-4 rounded border border-brand-red/10 max-w-3xl mx-auto font-bold leading-relaxed"
          >
            "EL SISTEMA ESTÁ PODRIDO. VOS SOS LA PURGA."
          </motion.p>

          {/* Badges de Información Rápida */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-2 font-ShareTech text-xs"
          >
            <span className="px-3 py-1.5 bg-slate-50 border border-brand-green/20 rounded-md text-brand-green font-semibold">
              GÉNERO: TWIN-STICK ROGUELITE / BULLET HEAVEN
            </span>
            <span className="px-3 py-1.5 bg-slate-50 border border-brand-green/20 rounded-md text-brand-green font-semibold">
              PLATAFORMA: PC (STEAM)
            </span>
            <span className="px-3 py-1.5 bg-slate-50 border border-brand-green/20 rounded-md text-brand-green font-semibold">
              TARGET: TEEN / YOUNG ADULT
            </span>
            <span className="px-3 py-1.5 bg-slate-50 border border-brand-green/20 rounded-md text-brand-green font-semibold animate-pulse">
              FECHA: Q4 2027
            </span>
          </motion.div>
        </div>

        {/* Panel de Control Interactivo (Tabs) */}
        <div className="w-full max-w-4xl mb-16">
          <div className="flex flex-wrap justify-center gap-2 mb-6 border-b border-brand-green/10 pb-4">
            {[
              { id: 'concept', label: 'CONCEPTO Y LORE', icon: TerminalIcon },
              { id: 'upgrades', label: 'MEJORAS Y GLITCHES', icon: Cpu },
              { id: 'npcs', label: 'SISTEMA DE NPCs', icon: UserCheck },
              { id: 'specs', label: 'REQUISITOS PC', icon: Laptop },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveSection(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-Orbitron text-xs font-bold transition-all ${activeSection === tab.id 
                  ? 'bg-brand-green text-white shadow-sm' 
                  : 'bg-slate-50 border border-brand-green/10 text-gray-500 hover:text-brand-green hover:bg-brand-green/5'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
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
                  <h3 className="text-xl font-Orbitron font-bold text-brand-dark mb-4 flex items-center gap-2">
                    <TerminalIcon className="w-5 h-5 text-brand-green" /> PROTOCOLO HIGH CONCEPT & HISTORIA
                  </h3>
                  
                  <div className="space-y-6 text-gray-600 font-Satoshi text-sm md:text-base leading-relaxed">
                    <p className="font-medium">
                      Una supercomputadora corporativa ha entrado en crisis global. Vos sos <strong className="text-brand-green">"THE KERNEL KEEPER"</strong>, un protocolo de defensa brutal de última instancia. Tu misión no es limpiar virus, es ejecutar todo lo que se mueva. Debes descender físicamente a través de las <strong className="text-brand-dark font-semibold">7 Capas del Modelo OSI</strong>, desde la Interfaz Gráfica hasta el Hardware puro, para forzar un reinicio manual antes de que el sistema se funda.
                    </p>
                    <div className="border-t border-brand-green/10 pt-4 space-y-4">
                      <p>
                        <strong className="text-brand-dark font-bold">El Comienzo:</strong> Empezamos en el mundo físico. Una cinemática corta muestra una sala de servidores de Vanguard Mainframes en alerta roja. Un técnico desesperado rompe un cristal de emergencia y conecta el pendrive del KERNEL Keeper. La cámara hace zoom hacia los píxeles del monitor CRT y somos transportados al software.
                      </p>
                      <p>
                        <strong className="text-brand-dark font-bold">El Progreso y Revelación:</strong> El jugador avanza limpiando las distintas capas del Modelo OSI. Al llegar al núcleo absoluto, se revela la verdad: la infección masiva no fue un ataque externo, sino una negligencia directa del Usuario/Técnico (<strong className="text-brand-red font-bold">La Capa 8</strong>). El jugador debe tomar una decisión final que cerrará la run y afectará el meta-juego: formatear y morir o aceptar su corrupción.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* MEJORAS Y GLITCHES */}
              {activeSection === 'upgrades' && (
                <div className="space-y-6">
                  <h3 className="text-xl font-Orbitron font-bold text-brand-dark mb-4 flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-brand-green" /> SISTEMA DE CORRUPCIÓN (GLITCHES) Y MEJORAS DE NÚCLEO
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    El juego equilibra mejoras permanentes del núcleo de meta-progreso con glitches temporales que otorgan un poder devastador a cambio de un costo mecánico o visual severo.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-white border border-brand-green/10">
                      <span className="font-VT323 text-lg text-brand-green block mb-1">PROGRESIÓN PERMANENTE (NÚCLEO)</span>
                      <ul className="text-xs text-gray-600 space-y-2 list-disc pl-4 font-medium">
                        <li><strong>Ampliación de RAM:</strong> Añade un bloque de memoria verde extra permanentemente.</li>
                        <li><strong>Enrutamiento óptimo:</strong> Incrementa la velocidad de movimiento de forma pasiva.</li>
                        <li><strong>Protocolo Firewall:</strong> Escudo temporal de 1 impacto gratuito.</li>
                        <li><strong>Refrigeración:</strong> Reduce tiempos de recarga del Dash evasivo.</li>
                      </ul>
                    </div>
                    <div className="p-4 rounded-lg bg-white border border-brand-red/10">
                      <span className="font-VT323 text-lg text-brand-red block mb-1">GLITCHES TEMPORALES (CORRUPCIÓN)</span>
                      <ul className="text-xs text-gray-600 space-y-2 list-disc pl-4 font-medium">
                        <li><strong>Overclock:</strong> Cadencia extrema. <em>Penalización:</em> Pantalla parpadea.</li>
                        <li><strong>Fuga de Memoria:</strong> Daño duplicado. <em>Penalización:</em> Dash sin frames de invulnerabilidad.</li>
                        <li><strong>Protocolo Vampiro:</strong> Curación por Dash físico. <em>Penalización:</em> Vida máxima reducida a 3 bloques.</li>
                        <li><strong>Fragmentación:</strong> Dispersión masiva. <em>Penalización:</em> -20% velocidad de movimiento.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* NPCs */}
              {activeSection === 'npcs' && (
                <div>
                  <h3 className="text-xl font-Orbitron font-bold text-brand-dark mb-4 flex items-center gap-2">
                    <UserCheck className="w-5 h-5 text-brand-green" /> SOCIOS Y ENEMIGOS DEL SISTEMA
                  </h3>
                  <div className="space-y-4">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      La historia se cuenta mediante lore diegético e interacciones rápidas con utilidades y asistentes del sistema operativo que sobrevivieron a la infección.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      <div className="p-3 bg-white rounded-lg border border-brand-green/10">
                        <strong className="text-brand-green block mb-1">Diag.exe (Asistente de Diagnóstico)</strong>
                        <span className="text-gray-500">Un archivo nativo y limpio que te provee reconocimiento e información del lore. Diag.exe teme a los métodos implacables del Keeper.</span>
                      </div>
                      <div className="p-3 bg-white rounded-lg border border-brand-green/10">
                        <strong className="text-brand-green block mb-1">Merchant.bat (Buhonero Digital)</strong>
                        <span className="text-gray-500">Un procesador por lotes que trafica con fragmentos de código, vendiendo parches de reparación a cambio de Cripto-Datos.</span>
                      </div>
                      <div className="p-3 bg-white rounded-lg border border-brand-green/10">
                        <strong className="text-brand-red block mb-1">Clip.exe (El Asistente Rencoroso)</strong>
                        <span className="text-gray-500">Una parodia de asistente clásico de oficina, resentido por haber sido archivado, que te pondrá pruebas y trabas lógicas.</span>
                      </div>
                      <div className="p-3 bg-white rounded-lg border border-brand-green/10">
                        <strong className="text-brand-green block mb-1">Archive.rar (El Archivo Eterno)</strong>
                        <span className="text-gray-500">Almacenador de logs y bases de datos que te permite revisar el meta-progreso de tus Runs.</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* REQUISITOS PC */}
              {activeSection === 'specs' && (
                <div>
                  <h3 className="text-xl font-Orbitron font-bold text-brand-dark mb-4 flex items-center gap-2">
                    <Laptop className="w-5 h-5 text-brand-green" /> REQUISITOS TÉCNICOS DE HARDWARE (PC)
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm font-mono mt-4">
                    <div className="p-4 bg-white rounded-xl border border-brand-green/10">
                      <span className="text-brand-green font-bold block mb-2">[REQUISITOS MÍNIMOS]</span>
                      <ul className="space-y-1 text-xs text-gray-600">
                        <li>OS: Windows 10/11 (64-bit)</li>
                        <li>CPU: Dual Core 2.0 GHz</li>
                        <li>RAM: 4 GB RAM</li>
                        <li>GPU: Gráficos integrados (DX11)</li>
                        <li>Almacenamiento: 2 GB Libres</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-white rounded-xl border border-brand-green/20">
                      <span className="text-brand-green font-bold block mb-2">[REQUISITOS RECOMENDADOS]</span>
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

        {/* Pilares de Steam */}
        <div className="w-full max-w-5xl mb-24">
          <h2 className="text-3xl md:text-4xl font-Orbitron font-black text-brand-dark mb-10 text-center uppercase tracking-normal">
            OBJETIVOS DE <span className="text-brand-green font-extrabold">AUDITORÍA</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-brand-green/10 shadow-sm hover:shadow-md transition-shadow">
              <span className="font-VT323 text-2xl text-brand-red block mb-2">01. COMBATE FRENÉTICO</span>
              <p className="text-gray-600 text-sm leading-relaxed">
                Sobrevive a un combate Twin-Stick táctico e intenso en vista isométrica donde cada impacto consume bloques lógicos de memoria y cada error te cuesta vida real no regenerable.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-brand-green/10 shadow-sm hover:shadow-md transition-shadow">
              <span className="font-VT323 text-2xl text-brand-green block mb-2">02. APRENDE DE LA CORRUPCIÓN</span>
              <p className="text-gray-600 text-sm leading-relaxed">
                Domina el Sistema de Glitches. Asume fallos cromáticos y distorsiones visuales severas en tu pantalla a cambio de expandir exponencialmente tu arsenal táctico de fuego.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-brand-green/10 shadow-sm hover:shadow-md transition-shadow">
              <span className="font-VT323 text-2xl text-brand-green block mb-2">03. ESTÉTICA CRT TECH-HORROR</span>
              <p className="text-gray-600 text-sm leading-relaxed">
                Sumérgete en una atmósfera oscura de hardware de servidores noventeros, monitores parpadeantes de fósforo verde y ruido blanco digital de Vanguard Mainframes.
              </p>
            </div>
          </div>
        </div>

        {/* Descenso por las Capas OSI */}
        <div className="w-full max-w-4xl mb-24">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-Orbitron font-black text-brand-dark text-center uppercase tracking-normal">
              EL CONFLICTO: <span className="text-brand-red">LAS CAPAS OSI</span>
            </h2>
            <div className="flex items-center gap-1.5 text-gray-400 font-ShareTech text-xs mt-2">
              <span className="animate-bounce">↓</span> MAPA DEL MODELO OSI (V verticale descent) <span className="animate-bounce">↓</span>
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
              <span className="font-VT323 text-2xl text-brand-green block mb-1">CAPA 7 (APLICACIÓN) • JEFATURA DIGITAL</span>
              <h3 className="text-xl font-Orbitron font-bold text-brand-dark mb-2 flex items-center gap-2">
                THE HYDRA BROWSER <Skull className="w-4 h-4 text-brand-red" />
              </h3>
              <p className="text-gray-600 font-Satoshi text-sm leading-relaxed font-medium">
                Un navegador monstruoso e invasivo. Si le cerrás una pestaña (cabeza), abre automáticamente dos más. Aquí consigues la escopeta pesada <strong className="text-brand-green">FAT32 Scattergun</strong> en la carpeta de descargas del sistema.
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
              <span className="font-VT323 text-2xl text-brand-green block mb-1">CAPA 6 (PRESENTACIÓN) • LABERINTOS DE ENCRIPTACIÓN</span>
              <h3 className="text-xl font-Orbitron font-bold text-brand-dark mb-2 flex items-center gap-2">
                RSA-PIERCER GUN <Activity className="w-4 h-4 text-brand-tan" />
              </h3>
              <p className="text-gray-600 font-Satoshi text-sm leading-relaxed font-medium">
                Lugar de laberintos de encriptación de datos. Utiliza el emisor <strong className="text-brand-green">Perforador RSA</strong> para proyectar un haz de energía continua capaz de atravesar múltiples protecciones enemigas (reduce tu movilidad en un 40% durante la carga).
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
              <span className="font-VT323 text-2xl text-brand-green block mb-1">CAPA 5 (SESIÓN) • ACCESO DIAL-UP</span>
              <h3 className="text-xl font-Orbitron font-bold text-brand-dark mb-2">
                CAÑÓN DIAL-UP 56K
              </h3>
              <p className="text-gray-600 font-Satoshi text-sm leading-relaxed font-medium">
                Zona de sincronización de transmisiones. El cañón de 56k dispara orbes de datos con inestabilidad de lag. El proyectil fluctúa erráticamente y genera un efecto de Stun masivo por "pérdida de paquetes" durante 2 segundos en el malware.
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
              <span className="font-VT323 text-2xl text-brand-green block mb-1">CAPA 4 (TRANSPORTE) • FLUJO DE FIBRA</span>
              <h3 className="text-xl font-Orbitron font-bold text-brand-dark mb-2 flex items-center gap-2">
                THE PACKET WYRM <Activity className="w-4 h-4 text-brand-tan" />
              </h3>
              <p className="text-gray-600 font-Satoshi text-sm leading-relaxed font-medium">
                Un gusano gigante de fibra óptica que "nada" debajo de la pila de paquetes. Aquí disparas el <strong className="text-brand-green">Lanzador MTU</strong>, artillería pesada que rebota en los muros y genera una onda de choque devastadora que altera tu propia posición.
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
              <span className="font-VT323 text-2xl text-brand-red block mb-1">CAPA 1 (FÍSICA) • EL HOGAR DE SILICIO</span>
              <h3 className="text-xl font-Orbitron font-bold text-brand-dark mb-2 flex items-center gap-2">
                KERNEL PANIC <TerminalIcon className="w-4 h-4 text-brand-red animate-pulse" />
              </h3>
              <p className="text-gray-600 font-Satoshi text-sm leading-relaxed font-medium">
                El núcleo y el hardware ardiendo. Enfrentarás a Kernel Panic, la anomalía final que simula pantallas azules y crasheos reales de hardware en tu interfaz. Debes usar el <strong className="text-brand-red">Cañón de Flujo Térmico</strong> para purgarlo antes de que el procesador se funda.
              </p>
            </motion.div>

          </div>
        </div>

        {/* Sinergias del Sistema (Builds) */}
        <div className="w-full max-w-4xl mb-20 p-8 rounded-2xl bg-slate-50 border border-brand-green/10">
          <h2 className="text-2xl md:text-3xl font-Orbitron font-black text-brand-dark mb-8 text-center uppercase tracking-normal">
            SINERGIAS DE <span className="text-brand-green">CÓDIGO (BUILDS)</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
            <div className="p-4 bg-white rounded-lg border border-brand-green/10">
              <strong className="text-brand-green font-Orbitron block mb-2">VAMPIRO ÍGNEO</strong>
              <p className="text-xs text-gray-500 leading-relaxed">
                Combina el <em>Protocolo Vampiro</em> con el rastro de fuego del Dash. Al quemar y herir a tus enemigos con fuego cian, robas vida de manera pasiva mientras sigues corriendo.
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-brand-green/10">
              <strong className="text-brand-green font-Orbitron block mb-2">ESCOPETA FRACTAL</strong>
              <p className="text-xs text-gray-500 leading-relaxed">
                Combina la <em>Escopeta Rompe-MAC</em> con el glitch de <em>Fragmentación de Disco</em>. Aumenta drásticamente la dispersión de perdigones cubriendo toda la pantalla isométrica de proyectiles.
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-brand-green/10">
              <strong className="text-brand-green font-Orbitron block mb-2">FRANCOTIRADOR FANTASMA</strong>
              <p className="text-xs text-gray-500 leading-relaxed">
                Combina el <em>Rifle Traceroute</em> de largo alcance con el señuelo holográfico del Dash. Deja un clon señuelo atrayendo disparos mientras cargas tu disparo perfecto a distancia.
              </p>
            </div>
          </div>
        </div>

        {/* Formulario de Suscripción */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full max-w-md p-8 rounded-2xl bg-white border border-brand-green/10 shadow-[0_12px_40px_rgba(24,122,52,0.06)] relative overflow-hidden mb-12"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/5 blur-3xl rounded-full -mr-16 -mt-16"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <TerminalIcon className="text-brand-green w-5 h-5" />
              <h2 className="text-xl font-Orbitron font-bold text-brand-dark uppercase tracking-wider">
                PROTOCOLO DE ACCESO
              </h2>
            </div>

            <div className="bg-slate-50 border border-brand-green/10 rounded-lg p-4 mb-8 font-mono text-[13px] relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-brand-green/40 shadow-[0_0_8px_rgba(24,122,52,0.4)]" />
              <div className="space-y-3">
                <div className="flex gap-2">
                  <span className="text-brand-green/50 shrink-0">{">"}</span>
                  <p className="text-gray-600 font-medium">Dejanos tu mail para registrarte en la próxima beta cerrada y darnos soporte durante el desarrollo.</p>
                </div>
                <div className="flex gap-2">
                  <span className="text-brand-green/50 shrink-0">{">"}</span>
                  <p className="text-gray-600 font-medium">
                    Inyectando protocolo de registro en Vanguard Mainframes...
                    <span className="inline-block w-1.5 h-3.5 bg-brand-green/50 ml-1 align-middle animate-pulse" />
                  </p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="NOMBRE COMPLETO"
                  required
                  className="w-full bg-slate-50 border border-brand-green/20 rounded-lg px-4 py-3 text-brand-green font-mono placeholder:text-brand-green/30 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all"
                  disabled={status === 'loading' || status === 'success'}
                />
              </div>

              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="USUARIO@SECTOR.COM"
                  required
                  className="w-full bg-slate-50 border border-brand-green/20 rounded-lg px-4 py-3 text-brand-green font-mono placeholder:text-brand-green/30 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all"
                  disabled={status === 'loading' || status === 'success'}
                />
                {status === 'success' && (
                  <ShieldCheck className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-green w-5 h-5" />
                )}
              </div>

              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className={`w-full py-3 rounded-lg font-Orbitron font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300 ${status === 'success'
                  ? 'bg-brand-green text-white shadow-[0_4px_12px_rgba(24,122,52,0.2)]'
                  : 'bg-brand-green/5 border border-brand-green/30 text-brand-green hover:bg-brand-green hover:text-white hover:shadow-[0_4px_15px_rgba(24,122,52,0.15)]'
                  }`}
              >
                {status === 'loading' ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                  >
                    <RefreshCcw className="w-5 h-5" />
                  </motion.div>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Registrado
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar Datos
                  </>
                )}
              </button>
            </form>

            <AnimatePresence>
              {message && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className={`mt-6 p-4 rounded border text-xs font-mono flex items-start gap-3 ${status === 'success' ? 'bg-brand-green/5 border-brand-green/20 text-brand-green' : 'bg-brand-red/5 border-brand-red/20 text-brand-red'
                    }`}
                >
                  {status === 'success' ? <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" /> : <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />}
                  <span>{message}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Barra de Contacto / Datos */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs font-mono text-gray-400 mt-8 border-t border-brand-green/15 pt-8 w-full max-w-md space-y-1.5"
        >
          <p className="font-bold text-gray-500 uppercase tracking-wider">CONTACTO DE AUDITORÍA</p>
          <p className="text-brand-green font-bold">Bruno Aresu Barella - Director / Game Design</p>
          <p className="text-gray-500 flex items-center justify-center gap-1"><Phone className="w-3.5 h-3.5 text-brand-green" /> +54 9 3512 13-3660</p>
          <p className="text-gray-500 flex items-center justify-center gap-1"><Mail className="w-3.5 h-3.5 text-brand-green" /> bruno.aresubarella@gmail.com</p>
          <p className="text-gray-400 mt-2 text-[10px]">VERSIÓN GDD: 1.0 (Publicado: 12 Mayo 2026)</p>
        </motion.div>

      </main>

      <Footer />
    </div>
  );
};

export default Layer8Landing;
