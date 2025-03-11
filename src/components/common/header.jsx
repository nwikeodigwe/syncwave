import React from "react";
import { NavLink } from "react-router";

const Header = (props) => {
  const navLinks = props.links.map((link, index) => (
    <NavLink key={index} to={link.href} className="btn btn-transparent ">
      {link.text}
    </NavLink>
  ));
  return (
    <nav>
      <div className="flex justify-between items-center px-10">
        <img src="/images/logo.png" alt="logo" className="h-24 w-32" />
        <div className="flex gap-4">{navLinks}</div>
      </div>
    </nav>
  );
};

export default Header;
