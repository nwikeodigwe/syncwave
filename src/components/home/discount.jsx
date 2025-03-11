import { Link } from "react-router";

const Discount = () => {
  return (
    <section className="discount">
      <div className="overlay"></div>
      <div className="flex flex-col items-center gap-10 z-10">
        <h1 className="text-4xl font-bold font-bungee">
          Discount and weeknights sessions
        </h1>
        <Link to="/bookings" className="btn btn-primary btn-lg">
          Explore deals
        </Link>
      </div>
    </section>
  );
};

export default Discount;
