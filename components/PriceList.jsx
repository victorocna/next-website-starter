import React from 'react';

const PriceList = ({ title, price, children }) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center">
        <div className="text-lg">{title}</div>
        <div className="flex-1 border-t-2 border-dashed border-secondary mx-4"></div>
        <div className="font-semibold text-lg text-primary">{price}</div>
      </div>
      {children}
    </div>
  );
};

export default PriceList;
