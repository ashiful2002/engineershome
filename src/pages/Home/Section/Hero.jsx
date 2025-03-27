import React from "react";
import { heroDesc } from "../../../Constants/Index";
import Section from "../../../Components/Section";
import PageTitle from "../../../Components/Title/PageTitle";
import heroimage from "../../../assets/heroimage.png";
import Button from "../../../Components/Button";
import Soical from "./contact/Soical";
const Hero = () => {
  return (
    <Section id="home">
      <PageTitle className="bg-transparent text-green-700" />
      <div>
        <div>
          <div className="flex items-center rounded p-2 shadow-sm justify-around flex-col sm:flex-row gap-10 ">
            <div>
              <div className="rounded-full bg-secondary-color border">
                <img
                  className="rounded-full "
                  src={heroimage}
                  alt="engineers"
                  srcset=""
                />
              </div>
            </div>
            <div className="">
              {heroDesc.map((item) => (
                <div className="" key={item.id}>
                  <h1 className="subHeading text-4xl inline px-2">
                    {item.title}
                  </h1>
                  <p className="text-green-700 text-2xl my-4 font-semibold ">
                    {item.text}
                  </p>

                  <h1 className="font-semibold my-4 text-[20px] tracking-tight bangla-font2">
                    {item.heading}
                  </h1>
                  {/* <Button href="/#">{item.btnText}</Button> */}
                </div>
              ))}
              <Soical />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
