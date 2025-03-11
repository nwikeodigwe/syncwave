import React from "react";

const About = () => {
  return (
    <section className="about mt-20">
      <div className="container max-w-screen-lg mx-auto">
        <div className="grid grid-cols-5 gap-5">
          <div className="flex flex-col col-span-3 gap-16 leading-tight">
            <h1 className="title text-4xl font-bold text-primary">About</h1>
            <div className="flex flex-col gap-4">
              <p>
                The Soundcast recording studio is our mixing and tracking hub.
                We pride ourselves on providing a comfortable and creative space
                for any recording session.
              </p>
              <p>
                The Live Room and adjacent ISO booth are treated with wood
                cladding and acoustic panelling to give the room tight, warm and
                controlled acoustics.
              </p>
              <p>
                The room is perfectly suited for live band recordings,
                multi-tracking, post-production and overdubbing instruments and
                voice-overs. We also host and facilitate podcasts and live
                recordings providing audio, video and streaming
              </p>
            </div>
          </div>
          <div className="about-recording ">
            <div className="hover:bg-transparent bg-black/30 transition-all duration-300 backdrop-grayscale hover:backdrop-grayscale-0 h-[350px] w-[350px] rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
