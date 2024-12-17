import React from "react";
import Hero from "./Section/Hero";
import About from "./Section/About";
import Engineers from "./Section/Engineers";
import Services from "./Section/Services";
import Projects from "./Section/Projects";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Engineers />
      <Services />
      <Projects />
    </div>
  );
};

export default Home;
