import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import './PageStyles.css';
import './QuoteRequest.css'; // Reuse form styles

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="page-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with DHAR CONS LTD for your domestic construction needs.</p>
        </div>
      </div>

      <div className="content-section">
        <div className="container">
          <div className="contact-grid">
            
            <div className="contact-info-card">
              <h3>Get In Touch</h3>
              
              <div className="contact-detail">
                <MapPin className="contact-icon" size={24} />
                <div>
                  <h4 className="mb-1 text-white">Address</h4>
                  <p className="opacity-80 m-0">14 Thanet Place<br />Croydon<br />England<br />CR0 1QP</p>
                </div>
              </div>
              
              <div className="contact-detail">
                <Phone className="contact-icon" size={24} />
                <div>
                  <h4 className="mb-1 text-white">Phone</h4>
                  <a href="tel:07796195185" className="opacity-80">07796 195185</a>
                </div>
              </div>
              
              <div className="contact-detail">
                <Mail className="contact-icon" size={24} />
                <div>
                  <h4 className="mb-1 text-white">Email</h4>
                  <a href="mailto:cons@dharcons.com" className="opacity-80">cons@dharcons.com</a>
                </div>
              </div>
              
              <div className="contact-detail">
                <Clock className="contact-icon" size={24} />
                <div>
                  <h4 className="mb-1 text-white">Opening Hours</h4>
                  <p className="opacity-80 m-0">
                    Mon – Fri: 9:00 AM – 5:00 PM<br />
                    Sat – Sun: 11:00 AM – 4:00 PM
                  </p>
                </div>
              </div>
            </div>
            
            <div className="contact-form-wrapper">
              <h3 className="mb-4 text-primary">Send us a Message</h3>
              <form className="quote-form">
                <div className="grid md:grid-cols-2">
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input type="text" id="name" required placeholder="Your Name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input type="email" id="email" required placeholder="Your Email" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" placeholder="How can we help?" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea id="message" rows={5} required placeholder="Your Message"></textarea>
                </div>
                <button type="button" className="btn btn-primary submit-btn">Send Message</button>
              </form>
              
              <div className="mt-8 text-center">
                <p className="opacity-80 mb-4">Looking for a detailed project quotation?</p>
                <Link to="/quote" className="btn btn-outline-dark">Request a Quote Instead</Link>
              </div>
            </div>

          </div>
        </div>
      </div>
      
      {/* Map Section */}
      <div className="map-section w-full h-[400px]">
        <iframe 
          title="DHAR CONS LTD Location"
          src="https://maps.google.com/maps?q=14%20Thanet%20Place,%20Croydon,%20CR0%201QP,%20UK&t=&z=15&ie=UTF8&iwloc=&output=embed" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={false} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
