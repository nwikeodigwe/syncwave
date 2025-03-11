import React from "react";

const Card = ({ testimonial }) => {
  return (
    <div className="inline-block w-full shadow-md rounded-2xl b">
      <figure className="g-gray/10 text-primary p-8 text-sm leading-6 flex flex-col">
        <blockquote className="text-primary flex-grow">
          <p>"{testimonial.text}"</p>
        </blockquote>

        <figcaption className="flex items-center gap-x-4 mt-6">
          <div>
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="h-10 w-10 rounded-full border-2 border-primary"
            />
          </div>
          <div className="flex flex-col">
            <p className="font-bold">{testimonial.name}</p>
            <p className="text-sm">{testimonial.username}</p>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default Card;
