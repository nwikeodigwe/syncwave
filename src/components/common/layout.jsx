import { Outlet } from "react-router";
import Header from "./header";
import Footer from "./footer";
import Socials from "./socials";
const links = [
  { href: "/", text: "Home" },
  { href: "/gallery", text: "Gallery" },
  { href: "/samples", text: "Samples" },
  { href: "/bookings", text: "Bookings" },
];
const Layout = () => {
  return (
    <>
      <Header links={links} />
      <Outlet />
      <Socials />
      <Footer links={links} />
    </>
  );
};

export default Layout;
