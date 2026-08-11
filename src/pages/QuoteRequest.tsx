import { useState, useRef, type FormEvent } from 'react';
import { Send, Upload, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import './QuoteRequest.css';

export default function QuoteRequest() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    
    setIsSubmitting(true);
    setSubmitError(false);
    
    const serviceId = 'service_7uufa4i';
    const templateId = 'template_z0j4l1p';
    const publicKey = 'QrQx-xWydAfMZNM4D';

    emailjs.sendForm(serviceId, templateId, formRef.current, {
      publicKey: publicKey,
    })
      .then((result) => {
          console.log(result.text);
          setIsSubmitted(true);
      }, (error) => {
          console.log(error.text);
          setSubmitError(true);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  if (isSubmitted) {
    return (
      <div className="section container success-container text-center">
        <CheckCircle size={64} className="success-icon mx-auto mb-4" />
        <h1 className="mb-4">Thank You</h1>
        <p className="success-message">
          Your enquiry has been received. Our team will review your requirements and contact you shortly.
        </p>
        <button 
          className="btn btn-outline-dark mt-6"
          onClick={() => setIsSubmitted(false)}
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="quote-page">
      <div className="quote-header section-dark text-center">
        <div className="container">
          <h1 className="mb-4">Request a Quote</h1>
          <p className="quote-subtitle">
            Provide us with the details of your upcoming project and our team will get back to you with a comprehensive proposal.
          </p>
        </div>
      </div>
      
      <div className="section container">
        <div className="quote-form-container">
          {submitError && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-md">
              There was an error submitting your request. Please try again or contact us directly.
            </div>
          )}
          <form ref={formRef} className="quote-form" onSubmit={handleSubmit}>
            {/* Honeypot field for spam protection */}
            <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

            <div className="form-section">
              <h3 className="mb-4">Personal Details</h3>
              <div className="grid md:grid-cols-2">
                <div className="form-group">
                  <label htmlFor="fullName">Full Name *</label>
                  <input type="text" id="fullName" name="fullName" required placeholder="John Doe" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input type="email" id="email" name="email" required placeholder="john@example.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    required 
                    placeholder="07796195185" 
                    pattern="^(\d{10}|\d{12})$"
                    title="Phone number must be exactly 10 or 12 digits"
                    onInput={(e) => {
                      const target = e.target as HTMLInputElement;
                      target.value = target.value.replace(/\D/g, '');
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contactMethod">Preferred Contact Method</label>
                  <select id="contactMethod" name="contactMethod">
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="form-section mt-6">
              <h3 className="mb-4">Project Details</h3>
              <div className="form-group">
                <label htmlFor="address">Property Address *</label>
                <input type="text" id="address" name="address" required placeholder="14 Thanet Place, Croydon, CR0 1QP" />
              </div>
              
              <div className="grid md:grid-cols-2">
                <div className="form-group">
                  <label htmlFor="projectType">Project Type *</label>
                  <select id="projectType" name="projectType" required>
                    <option value="" disabled selected>Select a project type</option>
                    <option value="new-build">New Build</option>
                    <option value="extension">Extension</option>
                    <option value="renovation">Renovation</option>
                    <option value="refurbishment">Refurbishment</option>
                    <option value="general">General Building Work</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="budget">Estimated Budget</label>
                  <select id="budget" name="budget">
                    <option value="" disabled selected>Select budget range</option>
                    <option value="under-50k">Under £50,000</option>
                    <option value="50k-100k">£50,000 - £100,000</option>
                    <option value="100k-250k">£100,000 - £250,000</option>
                    <option value="over-250k">Over £250,000</option>
                    <option value="unsure">Not sure yet</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="startDate">Preferred Start Date</label>
                  <input type="date" id="startDate" name="startDate" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="description">Project Description *</label>
                <textarea 
                  id="description" 
                  name="description" 
                  rows={5} 
                  required 
                  placeholder="Please describe your requirements, current property state, and what you hope to achieve..."
                ></textarea>
              </div>

              <div className="form-group file-upload">
                <label className="file-label">
                  <Upload size={24} className="mb-2" />
                  <span>Upload Project Images/Documents (Optional)</span>
                  <p className="text-sm opacity-70">Max size: 10MB per file. Formats: JPG, PNG, PDF</p>
                  <input type="file" id="documents" name="documents" multiple className="hidden-input" />
                </label>
              </div>
            </div>

            <button 
              type="submit" 
              className="btn btn-primary submit-btn mt-6"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
              {!isSubmitting && <Send size={18} className="ml-2" />}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
