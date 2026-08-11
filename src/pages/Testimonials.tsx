import { Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import './PageStyles.css';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'James & Sarah T.',
      location: 'Croydon',
      project: 'Rear Wrap-around Extension',
      text: 'DHAR CONS LTD transformed our cramped ground floor into an incredible open-plan living space. Their team was professional, tidy, and finished the project exactly on the timeline they promised. The brickwork match to the original Victorian house is flawless.',
      rating: 5
    },
    {
      name: 'Mark W.',
      location: 'South London',
      project: 'Full House Renovation',
      text: 'Taking on a full renovation of a derelict property was daunting, but having this team manage it made all the difference. From stripping it back to the brick to the final coat of paint, their attention to detail was exceptional. Highly recommended.',
      rating: 5
    },
    {
      name: 'Eleanor H.',
      location: 'Surrey',
      project: 'New Build Development',
      text: 'We hired DHAR CONS LTD for a custom new build project. They coordinated brilliantly with our architects and the local council. The site was always safe and well-managed, and the final finish of the house is simply stunning.',
      rating: 5
    },
    {
      name: 'David P.',
      location: 'Greater London',
      project: 'Loft Conversion',
      text: 'Fantastic service from start to finish. They built a beautiful dormer loft conversion that added two bedrooms and a bathroom to our terraced house. The team was respectful of our home and kept disruption to an absolute minimum.',
      rating: 4.5
    },
    {
      name: 'Rachel K.',
      location: 'Croydon',
      project: 'Kitchen Refurbishment',
      text: 'Very pleased with our new kitchen and structural alterations. They removed a load-bearing wall, installed the steel beams perfectly, and fitted the new kitchen to a very high standard. We will definitely use them again for future work.',
      rating: 5
    },
    {
      name: 'Tom & Emma B.',
      location: 'Surrey',
      project: 'Double Storey Extension',
      text: 'The best builders we have ever worked with. A large double-storey extension is a stressful project, but communication was excellent throughout. The quality of the brickwork and roofing is top-notch.',
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star 
        key={index} 
        size={18} 
        className={index < Math.floor(rating) ? "text-accent fill-accent" : "text-gray-300"} 
        fill={index < Math.floor(rating) ? "currentColor" : "none"}
      />
    ));
  };

  return (
    <div className="testimonials-page">
      <div className="page-hero">
        <div className="container">
          <h1>Client Testimonials</h1>
          <p>Read what our clients across London and Surrey have to say about our construction services.</p>
        </div>
      </div>

      <div className="content-section">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative">
                <Quote className="absolute top-6 right-6 text-gray-100" size={48} />
                <div className="flex gap-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="italic text-gray-700 mb-6 relative z-10">"{testimonial.text}"</p>
                <div className="mt-auto border-t border-gray-100 pt-4">
                  <h4 className="font-bold text-primary">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.project} — {testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-primary text-white p-8 rounded-lg text-center">
            <h3 className="text-white mb-4">Ready to be our next success story?</h3>
            <p className="mb-6 opacity-80 max-w-2xl mx-auto">We take pride in our work and ensure every client is 100% satisfied with their project. Contact us today to discuss your vision.</p>
            <Link to="/quote" className="btn btn-primary bg-accent hover:bg-accent/90 text-white border-none">Request a Free Quote</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
