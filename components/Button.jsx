import React from 'react';

const Button = ({ variant = 'primary', children, ...props }) => {
  const className = `form-button form-button-${variant}`;

  return (
    <button type="button" className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;
