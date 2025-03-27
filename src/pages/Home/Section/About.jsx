import React from "react";
import Section from "../../../Components/Section";
import logo from "../../../assets/EHC.png";
import { aboutSec } from "../../../Constants/Index";
 
const About = () => {
  return (
    <Section id="about" classname="">
      <div>
        <div className="container">
          <div className="flex  rounded flex-col  justify-around md:flex-row-reverse ">
            <div className="md:w-3/5">
              <img src={logo} alt="logo" className="w-full" />
            </div>
            <div className="">
              {aboutSec.map((item) => (
                <div className="my-4 text-ednd" key={item.id}>
                  {/* <h6 className="subHeading text-secondary-color">{item.title}</h6> */}
                  <h1 className="font-bold my-4 heading inline  text-primary-color bg-transparent ">
                    {item.heading}
                  </h1>
                  <p className="text-neutral-600  tracking-tight p-2 text-justify">
                    {item.text}
                  </p>
                  <span>
                    <h4 className="text-neutral-600 gap-2 ">
                      {/* <span><MdKeyboardCommandKey /></span> */}
                      <p className="text-secondary-color text-end">
                        {item.founder} <span className="text text-[16px] text-primary-color font-mono">- Founder</span>
                      </p>
                    </h4>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
