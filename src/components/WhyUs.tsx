import { memo } from 'react';
import { FiTarget, FiDollarSign, FiClock, FiUsers, FiAward, FiMapPin } from 'react-icons/fi';

const WhyUs = memo(() => {
  const advantages = [
    {
      icon: FiMapPin,
      title: 'Lokalne Doświadczenie',
      description: 'Znamy lokalny rynek i potrzeby mieszkańców. Działamy w regionie, który znasz najlepiej.',
      gradient: 'from-primary-600 to-primary-500',
    },
    {
      icon: FiDollarSign,
      title: 'Przystępne Ceny',
      description: 'Oferujemy konkurencyjne ceny bez ukrytych kosztów. Proste i przejrzyste pakiety.',
      gradient: 'from-primary-600 to-primary-500',
    },
    {
      icon: FiClock,
      title: 'Szybka Realizacja',
      description: 'Od kontaktu do emisji reklamy w krótkim czasie. Nie czekasz tygodniami na efekty.',
      gradient: 'from-primary-600 to-primary-500',
    },
    {
      icon: FiUsers,
      title: 'Dedykowana Obsługa',
      description: 'Każdy klient ma przypisanego opiekuna, który pomoże na każdym etapie współpracy.',
      gradient: 'from-primary-600 to-primary-500',
    },
    {
      icon: FiAward,
      title: 'Profesjonalizm',
      description: 'Doświadczony zespół, który zadba o każdy szczegół Twojej kampanii reklamowej.',
      gradient: 'from-primary-600 to-primary-500',
    },
    {
      icon: FiTarget,
      title: 'Skuteczność',
      description: 'Reklama dociera do tysięcy pasażerów każdego dnia. Widoczność 24/7 w autobusach.',
      gradient: 'from-primary-600 to-primary-500',
    },
  ];

  return (
    <section id="why-us" className="section-padding relative bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8">
            Dlaczego <span className="gradient-text">Warto Nas Wybrać</span>?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="card group p-5 sm:p-6 md:p-8"
            >
              <div
                className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-xl bg-gradient-to-br ${advantage.gradient} flex items-center justify-center mb-4 sm:mb-6`}
                style={{
                  boxShadow: '0 4px 20px rgba(30, 64, 175, 0.3)',
                }}
              >
                <advantage.icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" />
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-3 sm:mb-4 uppercase tracking-tight">
                {advantage.title}
              </h3>
              
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-medium">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

WhyUs.displayName = 'WhyUs';

export default WhyUs;

