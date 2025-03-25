import React from "react";
import Form from "./form";
import Contact from "./contact";

const View = () => {
  return (
    <section className="book relative">
      <div className="skyline"></div>
      <div className="container">
        <h1 className="text-4xl text-center mb-4">
          <span>Book session</span>
        </h1>
        <Form />
        <Contact />
      </div>
    </section>
  );
};

export default View;
