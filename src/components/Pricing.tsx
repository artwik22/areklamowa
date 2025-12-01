import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';

const Pricing = () => {
  const packages = [
    {
      name: 'Podstawowy',
      price: 'Od 500 zł',
      period: 'miesięcznie',
      features: [
        'Wynajem miejsca reklamowego na monitorach',
        'Możliwość przygotowania reklamy',
        'Emisja na wybranych autobusach',
        'Emisja przez 1 miesiąc',
      ],
      popular: false,
      color: 'steel',
    },
    {
      name: 'Standardowy',
      price: 'Od 1200 zł',
      period: 'miesięcznie',
      features: [
        'Wynajem miejsca reklamowego na monitorach',
        'Profesjonalne przygotowanie reklamy',
        'Emisja na większej liczbie autobusów',
        'Emisja przez 2 miesiące',
        'Priorytetowa obsługa',
      ],
      popular: true,
      color: 'wood',
    },
    {
      name: 'Premium',
      price: 'Indywidualna',
      period: 'wycena',
      features: [
        'Wynajem miejsc na wszystkich autobusach',
        'Przygotowanie reklamy z wariantami',
        'Długoterminowa współpraca',
        'Dedykowany opiekun klienta',
      ],
      popular: false,
      color: 'nature',
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="pricing" className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-steel-100 opacity-30 blur-3xl -z-0"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="inline-block px-5 py-2 bg-wood-700 text-white uppercase text-xs tracking-wider font-mono border-2 border-wood-600">
              Cennik
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-steel-900 mb-4">
            Ile to Kosztuje
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '96px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-wood-600 to-wood-500 mx-auto mb-6"
          />
          <p className="text-lg text-steel-600">
            Wybierz pakiet, który najlepiej odpowiada Twoim potrzebom
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-10"
        >
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                scale: pkg.popular ? 1.05 : 1.02,
              }}
              className={`relative card bg-white ${
                pkg.popular 
                  ? 'border-2 border-steel-900' 
                  : 'border-2 border-steel-300'
              } overflow-hidden group`}
            >
              {pkg.popular && (
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-steel-900 text-white px-4 py-1 uppercase text-xs tracking-wider font-mono border-2 border-steel-800 z-20"
                >
                  Najczęściej Wybierany
                </motion.div>
              )}

              {/* Gradient overlay on hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${
                  pkg.color === 'steel' 
                    ? 'from-steel-50 to-steel-100' 
                    : pkg.color === 'wood'
                    ? 'from-wood-50 to-wood-100'
                    : 'from-nature-50 to-nature-100'
                } opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-heading font-bold text-steel-900 mb-3 uppercase tracking-tight">
                    {pkg.name}
                  </h3>
                  <div className="mb-2">
                    <span className="text-5xl font-bold text-steel-900 font-mono">
                      {pkg.price}
                    </span>
                    {pkg.period && (
                      <span className="text-steel-600 ml-2 text-sm">/{pkg.period}</span>
                    )}
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + index * 0.1 + featureIndex * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.4 }}
                        className="w-5 h-5 bg-steel-800 border-2 border-steel-900 flex items-center justify-center flex-shrink-0 mt-0.5"
                      >
                        <FiCheck className="w-3 h-3 text-white" />
                      </motion.div>
                      <span className="text-steel-700 text-sm">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.button
                  onClick={scrollToContact}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-4 font-semibold transition-all duration-500 ease-out border-2 uppercase tracking-wider text-sm relative overflow-hidden group ${
                    pkg.popular
                      ? 'bg-steel-900 text-white border-steel-900 hover:bg-steel-800'
                      : 'bg-steel-100 text-steel-900 border-steel-300 hover:bg-steel-200'
                  }`}
                  style={{
                    boxShadow: pkg.popular
                      ? '6px 6px 0px 0px rgba(26, 29, 32, 0.3)'
                      : '4px 4px 0px 0px rgba(26, 29, 32, 0.2)',
                  }}
                >
                  <span className="relative z-10">Wybierz Pakiet</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full"
                    transition={{ duration: 0.6 }}
                  />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center"
        >
          <p className="text-steel-600 mb-4">Potrzebujesz indywidualnej oferty?</p>
          <motion.button
            onClick={scrollToContact}
            whileHover={{ scale: 1.05, y: -2 }}
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
