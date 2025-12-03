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
            <span className="text-sm font-medium text-dark-200 uppercase tracking-wider">
              Kontakt
            </span>
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
            Skontaktuj Się <span className="gradient-text">Z Nami</span>
          </h2>
          <p className="text-lg md:text-xl text-dark-100 max-w-2xl mx-auto">
            Zadzwoń lub napisz do nas - chętnie odpowiemy na Twoje pytania
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
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
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 rounded-lg bg-gradient-to-br ${info.gradient} flex items-center justify-center mx-auto mb-4`}
                    style={{
                      boxShadow: '0 4px 15px rgba(8, 145, 178, 0.4)',
                    }}
                  >
                    <info.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <div className="text-sm text-dark-400 mb-2 uppercase tracking-wider">
                    {info.label}
                  </div>
                  <div className="font-semibold text-white text-lg">{info.value}</div>
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
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-400 flex items-center justify-center">
                  <FiClock className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-2xl font-heading font-bold text-white uppercase tracking-tight">
                  Godziny Pracy
                </h4>
              </div>
              <div className="grid md:grid-cols-2 gap-4 ml-15">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-500" />
                  <span className="text-dark-100 font-mono">Poniedziałek - Piątek:</span>
                  <span className="text-white font-semibold font-mono">9:00 - 17:00</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-500" />
                  <span className="text-dark-100 font-mono">Sobota:</span>
                  <span className="text-white font-semibold font-mono">10:00 - 14:00</span>
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
