import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Twitch, Youtube, Instagram, Play, ExternalLink } from 'lucide-react';

const Stream = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [isOnline] = useState(false); // Mocked status

  const socialLinks = [
    {
      name: 'YouTube',
      icon: Youtube,
      href: '#',
      color: 'text-red-400',
      hoverColor: 'hover:text-red-300',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      href: '#',
      color: 'text-pink-400',
      hoverColor: 'hover:text-pink-300',
    },
  ];

  return (
    <section
      id="stream"
      ref={ref}
      className="min-h-screen flex items-center justify-center py-32 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-Orbitron font-bold uppercase mb-4">
            <span className="bg-gradient-to-r from-neon to-cyan-400 bg-clip-text text-transparent">
              Unite a nuestro stream!
            </span>
          </h2>
          <p className="font-Inter text-gray-400 text-xl">
            Conectá con nuestra comunidad en vivo
          </p>
        </motion.div>

        {/* Large Wide Card with Glowing Border */}
        <motion.div
          className="bg-slate-900/50 backdrop-blur-lg border-2 border-neon/30 rounded-2xl overflow-hidden shadow-2xl hover:border-neon hover:shadow-[0_0_40px_rgba(0,255,255,0.4)] transition-all duration-300"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Status Section - Top */}
          <div className="p-6 bg-gradient-to-r from-cardbg/80 to-cardbg/60 border-b border-neon/20">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-fuchsia-500 border-2 border-neon/50 flex items-center justify-center shadow-[0_0_20px_rgba(147,51,234,0.5)]">
                  <Twitch className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-Orbitron font-bold uppercase text-2xl text-white mb-1">
                    itsmegames_
                  </h3>
                  <p className="font-Inter text-gray-400 text-sm">
                    Game Dev & Streaming Studio
                  </p>
                </div>
              </div>
              
              {/* Status Indicator */}
              <div className="flex items-center space-x-3 px-6 py-3 rounded-lg bg-black/40 border border-neon/30">
                <div
                  className={`w-3 h-3 rounded-full ${
                    isOnline ? 'bg-green-400 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.8)]' : 'bg-gray-500'
                  }`}
                ></div>
                <span className="font-Orbitron font-bold uppercase text-sm text-white">
                  {isOnline ? 'LIVE' : 'OFFLINE'}
                </span>
              </div>
            </div>
          </div>

          {/* Main CTA Section - Center */}
          <div className="p-12 bg-gradient-to-br from-cardbg/60 to-cardbg/40">
            <div className="max-w-4xl mx-auto">
              {/* Player Preview Area */}
              <div className="relative aspect-video bg-gradient-to-br from-purple-900/50 to-darkbg rounded-xl overflow-hidden mb-8 border border-neon/20">
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-30"
                  style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop)'
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-darkbg via-darkbg/50 to-transparent"></div>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.a
                    href="https://twitch.tv/itsmegames_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center space-y-4 group"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="w-24 h-24 rounded-full bg-purple-500/90 backdrop-blur-sm border-4 border-neon flex items-center justify-center shadow-[0_0_40px_rgba(147,51,234,0.8)] group-hover:shadow-[0_0_50px_rgba(0,255,255,0.8)] transition-all duration-300">
                      <Play className="w-12 h-12 text-white ml-1" fill="white" />
                    </div>
                    <span className="font-Inter text-gray-300 text-sm uppercase tracking-wider">
                      {isOnline ? 'Mirá en Vivo' : 'Visitá el Canal'}
                    </span>
                  </motion.a>
                </div>
              </div>

              {/* Primary CTA Button */}
              <motion.a
                href="https://twitch.tv/itsmegames_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-fuchsia-600 border-2 border-neon/50 rounded-lg font-Orbitron font-bold uppercase text-lg text-white hover:from-purple-500 hover:to-fuchsia-500 transition-all duration-300 shadow-[0_0_25px_rgba(147,51,234,0.5)] hover:shadow-[0_0_35px_rgba(0,255,255,0.6)] mb-6"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Twitch className="w-6 h-6" />
                <span>Mirá en Twitch</span>
                <ExternalLink className="w-5 h-5" />
              </motion.a>

              <p className="font-Inter text-gray-400 text-center text-sm mb-8">
                Seguinos para estar al día con nuestros streams, desarrollo de juegos y contenido exclusivo.
              </p>
            </div>
          </div>

          {/* Secondary Links Section - Bottom */}
          <div className="p-6 bg-cardbg/40 border-t border-neon/20">
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-2 px-5 py-2.5 rounded-lg border border-neon/20 bg-black/40 backdrop-blur-sm transition-all ${social.color} ${social.hoverColor} hover:border-neon/50`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                  <span className="font-Inter text-sm font-medium">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stream;
