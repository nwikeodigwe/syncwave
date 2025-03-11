import React from "react";
import { Routes as Router, Route } from "react-router";
import Layout from "./components/common/layout";
import Home from "./components/home/page";
import Gallery from "./components/gallery/page";
import Samples from "./components/samples/page";
import Booking from "./components/booking/page";
import Book from "./components/book/page";

const Routes = () => {
  return (
    <>
      <Router>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="samples" element={<Samples />} />
          <Route path="bookings">
            <Route index element={<Booking />} />
            <Route path=":id" element={<Book />} />
          </Route>
          <Route path="book" element={<Book />} />
        </Route>
      </Router>
    </>
  );
};

export default Routes;
