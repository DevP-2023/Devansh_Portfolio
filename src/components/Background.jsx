import React, { useRef, useEffect } from 'react';
import './Background.css';

// Floating particle on canvas
const NUM_PARTICLES = 70;

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

const COLORS = [
  'rgba(200,24,30,',   // Stark red
  'rgba(229,184,0,',   // Avengers gold
  'rgba(0,180,255,',   // arc reactor blue
  'rgba(255,255,255,', // white spark
];

const Background = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Build particles
    const particles = Array.from({ length: NUM_PARTICLES }, () => ({
      x: randomBetween(0, window.innerWidth),
      y: randomBetween(0, window.innerHeight),
      r: randomBetween(0.8, 2.5),
      vx: randomBetween(-0.25, 0.25),
      vy: randomBetween(-0.4, -0.1),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      alpha: randomBetween(0.2, 0.7),
      pulse: randomBetween(0, Math.PI * 2),
      pulseSpeed: randomBetween(0.01, 0.03),
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.pulse += p.pulseSpeed;
        const a = p.alpha * (0.5 + 0.5 * Math.sin(p.pulse));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${a})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = `${p.color}0.8)`;
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;

        // Wrap around
        if (p.y < -5)  p.y = canvas.height + 5;
        if (p.x < -5)  p.x = canvas.width + 5;
        if (p.x > canvas.width + 5)  p.x = -5;
      });

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="bg-root" aria-hidden="true">
      {/* Base gradient */}
      <div className="bg-base" />

      {/* Subtle diagonal circuit lines */}
      <div className="bg-grid" />

      {/* Radial glows */}
      <div className="bg-glow bg-glow-red" />
      <div className="bg-glow bg-glow-gold" />
      <div className="bg-glow bg-glow-blue" />

      {/* Floating particles canvas */}
      <canvas ref={canvasRef} className="bg-canvas" />
    </div>
  );
};

export default Background;
