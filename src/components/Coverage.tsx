import { motion } from 'framer-motion';
import { FiMapPin } from 'react-icons/fi';

const Coverage = () => {
  const counties = [
    'Malbork',
    'Sztum',
    'Stary Targ',
    'Mikołajki Pomorskie',
    'Miloradz',
    'Stare Pole',
    'Prabuty',
    'Ryjewo',
  ];

  return (
    <section id="coverage" className="section-padding relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 dark:text-white mb-8 md:mb-12">
            Gdzie <span className="gradient-text">Działamy</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {counties.map((county, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              whileHover={{ scale: 1.03 }}
              className="card card-hover group relative overflow-hidden p-6 sm:p-8"
            >
              {/* Gradient overlay on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{
                  background: 'linear-gradient(135deg, rgba(30, 64, 175, 0.15) 0%, rgba(30, 58, 138, 0.15) 100%)',
                }}
              />
              
              <div className="relative z-10 flex flex-col items-center">
                <div
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg mb-6 sm:mb-8 flex items-center justify-center relative"
                  style={{
                    background: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)',
                    boxShadow: '0 4px 15px rgba(30, 64, 175, 0.4)',
                  }}
                >
                  <FiMapPin className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-heading font-bold text-gray-900 dark:text-white uppercase tracking-tight text-center leading-tight">
                  {county}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-12 md:mt-16"
        >
          <div className="glass rounded-xl p-8 md:p-12 max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 dark:text-white mb-4">
              Działamy w Twojej okolicy?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg sm:text-xl mb-6 font-medium">
              Sprawdź naszą ofertę i dotrzyj do lokalnych klientów
            </p>
            <motion.a
              href="/cennik"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary inline-block"
            >
              <span>Zobacz Cennik</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Coverage;
