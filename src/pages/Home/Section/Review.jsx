import React from "react";
import Section from "../../../Components/Section";
import PageTitle from "../../../Components/Title/PageTitle";
import ACarousel from "../../../Components/Carousel";

const Review = () => {
  return (
    <Section id="testimonials">
      <PageTitle heading="Our Client's Reviews" />
      <div className="bg-green-700 rounded p-3">
      < ACarousel />
      </div>
    </Section>
  ); 
};
 
export default Review;
