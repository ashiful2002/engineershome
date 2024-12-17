import React from "react";
const Button = ({ className, children, onClick, href, secondory }) => {
  const BtnClasses =
    "bg-orange-400 border rounded  py-2 px-3 capitalize text-white hover:bg-black hover:text-white transition-all duration-300 ";
  const renderBtn = () => (
    <button className={` ${BtnClasses}  ${className} `} onClick={onClick}>
      {children}
    </button>
  );
  const renderLink = () => (
    <button
      className={` ${BtnClasses}  ${className}`}
      onClick={onClick}
      href={href}
    >
      {children}
    </button>
  );
  const renderSecondary = () => (
    <button 
    secondory={secondory}
      className={` ${BtnClasses}  ${className}`}
      onClick={onClick}
      href={href}
    >
      {children}
    </button>
  );

  if (href) {
    return renderLink();
  } else if (secondory) {
    return renderSecondary();
  } else {
    return renderBtn();
  }
  // return href ? renderLink() : renderBtn();
};

export default Button;
