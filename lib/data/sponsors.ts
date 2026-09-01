import type { StaticImageData } from 'next/image';
import lanasLogo from '@/public/brand/logo-lanas.png';
import utnLogo from '@/public/brand/utn.png';

export interface Sponsor {
  name: string;
  tier: string;
  image: StaticImageData;
  description: string;
}

export const sponsors: Sponsor[] = [
  {
    name: 'UTN FRC',
    tier: 'Socio Académico',
    image: utnLogo,
    description:
      'Universidad Tecnológica Nacional - Facultad Regional Córdoba. Impulsando la innovación técnica y formación profesional.',
  },
  {
    name: 'Lanas Córdoba',
    tier: 'Socio Estratégico',
    image: lanasLogo,
    description:
      'Referente en la industria textil. Colaborando en el crecimiento de proyectos con impacto local.',
  },
];
