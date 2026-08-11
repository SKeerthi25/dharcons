import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import './PageStyles.css';

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What construction services do you provide?',
      answer: 'We provide a comprehensive range of domestic construction services including residential construction, new build homes, home extensions, renovations, refurbishments, and general building works.'
    },
    {
      question: 'Do you handle home extensions?',
      answer: 'Yes, home extensions are one of our core specialties. We construct high-quality rear, side, and wrap-around extensions designed to increase your living space and property value.'
    },
    {
      question: 'Do you work on renovation projects?',
      answer: 'Absolutely. We regularly transform existing properties with modern renovation and refurbishment solutions, handling everything from structural alterations to final interior finishes.'
    },
    {
      question: 'Which areas do you cover?',
      answer: 'DHAR CONS LTD primarily serves Croydon, South London, Surrey, Greater London, and the surrounding nearby areas.'
    },
    {
      question: 'How can I request a quotation?',
      answer: 'You can request a quote by filling out the form on our "Request a Quote" page, or by contacting us directly via phone (07796 195185) or email (cons@dharcons.com).'
    },
    {
      question: 'How does the consultation process work?',
      answer: 'Our process begins with an initial consultation to understand your goals. This is followed by a site assessment where we review the property and technical requirements, allowing us to provide an accurate plan and quote.'
    },
    {
      question: 'Can you work with existing plans?',
      answer: 'Yes, if you already have architectural drawings and planning permission, our construction team can work directly from those plans to build your project.'
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary greatly depending on the scope of work. A minor refurbishment might take a few weeks, while a large extension or new build will take several months. We provide clear timeline estimates during the quoting stage.'
    },
    {
      question: 'Do you provide project updates?',
      answer: 'Yes, clear communication is a priority for us. We provide regular updates throughout the construction phase so you are always aware of the progress.'
    },
    {
      question: 'How can I contact DHAR CONS LTD?',
      answer: 'You can reach us by phone at 07796 195185, via email at cons@dharcons.com, or by visiting our Contact page to use our enquiry form.'
    }
  ];

  return (
    <div className="faqs-page">
      <div className="page-hero">
        <div className="container">
          <h1>Frequently Asked Questions</h1>
          <p>Find answers to common questions about our construction services, process, and working with DHAR CONS LTD.</p>
        </div>
      </div>

      <div className="content-section">
        <div className="container">
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div className="faq-item" key={index}>
                <div 
                  className="faq-question"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span>{faq.question}</span>
                  {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
                {openIndex === index && (
                  <div className="faq-answer">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <h3 className="mb-4">Still have questions?</h3>
            <Link to="/contact" className="btn btn-primary">Contact Our Team</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
