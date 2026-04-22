import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import GamesInDev from '../components/home/GamesInDev';
import About from '../components/home/About';
import Team from '../components/home/Team';
import Sponsors from '../components/home/Sponsors';

const Home = () => {
  return (
    <Layout>
      <div className="flex flex-col space-y-32">
        <section id="home">
          <Hero />
        </section>

        <section id="games" className="scroll-mt-28">
          <GamesInDev />
        </section>

        <section id="story" className="scroll-mt-28">
          <About />
        </section>

        <section id="team" className="scroll-mt-28">
          <Team />
        </section>

        <section id="sponsors" className="scroll-mt-28">
          <Sponsors />
        </section>
      </div>
    </Layout>
  );
};

export default Home;
