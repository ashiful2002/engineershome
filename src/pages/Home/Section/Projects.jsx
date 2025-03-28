import React from "react";
import Section from "../../../Components/Section";
import PageTitle from "../../../Components/Title/PageTitle";
import { projects } from "../../../Constants/Index";

const Projects = () => {
  return (
    <>
      <PageTitle heading="Explore Our Recent Projects" />
      <Section classname="" id="projects">
        <div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
              {projects.map((item) => (
                <div
                  key={item.id}
                  className="bg-neutral-800 text-white rounded-b-md my-3"
                >
                  <div>
                    <img src={item.image} alt={item.name} className="" />
                  </div>
                  <div className="p-2 ">
                    <h4 className="capitalize ">{item.name}</h4>
                    <p className="text-secondary-color">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Projects;
