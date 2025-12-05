import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight, FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('Wszystkie');

  const categories = ['Wszystkie', 'Gastronomia', 'Usługi', 'Handel', 'Zdrowie'];

  // Przykładowe obrazy - w rzeczywistości będą to prawdziwe przykłady reklam
  const images = [
    { id: 1, category: 'Gastronomia', title: 'Reklama restauracji', url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop' },
    { id: 2, category: 'Usługi', title: 'Reklama salonu fryzjerskiego', url: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&h=600&fit=crop' },
    { id: 3, category: 'Handel', title: 'Reklama sklepu', url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop' },
    { id: 4, category: 'Zdrowie', title: 'Reklama gabinetu', url: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&h=600&fit=crop' },
    { id: 5, category: 'Gastronomia', title: 'Reklama kawiarni', url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=600&fit=crop' },
    { id: 6, category: 'Usługi', title: 'Reklama warsztatu', url: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop' },
    { id: 7, category: 'Handel', title: 'Reklama sklepu odzieżowego', url: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=600&fit=crop' },
    { id: 8, category: 'Gastronomia', title: 'Reklama pizzerii', url: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&h=600&fit=crop' },
  ];

  const filteredImages = selectedCategory === 'Wszystkie' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <section className="section-padding relative bg-gray-50 dark:bg-gray-800 pt-24">
        <div className="container-custom">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8 sm:mb-10"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 sm:gap-3 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-semibold transition-colors text-base sm:text-lg min-h-[48px] sm:min-h-[56px]"
            >
              <FiArrowLeft className="w-6 h-6 sm:w-7 sm:h-7" />
              <span>Powrót do strony głównej</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="inline-block px-5 py-2 rounded-full glass mb-6"
            >
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                Portfolio
              </span>
            </motion.span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 dark:text-white mb-6 md:mb-8">
              Przykłady <span className="gradient-text">Naszych Reklam</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto font-medium px-4">
              Zobacz przykłady reklam, które przygotowaliśmy dla naszych klientów
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-10 sm:mb-12 md:mb-16">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setSelectedImage(null);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 sm:px-8 py-4 sm:py-5 rounded-lg font-semibold text-base sm:text-lg transition-all duration-200 min-h-[48px] sm:min-h-[56px] ${
                  selectedCategory === category
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 border-2 border-gray-200 dark:border-gray-600'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 max-w-7xl mx-auto">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="card p-0 overflow-hidden cursor-pointer group"
                onClick={() => openModal(index)}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-bold text-lg mb-1">{image.title}</h3>
                    <p className="text-sm">{image.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Modal */}
          {selectedImage !== null && (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                onClick={closeModal}
              >
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.8 }}
                  className="relative max-w-5xl w-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={closeModal}
                    className="absolute -top-12 right-0 text-white hover:text-primary-400 transition-colors"
                  >
                    <FiX className="w-8 h-8" />
                  </button>
                  
                  <div className="relative">
                    <img
                      src={filteredImages[selectedImage].url}
                      alt={filteredImages[selectedImage].title}
                      className="w-full h-auto rounded-lg"
                    />
                    
                    {filteredImages.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 flex items-center justify-center text-white transition-all"
                        >
                          <FiChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 flex items-center justify-center text-white transition-all"
                        >
                          <FiChevronRight className="w-6 h-6" />
                        </button>
                      </>
                    )}
                  </div>

                  <div className="mt-4 text-center text-white">
                    <h3 className="text-2xl font-bold mb-2">{filteredImages[selectedImage].title}</h3>
                    <p className="text-gray-200">{filteredImages[selectedImage].category}</p>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Portfolio;


