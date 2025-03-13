// Hero.jsx
import Socials from "./socials";
import { Link } from "react-router";

export default function Hero() {
  return (
    <section className="hero relative h-screen w-full">
      <div className="absolute h-full w-full inset-0 bg-linear-to-br from-primary to-primary/50"></div>
      <div className="container mx-auto">
        <div className="container flex justify-between items-center max-w-screen-xl px-10 mx-auto mt-10 md:mt-20">
          <div className="flex flex-col gap-10 md:gap-5 w-full md:w-4/7 z-10 text-white text-center md:text-left">
            <h1 className="font-bungee font-bold text-4xl md:text-5xl  uppercase leading-tight drop-shadow-lg">
              Do you want quality sound{" "}
              <span className="text-secondary">production</span>?
            </h1>
            <p className="font-bold md:text-xl leading-tight">
              GMB Syncwave studio is one of the top capetown recording studios,
              made for artists by artists.{" "}
            </p>
            <Socials />
            <div>
              <Link to="/booking">
                <button className="hover:-translate-y-1 transition-all duration-300 border-2 border-white text-white font-bold py-2 px-5 hover:bg-gray/90 shadow-lg rounded-sm md:text-xl">
                  Book now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
