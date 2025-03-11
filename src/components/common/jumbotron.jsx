import React from "react";
import { useLocation, Link } from "react-router";

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
      <Link to={link.href}>{link.text}</Link>
    </li>
  ));

  return (
    <section className="jumbrotron h-16 bg-[#f0f0f0]">
      <div className="container max-w-screen-lg mx-auto">
        <ul className="flex items-center gap-4 text-sm font-bold">
          {jumbolinks}
        </ul>
      </div>
    </section>
  );
};

export default Jumbotron;
