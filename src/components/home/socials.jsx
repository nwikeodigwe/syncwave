import React from "react";
import { Link } from "react-router";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { AiFillTikTok } from "react-icons/ai";
import { BsSpotify } from "react-icons/bs";
import { SiApplemusic } from "react-icons/si";

const socialLinks = [
  {
    name: "Facebook",
    link: "https://www.facebook.com/gmbsyncwave",
    icon: <FaFacebookSquare className="hover:text-facebook" size={40} />,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/gmbsyncwave",
    icon: <FaSquareInstagram className="hover:text-instagram" size={40} />,
  },
  {
    name: "Twitter",
    link: "https://www.twitter.com/gmbsyncwave",
    icon: <FaTwitterSquare className="hover:text-twitter" size={40} />,
  },
  {
    name: "Youtube",
    link: "https://www.youtube.com/gmbsyncwave",
    icon: <IoLogoYoutube className="hover:text-youtube" size={40} />,
  },
  {
    name: "TikTok",
    link: "https://www.tiktok.com/gmbsyncwave",
    icon: <AiFillTikTok className="hover:text-tiktok" size={40} />,
  },
  {
    name: "Spotify",
    link: "https://www.spotify.com/gmbsyncwave",
    icon: <BsSpotify className="hover:text-spotify" size={40} />,
  },
  {
    name: "Apple Music",
    link: "https://www.apple.com/music/gmbsyncwave",
    icon: <SiApplemusic className="hover:text-applemusic" size={40} />,
  },
];

const Socials = () => {
  const social = socialLinks.map((link, index) => (
    <div key={index}>
      <Link
        className="hover:text-facebook hover:scale-125 transition-all duration-300"
        to={link.link}
      >
        {link.icon}
      </Link>
    </div>
  ));
  return (
    <div className="hidden md:flex  gap-4 justify-between items-center my-3 bg-primary p-4 rounded-sm w-fit ">
      {social}
    </div>
  );
};

export default Socials;
