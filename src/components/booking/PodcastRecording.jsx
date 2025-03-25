import React from "react";
import { Link } from "react-router";

const PodcastRecording = () => {
  return (
    <div className="grid grid-cols-5 text-sm">
      <div className="col-span-5 flex flex-col items-center justify-center p-5 text-white pricing-gradient">
        <h1 className="uppercase text-xl md:text-2xl font-bold font-bungee">
          Podcast Recording
        </h1>
        <p className="uppercase font-thin">Hourly Rate</p>
        <p className="uppercase font-thin">2 hr minimum, engineer included</p>
      </div>
      <div className="col-span-5 grid-cols-5 hidden md:grid">
        <div className="col-span-2 border-b-1 border-dashed border-gray-500"></div>
        <div className="flex flex-col items-center justify-center p-5 border-b-1 border-dashed border-gray-500">
          <h2>No engineer</h2>
          <p>(3hr minimum)</p>
        </div>
        <div className="flex flex-col items-center justify-center p-5 border-b-1 border-dashed border-gray-500">
          <h2 className="text-center">w Advanced Engineer</h2>
          <p>(2 hr minimum)</p>
        </div>
        <div className="flex flex-col items-center justify-center p-5 border-b-1 border-dashed border-gray-500">
          <h2>w/ Elite Engineer</h2>
          <p>(2hr minimum)</p>
        </div>
      </div>

      <div className="flex items-center col-span-2 border-b-1 border-dashed border-gray-500">
        <p className="font-bold">Standard Rate</p>
      </div>
      <div className="flex flex-col items-center justify-center p-5 border-b-1 border-dashed border-gray-500">
        <p className="font-bold">R1,000</p>
      </div>
      <div className="flex flex-col items-center justify-center p-5 border-b-1 border-dashed border-gray-500">
        <p className="font-bold">R1,500</p>
      </div>
      <div className="flex flex-col items-center justify-center p-5 border-b-1 border-dashed border-gray-500">
        <p className="font-bold">R1,700</p>
      </div>

      <div className="flex items-center col-span-2 border-b-1 border-dashed border-gray-500">
        <p>4hr+ (Mon-Wed only)</p>
      </div>
      <div className="flex flex-col items-center justify-center p-5 border-b-1 border-dashed border-gray-500">
        <p>R1,000</p>
      </div>
      <div className="flex flex-col items-center justify-center p-5 border-b-1 border-dashed border-gray-500">
        <p>R1,500</p>
      </div>
      <div className="flex flex-col items-center justify-center p-5 border-b-1 border-dashed border-gray-500">
        <p>R1,700</p>
      </div>

      <div className="flex items-center col-span-2 border-b-1 border-dashed border-gray-500">
        <p>6hr+ (Thu-Sun only)</p>
      </div>
      <div className="flex flex-col items-center justify-center p-5 border-b-1 border-dashed border-gray-500">
        <p>R1,000</p>
      </div>
      <div className="flex flex-col items-center justify-center p-5 border-b-1 border-dashed border-gray-500">
        <p>R1,500</p>
      </div>
      <div className="flex flex-col items-center justify-center p-5 border-b-1 border-dashed border-gray-500">
        <p>R1,700</p>
      </div>

      <div className="flex items-center col-span-2 border-b-1 border-dashed border-gray-500">
        <p>9hr block (Mon-Wed only)</p>
        <p>12am-9am</p>
      </div>
      <div className="flex flex-col items-center justify-center p-5 border-b-1 border-dashed border-gray-500">
        <p>R1,000</p>
      </div>
      <div className="flex flex-col items-center justify-center p-5 border-b-1 border-dashed border-gray-500">
        <p>R1,500</p>
      </div>
      <div className="flex flex-col items-center justify-center p-5 border-b-1 border-dashed border-gray-500">
        <p>R1,700</p>
      </div>

      <div className="flex items-center col-span-2 border-b-1 border-dashed border-gray-500">
        <p>9hr block (Mon-Wed only)</p>
        <p>12am-9am</p>
      </div>
      <div className="flex flex-col items-center justify-center p-5 border-b-1 border-dashed border-gray-500">
        <p>R1,000</p>
      </div>
      <div className="flex flex-col items-center justify-center p-5 border-b-1 border-dashed border-gray-500">
        <p>R1,500</p>
      </div>
      <div className="flex flex-col items-center justify-center p-5 border-b-1 border-dashed border-gray-500">
        <p>R1,700</p>
      </div>
      <div className="col-span-5 flex justify-center mt-16">
        <Link className="pricing-button">Book Now</Link>
      </div>
    </div>
  );
};

export default PodcastRecording;
