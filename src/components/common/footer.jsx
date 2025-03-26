import React from "react";
import { Link } from "react-router";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const Footer = ({ links }) => {
  const footerLinks = links.map((link, index) => (
    <Link
      key={index}
      to={link.href}
      className="mdborder-2 border-white text-white/90 md:text-white px-4 py-2 text-center hover:-translate-y-1 transition-all duration-300 rounded-sm"
    >
      {link.text}
    </Link>
  ));
  return (
    <footer>
      <motion.div
        className="flex flex-col gap-7 items-center pt-5 pb-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 uppercase font-thin">
          {footerLinks}
        </div>
        <div className="flex flex-col items-center gap-1">
          <p className="text-sm text-timberwolf-600">
            GMB Studio, WoodStock, Capetown, 7625
          </p>
          <p className="text-xs font-thing text-timberwolf-800">
            All rights reserved
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
