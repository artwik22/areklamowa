import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Jan Kowalski',
      company: 'Restauracja "Pod Kogutem"',
      industry: 'Gastronomia',
      rating: 5,
      text: 'Kampania reklamowa w autobusach przyniosła nam znaczący wzrost liczby klientów. Szczególnie doceniamy lokalne targetowanie - docieramy do mieszkańców, którzy faktycznie korzystają z naszych usług.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    },
    {
      name: 'Anna Nowak',
      company: 'Salon Fryzjerski "Elegance"',
      industry: 'Usługi',
      rating: 5,
      text: 'Profesjonalna obsługa od projektu po realizację. Reklama wygląda świetnie na monitorach i przyciąga uwagę pasażerów. Polecam!',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
    },
    {
      name: 'Piotr Wiśniewski',
      company: 'Sklep "Moda & Styl"',
      industry: 'Handel',
      rating: 5,
      text: 'Współpraca z agencją przebiegła bezproblemowo. Otrzymaliśmy szczegółowe raporty z zasięgów kampanii. Efekty przerosły nasze oczekiwania.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-white">
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
            Opinie
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-steel-900 mb-6">
            Opinie Klientów
          </h2>
          <div className="w-32 h-1 bg-wood-600 mx-auto mb-6"></div>
          <p className="text-xl text-steel-600 max-w-2xl mx-auto">
            Co mówią o nas nasi klienci
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -6, x: 4 }}
              className="card card-hover bg-white"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FiStar
                    key={i}
                    className="w-5 h-5 text-yellow-500 fill-yellow-500"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-steel-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 border-t-2 border-steel-200 pt-4">
                <div className="w-12 h-12 border-2 border-steel-300 overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-steel-900 uppercase text-sm tracking-tight">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-steel-600">{testimonial.company}</div>
                  <div className="text-xs text-wood-700 uppercase tracking-wider font-mono">
                    {testimonial.industry}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

