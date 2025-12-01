import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Imię jest wymagane';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email jest wymagany';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Nieprawidłowy format email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefon jest wymagany';
    } else if (!/^[0-9+\s()-]+$/.test(formData.phone)) {
      newErrors.phone = 'Nieprawidłowy format telefonu';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Wiadomość jest wymagana';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-white to-steel-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-wood-200 opacity-20 blur-3xl -z-0"></div>
      
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
              Kontakt
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-steel-900 mb-4">
            Skontaktuj Się Z Nami
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '96px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-wood-600 to-wood-500 mx-auto mb-6"
          />
          <p className="text-lg text-steel-600 max-w-2xl mx-auto">
            Wypełnij formularz poniżej lub zadzwoń do nas bezpośrednio
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-heading font-bold text-steel-900 mb-6">
              Jak Możesz Się Z Nami Skontaktować
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4 mb-8"
            >
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  variants={itemVariants}
                  whileHover={{ x: 4, scale: 1.02 }}
                  className="flex items-center gap-4 p-4 card bg-white group"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="w-14 h-14 bg-steel-800 border-2 border-steel-900 flex items-center justify-center group-hover:bg-steel-700 transition-colors duration-300"
                  >
                    <info.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <div>
                    <div className="text-sm text-steel-600 mb-1 uppercase tracking-wider">
                      {info.label}
                    </div>
                    <div className="font-semibold text-steel-900">{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              className="card bg-steel-100"
            >
              <h4 className="font-heading font-bold text-steel-900 mb-3 uppercase tracking-tight">
                Godziny Pracy
              </h4>
              <p className="text-steel-700 mb-2 font-mono">Poniedziałek - Piątek: 9:00 - 17:00</p>
              <p className="text-steel-700 font-mono">Sobota: 10:00 - 14:00</p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { id: 'name', label: 'Imię i Nazwisko *', placeholder: 'Jan Kowalski', type: 'text' },
                { id: 'email', label: 'Email *', placeholder: 'jan.kowalski@example.com', type: 'email' },
                { id: 'phone', label: 'Telefon *', placeholder: '+48 123 456 789', type: 'tel' },
              ].map((field) => (
                <motion.div
                  key={field.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <label
                    htmlFor={field.id}
                    className="block text-sm font-medium text-steel-700 mb-2"
                  >
                    {field.label}
                  </label>
                  <motion.input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    value={formData[field.id as keyof typeof formData]}
                    onChange={handleChange}
                    onFocus={() => setFocusedField(field.id)}
                    onBlur={() => setFocusedField(null)}
                    whileFocus={{ scale: 1.01 }}
                    className={`w-full px-4 py-3 border-2 bg-white transition-all duration-300 ${
                      errors[field.id]
                        ? 'border-red-600 focus:border-red-600'
                        : focusedField === field.id
                        ? 'border-steel-800 shadow-lg'
                        : 'border-steel-300 focus:border-steel-800'
                    } focus:outline-none`}
                    placeholder={field.placeholder}
                  />
                  <AnimatePresence>
                    {errors[field.id] && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="mt-1 text-sm text-red-600"
                      >
                        {errors[field.id]}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-steel-700 mb-2"
                >
                  Wiadomość *
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  whileFocus={{ scale: 1.01 }}
                  rows={5}
                  className={`w-full px-4 py-3 border-2 bg-white transition-all duration-300 ${
                    errors.message
                      ? 'border-red-600 focus:border-red-600'
                      : focusedField === 'message'
                      ? 'border-steel-800 shadow-lg'
                      : 'border-steel-300 focus:border-steel-800'
                  } focus:outline-none resize-none`}
                  placeholder="Opisz, czego potrzebujesz..."
                />
                <AnimatePresence>
                  {errors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mt-1 text-sm text-red-600"
                    >
                      {errors.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="card bg-green-50 border-green-200 flex items-center gap-3"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: 'spring' }}
                    >
                      <FiCheckCircle className="w-6 h-6 text-green-600" />
                    </motion.div>
                    <p className="text-green-800">
                      Dziękujemy! Twoja wiadomość została wysłana. Odpowiemy w ciągu 24 godzin.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.05, y: isSubmitting ? 0 : -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {isSubmitting ? (
                    <>
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      >
                        ⏳
                      </motion.span>
                      Wysyłanie...
                    </>
                  ) : (
                    <>
                      Wyślij Wiadomość
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <FiSend />
                      </motion.span>
                    </>
                  )}
                </span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
