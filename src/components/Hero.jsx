import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Mail } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero section">
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h2 className="greeting">Hi, I'm</h2>
          <h1 className="name text-gradient">Devansh Paltewar</h1>
          <h3 className="title">AI/ML Professional</h3>
          <p className="summary">
            Results-driven AI/ML professional with hands-on experience in machine learning, deep learning, NLP,
            and time-series forecasting. Focused on advancing applied AI research and solving complex analytical challenges.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              <Mail size={18} /> Contact Me
            </a>
            {/* <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn btn-outline">
              <FileText size={18} /> Resume
            </a> */}
          </div>
        </motion.div>
        
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="blob-shape glass">
            {/* Abstract shape or image placeholder for premium feel */}
            <div className="inner-glow"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
