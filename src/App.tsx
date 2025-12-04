import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import PricingPage from './pages/PricingPage';
import HowItWorksPage from './pages/HowItWorksPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/cennik" element={<PricingPage />} />
        <Route path="/jak-to-dziala" element={<HowItWorksPage />} />
      </Routes>
    </Router>
  );
}

export default App;
