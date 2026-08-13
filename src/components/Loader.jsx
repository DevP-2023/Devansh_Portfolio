import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Loader.css';

const Loader = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loader-overlay"
          initial={{ opacity: 1 }}
          exit={{
            clipPath: 'inset(0 0 100% 0)',
            transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.15 }
          }}
        >
          {/* Diagonal energy lines */}
          <div className="energy-line line-1" />
          <div className="energy-line line-2" />
          <div className="energy-line line-3" />

          {/* Corner HUD brackets */}
          <div className="hud-bracket tl" />
          <div className="hud-bracket tr" />
          <div className="hud-bracket bl" />
          <div className="hud-bracket br" />

          <div className="loader-content">

            {/* Big Avengers-style monogram */}
            <motion.div
              className="monogram-wrap"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <svg viewBox="0 0 200 200" className="monogram-svg" fill="none">
                {/* Outer hexagon / shield shape */}
                <motion.polygon
                  points="100,8 185,52 185,148 100,192 15,148 15,52"
                  stroke="url(#goldGrad)"
                  strokeWidth="1.5"
                  fill="none"
                  strokeDasharray="550"
                  strokeDashoffset="550"
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
                />

                {/* Inner hexagon */}
                <motion.polygon
                  points="100,28 165,62 165,138 100,172 35,138 35,62"
                  stroke="url(#redGrad)"
                  strokeWidth="0.8"
                  fill="none"
                  strokeDasharray="400"
                  strokeDashoffset="400"
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 1.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                />

                {/* Rotating scan ring */}
                <motion.circle
                  cx="100" cy="100" r="70"
                  stroke="url(#goldGrad)"
                  strokeWidth="0.5"
                  fill="none"
                  opacity="0.4"
                  strokeDasharray="12 8"
                  style={{ transformOrigin: '100px 100px' }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                />

                {/* "D" */}
                <motion.text
                  x="58" y="115"
                  fill="url(#textGrad)"
                  fontFamily="'Playfair Display', Georgia, serif"
                  fontSize="62"
                  fontWeight="700"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  D
                </motion.text>

                {/* "P" */}
                <motion.text
                  x="102" y="115"
                  fill="url(#accentGrad)"
                  fontFamily="'Playfair Display', Georgia, serif"
                  fontSize="62"
                  fontWeight="700"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  P
                </motion.text>

                {/* Pulse dots at hex vertices */}
                {[
                  [100, 8], [185, 52], [185, 148], [100, 192], [15, 148], [15, 52]
                ].map(([cx, cy], i) => (
                  <motion.circle
                    key={i}
                    cx={cx} cy={cy} r="3"
                    fill="#e5b800"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: [0, 1, 0.6], scale: [0, 1.5, 1] }}
                    transition={{ delay: 0.3 + i * 0.15, duration: 0.8, ease: "easeOut" }}
                  />
                ))}

                {/* Gradients */}
                <defs>
                  <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#e5b800" />
                    <stop offset="100%" stopColor="#ffd700" />
                  </linearGradient>
                  <linearGradient id="redGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#c8181e" />
                    <stop offset="100%" stopColor="#e02020" />
                  </linearGradient>
                  <linearGradient id="textGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#1a1f2c" />
                    <stop offset="100%" stopColor="#2d3748" />
                  </linearGradient>
                  <linearGradient id="accentGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#c8181e" />
                    <stop offset="100%" stopColor="#e5b800" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>

            {/* Name */}
            <motion.h1
              className="loader-name"
              initial={{ opacity: 0, letterSpacing: '0.3em', filter: 'blur(8px)' }}
              animate={{ opacity: 1, letterSpacing: '0.08em', filter: 'blur(0px)' }}
              transition={{ delay: 1.4, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              Devansh Paltewar
            </motion.h1>

            {/* Tagline */}
            <motion.p
              className="loader-tagline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.9, duration: 0.8 }}
            >
              AI / ML Professional
            </motion.p>

            {/* Animated loading bar — no percentage */}
            <motion.div
              className="loader-bar-wrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <motion.div
                className="loader-bar-fill"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.2, duration: 1.8, ease: [0.76, 0, 0.24, 1] }}
              />
              <div className="loader-bar-shimmer" />
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
