import React from 'react';

const Hero = ({ minHeight = 400, children }) => {
  return (
    <div className="hero text-white p-4" style={{ minHeight }}>
      {children}
    </div>
  );
};

export default Hero;
