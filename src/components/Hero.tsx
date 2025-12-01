import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-steel-900 via-steel-800 to-steel-900"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-20 left-10 w-96 h-96 bg-wood-600 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-nature-600 rounded-full blur-3xl"
        />
      </div>

      {/* Industrial Grid Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(steel-400 1px, transparent 1px),
              linear-gradient(90deg, steel-400 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </motion.div>

      <div className="container-custom relative z-10 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={itemVariants} className="text-white">
            <motion.div
              variants={itemVariants}
              className="mb-6 inline-block"
            >
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="inline-block px-5 py-2.5 bg-wood-700/90 backdrop-blur-sm border-2 border-wood-600 text-white uppercase text-sm tracking-wider font-mono mb-4"
                style={{ boxShadow: '4px 4px 0px 0px rgba(115, 90, 71, 0.3)' }}
              >
                Reklama w Autobusach
              </motion.span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight"
            >
              Reklama na Monitorach
              <br />
              <span className="text-wood-400 bg-gradient-to-r from-wood-400 to-wood-300 bg-clip-text text-transparent">
                w Autobusach
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl mb-4 text-steel-200 font-light leading-relaxed"
            >
              Dotrzyj do tysięcy pasażerów każdego dnia
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-lg mb-10 text-steel-300 leading-relaxed max-w-2xl mx-auto"
            >
              Wynajmujemy miejsca reklamowe na monitorach w autobusach. 
              Jeśli potrzebujesz, przygotujemy również profesjonalną reklamę dla Twojej firmy.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                onClick={() => scrollToSection('#pricing')}
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-steel-900 px-10 py-5 font-semibold hover:bg-steel-50 transition-all duration-500 ease-out border-2 border-white uppercase tracking-wider text-sm flex items-center justify-center gap-2 group relative overflow-hidden"
                style={{ boxShadow: '8px 8px 0px 0px rgba(255, 255, 255, 0.2)' }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Sprawdź Cennik
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <FiArrowRight />
                  </motion.span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-steel-50 to-white opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <motion.button
                onClick={() => scrollToSection('#contact')}
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-wood-700 text-white px-10 py-5 font-semibold hover:bg-wood-600 transition-all duration-500 ease-out border-2 border-wood-600 uppercase tracking-wider text-sm relative overflow-hidden group"
                style={{ boxShadow: '8px 8px 0px 0px rgba(115, 90, 71, 0.4)' }}
              >
                <span className="relative z-10">Napisz do Nas</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-wood-600 to-wood-700 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
