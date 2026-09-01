import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/Navbar';
import ContactInfo from '@/app/layer8game/_components/ContactInfo';
import ControlPanel from '@/app/layer8game/_components/ControlPanel';
import Layer8Hero from '@/app/layer8game/_components/Hero';
import Objectives from '@/app/layer8game/_components/Objectives';
import OsiLayers from '@/app/layer8game/_components/OsiLayers';
import SignupForm from '@/app/layer8game/_components/SignupForm';
import Synergies from '@/app/layer8game/_components/Synergies';

export default function Layer8Landing() {
  return (
    <div className="min-h-screen relative bg-white overflow-x-hidden font-satoshi text-brand-dark">
      {/* Fondos y Efectos de Grilla */}
      <div className="absolute inset-0 bg-[url('/grid.jpg')] bg-repeat opacity-[0.015] pointer-events-none mix-blend-overlay"></div>
      <div
        className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"
        style={{ opacity: 0.04, pointerEvents: 'none', backgroundSize: '30px 30px' }}
      ></div>

      <Navbar />

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 flex flex-col items-center">
        <Layer8Hero />
        <ControlPanel />
        <Objectives />
        <OsiLayers />
        <Synergies />
        <SignupForm />
        <ContactInfo />
      </main>

      <Footer />
    </div>
  );
}
