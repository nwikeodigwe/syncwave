import { Outlet } from "react-router";
import Header from "./header";
import Footer from "./footer";

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
      <Footer links={links} />
    </>
  );
};

export default Layout;
