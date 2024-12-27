import React from "react";
import Section from "../../../Components/Section";
import logo from "../../../assets/EHC.png";
import { aboutSec } from "../../../Constants/Index";
 
const About = () => {
  return (
    <Section id="about" classname="">
      <div>
        <div>
          <div className="flex border rounded flex-col md:flex-row justify-around ">
            <div className="">
              <img src={logo} alt="logo" srcset="" />
            </div>
            <div>
              {aboutSec.map((item) => (
                <div className="my-4 text-end" key={item.id}>
                  <h6 className="subHeading text-secondary-color">{item.title}</h6>
                  <h1 className="font-bold my-4 heading inline text-primary-color bg-transparent">
                    {item.heading}
                  </h1>
                  <p className="text-neutral-600 tracking-tight p-2 text-justify">
                    {item.text}
                  </p>
                  <span>
                    <h4 className="text-neutral-600 gap-2 ">
                      {/* <span><MdKeyboardCommandKey /></span> */}
                      <p className="text-secondary-color">
                        Founder - {item.founder}
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
