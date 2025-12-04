import { motion } from 'framer-motion';
import { FiPhone, FiFileText, FiPenTool, FiMonitor } from 'react-icons/fi';

const HowItWorks = () => {
  const steps = [
    {
      icon: FiPhone,
      title: 'Kontakt',
      description: 'Skontaktuj się z nami telefonicznie lub mailowo. Opowiedz nam o swoich potrzebach i oczekiwaniach.',
      number: '01',
    },
    {
      icon: FiFileText,
      title: 'Wycena',
      description: 'Przygotujemy dla Ciebie indywidualną wycenę dostosowaną do Twojego budżetu i zakresu kampanii.',
      number: '02',
    },
    {
      icon: FiPenTool,
      title: 'Projekt',
      description: 'Jeśli potrzebujesz, przygotujemy profesjonalny projekt reklamy dostosowany do formatów wyświetlaczy.',
      number: '03',
    },
    {
      icon: FiMonitor,
      title: 'Emisja',
      description: 'Twoja reklama pojawi się na monitorach w autobusach i będzie widoczna dla tysięcy pasażerów każdego dnia.',
      number: '04',
    },
  ];

  return (
    <section id="how-it-works" className="section-padding relative bg-white">
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
              Proces
            </span>
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-6 md:mb-8">
            Jak <span className="gradient-text">To Działa</span>?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto font-medium px-4">
            Prosty proces w czterech krokach od kontaktu do emisji reklamy
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative"
            >
              {/* Connecting Line (Desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-primary-500 to-transparent z-0" style={{ width: 'calc(100% - 4rem)' }} />
              )}

              <div className="card text-center relative z-10">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-primary-600 to-primary-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="mt-8 mb-6 flex justify-center">
                  <div
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl bg-gradient-to-br from-primary-600 to-primary-500 flex items-center justify-center"
                    style={{
                      boxShadow: '0 4px 20px rgba(30, 64, 175, 0.3)',
                    }}
                  >
                    <step.icon className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-gray-900 mb-4 uppercase tracking-tight">
                  {step.title}
                </h3>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-medium">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-12 md:mt-16"
        >
          <div className="glass rounded-xl p-8 md:p-12 max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 mb-4">
              Gotowy na rozpoczęcie?
            </h3>
            <p className="text-gray-700 text-lg sm:text-xl mb-6 font-medium">
              Zobacz przykłady naszych realizacji i przekonaj się o jakości
            </p>
            <motion.a
              href="/portfolio"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary inline-block"
            >
              <span>Zobacz Portfolio</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;

