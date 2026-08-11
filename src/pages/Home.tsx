import { Link } from 'react-router-dom';
import { ArrowRight, Home as HomeIcon, Shield, Clock, Users, Building, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';
import './Home.css';

export default function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content text-center">
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Building Better Homes.<br />Building Your Future.
          </motion.h1>
          
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-subtitle"
          >
            Professional domestic construction services across Croydon and surrounding areas, delivering quality workmanship, reliable project management and exceptional results.
          </motion.p>
          
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-buttons"
          >
            <Link to="/quote" className="btn btn-primary">Request a Quote</Link>
            <Link to="/services" className="btn btn-outline">Explore Our Services</Link>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="hero-trust"
          >
            <p>Professional • Reliable • Quality-Focused</p>
          </motion.div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="quick-info container section">
        <div className="grid md:grid-cols-2 lg:grid-cols-4">
          <div className="info-card">
            <HomeIcon size={32} className="info-icon" />
            <h3>Domestic Construction</h3>
          </div>
          <div className="info-card">
            <Shield size={32} className="info-icon" />
            <h3>Quality Workmanship</h3>
          </div>
          <div className="info-card">
            <Clock size={32} className="info-icon" />
            <h3>Reliable Project Management</h3>
          </div>
          <div className="info-card">
            <Users size={32} className="info-icon" />
            <h3>Customer-Focused Service</h3>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section section section-gray">
        <div className="container">
          <div className="grid lg:grid-cols-2 align-center gap-4">
            <div className="about-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1541888081622-c430e71350df?q=80&w=2670&auto=format&fit=crop" 
                alt="UK Residential Construction" 
                className="w-full h-[400px] object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-700" 
                style={{ width: '100%', height: '400px', objectFit: 'cover' }}
              />
            </div>
            
            <div className="about-content">
              <h2 className="mb-4">About DHAR CONS LTD</h2>
              <p className="mb-4">
                DHAR CONS LTD provides domestic building and construction services with a focus on quality, reliability, attention to detail and customer satisfaction.
              </p>
              
              <ul className="feature-list mb-6">
                <li>Professional workmanship</li>
                <li>Transparent communication</li>
                <li>Reliable project delivery</li>
                <li>Attention to detail</li>
                <li>Customer satisfaction</li>
                <li>Safe and organised working practices</li>
              </ul>
              
              <Link to="/about" className="btn btn-outline-dark">
                Learn More About Us <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Snippet */}
      <section className="section bg-white text-center">
        <div className="container">
          <h2 className="mb-4">Specialist Construction Services</h2>
          <p className="mb-12 max-w-2xl mx-auto text-gray-600">From concept to completion, we deliver high-end residential projects built to stand the test of time.</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 border border-gray-100 rounded-lg shadow-sm hover:shadow-md hover:border-accent transition-all">
              <Building className="mx-auto mb-4 text-accent" size={40} />
              <h3 className="mb-3">New Builds</h3>
              <p className="text-gray-600 mb-6">Complete construction of bespoke residential properties, managed end-to-end.</p>
              <Link to="/services" className="text-primary font-semibold hover:text-accent flex items-center justify-center">Read More <ArrowRight size={16} className="ml-1" /></Link>
            </div>
            <div className="p-8 border border-gray-100 rounded-lg shadow-sm hover:shadow-md hover:border-accent transition-all">
              <HomeIcon className="mx-auto mb-4 text-accent" size={40} />
              <h3 className="mb-3">House Extensions</h3>
              <p className="text-gray-600 mb-6">Seamless wrap-around, rear, and double-storey extensions to maximize your space.</p>
              <Link to="/services" className="text-primary font-semibold hover:text-accent flex items-center justify-center">Read More <ArrowRight size={16} className="ml-1" /></Link>
            </div>
            <div className="p-8 border border-gray-100 rounded-lg shadow-sm hover:shadow-md hover:border-accent transition-all">
              <Wrench className="mx-auto mb-4 text-accent" size={40} />
              <h3 className="mb-3">Renovations</h3>
              <p className="text-gray-600 mb-6">Sensitive restorations and modernizations of period and contemporary homes.</p>
              <Link to="/services" className="text-primary font-semibold hover:text-accent flex items-center justify-center">Read More <ArrowRight size={16} className="ml-1" /></Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Snippet */}
      <section className="section section-dark text-center">
        <div className="container">
          <h2 className="mb-12 text-white">Trusted by Homeowners Across South London</h2>
          <div className="max-w-3xl mx-auto bg-white/10 p-8 rounded-lg border border-white/20">
            <p className="text-xl italic text-white mb-6">"DHAR CONS LTD transformed our cramped ground floor into an incredible open-plan living space. Their team was professional, tidy, and finished the project exactly on the timeline they promised. Highly recommended."</p>
            <h4 className="text-accent font-bold">— James & Sarah T., Croydon</h4>
            <div className="mt-8">
              <Link to="/testimonials" className="btn btn-outline">Read More Reviews</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
