import { useRef, useState } from 'react';
import './TiltedCard.css';

interface TiltedCardProps {
  imageSrc: React.ComponentProps<'img'>['src'];
  altText?: string;
  captionText?: string;
  containerHeight?: React.CSSProperties['height'];
  containerWidth?: React.CSSProperties['width'];
  imageHeight?: React.CSSProperties['height'];
  imageWidth?: React.CSSProperties['width'];
  scaleOnHover?: number;
  rotateAmplitude?: number;
  showMobileWarning?: boolean;
  showTooltip?: boolean;
  overlayContent?: React.ReactNode;
  displayOverlayContent?: boolean;
}

export default function TiltedCard({
  imageSrc,
  altText = 'Tilted card image',
  captionText = '',
  containerHeight = '300px',
  containerWidth = '100%',
  imageHeight = '300px',
  imageWidth = '300px',
  scaleOnHover = 1.1,
  rotateAmplitude = 14,
  showMobileWarning = true,
  showTooltip = true,
  overlayContent = null,
  displayOverlayContent = false
}: TiltedCardProps) {
  const ref = useRef<HTMLElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const captionRef = useRef<HTMLElement>(null);

  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [scale, setScale] = useState(1);
  const [opacity, setOpacity] = useState(0);
  const [captionX, setCaptionX] = useState(0);
  const [captionY, setCaptionY] = useState(0);

  function handleMouse(e: React.MouseEvent<HTMLElement>) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    setRotateX(rotationX);
    setRotateY(rotationY);

    setCaptionX(e.clientX - rect.left);
    setCaptionY(e.clientY - rect.top);
  }

  function handleMouseEnter() {
    setScale(scaleOnHover);
    setOpacity(1);
  }

  function handleMouseLeave() {
    setOpacity(0);
    setScale(1);
    setRotateX(0);
    setRotateY(0);
  }

  return (
    <figure
      ref={ref}
      className="tilted-card-figure"
      style={{
        height: containerHeight,
        width: containerWidth
      }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showMobileWarning && (
        <div className="tilted-card-mobile-alert">This effect is not optimized for mobile. Check on desktop.</div>
      )}

      <div
        ref={innerRef}
        className="tilted-card-inner"
        style={{
          width: imageWidth,
          height: imageHeight,
          transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
          transition: `transform 0.3s ease-out`
        }}
      >
        <img
          src={imageSrc}
          alt={altText}
          className="tilted-card-img"
          style={{
            width: imageWidth,
            height: imageHeight
          }}
        />

        {displayOverlayContent && overlayContent && (
          <div className="tilted-card-overlay">{overlayContent}</div>
        )}
      </div>

      {showTooltip && (
        <figcaption
          ref={captionRef}
          className="tilted-card-caption"
          style={{
            transform: `translate(${captionX}px, ${captionY}px)`,
            opacity: opacity,
            transition: opacity === 0 ? 'opacity 0.3s ease' : 'none'
          }}
        >
          {captionText}
        </figcaption>
      )}
    </figure>
  );
}
