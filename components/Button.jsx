import React from 'react';

const Button = ({ children, ...props }) => {
  return (
    <button type="button" className="form-button" {...props}>
      {children}
    </button>
  );
};

export default Button;
