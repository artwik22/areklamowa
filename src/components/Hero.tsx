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
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 -left-1/4 w-96 h-96 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(30, 64, 175, 0.3) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 -right-1/4 w-96 h-96 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(30, 64, 175, 0.3) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      <div className="container-custom relative z-10 py-12 sm:py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center px-4 sm:px-6"
        >
          <div className="text-gray-900 dark:text-gray-100">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-8 sm:mb-10 md:mb-12 leading-tight"
            >
              Zwiększ Sprzedaż
              <br />
              <span className="gradient-text">
                Reklamą w Autobusach
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8 md:mb-10 text-gray-900 dark:text-gray-100 font-semibold leading-relaxed"
            >
              Dotrzyj do <span className="text-primary-600 dark:text-primary-400 font-bold">tysięcy pasażerów</span> każdego dnia
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg sm:text-xl md:text-2xl mb-10 sm:mb-12 md:mb-16 text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto font-medium"
            >
              Twoja reklama na monitorach w autobusach będzie widoczna dla tysięcy potencjalnych klientów. 
              Skuteczna forma dotarcia do lokalnej społeczności. Oferujemy również profesjonalne przygotowanie reklamy.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full sm:w-auto mb-12 sm:mb-16"
            >
              <motion.a
                href="/cennik"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary flex items-center justify-center gap-3 group w-full sm:w-auto min-h-[56px] text-lg sm:text-xl"
              >
                <span>Zobacz Cennik</span>
                <FiArrowRight className="w-6 h-6 sm:w-7 sm:h-7 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.button
                onClick={() => scrollToSection('#contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="btn-secondary w-full sm:w-auto min-h-[56px] text-lg sm:text-xl"
              >
                Skontaktuj Się
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto"
            >
              {[
                { value: '1000+', label: 'Pasażerów codziennie' },
                { value: '8', label: 'Miejscowości' },
                { value: '18h', label: 'Czas emisji dziennie' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                  className="glass rounded-2xl p-8 sm:p-10 text-center"
                >
                  <div className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text mb-3 sm:mb-4">
                    {stat.value}
                  </div>
                  <div className="text-base sm:text-lg md:text-xl text-gray-900 dark:text-gray-100 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;
