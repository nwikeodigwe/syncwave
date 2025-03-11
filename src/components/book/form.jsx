import React from "react";

const Form = () => {
  return (
    <div className="w-1/2 mx-auto">
      <form action="" className="flex flex-col gap-10">
        <div className="flex flex-col gap-10">
          <h1 className="title text-4xl text-center">Book session</h1>
          <p className="text-center">
            Fill out the form below to book a session with us.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="John Doe"
            className="input"
          />
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="name">Email Address *</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="john.doe@example.com"
            className="input"
          />
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="name">Phone Number</label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="+27 612 345 678"
            className="input"
          />
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="name">Number of Guests</label>
          <select name="guests" id="guests" className="select">
            <option disabled>--select-number-of-guests--</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="name">Date</label>
          <input
            type="datetime-local"
            id="date"
            name="date"
            value="2018-07-22"
            min="2018-01-01"
            max="2018-12-31"
            className="input"
          />
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="name">Duration</label>
          <select name="duration" id="duration" className="select">
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
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-center text-sm text-gray-500">
            By clicking "Book", you agree to our terms and conditions
          </p>
          <button className="btn btn-dark btn-full">Book</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
