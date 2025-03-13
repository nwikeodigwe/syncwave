import React from "react";
import { Link } from "react-router";

const Footer = ({ links }) => {
  const footerLinks = links.map((link, index) => (
    <Link
      key={index}
      to={link.href}
      className="mdborder-2 border-white text-white/90 md:text-white px-4 py-2 text-center hover:scale-105 transition-all duration-300 rounded-sm"
    >
      {link.text}
    </Link>
  ));
  return (
    <footer className="flex flex-col gap-7 items-center pt-14 pb-3  bg-primary">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">{footerLinks}</div>
      <div className="flex flex-col items-center gap-1">
        <p className="text-sm text-gray-200">
          GMB Studio, WoodStock, Capetown, 7625
        </p>
        <p className="text-sm font-light text-white/50">All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
