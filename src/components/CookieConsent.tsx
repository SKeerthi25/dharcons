import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('dharcons_cookie_consent');
    if (!consent) {
      // Small delay before showing banner for better UX
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('dharcons_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('dharcons_cookie_consent', 'rejected');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      left: '20px',
      right: '20px',
      maxWidth: '800px',
      margin: '0 auto',
      backgroundColor: 'var(--primary)',
      color: 'white',
      padding: '1.5rem',
      borderRadius: '8px',
      boxShadow: 'var(--shadow-2xl)',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      border: '1px solid var(--border-dark)',
      animation: 'slideUp 0.5s ease-out forwards'
    }}>
      <style>{`
        @keyframes slideUp {
          from { transform: translateY(100px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @media (min-width: 768px) {
          .cookie-flex { flex-direction: row; align-items: center; justify-content: space-between; }
        }
      `}</style>
      
      <div className="cookie-flex" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{ flex: 1 }}>
          <h4 style={{ margin: '0 0 0.5rem 0', color: 'white', fontSize: '1.1rem' }}>We Value Your Privacy</h4>
          <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.8, lineHeight: 1.5 }}>
            We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
            By clicking "Accept", you consent to our use of cookies. 
            Read our <Link to="/cookie" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>Cookie Policy</Link> for more information.
          </p>
        </div>
        
        <div style={{ display: 'flex', gap: '1rem', flexShrink: 0 }}>
          <button 
            onClick={handleReject}
            style={{ 
              padding: '0.5rem 1rem', 
              backgroundColor: 'transparent', 
              color: 'white', 
              border: '1px solid white', 
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Reject All
          </button>
          <button 
            onClick={handleAccept}
            style={{ 
              padding: '0.5rem 1rem', 
              backgroundColor: 'var(--accent)', 
              color: 'white', 
              border: 'none', 
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
