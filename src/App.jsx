import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Background from './components/Background';
import CustomCursor from './components/CustomCursor';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <CustomCursor />
      <Loader isLoading={isLoading} />

      <AnimatePresence>
        {!isLoading && (
          <>
            <Background />
            <Navbar />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <main>
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Achievements />
                <Education />
                <Contact />
              </main>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
