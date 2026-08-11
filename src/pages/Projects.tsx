import { useState } from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Projects.css';

import proj1 from '../assets/image copy 2.png';
import proj2 from '../assets/image copy 4.png';
import proj3 from '../assets/image copy 8.png';
import proj4 from '../assets/image copy.png';
import proj5 from '../assets/image copy 18.png';
import proj6 from '../assets/image copy 19.png';
import proj7 from '../assets/image copy 12.png';
import proj8 from '../assets/image copy 10.png';

const projects = [
  {
    id: 1,
    title: 'Modern Kitchen Extension',
    location: 'Croydon, South London',
    type: 'Extensions',
    image: proj1
  },
  {
    id: 2,
    title: 'Victorian Home Renovation',
    location: 'Surrey',
    type: 'Renovations',
    image: proj2
  },
  {
    id: 3,
    title: 'Contemporary New Build',
    location: 'Greater London',
    type: 'New Builds',
    image: proj3
  },
  {
    id: 4,
    title: 'Loft Conversion',
    location: 'Croydon',
    type: 'Refurbishments',
    image: proj4
  },
  {
    id: 5,
    title: 'Luxury Bathroom Redesign',
    location: 'South London',
    type: 'Renovations',
    image: proj5
  },
  {
    id: 6,
    title: 'Wrap-around Extension',
    location: 'Surrey',
    type: 'Extensions',
    image: proj6
  },
  {
    id: 7,
    title: 'Open Plan Living Area',
    location: 'Croydon',
    type: 'Refurbishments',
    image: proj7
  },
  {
    id: 8,
    title: 'Bespoke Property Construction',
    location: 'Surrey',
    type: 'New Builds',
    image: proj8
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
