import { motion } from 'framer-motion';
import {
  FiMessageSquare,
  FiPenTool,
  FiCheckCircle,
  FiPlay,
  FiBarChart,
} from 'react-icons/fi';

const HowItWorks = () => {
  const steps = [
    {
      icon: FiMessageSquare,
      title: 'Kontakt i Brief',
      description:
        'Skontaktuj się z nami i opowiedz o swoich potrzebach. Zrozumiemy Twój biznes i cele reklamowe.',
      number: '01',
    },
    {
      icon: FiPenTool,
      title: 'Tworzenie Reklamy',
      description:
        'Możemy stworzyć profesjonalną reklamę dla Ciebie lub użyjemy Twojego gotowego materiału.',
      number: '02',
    },
    {
      icon: FiCheckCircle,
      title: 'Akceptacja Materiałów',
      description:
        'Przeglądasz i akceptujesz reklamę. Wprowadzamy ewentualne poprawki zgodnie z Twoimi sugestiami.',
      number: '03',
    },
    {
      icon: FiPlay,
      title: 'Emisja na Monitorach',
      description:
        'Ustawiamy harmonogram i rozpoczynamy emisję Twojej reklamy na monitorach w autobusach.',
      number: '04',
    },
    {
      icon: FiBarChart,
      title: 'Raportowanie',
      description:
        'Dostarczamy informacje o zasięgu reklamy. Wiesz dokładnie, ile pasażerów widzi Twoją reklamę.',
      number: '05',
    },
  ];

  return (
    <section id="how-it-works" className="section-padding bg-steel-50 relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-steel-800 text-white uppercase text-sm tracking-wider font-mono mb-6 border-2 border-steel-900"
          >
            Proces
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-steel-900 mb-6">
            Jak to Działa?
          </h2>
          <div className="w-32 h-1 bg-wood-600 mx-auto mb-6"></div>
          <p className="text-xl text-steel-600 max-w-2xl mx-auto">
            Prosty proces współpracy w 5 krokach
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-32 left-0 right-0 h-1 bg-steel-300"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative"
              >
                <motion.div
                  whileHover={{ y: -6, x: 4 }}
                  className="card card-hover bg-white relative"
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 w-14 h-14 bg-steel-900 text-white flex items-center justify-center font-bold text-lg font-mono border-2 border-steel-800">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-steel-800 border-2 border-steel-900 flex items-center justify-center mb-6">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-heading font-bold text-steel-900 mb-3 uppercase tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-steel-600 leading-relaxed">{step.description}</p>
                </motion.div>

                {/* Arrow (Desktop, except last) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-32 -right-3 z-10">
                    <div className="w-6 h-6 bg-white border-2 border-steel-300 flex items-center justify-center">
                      <div className="w-0 h-0 border-t-2 border-t-transparent border-b-2 border-b-transparent border-l-2 border-l-steel-600"></div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <motion.button
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary text-lg px-8 py-4"
          >
            Rozpocznij współpracę
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
