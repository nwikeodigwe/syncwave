import React from "react";
import Pricing from "./pricing";

const View = () => {
  return (
    <section className="samples">
      <div className="container max-w-screen-lg mx-auto flex flex-col gap-8 px-10">
        <div className="flex flex-col gap-4">
          <h1 className="title text-4xl text-center text-primary">Bookings</h1>
          <p className="text-center">
            Recording, mixing and mastering, always with a professional engineer
          </p>
        </div>
        <Pricing />
      </div>
    </section>
  );
};

export default View;
