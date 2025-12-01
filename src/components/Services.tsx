import { motion } from 'framer-motion';
import { FiMonitor, FiPenTool } from 'react-icons/fi';

const Services = () => {
  const services = [
    {
      icon: FiMonitor,
      title: 'Wynajem Miejsc Reklamowych',
      description:
        'Wynajmujemy miejsca reklamowe na monitorach w autobusach. Twoja reklama będzie widoczna dla tysięcy pasażerów codziennie.',
      color: 'steel',
    },
    {
      icon: FiPenTool,
      title: 'Projektowanie Reklam',
      description:
        'Przygotowujemy profesjonalne reklamy graficzne dostosowane do formatów wyświetlaczy w autobusach. Stworzymy projekt, który przyciągnie uwagę.',
      color: 'wood',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="services" className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-steel-100 opacity-30 blur-3xl -z-0"></div>
      
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
              Oferta
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-steel-900 mb-4">
            Co Oferujemy
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '96px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-wood-600 to-wood-500 mx-auto"
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                scale: 1.02,
              }}
              className="card card-hover bg-white text-center relative overflow-hidden group"
            >
              {/* Hover gradient overlay */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${
                  service.color === 'steel' 
                    ? 'from-steel-50 to-steel-100' 
                    : 'from-wood-50 to-wood-100'
                } opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
              
              <div className="relative z-10">
                <motion.div
                  whileHover={{ 
                    rotate: [0, -10, 10, -10, 0],
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.5 }}
                  className={`w-20 h-20 ${
                    service.color === 'steel' 
                      ? 'bg-steel-800 border-steel-900' 
                      : 'bg-wood-700 border-wood-600'
                  } border-2 flex items-center justify-center mx-auto mb-6`}
                >
                  <service.icon className="w-10 h-10 text-white" />
                </motion.div>
                
                <h3 className="text-2xl font-heading font-bold text-steel-900 mb-4 uppercase tracking-tight">
                  {service.title}
                </h3>
                <p className="text-steel-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
