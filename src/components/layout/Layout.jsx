import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen relative bg-darkbg">
      <div className="absolute inset-0 bg-[url('/grid.jpg')] bg-repeat opacity-10 pointer-events-none mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" style={{ opacity: 0.1, pointerEvents: 'none', backgroundSize: '30px 30px' }}></div>
      
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
