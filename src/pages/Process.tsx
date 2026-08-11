import { Link } from 'react-router-dom';
import './PageStyles.css';

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Initial Consultation',
      description: 'We begin by understanding your specific requirements, project goals, and budget. This initial discussion helps us align our services with your vision.'
    },
    {
      number: '02',
      title: 'Site Assessment',
      description: 'Our team will visit your property to review the site conditions, take necessary measurements, and understand any technical or structural requirements.'
    },
    {
      number: '03',
      title: 'Planning & Quote',
      description: 'We develop a structured project approach and provide a clear, comprehensive, and transparent quotation outlining timelines and costs.'
    },
    {
      number: '04',
      title: 'Construction',
      description: 'Our experienced builders carry out the work with professional project coordination, ensuring high standards of workmanship and clear communication.'
    },
    {
      number: '05',
      title: 'Completion',
      description: 'We complete final checks, ensure all work meets our rigorous quality standards, and hand over the finished project to your satisfaction.'
    }
  ];

  return (
    <div className="process-page">
      <div className="page-hero">
        <div className="container">
          <h1>Our Process</h1>
          <p>A transparent and structured approach to delivering your construction project on time and to the highest standards.</p>
        </div>
      </div>

      <div className="content-section">
        <div className="container">
          <div className="process-timeline">
            {steps.map((step, index) => (
              <div className="process-step" key={index}>
                <div className="step-number">{step.number}</div>
                <div className="step-content">
                  <h3 className="mb-2 text-primary">{step.title}</h3>
                  <p className="opacity-80">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="content-section section-gray text-center">
        <div className="container">
          <h2 className="mb-4">Experience the DHAR CONS LTD Difference</h2>
          <Link to="/quote" className="btn btn-primary mt-4">Start Step 01 Today</Link>
        </div>
      </div>
    </div>
  );
}
