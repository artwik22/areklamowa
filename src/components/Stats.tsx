import { motion } from 'framer-motion';
import { FiUsers, FiTruck, FiTrendingUp, FiAward } from 'react-icons/fi';

const Stats = () => {
  const stats = [
    {
      icon: FiUsers,
      value: '1000+',
      label: 'Zadowolonych Klientów',
      description: 'Firm, które skorzystały z naszych usług',
      gradient: 'from-primary-600 to-primary-500',
    },
    {
      icon: FiTruck,
      value: '50+',
      label: 'Autobusów',
      description: 'W naszej flocie reklamowej',
      gradient: 'from-primary-600 to-primary-500',
    },
    {
      icon: FiTrendingUp,
      value: '95%',
      label: 'Wzrost Rozpoznawalności',
      description: 'Średni wzrost rozpoznawalności marki',
      gradient: 'from-primary-600 to-primary-500',
    },
    {
      icon: FiAward,
      value: '5+',
      label: 'Lat Doświadczenia',
      description: 'Na rynku reklamy w transporcie',
      gradient: 'from-primary-600 to-primary-500',
    },
  ];

  return (
    <section id="stats" className="section-padding relative bg-gradient-to-br from-primary-600 to-primary-700 text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-5 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6"
          >
            <span className="text-sm font-medium uppercase tracking-wider">
              Osiągnięcia
            </span>
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 md:mb-8">
            Nasze <span className="text-primary-200">Statystyki</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto opacity-90 px-4">
            Liczby, które mówią same za siebie
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="card bg-white/10 backdrop-blur-sm border-2 border-white/20 text-center"
            >
              <div className="flex justify-center mb-6">
                <div
                  className={`w-20 h-20 sm:w-24 sm:h-24 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center`}
                  style={{
                    boxShadow: '0 4px 20px rgba(255, 255, 255, 0.2)',
                  }}
                >
                  <stat.icon className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                </div>
              </div>

              <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3">
                {stat.value}
              </div>
              
              <h3 className="text-xl sm:text-2xl font-heading font-bold mb-2 uppercase tracking-tight">
                {stat.label}
              </h3>
              
              <p className="text-white/80 text-base sm:text-lg">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

