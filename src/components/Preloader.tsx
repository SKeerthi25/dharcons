import { useEffect, useState } from 'react';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // 5-second total sequence
    const timers = [
      setTimeout(() => setStage(1), 1000), // Show DHAR
      setTimeout(() => setStage(2), 2000), // Show CONS
      setTimeout(() => setStage(3), 3000), // Show LTD
      setTimeout(() => setStage(4), 4500), // Fade out
      setTimeout(() => onComplete(), 5000) // Unmount
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'var(--primary)',
      zIndex: 99999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'opacity 0.5s ease-out',
      opacity: stage === 4 ? 0 : 1
    }}>
      <style>{`
        @keyframes revealText {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .preloader-text {
          font-size: 3rem;
          font-weight: 800;
          color: white;
          display: flex;
          gap: 1rem;
        }
        .text-accent { color: var(--accent); }
        
        @media (min-width: 768px) {
          .preloader-text { font-size: 5rem; }
        }
      `}</style>

      <div className="preloader-text">
        {stage >= 1 && <span style={{ animation: 'revealText 0.5s forwards' }}>DHAR</span>}
        {stage >= 2 && <span style={{ animation: 'revealText 0.5s forwards' }}>CONS</span>}
        {stage >= 3 && <span className="text-accent" style={{ animation: 'revealText 0.5s forwards' }}>LTD</span>}
      </div>
    </div>
  );
}
