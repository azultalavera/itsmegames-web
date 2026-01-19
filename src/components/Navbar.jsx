import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Inicio', href: '#home' },
  { name: 'Historia', href: '#story' },
  { name: 'Stream', href: '#stream' },
  { name: 'Equipo', href: '#team' },
  { name: 'Aliados', href: '#sponsors' }, // <--- AGREGADO AQUÍ
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-darkbg/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 bg-neon rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(0,255,255,0.5)] group-hover:shadow-[0_0_20px_rgba(0,255,255,0.8)] transition-shadow overflow-hidden">
            <img src="/IMG.png" alt="ItsMeGames Logo" className="w-full h-full object-cover" />
          </div>
          <span className="text-2xl font-bold font-Orbitron text-white group-hover:text-neon transition-colors">
            ItsMeGames
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-Orbitron text-sm uppercase tracking-wider text-gray-300 hover:text-neon transition-colors relative group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
          <a
            href="https://www.twitch.tv/itsmegames_"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-neon/10 text-neon border border-neon/50 rounded-full font-Orbitron text-sm font-bold hover:bg-neon hover:text-darkbg hover:border-neon transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.6)]"
          >
            VER LIVE
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-neon">
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-darkbg/95 backdrop-blur-lg border-b border-white/10 py-4 px-4 flex flex-col space-y-4 shadow-xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-Orbitron text-lg text-gray-300 hover:text-neon transition-colors block py-2 text-center"
            >
              {link.name}
            </a>
          ))}
           <a
            href="https://www.twitch.tv/itsmegames_"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center px-6 py-3 bg-neon/20 text-neon border border-neon/50 rounded-full font-Orbitron font-bold"
          >
            VER LIVE EN TWITCH
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;