import React from "react";
import Samples from "./samples";
import Read from "./read";
import Player from "./player";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const View = () => {
  return (
    <section className="samples relative">
      <div className="skyline"></div>
      <motion.div
        className="container flex flex-col gap-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
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
      </motion.div>
    </section>
  );
};

export default View;
