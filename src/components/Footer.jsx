import { motion } from 'framer-motion';
import { Gamepad2, Twitch, Youtube, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Twitch, href: 'https://twitch.tv/itsmegames_', label: 'Twitch' },
    { icon: Youtube, href: 'https://www.youtube.com/@itsmegames_', label: 'YouTube' },
    { icon: Instagram, href: 'https://www.instagram.com/itsmegames_/', label: 'Instagram' },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-black/40 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          {/* Logo and Copyright */}
          <motion.div
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Gamepad2 className="w-6 h-6 text-neon" />
            <span className="font-Orbitron font-bold uppercase text-neon">ItsMeGames</span>
            <span className="font-Inter text-gray-500 text-sm">© {currentYear}</span>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex items-center space-x-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-neon transition-colors relative group"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <social.icon className="w-6 h-6" />
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-neon group-hover:w-full transition-all duration-300"></span>
                <span className="sr-only">{social.label}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
