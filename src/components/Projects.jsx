import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';

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

const Projects = () => {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title text-gradient">Featured Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card glass"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
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
                <a href={project.link} className="project-link" aria-label="Github Repo">
                  <Github size={20} />
                </a>
                <a href={project.link} className="project-link" aria-label="Live Demo">
                  <ExternalLink size={20} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
