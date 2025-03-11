import { useState } from "react";

const Read = () => {
  const [readMore, setReadMore] = useState(true);

  return (
    <div className="read flex flex-col gap-4">
      <div
        className={`flex flex-col gap-4 transition-all duration-300 ${
          readMore && "h-24 overflow-hidden"
        }`}
      >
        <p className="text-clip">
          MIX Recording Studio, the best recording studio in Los Angeles, CA,
          offers a wide range of audio production services, including music and
          podcast production. It is a creative hub where artists of all
          backgrounds unite to craft exceptional sonic experiences.
        </p>
        <p>
          At MIX, we take pride in the diverse range of audio production
          services. From podcasts to different music genres, such as hip-hop,
          pop, rock and EDM, we welcome you, ensuring that every artist's unique
          voice finds its perfect platform. Our team of experienced engineers
          and producers is well-versed in these services, guaranteeing a
          seamless creative journey.
        </p>
        <p>
          Our recording studio in Los Angeles, CA, is committed to nurturing
          talent at all levels. Whether you're just getting started or have
          already mastered the charts, we offer a welcoming environment that
          encourages exploration and growth. For seasoned artists, our top-tier
          technology and expert team will elevate your work, keeping your music
          or podcast ahead of the competition.
        </p>
        <p>
          If you're new to the industry, you may have questions about the
          recording process, equipment, studio environment, and etiquette. We're
          here to help you relax before your recording session. At every step of
          the way, our recording studio in Los Angeles, CA, aims to create a
          relaxed and enjoyable experience.
        </p>
        <p>
          As we prepare for the release, we invite you to join us to get a
          glimpse of behind-the-scenes. Witness the magic happen at our
          recording studio when talented artists, producers, and engineers
          collaborate to create a masterpiece. From the first spark of
          inspiration to the final mixing and mastering touches, we'll walk you
          through the intricate process of turning dreams into reality.
        </p>
        <p>
          MIX Recording Studio, your go-to music and podcast studio in Los
          Angeles, invites you to explore our website and listen to our work to
          get a sense of what we do. We're here to support and elevate your
          vision if you're ready to embark on a creative journey unlike any
          other. Our services are reasonably priced, with studio rental rates
          beginning at $19 per hour. Contact us today to discuss your project
          and join our growing list of recent works.
        </p>
      </div>
      <div className="flex item-center justify-center mt-10">
        <button
          onClick={() => setReadMore(!readMore)}
          className="btn btn-transparent"
        >
          {readMore ? "Read more" : "Read less"}
        </button>
      </div>
    </div>
  );
};

export default Read;
