import React from "react";

const Card = ({ children }) => {
  return (
    <div className="bg-green-900  rounded  p-4 text-yellow-300 text-center  w-[370px]">
      {children}
      </div>
  );
};

export default Card;
