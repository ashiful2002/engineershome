import React from "react";
import Section from "../../Components/Title.jsx/Section";
import logo from "../../assets/EHC.png";
import { aboutSec } from "../../Constants/Index";
import { MdKeyboardCommandKey } from "react-icons/md";

const About = () => {
  return (
    <Section id="about">
      <div>
        <div>
          <div>
            <div>
              <img src={logo} alt="logo" srcset="" />
            </div>
            <div>
              {aboutSec.map((item) => (
                <div className="my-4" key={item.id}>
                  <h6 className="subHeading">{item.title}</h6>
                  <h1 className="font-bold my-4 heading text-green-700 bg-transparent">
                    {item.heading}
                  </h1>
                  <p className="text-neutral-600 tracking-tight p-2">{item.text}</p>
                  <span>
                  <h4 className="text-neutral-600 flex  gap-2 ">
                    {/* <span><MdKeyboardCommandKey /></span> */}
                    <p className="text-orange-300">Founder -  {item.founder}</p>
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
