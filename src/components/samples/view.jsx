import React from "react";
import Samples from "./samples";
import Read from "./read";
import Player from "./player";

const View = () => {
  return (
    <section className="samples relative">
      <div className="skyline"></div>
      <div className="container flex flex-col gap-8">
        <h1 className="text-4xl text-center relative">
          <span>Samples</span>
        </h1>
        <Read />
        <Samples />
        <p className="text-center">
          We are excited for the future of content that will take us to a whole
          new level of creativity and innovation, allowing us to create, produce
          and facilitate some of the best content out there!
        </p>
      </div>
    </section>
  );
};

export default View;
