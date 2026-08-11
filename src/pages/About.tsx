import { CheckCircle2, Award, Users, HardHat, Link as LinkIcon, Building } from 'lucide-react';
import { Link } from 'react-router-dom';
import './PageStyles.css';

export default function About() {
  return (
    <div className="about-page">
      <div className="page-hero">
        <div className="container">
          <h1>About DHAR CONS LTD</h1>
          <p>Building trust through quality workmanship and reliable service across Croydon and surrounding areas.</p>
        </div>
      </div>

      <div className="content-section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="mb-4 text-primary">Our Story</h2>
              <p className="mb-4 opacity-80 leading-relaxed">
                DHAR CONS LTD was established with a singular vision: to raise the standard of domestic construction in the UK. Based in Croydon, we have grown into a trusted name for residential construction, renovations, and extensions.
              </p>
              <p className="mb-4 opacity-80 leading-relaxed">
                We believe that your home is more than just a building—it's an investment in your future. That’s why we bring uncompromising attention to detail, transparent communication, and reliable project management to every site we step onto.
              </p>
              <p className="opacity-80 leading-relaxed">
                Whether it's a modern new build, a sensitive Victorian renovation, or a transformative house extension, our team of skilled tradesmen ensures the result exceeds expectations while meeting all UK building regulations.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg h-96 bg-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1541888081622-c430e71350df?q=80&w=2670&auto=format&fit=crop" 
                alt="UK Construction Team" 
                className="w-full h-full object-cover"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="content-section section-dark">
        <div className="container">
          <h2 className="text-center mb-12 text-white">Why Choose Us?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-white/10 p-6 rounded-lg border border-white/20">
              <Award className="text-accent mb-4" size={32} />
              <h3 className="text-white mb-2">Quality First</h3>
              <p className="opacity-80 text-white text-sm">We focus on delivering high standards of workmanship throughout every project, never cutting corners.</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg border border-white/20">
              <CheckCircle2 className="text-accent mb-4" size={32} />
              <h3 className="text-white mb-2">Reliable Service</h3>
              <p className="opacity-80 text-white text-sm">Clear communication and dependable project management from day one to completion.</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg border border-white/20">
              <Users className="text-accent mb-4" size={32} />
              <h3 className="text-white mb-2">Customer Focused</h3>
              <p className="opacity-80 text-white text-sm">We work closely with clients to understand their requirements and minimize disruption.</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg border border-white/20">
              <HardHat className="text-accent mb-4" size={32} />
              <h3 className="text-white mb-2">Professional Approach</h3>
              <p className="opacity-80 text-white text-sm">Organised and structured construction services, maintaining clean and safe sites.</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg border border-white/20">
              <LinkIcon className="text-accent mb-4" size={32} />
              <h3 className="text-white mb-2">Attention to Detail</h3>
              <p className="opacity-80 text-white text-sm">Every stage of the project is carefully considered, from groundworks to final finish.</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg border border-white/20">
              <Building className="text-accent mb-4" size={32} />
              <h3 className="text-white mb-2">Built for the Long Term</h3>
              <p className="opacity-80 text-white text-sm">We focus on durable, practical and high-quality results that stand the test of time.</p>
            </div>

          </div>
        </div>
      </div>

      <div className="content-section text-center">
        <div className="container">
          <h2 className="mb-4">Ready to discuss your project?</h2>
          <p className="mb-6 opacity-80">Get in touch with our team today for a free consultation.</p>
          <div className="flex justify-center gap-4">
            <Link to="/contact" className="btn btn-primary">Contact Us</Link>
            <Link to="/projects" className="btn btn-outline-dark">View Our Work</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
