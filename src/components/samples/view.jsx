import React from "react";
import Samples from "./samples";
import Read from "./read";
import Player from "./player";

const View = () => {
  return (
    <section className="samples">
      <div className="container max-w-screen-lg mx-auto flex flex-col gap-8">
        <h1 className="title text-4xl text-center">Samples</h1>
        <Read />
        <Samples />
        <p>
          We are excited for the future of content that will take us to a whole
          new level of creativity and innovation, allowing us to create, produce
          and facilitate some of the best content out there!
        </p>
      </div>
    </section>
  );
};

export default View;
