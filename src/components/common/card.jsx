import React from "react";

const Card = ({ testimonial }) => {
  return (
    <div className="inline-block w-full shadow-md rounded-sm bg-primary/10 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
      <figure className="p-8 text-sm leading-6 flex flex-col">
        <blockquote className="font-bold flex-grow">
          <p>"{testimonial.text}"</p>
        </blockquote>

        <figcaption className="flex items-center gap-x-4 mt-6">
          <div>
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="h-10 w-10 rounded-full border-2 border-secondary"
            />
          </div>
          <div className="flex flex-col">
            <p className="font-extrabold">{testimonial.name}</p>
            <p className="text-sm">{testimonial.username}</p>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default Card;
