import { Link } from "react-router";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-image"></div>
        <div className="hero-content">
          <h1 className="font-bungee">
            Do you want quality sound <span>production</span>?
          </h1>
          <p>
            GMB Syncwave studio is one of the top capetown recording studios,
            made for artists by artists.
          </p>
          <Link to="/bookings" className="call-to-action">
            Book now
          </Link>
        </div>
      </div>
    </section>
  );
}
