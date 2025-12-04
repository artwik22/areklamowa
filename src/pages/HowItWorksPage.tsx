import { motion } from 'framer-motion';
import { FiPhone, FiDollarSign, FiEdit, FiMonitor, FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HowItWorksPage = () => {
  const steps = [
    {
      icon: FiPhone,
      title: 'Kontakt',
      description: 'Skontaktuj się z nami telefonicznie lub mailowo. Opowiedz nam o swojej firmie i potrzebach reklamowych.',
      gradient: 'from-primary-600 to-primary-500',
    },
    {
      icon: FiDollarSign,
      title: 'Wycena',
      description: 'Przygotujemy dla Ciebie indywidualną wycenę dopasowaną do Twojego budżetu i zakresu kampanii reklamowej.',
      gradient: 'from-primary-600 to-primary-500',
    },
    {
      icon: FiEdit,
      title: 'Projekt',
      description: 'Stworzymy profesjonalny projekt reklamy lub wykorzystamy Twój istniejący materiał reklamowy.',
      gradient: 'from-primary-600 to-primary-500',
    },
    {
      icon: FiMonitor,
      title: 'Emisja',
      description: 'Twoja reklama będzie wyświetlana na monitorach w autobusach przez wybrany okres czasu.',
      gradient: 'from-primary-600 to-primary-500',
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <section className="section-padding relative pt-24">
        <div className="container-custom">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-gray-700 hover:text-primary-600 font-semibold transition-colors"
            >
              <FiArrowLeft className="w-5 h-5" />
              <span>Powrót do strony głównej</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="inline-block px-5 py-2 rounded-full glass mb-6"
            >
              <span className="text-sm font-medium text-gray-700 uppercase tracking-wider">
                Proces
              </span>
            </motion.span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-8">
              Jak to <span className="gradient-text">Działa</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 font-medium max-w-2xl mx-auto">
              Prosty proces w 4 krokach - od kontaktu do emisji Twojej reklamy
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="card text-center relative"
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-primary-600 to-primary-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {index + 1}
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
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
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
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HowItWorksPage;

