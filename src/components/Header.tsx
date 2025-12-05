import { useState, useEffect } from 'react';
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
    { name: 'Jak to działa', href: '/jak-to-dziala' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Cennik', href: '/cennik' },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('/')) {
      window.location.href = href;
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'glass shadow-lg bg-white/95'
          : 'bg-white/90'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20 md:h-24 px-2 sm:px-0">
          {/* Logo */}
          <div
            className="flex items-center space-x-2 sm:space-x-3 cursor-pointer"
            onClick={() => scrollToSection('#home')}
          >
            <div
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)',
              }}
            >
              <span className="text-white font-bold text-lg sm:text-xl font-mono">A</span>
            </div>
            <span className="text-base sm:text-xl font-heading font-bold text-gray-900 uppercase tracking-tight hidden sm:block">
              Agencja Reklamowa
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-3">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-900 hover:text-primary-600 font-semibold transition-colors duration-200 px-4 py-2 text-base"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('#contact')}
              className="btn-primary ml-3"
            >
              <span>Kontakt</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-900 p-3 sm:p-4 rounded-lg glass min-w-[56px] min-h-[56px] flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <FiX className="w-7 h-7 sm:w-8 sm:h-8" />
            ) : (
              <FiMenu className="w-7 h-7 sm:w-8 sm:h-8" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-6 mt-4 glass rounded-lg mx-2 sm:mx-0">
            <div className="flex flex-col space-y-3 p-4 sm:p-6">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-gray-900 hover:text-primary-600 font-semibold transition-colors duration-200 px-4 py-4 text-lg sm:text-xl min-h-[56px] flex items-center"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('#contact')}
                className="btn-primary w-full mt-2 min-h-[56px] text-lg"
              >
                <span>Kontakt</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
