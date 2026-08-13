import React from 'react';
import './Background.css';

const Background = () => {
  return (
    <div className="bg-root" aria-hidden="true">
      {/* Subtle modern dot grid */}
      <div className="bg-grid" />
      
      {/* Animated soft gradient orbs */}
      <div className="bg-orb orb-1" />
      <div className="bg-orb orb-2" />
      <div className="bg-orb orb-3" />
      
      <div className="bg-vignette" />
    </div>
  );
};

export default Background;
