import { motion } from 'framer-motion';
import {
  FiTrendingUp,
  FiTarget,
  FiRepeat,
  FiDollarSign,
  FiMonitor,
} from 'react-icons/fi';

const Why = () => {
  const reasons = [
    {
      icon: FiTrendingUp,
      title: 'Wysoki Zasięg',
      description:
        'Tysiące pasażerów dziennie - Twoja reklama dociera do szerokiego grona odbiorców w regionie.',
      bgColor: 'bg-steel-800',
      borderColor: 'border-steel-700',
    },
    {
      icon: FiTarget,
      title: 'Lokalne Targetowanie',
      description:
        'Docierasz bezpośrednio do mieszkańców regionu - osób, które faktycznie korzystają z lokalnych usług.',
      bgColor: 'bg-wood-700',
      borderColor: 'border-wood-600',
    },
    {
      icon: FiRepeat,
      title: 'Powtarzalność Przekazu',
      description:
        'Pasażerowie regularnie korzystają z tych samych tras - Twoja reklama jest widoczna wielokrotnie.',
      bgColor: 'bg-nature-700',
      borderColor: 'border-nature-600',
    },
    {
      icon: FiDollarSign,
      title: 'Koszt Efektywność',
      description:
        'Niższe koszty niż tradycyjne media przy wysokiej skuteczności dotarcia do docelowej grupy.',
      bgColor: 'bg-steel-700',
      borderColor: 'border-steel-600',
    },
    {
      icon: FiMonitor,
      title: 'Nowoczesna Forma',
      description:
        'Ekrany cyfrowe przyciągają uwagę - dynamiczne, kolorowe reklamy są bardziej angażujące niż tradycyjne.',
      bgColor: 'bg-wood-800',
      borderColor: 'border-wood-700',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="why" className="section-padding bg-white relative">
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
            className="inline-block px-4 py-2 bg-wood-700 text-white uppercase text-sm tracking-wider font-mono mb-6 border-2 border-wood-600"
          >
            Dlaczego
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-steel-900 mb-6">
            Dlaczego Reklama w Autobusach?
          </h2>
          <div className="w-32 h-1 bg-wood-600 mx-auto mb-6"></div>
          <p className="text-xl text-steel-600 max-w-2xl mx-auto">
            Sprawdzone argumenty za wyborem miejsc reklamowych w transporcie publicznym
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, x: 4 }}
              className="bg-steel-50 border-2 border-steel-300 p-6 card-hover"
            >
              <div
                className={`w-16 h-16 ${reason.bgColor} border-2 ${reason.borderColor} flex items-center justify-center mb-6`}
              >
                <reason.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-heading font-bold text-steel-900 mb-3 uppercase tracking-tight">
                {reason.title}
              </h3>
              <p className="text-steel-600 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 bg-steel-900 border-2 border-steel-800 p-10 md:p-12 text-center text-white wood-texture relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-wood-700 opacity-10"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-heading font-bold mb-4 uppercase tracking-tight">
              Gotowy na Start Kampanii?
            </h3>
            <p className="text-xl mb-6 text-steel-300 max-w-2xl mx-auto">
              Skontaktuj się z nami i dowiedz się, jak możemy pomóc Twojemu biznesowi
              dotrzeć do tysięcy potencjalnych klientów.
            </p>
            <motion.button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-steel-900 px-8 py-4 font-semibold hover:bg-steel-100 transition-all duration-300 border-2 border-white uppercase tracking-wider text-sm"
              style={{ boxShadow: '6px 6px 0px 0px rgba(255, 255, 255, 0.2)' }}
            >
              Skontaktuj się teraz
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Why;
