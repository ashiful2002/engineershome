import React from "react";
import Section from "../../../Components/Section";
import PageTitle from "../../../Components/Title/PageTitle";
import { Impacts } from "../../../Constants/Index";
import { FaFileImport } from "react-icons/fa";

const Impact = () => {
  return (
    <Section>
      <PageTitle heading="Impact" />
      <div>
        <div>
          <div className="border grid grid-cols-1 md:grid-cols-4 ">
            {Impacts.map(({ id, number, text, icon: Icon }) => (
              <div
                key={id}
                className="border w-[90%] mx-auto my-2 bg-slate-800 hover:bg-slate-600 rounded-2xl p-5 text-white  transition-all"
              >
                <Icon className="text-5xl mx-auto my-4" />
                <p className="text-5xl font-bold text-center">{number}</p>
                <p className="text-xl capitalize text-center">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Impact;
