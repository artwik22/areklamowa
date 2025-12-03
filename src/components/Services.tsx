import { motion } from 'framer-motion';
import { FiMonitor, FiPenTool } from 'react-icons/fi';

const Services = () => {
  const services = [
    {
      icon: FiMonitor,
      title: 'Wynajem Miejsc Reklamowych',
      description:
        'Twoja reklama na monitorach w autobusach będzie widoczna dla tysięcy pasażerów każdego dnia. To skuteczna forma dotarcia do lokalnych klientów w ich codziennych podróżach.',
      gradient: 'from-primary-600 to-primary-500',
    },
    {
      icon: FiPenTool,
      title: 'Projektowanie Reklam',
      description:
        'Przygotujemy profesjonalną reklamę, która przyciągnie uwagę pasażerów i zwiększy rozpoznawalność Twojej marki. Projekt będzie dostosowany do formatów wyświetlaczy w autobusach.',
      gradient: 'from-primary-600 to-primary-500',
    },
  ];

  return (
    <section id="services" className="section-padding relative">
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
            <span className="text-sm font-medium text-dark-200 uppercase tracking-wider">
              Oferta
            </span>
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
            Dlaczego Warto Wybrać <span className="gradient-text">Reklamę w Autobusach</span>?
          </h2>
          <p className="text-lg md:text-xl text-dark-100 max-w-3xl mx-auto leading-relaxed">
            Skuteczna forma reklamy, która dociera do tysięcy potencjalnych klientów każdego dnia
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="card card-hover group"
            >
              <div className="relative">
                {/* Icon with gradient background */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className={`w-20 h-20 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 relative overflow-hidden`}
                  style={{
                    boxShadow: '0 4px 20px rgba(8, 145, 178, 0.3)',
                  }}
                >
                  <service.icon className="w-10 h-10 text-white relative z-10" />
                  <motion.div
                    className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"
                  />
                </motion.div>
                
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4 uppercase tracking-tight">
                  {service.title}
                </h3>
                <p className="text-dark-100 leading-relaxed text-lg">
                  {service.description}
                </p>

                {/* Decorative gradient line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.4, duration: 0.6 }}
                  className={`h-1 rounded-full bg-gradient-to-r ${service.gradient} mt-6 origin-left`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
