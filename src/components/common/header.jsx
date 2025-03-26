import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { useLocation } from "react-router";
import { NavLink, Link } from "react-router";
import { socialLinks } from "../../constants/socials.jsx";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = props.links.map((link, i) => (
    <NavLink
      key={i}
      to={link.href}
      className={`${
        location.pathname == link.href ? "nav-link--active" : "nav-link"
      }`}
    >
      {link.text}
    </NavLink>
  ));

  const social = socialLinks.map((link, index) => (
    <Link key={index} to={link.href}>
      {link.icon}
    </Link>
  ));

  return (
    <>
      <header className="z-100">
        <div className="container">
          <div className="logo">
            <h1>
              gmb <span>syncwave</span>
            </h1>
          </div>
          <nav className="desktop hidden">
            <div className="nav-links">{navLinks}</div>
          </nav>
          <button
            className="md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <IoClose /> : <GiHamburgerMenu />}
          </button>
        </div>
      </header>
      {isOpen && (
        <div className="nav-backdrop">
          <nav className="mobile block md:hidden relative">
            <div className="nav-links">{navLinks}</div>
            <div className="nav-socials">{social}</div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
