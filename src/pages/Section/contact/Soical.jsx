import React from "react";
import facebook from "../../../assets/icon/email.svg";
import { FaCediSign } from "react-icons/fa6";

const Soical = () => {
  return (
    <div>
      <div>
        <h4 className="capitalize">Social media</h4>
      </div>
      <div className="">
        <a
          href="http://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start justify-start "
        >
          {/* <img src={facebook} alt="" srcset="" className='bg-red-600' /> */}
          
        </a>
      </div>
    </div>
  );
};

export default Soical;
