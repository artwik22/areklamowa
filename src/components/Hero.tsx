import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-steel-900 via-steel-800 to-steel-900"
    >
      <div className="container-custom relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight"
            >
              Zwiększ Sprzedaż
              <br />
              <span className="text-wood-400">
                Reklamując Się w Autobusach
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl md:text-2xl mb-6 text-steel-200 font-light leading-relaxed"
            >
              Dotrzyj do tysięcy pasażerów każdego dnia
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg mb-10 text-steel-300 leading-relaxed max-w-2xl mx-auto"
            >
              Twoja reklama na monitorach w autobusach będzie widoczna dla tysięcy potencjalnych klientów. 
              Skuteczna forma reklamy, która działa 24/7. Przygotujemy dla Ciebie profesjonalną reklamę.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                onClick={() => scrollToSection('#pricing')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-steel-900 px-10 py-5 font-semibold hover:bg-steel-50 transition-colors border-2 border-white uppercase tracking-wider text-sm flex items-center justify-center gap-2"
              >
                Zobacz Cennik
                <FiArrowRight />
              </motion.button>

              <motion.button
                onClick={() => scrollToSection('#contact')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-wood-700 text-white px-10 py-5 font-semibold hover:bg-wood-600 transition-colors border-2 border-wood-600 uppercase tracking-wider text-sm"
              >
                Skontaktuj Się
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
