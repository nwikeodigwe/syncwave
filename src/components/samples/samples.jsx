import React from "react";
import Player from "./player";

const sampleWorks = [
  {
    src: "https://placehold.co/500x300",
    name: "name 1",
  },
  {
    src: "https://placehold.co/500x300",
    name: "name 2",
  },
  {
    src: "https://placehold.co/500x300",
    name: "name 3",
  },
  {
    src: "https://placehold.co/500x300",
    name: "name 1",
  },
  {
    src: "https://placehold.co/500x300",
    name: "name 2",
  },
  {
    src: "https://placehold.co/500x300",
    name: "name 3",
  },
];

const Samples = () => {
  const samples = sampleWorks.map((sample, index) => (
    <Player key={index} sample={sample} />
  ));
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 my-16 gap-4 md:gap-1">
      {samples}
    </div>
  );
};

export default Samples;
