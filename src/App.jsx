import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Layer8Reveal from './components/Layer8Reveal'; // <--- IMPORTANTE
import Stream from './components/Stream';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" style={{ opacity: 0.1, pointerEvents: 'none', backgroundSize: '30px 30px' }}></div>
      
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col space-y-32 relative z-10">
        <section id="home">
           <Hero />
        </section>
        
        {/* SECCIÓN ÉPICA DE REVELACIÓN + PISTAS */}
        <section id="project" className="scroll-mt-28">
           <Layer8Reveal /> 
        </section>

        <section id="story" className="scroll-mt-28">
           <About />
        </section>

        <section id="stream" className="scroll-mt-28">
           <Stream />
        </section>

        <section id="team" className="scroll-mt-28">
           <Team />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;