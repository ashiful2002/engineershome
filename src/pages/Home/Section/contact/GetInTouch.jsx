import React from "react";
import { getInTouch } from "../../../../Constants/Index";

const GetInTouch = () => {
  return (
    <div className="">
      <h4 className="subHeading bg-transparent text-secondary-color mb-4">Get in touch</h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {getInTouch.map(({ icon: Icon, title, id, desc, li1, li2, url,name }) => (
          <>
            <a
              key={id}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 justify-center flex-col  no-underline text-black capitalize"
            >
              <Icon className="text-[70px]  text-center bg-slate-500 rounded-full text-white p-2 " />
              <h5>{title}</h5>
              <h6>{name}</h6>
              <p>{desc}</p>
              <>
                {li2 && (
                  <ul className="">
                    <li>{li1}</li>
                    <li>{li2}</li>
                  </ul>
                )}
              </>
            </a>
          </>
        ))}
      </div>
    </div>
  );
};

export default GetInTouch;
