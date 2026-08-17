import React, { useEffect, useRef } from 'react';
import './Background.css';

const ML_SYMBOLS = [
  'σ', '∇', 'Σ', '∂', 'θ', 'λ', 'μ', 'α', 'β', 'ε',
  'W', 'x', 'b', 'ŷ', 'L', 'η', 'π', 'Δ', 'φ', 'ω',
  'f(x)', 'P(x)', '∫', '∞', 'log', 'ReLU', 'softmax',
];

const Background = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // ── Floating Symbol Particles ──
    const count = Math.min(Math.floor(width / 45), 35);
    const symbols = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vy: -(0.15 + Math.random() * 0.3),
      vx: (Math.random() - 0.5) * 0.15,
      char: ML_SYMBOLS[Math.floor(Math.random() * ML_SYMBOLS.length)],
      size: 11 + Math.random() * 10,
      alpha: 0.06 + Math.random() * 0.07,
      rotation: (Math.random() - 0.5) * 0.3,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      symbols.forEach((s) => {
        s.y += s.vy;
        s.x += s.vx;
        s.rotation += 0.0003;

        // Reset when drifted off top
        if (s.y < -40) {
          s.y = height + 30;
          s.x = Math.random() * width;
          s.char = ML_SYMBOLS[Math.floor(Math.random() * ML_SYMBOLS.length)];
        }

        ctx.save();
        ctx.translate(s.x, s.y);
        ctx.rotate(s.rotation);
        ctx.font = `${s.size}px 'Inter', sans-serif`;
        ctx.fillStyle = `rgba(37, 99, 235, ${s.alpha})`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(s.char, 0, 0);
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="bg-root" aria-hidden="true">
      <div className="bg-grid" />
      <canvas ref={canvasRef} className="bg-canvas" />
      <div className="bg-corner corner-tl" />
      <div className="bg-corner corner-br" />
      <div className="bg-vignette" />
    </div>
  );
};

export default Background;
