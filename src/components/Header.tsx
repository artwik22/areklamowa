import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Co Oferujemy', href: '#services' },
    { name: 'Gdzie Działamy', href: '#coverage' },
    { name: 'Jak To Działa', href: '#how-it-works' },
    { name: 'Cennik', href: '#pricing' },
    { name: 'Portfolio', href: '#gallery' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass shadow-2xl bg-white/95'
          : 'bg-white/80'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="flex items-center space-x-2 sm:space-x-4 cursor-pointer"
            onClick={() => scrollToSection('#home')}
          >
            <div
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg flex items-center justify-center relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #0891b2 0%, #0e7490 100%)',
                boxShadow: '0 4px 15px rgba(8, 145, 178, 0.4)',
              }}
            >
              <span className="text-white font-bold text-xl sm:text-2xl md:text-3xl font-mono relative z-10">A</span>
            </div>
            <span className="text-lg sm:text-xl md:text-2xl font-heading font-bold text-gray-900 uppercase tracking-tight hidden sm:block">
              Agencja Reklamowa
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="text-gray-900 hover:text-primary-600 font-semibold transition-all duration-200 px-4 sm:px-6 py-2 sm:py-3 uppercase text-sm sm:text-base tracking-wider rounded-lg relative group bg-gray-50 border-2 border-transparent hover:border-primary-500"
              >
                {item.name}
              </motion.button>
            ))}
            <motion.button
              onClick={() => scrollToSection('#contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="btn-primary ml-4"
            >
              <span>Skontaktuj Się</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-900 p-3 rounded-lg glass min-w-[48px] min-h-[48px] flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <FiX className="w-8 h-8" />
            ) : (
              <FiMenu className="w-8 h-8" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden pb-4 mt-4 overflow-hidden glass rounded-2xl"
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
                initial="hidden"
                animate="visible"
                className="flex flex-col space-y-2 p-4"
              >
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="text-left text-gray-900 hover:text-primary-600 font-semibold transition-colors duration-200 px-6 py-4 uppercase text-base tracking-wider rounded-lg hover:bg-gray-100 border-2 border-transparent hover:border-primary-500 min-h-[56px]"
                  >
                    {item.name}
                  </button>
                ))}
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="btn-primary w-full mt-4"
                >
                  <span>Skontaktuj Się</span>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;
