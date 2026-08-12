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
          exit={{ opacity: 0, transition: { duration: 0.7, delay: 0.3, ease: 'easeInOut' } }}
        >
          {/* Animated neural grid */}
          <div className="loader-grid" />

          {/* Synapse orbs */}
          <motion.div
            className="loader-orb loader-orb-1"
            animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="loader-orb loader-orb-2"
            animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
          />
          <motion.div
            className="loader-orb loader-orb-3"
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          />

          {/* Center content */}
          <div className="loader-content">

            {/* Animated initials */}
            <div className="loader-logo">
              {['D', 'P'].map((letter, i) => (
                <motion.span
                  key={i}
                  className="loader-letter"
                  initial={{ opacity: 0, y: 60, scale: 0.5 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.3 + i * 0.2,
                    type: 'spring',
                    stiffness: 80,
                    damping: 12,
                  }}
                >
                  {letter}
                </motion.span>
              ))}
              <motion.span
                className="loader-dot"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, type: 'spring', stiffness: 200 }}
              >
                .
              </motion.span>
            </div>

            {/* Tagline */}
            <motion.p
              className="loader-tagline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              AI / ML Professional
            </motion.p>

            {/* Neural activation nodes */}
            <motion.div
              className="loader-nodes"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
            >
              <div className="loader-node" />
              <div className="loader-connector" />
              <div className="loader-node" />
              <div className="loader-connector" />
              <div className="loader-node" />
              <div className="loader-connector" />
              <div className="loader-node" />
              <div className="loader-connector" />
              <div className="loader-node" />
            </motion.div>

            {/* Progress bar */}
            <motion.div
              className="loader-progress-wrapper"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              <motion.div
                className="loader-progress-bar"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.5, duration: 1.1, ease: 'easeInOut' }}
              />
            </motion.div>

            {/* Loading text */}
            <motion.p
              className="loader-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{ delay: 1.5, duration: 1.6, times: [0, 0.2, 0.8, 1] }}
            >
              Initializing model...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
