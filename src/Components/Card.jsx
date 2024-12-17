import React from "react";

const Card = ({ children }) => {
  return (
    <div className="bg-green-900 shadow rounded  p-4 text-yellow-300 text-center   transition-all duration-300 w-[370px]">
      {children}
      </div>
  );
};

export default Card;
