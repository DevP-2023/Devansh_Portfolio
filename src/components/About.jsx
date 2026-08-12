import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, BrainCircuit, LineChart } from 'lucide-react';
import './About.css';

const skills = [
  {
    category: "Languages & Tools",
    icon: <Code2 size={24} />,
    items: ["Python", "SQL", "C++", "C", "Git", "Docker"]
  },
  {
    category: "Machine Learning & DL",
    icon: <BrainCircuit size={24} />,
    items: ["Supervised Learning", "Deep Learning", "CNN", "RNN", "NLP", "Transformers", "LLMs", "Computer Vision"]
  },
  {
    category: "Frameworks & Libraries",
    icon: <Database size={24} />,
    items: ["PyTorch", "TensorFlow", "Hugging Face", "LangChain", "LangGraph", "Scikit-learn"]
  },
  {
    category: "Math & Statistics",
    icon: <LineChart size={24} />,
    items: ["Probability", "Linear Algebra", "Inferential Statistics", "Data Structures"]
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
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: 'spring', stiffness: 50 } 
  }
};

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">// skill_modules.py</span>
          <h2 className="section-title text-gradient">Technical Arsenal</h2>
        </motion.div>
          
        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skills.map((skillGroup, index) => (
            <motion.div 
              key={index}
              className="skill-card glass"
              variants={cardVariants}
              whileHover={{ scale: 1.05, rotate: 1, transition: { duration: 0.2 } }}
            >
              <div className="skill-icon-wrapper">
                {skillGroup.icon}
              </div>
              <h3>{skillGroup.category}</h3>
              <div className="skill-tags">
                {skillGroup.items.map((item, i) => (
                  <motion.span 
                    key={i} 
                    className="skill-tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + (i * 0.05), type: 'spring' }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(6, 182, 212, 0.2)' }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
