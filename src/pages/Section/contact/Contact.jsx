import React from "react";
import Section from "../../../Components/Section";
import Address from "./Address";
import Soical from "./Soical";
import PageTitle from "../../../Components/Title/PageTitle";

const Contact = () => {
  return (
    <Section classname="" id="contact">
      < PageTitle heading="Contact" className="bg-transparent text-green-700  mb-5" />
      <Address />
    </Section>
  );
};

export default Contact;
