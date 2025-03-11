import React from "react";
import { Link } from "react-router";

const SmokeFreeStudio = () => {
  return (
    <div className="grid grid-cols-5">
      <div className="col-span-5 flex flex-col items-center justify-center p-5 bg-black text-white">
        <h1 className="uppercase text-2xl font-bold font-bungee">
          Smoking free studio time
        </h1>
        <p>Hourly rate</p>
      </div>
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

      <div className="flex items-center col-span-2 border-b-1 border-dashed border-gray-500">
        <p className="font-bold">Standard Rate</p>
      </div>
      <div className="flex flex-col items-center justify-center p-5 border-b-1 border-dashed border-gray-500">
        <p className="font-bold">$49</p>
      </div>
      <div className="flex flex-col items-center justify-center p-5 border-b-1 border-dashed border-gray-500">
        <p className="font-bold">$79</p>
      </div>
      <div className="flex flex-col items-center justify-center p-5 border-b-1 border-dashed border-gray-500">
        <p className="font-bold">$89</p>
      </div>

      <div className="flex items-center col-span-2 border-b-1 border-dashed border-gray-500">
        <p>4hr+ (Mon-Wed only)</p>
      </div>
      <div className="flex flex-col items-center justify-center p-5 border-b-1 border-dashed border-gray-500">
        <p>$49</p>
      </div>
      <div className="flex flex-col items-center justify-center p-5 border-b-1 border-dashed border-gray-500">
        <p>$79</p>
      </div>
      <div className="flex flex-col items-center justify-center p-5 border-b-1 border-dashed border-gray-500">
        <p>$89</p>
      </div>

      <div className="flex items-center col-span-2 border-b-1 border-dashed border-gray-500">
        <p>6hr+ (Thu-Sun only)</p>
      </div>
      <div className="flex flex-col items-center justify-center p-5 border-b-1 border-dashed border-gray-500">
        <p>$49</p>
      </div>
      <div className="flex flex-col items-center justify-center p-5 border-b-1 border-dashed border-gray-500">
        <p>$79</p>
      </div>
      <div className="flex flex-col items-center justify-center p-5 border-b-1 border-dashed border-gray-500">
        <p>$89</p>
      </div>

      <div className="flex items-center col-span-2 border-b-1 border-dashed border-gray-500">
        <p>9hr block (Mon-Wed only)</p>
        <p>12am-9am</p>
      </div>
      <div className="flex flex-col items-center justify-center p-5 border-b-1 border-dashed border-gray-500">
        <p>$49</p>
      </div>
      <div className="flex flex-col items-center justify-center p-5 border-b-1 border-dashed border-gray-500">
        <p>$79</p>
      </div>
      <div className="flex flex-col items-center justify-center p-5 border-b-1 border-dashed border-gray-500">
        <p>$89</p>
      </div>

      <div className="flex items-center col-span-2 border-b-1 border-dashed border-gray-500">
        <p>9hr block (Mon-Wed only)</p>
        <p>12am-9am</p>
      </div>
      <div className="flex flex-col items-center justify-center p-5 border-b-1 border-dashed border-gray-500">
        <p>$49</p>
      </div>
      <div className="flex flex-col items-center justify-center p-5 border-b-1 border-dashed border-gray-500">
        <p>$79</p>
      </div>
      <div className="flex flex-col items-center justify-center p-5 border-b-1 border-dashed border-gray-500">
        <p>$89</p>
      </div>
      <div className="col-span-5 flex justify-center mt-16">
        <Link
          to="/bookings/smoke_free_studio_time"
          className="btn btn-transparent"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default SmokeFreeStudio;
