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
      {/* Animated background elements - hidden on mobile */}
      <div className="absolute inset-0 overflow-hidden hidden md:block">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 -left-1/4 w-96 h-96 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(30, 64, 175, 0.3) 0%, transparent 70%)',
            filter: 'blur(80px)',
            willChange: 'transform',
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 -right-1/4 w-96 h-96 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(30, 64, 175, 0.3) 0%, transparent 70%)',
            filter: 'blur(80px)',
            willChange: 'transform',
          }}
        />
      </div>

      <div className="container-custom relative z-10 py-16 sm:py-20 md:py-24">
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6">
          <div className="text-gray-900 dark:text-gray-100">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 sm:mb-8 md:mb-10 leading-tight">
              Zwiększ Sprzedaż
              <br />
              <span className="gradient-text">
                Reklamą w Autobusach
              </span>
            </h1>

            <p className="text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6 md:mb-8 text-gray-900 dark:text-gray-100 font-semibold leading-relaxed">
              Dotrzyj do <span className="text-primary-600 dark:text-primary-400 font-bold">tysięcy pasażerów</span> każdego dnia
            </p>
            
            <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 md:mb-12 text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto font-medium">
              Twoja reklama na monitorach w autobusach będzie widoczna dla tysięcy potencjalnych klientów.
            </p>

            <div className="flex flex-col gap-4 justify-center items-center w-full mb-8 sm:mb-12">
              <a
                href="/cennik"
                className="btn-primary flex items-center justify-center gap-3 group w-full sm:w-auto min-h-[56px] text-lg sm:text-xl"
              >
                <span>Zobacz Cennik</span>
                <FiArrowRight className="w-6 h-6 sm:w-7 sm:h-7 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={() => scrollToSection('#contact')}
                className="btn-secondary w-full sm:w-auto min-h-[56px] text-lg sm:text-xl"
              >
                Skontaktuj Się
              </button>
            </div>

            {/* Stats - hidden on mobile, shown on tablet+ */}
            <div className="hidden sm:grid grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
              {[
                { value: '1000+', label: 'Pasażerów codziennie' },
                { value: '8', label: 'Miejscowości' },
                { value: '18h', label: 'Czas emisji dziennie' },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="glass rounded-2xl p-6 sm:p-8 text-center"
                >
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-2 sm:mb-3">
                    {stat.value}
                  </div>
                  <div className="text-sm sm:text-base md:text-lg text-gray-900 dark:text-gray-100 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
