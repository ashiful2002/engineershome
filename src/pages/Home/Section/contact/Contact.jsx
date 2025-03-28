import React from "react";
import Section from "../../../../Components/Section";
import Address from "./Address";
import PageTitle from "../../../../Components/Title/PageTitle";
import Soical from "./Soical";
import GetInTouch from "./GetInTouch";
import FormData from "./FormData";
import IframeMap from "./IframeMap";

const Contact = () => {
  return (
    <>
      <PageTitle heading="Contact" className="" />

      <Section classname="" id="contact">
        <div className="flex  gap-5 justify-center flex-col items-center md:flex-row">
          <GetInTouch />
          <IframeMap />

          {/* <FormData /> */}
        </div>
      </Section>
    </>
  );
};

export default Contact;
