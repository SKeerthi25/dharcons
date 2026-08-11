import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import CookieConsent from './components/CookieConsent';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Process from './pages/Process'; 
import FAQs from './pages/FAQs'; 
import Contact from './pages/Contact';
import QuoteRequest from './pages/QuoteRequest'; 
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiePolicy from './pages/CookiePolicy';
import Terms from './pages/Terms';
import Testimonials from './pages/Testimonials';
import AreasCovered from './pages/AreasCovered';
import Team from './pages/Team';
import ProjectDetails from './pages/ProjectDetails';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router>
      <ScrollToTop />
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      
      {!isLoading && (
        <div className="app fade-in-app">
          <style>{`
            .fade-in-app {
              animation: fadeIn 0.5s ease-out forwards;
            }
          `}</style>
          <Header />
          <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="/process" element={<Process />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/quote" element={<QuoteRequest />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/cookie" element={<CookiePolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/areas-covered" element={<AreasCovered />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </main>
        <Footer />
        <CookieConsent />
      </div>
      )}
    </Router>
  );
}

export default App;
