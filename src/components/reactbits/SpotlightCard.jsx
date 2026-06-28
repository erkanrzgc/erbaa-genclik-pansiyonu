/**
 * SpotlightCard — React Bits (https://reactbits.dev/components/spotlight-card)
 * Pointer'ı takip eden yumuşak radyal ışık. Kütüphanesiz (saf CSS + pointer).
 * Mobilde hover yok → sade kart olarak zarifçe çalışır (graceful degradation).
 */
import { useRef } from 'react';
import './SpotlightCard.css';

const SpotlightCard = ({
  children,
  className = '',
  spotlightColor = 'rgba(176, 123, 62, 0.18)',
}) => {
  const divRef = useRef(null);

  const handleMouseMove = (e) => {
    const el = divRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    el.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    el.style.setProperty('--spotlight-color', spotlightColor);
  };

  return (
    <div ref={divRef} onMouseMove={handleMouseMove} className={`card-spotlight ${className}`}>
      {children}
    </div>
  );
};

export default SpotlightCard;
