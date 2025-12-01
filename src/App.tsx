import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Coverage from './components/Coverage';
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
        <Coverage />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
