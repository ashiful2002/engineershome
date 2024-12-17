import React from "react";
import Section from "../../Components/Section";
import PageTitle from "../../Components/Title/PageTitle";
import { projects } from "../../Constants/Index";

const Projects = () => {
  return (
    <Section classname="" id="projects">
      <PageTitle heading="Explore Our Recent Projects" />
      <div>
        <div>
          <div>
            {projects.map((item) => (
              <div key={item.id} className="bg-neutral-500 rounded my-3">
                <div>
                  <img src={item.image} alt={item.name} className="" />
                </div>
                <div className="p-2 ">
                  <h4 className="capitalize text-neutral-800">{item.name}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Projects;
