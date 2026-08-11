import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer section-dark">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h3 className="footer-logo">DHAR CONS <span>LTD</span></h3>
            <p className="footer-desc">Construction of Domestic Buildings</p>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/team">Our Team</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/testimonials">Testimonials</Link></li>
              <li><Link to="/faqs">FAQs</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li><Link to="/services">All Services</Link></li>
              <li><Link to="/process">Our Process</Link></li>
              <li><Link to="/areas-covered">Areas Covered</Link></li>
              <li><Link to="/services">New Builds</Link></li>
              <li><Link to="/services">Extensions</Link></li>
              <li><Link to="/services">Renovations</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-contact">
              <li>14 Thanet Place, Croydon, England, CR0 1QP</li>
              <li>07796 195185</li>
              <li>cons@dharcons.com</li>
            </ul>
            <h4 className="footer-heading mt-4">Opening Hours</h4>
            <ul className="footer-contact">
              <li>Mon – Fri: 9:00 AM – 5:00 PM</li>
              <li>Sat – Sun: 11:00 AM – 4:00 PM</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 DHAR CONS LTD. All Rights Reserved.</p>
          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/cookie">Cookie Policy</Link>
            <Link to="/terms">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
