import { motion } from 'framer-motion';
import { FiCheck, FiStar, FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PricingPage = () => {
  const packages = [
    {
      name: 'Start',
      price: '800 zł',
      period: 'miesięcznie',
      features: [
        'Reklama na monitorach w autobusach',
        'Wyświetlanie przez cały miesiąc',
        'Możliwość przygotowania projektu reklamy',
        'Emisja na wybranych trasach',
      ],
      popular: false,
      gradient: 'from-primary-600 to-primary-500',
    },
    {
      name: 'Biznes',
      price: '1500 zł',
      period: '2 miesiące',
      features: [
        'Reklama na monitorach w autobusach',
        'Wyświetlanie przez 2 miesiące',
        'Przygotowanie projektu reklamy w cenie',
        'Emisja na większej liczbie tras',
        'Priorytetowa obsługa klienta',
      ],
      popular: true,
      gradient: 'from-primary-600 to-primary-500',
    },
    {
      name: 'Enterprise',
      price: 'Indywidualna',
      period: 'elastyczny okres',
      features: [
        'Dostęp do pełnej floty autobusów',
        'Przygotowanie projektu reklamy z wariantami',
        'Elastyczny czas emisji reklamy',
        'Dedykowany opiekun klienta',
        'Indywidualna wycena dostosowana do potrzeb',
      ],
      popular: false,
      gradient: 'from-primary-600 to-primary-500',
    },
  ];

  const scrollToContact = () => {
    // Jeśli jesteśmy na stronie głównej, scroll do sekcji, w przeciwnym razie przejdź do strony głównej
    if (window.location.pathname === '/') {
      const element = document.querySelector('#contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = '/#contact';
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <section id="pricing" className="section-padding relative pt-24">
        <div className="container-custom">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8 sm:mb-10"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 sm:gap-3 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-semibold transition-colors text-base sm:text-lg min-h-[48px] sm:min-h-[56px]"
            >
              <FiArrowLeft className="w-6 h-6 sm:w-7 sm:h-7" />
              <span>Powrót do strony głównej</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="inline-block px-5 py-2 rounded-full glass mb-6"
            >
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                Cennik
              </span>
            </motion.span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 dark:text-white mb-8">
              Wybierz <span className="gradient-text">Pakiet</span> Dla Siebie
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium">
              Proste i przejrzyste pakiety dopasowane do Twoich potrzeb
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-8 max-w-7xl mx-auto mb-12 sm:mb-16">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`relative card group p-6 sm:p-8 md:p-10 ${
                  pkg.popular ? 'ring-2 ring-primary-500' : ''
                }`}
              >
                {pkg.popular && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -top-5 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full flex items-center gap-2"
                    style={{
                      background: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)',
                      boxShadow: '0 4px 20px rgba(30, 64, 175, 0.5)',
                    }}
                  >
                    <FiStar className="w-4 h-4 text-white" />
                    <span className="text-sm font-bold text-white uppercase tracking-wider">
                      Najpopularniejszy
                    </span>
                  </motion.div>
                )}

                {/* Gradient background on hover */}
                <motion.div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                  style={{
                    background: `linear-gradient(135deg, rgba(30, 64, 175, 0.1) 0%, rgba(30, 58, 138, 0.05) 100%)`,
                  }}
                />

                <div className={`text-center mb-10 ${pkg.popular ? 'mt-4' : ''}`}>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-tight">
                    {pkg.name}
                  </h3>
                  <div>
                    <div className={`font-bold font-mono mb-3 ${
                      pkg.price.length > 10 ? 'text-5xl' : 'text-6xl md:text-7xl'
                    }`}>
                      <span className="gradient-text">{pkg.price}</span>
                    </div>
                    {pkg.period && (
                      <div className="text-gray-700 dark:text-gray-300 text-lg md:text-xl uppercase tracking-wider font-semibold">{pkg.period}</div>
                    )}
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.15 + featureIndex * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${pkg.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <FiCheck className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed font-medium">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-center glass rounded-xl p-8 max-w-2xl mx-auto"
          >
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 dark:text-white mb-6">
              Potrzebujesz indywidualnej oferty?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-xl mb-8 font-medium">
              Skontaktuj się z nami, a przygotujemy ofertę dopasowaną do Twoich potrzeb i budżetu
            </p>
            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
            >
              Skontaktuj Się
            </motion.button>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PricingPage;


