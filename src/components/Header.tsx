import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../contexts/ThemeContext';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const handleNavClick = (href: string) => {
    scrollToSection(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'glass shadow-lg bg-white/95 dark:bg-gray-900/95'
          : 'bg-white/90 dark:bg-gray-900/90'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20 md:h-24 px-2 sm:px-0">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 sm:space-x-3 cursor-pointer"
          >
            <div
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)',
              }}
            >
              <span className="text-white font-bold text-lg sm:text-xl font-mono">A</span>
            </div>
            <span className="text-base sm:text-xl font-heading font-bold text-gray-900 dark:text-white uppercase tracking-tight hidden sm:block">
              Agencja Reklamowa
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              to="/cennik"
              className="text-gray-900 dark:text-gray-100 hover:text-primary-600 dark:hover:text-primary-400 font-semibold transition-colors duration-200 px-4 py-2 text-base"
            >
              Cennik
            </Link>
            <button
              onClick={() => scrollToSection('#contact')}
              className="btn-primary ml-3"
            >
              <span>Kontakt</span>
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg glass text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors min-w-[48px] min-h-[48px] flex items-center justify-center"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <FiSun className="w-5 h-5" />
              ) : (
                <FiMoon className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-3 rounded-lg glass text-gray-900 dark:text-gray-100 min-w-[48px] min-h-[48px] flex items-center justify-center"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <FiSun className="w-6 h-6" />
              ) : (
                <FiMoon className="w-6 h-6" />
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-3 sm:p-4 rounded-lg glass text-gray-900 dark:text-gray-100 min-w-[56px] min-h-[56px] flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <FiX className="w-7 h-7 sm:w-8 sm:h-8" />
              ) : (
                <FiMenu className="w-7 h-7 sm:w-8 sm:h-8" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 mx-2 sm:mx-0">
            <div 
              className="rounded-2xl p-2 backdrop-blur-xl border-2 dark:border-gray-700"
              style={{
                background: 'rgba(255, 255, 255, 0.98)',
                borderColor: 'rgba(229, 231, 235, 0.8)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
              }}
            >
              <style>{`
                .dark .rounded-2xl {
                  background: rgba(31, 41, 55, 0.98) !important;
                  border-color: rgba(75, 85, 99, 0.5) !important;
                  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3) !important;
                }
              `}</style>
              <div className="dark:hidden flex flex-col space-y-1 p-2">
                <Link
                  to="/jak-to-dziala"
                  onClick={() => handleNavClick('/jak-to-dziala')}
                  className="text-left text-gray-900 hover:text-primary-600 font-semibold transition-colors duration-150 px-6 py-4 text-lg rounded-xl hover:bg-primary-50 min-h-[56px] flex items-center"
                >
                  Jak to działa
                </Link>
                <Link
                  to="/portfolio"
                  onClick={() => handleNavClick('/portfolio')}
                  className="text-left text-gray-900 hover:text-primary-600 font-semibold transition-colors duration-150 px-6 py-4 text-lg rounded-xl hover:bg-primary-50 min-h-[56px] flex items-center"
                >
                  Portfolio
                </Link>
                <Link
                  to="/cennik"
                  onClick={() => handleNavClick('/cennik')}
                  className="text-left text-gray-900 hover:text-primary-600 font-semibold transition-colors duration-150 px-6 py-4 text-lg rounded-xl hover:bg-primary-50 min-h-[56px] flex items-center"
                >
                  Cennik
                </Link>
                <button
                  onClick={() => handleNavClick('#contact')}
                  className="btn-primary w-full min-h-[56px] text-lg mt-2 rounded-xl"
                >
                  <span>Kontakt</span>
                </button>
              </div>
              {/* Dark mode version */}
              <div className="hidden dark:flex flex-col space-y-1 p-2">
                <Link
                  to="/jak-to-dziala"
                  onClick={() => handleNavClick('/jak-to-dziala')}
                  className="text-left text-gray-100 hover:text-primary-400 font-semibold transition-colors duration-150 px-6 py-4 text-lg rounded-xl hover:bg-gray-800 min-h-[56px] flex items-center"
                >
                  Jak to działa
                </Link>
                <Link
                  to="/portfolio"
                  onClick={() => handleNavClick('/portfolio')}
                  className="text-left text-gray-100 hover:text-primary-400 font-semibold transition-colors duration-150 px-6 py-4 text-lg rounded-xl hover:bg-gray-800 min-h-[56px] flex items-center"
                >
                  Portfolio
                </Link>
                <Link
                  to="/cennik"
                  onClick={() => handleNavClick('/cennik')}
                  className="text-left text-gray-100 hover:text-primary-400 font-semibold transition-colors duration-150 px-6 py-4 text-lg rounded-xl hover:bg-gray-800 min-h-[56px] flex items-center"
                >
                  Cennik
                </Link>
                <button
                  onClick={() => handleNavClick('#contact')}
                  className="btn-primary w-full min-h-[56px] text-lg mt-2 rounded-xl"
                >
                  <span>Kontakt</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
