const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
      <div className="container-custom py-8 sm:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Company Info */}
          <div className="flex items-center space-x-3">
            <div 
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)',
                boxShadow: '0 4px 15px rgba(30, 64, 175, 0.4)',
              }}
            >
              <span className="text-white font-bold text-lg sm:text-xl font-mono">A</span>
            </div>
            <span className="text-lg sm:text-xl font-heading font-bold text-gray-900 dark:text-white uppercase tracking-tight">
              Agencja Reklamowa
            </span>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-sm sm:text-base">
            <a
              href="mailto:kontakt@agencja-reklamowa.pl"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            >
              kontakt@agencja-reklamowa.pl
            </a>
            <span className="hidden sm:inline text-gray-400">•</span>
            <a
              href="tel:+48123456789"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            >
              +48 123 456 789
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-6 pt-6 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {currentYear} Agencja Reklamowa. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
