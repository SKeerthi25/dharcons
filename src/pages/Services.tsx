import { ArrowRight, Home, Building, Hammer, Wrench, PenTool, CheckSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import './PageStyles.css';

export default function Services() {
  const services = [
    {
      title: 'Residential Construction',
      description: 'Comprehensive construction solutions for residential properties from initial planning and groundworks through to final completion.',
      icon: <Home size={32} />
    },
    {
      title: 'New Build Homes',
      description: 'Professional construction support for new residential developments. We work with architects to bring your dream home to life.',
      icon: <Building size={32} />
    },
    {
      title: 'Home Extensions',
      description: 'High-quality rear, side, and wrap-around extensions designed to seamlessly integrate with your property and increase living space.',
      icon: <CheckSquare size={32} />
    },
    {
      title: 'Renovations',
      description: 'Transform existing properties with modern renovation and structural alteration solutions, preserving character while updating functionality.',
      icon: <Hammer size={32} />
    },
    {
      title: 'Property Improvements',
      description: 'Improve functionality, appearance and overall quality of residential properties with our bespoke interior and exterior improvements.',
      icon: <PenTool size={32} />
    },
    {
      title: 'General Building Works',
      description: 'Professional domestic building services tailored to individual project requirements, covering brickwork, roofing, and structural repairs.',
      icon: <Wrench size={32} />
    }
  ];

  return (
    <div className="services-page">
      <div className="page-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive domestic construction services delivering quality, durability, and exceptional finishes.</p>
        </div>
      </div>

      <div className="content-section section-gray">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to="/contact" className="btn btn-outline-dark">
                  Learn More <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="content-section text-center">
        <div className="container">
          <h2 className="mb-4">Ready to start your project?</h2>
          <p className="mb-6 max-w-2xl mx-auto opacity-80">
            Contact DHAR CONS LTD today for a consultation and discover how we can help bring your construction vision to life.
          </p>
          <Link to="/quote" className="btn btn-primary">Request a Quote</Link>
        </div>
      </div>
    </div>
  );
}
