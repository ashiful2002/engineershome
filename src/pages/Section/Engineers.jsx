import React from "react";
import Section from "../../Components/Section";
import PageTitle from "../../Components/Title/PageTitle";
import { cardDesc } from "../../Constants/Index";
import Card from "../../Components/Card";

const Engineers = () => {
  return (
    <Section>
      <PageTitle heading="our experts" />
      <div>
        {cardDesc.map((item) => (
          <div className="flex items-center justify-center" key={item.id}>
            <Card>
              <img
                src={item.img}
                alt={item.name}
                className="rounded-full mx-auto "
                width={110}
                height={50}
              />
              <h2 className="">{item.name}</h2>
              <p className="text-md">{item.degree}</p>

              <p>{item.post}</p>
              <p
                className="border rounded-3xl inline px-4 py-1 font-semibold text-white"
                secondory="secondory"
              >
                {item.expert}
              </p>
              <div className="flex items-center justify-center gap-4 mt-4 ">
                {item.social.map((item) => (
                  <div key={item.id} className="bg-white rounded-full p-2">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={item.icon}
                        alt={item.id}
                        width={20}
                        className=""
                      />
                    </a>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Engineers;
