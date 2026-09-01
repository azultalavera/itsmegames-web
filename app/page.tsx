import About from '@/app/_components/About';
import GamesInDev from '@/app/_components/GamesInDev';
import Hero from '@/app/_components/Hero';
import Sponsors from '@/app/_components/Sponsors';
import Team from '@/app/_components/Team';
import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/Navbar';

export default function HomePage() {
  return (
    <div className="min-h-screen relative bg-darkbg">
      <div className="absolute inset-0 bg-[url('/grid.jpg')] bg-repeat opacity-[0.03] pointer-events-none mix-blend-overlay"></div>
      <div
        className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"
        style={{ opacity: 0.05, pointerEvents: 'none', backgroundSize: '30px 30px' }}
      ></div>

      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:py-20 flex flex-col space-y-12 lg:space-y-16 relative z-10">
        <section id="home">
          <Hero />
        </section>

        <section id="games" className="scroll-mt-28">
          <GamesInDev />
        </section>

        <section id="story" className="scroll-mt-28">
          <About />
        </section>

        {/* Aquí estaba Stream, ya lo sacamos */}

        <section id="team" className="scroll-mt-28">
          <Team />
        </section>

        {/* SECCIÓN DE PATROCINADORES */}
        <section id="sponsors" className="scroll-mt-28">
          <Sponsors />
        </section>
      </main>

      <Footer />
    </div>
  );
}
