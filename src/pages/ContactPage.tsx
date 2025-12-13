import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="section-padding relative pt-24">
        <div className="container-custom">
          {/* Back Button */}
          <div className="mb-8 sm:mb-10">
            <Link
              to="/"
              className="inline-flex items-center gap-2 sm:gap-3 text-gray-700 hover:text-primary-600 font-semibold transition-colors text-base sm:text-lg min-h-[48px] sm:min-h-[56px]"
            >
              <FiArrowLeft className="w-6 h-6 sm:w-7 sm:h-7" />
              <span>Powrót do strony głównej</span>
            </Link>
          </div>
        </div>
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default ContactPage;

