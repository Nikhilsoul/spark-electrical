import React from "react";

import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Values from "../components/Values";
import Stats from "../components/Stats";
import ClientsAndBrands from "../components/ClientsAndBrands";
import Contact from "../components/Contact";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Stats />
      <ClientsAndBrands />
      <Values />
      <Contact />
    </>
  );
};

export default Home;