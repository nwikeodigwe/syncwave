import React from "react";
import SmokeFreeStudio from "./SmokeFreeStudio";
import BulkPackages from "./BulkPackages";
import PodcastRecording from "./PodcastRecording";
import PhotoVideo from "./PhotoVideo";

const Pricing = () => {
  return (
    <div className="flex flex-col gap-16">
      <SmokeFreeStudio />
      <BulkPackages />
      <PodcastRecording />
      <PhotoVideo />
    </div>
  );
};

export default Pricing;
