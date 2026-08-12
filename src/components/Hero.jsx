import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import './Hero.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.2 }
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
          {/* Avengers status badge */}
          <motion.div className="hero-badge" variants={itemVariants}>
            <span className="hero-badge-dot" />
            avengers.status = "active"
          </motion.div>

          <motion.h2 className="greeting" variants={itemVariants}>Hi, I'm</motion.h2>
          <motion.h1 className="name text-gradient" variants={itemVariants}>Devansh Paltewar</motion.h1>
          <motion.h3 className="title" variants={itemVariants}>AI / ML Professional</motion.h3>
          <motion.p className="summary" variants={itemVariants}>
            Results-driven AI/ML professional with hands-on experience in machine learning, deep learning, NLP,
            and time-series forecasting. Focused on advancing applied AI research and solving complex analytical challenges.
          </motion.p>
          <motion.div className="hero-buttons" variants={itemVariants}>
            <a href="#contact" className="btn btn-primary">
              <Mail size={18} /> Contact Me
            </a>
            <a href="#about" className="btn btn-outline">
              Explore Skills
            </a>
          </motion.div>
        </motion.div>

        {/* Arc Reactor Visual */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, type: 'spring', bounce: 0.3 }}
        >
          <div className="arc-reactor">
            <div className="arc-ring arc-ring-4" />
            <div className="arc-ring arc-ring-1" />
            <div className="arc-ring arc-ring-2" />
            <div className="arc-ring arc-ring-3" />
            {/* Orbiting dots */}
            <div className="arc-orbit">
              <div className="arc-dot arc-dot-1" />
              <div className="arc-dot arc-dot-2" />
              <div className="arc-dot arc-dot-3" />
              <div className="arc-dot arc-dot-4" />
            </div>
            {/* Arc reactor core */}
            <div className="arc-core-hero">⚡</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
