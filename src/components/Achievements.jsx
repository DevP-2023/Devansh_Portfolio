import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen } from 'lucide-react';
import './Achievements.css';

const achievements = [
  {
    type: "Publication",
    title: "Research Paper Accepted at ICSCCC 2026 (IEEE Sponsored)",
    org: "NIT Jalandhar",
    desc: "Leveraging SCADA and AMR Integration for Electric Load Forecasting: A Multi-Horizon Deep Learning Approach for Smart Grid Operations.",
    icon: <BookOpen size={24} />
  },
  {
    type: "Achievement",
    title: "IndoML 2025 Finalist",
    org: "BITS Pilani",
    desc: "Reached the final round and secured acceptance for presenting research proposal at Sixth Indian Symposium on Machine Learning.",
    icon: <Award size={24} />
  },
  {
    type: "Hackathon",
    title: "HacKronyX Hackathon - 3rd Prize",
    org: "National Level",
    desc: "Developed AI Companion Quest, a smart gamified learning platform with personalized learning paths, RAG-based chatbot, and collaborative learning.",
    icon: <Award size={24} />
  },
  {
    type: "Hackathon",
    title: "Top 20 National Finalist",
    org: "IIT Kharagpur Data Science Hackathon 2025",
    desc: "Ranked 20/9,913+. Built an AI/ML model for research paper publishability prediction and conference matching using real-time pipelines and vector search.",
    icon: <Award size={24} />
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 50 } }
};

const Achievements = () => {
  return (
    <section id="achievements" className="achievements section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-gradient">Achievements & Publications</h2>
        </motion.div>
        
        <motion.div 
          className="achievements-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {achievements.map((item, index) => (
            <motion.div 
              key={index}
              className="achievement-card glass"
              variants={itemVariants}
              whileHover={{ scale: 1.02, x: 10, transition: { type: 'spring', stiffness: 300 } }}
            >
              <motion.div 
                className="achievement-icon"
                whileHover={{ rotate: 15, scale: 1.1 }}
              >
                {item.icon}
              </motion.div>
              <div className="achievement-content">
                <span className="achievement-type">{item.type}</span>
                <h3 className="achievement-title">{item.title}</h3>
                <h4 className="achievement-org">{item.org}</h4>
                <p className="achievement-desc">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
