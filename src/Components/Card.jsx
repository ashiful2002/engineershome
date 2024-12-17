import React from "react";

const Card = ({ children }) => {
  return (
    <div className="bg-green-900  rounded my-4 text-yellow-300 text-center p-3 w-[400px]">
      {children}
      </div>
  );
};

export default Card;
