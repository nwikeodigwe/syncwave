import React from "react";
import Form from "./form";
import Contact from "./contact";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const View = () => {
  return (
    <section className="book relative">
      <div className="skyline"></div>
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <h1 className="text-4xl text-center mb-4">
          <span>Book session</span>
        </h1>
        <Form />
        <Contact />
      </motion.div>
    </section>
  );
};

export default View;
