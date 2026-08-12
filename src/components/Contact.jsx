import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Phone } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <motion.div 
          className="contact-card glass"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="contact-content">
            <h2 className="section-title text-gradient" style={{ textAlign: 'left', marginBottom: '1rem' }}>Let's Connect</h2>
            <p className="contact-desc">
              I'm always open to discussing AI/ML research, exciting projects, and new opportunities. 
              Feel free to reach out!
            </p>
            
            <div className="contact-info">
              <a href="mailto:devanshpaltewar2005@gmail.com" className="contact-item">
                <div className="contact-icon"><Mail size={20} /></div>
                <span>devanshpaltewar2005@gmail.com</span>
              </a>
              <a href="tel:+919579337727" className="contact-item">
                <div className="contact-icon"><Phone size={20} /></div>
                <span>+91 9579337727</span>
              </a>
            </div>
          </div>
          
          <div className="social-links">
            <h3 className="social-title">Social Profiles</h3>
            <div className="social-icons">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="social-icon">
                <Github size={24} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
      
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Devansh Paltewar. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Contact;
