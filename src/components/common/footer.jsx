import React from "react";
import { Link } from "react-router";

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
    <footer className="footer flex flex-col gap-7 items-center pt-5 pb-3">
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
    </footer>
  );
};

export default Footer;
