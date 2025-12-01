import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Jak długo trwa emisja reklamy?',
      answer:
        'Czas emisji zależy od wybranego pakietu. Oferujemy kampanie od 1 miesiąca do długoterminowych współprac. Możemy dostosować harmonogram do Twoich potrzeb.',
    },
    {
      question: 'Jakie formaty graficzne są wymagane?',
      answer:
        'Przygotowujemy reklamy w formatach dostosowanych do monitorów w autobusach. Jeśli masz własne materiały, przyjmujemy pliki w formatach JPG, PNG lub PDF. Optymalna rozdzielczość to 1920x1080px.',
    },
    {
      question: 'Czy mogę wybrać konkretne trasy autobusów?',
      answer:
        'Tak, możemy dostosować kampanię do konkretnych tras autobusowych. Wspólnie wybierzemy optymalne trasy, które najlepiej docierają do Twojej docelowej grupy odbiorców.',
    },
    {
      question: 'Jak często reklama jest wyświetlana?',
      answer:
        'Częstotliwość emisji zależy od wybranego pakietu i harmonogramu. Standardowo reklama jest wyświetlana w pętlach co kilka minut podczas przejazdu autobusu. Szczegóły są zawsze ustalane indywidualnie.',
    },
    {
      question: 'Czy możecie stworzyć reklamę dla mnie?',
      answer:
        'Tak, możemy stworzyć profesjonalną reklamę graficzną dla Twojego biznesu. Przygotujemy projekt dostosowany do formatów monitorów w autobusach. Możemy również użyć Twojego gotowego materiału.',
    },
    {
      question: 'Jak wygląda raportowanie kampanii?',
      answer:
        'Dostarczamy szczegółowe raporty zawierające informacje o zasięgu kampanii, liczbie wyświetleń, trasach autobusowych i szacunkowej liczbie odbiorców. Raporty są dostępne w formie elektronicznej.',
    },
    {
      question: 'Czy mogę zmienić reklamę w trakcie kampanii?',
      answer:
        'Tak, oferujemy elastyczne rozwiązania. Możemy wprowadzić zmiany w reklamie lub całkowicie wymienić materiał w trakcie trwania kampanii. Szczegóły są ustalane indywidualnie.',
    },
    {
      question: 'Jakie branże najlepiej sprawdzają się w reklamie w autobusach?',
      answer:
        'Reklama w autobusach sprawdza się w wielu branżach: gastronomia, handel, usługi, zdrowie, edukacja, nieruchomości. Docieramy do szerokiego grona lokalnych odbiorców, co jest korzystne dla większości lokalnych biznesów.',
    },
  ];

  return (
    <section id="faq" className="section-padding bg-steel-50">
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
            FAQ
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-steel-900 mb-6">
            Najczęściej Zadawane Pytania
          </h2>
          <div className="w-32 h-1 bg-wood-600 mx-auto mb-6"></div>
          <p className="text-xl text-steel-600 max-w-2xl mx-auto">
            Odpowiedzi na najczęstsze pytania dotyczące miejsc reklamowych
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="card bg-white mb-4 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-steel-50 transition-colors duration-200 border-b-2 border-steel-200"
              >
                <span className="font-semibold text-steel-900 pr-4 uppercase text-sm tracking-tight">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FiChevronDown className="w-5 h-5 text-steel-800 flex-shrink-0" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-steel-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-steel-600 mb-4">
            Nie znalazłeś odpowiedzi na swoje pytanie?
          </p>
          <button
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="btn-primary"
          >
            Skontaktuj się z nami
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;

