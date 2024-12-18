import React from "react";
import { contactDetails } from "../../../Constants/Index";
import { IoTennisball } from "react-icons/io5";

const Address = () => {
  return (
    <div>
      <div className="flex items-start justify-start">
        {contactDetails.map((item) => (
          <div
            key={item.id}
            className=" flex items-center justify-center gap-5"
          >
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <img
                src={item.icon}
                alt=""
                srcset=""
                width={20}
                className="mx-5"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Address;
