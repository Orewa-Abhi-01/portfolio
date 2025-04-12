import React, { useState } from "react";
import useMousePosition from "../hooks/useMousePosition";
import { motion } from "motion/react"

const MaskCursor = () => {
    const [isHovered, setIsHovered] = useState(false);
  //  const [isFullScreen, setIsFullScreen] = useState(false);

    const { x, y } = useMousePosition();
    const size = isHovered ? 450 :  50;


  return (
    <div className="container">
      {/* <p className="text-2xl text-[#efefef]"> x:{x}, y:{y}</p> */}
      <motion.div className="mask"
      animate={{
        WebkitMaskPosition:  `${x - size/2 }px ${y - size/2 }px`,
        WebkitMaskSize: `${size}px`,
      }}
      transition={{ ease: "backOut", duration: 0.5 }}
     
      >
        
        <h3 onMouseEnter={() => setIsHovered(true)} onMouseLeave={() =>  setIsHovered(false)} className="w-[1000px] p-[40px] text-[2.5rem] font-bold leading-14">
          A visual designer - with skills that hven't been replaced by A.I
          (yet) - making good shit only if the paycheck is equally good.
        </h3>
      </motion.div>
      <div className="mask-body">
        <h3 className="w-[1000px] p-[40px]  text-[2.5rem] font-bold leading-14">
          I'm a <span className="text-[#ec4e39]">selectively skilled</span> product designer with strong
          focus on producing high quality & impactful digital experience.
        </h3>
      </div>
    </div>
  );
};

export default MaskCursor;


