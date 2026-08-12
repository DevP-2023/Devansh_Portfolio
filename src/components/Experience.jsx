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

const Experience = () => {
  return (
    <section id="experience" className="experience section">
      <div className="container">
        <h2 className="section-title text-gradient">Professional Experience</h2>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="timeline-marker">
                <div className="timeline-icon">
                  <Briefcase size={16} />
                </div>
              </div>
              
              <div className="timeline-content glass">
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
