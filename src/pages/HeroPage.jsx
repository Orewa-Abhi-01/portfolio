import React from "react";
import Navbar from "../components/Navbar";
import ZoomScroll from "../components/ZoomScroll";

const HeroPage = () => {
  return (
    <div className="hero-page overflow-hidden" >
      <section>
        {/* <h1>Hero Page</h1> */}

        <ZoomScroll />
      </section>
    </div>
  );
};

export default HeroPage;
