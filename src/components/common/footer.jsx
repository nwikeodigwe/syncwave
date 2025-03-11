import React from "react";

const Footer = (props) => {
  const navLinks = props.links.map((link, index) => (
    <li key={index}>
      <a href={link.href} className="btn btn-white">
        {link.text}
      </a>
    </li>
  ));
  return (
    <footer className="footer bg-primary">
      <div>
        <ul className="flex gap-4">{navLinks}</ul>
      </div>
      <div className="flex flex-col items-center gap-1">
        <p className="text-sm text-gray-200">
          GMB Studio, WoodStock, Capetown, 7625
        </p>
        <p className="text-sm font-light text-gray-500">All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
