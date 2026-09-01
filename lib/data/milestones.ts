import type { LucideIcon } from 'lucide-react';
import { Gamepad2, Rocket, Tv } from 'lucide-react';

export interface Milestone {
  year: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const milestones: Milestone[] = [
  {
    year: '2020',
    title: 'El Inicio',
    description:
      'Todo comenzó durante la pandemia. Un hobby, un canal de streaming para compartir nuestra pasión por los videojuegos.',
    icon: Gamepad2,
  },
  {
    year: '2021',
    title: 'Comunidad & Streaming',
    description:
      'El canal de Twitch itsmegames_ se convirtió en un punto de encuentro. La conexión con la audiencia nos inspiró a ir más allá.',
    icon: Tv,
  },
  {
    year: '2026+',
    title: 'Evolución a Estudio',
    description:
      'Descubrimos que nuestra verdadera pasión es crear. Nacimos como empresa de desarrollo de videojuegos, listos para dejar nuestra marca en la industria.',
    icon: Rocket,
  },
];
