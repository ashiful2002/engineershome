import React from "react";
import Hero from "./Section/Hero";
import About from "./Section/About";
import Engineers from "./Section/Engineers";
import Services from "./Section/Services";
import Projects from "./Section/Projects";
import Impact from "./Section/Impact";
import FAQ from "./Section/FAQ";
import Review from "./Section/Review";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Engineers />
      <Services />
      <Projects />
      <Impact />
      <FAQ />
      <Review />
    </div>
  );
};

export default Home;
