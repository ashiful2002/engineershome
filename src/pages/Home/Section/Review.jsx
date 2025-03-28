import React from "react";
import Section from "../../../Components/Section";
import PageTitle from "../../../Components/Title/PageTitle";
import ACarousel from "../../../Components/Carousel";

const Review = () => {
  return (
    <>
      <PageTitle heading="Our Happy Clients" />

      <Section id="testimonials">
        <div className="bg-green-700 rounded p-3">
          <ACarousel />
        </div>
      </Section>
    </>
  );
};

export default Review;
