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
    <section className="testimonial mt-20">
      <div className="container max-w-screen-lg mx-auto flex flex-col gap-24">
        <h1 className="title text-4xl text-center text-primary">
          What our clients say
        </h1>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8">
          {testimonialCard}
        </div>
      </div>
    </section>
  );
}
