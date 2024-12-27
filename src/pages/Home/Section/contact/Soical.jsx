import React from "react";
import { contactDetails } from "../../../../Constants/Index";

const Soical = () => {
  return (
    <div>
      <h3 className="subHeading bg-transparent text-secondary-color mb-4">our social midea</h3>
      <div className="flex items-start justify-start">
        {contactDetails.map(({ icon: Icon, url, id }) => (
          <div key={id} className=" ">
            <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-3 " >
              <Icon className="mx-4 text-2xl  text-primary-color" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Soical;
