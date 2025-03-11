import React from "react";
import { FaMusic } from "react-icons/fa";

const Player = ({ sample }) => {
  return (
    <div className="relative shadow-md">
      <div className="flex flex-col items-center justify-center absolute h-full w-full top-0 left-0 bg-black/10 text-white gap-4">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold">Checkpoint Charlie</h2>
          <p>"Tie Me Down"</p>
        </div>
        <div>
          <div className="rounded-full p-4 border-2 border-white">
            <FaMusic className="text-2xl" />
          </div>
        </div>
      </div>
      <img src={sample.src} alt={sample.name} />
    </div>
  );
};

export default Player;
