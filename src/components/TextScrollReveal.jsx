// import { useRef } from "react";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { gsap } from "gsap";

// const TextScrollReveal = () => {
//   const textRevealRef = useRef(null);
//   const h2Ref = useRef(null);

//   useGSAP(()=>{
//     gsap.registerPlugin(ScrollTrigger);

//     const h2Element = h2Ref.current;
//     let clutter = " ";
//     h2Element.textContent.split("").forEach((char)=>{
//         clutter += `<span class="char">${char}</span>`;

//         h2Element.innerHTML = clutter;
//         console.log(char);
//         console.log(h2Element);
//     });

//     const tl = gsap.timeline({
//         scrollTrigger: {
//             trigger: textRevealRef.current,
//             start: "top top",
//             end:"bottom top",
//             markers: true,
//             scrub:-5,
//             pin: true,

//         }
//     },{ scope: textRevealRef});

//     tl.to(".text-area .char",{
//         stagger: 0.2,
//         color: "#fff",
//     })

//   })
//   return (
//     <div id="text-reveal">
//       <div className="one"></div>
//       <div className="two"
//        ref={textRevealRef}
//        >
//         <div className ="text-area">
//           <h2 className="text-center text-[#dadada69] text-[3vw] flex-wrap overflow-hidden." ref={h2Ref} >
//             Text Reveal Animation <br /> This project is a pixel-perfect clone
//             of Gentlerain.ai, a visually stunning and user-centric website that
//             earned recognition on Awwwards for its design excellence. The goal
//             of this project is to recreate the aesthetic, functionality, and
//             interactivity of the original site, serving as a learning exercise
//             in advanced web development and design principles.
//           </h2>
//         </div>
//       </div>
//       <div className="three"></div>
//     </div>
//   );
// };

// export default TextScrollReveal;

import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// import MaskCursor from "./MaskCursor";

const TextScrollReveal = () => {
  const textRevealRef = useRef(null);
  const h2Ref = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const h2Elem = h2Ref.current;
    let clutter = " ";

    h2Elem.textContent.split("").forEach((char) => {
      clutter += `<span class="char">${char}</span>`;

      h2Elem.innerHTML = clutter;
    });

    const tl = gsap.timeline(
      {
        scrollTrigger: {
          trigger: textRevealRef.current,
          start: "top 90%",
          end: "bottom 20%",
          // markers: true,
          scrub: -5,
          duration: 2,
        },
      },
      { scope: textRevealRef }
    );

    tl.to(" .text-area .char", {
      stagger: 0.2,
      color: "#fff",
    });
  });

  return (
    <div id="text-reveal">
      {/* <div className="one"></div> */}
      <div className="two" ref={textRevealRef}>
        <div className="text-area">
          <h2
            className="text-center text-[#dadada00] text-[3vw] flex-wrap overflow-hidden"
            ref={h2Ref}
          >
            Welcome to my portfolio. I am Kumar Abhishek, a Front-End Developer
            and UI/UX Designer dedicated to creating engaging digital
            experiences. With expertise in React.js, Next.js, and JavaScript, I
            develop dynamic and responsive web applications that meet user needs
            and business goals.
             {/* I utilize modern tools such as Tailwind CSS and
            GSAP, and I have experience in building real-time applications,
            including chat apps and collaborative tools, ensuring optimal
            performance and user interaction. My interest in design extends to
            3D animations using Three.js, enabling me to push the boundaries of
            web capabilities. I value collaboration and invite you to connect
            with me to explore potential opportunities for creating exceptional
            digital solutions together. */}
            {/* Welcome to my portfolio. My name is Kumar Abhishek, and I am a
            Front-End Developer and UI/UX Designer committed to transforming
            concepts into engaging digital experiences. I possess a solid
            foundation in React.js, Next.js, and JavaScript, enabling me to
            develop dynamic and responsive web applications that effectively
            engage users and meet business objectives. I have a strong focus on
            innovation and creativity, utilizing contemporary tools such as
            Tailwind CSS and GSAP to bring projects to fruition. My experience
            encompasses the development of real-time applications, including
            chat applications and collaborative online tools, all while ensuring
            optimal performance and seamless user interactions. Additionally, I
            have a keen interest in design and functionality, often
            experimenting with 3D animations using Three.js to push the limits
            of web capabilities. I believe in the power of collaboration and
            remain open to partnering with others to create exceptional digital
            solutions. I invite you to connect with me so that we may explore
            opportunities for collaboration. */}
          </h2>
        </div>
        
      </div>
      {/* <MaskCursor /> */}
      {/* <div className="three"></div> */}
    </div>
  );
};

export default TextScrollReveal;
