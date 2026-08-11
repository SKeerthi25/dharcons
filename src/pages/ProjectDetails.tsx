import { MapPin, Calendar, Building, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import './PageStyles.css';

export default function ProjectDetails() {

  // In a real app, you would fetch the project data based on the ID.
  // Using placeholder data for this template.
  const project = {
    title: 'Modern Kitchen Extension',
    location: 'Croydon, South London',
    type: 'Extensions',
    duration: '12 Weeks',
    completionDate: 'March 2026',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop',
    overview: 'This project involved creating a large, open-plan kitchen and dining area by building a rear wrap-around extension on a period terraced property. The client wanted to maximize natural light and create a seamless transition between the indoor living space and the garden.',
    requirements: [
      'Removal of existing structural walls and installation of steel beams',
      'Construction of a 5m x 4m wrap-around extension matching existing brickwork',
      'Installation of large aluminum bi-fold doors',
      'Underfloor heating installation',
      'Custom skylight fitting for maximum natural light'
    ],
    highlights: [
      'Completed exactly on the 12-week schedule',
      'Seamless brick matching with the 100-year-old existing property',
      'Achieved an energy efficiency rating of A for the new space'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1600566752229-25088ebdd6f0?q=80&w=2667&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607688969-a5bfcd64bd28?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585154526-990dced4ea0d?q=80&w=2670&auto=format&fit=crop'
    ]
  };

  return (
    <div className="project-details-page">
      {/* Large Project Hero */}
      <div className="relative h-[60vh] min-h-[500px]">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="container text-center text-white relative z-10">
            <span className="inline-block px-3 py-1 bg-accent text-white text-sm font-bold uppercase tracking-wider rounded-full mb-4">
              {project.type}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{project.title}</h1>
            <div className="flex items-center justify-center text-gray-200">
              <MapPin size={18} className="mr-2 text-accent" />
              <span>{project.location}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="content-section">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl text-primary mb-6">Project Overview</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-10">
                {project.overview}
              </p>

              <h3 className="text-2xl text-primary mb-6">Client Requirements</h3>
              <ul className="space-y-4 mb-10">
                {project.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="text-accent mr-3 mt-1 shrink-0" size={20} />
                    <span className="text-gray-700 text-lg leading-relaxed">{req}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-2xl text-primary mb-6">Project Gallery</h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                <div className="col-span-full sm:col-span-2 h-80 rounded-lg overflow-hidden shadow-sm">
                  <img src={project.gallery[0]} alt="Project Detail 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="h-64 rounded-lg overflow-hidden shadow-sm">
                  <img src={project.gallery[1]} alt="Project Detail 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="h-64 rounded-lg overflow-hidden shadow-sm">
                  <img src={project.gallery[2]} alt="Project Detail 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 sticky top-32 shadow-sm">
                <h3 className="text-xl font-bold text-primary mb-6 pb-4 border-b border-gray-200">Project Details</h3>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <Building className="text-accent mr-4 shrink-0" size={24} />
                    <div>
                      <p className="text-sm text-gray-500 font-medium mb-1">Project Type</p>
                      <p className="text-gray-900 font-semibold">{project.type}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="text-accent mr-4 shrink-0" size={24} />
                    <div>
                      <p className="text-sm text-gray-500 font-medium mb-1">Location</p>
                      <p className="text-gray-900 font-semibold">{project.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Calendar className="text-accent mr-4 shrink-0" size={24} />
                    <div>
                      <p className="text-sm text-gray-500 font-medium mb-1">Duration</p>
                      <p className="text-gray-900 font-semibold">{project.duration}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="text-accent mr-4 shrink-0" size={24} />
                    <div>
                      <p className="text-sm text-gray-500 font-medium mb-1">Completion</p>
                      <p className="text-gray-900 font-semibold">{project.completionDate}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded border border-gray-100 mb-8">
                  <h4 className="font-bold text-primary mb-4">Key Highlights</h4>
                  <ul className="space-y-3">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 mr-2 shrink-0"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-center">
                  <p className="text-gray-700 mb-4 font-medium">Interested in a Similar Project?</p>
                  <Link to="/quote" className="btn btn-primary w-full shadow-md">
                    Request a Quote
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
