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
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="coverage" className="section-padding bg-gradient-to-b from-steel-100 to-steel-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-wood-200 opacity-20 blur-3xl -z-0"></div>
      
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
            <span className="inline-block px-5 py-2 bg-steel-800 text-white uppercase text-xs tracking-wider font-mono border-2 border-steel-900">
              Obszar Działania
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-steel-900 mb-4">
            Gdzie Możesz Reklamować Swoją Firmę
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '96px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-wood-600 to-wood-500 mx-auto mb-6"
          />
          <p className="text-lg text-steel-600">
            Działamy w powiatach i gminach województwa pomorskiego
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {counties.map((county, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -6,
                scale: 1.05,
              }}
              className="card card-hover bg-white text-center relative overflow-hidden group"
            >
              {/* Hover effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-steel-50 to-steel-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
              />
              
              <div className="relative z-10">
                <motion.div
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.2,
                  }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-gradient-to-br from-steel-800 to-steel-700 border-2 border-steel-900 flex items-center justify-center mx-auto mb-4"
                >
                  <FiMapPin className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-sm font-heading font-bold text-steel-900 uppercase tracking-tight">
                  {county}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Coverage;
