import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Contact = () => {
  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'kontakt@agencja-reklamowa.pl',
      href: 'mailto:kontakt@agencja-reklamowa.pl',
    },
    {
      icon: FiPhone,
      label: 'Telefon',
      value: '+48 123 456 789',
      href: 'tel:+48123456789',
    },
    {
      icon: FiMapPin,
      label: 'Adres',
      value: 'Pomorskie, Polska',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="section-padding bg-steel-950">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-5 py-2 bg-wood-700 text-white uppercase text-xs tracking-wider font-mono border-2 border-wood-600 mb-4">
            Kontakt
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Skontaktuj Się Z Nami
          </h2>
          <div className="h-1 bg-wood-600 w-24 mx-auto mb-6" />
          <p className="text-lg text-steel-300 max-w-2xl mx-auto">
            Skontaktuj się z nami telefonicznie lub mailowo
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-heading font-bold text-white mb-6 text-center">
              Dane Kontaktowe
            </h3>
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 p-4 card bg-steel-800 border-steel-700"
                >
                  <div className="w-14 h-14 bg-wood-700 border-2 border-wood-600 flex items-center justify-center">
                    <info.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-steel-400 mb-1 uppercase tracking-wider">
                      {info.label}
                    </div>
                    <div className="font-semibold text-white">{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="card bg-steel-800 border-steel-700">
              <h4 className="font-heading font-bold text-white mb-3 uppercase tracking-tight">
                Godziny Pracy
              </h4>
              <p className="text-steel-300 mb-2 font-mono">Poniedziałek - Piątek: 9:00 - 17:00</p>
              <p className="text-steel-300 font-mono">Sobota: 10:00 - 14:00</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
