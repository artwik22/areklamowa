import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('wszystkie');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const categories = ['wszystkie', 'gastronomia', 'handel', 'usługi', 'zdrowie'];

  // Placeholder images - in production, replace with actual portfolio images
  const portfolioItems = [
    {
      id: 1,
      category: 'gastronomia',
      title: 'Restauracja Lokalna',
      description: 'Kampania promująca lokalną restaurację',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop',
    },
    {
      id: 2,
      category: 'handel',
      title: 'Sklep Odzieżowy',
      description: 'Promocja nowej kolekcji w sklepie',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
    },
    {
      id: 3,
      category: 'usługi',
      title: 'Salon Fryzjerski',
      description: 'Kampania reklamowa salonu',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=600&fit=crop',
    },
    {
      id: 4,
      category: 'zdrowie',
      title: 'Przychodnia Medyczna',
      description: 'Promocja usług medycznych',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
    },
    {
      id: 5,
      category: 'gastronomia',
      title: 'Pizzeria',
      description: 'Kampania promocyjna pizzerii',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&h=600&fit=crop',
    },
    {
      id: 6,
      category: 'handel',
      title: 'Supermarket',
      description: 'Promocja produktów w supermarkecie',
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop',
    },
  ];

  const filteredItems =
    selectedCategory === 'wszystkie'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <section id="portfolio" className="section-padding bg-steel-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-nature-700 text-white uppercase text-sm tracking-wider font-mono mb-6 border-2 border-nature-600"
          >
            Portfolio
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-steel-900 mb-6">
            Portfolio
          </h2>
          <div className="w-32 h-1 bg-wood-600 mx-auto mb-6"></div>
          <p className="text-xl text-steel-600 max-w-2xl mx-auto">
            Przykłady reklam wyświetlanych na monitorach w autobusach
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 font-medium transition-all duration-300 border-2 uppercase text-sm tracking-wider ${
                selectedCategory === category
                  ? 'bg-steel-900 text-white border-steel-900'
                  : 'bg-white text-steel-700 border-steel-300 hover:border-steel-800'
              }`}
              style={{
                boxShadow:
                  selectedCategory === category
                    ? '4px 4px 0px 0px rgba(26, 29, 32, 0.2)'
                    : '2px 2px 0px 0px rgba(26, 29, 32, 0.1)',
              }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -8, x: 4 }}
                className="bg-white border-2 border-steel-300 overflow-hidden card-hover cursor-pointer"
                onClick={() => setSelectedImage(index)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-steel-900/80 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="text-white">
                      <h3 className="font-heading font-bold text-lg mb-1 uppercase tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-sm text-steel-200">{item.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Image Modal */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-steel-900/95 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative max-w-5xl max-h-[90vh] border-2 border-steel-700"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 text-white bg-steel-800 border-2 border-steel-700 p-2 hover:bg-steel-700 transition-colors z-10"
                >
                  <FiX className="w-6 h-6" />
                </button>
                <img
                  src={filteredItems[selectedImage]?.image}
                  alt={filteredItems[selectedImage]?.title}
                  className="max-w-full max-h-[90vh] object-contain"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;

