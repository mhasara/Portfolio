import React, { useRef, useEffect } from "react";

interface LightPillarProps {
  topColor?: string;
  bottomColor?: string;
  intensity?: number;
  rotationSpeed?: number;
  interactive?: boolean;
  glowAmount?: number;
  pillarWidth?: number;
  pillarHeight?: number;
  noiseIntensity?: number;
  pillarRotation?: number;
}

const LightPillar: React.FC<LightPillarProps> = ({
  topColor = "#5227FF",
  bottomColor = "#FF9FFC",
  intensity = 1,
  rotationSpeed = 0.3,
  interactive = false,
  glowAmount = 0.005,
  pillarWidth = 3,
  pillarHeight = 0.4,
  noiseIntensity = 0.5,
  pillarRotation = 0
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouse = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = canvas.clientWidth;
    let h = canvas.clientHeight;

    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * devicePixelRatio;
      canvas.height = h * devicePixelRatio;
      ctx.scale(devicePixelRatio, devicePixelRatio);
    };

    resize();
    window.addEventListener("resize", resize);

    if (interactive) {
      window.addEventListener("mousemove", e => {
        mouse.current.x = e.clientX / w;
        mouse.current.y = e.clientY / h;
      });
    }

    let t = 0;

    const render = () => {
      t += 0.01 * rotationSpeed;

      ctx.clearRect(0, 0, w, h);

      const grd = ctx.createLinearGradient(0, 0, 0, h);
      grd.addColorStop(0, topColor);
      grd.addColorStop(1, bottomColor);

      const cx = interactive ? mouse.current.x * w : w / 2;
      const cy = interactive ? mouse.current.y * h : h / 2;

      const angle = t + pillarRotation;

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(angle);

      const width = pillarWidth * 50;
      const height = h * pillarHeight;

      ctx.globalAlpha = 0.2 * intensity;
      ctx.filter = `blur(${glowAmount * 1000}px)`;
      ctx.fillStyle = grd;

      ctx.fillRect(-width / 2, -height / 2, width, height);

      ctx.restore();

      requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [
    topColor,
    bottomColor,
    intensity,
    rotationSpeed,
    interactive,
    glowAmount,
    pillarWidth,
    pillarHeight,
    noiseIntensity,
    pillarRotation
  ]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: "100%",
        height: "100%",
        display: "block"
      }}
    />
  );
};

export default LightPillar;
