import React from "react";

const Form = () => {
  return (
    <div className="booking-form">
      <form action="">
        <p className="text-center">
          Fill out the form below to book a session with us.
        </p>
        <fieldset>
          <label htmlFor="name" className="font-bold">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="John Doe"
            className="p-4 border-1 border-gray-200 focus:border-primary rounded-sm"
          />
        </fieldset>
        <fieldset className="flex flex-col gap-4">
          <label htmlFor="name" className="font-bold">
            Email Address *
          </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="john.doe@example.com"
            className="p-4 border-1 border-gray-200 focus:border-primary rounded-sm"
          />
        </fieldset>
        <fieldset className="flex flex-col gap-4">
          <label htmlFor="name" className="font-bold">
            Phone Number
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="+27 612 345 678"
            className="p-4 border-1 border-gray-200 focus:border-primary rounded-sm"
          />
        </fieldset>
        <fieldset className="flex flex-col gap-4">
          <label htmlFor="name" className="font-bold">
            Number of Guests
          </label>
          <select name="guests" id="guests" className="font-bold">
            <option disabled>--select-number-of-guests--</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </fieldset>
        <fieldset className="flex flex-col gap-4">
          <label htmlFor="name" className="font-bold">
            Date
          </label>
          <input
            type="datetime-local"
            id="date"
            name="date"
            value="2018-07-22"
            min="2018-01-01"
            max="2018-12-31"
            className="p-4 border-1 border-gray-200 focus:border-primary rounded-sm"
          />
        </fieldset>
        <fieldset className="flex flex-col gap-4">
          <label htmlFor="name" className="font-bold">
            Duration
          </label>
          <select
            name="duration"
            id="duration"
            className="p-4 border-1 border-gray-200 focus:border-primary rounded-sm"
          >
            <option disabled>--select-duration--</option>
            <option value="2">2 hours</option>
            <option value="3">3 hours</option>
            <option value="4">4 hours</option>
            <option value="5">5 hours</option>
            <option value="6">6 hours</option>
            <option value="7">7 hours</option>
            <option value="8">8 hours</option>
            <option value="9">9 hours</option>
          </select>
        </fieldset>
        <fieldset className="flex flex-col gap-4">
          <p className="text-center text-sm text-gray-500">
            By clicking "Book", you agree to our terms and conditions
          </p>
          <button className=" w-full py-4 text-center text-white bg-chrysler-blue hover:bg-chrysler-blue/80 hover:-translate-y-1 transition-all duration-300 uppercase leading-relaxed rounded-sm text-xl z-20">
            Book Session
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default Form;
