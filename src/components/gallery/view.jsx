import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const galleryImages = [
  {
    src: "https://placehold.co/500x300",
    alt: "Alt 1",
  },
  {
    src: "https://placehold.co/500x300",
    alt: "Alt 2",
  },
  {
    src: "https://placehold.co/500x300",
    alt: "Alt 3",
  },
];

const View = () => {
  const images = galleryImages.map((image, index) => (
    <img key={index} src={image.src} alt={image.alt} />
  ));
  return (
    <section className="gallery relative">
      <div className="skyline"></div>
      <motion.div
        className="container flex flex-col gap-8 px-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <h1>
          <span>Gallery</span>
        </h1>
        <p className="text-center">
          Explore the exciting world of GMB Recording Studio, known as the
          top-rated recording studio in Capetown, through our engaging photo
          gallery.
        </p>
        <div className="gallery-images">{images}</div>
        <h2 className="text-2xl font-bungee mt-16 text-primary">
          Unique Features of MIX Recording Studio
        </h2>
        <ul className="list-disc">
          <li>
            Soundproofed Facilities: Each of our four studio rooms is
            meticulously soundproofed and isolated, ensuring the perfect
            environment for creativity and concentration.
          </li>
          <li>
            Regularly Maintained Equipment: We take pride in our equipment,
            which is checked, maintained, and cleaned regularly for optimal
            performance.
          </li>
          <li>
            Privacy and Comfort: Emphasizing privacy, our policy ensures that
            only the client and their invited guests can access the studio room
            during sessions.
          </li>
          <li>
            Relaxation Spaces: Our studio is equipped with a kitchenette
            offering complimentary coffee and tea, and a vending machine with
            snacks is available in the smoking lobby for those much-needed
            breaks.
          </li>
        </ul>
        <p>
          At MIX Recording Studio, nestled in the heart of Los Angeles, we're
          always excited to welcome new artists, whether you're just starting
          out or already a well-known name in the industry. As the top-rated
          recording studio in LA, we offer a space where both budding talents
          and established artists can thrive, especially in genres like hip hop,
          R&B, and pop. Our team of skilled music producers and sound engineers
          is dedicated to bringing out the best in every artist, helping you
          perfect your sound through expert vocal recording, mixing, and
          mastering. We take pride in being a hub where music artists of all
          levels can collaborate, create, and achieve their musical dreams. So,
          whether you're laying down your first track or your latest hit, MIX
          Recording Studio is where your musical journey takes flight.
        </p>
      </motion.div>
    </section>
  );
};

export default View;
