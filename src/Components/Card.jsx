import React from "react";

const Card = ({ children }) => {
  return (
    <div className="bg-[#17372E] shadow rounded  p-4  text-yellow-300 text-center   transition-all duration-300 w-[93svw] md:w-[400px]">
      {children}
      </div>
  );
};

export default Card;
