import Header from '../components/Header';
import Hero from '../components/Hero';
import Coverage from '../components/Coverage';
import WhyUs from '../components/WhyUs';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <WhyUs />
        <Coverage />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Home;

