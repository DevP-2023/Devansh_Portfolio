import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import './Education.css';

const education = [
  {
    degree: "B-Tech - Computer Science and Engineering (Data Science)",
    institution: "St. Vincent Pallotti College of Engineering and Technology, Nagpur",
    period: "2023 – 2027",
  },
  {
    degree: "High School (11-12)",
    institution: "Jagadambha Junior Science College, Yavatmal",
    period: "2021 – 2023",
  },
  {
    degree: "Secondary School",
    institution: "Jawaharlal Darda English Medium School, Yavatmal",
    period: "2020 – 2021",
  },
];

const containerVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const cardVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
};

const Education = () => (
  <section id="education" className="education section">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55 }}
        className="section-header"
      >
        <span className="section-eyebrow">Background</span>
        <h2 className="section-title">Education</h2>
        <div className="section-divider" />
      </motion.div>

      <motion.div
        className="education-list"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {education.map((item, index) => (
          <motion.div
            key={index}
            className="education-item card"
            variants={cardVariants}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <div className="education-icon">
              <GraduationCap size={18} />
            </div>
            <div className="education-body">
              <h3 className="education-degree">{item.degree}</h3>
              <p className="education-institution">{item.institution}</p>
            </div>
            <span className="education-period">{item.period}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Education;
