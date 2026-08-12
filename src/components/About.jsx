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

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-gradient">Technical Arsenal</h2>
          
          <div className="skills-grid">
            {skills.map((skillGroup, index) => (
              <motion.div 
                key={index}
                className="skill-card glass"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="skill-icon-wrapper">
                  {skillGroup.icon}
                </div>
                <h3>{skillGroup.category}</h3>
                <div className="skill-tags">
                  {skillGroup.items.map((item, i) => (
                    <span key={i} className="skill-tag">{item}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
