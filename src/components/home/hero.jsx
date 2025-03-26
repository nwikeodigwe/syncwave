import { Link } from "react-router";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

export default function Hero() {
  const transition = {
    duration: 1,
    ease: "easeInOut",
  };
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-image"></div>
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
        >
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
        </motion.div>
      </div>
    </section>
  );
}
