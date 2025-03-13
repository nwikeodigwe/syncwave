import { Link } from "react-router";

const Discount = () => {
  return (
    <section className="discount h-full">
      <div className="container mx-auto px-10">
        <div className="absolute h-full w-full inset-0 bg-radial from-black/10 from-10% to-black backdrop-blur-sm"></div>
        <div className="flex flex-col items-center justify-center gap-10 z-10">
          <h1 className="text-4xl font-bold font-bungee drop-shadow-2xl backdrop-blur-sm text-center">
            Discount and weeknights sessions
          </h1>
          <Link
            to="/bookings"
            className="btn btn-primary btn-lg shadow-2xl hover:scale-105 transition-all duration-300 z-10"
          >
            Explore deals
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Discount;
