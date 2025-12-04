import { motion } from 'framer-motion';
import { FiCheck, FiStar } from 'react-icons/fi';

const Pricing = () => {
  const packages = [
    {
      name: 'Start',
      price: '500 zł',
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
      price: '900 zł',
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
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="section-padding relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-5 py-2 rounded-full glass mb-6"
          >
            <span className="text-sm font-medium text-gray-700 uppercase tracking-wider">
              Cennik
            </span>
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-8">
            Wybierz <span className="gradient-text">Pakiet</span> Dla Siebie
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 font-medium">
            Proste i przejrzyste pakiety dopasowane do Twoich potrzeb
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto mb-12">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`relative card group ${
                pkg.popular ? 'ring-2 ring-primary-500' : ''
              }`}
            >
              {pkg.popular && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -top-5 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full flex items-center gap-2"
                  style={{
                    background: 'linear-gradient(135deg, #0891b2 0%, #0e7490 100%)',
                    boxShadow: '0 4px 20px rgba(8, 145, 178, 0.5)',
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
                  background: `linear-gradient(135deg, rgba(8, 145, 178, 0.1) 0%, rgba(14, 116, 144, 0.05) 100%)`,
                }}
              />

              <div className={`text-center mb-8 md:mb-10 ${pkg.popular ? 'mt-4' : ''}`}>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4 md:mb-6 uppercase tracking-tight">
                  {pkg.name}
                </h3>
                <div>
                  <div className={`font-bold font-mono mb-2 md:mb-3 ${
                    pkg.price.length > 10 ? 'text-4xl sm:text-5xl' : 'text-5xl sm:text-6xl md:text-7xl'
                  }`}>
                    <span className="gradient-text">{pkg.price}</span>
                  </div>
                  {pkg.period && (
                    <div className="text-gray-700 text-base sm:text-lg md:text-xl uppercase tracking-wider font-semibold">{pkg.period}</div>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + featureIndex * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${pkg.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                      <FiCheck className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed font-medium">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.button
                onClick={scrollToContact}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-5 font-semibold transition-all duration-200 rounded-lg uppercase tracking-wider text-base min-h-[56px] ${
                  pkg.popular
                    ? 'btn-primary'
                    : 'border-3 border-primary-500 text-primary-600 hover:border-primary-600 hover:bg-primary-50'
                }`}
              >
                <span>Wybierz Pakiet</span>
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center glass rounded-xl p-8 max-w-2xl mx-auto"
        >
          <h3 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 mb-4 md:mb-6">
            Potrzebujesz indywidualnej oferty?
          </h3>
          <p className="text-gray-700 text-lg sm:text-xl mb-6 md:mb-8 font-medium">
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
  );
};

export default Pricing;
