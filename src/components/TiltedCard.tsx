import React, { useRef, useState } from 'react';
import '../assets/styles/TiltedCard.css';

interface TiltedCardProps {
  title?: string;
  image: string;
  alt: string;
}

const TiltedCard: React.FC<TiltedCardProps> = ({ title, image, alt }) => {
  const figureRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!figureRef.current) return;

    const rect = figureRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    const inner = figureRef.current.querySelector('.tilted-card-inner') as HTMLElement;
    if (inner) {
      inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    const inner = figureRef.current?.querySelector('.tilted-card-inner') as HTMLElement;
    if (inner) {
      inner.style.transform = 'rotateX(0) rotateY(0)';
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div
      ref={figureRef}
      className="tilted-card-figure"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      <div className="tilted-card-mobile-alert">
        Hover effects disabled on mobile
      </div>
      <div className="tilted-card-inner">
        <img
          className="tilted-card-img"
          src={image}
          alt={alt}
          width="300"
          height="300"
        />
        <div className="tilted-card-overlay">
          <h3 className="tilted-card-caption">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default TiltedCard;
