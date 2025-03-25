import React from "react";
import Pricing from "./pricing";

const View = () => {
  return (
    <section className="booking relative">
      <div className="container flex flex-col gap-4">
        <h1>
          <span>Bookings</span>
        </h1>
        <p className="text-center">
          Recording, mixing and mastering, always with a professional engineer
        </p>
        <Pricing />
      </div>
      <div className="skyline"></div>
    </section>
  );
};

export default View;
