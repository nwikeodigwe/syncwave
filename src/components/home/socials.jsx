import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { AiFillTikTok } from "react-icons/ai";
import { BsSpotify } from "react-icons/bs";
import { SiApplemusic } from "react-icons/si";

const Socials = () => {
  return (
    <div className="socials">
      <ul className="socials-list">
        <li>
          <a
            href=""
            className="text-facebook hover:text-primary hover:scale-140"
          >
            <FaFacebookSquare />
          </a>
        </li>
        <li>
          <a href="" className="text-instagram hover:text-primary">
            <FaSquareInstagram />
          </a>
        </li>
        <li>
          <a href="" className="text-twitter hover:text-primary">
            <FaTwitterSquare />
          </a>
        </li>
        <li>
          <a href="" className="text-youtube hover:text-primary">
            <IoLogoYoutube />
          </a>
        </li>
        <li>
          <a href="" className="text-tiktok hover:text-primary">
            <AiFillTikTok />
          </a>
        </li>
        <li>
          <a href="" className="text-spotify hover:text-primary/80">
            <BsSpotify />
          </a>
        </li>
        <li>
          <a href="" className="text-applemusic hover:text-primary/80">
            <SiApplemusic />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
