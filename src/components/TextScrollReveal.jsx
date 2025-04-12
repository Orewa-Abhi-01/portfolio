
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TextScrollReveal = () => {
  const textRevealRef = useRef(null);
  const h2Ref = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const h2Elem = h2Ref.current;

   if(!h2Elem.querySelector(".char")){
    const wrapCharacters = (node) => {
      const childNodes = Array.from(node.childNodes);

      childNodes.forEach((child) => {
        if(child.nodeType === 3){
          const chars = child.textContent.split("");
          const spanChars = chars.map((char) => `<span class="char">${char}</span>`).join("");
          
          const wrapper = document.createElement("span");
          wrapper.innerHTML = spanChars;

          node.replaceChild(wrapper, child);
        } else if (child.nodeType === 1 && child.classList.contains("span-text")) {
          // Preserve span-text node as-is
          return;
        } else {
          wrapCharacters(child); // Recurse for nested elements
        }
      });
    };

    wrapCharacters(h2Elem);
   }

    const tl = gsap.timeline(
      {
        scrollTrigger: {
          trigger: textRevealRef.current,
          start: "top 90%",
          end: "bottom 20%",
          scrub: 1,
        },
      },
      { scope: textRevealRef }
    );

    tl.to(".text-area .char", {
      stagger: 0.01,
      color: "#ffffff",
      duration: 0.5,
    }, "reveal");

    tl.to(".text-area .span-text", {
      color: "#ec4e39",
      duration: 0.5,
    }, "reveal");

  }, []);

  return (
    <div id="text-reveal">
      <div className="two" ref={textRevealRef}>
        <div className="one">
          <h1 className="text-[5vw] font-[Syne] font-bold text-center p-[1em]">
            About Me
          </h1>
        </div>
        <div className="text-area">
          <h2
            className="text-center text-[#dadada00] text-[3vw] flex-wrap overflow-hidden"
            ref={h2Ref}
          >
            Welcome to my <span className="span-text font-bold text-[#ec4e39]">portfolio</span>. I am <span className="span-text font-bold text-[#ec4e39]">Kumar Abhishek </span>, a Creative Front-End Developer
            and UI/UX Designer dedicated to creating engaging digital
            experiences. With expertise in <span className="span-text font-bold text-[#ec4e39]">React.js, Next.js, and JavaScript</span>, I
            develop dynamic and responsive web applications that meet user needs
            and business goals.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default TextScrollReveal;
