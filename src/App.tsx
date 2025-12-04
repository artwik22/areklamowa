import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Coverage from './components/Coverage';
import HowItWorks from './components/HowItWorks';
import WhyUs from './components/WhyUs';
import Stats from './components/Stats';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Coverage />
        <HowItWorks />
        <Stats />
        <Gallery />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
