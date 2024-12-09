import React from "react";

const Footer = () => {
  const fullYear = new Date().getFullYear();
  return (
    <div className="bg-neutral-700 text-white">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <p>
             Copyright &copy; {fullYear} <span>Engineers Home</span>
            </p>
          </div>
          <p>
            Developed By
            <a href="https://ashiful-islam.vercel.app/" target="_blank" className="ml-2 text-green-500">
              mukto
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
