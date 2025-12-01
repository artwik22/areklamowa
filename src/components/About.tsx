import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-padding bg-steel-50 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-steel-300"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-steel-300"></div>
      
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-wood-700 text-white uppercase text-sm tracking-wider font-mono mb-6 border-2 border-wood-600"
          >
            O Nas
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-steel-900 mb-6">
            Kim Jesteśmy?
          </h2>
          <div className="w-32 h-1 bg-wood-600 mx-auto mb-6"></div>
          <p className="text-lg text-steel-700 leading-relaxed mb-4">
            Jesteśmy właścicielami miejsc reklamowych na monitorach w autobusach.
            Udostępniamy te miejsca lokalnym biznesom, umożliwiając im dotarcie do
            dużej grupy pasażerów w transporcie publicznym.
          </p>
          <p className="text-lg text-steel-700 leading-relaxed">
            Oferujemy kompleksową usługę: udostępniamy miejsca reklamowe oraz możemy
            stworzyć profesjonalną reklamę graficzną dla Twojego biznesu. Działamy w
            powiatach malborskim, sztumskim, okolicach Prabut i kwidzyńskim.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
