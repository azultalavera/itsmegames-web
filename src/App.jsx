import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
// Borramos el import de Stream
import Team from './components/Team';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';
import GamesInDev from './components/GamesInDev';

function App() {
  return (
    <div className="min-h-screen relative bg-darkbg">
      <div className="absolute inset-0 bg-[url('/grid.jpg')] bg-repeat opacity-10 pointer-events-none mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" style={{ opacity: 0.1, pointerEvents: 'none', backgroundSize: '30px 30px' }}></div>
      
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col space-y-32 relative z-10">
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

export default App;