import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TextOpener = () => {
  const mainRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline(
      {
        scrollTrigger: {
          trigger: mainRef.current,
          start: "50% 50%",
          end: "100% 50%",
          scrub: true,
          pin: true,
          // markers: true,
        },
      },
      { scope: mainRef }
    );

    tl.to(
      "#top",
      {
        top: "-60%",
        ease: "none",
        opacity: 0,
        duration: 1,
      },
      "a"
    );

    tl.to(
      "#bottom",
      {
        bottom: "-60%",
        ease: "none",
        opacity: 0,
        duration: 1,
      },
      "a"
    );
  });
  return (
    <div className="w-full min-h-screen ">
      <div ref={mainRef} id="main" className="min-h-screen w-full relative">
        <div
          id="top"
          className="bg-[#fff] h-[50%] w-full absolute  top-0 z-10  overflow-hidden"
        >
          <h1 className="text-[#000] text-[13vw] font-bold  font-[Syne] ">
            {" "}
            PROJECTS
          </h1>
        </div>

        <div
          id="bottom"
          className="bg-[#fff] h-[50%] w-full absolute bottom-0 z-999 overflow-hidden "
        >
          {" "}
          <h1 className="text-[#000] text-[13vw] font-bold  font-[Syne]  ">
            {" "}
            PROJECTS
          </h1>
        </div>

        <section className="w-full h-full bg-[#000] flex flex-col items-center justify-center text-center gap-8" >
        <p className="text-[#fff] text-[4vw] w-3/4 font-bold font-[Syne] "    >"From early<span className="text-[#ec4e39]"> mornings</span> sleepless <span className="text-[#ec4e39]">nights</span>  to silent launches — these are the projects that built me."</p>

        
            </section>
      </div>
    </div>
  );
};

export default TextOpener;
