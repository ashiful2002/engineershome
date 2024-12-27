import React from "react";
import Section from "../../../Components/Section";
import PageTitle from "../../../Components/Title/PageTitle";
import { cardDesc } from "../../../Constants/Index";
import Card from "../../../Components/Card";

const Engineers = () => {
  return (
    <Section id="experts">
      <PageTitle heading="our experts" />
      <div className="flex items-start justify-center md:flex-row flex-col gap-5 mt-4">
        {cardDesc.map((item) => (
          <div className="" key={item.id}>
            <Card>
              <img
                src={item.img}
                alt={item.name}
                className="rounded-full mx-auto my-2"
                width={110}
                height={50}
              />
              <h2 className="text-color-3">{item.name}</h2>
              <p className="text-md text-color-3">{item.degree}</p>

              <p className="text-color-3"> {item.post}</p>
              <p
                className="border  rounded-3xl inline px-4 py-1 font-semibold text-white"
                secondory="secondory"
              >
                {item.expert}
              </p>
              <div className="flex items-center justify-center gap-4 mt-4 ">
                {item.social.map(({ id, url, icon: Icon }) => (
                  <div key={id} className=" p-2">
                    {/* bg-white rounded-full */}
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      <Icon className="text-2xl text-color-3" />
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
