'use client';

import { useState, type FormEvent } from 'react';
import {
  AlertCircle,
  CheckCircle,
  RefreshCcw,
  Send,
  ShieldCheck,
  Terminal as TerminalIcon,
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

type SignupStatus = 'idle' | 'loading' | 'success' | 'error';

export default function SignupForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<SignupStatus>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name || !email) return;

    setStatus('loading');

    try {
      const response = await fetch('/api/layer8-signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          timestamp: new Date().toLocaleString(),
        }),
      });

      if (!response.ok) {
        throw new Error('Layer 8 signup request failed');
      }

      setStatus('success');
      setMessage('ACCESO CONCEDIDO. Has sido incluido en la lista de interesados.');
      setName('');
      setEmail('');
    } catch {
      setStatus('error');
      setMessage('ERROR DE SISTEMA. Inténtalo de nuevo más tarde.');
    }
  };

  return (
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
          <h2 className="text-xl font-orbitron font-bold text-brand-dark uppercase tracking-wider">
            PROTOCOLO DE ACCESO
          </h2>
        </div>

        <div className="bg-slate-50 border border-brand-green/10 rounded-lg p-4 mb-8 font-mono text-[13px] relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1 h-full bg-brand-green/40 shadow-[0_0_8px_rgba(24,122,52,0.4)]" />
          <div className="space-y-3">
            <div className="flex gap-2">
              <span className="text-brand-green/50 shrink-0">{`>`}</span>
              <p className="text-gray-600 font-medium">
                Dejanos tu mail para registrarte en la próxima beta cerrada y darnos soporte durante
                el desarrollo.
              </p>
            </div>
            <div className="flex gap-2">
              <span className="text-brand-green/50 shrink-0">{`>`}</span>
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
              onChange={(event) => setName(event.target.value)}
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
              onChange={(event) => setEmail(event.target.value)}
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
            className={`w-full py-3 rounded-lg font-orbitron font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300 ${
              status === 'success'
                ? 'bg-brand-green text-white shadow-[0_4px_12px_rgba(24,122,52,0.2)]'
                : 'bg-brand-green/5 border border-brand-green/30 text-brand-green hover:bg-brand-green hover:text-white hover:shadow-[0_4px_15px_rgba(24,122,52,0.15)]'
            }`}
          >
            {status === 'loading' ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
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
              className={`mt-6 p-4 rounded border text-xs font-mono flex items-start gap-3 ${
                status === 'success'
                  ? 'bg-brand-green/5 border-brand-green/20 text-brand-green'
                  : 'bg-brand-red/5 border-brand-red/20 text-brand-red'
              }`}
            >
              {status === 'success' ? (
                <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" />
              ) : (
                <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
              )}
              <span>{message}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
