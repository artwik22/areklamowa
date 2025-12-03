import { motion } from 'framer-motion';
import { FiMonitor, FiPenTool } from 'react-icons/fi';

const Services = () => {
  const services = [
    {
      icon: FiMonitor,
      title: 'Wynajem Miejsc Reklamowych',
      description:
        'Twoja reklama na monitorach w autobusach będzie widoczna dla tysięcy pasażerów każdego dnia. Skuteczna forma dotarcia do lokalnych klientów.',
    },
    {
      icon: FiPenTool,
      title: 'Projektowanie Reklam',
      description:
        'Przygotujemy profesjonalną reklamę, która przyciągnie uwagę i zwiększy rozpoznawalność Twojej marki. Stworzymy projekt dostosowany do formatów wyświetlaczy.',
    },
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-5 py-2 bg-steel-800 text-white uppercase text-xs tracking-wider font-mono border-2 border-steel-900 mb-4">
            Oferta
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-steel-900 mb-4">
            Dlaczego Warto Reklamować Się w Autobusach?
          </h2>
          <div className="h-1 bg-wood-600 w-24 mx-auto mb-6" />
          <p className="text-lg text-steel-600 max-w-2xl mx-auto">
            Skuteczna reklama, która dociera do tysięcy potencjalnych klientów każdego dnia
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="card bg-white text-center"
            >
              <div className="w-20 h-20 bg-steel-800 border-2 border-steel-900 flex items-center justify-center mx-auto mb-6">
                <service.icon className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl font-heading font-bold text-steel-900 mb-4 uppercase tracking-tight">
                {service.title}
              </h3>
              <p className="text-steel-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
