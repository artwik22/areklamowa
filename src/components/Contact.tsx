import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi';

const Contact = () => {
  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'kontakt@agencja-reklamowa.pl',
      href: 'mailto:kontakt@agencja-reklamowa.pl',
      gradient: 'from-primary-600 to-primary-500',
    },
    {
      icon: FiPhone,
      label: 'Telefon',
      value: '+48 123 456 789',
      href: 'tel:+48123456789',
      gradient: 'from-primary-600 to-primary-500',
    },
    {
      icon: FiMapPin,
      label: 'Adres',
      value: 'Pomorskie, Polska',
      href: '#',
      gradient: 'from-primary-600 to-primary-500',
    },
  ];

  return (
    <section id="contact" className="section-padding relative">
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
            <span className="text-sm font-medium text-gray-700 uppercase tracking-wider">
              Kontakt
            </span>
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-6 md:mb-8">
            Skontaktuj Się <span className="gradient-text">Z Nami</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto font-medium px-4">
            Zadzwoń lub napisz do nas - chętnie odpowiemy na Twoje pytania
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6 md:mb-8">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="card card-hover group relative overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(135deg, rgba(8, 145, 178, 0.1) 0%, rgba(14, 116, 144, 0.05) 100%)`,
                }}
                />

                <div className="relative z-10 text-center">
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 rounded-lg bg-gradient-to-br ${info.gradient} flex items-center justify-center mx-auto mb-4 sm:mb-6`}
                    style={{
                      boxShadow: '0 4px 15px rgba(8, 145, 178, 0.4)',
                    }}
                  >
                    <info.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <div className="text-sm sm:text-base text-gray-700 mb-2 sm:mb-3 uppercase tracking-wider font-semibold">
                    {info.label}
                  </div>
                  <div className="font-bold text-gray-900 text-lg sm:text-xl md:text-2xl break-words">{info.value}</div>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="card relative overflow-hidden"
          >
            {/* Gradient background */}
            <div 
              className="absolute inset-0 opacity-5"
              style={{
                background: 'linear-gradient(135deg, #0891b2 0%, #0e7490 100%)',
              }}
            />

            <div className="relative z-10">
              <div className="flex items-center gap-2 sm:gap-3 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-400 flex items-center justify-center flex-shrink-0">
                  <FiClock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h4 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 uppercase tracking-tight">
                  Godziny Pracy
                </h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                  <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-primary-500 flex-shrink-0" />
                    <span className="text-gray-700 font-mono text-base sm:text-lg md:text-xl">Poniedziałek - Piątek:</span>
                  </div>
                  <span className="text-gray-900 font-bold font-mono text-lg sm:text-xl md:text-2xl ml-5 sm:ml-0">9:00 - 17:00</span>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                  <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-primary-500 flex-shrink-0" />
                    <span className="text-gray-700 font-mono text-base sm:text-lg md:text-xl">Sobota:</span>
                  </div>
                  <span className="text-gray-900 font-bold font-mono text-lg sm:text-xl md:text-2xl ml-5 sm:ml-0">10:00 - 14:00</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
