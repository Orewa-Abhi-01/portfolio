import React, { useRef } from "react";

const SoloMarquee = () => {
  const marqueeRef = useRef(null);

  return (
    <div
      ref={marqueeRef}
      className="marquee flex items-center justify-center gap-8 uppercase  min-w-full text-[#fff]"
    >
      <h1 className="text-[6.5vw] font-[Syne] font-bold ">
        Dream <span className="dot" /> Design <span className="dot" /> Deliver
      </h1>
    </div>
  );
};

const Marquee = () => {
  return (
    <div className="move">
      <div className=" marquee flex items-center justify-center    min-w-full gap-16">
        {Array.from({ length: 6 }).map((_,idx) => {
          return <SoloMarquee key={`marquee-item-${idx}`} />;
        })}
      </div>
    </div>
  );
};

export default Marquee;
