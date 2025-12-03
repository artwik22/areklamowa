import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';

const Pricing = () => {
  const packages = [
    {
      name: 'Start',
      price: '500 zł',
      period: 'miesięcznie',
      features: [
        'Reklama na monitorach w autobusach',
        'Wyświetlanie przez cały miesiąc',
        'Możliwość przygotowania reklamy',
        'Emisja na wybranych trasach',
      ],
      popular: false,
    },
    {
      name: 'Biznes',
      price: '900 zł',
      period: '2 miesiące',
      features: [
        'Reklama na monitorach w autobusach',
        'Wyświetlanie przez 2 miesiące',
        'Przygotowanie reklamy w cenie',
        'Emisja na większej liczbie tras',
        'Priorytetowa obsługa',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Indywidualna',
      period: 'elastyczny okres',
      features: [
        'Pełna flota autobusów',
        'Przygotowanie reklamy z wariantami',
        'Elastyczny czas emisji',
        'Dedykowany opiekun klienta',
        'Indywidualna wycena',
      ],
      popular: false,
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="section-padding bg-steel-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-5 py-2 bg-wood-700 text-white uppercase text-xs tracking-wider font-mono border-2 border-wood-600 mb-4">
            Cennik
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Cennik
          </h2>
          <div className="h-1 bg-wood-600 w-24 mx-auto mb-6" />
          <p className="text-lg text-steel-300">
            Proste pakiety dostosowane do Twoich potrzeb
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-10">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -4 }}
              className={`relative card bg-steel-800 ${
                pkg.popular 
                  ? 'border-2 border-wood-600' 
                  : 'border-2 border-steel-700'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-wood-700 text-white px-4 py-1 uppercase text-xs tracking-wider font-mono border-2 border-wood-600">
                  Najpopularniejszy
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-heading font-bold text-white mb-3 uppercase tracking-tight">
                  {pkg.name}
                </h3>
                <div>
                  <div className={`font-bold text-white font-mono ${
                    pkg.price.length > 10 ? 'text-3xl' : 'text-5xl'
                  }`}>
                    {pkg.price}
                  </div>
                  {pkg.period && (
                    <div className="text-steel-300 text-sm mt-2">{pkg.period}</div>
                  )}
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-wood-700 border-2 border-wood-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <FiCheck className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-steel-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                onClick={scrollToContact}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 font-semibold transition-colors border-2 uppercase tracking-wider text-sm ${
                  pkg.popular
                    ? 'bg-wood-700 text-white border-wood-600 hover:bg-wood-600'
                    : 'bg-steel-700 text-white border-steel-600 hover:bg-steel-600'
                }`}
              >
                Wybierz Pakiet
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center"
        >
          <p className="text-steel-300 mb-4">Potrzebujesz indywidualnej oferty?</p>
          <motion.button
            onClick={scrollToContact}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-transparent text-white px-8 py-4 font-semibold border-2 border-wood-600 hover:bg-wood-700 transition-all duration-500 uppercase tracking-wider text-sm"
          >
            Skontaktuj Się
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
