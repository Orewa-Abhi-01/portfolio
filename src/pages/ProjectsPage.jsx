import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const ProjectsPage = () => {
  const stickyCardsRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Get all cards and their images
    const cards = document.querySelectorAll(".card");
    const images = document.querySelectorAll(".card img");
    const totalCards = cards.length;

    // Set initial cards positions
    gsap.set(cards[0], { y: "0%", scale: 1, rotation: 0 });
    gsap.set(images[0], { scale: 1 });

    // Set initial cards positions for other cards
    for (let i = 1; i < totalCards; i++) {
      gsap.set(cards[i], { y: "100%", scale: 1, rotation: 0 });
      gsap.set(images[i], { scale: 1 });
    }

    //   timeline setup for cards
    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: " .sticky-cards",
        start: "top top",
        // start: `top+=${maskHeight} top`,
        end: `+=${window.innerHeight * (totalCards - 1)}`,
        pin: true,
        scrub: 0.5,

        //new addition
        // markers: true,
        snap: 1 / (totalCards - 1),
        toggleActions: "play none none reverse",
      },
    });

    for (let i = 0; i < totalCards - 1; i++) {
      const currentCard = cards[i];
      const currentImage = images[i];
      const nextCard = cards[i + 1];
      const position = i;

      scrollTimeline.to(
        currentCard,

        {
          scale: 1.5,
          duration: 0.5,
          ease: "none",

          //new addition
          opacity: 0.8,
          x: 100,
        },
        position
      );

      scrollTimeline.to(
        currentImage,

        {
          scale: 1.5,
          duration: 0.5,
          ease: "none",

          //new addition
          filter: "blur(5px)", // Add blur effect
          rotationY: 180, // Flip image
        },
        position
      );

      //new addition
      scrollTimeline.to(
        nextCard,

        {
          y: "0%",
          scale: 1,
          rotation: 0,
          duration: 0.5,
          ease: "none",
        },
        position + 1
      );
    }

    return () => {
      scrollTimeline.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  });
  return (
   
      <div ref={stickyCardsRef} className=" sticky-cards w-full h-screen">
        <div className="cards-container  w-[100%] h-[80%] flex items-center justify-center">
          <div
            className="card"
            onClick={() => {
              window.open("https://online-drawing-tool.vercel.app/", "_blank");
              console.log("clicked");
            }}
          >
            <div className="tag">
              <p>Project 1</p>
              <p className="project-title">Online Drawing Tool</p>
            </div>
            <img
              // src="https://i.pinimg.com/736x/68/f6/f3/68f6f3b602ddc41fed89385b6a90031d.jpg"
              src="https://res-console.cloudinary.com/dpbevw9e5/media_explorer_thumbnails/069c9f72a99a74e67651c7de2e7b22bc/detailed"
              alt="card-1"
              className="h-[400px] w-[600px] object-cover"
            />
          </div>
          <div className="card">
            <div className="tag">
              <p>Project 2</p>
              <p className="project-title">Online Drawing Tool</p>
            </div>
            <img
              src="https://i.pinimg.com/474x/db/f4/ec/dbf4ec8455b702362d06a6e395c37664.jpg"
              alt="card-2"
              className="h-[400px] w-[600px] object-cover"
            />
          </div>
          <div className="card">
            <div className="tag">
              <p>Project 3</p>
              <p className="project-title">Image Enhancer App</p>
            </div>
            <img
              src="https://i.pinimg.com/474x/a9/f8/e8/a9f8e8d5c66ed98072dc553178da5f49.jpg"
              alt="card-3"
              className="h-[400px] w-[600px] object-cover"
            />
          </div>
          <div className="card">
            <div className="tag">
              <p>Project 4</p>
              <p className="project-title">Summarizer App</p>
            </div>
            <img
              src="https://i.pinimg.com/474x/25/fb/06/25fb06d5570b349259ada948a66871e9.jpg"
              alt="card-4"
              className="h-[400px] w-[600px] object-cover"
            />
          </div>
          <div className="card">
            <div className="tag">
              <p>Project 5</p>
              <p className="project-title">Realtime Chat App</p>
            </div>
            <img
              src="https://i.pinimg.com/736x/5e/4d/88/5e4d8897b6400a93cc989ed2e569eaf8.jpg"
              alt="card-5"
              className="h-[400px] w-[600px] object-cover"
            />
          </div>
          <div className="card">
            <div className="tag">
              <p>Project 6</p>
              <p className="project-title">Portfolio website</p>
            </div>
            <img
              src="https://i.pinimg.com/736x/35/42/49/35424981374a4f04554fc0ece1060fad.jpg"
              alt="card-6"
              className="h-[400px] w-[600px] object-cover"
            />
          </div>
        </div>
      </div>
     
   
  );
};

export default ProjectsPage;
