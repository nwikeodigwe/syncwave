import React from "react";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="flex flex-col gap-4 max-w-[70ch] relative pt-16 pb-42 md:py-16">
          <h1 className="title text-4xl font-bold text-white mb-10">About</h1>
          <p>
            The gmb syncwave recording studio is our mixing and tracking hub. We
            pride ourselves on providing a comfortable and creative space for
            any recording session.
          </p>
          <p>
            The Live Room and adjacent ISO booth are treated with wood cladding
            and acoustic panelling to give the room tight, warm and controlled
            acoustics.
          </p>
          <p>
            The room is perfectly suited for live band recordings,
            multi-tracking, post-production and overdubbing instruments and
            voice-overs. We also host and facilitate podcasts and live
            recordings providing audio, video and streaming
          </p>
        </div>
        <img src="./images/studio.jpg" alt="about-studio" />
      </div>
    </section>
  );
};

export default About;
