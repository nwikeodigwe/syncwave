import React from "react";
import Form from "./form";
import Contact from "./contact";

const View = () => {
  return (
    <section className="book">
      <div className="container flex flex-col gap-16 max-w-screen-lg mx-auto">
        <Form />
        <Contact />
      </div>
    </section>
  );
};

export default View;
