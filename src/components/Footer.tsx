import { FiFacebook, FiInstagram, FiLinkedin, FiMail } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Jak to działa', href: '/jak-to-dziala' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Cennik', href: '/cennik' },
    { name: 'Kontakt', href: '#contact' },
  ];

  const socialLinks = [
    { icon: FiFacebook, href: '#', label: 'Facebook', color: 'hover:text-primary-400' },
    { icon: FiInstagram, href: '#', label: 'Instagram', color: 'hover:text-primary-400' },
    { icon: FiLinkedin, href: '#', label: 'LinkedIn', color: 'hover:text-primary-400' },
    { icon: FiMail, href: 'mailto:kontakt@agencja-reklamowa.pl', label: 'Email', color: 'hover:text-primary-400' },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('/')) {
      window.location.href = href;
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative border-t border-gray-200 bg-gray-50">
      {/* Gradient overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(30, 64, 175, 0.03) 100%)',
        }}
      />

      <div className="container-custom py-12 sm:py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-10 sm:gap-12 mb-10 sm:mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center space-x-3 mb-6"
            >
              <div 
                className="w-14 h-14 rounded-lg flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)',
                  boxShadow: '0 4px 15px rgba(30, 64, 175, 0.4)',
                }}
              >
                <span className="text-white font-bold text-2xl font-mono">A</span>
              </div>
              <span className="text-2xl font-heading font-bold text-gray-900 uppercase tracking-tight">
                Agencja Reklamowa
              </span>
            </motion.div>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed max-w-md">
              Wynajmujemy miejsca reklamowe na monitorach w autobusach.
              Przygotowujemy również profesjonalne reklamy dla Twojej firmy.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className={`w-12 h-12 rounded-lg glass flex items-center justify-center text-gray-700 hover:text-primary-600 transition-all duration-300`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 font-heading font-bold mb-6 uppercase tracking-tight text-lg">
              Nawigacja
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-700 hover:text-primary-600 transition-colors duration-200 text-base hover:translate-x-1 inline-block"
                  >
                    → {link.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-gray-900 font-heading font-bold mb-6 uppercase tracking-tight text-lg">
              Kontakt
            </h3>
            <ul className="space-y-4">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <a
                  href="mailto:kontakt@agencja-reklamowa.pl"
                  className="text-gray-700 hover:text-primary-600 transition-colors duration-200 text-base block"
                >
                  kontakt@agencja-reklamowa.pl
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <a
                  href="tel:+48123456789"
                  className="text-gray-700 hover:text-primary-600 transition-colors duration-200 text-base block"
                >
                  +48 123 456 789
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-gray-700 text-base"
              >
                Pomorskie, Polska
              </motion.li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-600 text-sm font-mono">
            © {currentYear} Agencja Reklamowa. Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex gap-8 text-sm">
            <a
              href="#"
              className="text-gray-600 hover:text-primary-600 transition-colors duration-200 uppercase tracking-wider"
            >
              Polityka Prywatności
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-primary-600 transition-colors duration-200 uppercase tracking-wider"
            >
              Regulamin
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
