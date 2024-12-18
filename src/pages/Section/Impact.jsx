import React from "react";
import Section from "../../Components/Section";
import PageTitle from "../../Components/Title/PageTitle";
import { Impacts } from "../../Constants/Index";

const Impact = () => {
  return (
    <Section>
      <PageTitle heading="Impact" />
      <div>
        <div>
          <div className="border grid grid-cols-1 md:grid-cols-2 ">
            {Impacts.map((item) => (
              <div
                key={item.id}
                className="border  w-3/4 mx-auto my-4 bg-slate-800 hover:bg-slate-600 rounded-2xl p-5 text-white  transition-all"
              >
                <p className="text-5xl font-bold text-center">{item.number}</p>
                <p className="text-xl capitalize text-center">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Impact;
