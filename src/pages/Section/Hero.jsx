import React from "react";
import { heroDesc } from "../../Constants/Index";
import Section from "../../Components/Section";
import PageTitle from "../../Components/Title/PageTitle";
import heroimage from "../../assets/heroimage.png";
import hero2 from "../../assets/hero2.png";
import Button from "../../Components/Button";
const Hero = () => {
  return (
    <Section id="home">
      <PageTitle className="bg-transparent text-green-700" />
      <div>
        <div>
          <div className="flex items-center rounded p-2 shadow-sm justify-around flex-col sm:flex-row gap-10 ">
            <div>
              <div className="rounded-full bg-orange-400 border">
                <img
                  className="rounded-full "
                  src={heroimage}
                  alt=""
                  srcset=""
                />
              </div>
            </div>
            <div className="">
              {heroDesc.map((item) => (
                <div className="" key={item.id}>
                  <h6 className="subHeading">{item.title}</h6>
                  <h1 className="font-bold my-4 tracking-tight">
                    {item.heading}
                  </h1>
                  <p className="text-neutral-600">{item.text}</p>
                  <Button href="/#">{item.btnText}</Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
