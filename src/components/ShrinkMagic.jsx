import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ShrinkMagic = () => {
  const imgRef = useRef(null);
  const titleRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const elems = imgRef.current.querySelectorAll(".elem");

    elems.forEach((elem) => {
      let image = elem.querySelector("img");
      let xTransform = gsap.utils.random(-100, 100);

      let tl = gsap.timeline();

      tl.set(
        image,
        {
          transformOrigin: xTransform < 0 ? "left center" : "right center",
        },
        "a"
      ).to(
        image,
        {
          scale: 0,
          ease: "none",
          scrollTrigger: {
            trigger: image,
            start: "top top",
            end: "bottom top",
            scrub: true,
            // markers: true,
          },
        },
        "a"
      );
    });

    gsap.to(titleRef.current, {
      opacity: 1,
      scrollTrigger: {
        trigger: imgRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        // markers: true,
      },
    });
  });

  return (
    <div className="w-full min-h-screen bg-zinc-950  border-b-2 border-[#c8b5b2]">
     <div
  ref={imgRef}
  className="img-anim grid grid-cols-4 grid-rows-5 gap-4 z-9999"
>
  <div
    className="elem object-cover cursor-pointer col-span-1 row-span-1"
    style={{ "--r": 1, "--c": 1 }}
  >
    <img
      src="https://i.pinimg.com/736x/69/e2/b3/69e2b3be6001c33141a95557a5f2cbcd.jpg"
      alt="img2"
    />
  </div>
  <div
    className="elem object-cover cursor-pointer col-span-1 row-span-1"
    style={{ "--r": 1, "--c": 2 }}
  >
    <img
      src="https://i.pinimg.com/736x/ca/e1/b4/cae1b4f6b223fe5a7bb712b680cffa67.jpg"
      alt="img3"
    />
  </div>
  <div
    className="elem object-cover cursor-pointer col-span-1 row-span-1"
    style={{ "--r": 1, "--c": 3 }}
  >
    <img
      src="https://i.pinimg.com/736x/fc/da/ff/fcdaff4d3f30005e462d0d3c31cfb691.jpg"
      alt="img4"
    />
  </div>
  <div
    className="elem object-cover cursor-pointer col-span-1 row-span-1"
    style={{ "--r": 1, "--c": 4 }}
  >
    <img
      src="https://i.pinimg.com/736x/3f/f5/f9/3ff5f96fafaf0dacf5e6a8e69072f2dc.jpg"
      alt="img5"
    />
  </div>
  <div
    className="elem object-cover cursor-pointer col-span-1 row-span-1"
    style={{ "--r": 2, "--c": 1 }}
  >
    <img
      src="https://cdn.mos.cms.futurecdn.net/252USFwhUaVeFm664hWzFA.jpg"
      alt="img6"
    />
  </div>
  <div
    className="elem object-cover cursor-pointer col-span-1 row-span-1"
    style={{ "--r": 2, "--c": 2 }}
  >
    <img
      src="https://cdn.dribbble.com/users/3490038/screenshots/13820034/motion_logo_dribbble_dark2_4x.png"
      alt="img7"
    />
  </div>
  <div
    className="elem object-cover cursor-pointer col-span-1 row-span-1"
    style={{ "--r": 2, "--c": 3 }}
  >
    <img
      src="https://tse3.mm.bing.net/th?id=OIP.KtXfKxJBjleQ_u2qDfYHXgHaD4&pid=Api&P=0&h=180"
      alt="img8"
    />
  </div>
  <div
    className="elem object-cover cursor-pointer col-span-1 row-span-1"
    style={{ "--r": 2, "--c": 4 }}
  >
    <img
      src="https://i.pinimg.com/736x/76/42/c0/7642c0f576da8830ae2c400e08f2407a.jpg"
      alt="img9"
    />
  </div>
  <div
    className="elem object-cover cursor-pointer col-span-1 row-span-1"
    style={{ "--r": 3, "--c": 1 }}
  >
    <img
      src="https://i.pinimg.com/736x/76/42/c0/7642c0f576da8830ae2c400e08f2407a.jpg"
      alt="img10"
    />
  </div>
  <div
    className="elem object-cover cursor-pointer col-span-1 row-span-1"
    style={{ "--r": 3, "--c": 2 }}
  >
    <img
      src="https://i.pinimg.com/736x/69/e2/b3/69e2b3be6001c33141a95557a5f2cbcd.jpg"
      alt="img11"
    />
  </div>
  <div
    className="elem object-cover cursor-pointer col-span-1 row-span-1"
    style={{ "--r": 3, "--c": 3 }}
  >
    <img
      src="https://i.pinimg.com/736x/ca/e1/b4/cae1b4f6b223fe5a7bb712b680cffa67.jpg"
      alt="img12"
    />
  </div>
  <div
    className="elem object-cover cursor-pointer col-span-1 row-span-1"
    style={{ "--r": 4, "--c": 1 }}
  >
    <img
      src="https://i.pinimg.com/736x/fc/da/ff/fcdaff4d3f30005e462d0d3c31cfb691.jpg"
      alt="img13"
    />
  </div>
  <div
    className="elem object-cover cursor-pointer col-span-1 row-span-1"
    style={{ "--r": 4, "--c": 2 }}
  >
    <img
      src="https://i.pinimg.com/736x/3f/f5/f9/3ff5f96fafaf0dacf5e6a8e69072f2dc.jpg"
      alt="img14"
    />
  </div>
  <div
    className="elem object-cover cursor-pointer col-span-1 row-span-1"
    style={{ "--r": 4, "--c": 3 }}
  >
    <img
      src="https://cdn.mos.cms.futurecdn.net/252USFwhUaVeFm664hWzFA.jpg"
      alt="img15"
    />
  </div>
  <div
    className="elem object-cover cursor-pointer col-span-1 row-span-1"
    style={{ "--r": 5, "--c": 1 }}
  >
    <img
      src="https://cdn.dribbble.com/users/3490038/screenshots/13820034/motion_logo_dribbble_dark2_4x.png"
      alt="img16"
    />
  </div>
  <div
    className="elem object-cover cursor-pointer col-span-1 row-span-1"
    style={{ "--r": 5, "--c": 2 }}
  >
    <img
      src="https://tse3.mm.bing.net/th?id=OIP.KtXfKxJBjleQ_u2qDfYHXgHaD4&pid=Api&P=0&h=180"
      alt="img17"
    />
  </div>
  <div
    className="elem object-cover cursor-pointer col-span-1 row-span-1"
    style={{ "--r": 5, "--c": 3 }}
  >
    <img
      src="https://i.pinimg.com/736x/76/42/c0/7642c0f576da8830ae2c400e08f2407a.jpg"
      alt="img18"
    />
  </div>
  <div
    className="elem object-cover cursor-pointer col-span-1 row-span-1"
    style={{ "--r": 5, "--c": 4 }}
  >
    <img
      src="https://i.pinimg.com/736x/69/e2/b3/69e2b3be6001c33141a95557a5f2cbcd.jpg"
      alt="img19"
    />
  </div>
</div>

    </div>
  );
};

export default ShrinkMagic;
