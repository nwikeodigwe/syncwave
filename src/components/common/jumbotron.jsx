import React from "react";
import { useLocation, Link } from "react-router";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const Jumbotron = () => {
  let links = [{ href: "/", text: "Home" }];
  function formatPathname(pathname) {
    const path = pathname.split("/");

    path.forEach((segment, index) => {
      links.push({
        href: `${path.slice(0, index + 1).join("/")}`,
        text: segment
          .replace(/_/g, " ")
          .split(" ")
          .map(
            (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          )
          .join(" "),
      });
    });

    return links;
  }
  const location = useLocation();
  links = formatPathname(location.pathname);
  const jumbolinks = links.map((link, index) => (
    <li key={index}>
      <Link
        to={link.href}
        className={`${index === links.length - 1 ? "text-chrysler-blue" : ""}`}
      >
        {link.text}
      </Link>
    </li>
  ));

  return (
    <section className="jumbotron">
      <div className="container">
        <motion.ul
          className="flex items-center gap-4 text-sm uppercase font-[300]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {jumbolinks}
        </motion.ul>
      </div>
    </section>
  );
};

export default Jumbotron;
