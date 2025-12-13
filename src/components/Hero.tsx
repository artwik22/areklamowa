import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const Hero = () => {
  const _scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20"
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

      <div className="container-custom relative z-10 py-4 sm:py-6 md:py-8">
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6">
          <div className="text-gray-900">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-2 sm:mb-3 md:mb-4 leading-tight text-gray-900">
              <div>Twoja reklama wyświetlana na ekranach w autobusach</div>
            </h1>

            <p className="text-xl sm:text-2xl md:text-3xl mb-2 sm:mb-3 md:mb-4 text-primary-600 font-semibold leading-relaxed">
              Dotrzyj tam gdzie są Twoi klienci
            </p>
            
            <p className="text-base sm:text-lg md:text-xl mb-20 sm:mb-24 md:mb-28 text-gray-700 leading-relaxed max-w-3xl mx-auto font-medium">
              Lokalna reklama docierająca do mieszkańców Twojego regionu podczas ich codziennych podróży.
            </p>

            {/* Stats - hidden on mobile, shown on tablet+ */}
            <div className="hidden sm:grid grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto mb-6 sm:mb-8">
              {[
                { value: '2000+', label: 'Pasażerów codziennie' },
                { value: '8', label: 'Powiatów' },
                { value: '18h', label: 'Czasu emisji dziennie' },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="glass rounded-2xl p-6 sm:p-8 text-center"
                >
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-2 sm:mb-3">
                    {stat.value}
                  </div>
                  <div className="text-sm sm:text-base md:text-lg text-gray-900 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
              <a
                href="/cennik"
                className="btn-primary flex items-center justify-center gap-3 group w-full sm:w-auto min-h-[64px] text-lg sm:text-xl px-8 sm:px-12"
              >
                <span>Zobacz Cennik</span>
                <FiArrowRight className="w-6 h-6 sm:w-7 sm:h-7 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/kontakt"
                className="btn-secondary w-full sm:w-auto min-h-[64px] text-lg sm:text-xl px-8 sm:px-12"
              >
                Bezpłatna Wycena
              </a>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
