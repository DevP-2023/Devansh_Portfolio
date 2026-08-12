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
            opacity: 0,
            scale: 1.05,
            transition: { duration: 0.6, ease: 'easeInOut' }
          }}
        >
          {/* Hexagonal grid background */}
          <div className="loader-hex-bg" />

          {/* Sweeping scan line */}
          <div className="loader-sweep" />

          {/* HUD corner brackets */}
          <div className="hud-corner hud-tl" />
          <div className="hud-corner hud-tr" />
          <div className="hud-corner hud-bl" />
          <div className="hud-corner hud-br" />

          {/* Arc reactor core glow */}
          <div className="arc-core" />

          {/* Holographic spinning rings */}
          <motion.div
            className="holo-ring-wrap"
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: 'spring', stiffness: 50 }}
          >
            <div className="holo-ring holo-ring-4" />
            <div className="holo-ring holo-ring-1" />
            <div className="holo-ring holo-ring-2" />
            <div className="holo-ring holo-ring-3" />
          </motion.div>

          {/* Orbiting particles */}
          <motion.div
            className="particle-orbit"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="particle p1" />
            <div className="particle p2" />
            <div className="particle p3" />
            <div className="particle p4" />
          </motion.div>

          {/* CENTER: DP hologram + all content */}
          <div className="logo-wrap">

            {/* DP glitch logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.4, rotateX: 60 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              transition={{ delay: 0.3, duration: 0.9, type: 'spring', stiffness: 60, damping: 12 }}
            >
              <div className="holo-dp">DP</div>
            </motion.div>

            {/* Tagline */}
            <motion.p
              className="holo-tagline"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
            >
              AI / ML Professional
            </motion.p>

            {/* JARVIS status row */}
            <motion.div
              className="holo-status"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <div className="status-dot" />
              <span>System Online</span>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              className="holo-progress-wrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              <motion.div
                className="holo-progress-bar"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.5, duration: 1.2, ease: 'easeInOut' }}
              />
            </motion.div>

            {/* Loading text */}
            <motion.p
              className="holo-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{ delay: 1.5, duration: 1.5, times: [0, 0.15, 0.85, 1] }}
            >
              Assembling...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
