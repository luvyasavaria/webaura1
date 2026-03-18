import { useEffect, useState } from 'react';
import './Loader.css';

export default function Loader({ onDone }: { onDone: () => void }) {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 2500);
    const doneTimer = setTimeout(() => onDone(), 3200);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, [onDone]);

  return (
    <div className={`loader-overlay ${fading ? 'loader-fade-out' : ''}`}>
      <div className="loader-content">
        <div className="hourglassBackground">
          <div className="hourglassContainer">
            <div className="hourglassCurves" />
            <div className="hourglassCapTop" />
            <div className="hourglassGlassTop" />
            <div className="hourglassSand" />
            <div className="hourglassSandStream" />
            <div className="hourglassCapBottom" />
            <div className="hourglassGlass" />
          </div>
        </div>
        <p className="loader-brand">WEBAURA</p>
      </div>
    </div>
  );
}
