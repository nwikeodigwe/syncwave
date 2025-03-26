import { Link } from "react-router";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const Discount = () => {
  return (
    <section className="discount">
      <div className="discount-image"></div>
      <div className="container">
        <motion.div
          className="flex flex-col items-center justify-center gap-10 z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <h1 className="text-5xl font-bold font-bungee backdrop-blur-sm text-center">
            Discount and weeknights sessions
          </h1>
          <Link
            to="/bookings"
            className="w-[200px] py-5 text-white border-2 border-chrysler-blue rounded-sm text-center uppercase font-thin text-lg hover:-translate-y-1 transition-all duration-300 z-10"
          >
            Explore deals
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Discount;
