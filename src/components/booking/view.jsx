import React from "react";
import Pricing from "./pricing";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const View = () => {
  return (
    <section className="booking relative">
      <motion.div
        className="container flex flex-col gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <h1>
          <span>Bookings</span>
        </h1>
        <p className="text-center">
          Recording, mixing and mastering, always with a professional engineer
        </p>
        <Pricing />
      </motion.div>
      <div className="skyline"></div>
    </section>
  );
};

export default View;
