import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import './Projects.css';

const Github = ({ size = 24 }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const projects = [
  {
    title: "Electricity Load Forecasting",
    description: "Developed deep learning time-series forecasting system using SCADA & AMR datasets. Forecasted electricity demand at multiple horizons (15 mins, 1 hour, 1 day).",
    stats: "MAPE: 0.61% (R²=0.995) at 15-min",
    tags: ["Deep Learning", "Time-Series", "SCADA", "Python"],
    link: "#"
  },
  {
    title: "AI-Enabled EEG Monitoring",
    description: "Built an end-to-end EEG analytics platform for neurological assessment and cognitive workload analysis using deep learning. Integrated a RAG framework for personalized recommendations.",
    stats: "",
    tags: ["Signal Processing", "Explainable AI", "LangChain", "Vector Search"],
    link: "#"
  },
  {
    title: "Personalized Learning Pathway",
    description: "Designed AI-driven learning paths based on quiz performance and goals. Integrated collaborative filtering for adaptive course recommendations.",
    stats: "",
    tags: ["Recommendation System", "Collaborative Filtering", "AI"],
    link: "#"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 50 } }
};

const Projects = () => {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-gradient">Featured Projects</h2>
        </motion.div>
        
        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card glass"
              variants={cardVariants}
              whileHover={{ 
                y: -15, 
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(6, 182, 212, 0.1), 0 10px 10px -5px rgba(6, 182, 212, 0.04)"
              }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                {project.stats && <p className="project-stats">{project.stats}</p>}
                
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
              
              <div className="project-links">
                <motion.a href={project.link} className="project-link" aria-label="Github Repo" whileHover={{ scale: 1.2, rotate: 5 }}>
                  <Github size={20} />
                </motion.a>
                <motion.a href={project.link} className="project-link" aria-label="Live Demo" whileHover={{ scale: 1.2, rotate: -5 }}>
                  <ExternalLink size={20} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
