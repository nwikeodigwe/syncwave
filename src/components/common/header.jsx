import React, { useState, useEffect } from "react";
import { NavLink } from "react-router";
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { useLocation } from "react-router";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden"); // Cleanup on unmount
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = props.links.map((link, index) => (
    <NavLink
      key={index}
      to={link.href}
      className="md:p-1 text-center md:border-2 md:border-primary md:rounded-sm font-bold md:text-base text-2xl text-primary hover:-translate-y-1 transition-all duration-300 md:shadow-lg"
    >
      {link.text}
    </NavLink>
  ));

  return (
    <>
      <nav>
        <div className="container	mx-auto flex justify-between items-center px-4">
          <img
            src="/images/logo.png"
            alt="logo"
            className="md:h-24 md:w-32 h-20
          w-28 z-30 object-cover"
          />
          <div className="md:grid grid-cols-4 gap-4 hidden">{navLinks}</div>
          <div className="z-30 md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <IoClose className="text-4xl text-primary" />
            ) : (
              <GiHamburgerMenu className="text-4xl text-primary" />
            )}
          </div>
        </div>
      </nav>
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } absolute flex-col h-screen w-full bg-white/90 top-0 right-0 z-20 overflow-y-hidden`}
      >
        <div className="flex flex-col gap-20 items-center  mt-[200px] h-full">
          {navLinks}
        </div>
      </div>
    </>
  );
};

export default Header;
