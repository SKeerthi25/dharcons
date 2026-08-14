import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import './Header.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo-link">
          <img src="/logo.jpg" alt="DHAR CONS LTD" className="h-12 md:h-16" style={{ height: '60px', width: 'auto', objectFit: 'contain' }} />
        </Link>

        <nav className={`desktop-nav ${isOpen ? 'open' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/services" className="nav-link" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/projects" className="nav-link" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to="/process" className="nav-link" onClick={() => setIsOpen(false)}>Our Process</Link>
          <Link to="/faqs" className="nav-link" onClick={() => setIsOpen(false)}>FAQs</Link>
          <Link to="/contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</Link>
        </nav>

        <div className="header-actions">
          <Link to="/quote" className="btn btn-primary quote-btn">
            Request a Quote
          </Link>
          <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}
