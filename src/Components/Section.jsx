import React from "react";

const Section = ({ children, classname, id }) => {
  return (
    <div className={`p-4 my-3  mx-auto ${classname}`} id={id}>
      {/* container */}
      {children}
    </div>
  );
};

export default Section;
