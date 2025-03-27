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
          {/* <p className=" text-center">some of our services are here or</p>{" "} */}
          {/* <br /> Call or visit our office asap verbal consultation is totally
          free... */}
          <div>
            <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
              {services.map((item) => (
                <div id={item.id} className=" shadow rounded pb-10">
                  <div>
                    <img src={item.image} alt="image" className="rounded-xl " />
                  </div>
                  <h4 className="inline  bg-secondary-color  py-2   text-white capitalize rounded-md px-4 ">
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
