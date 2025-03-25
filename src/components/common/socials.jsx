import React from "react";
import { Link } from "react-router";
import { socialLinks } from "../../constants/socials.jsx";

const Socials = () => {
  const social = socialLinks.map((link, i) => (
    <li key={i}>
      <Link to={link.link}>{link.icon}</Link>
    </li>
  ));
  return <ul className="socials">{social}</ul>;
};

export default Socials;
