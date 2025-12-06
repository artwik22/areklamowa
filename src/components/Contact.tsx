import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Contact = () => {
  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'kontakt@agencja-reklamowa.pl',
      href: 'mailto:kontakt@agencja-reklamowa.pl',
      gradient: 'from-primary-600 to-primary-500',
    },
    {
      icon: FiPhone,
      label: 'Telefon',
      value: '+48 123 456 789',
      href: 'tel:+48123456789',
      gradient: 'from-primary-600 to-primary-500',
    },
    {
      icon: FiMapPin,
      label: 'Adres',
      value: 'Pomorskie, Polska',
      href: '#',
      gradient: 'from-primary-600 to-primary-500',
    },
  ];

  return (
    <section id="contact" className="section-padding relative">
      <div className="container-custom">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 md:mb-8">
            Skontaktuj Się <span className="gradient-text">Z Nami</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                className="card card-hover group relative overflow-hidden"
              >

                <div className="relative z-10 text-center">
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-lg bg-gradient-to-br ${info.gradient} flex items-center justify-center mx-auto mb-3 sm:mb-4`}
                    style={{
                      boxShadow: '0 4px 15px rgba(30, 64, 175, 0.4)',
                    }}
                  >
                    <info.icon className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  <div className="text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wider font-semibold">
                    {info.label}
                  </div>
                  <div className="font-bold text-gray-900 dark:text-white text-base sm:text-lg md:text-xl break-words">{info.value}</div>
                </div>
              </a>
            ))}
          </div>

          <div className="card relative overflow-hidden p-6 sm:p-8 md:p-10">
            {/* Gradient background */}
            <div 
              className="absolute inset-0 opacity-5"
              style={{
                background: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)',
              }}
            />

            <div className="relative z-10">
              <h4 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-gray-900 dark:text-white uppercase tracking-tight mb-4 sm:mb-6 text-center sm:text-left">
                Godziny Pracy
              </h4>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <span className="text-gray-700 dark:text-gray-300 font-mono text-base sm:text-lg md:text-xl">Poniedziałek - Piątek:</span>
                  <span className="text-gray-900 dark:text-white font-bold font-mono text-lg sm:text-xl md:text-2xl">9:00 - 17:00</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <span className="text-gray-700 dark:text-gray-300 font-mono text-base sm:text-lg md:text-xl">Sobota:</span>
                  <span className="text-gray-900 dark:text-white font-bold font-mono text-lg sm:text-xl md:text-2xl">10:00 - 14:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
