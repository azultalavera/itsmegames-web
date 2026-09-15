'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion } from 'motion/react';
import LanguageSwitch from '@/app/components/LanguageSwitch';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import logoPerro from '@/public/brand/logo-perro.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { name: t.navbar.home, href: '/#home' },
    { name: t.navbar.games, href: '/#games' },
    { name: t.navbar.story, href: '/#story' },
    { name: t.navbar.team, href: '/#team' },
    { name: t.navbar.sponsors, href: '/#sponsors' },
  ];

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
        scrolled
          ? 'bg-darkbg/90 backdrop-blur-md border-b border-brand-green/10 py-4 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link href="/#home" className="flex items-center space-x-3 group">
          <div className="w-12 h-12 bg-white border border-brand-green/20 rounded-full flex items-center justify-center shadow-[0_4px_12px_rgba(24,122,52,0.1)] group-hover:shadow-[0_4px_18px_rgba(24,122,52,0.25)] transition-all duration-300 overflow-hidden p-1.5">
            <Image
              src={logoPerro}
              alt="ItsMeGames Logo"
              className="w-full h-full object-contain animate-float"
            />
          </div>
          <span className="text-2xl font-bold font-fredoka tracking-wide text-brand-dark group-hover:text-brand-green transition-colors">
            ItsMeGames
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-fredoka text-[15px] font-medium tracking-wide text-gray-700 hover:text-brand-green transition-colors relative group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-green to-brand-tan group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
          <div className="pl-2 border-l border-brand-green/20">
            <LanguageSwitch />
          </div>
        </div>

        {/* Mobile Header Right: Switch + Hamburger */}
        <div className="md:hidden flex items-center space-x-2.5">
          <LanguageSwitch compact />
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            className="text-brand-dark hover:text-brand-green transition-colors p-1.5 rounded-lg focus:outline-none cursor-pointer"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-white/95 border-b border-brand-green/10 py-6 px-4 flex flex-col space-y-4 shadow-xl backdrop-blur-xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-fredoka text-lg text-gray-700 hover:text-brand-green transition-colors block py-2 text-center"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 flex justify-center border-t border-brand-green/10">
            <LanguageSwitch />
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
