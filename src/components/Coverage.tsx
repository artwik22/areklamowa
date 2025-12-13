import { memo } from 'react';
import { FiMapPin } from 'react-icons/fi';

const Coverage = memo(() => {
  const counties = [
    'Malbork',
    'Sztum',
    'Stary Targ',
    'Mikołajki Pomorskie',
    'Miloradz',
    'Stare Pole',
    'Prabuty',
    'Ryjewo',
  ];

  return (
    <section id="coverage" className="section-padding relative">
      <div className="container-custom">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-6 sm:mb-8 md:mb-12">
            Gdzie <span className="gradient-text">Działamy</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {counties.map((county, index) => (
            <div
              key={index}
              className="card card-hover group relative overflow-hidden p-4 sm:p-6"
            >
              <div className="relative z-10 flex flex-col items-center">
                <div
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg mb-4 sm:mb-6 flex items-center justify-center relative"
                  style={{
                    background: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)',
                    boxShadow: '0 4px 15px rgba(30, 64, 175, 0.4)',
                  }}
                >
                  <FiMapPin className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" />
                </div>
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-heading font-bold text-gray-900 uppercase tracking-tight text-center leading-tight">
                  {county}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA - hidden on mobile */}
        <div className="hidden sm:block text-center mt-8 sm:mt-12 md:mt-16">
          <div className="glass rounded-xl p-6 sm:p-8 md:p-12 max-w-3xl mx-auto">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-3 sm:mb-4">
              Działamy w Twojej okolicy?
            </h3>
            <a
              href="/cennik"
              className="btn-primary inline-block"
            >
              <span>Zobacz Cennik</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});

Coverage.displayName = 'Coverage';

export default Coverage;
