import React from 'react';

const ActionBox = ({ image, children }) => {
  return (
    <div className="flex flex-col">
      <div className="cover"></div>
      <div className="p-4 bg-gray-300">{children}</div>
      <style jsx>{`
        .cover {
          background-image: url(${image});
        }
      `}</style>
    </div>
  );
};

export default ActionBox;
