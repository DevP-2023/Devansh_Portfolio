import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import './Experience.css';

const experiences = [
  {
    role: "Technical Member (Machine Learning)",
    company: "ALDC - Area Load Despatch Centre, MSETCL (MAHATRANSCO)",
    period: "March 2025 - 2026",
    description: [
      "Developed deep learning models for electricity load forecasting using SCADA and AMR data.",
      "Processed 100,000+ records through preprocessing and missing-value handling.",
      "Collaborated with ALDC engineers to validate forecasting models."
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 60 } }
};

const Experience = () => {
  return (
    <section id="experience" className="experience section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-gradient">Professional Experience</h2>
        </motion.div>
        
        <motion.div 
          className="timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="timeline-item"
              variants={itemVariants}
            >
              <div className="timeline-marker">
                <motion.div 
                  className="timeline-icon"
                  whileHover={{ scale: 1.2, rotate: 360, transition: { duration: 0.6 } }}
                >
                  <Briefcase size={16} />
                </motion.div>
              </div>
              
              <motion.div 
                className="timeline-content glass"
                whileHover={{ x: 10, transition: { type: 'spring', stiffness: 300 } }}
              >
                <div className="timeline-header">
                  <div>
                    <h3>{exp.role}</h3>
                    <h4 className="company">{exp.company}</h4>
                  </div>
                  <span className="period">{exp.period}</span>
                </div>
                
                <ul className="timeline-details">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
