import type { Metadata } from 'next';
import { Fredoka, Inter, Orbitron, Share_Tech_Mono, VT323 } from 'next/font/google';
import ClarityInit from '@/app/components/ClarityInit';
import { MotionProvider } from '@/app/components/MotionProvider';
import '@/styles/globals.css';

const fredoka = Fredoka({
  subsets: ['latin'],
  variable: '--next-font-fredoka',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--next-font-inter',
});

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--next-font-orbitron',
});

const shareTech = Share_Tech_Mono({
  weight: '400',
  subsets: ['latin'],
  variable: '--next-font-sharetech',
});

const vt323 = VT323({
  weight: '400',
  subsets: ['latin'],
  variable: '--next-font-vt323',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.itsmegames.com/'),
  title: 'ItsMeGames | From Players to Creators',
  description:
    'Unite a la familia. Somos creadores, gamers y desarrolladores. Descubrí nuestros proyectos, conocé a los protagonistas y sé parte del chat.',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/logo-perro.png',
  },
  openGraph: {
    type: 'website',
    url: '/',
    title: 'ItsMeGames | From Players to Creators',
    description:
      'Unite a la familia. Somos creadores, gamers y desarrolladores. Descubrí nuestros proyectos y sé parte del chat.',
    images: '/embebido2.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ItsMeGames | From Players to Creators',
    description: 'Unite a la familia. Somos creadores, gamers y desarrolladores.',
    images: '/embebido2.png',
  },
  other: {
    'twitter:url': 'https://www.itsmegames.com/',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fredoka.variable} ${inter.variable} ${orbitron.variable} ${shareTech.variable} ${vt323.variable}`}
    >
      <body>
        <MotionProvider>{children}</MotionProvider>
        <ClarityInit />
      </body>
    </html>
  );
}
