 import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './CustomCursor.css';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      // Check if hovering over clickable elements
      if (
        e.target?.tagName?.toLowerCase() === 'a' ||
        e.target?.tagName?.toLowerCase() === 'button' ||
        (e.target?.closest && e.target.closest('a')) ||
        (e.target?.closest && e.target.closest('button')) ||
        (e.target?.classList && e.target.classList.contains('clickable')) ||
        (e.target?.closest && e.target.closest('.clickable'))
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
      opacity: 1,
      backgroundColor: 'rgba(29, 78, 216, 0.05)',
      border: '1px solid rgba(29, 78, 216, 0.4)'
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      scale: 1.5,
      opacity: 0.8,
      backgroundColor: 'rgba(29, 78, 216, 0.1)',
      border: '1px solid rgba(29, 78, 216, 0.8)'
    },
    click: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 0.7,
      opacity: 1,
      backgroundColor: 'rgba(29, 78, 216, 0.4)',
      border: '1px solid rgba(29, 78, 216, 0.8)'
    }
  };

  return (
    <>
      <motion.div
        className="custom-cursor"
        variants={variants}
        animate={isClicking ? "click" : isHovering ? "hover" : "default"}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 28,
          mass: 0.5
        }}
      />
      <motion.div
        className="custom-cursor-dot"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isClicking ? 0 : (isHovering ? 0 : 1),
          opacity: isClicking ? 0 : (isHovering ? 0 : 1)
        }}
        transition={{
          type: 'tween',
          ease: 'linear',
          duration: 0.1
        }}
      />
    </>
  );
};

export default CustomCursor;
