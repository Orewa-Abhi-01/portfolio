import React from "react";
import TextScrollReveal from "../components/TextScrollReveal";
import Marquee from "../components/Marquee";

const AboutPage = () => {
  return (
    <div >
      <section >
        <div className="marqueee   bg-[#ec4e39]">
        <Marquee />
        </div>
        <TextScrollReveal />
        
      </section>
    </div>
  );
};

export default AboutPage;
