import React from "react";
import Card from "../common/card";

const testimonials = [
  {
    name: "John Doe",
    username: "@john_doe",
    image: "https://placehold.co/100x100",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    name: "Nwike Odigwe",
    username: "@nwikeodigwe",
    image: "https://placehold.co/10x10",
    text: "I recorded my first podcast with them and it was a great experience. lorem. I recorded my first podcast with them and it was a great experience. lorem.",
  },
  {
    name: "John Doe",
    username: "@john_doe",
    image: "https://placehold.co/100x100",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },

  {
    name: "John Doe",
    username: "@john_doe",
    image: "https://placehold.co/100x100",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    name: "John Doe",
    username: "@john_doe",
    image: "https://placehold.co/100x100",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    name: "Nwike Odigwe",
    username: "@nwikeodigwe",
    image: "https://placehold.co/10x10",
    text: "I recorded my first podcast with them and it was a great experience. lorem. I recorded my first podcast with them and it was a great experience. lorem.",
  },
];

export default function Testimonial() {
  const testimonialCard = testimonials.map((testimonial, index) => (
    <div key={index} className="break-inside-avoid mb-8">
      <Card testimonial={testimonial} />
    </div>
  ));
  return (
    <section className="testimonial relative">
      <div className="testimonial-image"></div>
      <div className="container flex flex-col gap-24 py-16">
        <h1 className="text-4xl text-center text-primary">
          <span>What our clients say</span>
        </h1>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 z-20">
          {testimonialCard}
        </div>
      </div>
    </section>
  );
}
