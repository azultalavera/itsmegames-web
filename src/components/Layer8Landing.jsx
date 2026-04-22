import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, ShieldCheck, Terminal as TerminalIcon, RefreshCcw } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layer8Landing = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email) return;

    setStatus('loading');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          name, 
          email, 
          timestamp: new Date().toISOString() 
        }),
      });

      if (response.ok) {
        setStatus('success');
        setMessage('ACCESO CONCEDIDO. Has sido incluido en la lista de purga.');
        setName('');
        setEmail('');
      } else {
        throw new Error('Falló el registro');
      }
    } catch (err) {
      setStatus('error');
      setMessage('ERROR DE SISTEMA. Inténtalo de nuevo más tarde.');
    }
  };

  return (
    <div className="min-h-screen relative bg-darkbg overflow-x-hidden font-Inter text-white">
      {/* Fondos y Efectos */}
      <div className="absolute inset-0 bg-[url('/grid.jpg')] bg-repeat opacity-10 pointer-events-none mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" style={{ opacity: 0.1, pointerEvents: 'none', backgroundSize: '30px 30px' }}></div>
      
      <Navbar />

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 flex flex-col items-center">
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-6xl md:text-8xl font-Orbitron font-black text-white mb-12 text-center"
        >
          LAYER <span className="text-neon text-glow">8</span>
        </motion.h1>

        {/* Formulario de Suscripción */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="w-full max-w-md p-8 rounded-2xl bg-black/40 border border-neon/20 backdrop-blur-xl relative overflow-hidden mb-24"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-neon/5 blur-3xl rounded-full -mr-16 -mt-16"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <TerminalIcon className="text-neon w-5 h-5" />
              <h2 className="text-xl font-Orbitron font-bold text-white uppercase tracking-wider">
                Registro de Operativo
              </h2>
            </div>

            <p className="text-gray-400 text-sm mb-8 font-mono leading-relaxed">
              Introduce tu credencial (email) para recibir actualizaciones críticas y acceso anticipado al sistema.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="NOMBRE COMPLETO"
                  required
                  className="w-full bg-black/60 border border-neon/30 rounded-lg px-4 py-3 text-neon font-mono placeholder:text-neon/20 focus:outline-none focus:border-neon focus:ring-1 focus:ring-neon transition-all"
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
                  className="w-full bg-black/60 border border-neon/30 rounded-lg px-4 py-3 text-neon font-mono placeholder:text-neon/20 focus:outline-none focus:border-neon focus:ring-1 focus:ring-neon transition-all"
                  disabled={status === 'loading' || status === 'success'}
                />
                {status === 'success' && (
                  <ShieldCheck className="absolute right-3 top-1/2 -translate-y-1/2 text-neon w-5 h-5" />
                )}
              </div>

              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className={`w-full py-3 rounded-lg font-Orbitron font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300 ${status === 'success'
                  ? 'bg-neon text-black'
                  : 'bg-neon/10 border border-neon text-neon hover:bg-neon hover:text-black shadow-[0_0_15px_rgba(0,255,255,0.1)] hover:shadow-[0_0_25px_rgba(0,255,255,0.4)]'
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
                  className={`mt-6 p-4 rounded border text-xs font-mono flex items-start gap-3 ${status === 'success' ? 'bg-neon/5 border-neon/30 text-neon' : 'bg-red-500/5 border-red-500/30 text-red-500'
                    }`}
                >
                  {status === 'success' ? <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" /> : <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />}
                  <span>{message}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Layer8Landing;
