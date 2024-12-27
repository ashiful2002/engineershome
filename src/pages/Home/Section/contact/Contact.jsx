import React from "react";
import Section from "../../../../Components/Section";
import Address from "./Address";
import PageTitle from "../../../../Components/Title/PageTitle";
import Soical from "./Soical";
import GetInTouch from "./GetInTouch";

const Contact = () => {
  return (
    <Section classname="" id="contact">
      <PageTitle heading="Contact" className=" p-3 mb-5" />
      <div className="flex items-start gap-5 justify-center flex-col  md:flex-row">
        <GetInTouch />
        <Soical />
      </div>
    </Section>
  );
};

export default Contact;
