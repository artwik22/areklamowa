import { FiFacebook, FiInstagram, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Co Oferujemy', href: '#services' },
    { name: 'Gdzie Działamy', href: '#coverage' },
    { name: 'Cennik', href: '#pricing' },
    { name: 'Kontakt', href: '#contact' },
  ];

  const socialLinks = [
    { icon: FiFacebook, href: '#', label: 'Facebook' },
    { icon: FiInstagram, href: '#', label: 'Instagram' },
    { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FiMail, href: 'mailto:kontakt@agencja-reklamowa.pl', label: 'Email' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-steel-900 text-steel-300 border-t-2 border-steel-800">
      <div className="container-custom py-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-wood-700 border-2 border-wood-600 flex items-center justify-center">
                <span className="text-white font-bold text-xl font-mono">A</span>
              </div>
              <span className="text-lg font-heading font-bold text-white uppercase tracking-tight">
                Agencja Reklamowa
              </span>
            </div>
            <p className="text-steel-400 mb-4 text-sm">
              Wynajmujemy miejsca reklamowe na monitorach w autobusach.
              Przygotowujemy również profesjonalne reklamy dla Twojej firmy.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-steel-800 border-2 border-steel-700 flex items-center justify-center hover:bg-steel-700 transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-heading font-bold mb-4 uppercase tracking-tight text-sm">
              Nawigacja
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-steel-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-heading font-bold mb-4 uppercase tracking-tight text-sm">
              Kontakt
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:kontakt@agencja-reklamowa.pl"
                  className="text-steel-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  kontakt@agencja-reklamowa.pl
                </a>
              </li>
              <li>
                <a
                  href="tel:+48123456789"
                  className="text-steel-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  +48 123 456 789
                </a>
              </li>
              <li className="text-steel-400 text-sm">Pomorskie, Polska</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-2 border-steel-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-steel-400 text-xs font-mono">
            © {currentYear} Agencja Reklamowa. Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex gap-6 text-xs">
            <a
              href="#"
              className="text-steel-400 hover:text-white transition-colors duration-200 uppercase tracking-wider"
            >
              Polityka Prywatności
            </a>
            <a
              href="#"
              className="text-steel-400 hover:text-white transition-colors duration-200 uppercase tracking-wider"
            >
              Regulamin
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
