import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ZoomScroll = () => {
  const zoomRef = useRef(null);
  const zoomContainerRef = useRef(null);
  const h1Ref = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: zoomRef.current,
        start: "top top",
        end: "160% top",
        scrub: true,
        // markers: true,
        pin: true,
      },
    });

    tl.to(
      zoomContainerRef.current,
      {
        scale: 5,
        ease: "power2.out",
        duration: 1,
      },
      "a"
    );

    tl.to(
      h1Ref.current,
      {
        ease: "power2.out",
        x: "40%",
        scale: 0.8,
        y: "-2%",
      },
      "b"
    );
  });

  return (
    <div className="hero-section" ref={zoomRef}>
      <div className="zoom-container">
        <div className="abs-hidden"></div>
        <div className="center-div">
          <div className="zoom-div" ref={zoomContainerRef}>
            <div className="zoom-content">
              <video className="video" autoPlay loop muted playsInline>
                <source
                  src="https://framerusercontent.com/assets/kC7KCNzLJH9lVQDNSnjFOxQsU.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        <div className="my-name">
          <div className="name-container  gap-2">
            <div className="name  " ref={h1Ref}>
              <h1 className="zoom-text  cursor-pointer">
                abhishek<sup></sup>
              </h1>
            </div>

            <div className="my-desc flex flex-col justify-center items-center text-2xl font-bold text-white rounded-lg w-[25%] font-[Syne] p">
              aka Abhi. A Creative <br />{" "}
              <span className="text-[#ec4e39] animate-bounce">Frontend Developer </span> from
              Chandigarh, India.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZoomScroll;

