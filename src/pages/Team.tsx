import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';
import './PageStyles.css';

export default function Team() {
  const teamMembers = [
    {
      name: 'David Harrison',
      role: 'Managing Director',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop',
      bio: 'With over 20 years of experience in the UK construction industry, David leads the DHAR CONS LTD team with a commitment to quality and client satisfaction.'
    },
    {
      name: 'Michael Chen',
      role: 'Senior Project Manager',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop',
      bio: 'Michael ensures every project runs smoothly, coordinating tradesmen, managing timelines, and maintaining clear communication with our clients.'
    },
    {
      name: 'Sarah Jenkins',
      role: 'Lead Estimator',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2661&auto=format&fit=crop',
      bio: 'Sarah provides accurate, transparent, and comprehensive quotes for all our domestic construction projects, ensuring no hidden surprises.'
    }
  ];

  return (
    <div className="team-page">
      <div className="page-hero">
        <div className="container">
          <h1>Meet Our Team</h1>
          <p>The experienced professionals behind DHAR CONS LTD's exceptional construction projects.</p>
        </div>
      </div>

      <div className="content-section">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-primary mb-4">Dedicated to Excellence</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our team consists of highly skilled tradesmen, experienced project managers, and dedicated support staff. We invest in our people so they can invest their expertise into your home.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="h-80 w-full overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-1">{member.name}</h3>
                  <p className="text-accent font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 mb-6 line-clamp-3">{member.bio}</p>
                  <div className="flex gap-3">
                    <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-colors">
                      <Mail size={18} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-colors">
                      <Phone size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 flex flex-col md:flex-row bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
            <div className="md:w-1/2 p-10 flex flex-col justify-center">
              <h3 className="text-2xl text-primary mb-4">Join Our Growing Team</h3>
              <p className="text-gray-600 mb-6">
                We are always looking for skilled bricklayers, carpenters, and project managers who share our commitment to high-quality domestic construction.
              </p>
              <div>
                <Link to="/contact" className="btn btn-outline-dark inline-block">View Opportunities</Link>
              </div>
            </div>
            <div className="md:w-1/2 h-64 md:h-auto">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356f58?q=80&w=2670&auto=format&fit=crop" 
                alt="Construction workers on site" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
