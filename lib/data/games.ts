import type { StaticImageData } from 'next/image';
import layer8Logo from '@/public/brand/layer8.png';

export interface Game {
  id: number;
  title: string;
  status: string;
  progress: number;
  description: string;
  color: string;
  image: StaticImageData;
  tags: string[];
  url: string;
}

export const games: Game[] = [
  {
    id: 1,
    title: 'LAYER 8',
    status: 'EN DESARROLLO',
    progress: 35,
    description:
      'Un Twin-Stick RogueLite donde debes purgar el sistema de una amenaza desconocida.',
    color: 'from-cyan-500 to-blue-600',
    image: layer8Logo,
    tags: ['Action', 'RogueLite', 'Cyberpunk'],
    url: '/layer8game',
  },
];
