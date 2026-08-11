import { useState } from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Modern Kitchen Extension',
    location: 'Croydon, South London',
    type: 'Extensions',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Victorian Home Renovation',
    location: 'Surrey',
    type: 'Renovations',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Contemporary New Build',
    location: 'Greater London',
    type: 'New Builds',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2675&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Loft Conversion',
    location: 'Croydon',
    type: 'Refurbishments',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: 5,
    title: 'Luxury Bathroom Redesign',
    location: 'South London',
    type: 'Renovations',
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: 6,
    title: 'Wrap-around Extension',
    location: 'Surrey',
    type: 'Extensions',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2667&auto=format&fit=crop'
  }
];

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.type === filter);

  const filters = ['All', 'New Builds', 'Extensions', 'Renovations', 'Refurbishments'];

  return (
    <div className="projects-page">
      <div className="page-header section-dark text-center">
        <div className="container">
          <h1 className="mb-4">Our Projects</h1>
          <p className="page-subtitle">
            Explore our portfolio of high-quality domestic construction projects across Croydon and surrounding areas.
          </p>
        </div>
      </div>

      <div className="section container">
        <div className="project-filters mb-8">
          {filters.map(f => (
            <button 
              key={f}
              className={`filter-btn ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <Link to="/contact" className="view-project-btn">
                    View Details <ArrowRight size={18} className="ml-2" />
                  </Link>
                </div>
              </div>
              <div className="project-info">
                <div className="project-type">{project.type}</div>
                <h3 className="project-title">{project.title}</h3>
                <div className="project-location">
                  <MapPin size={16} className="location-icon" />
                  <span>{project.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/quote" className="btn btn-primary">
            Start Your Project
          </Link>
        </div>
      </div>
    </div>
  );
}
