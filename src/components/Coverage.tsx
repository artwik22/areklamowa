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
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
            Gdzie <span className="gradient-text">Działamy</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {counties.map((county, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="card card-hover group relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(135deg, rgba(8, 145, 178, 0.1) 0%, rgba(14, 116, 144, 0.1) 100%)',
                }}
              />
              
              <div className="relative z-10 flex flex-col items-center">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 rounded-lg mb-4 flex items-center justify-center relative"
                  style={{
                    background: 'linear-gradient(135deg, #0891b2 0%, #0e7490 100%)',
                    boxShadow: '0 4px 15px rgba(8, 145, 178, 0.4)',
                  }}
                >
                  <FiMapPin className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-base md:text-lg font-heading font-bold text-white uppercase tracking-tight text-center">
                  {county}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coverage;
