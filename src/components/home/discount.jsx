import { Link } from "react-router";

const Discount = () => {
  return (
    <section className="discount">
      <div className="discount-image"></div>
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-10 z-10">
          <h1 className="text-5xl font-bold font-bungee backdrop-blur-sm text-center">
            Discount and weeknights sessions
          </h1>
          <Link
            to="/bookings"
            className="w-[200px] py-5 text-white border-2 border-chrysler-blue rounded-sm text-center uppercase font-thin text-lg hover:-translate-y-1 transition-all duration-300 z-10"
          >
            Explore deals
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Discount;
