import { MapPin, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import './PageStyles.css';

export default function AreasCovered() {
  const areas = [
    {
      region: 'Croydon',
      locations: ['Central Croydon', 'Shirley', 'Purley', 'Coulsdon', 'Thornton Heath', 'South Norwood']
    },
    {
      region: 'South London',
      locations: ['Bromley', 'Sutton', 'Wandsworth', 'Merton', 'Lambeth', 'Lewisham']
    },
    {
      region: 'Surrey',
      locations: ['Epsom', 'Bananz', 'Reigate', 'Redhill', 'Caterham', 'Oxted']
    }
  ];

  return (
    <div className="areas-page">
      <div className="page-hero">
        <div className="container">
          <h1>Areas We Cover</h1>
          <p>DHAR CONS LTD provides premium domestic construction services across South London and Surrey.</p>
        </div>
      </div>

      <div className="content-section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="mb-4 text-primary">Local Expertise, Regional Reach</h2>
              <p className="mb-4 text-gray-700 leading-relaxed">
                Based in Croydon, DHAR CONS LTD is perfectly positioned to serve residential clients across South London and into Surrey. We understand the local architecture, planning regulations, and soil types—from Victorian terraces in South London to modern detached homes in Surrey.
              </p>
              <p className="mb-6 text-gray-700 leading-relaxed">
                By focusing our services within these regions, we ensure that our project managers and tradesmen can maintain the high level of oversight and responsiveness that our clients expect.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-800"><Check className="text-accent mr-3" size={20} /> Expertise in local London Borough planning permissions</li>
                <li className="flex items-center text-gray-800"><Check className="text-accent mr-3" size={20} /> Fast response times for site visits and consultations</li>
                <li className="flex items-center text-gray-800"><Check className="text-accent mr-3" size={20} /> Established network of trusted local suppliers</li>
                <li className="flex items-center text-gray-800"><Check className="text-accent mr-3" size={20} /> Understanding of period property structural characteristics</li>
              </ul>
            </div>
            
            <div className="bg-gray-100 rounded-lg p-2 shadow-inner h-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2670&auto=format&fit=crop" 
                alt="London residential architecture" 
                className="w-full h-full object-cover rounded shadow-md"
              />
            </div>
          </div>

          <h3 className="text-center mb-8 text-2xl text-primary">Primary Service Areas</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {areas.map((area, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <div className="flex items-center mb-4 border-b border-gray-100 pb-3">
                  <MapPin className="text-accent mr-2" size={24} />
                  <h4 className="text-xl font-bold text-primary m-0">{area.region}</h4>
                </div>
                <ul className="space-y-2">
                  {area.locations.map((loc, i) => (
                    <li key={i} className="text-gray-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                      {loc}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center p-6 bg-gray-50 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-primary mb-2">Don't see your area listed?</h4>
            <p className="text-gray-600 mb-4">We occasionally take on special projects outside our core areas. Contact us to discuss your requirements.</p>
            <Link to="/contact" className="text-accent font-medium hover:underline inline-flex items-center">
              Send us an enquiry <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
