import React from "react";
import Hero from "./hero";
import About from "./about";
import Discount from "./discount";
import Testimonial from "./testimonial";
import Faq from "./faq";

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Discount />
      <Testimonial />
      <Faq />
    </main>
  );
};

export default Home;
