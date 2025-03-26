import React from "react";
import { Link } from "react-router";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { socialLinks } from "../../constants/socials.jsx";

const Socials = () => {
  const social = socialLinks.map((link, i) => (
    <li key={i}>
      <Link to={link.link}>{link.icon}</Link>
    </li>
  ));
  return (
    <motion.ul
      className="socials"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      {social}
    </motion.ul>
  );
};

export default Socials;
