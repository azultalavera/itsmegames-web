import { motion } from 'framer-motion';
import { Gamepad2, Tv, Rocket } from 'lucide-react';

const milestones = [
  {
    year: '2020',
    title: 'El Inicio',
    description: 'Todo comenzó durante la pandemia. Un hobby, un canal de streaming para compartir nuestra pasión por los videojuegos.',
    icon: Gamepad2,
  },
  {
    year: '2021',
    title: 'Comunidad & Streaming',
    description: 'El canal de Twitch itsmegames_ se convirtió en un punto de encuentro. La conexión con la audiencia nos inspiró a ir más allá.',
    icon: Tv,
  },
  {
    year: '2026+',
    title: 'Evolución a Estudio',
    description: 'Descubrimos que nuestra verdadera pasión es crear. Nacimos como empresa de desarrollo de videojuegos, listos para dejar nuestra marca en la industria.',
    icon: Rocket,
  },
];

const MilestoneCard = ({ milestone, index }) => {
  const Icon = milestone.icon;
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="flex flex-col md:flex-row items-start md:items-center gap-6 p-6 bg-white/70 backdrop-blur-lg border border-brand-green/10 rounded-2xl hover:border-brand-green/30 hover:shadow-[0_8px_30px_rgba(24,122,52,0.06)] transition-all duration-300 group relative overflow-hidden shadow-sm"
    >
      {/* Barra lateral de color de la marca */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-green to-brand-tan opacity-50 group-hover:opacity-100 transition-opacity"></div>
      
      <div className="p-4 bg-brand-green/10 rounded-full text-brand-green group-hover:bg-brand-green/20 transition-colors shrink-0">
        <Icon className="w-8 h-8" />
      </div>
      <div>
        <span className="block text-brand-green font-Fredoka font-bold text-lg mb-1">{milestone.year}</span>
        <h3 className="text-2xl font-Fredoka font-bold mb-2 text-brand-dark group-hover:text-brand-green transition-colors">{milestone.title}</h3>
        <p className="text-gray-600 font-Satoshi leading-relaxed text-sm md:text-base">{milestone.description}</p>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <section className="relative">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-Fredoka font-black mb-4 text-brand-dark text-glow uppercase tracking-normal">Nuestra Evolución</h2>
        <p className="text-xl font-Satoshi text-gray-600 max-w-2xl mx-auto">El viaje de un hobby a un estudio creativo.</p>
      </motion.div>

      <div className="flex flex-col space-y-6 max-w-4xl mx-auto">
        {milestones.map((milestone, index) => (
          <MilestoneCard key={milestone.year} milestone={milestone} index={index} />
        ))}
      </div>
    </section>
  );
};

export default About;