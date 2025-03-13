import React from "react";
import { Link } from "react-router";

const PhotoVideo = () => {
  return (
    <div className="grid grid-cols-5 text-sm">
      <div className="col-span-5 flex flex-col items-center justify-center p-5 bg-primary text-white">
        <h1 className="uppercase text-xl md:text-2xl  font-bold font-bungee">
          Photo/Video
        </h1>
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
          to="/bookings/photo_video"
          className="btn btn-transparent text-xl"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default PhotoVideo;
