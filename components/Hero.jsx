import React from 'react';

const Hero = ({ minHeight = 400, className, children }) => {
  const classes = ['hero', 'text-white', 'p-4'];
  if (className) {
    classes.push(className);
  }

  return (
    <div className={classes.join(' ')} style={{ minHeight }}>
      {children}
    </div>
  );
};

export default Hero;
