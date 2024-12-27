import React from "react";

const Copyright = () => {
  const fullYear = new Date().getFullYear();
  return (
    <div>
      <div className="flex items-center justify-between flex-col md:flex-row ">
        <div className="">
          <p>
            Copyright &copy; {fullYear}{" "}
            <a href="#" className="no-underline text-green-600">
              Engineers Home
            </a>
          </p>
        </div>
        <div className="">
          <p>
            Developed By
            <a
              href="https://ashiful-islam.vercel.app/"
              target="_blank"
              className="ml-2 text-green-500"
            >
              mukto
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
