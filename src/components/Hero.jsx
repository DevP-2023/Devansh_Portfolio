import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import profilePhoto from '../Gallery/Devansh Linkdin.png';
import './Hero.css';

const Github = ({ size = 22 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 22 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Twitter = ({ size = 22 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.3 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(5px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const TypeWriter = ({ text, delay = 1.5, speed = 80 }) => {
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const startTimeout = setTimeout(() => setStarted(true), delay * 1000);
    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length < text.length) {
      const timer = setTimeout(() => {
        setDisplayed(text.slice(0, displayed.length + 1));
      }, speed);
      return () => clearTimeout(timer);
    } else {
      setShowCursor(false);
    }
  }, [started, displayed, text, speed]);

  // Cursor blink
  const [cursorVisible, setCursorVisible] = useState(true);
  useEffect(() => {
    if (!showCursor) return;
    const interval = setInterval(() => setCursorVisible((v) => !v), 530);
    return () => clearInterval(interval);
  }, [showCursor]);

  return (
    <span>
      {displayed}
      {showCursor && (
        <span className="typing-cursor" style={{ opacity: cursorVisible ? 1 : 0 }}>.</span>
      )}
    </span>
  );
};

const Hero = () => (
  <section id="home" className="hero section">
    <div className="container hero-container">

      {/* ── Left: Photo ── */}
      <motion.div
        className="hero-photo-wrap"
        initial={{ opacity: 0, scale: 0.5, filter: 'blur(10px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1.2, delay: 0.6, type: 'spring', stiffness: 100, damping: 20 }}
      >
        <motion.div
          className="hero-photo-frame"
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ type: 'spring', stiffness: 300, damping: 15 }}
        >
          <img src={profilePhoto} alt="Devansh Paltewar" className="hero-photo" />
        </motion.div>

      </motion.div>

      {/* ── Right: Text ── */}
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span className="hero-eyebrow" variants={itemVariants}>
          AI / Machine Learning Professional
        </motion.span>

        <h1 className="hero-name">
          <TypeWriter text="Devansh Paltewar" delay={1.2} speed={90} />
        </h1>

        <motion.p className="hero-summary" variants={itemVariants}>
          Results-driven professional with demonstrated expertise in machine learning,
          deep learning, NLP, and time-series forecasting. Committed to advancing applied
          AI research and delivering measurable analytical outcomes.
        </motion.p>

        <motion.div className="hero-actions" variants={itemVariants}>
          <motion.a
            href="#contact"
            className="btn btn-primary"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={16} /> Get in Touch
          </motion.a>
          <motion.a
            href="#about"
            className="btn btn-outline"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View Profile
          </motion.a>
        </motion.div>

        <motion.div className="hero-socials" variants={itemVariants}>
          <a href="https://www.linkedin.com/in/devansh-paltewar-981b8829a/" target="_blank" rel="noreferrer" className="hero-social-icon" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="https://github.com/DevanshPaltewar30" target="_blank" rel="noreferrer" className="hero-social-icon" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href="https://x.com/DPaltewar30" target="_blank" rel="noreferrer" className="hero-social-icon" aria-label="Twitter">
            <Twitter size={20} />
          </a>
          <a href="mailto:devanshpaltewar2005@gmail.com" className="hero-social-icon" aria-label="Mail">
            <Mail size={20} />
          </a>
        </motion.div>
      </motion.div>

    </div>

  </section>
);

export default Hero;
