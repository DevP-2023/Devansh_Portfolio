import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Mail } from 'lucide-react';
import './Hero.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 50 } }
};

const Hero = () => {
  return (
    <section id="home" className="hero section">
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 className="greeting" variants={itemVariants}>Hi, I'm</motion.h2>
          <motion.h1 className="name text-gradient" variants={itemVariants}>Devansh Paltewar</motion.h1>
          <motion.h3 className="title" variants={itemVariants}>AI/ML Professional</motion.h3>
          <motion.p className="summary" variants={itemVariants}>
            Results-driven AI/ML professional with hands-on experience in machine learning, deep learning, NLP,
            and time-series forecasting. Focused on advancing applied AI research and solving complex analytical challenges.
          </motion.p>
          <motion.div className="hero-buttons" variants={itemVariants}>
            <a href="#contact" className="btn btn-primary">
              <Mail size={18} /> Contact Me
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.5, type: 'spring', bounce: 0.4 }}
        >
          <div className="blob-shape glass">
            <div className="inner-glow"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
