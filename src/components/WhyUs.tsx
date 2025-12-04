import { motion } from 'framer-motion';
import { FiTarget, FiDollarSign, FiClock, FiUsers, FiAward, FiMapPin } from 'react-icons/fi';

const WhyUs = () => {
  const advantages = [
    {
      icon: FiMapPin,
      title: 'Lokalne Doświadczenie',
      description: 'Znamy lokalny rynek i potrzeby mieszkańców. Działamy w regionie, który znasz najlepiej.',
      gradient: 'from-primary-600 to-primary-500',
    },
    {
      icon: FiDollarSign,
      title: 'Przystępne Ceny',
      description: 'Oferujemy konkurencyjne ceny bez ukrytych kosztów. Proste i przejrzyste pakiety.',
      gradient: 'from-primary-600 to-primary-500',
    },
    {
      icon: FiClock,
      title: 'Szybka Realizacja',
      description: 'Od kontaktu do emisji reklamy w krótkim czasie. Nie czekasz tygodniami na efekty.',
      gradient: 'from-primary-600 to-primary-500',
    },
    {
      icon: FiUsers,
      title: 'Dedykowana Obsługa',
      description: 'Każdy klient ma przypisanego opiekuna, który pomoże na każdym etapie współpracy.',
      gradient: 'from-primary-600 to-primary-500',
    },
    {
      icon: FiAward,
      title: 'Profesjonalizm',
      description: 'Doświadczony zespół, który zadba o każdy szczegół Twojej kampanii reklamowej.',
      gradient: 'from-primary-600 to-primary-500',
    },
    {
      icon: FiTarget,
      title: 'Skuteczność',
      description: 'Reklama dociera do tysięcy pasażerów każdego dnia. Widoczność 24/7 w autobusach.',
      gradient: 'from-primary-600 to-primary-500',
    },
  ];

  return (
    <section id="why-us" className="section-padding relative bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-5 py-2 rounded-full glass mb-6"
          >
            <span className="text-sm font-medium text-gray-700 uppercase tracking-wider">
              Zalety
            </span>
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-6 md:mb-8">
            Dlaczego <span className="gradient-text">Warto Nas Wybrać</span>?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto font-medium px-4">
            Co wyróżnia nas na tle konkurencji
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="card group"
            >
              <div
                className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-gradient-to-br ${advantage.gradient} flex items-center justify-center mb-6`}
                style={{
                  boxShadow: '0 4px 20px rgba(8, 145, 178, 0.3)',
                }}
              >
                <advantage.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>

              <h3 className="text-xl sm:text-2xl font-heading font-bold text-gray-900 mb-4 uppercase tracking-tight">
                {advantage.title}
              </h3>
              
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-medium">
                {advantage.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

