import React from "react";
import Section from "../../../Components/Section";
import PageTitle from "../../../Components/Title/PageTitle";
import { services } from "../../../Constants/Index";

const Services = () => {
  return (
    <Section className="bg-slate-400 rounded">
      <div id="services">
        <PageTitle heading="Services" />
        <div> 
          <p className="text-xs text-center">
            Call or visit our office asap Verbal Consultation is totally free...
          </p>
          <div>
            <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
              {services.map((item) => (
                <div id={item.id} className=" shadow rounded">
                  <div>
                    <img src={item.image} alt="image" className="rounded-xl " />
                  </div>
                  <h4 className="inline  bg-secondary-color text-white capitalize rounded-md px-4 ">
                    {item.text}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;
