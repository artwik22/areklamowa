import { motion } from 'framer-motion';
import { FiMapPin } from 'react-icons/fi';

const Coverage = () => {
  const counties = [
    'Powiat Malborski',
    'Powiat Sztumski',
    'Okolice Prabut',
    'Powiat Kwidzyński',
    'Gmina Miloradz',
    'Gmina Ryjewo',
  ];

  return (
    <section id="coverage" className="section-padding bg-steel-950">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-5 py-2 bg-wood-700 text-white uppercase text-xs tracking-wider font-mono border-2 border-wood-600 mb-4">
            Obszar Działania
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Gdzie Działamy
          </h2>
          <div className="h-1 bg-wood-600 w-24 mx-auto mb-6" />
          <p className="text-lg text-steel-300">
            Działamy w powiatach i gminach województwa pomorskiego
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {counties.map((county, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="card bg-steel-800 border-steel-700 text-center"
            >
              <div className="w-16 h-16 bg-wood-700 border-2 border-wood-600 flex items-center justify-center mx-auto mb-4">
                <FiMapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-sm font-heading font-bold text-white uppercase tracking-tight">
                {county}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coverage;
